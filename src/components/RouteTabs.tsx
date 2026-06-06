import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Mountain, Droplets, TreePine, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { routesData } from '../data';
import { AppRoute, AppRouteLocation } from '../types';
import { useLanguage } from './LanguageContext';
import { uiTranslations } from '../translations';

const routeBackgrounds: Record<string, string> = {
  giris: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2400&auto=format&fit=crop',
  'rota-1': 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2400&auto=format&fit=crop',
  'rota-2': 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=2400&auto=format&fit=crop',
  'rota-3': 'https://images.unsplash.com/photo-1534360273766-931d87e07eb4?q=80&w=2400&auto=format&fit=crop',
  'rota-4': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop',
  aktivite: 'https://images.unsplash.com/photo-1533514207865-9f5b0ad64c99?q=80&w=2400&auto=format&fit=crop',
};

function highlightText(text: string) {
  if (!text) return null;
  const keywords = ['tehlikeli', 'dikkat', 'önemli', "Avrupa'nın", 'en uzun', 'en karanlık', 'endemik', 'tek Selçuklu', 'en büyük', 'en güzel', 'kapsamlı'];
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <span key={i} className="underline decoration-emerald-500 decoration-2 underline-offset-4 font-normal text-white">{part}</span>
        ) : (
          part
        );
      })}
    </>
  );
}

export default function RouteTabs() {
  const { lang } = useLanguage();
  const [activeTabId, setActiveTabId] = useState(routesData[0].id);
  const activeRoute = routesData.find(route => route.id === activeTabId) as AppRoute;

  useEffect(() => {
    const handleTabChange = (e: any) => {
      if (e.detail) {
        setActiveTabId(e.detail);
      }
    };
    window.addEventListener('changeRouteTab', handleTabChange);
    return () => window.removeEventListener('changeRouteTab', handleTabChange);
  }, []);

  return (
    <section id="routes" className="relative py-24 min-h-screen overflow-hidden bg-black">
      {/* Cinematic Scenic Background */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          key={activeTabId}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${routeBackgrounds[activeTabId] || routeBackgrounds.giris})` }}
        />
      </AnimatePresence>
      
      {/* Dark overlay for cinematic text legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs */}
        <div className="flex mb-8 md:mb-16 w-full overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto hide-scrollbar w-full pb-4 -mb-4 lg:justify-center">
            <div className="flex flex-nowrap gap-2 bg-black/40 backdrop-blur-md p-1.5 md:p-2 rounded-[1.5rem] md:rounded-full shadow-2xl border border-white/10 min-w-max">
              {routesData.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setActiveTabId(route.id)}
                  className={`relative flex-shrink-0 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-xl md:rounded-full transition-colors ${
                    activeTabId === route.id ? 'text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {activeTabId === route.id && (
                    <motion.div
                      layoutId="routeTab"
                      className="absolute inset-0 bg-emerald-600 rounded-xl md:rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-serif tracking-wide whitespace-nowrap">{route.label[lang] || route.label.tr}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center mb-10 md:mb-16 bg-black/40 backdrop-blur-lg p-6 md:p-14 rounded-[2rem] shadow-2xl border border-white/10">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-white mb-6 md:mb-8">{activeRoute.title[lang] || activeRoute.title.tr}</h2>
               {activeRoute.intro && activeRoute.intro[lang] && (
                 <div className="space-y-4 md:space-y-6 text-left max-w-4xl mx-auto">
                   {activeRoute.intro[lang].map((para, idx) => (
                     <p key={idx} className="text-base md:text-xl text-white/90 leading-relaxed font-light">
                       {highlightText(para)}
                     </p>
                   ))}
                 </div>
               )}
            </div>

            <div className="space-y-8 md:space-y-16">
              {activeRoute.locations.map((location, idx) => (
                <LocationCard key={location.id} location={location} index={idx} isSummary={activeRoute.id === 'giris'} />
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}

function LocationCard({ location, index, isSummary }: { location: AppRouteLocation, index: number, isSummary: boolean, key?: string | number }) {
  const { lang } = useLanguage();
  const t = uiTranslations[lang];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    setIsDragging(true);
    if (scrollRef.current) {
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const isWikiloc = location.mapLink?.includes('wikiloc');
  const bgImg = location.images && location.images.length > 0 
    ? location.images[0] 
    : 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop';

  const tTitle = location.title[lang] || location.title.tr;
  const tDesc = location.description[lang] || location.description.tr;

  const checkType = () => {
    const titleStr = tTitle.toLowerCase();
    if (titleStr.includes('yayla') || titleStr.includes('plateau')) return { color: 'from-emerald-900', icon: <Mountain className="w-8 h-8" /> };
    if (titleStr.includes('göl') || titleStr.includes('lake') || titleStr.includes('mağara') || titleStr.includes('cave') || titleStr.includes('kanyon') || titleStr.includes('canyon')) return { color: 'from-blue-900', icon: <Droplets className="w-8 h-8" /> };
    return { color: 'from-gray-900', icon: <TreePine className="w-8 h-8" /> };
  };

  const visualStyle = checkType();

  if (isSummary) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="bg-black/40 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 p-6 md:p-10 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/0 via-emerald-900/10 to-emerald-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 md:mb-6 relative z-10">{tTitle}</h3>
        <div className="space-y-3 md:space-y-4 relative z-10">
           {tDesc.map((desc, i) => (
             <p key={i} className="text-white/80 leading-relaxed text-base md:text-lg font-light">{highlightText(desc)}</p>
           ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group min-h-[400px] md:min-h-[500px]"
    >
      {/* Immersive Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[15s] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      {/* Cinematic Gradient overlay */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-t border-b ${visualStyle.color} via-black/40 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-700`} />

      <div className="relative z-10 p-6 md:p-14 flex flex-col h-full justify-end">
         <h3 className="flex items-center text-2xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
           <span className="bg-white/10 text-white p-2 md:p-3 rounded-xl md:rounded-2xl mr-3 md:mr-5 shadow-sm border border-white/20 backdrop-blur-md">
             {visualStyle.icon}
           </span>
           {tTitle}
         </h3>
         
         <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-4xl pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
           {tDesc.map((desc, i) => (
             <p key={i} className="text-white/95 leading-relaxed text-base md:text-lg font-medium text-justify drop-shadow-md">
               {highlightText(desc)}
             </p>
           ))}
         </div>

         <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-10">
           {location.mapLink && (
             <a 
               href={location.mapLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className={`inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-medium transition-all hover:scale-105 shadow-xl backdrop-blur-md border ${
                 isWikiloc 
                   ? 'bg-[#82b834]/80 hover:bg-[#82b834] text-white border-[#82b834]' 
                   : 'bg-emerald-600/80 hover:bg-emerald-600 text-white border-emerald-500'
               }`}
             >
               {isWikiloc ? t.wikilocView : t.mapView}
               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
             </a>
           )}
         </div>

         {location.images.length > 1 && (
           <div 
             ref={scrollRef}
             onPointerDown={handlePointerDown}
             onPointerMove={handlePointerMove}
             className="flex gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-6 hide-scrollbar snap-x snap-mandatory mt-auto -mx-6 px-6 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing select-none"
           >
             {location.images.slice(1).map((img, i) => (
               <div 
                 key={i} 
                 onClick={(e) => { 
                   if (isDragging) { e.preventDefault(); e.stopPropagation(); return; }
                   setCurrentImgIndex(i + 1); 
                   setLightboxOpen(true); 
                 }}
                 className="flex-none w-[200px] md:w-[360px] aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden snap-center shadow-xl bg-black border border-white/20 relative group/img cursor-pointer"
               >
                 {/* Only drag without native ghost img */}
                 <img 
                   src={img} 
                   alt={`${tTitle} detail ${i + 1}`} 
                   draggable={false}
                   className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000 opacity-90 group-hover/img:opacity-100"
                 />
                 <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-2 md:p-4 pointer-events-none opacity-80 group-hover/img:opacity-100 transition-opacity">
                   <div className="bg-black/60 backdrop-blur-md p-2 md:p-3 rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover/img:scale-110 transition-transform">
                     <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {location.images.length > 1 && (
            <button 
              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => (prev === 0 ? location.images.length - 1 : prev - 1)); }}
              className="absolute left-2 md:left-6 p-2 md:p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-[110]"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          )}

          <motion.img 
            key={currentImgIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={location.images[currentImgIndex]} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            alt="Gallery detail"
          />

          {location.images.length > 1 && (
            <button 
              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => (prev === location.images.length - 1 ? 0 : prev + 1)); }}
              className="absolute right-2 md:right-6 p-2 md:p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-[110]"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          )}
          
          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
            {location.images.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === currentImgIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30'}`} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
