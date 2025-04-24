import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null; data: Session | null }>;
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null; data: Session | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Inactivity timeout (10 seconds for testing, change to 15 * 60 * 1000 for 15 minutes)
  const INACTIVITY_TIMEOUT = 10000;
  let inactivityTimer: NodeJS.Timeout | null = null;

  const resetInactivityTimer = () => {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    if (session) {
      inactivityTimer = setTimeout(async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
        toast({
          title: 'Session timed out',
          description: 'You have been signed out due to inactivity.',
          variant: 'destructive',
        });
      }, INACTIVITY_TIMEOUT);
    }
  };

  useEffect(() => {
    if (session) resetInactivityTimer();
    const events = ['mousemove', 'keydown', 'click'];
    events.forEach((event) => window.addEventListener(event, resetInactivityTimer));
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [session]);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("🧠 AUTH EVENT:", event);
      console.log("🪪 SESSION:", session);
      setSession(session);
      setUser(session?.user ?? null);

      if (event === 'SIGNED_IN') {
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in.',
        });
      } else if (event === 'SIGNED_OUT') {
        toast({
          title: 'Signed out',
          description: 'You have been signed out.',
        });
      }
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = async (email: string, password: string) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("🔐 SIGN IN RESPONSE:", response);

    if (response.error) {
      throw response.error;
    }

    return {
      data: response.data.session,
      error: response.error,
    };
  };

  const signUp = async (email: string, password: string) => {
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role: 'customer' },
      },
    });

    console.log("🔐 SIGN UP RESPONSE:", response);

    if (response.error) {
      throw response.error;
    }

    return {
      data: response.data.session,
      error: response.error,
    };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}