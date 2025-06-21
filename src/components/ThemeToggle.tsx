
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="border-amber-300 hover:bg-amber-50 dark:border-slate-600 dark:hover:bg-slate-800"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-blue-400" />
      )}
    </Button>
  );
};

export default ThemeToggle;
