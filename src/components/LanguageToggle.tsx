
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  isEnglish: boolean;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isEnglish, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="border-amber-300 hover:bg-amber-50 dark:border-slate-600 dark:hover:bg-slate-800"
    >
      {isEnglish ? 'PT' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
