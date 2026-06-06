import { AppRoute, AppRouteLocation } from './types';

export function getImages(encodedBase: string, count: number, isSingle = false) {
  const baseUrl = 'https://raw.githubusercontent.com/Bayraksea/yenishirehomecatalog/main/';
  const base = encodeURI(decodeURI(encodedBase));
  if (isSingle) return [baseUrl + base + '.jpg'];
  return Array.from({length: count}, (_, i) => baseUrl + base + (i + 1) + '.jpg');
}

export const dataGiris: AppRoute = {
  id: 'giris',
  label: { tr: 'Giriş', en: 'Intro', de: 'Einführung', ru: 'Введение' },
  title: {
    tr: 'YenishireHome Turizm Kataloğu',
    en: 'YenishireHome Tourism Catalog',
    de: 'YenishireHome Tourismus Katalog',
    ru: 'Туристический каталог YenishireHome'
  },
  intro: {
    tr: [
      'Doğayla iç içe, sakin ve konforlu bir konaklama deneyimi sunan YenishireHome, sadece bir konut değil; aynı zamanda bölgenin zengin kültürel ve doğal mirasını keşfetmeniz için bir başlangıç noktasıdır.',
      'Bu rehber, YenishireHome’un çevresinde yer alan; köklü tarihî yapılar, eşsiz doğa manzaraları, göller, kanyonlar, mağaralar ve yürüyüş rotaları hakkında bilgi sunarak, konaklamanızı daha anlamlı ve unutulmaz kılmayı amaçlamaktadır.',
      '1 ila 1,5 saatlik sürüş mesafesinde, Selçuklu medeniyetinin izlerini taşıyan kervan yollarından, Toros Dağları\'nın büyüleyici eteklerine; kristal berraklığındaki göllerden, saklı şelalelere kadar uzanan çok sayıda rota sizi bekliyor.',
      'YenishireHome’da kalırken, sadece dinlenmeyecek; aynı zamanda bu eşsiz coğrafyanın tarihini, kültürünü ve doğasını keşfetme ayrıcalığına da sahip olacaksınız.',
      'Seyahatinizi daha keyifli ve anlamlı kılmak adına, çevredeki doğal ve tarihî zenginlikleri keşfetmenize yardımcı olacak bazı güzergâh önerilerini aşağıda bulabilirsiniz:'
    ],
    en: [
      'Offering a peaceful and comfortable accommodation experience intertwined with nature, YenishireHome is not just a residence; it is also a starting point for you to discover the rich cultural and natural heritage of the region.',
      'This guide aims to make your stay more meaningful and unforgettable by providing information about the deep-rooted historical structures, unique natural landscapes, lakes, canyons, caves, and trekking routes located around YenishireHome.',
      'Within a 1 to 1.5-hour driving distance, numerous routes await you, extending from caravan routes bearing the traces of Seljuk civilization to the fascinating foothills of the Taurus Mountains; from crystal clear lakes to hidden waterfalls.',
      'While staying at YenishireHome, you will not only rest but also have the privilege of exploring the history, culture, and nature of this unique geography.',
      'To make your trip more enjoyable and meaningful, you can find some route suggestions below that will help you discover the surrounding natural and historical riches:'
    ],
    de: [
      'YenishireHome bietet ein friedliches und komfortables Unterkunftserlebnis inmitten der Natur und ist nicht nur eine Residenz, sondern auch ein Ausgangspunkt, um das reiche kulturelle und natürliche Erbe der Region zu entdecken.',
      'Dieser Reiseführer soll Ihren Aufenthalt bedeutungsvoller und unvergesslicher machen, indem er Informationen über die tief verwurzelten historischen Strukturen, einzigartigen Naturlandschaften, Seen, Schluchten, Höhlen und Wanderrouten rund um YenishireHome bietet.',
      'Innerhalb von 1 bis 1,5 Autostunden erwarten Sie zahlreiche Routen, die von Wohnwagenrouten mit den Spuren der seldschukischen Zivilisation bis zu den faszinierenden Ausläufern des Taurusgebirges reichen; von kristallklaren Seen bis hin zu versteckten Wasserfällen.',
      'Während Ihres Aufenthalts im YenishireHome werden Sie sich nicht nur ausruhen, sondern auch das Privileg haben, die Geschichte, Kultur und Natur dieser einzigartigen Geographie zu erkunden.',
      'Um Ihre Reise angenehmer und bedeutungsvoller zu gestalten, finden Sie unten einige Routenvorschläge, die Ihnen helfen werden, die umliegenden natürlichen und historischen Reichtümer zu entdecken:'
    ],
    ru: [
      'YenishireHome, предлагающий спокойный и комфортный отдых в гармонии с природой, является не просто резиденцией; это также отправная точка для знакомства с богатым культурным и природным наследием региона.',
      'Это руководство призвано сделать ваше пребывание более значимым и незабываемым, предоставляя информацию о старинных исторических сооружениях, уникальных природных ландшафтах, озерах, каньонах, пещерах и пешеходных маршрутах, расположенных вокруг YenishireHome.',
      'В 1-1,5 часах езды вас ждут многочисленные маршруты: от караванных путей со следами сельджукской цивилизации до очаровательных предгорий Таврских гор; от кристально чистых озер до скрытых водопадов.',
      'Останавливаясь в YenishireHome, вы не только отдохнете, но и получите привилегию исследовать историю, культуру и природу этой уникальной географии.',
      'Чтобы сделать вашу поездку более приятной и значимой, ниже приведены некоторые варианты маршрутов, которые помогут вам открыть для себя окружающие природные и исторические богатства:'
    ]
  },
  locations: [
    {
      id: 'summary-rota1',
      title: { tr: '1. Rota: Melikler Yaylası – Aksu – Sagalassos', en: 'Route 1: Melikler Plateau – Aksu – Sagalassos', de: 'Route 1: Melikler-Plateau – Aksu – Sagalassos', ru: 'Маршрут 1: Плато Меликлер – Аксу – Сагалассос' },
      description: {
        tr: [
          'YenishireHome’dan Isparta yönüne doğru ilerlediğinizde, yaklaşık 20 dakika içinde Melikler Yaylası’na ulaşabilirsiniz. Burada yer alan Pınargözü Mağarası, Türkiye’nin en uzun mağaralarından biridir. Aynı bölgede Karagöl, Yeşil Göl ve Dedegöl Dağı çevresinde yürüyüş ve zirve tırmanışları yapılabilmektedir.',
          'Melikler Yaylası’ndan yaklaşık 20 dakika uzaklıktaki Yaka Kanyonu, doğa yürüyüşü ve kanyon geçişi için ideal bir parkurdur.',
          'Isparta yönüne devam ettiğinizde, Aksu ilçe merkezine 10 dakikalık mesafede yer alan Zindan Mağarası ve daha ilerideki Başpınar Tabiat Parkı ziyaret edilebilecek diğer doğal güzelliklerdir.',
          'Bu rotayı Eğirdir ilçesi üzerinden Kovada Gölü yönüne çevirerek sürdürdüğünüzde, sırasıyla Kasnak Meşesi Tabiatı Koruma Alanı, Kovada Gölü Milli Parkı ve Yazılı Kanyon Tabiat Parkı gibi eşsiz alanlarda doğa yürüyüşü yapabilirsiniz. Aynı güzergâhta bulunan Sagalassos Antik Kenti, bölgenin en etkileyici arkeolojik miraslarındandır.'
        ],
        en: [
          'When you proceed towards Isparta from YenishireHome, you can reach Melikler Plateau in about 20 minutes. Pınargözü Cave located here is one of Turkey\'s longest caves. In the same region, hikes and summit climbs can be arranged around Karagöl, Yeşil Göl and Mount Dedegöl.',
          'Yaka Canyon, about 20 minutes from Melikler Plateau, is an ideal track for nature walks and canyoning.',
          'As you continue towards Isparta, Zindan Cave (10 mins from Aksu district center) and Başpınar Nature Park further ahead are other visitable natural beauties.',
          'When you continue this route via Eğirdir towards Lake Kovada, you can hike in unique reservations such as Kasnak Oak Nature Reserve, Lake Kovada National Park, and Yazılı Canyon Nature Park. The Ancient City of Sagalassos on the same route is one of the most remarkable archaeological heritages of the region.'
        ],
        de: [
          'Auf dem Weg von YenishireHome nach Isparta erreichen Sie in 20 Minuten das Melikler-Plateau und die Pınargözü-Höhle. In der gleichen Region können Wanderungen und Besteigungen am Karagöl, Yeşil Göl und am Berg Dedegöl unternommen werden.',
          'Die Yaka-Schlucht, etwa 20 Minuten vom Melikler-Plateau entfernt, ist ein idealer Weg für Naturwanderungen und Canyoning.',
          'Wenn Sie in Richtung Isparta weiterfahren, sind die Zindan-Höhle und der Başpınar-Naturpark schöne Besuchsorte.',
          'Auf dem Weg nach Eğirdir zum Kovada-See können Sie einzigartige Gebiete wie das Kasnak-Eichen-Naturschutzgebiet, den Kovada-See-Nationalpark und den Yazılı-Canyon-Naturpark erwandern. Die antike Stadt Sagalassos ist eines der beeindruckendsten Erben der Region.'
        ],
        ru: [
          'Направляясь в Ыспарту из YenishireHome, вы доберетесь до плато Меликлер примерно за 20 минут, где находится самая длинная в Турции пещера Пынаргёзю. Вокруг Карагёля, Ешильгёля и горы Дедегёль можно совершить восхождения.',
          'Каньон Яка — идеальное место для прогулок и каньонинга, расположенное всего в 20 минутах.',
          'Продолжая путь в сторону Ыспарты, вы найдете пещеру Зиндан (10 минут от центра Аксу) и природный парк Башпынар.',
          'Свернув с этого маршрута в сторону озера Ковада, вы сможете прогуляться по заповедникам дубов Каснак, национальному парку озера Ковада и каньону Язылы. Древний город Сагалассос на этом же маршруте является одним из самых впечатляющих археологических наследий.'
        ]
      },
      images: []
    },
    {
      id: 'summary-rota2',
      title: { tr: '2. Rota: Kubadabad Sarayı – Kızıldağ – Psidia Antik Kenti', en: 'Route 2: Kubadabad Palace – Kızıldağ – Psidia Ancient City', de: 'Route 2: Kubadabad Palast – Kızıldağ – Antike Stadt Psidia', ru: 'Маршрут 2: Дворец Кубадабад – Кызылдаг – Древний город Псидия' },
      description: {
        tr: [
          'YenishireHome’dan Beyşehir Gölü kıyısı boyunca Şarkikaraağaç yönüne ilerlediğinizde, ilk olarak Kubadabad Sarayı’nı ziyaret edebilirsiniz. Anadolu Selçuklu mimarisinin önemli örneklerinden olan bu yapı, göl manzarasıyla büyüleyicidir.',
          'Daha sonra Şarkikaraağaç ilçe merkezine çok yakın konumdaki Kızıldağ Milli Parkı’nı gezebilir; sonrasında Yalvaç ilçesinde yer alan Psidia Antiokheia Antik Kenti’ni ziyaret edebilirsiniz.'
        ],
        en: [
          'When you proceed towards Şarkikaraağaç along the shore of Lake Beyşehir from YenishireHome, you can visit Kubadabad Palace first. This structure, an important example of Anatolian Seljuk architecture, is fascinating with its lake view.',
          'Then, you can visit Kızıldağ National Park, located very close to Şarkikaraağaç district center; afterwards, you can discover the Ancient City of Psidia Antiokheia in Yalvaç.'
        ],
        de: [
          'Wenn Sie von YenishireHome am Ufer des Beyşehir-Sees entlang nach Şarkikaraağaç fahren, können Sie zuerst den Kubadabad-Palast besichtigen. Dieses bedeutende seldschukische Gebäude fasziniert durch seinen Seeblick.',
          'Dann können Sie den Kızıldağ-Nationalpark ganz in der Nähe des Zentrums von Şarkikaraağaç erkunden und anschließend die antike Stadt Psidia Antiochia im Bezirk Yalvaç besuchen.'
        ],
        ru: [
          'Двигаясь вдоль озера Бейшехир в сторону Шаркикараагача, вы можете посетить дворец Кубадабад — важный пример анатолийской сельджукской архитектуры с видом на озеро.',
          'Затем вы сможете прогуляться по национальному парку Кызылдаг, расположенному очень близко от центра Шаркикараагача, а после этого посетить Древний город Писидийская Антиохия в Ялваче.'
        ]
      },
      images: []
    },
    {
      id: 'summary-rota3',
      title: { tr: '3. Rota: Leylekler Vadisi – Beyşehir – Eflatunpınar – Fasıllar', en: 'Route 3: Storks Valley – Beyşehir – Eflatunpınar – Fasıllar', de: 'Route 3: Storchental – Beyşehir – Eflatunpınar – Fasıllar', ru: 'Маршрут 3: Долина Аистов – Бейшехир – Эфлатунпинар – Фасиллар' },
      description: {
        tr: [
          'Beyşehir yönüne ilerlerken yol üzerinde bulunan Yeşildağ Mahallesi’ndeki Leylekler Vadisi, göçmen leyleklerin doğal ortamlarında gözlemlenebileceği nadir yerlerdendir.',
          'Beyşehir Gölü kıyısında bulunan Karaburun Plajı, Türkiye’nin en büyük tatlı su gölü olan Beyşehir Gölü’nde serinlemek isteyenler için ideal bir duraktır.',
          'İlçe merkezine ulaştığınızda, Selçuklu eserlerini ve tarihi çarşıyı gezebilir, yöresel lezzetleri tadabilirsiniz. Merkeze yaklaşık 10 km mesafedeki Nilüfer Bahçesi’nde gölde kayık turu yapabilir; yaklaşık 10 km daha ileride Eflatunpınar Hitit Anıtı’nı, yine ilçe merkezine 20 km mesafede yer alan Fasıllar Hitit Anıtı’nı ziyaret edebilirsiniz.'
        ],
        en: [
          'Proceeding towards Beyşehir, Storks Valley in Yeşildağ Neighborhood is a rare place where migratory storks can be observed in their natural habitats.',
          'Karaburun Beach along Lake Beyşehir provides an ideal cooling stop in Turkey\'s largest freshwater lake.',
          'Reaching the district center allows you to visit Seljuk works and taste local food. You can take a boat tour in the Lotus Garden (10 km from the center), visit Eflatunpınar Hittite Monument (20 km), and explore Fasıllar Hittite Monument.'
        ],
        de: [
          'Auf dem Weg nach Beyşehir ist das Storchental in Yeşildağ ein seltener Ort, an dem Zugstörche in ihrer natürlichen Umgebung beobachtet werden können.',
          'Der Karaburun-Strand am Ufer des Beyşehir-Sees ist ein idealer Stopp für eine Abkühlung im größten Süßwassersees der Türkei.',
          'Im Zentrum können Sie seldschukische Bauwerke besuchen und lokale Köstlichkeiten probieren. 10 km entfernt locken der Lotusgarten mit Bootstouren sowie die hethitischen Denkmäler Eflatunpınar und Fasıllar.'
        ],
        ru: [
          'По пути в Бейшехир Долина Аистов в районе Ешильдаг является одним из редких мест, где за перелетными птицами можно наблюдать в их естественной среде.',
          'Пляж Карабурун — идеальная остановка, чтобы освежиться в крупнейшем пресноводном озере Турции.',
          'Добравшись до центра, вы сможете изучить памятники сельджуков и местную кухню. В 10 км вас ждет лодочная экскурсия по Саду лотосов, а дальше – Хеттские памятники Эфлатунпинар и Фасиллар.'
        ]
      },
      images: []
    },
    {
      id: 'summary-rota4',
      title: { tr: '4. Rota: Çamlık Mağaraları – Ormana – Köprülü Kanyon', en: 'Route 4: Çamlık Caves – Ormana – Köprülü Canyon', de: 'Route 4: Çamlık Höhlen – Ormana – Köprülü Schlucht', ru: 'Маршрут 4: Пещеры Чамлык – Ормана – Каньон Кёпрюлю' },
      description: {
        tr: [
          'YenishireHome’dan Antalya yönüne ilerlediğinizde, ilk olarak Derebucak Çamlık Milli Parkı karşınıza çıkar. Devamında, geleneksel düğmeli evleriyle ünlü Ormana köyü ziyaret edilebilir.',
          'Bu güzergahta yer alan yaylalarda yılkı atlarını doğal ortamlarında gözlemleyebilirsiniz. Antalya’nın Serik ilçesinden ayrılan yol, sizi doğrudan Köprülü Kanyon Milli Parkı’nın bulunduğu Beşkonak’a ulaştırır.',
          'Türkiye’nin en güzel rafting parkurlarından biri olan Köprülü Kanyon’da su sporları yapabilir; çevresinde yer alan Selge Antik Kenti ve Tazı Kanyonu gibi tarihî ve doğal alanları keşfedebilirsiniz.'
        ],
        en: [
          'When you proceed towards Antalya from YenishireHome, Derebucak Çamlık National Park appears first. Afterwards, you can visit Ormana village, famous for its traditional buttoned houses.',
          'You can observe wild horses in their natural environments. The road from Antalya\'s Serik district takes you directly to Beşkonak, to the Köprülü Canyon National Park.',
          'You can do water sports in Köprülü Canyon, one of Turkey\'s finest rafting tracks, and discover surrounding historical and natural areas like Selge Ancient City and Tazı Canyon.'
        ],
        de: [
          'Wenn Sie von YenishireHome in Richtung Antalya fahren, treffen Sie auf den Derebucak Çamlık Nationalpark. Später können Sie das für seine geknöpften Häuser berühmte Dorf Ormana besichtigen.',
          'Auf den Hochebenen können Sie Wildpferde in ihrer natürlichen Umgebung beobachten. Die Straße führt aus Serik (Antalya) direkt zum Nationalpark Köprülü-Schlucht in Beşkonak.',
          'Die Schlucht bietet als eine der schönsten Rafting-Routen der Türkei exzellenten Wassersport. Entdecken Sie auch die antike Stadt Selge und die Tazı-Schlucht in der Nähe.'
        ],
        ru: [
          'На пути к Анталии из YenishireHome первым делом открывается Национальный парк Деребуджак Чамлык. Вслед за ним можно посетить деревню Ормана со своими домами-пуговицами.',
          'На плато этого маршрута можно увидеть диких лошадей. Дорога от района Серик (Анталия) приведет вас прямо в Каньон Кёпрюлю в Бешконаке.',
          'Тут можно заняться водными видами спорта в одном из красивейших мест для рафтинга в Турции и осмотреть প্রাচীনнейший город Сельге и каньон Тазы.'
        ]
      },
      images: []
    }
  ]
};
