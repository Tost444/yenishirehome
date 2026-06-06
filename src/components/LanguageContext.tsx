import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { LangType } from '../types';

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'tr',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangType>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as LangType) || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
