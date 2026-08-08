'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import SocialButton from '../SocialButton/SocialButton';

type Theme = 'light' | 'dark';

const getTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const subscribeToTheme = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener('themechange', onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener('themechange', onStoreChange);
  };
};

const ThemeToggle: React.FC = () => {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('themechange'));
  };

  return (
    <SocialButton
      onClick={toggleTheme}
      ariaLabel="Toggle dark mode"
      id="theme-toggle"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </SocialButton>
  );
};

export default ThemeToggle;
