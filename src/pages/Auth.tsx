import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Key, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const Auth = () => {
  const { user, signIn, signUp, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();
  const { toast } = useToast();

  if (user && !isLoading) {
    return <Navigate to="/account" replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const { data, error } = await signIn(email, password);
      if (error) throw error;
      console.log('SignIn Data:', data);
  
      // Test JWT hook
      const token = data?.access_token;
      if (token) {
        console.log('Calling JWT Hook with token:', token.substring(0, 20) + '...');
        try {
          const response = await fetch('https://iboxonhetodcbuvuszcv.supabase.co/functions/v1/jwt-validate', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('JWT Hook Status:', response.status);
          const result = await response.json();
          console.log('JWT Hook Response:', JSON.stringify(result, null, 2));
        } catch (jwtError) {
          console.error('JWT Hook Error:', jwtError);
        }
      } else {
        console.log('No access token found in data');
      }
  
      navigate('/account');
    } catch (error: any) {
      toast({
        title: 'Sign in failed',
        description: error.message || 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await signUp(email, password);
      if (error) throw error;

      if (data.session) {
        navigate('/account');
      } else {
        toast({
          title: 'Check your email',
          description: 'We\'ve sent you a confirmation link to complete your registration.',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Sign up failed',
        description: error.message || 'Please check your information and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ducky-cream flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-ducky-red" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      <main className="container max-w-md mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome to Rubber Ducky</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
  <form onSubmit={handleSignIn} className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input 
          id="email" 
          type="email" 
          placeholder="you@example.com" 
          className="pl-10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="password">Password</Label>
      </div>
      <div className="relative">
        <Key className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input 
          id="password" 
          type="password" 
          className="pl-10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>
    </div>
    
    <Button 
      type="submit" 
      className="w-full"
      variant="red"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing in...
        </>
      ) : (
        'Sign In'
      )}
    </Button>
  </form>
</TabsContent>
              
<TabsContent value="register">
  <form onSubmit={handleSignUp} className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="register-email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input 
          id="register-email" 
          type="email" 
          placeholder="you@example.com" 
          className="pl-10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="register-password">Password</Label>
      <div className="relative">
        <Key className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input 
          id="register-password" 
          type="password" 
          className="pl-10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          autoComplete="new-password"
        />
      </div>
      <p className="text-sm text-gray-500">
        Password must be at least 6 characters
      </p>
    </div>
    
    <Button 
      type="submit" 
      className="w-full"
      variant="yellow"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating account...
        </>
      ) : (
        'Create Account'
      )}
    </Button>
  </form>
</TabsContent>

            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-500">
              {activeTab === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-ducky-red"
                    onClick={() => setActiveTab('register')}
                  >
                    Sign up
                  </Button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-ducky-red"
                    onClick={() => setActiveTab('login')}
                  >
                    Sign in
                  </Button>
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;