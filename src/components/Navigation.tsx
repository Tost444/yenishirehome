import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { uiTranslations } from '../translations';
import { LangType } from '../types';
import { Logo } from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = uiTranslations[lang];

  const handleLangChange = (newLang: LangType) => {
    setLang(newLang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-[120] bg-black/60 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 mt-2">
              <Logo className="w-full h-full" />
            </div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight hidden sm:block">Yenishirehome</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white font-medium transition-colors">{t.explore}</a>
            <a 
              href="#routes" 
              onClick={() => window.dispatchEvent(new CustomEvent('changeRouteTab', { detail: 'giris' }))}
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              {t.routes}
            </a>
            <a 
              href="#routes" 
              onClick={() => window.dispatchEvent(new CustomEvent('changeRouteTab', { detail: 'aktivite' }))}
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              {t.activities}
            </a>
            <a href="#" className="text-white/80 hover:text-white font-medium transition-colors">{t.about}</a>
            
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-white font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-full transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-bold">{lang.toUpperCase()}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {(['tr', 'en', 'de', 'ru'] as LangType[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          lang === l ? 'bg-emerald-600 outline outline-1 outline-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => {
                const nextLang = lang === 'tr' ? 'en' : lang === 'en' ? 'de' : lang === 'de' ? 'ru' : 'tr';
                setLang(nextLang);
              }}
              className="flex items-center gap-1.5 text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 px-2 py-1.5 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" /> 
              <span className="font-bold text-xs">{lang.toUpperCase()}</span>
            </button>
            <button 
              className="text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 relative shadow-2xl">
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {t.explore}
              </a>
              <a 
                href="#routes" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('changeRouteTab', { detail: 'giris' }));
                }}
                className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {t.routes}
              </a>
              <a 
                href="#routes" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('changeRouteTab', { detail: 'aktivite' }));
                }}
                className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {t.activities}
              </a>
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {t.about}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
