import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { uiTranslations } from '../translations';

export default function Hero() {
  const { lang } = useLanguage();
  const t = uiTranslations[lang];

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-800/80 text-white/90 text-xs sm:text-sm font-medium tracking-wider mb-6 backdrop-blur-sm shadow-xl">
            {t.heroBadge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            {t.heroTitleLine1} <br className="hidden sm:block" /> {t.heroTitleLine2}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto font-light drop-shadow-md px-2">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#routes" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl sm:rounded-full font-medium transition-all w-full sm:w-auto shadow-xl shadow-emerald-900/20 inline-block">
              {t.exploreRoutes}
            </a>
            <button 
              onClick={() => {
                document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' });
                window.dispatchEvent(new CustomEvent('changeRouteTab', { detail: 'aktivite' }));
              }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl sm:rounded-full font-medium transition-all w-full sm:w-auto inline-block shadow-xl text-center"
            >
              {t.seeActivities}
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}
