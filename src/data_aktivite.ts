import { AppRoute } from './types';
import { getImages } from './data_intro';

export const dataAktiviteler: AppRoute = {
  id: 'aktivite',
  label: { tr: 'Tüm Aktiviteler', en: 'All Activities', de: 'Alle Aktivitäten', ru: 'Все Активности' },
  title: { 
    tr: 'Doğa Aktiviteleri & Parkurlar', 
    en: 'Nature Activities & Trails', 
    de: 'Naturaktivitäten & Naturwege', 
    ru: 'Природные Активности и Маршруты' 
  },
  intro: {
    tr: ['Doğa ile baş başa kalacağınız, eşsiz trekking rotaları ve keşif noktaları.'],
    en: ['Unique trekking routes and discovery points where you will be alone with nature.'],
    de: ['Einzigartige Trekkingrouten und Entdeckungspunkte, an denen Sie mit der Natur allein sind.'],
    ru: ['Уникальные треккинговые маршруты и точки исследования, где вы останетесь наедине с природой.']
  },
  locations: [
    {
      id: 'aziza-paul',
      title: { tr: 'Aziz Paul Yolu', en: 'Saint Paul Trail', de: 'Paulusweg', ru: 'Тропа Святого Павла' },
      description: {
        tr: ['Milattan sonra 46 yılında Aziz Paul ve arkadaşlarının Hristiyanlığı yaymak amacıyla yaptıkları yolculuğa ithafen Aziz Paul Yolu olarak isimlendirilen yürüyüş yolu, Torosların eteklerindeki doğal güzellikleri bölgenin yerel kültürü ve antik kentlerle birleştirerek yürüyenlere doyumsuz bir keyif sağlar. Toplam uzunluğu yaklaşık 500 km olan yol, Antalya yakınlarındaki Perge ve Aspendos’tan iki kol halinde başlayarak Adada Antik Kentinde birleşip Davraz dağının eteklerinden ve Eğirdir\'den geçerek Isparta’nın Yalvaç ilçesinde sona erer. Yer yer iki binlere varan irtifalardaki parkurlarda, torosların endemik türleri ve yerel köy hayatı, irili ufaklı kanyon oluşumları ve antik kalıntılar görülebilir. Likya Yolu’ndan daha yabani bir rotadır, deniz seviyesinden başlar ve 2200 metreye kadar tırmanır. Rotada ortalama 2800 metreye kadar tırmanan iki opsiyonel zirve daha bulunur. İdeal yürüme zamanı Nisan - Mayıs ve Eylül - Ekim aylarıdır.'],
        en: ['Named the St. Paul Trail in honor of the journey taken by St. Paul and his friends to spread Christianity in 46 AD, this hiking trail provides incomparable pleasure by combining the natural beauties of the Taurus Mountains with the local culture and ancient cities. Its total length is approximately 500 km, starting from Perge and Aspendos, running up to the altitude of 2200 meters. The trail unites in the Ancient City of Adada and terminates in the Yalvaç district of Isparta. It is a wilder route compared to the Lycian Way.'],
        de: ['Der 500 km lange Paulsweg, benannt nach der Reise des Hl. Paulus zur Verbreitung des Christentums im Jahr 46 n. Chr., kombiniert auf einzigartige Weise Natur, lokale Kultur und antike Städte. Er beginnt bei Perge und Aspendos nahe Antalya, verläuft bis auf 2200 Meter Höhe und endet im Bezirk Yalvaç (Isparta). Er ist wilder als der Lykische Weg und hat optionale Routen bis 2800 Meter.'],
        ru: ['Тропа Святого Павла, названная в честь путешествия Апостола Павла в 46 г. н.э., сочетает природные красоты предгорий Таврских гор с местной культурой и древними городами. Ее длина около 500 км. Маршрут начинается в Перге и Аспендосе, объединяется в древнем городе Адада и заканчивается в Ялваче (Ыспарта). Дорога более дикая, чем Ликийская тропа, и поднимается до высоты 2200 метров.']
      },
      images: getImages('azizpaul', 1, true)
    },
    {
      id: 'keykubat',
      title: { tr: 'Keykubat Göç ve Kervan Yolu', en: 'Keykubat Migration and Caravan Route', de: 'Keykubat Migrations- und Karawanenroute', ru: 'Миграционный и караванный маршрут Кейкубат' },
      description: {
        tr: ['Keykubat Kervan Yolu Projesi, Anadolu Selçuklu Devleti döneminde inşa edilen kervan yolları ve kervansarayları temel alınarak oluşturulmuş kültürel, tarihî ve turistik bir rotadır. Proje, Selçuklu sultanı I. Alaeddin Keykubad’ın adını taşır ve onun döneminde inşa edilen saraylar, hanlar ve yollar üzerinden şekillenir. Amaç, Selçuklu döneminin ihtişamını ve ticari-turistik mirasını bugünün gezginlerine, tarih meraklılarına ve doğaseverlere ulaştırmak; aynı zamanda yerel kalkınmayı ve kültürel turizmi teşvik etmektir. Konya’dan Alanya’ya uzanan Keykubat Kervan Yolu, yüzyıllar boyunca medeniyetlerin kesişim noktası olmuş; kültürlerin, ticaretin ve inancın izlerini taşıyan kadim bir güzergâhtır. Bu yol, yalnızca geçmişin izlerini değil; aynı zamanda Anadolu’nun eşsiz doğasını da barındıran bir kültür ve doğa koridorudur. Toros Dağları’nın eteklerine serpiştirilmiş Selçuklu hanları, taş köprüler ve antik kalıntılar; yolculuğun her adımında tarihî bir arka plan sunarken, bölgenin sakin ve büyüleyici doğası da ziyaretçilere huzur veren bir atmosfer sağlar. Keykubat Kervan Yolu, doğa yürüyüşçüleri ve bisiklet tutkunları için eşsiz bir rotadır. Güzergâh boyunca yer alan Mavi Boğaz Kanyonu’nun dik yamaçları, Aygırdibi Şelalesi’nin serin suları ve Alara Çayı’nın berrak akışı, bu rotayı sadece bir tarih yolculuğu değil; aynı zamanda doğal bir keşif deneyimi haline getirmektedir.'],
        en: ['The Keykubat Caravan Route Project is a cultural, historical, and touristic route based on caravan roads and caravanserais constructed during the Anatolian Seljuk Empire. Named after Seljuk Sultan Alaeddin Keykubad I, it stretches from Konya to Alanya. Designed to invoke the commercial and touristic heritage of the era, the trail passes through Seljuk inns, stone bridges, and ancient ruins scattered along the Taurus Mountains. Beyond its history, it offers a wonderful nature corridor with the steep slopes of the Mavi Boğaz Canyon, Aygırdibi Waterfall, and Alara Stream, making it a perfect track for hikers and cyclists.'],
        de: ['Das Keykubat Caravan Route Projekt ist eine historische, kulturelle und touristische Route, die tief in den Karawanenstraßen der kleinasiatischen Seldschukenzeit verwurzelt ist. Benannt nach Alaeddin Keykubad I., erstreckt sich die Strecke von Konya bis Alanya. Sie vereint alte Karawansereien, Steinbrücken, Canyons und Naturwunder wie den Aygırdibi-Wasserfall. Ein herausragendes Erlebnis für Wanderer und Radfahrer.'],
        ru: ['Проект Караванного пути Кейкубата — это культурный и исторический маршрут, проложенный по старинным караванным путям, построенным во времена Анатолийских сельджуков. Названный в честь султана Кей-Кубада I, маршрут простирается от Коньи до Антальи. Дорога сочетает древние сельджукские постоялые дворы, мосты и природные чудеса, такие как каньоны и водопады. Идеальное приключение для любителей истории и велосипедного туризма.']
      },
      images: getImages('keykubatkervan', 1, true)
    }
  ]
};
