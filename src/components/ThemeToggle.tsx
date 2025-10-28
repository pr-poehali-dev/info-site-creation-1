import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all"
      aria-label="Переключить тему"
    >
      <Icon
        name="Sun"
        size={20}
        className={`absolute transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
      />
      <Icon
        name="Moon"
        size={20}
        className={`absolute transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`}
      />
    </Button>
  );
}
