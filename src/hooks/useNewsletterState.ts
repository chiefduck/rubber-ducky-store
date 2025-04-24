
import { useState, useEffect } from 'react';
import { NewsletterState } from '@/components/newsletter/types';

export const useNewsletterState = () => {
  const [state, setState] = useState<NewsletterState>(() => {
    const saved = sessionStorage.getItem('newsletter_state');
    return saved ? JSON.parse(saved) : {
      isBannerDismissed: false,
      isModalShown: false
    };
  });

  useEffect(() => {
    sessionStorage.setItem('newsletter_state', JSON.stringify(state));
  }, [state]);

  const dismissBanner = () => setState(prev => ({ ...prev, isBannerDismissed: true }));
  const showModal = () => setState(prev => ({ ...prev, isModalShown: true }));
  const hideModal = () => setState(prev => ({ ...prev, isModalShown: false }));

  return {
    ...state,
    dismissBanner,
    showModal,
    hideModal
  };
};
