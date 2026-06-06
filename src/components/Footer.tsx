import { Compass, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 text-white p-1.5 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Yenishirehome</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Isparta'nın gizli kalmış cenneti Yenişarbademli'yi keşfedin. Doğanın kalbinde huzur dolu bir macera sizi bekliyor.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#routes" className="text-gray-400 hover:text-emerald-400 transition-colors">Gezilecek Yerler</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Konaklama</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yenishirehome. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
