import { AppRoute } from './types';
import { getImages } from './data_intro';

export const dataRota4: AppRoute = {
  id: 'rota-4',
  label: { tr: 'Rota 4', en: 'Route 4', de: 'Route 4', ru: 'Маршрут 4' },
  title: { 
    tr: '4. Rota: Çamlık Mağaraları – Ormana – Köprülü Kanyon', 
    en: '4th Route: Çamlık Caves – Ormana – Köprülü Canyon', 
    de: '4. Route: Çamlık Höhlen – Ormana – Köprülü Schlucht', 
    ru: '4-й Маршрут: Пещеры Чамлык – Ормана – Каньон Кёпрюлю' 
  },
  intro: {
    tr: [
      'YenishireHome’dan Antalya yönüne ilerlediğinizde, ilk olarak Derebucak Çamlık Milli Parkı karşınıza çıkar. Devamında, geleneksel düğmeli evleriyle ünlü Ormana köyü ziyaret edilebilir.',
      'Bu güzergahta yer alan yaylalarda yılkı atlarını doğal ortamlarında gözlemleyebilirsiniz. Antalya’nın Serik ilçesinden ayrılan yol, sizi doğrudan Köprülü Kanyon Milli Parkı’nın bulunduğu Beşkonak’a ulaştırır.',
      'Türkiye’nin en güzel rafting parkurlarından biri olan Köprülü Kanyon’da su sporları yapabilir; çevresinde yer alan Selge Antik Kenti ve Tazı Kanyonu gibi tarihî ve doğal alanları keşfedebilirsiniz.'
    ],
    en: [
      'When you proceed towards Antalya from YenishireHome, Derebucak Çamlık National Park appears first. Afterwards, the village of Ormana, famous for its traditional buttoned houses, can be visited.',
      'You can observe wild horses in their natural environments on the plateaus along this route. The road from Antalya\'s Serik district takes you directly to Beşkonak, where Köprülü Canyon National Park is located.',
      'You can do water sports in Köprülü Canyon, one of Turkey\'s most beautiful rafting spots, and explore the surrounding historical and natural areas such as the Ancient City of Selge and Tazı Canyon.'
    ],
    de: [
      'Wenn Sie von YenishireHome in Richtung Antalya fahren, treffen Sie zunächst auf den Nationalpark Derebucak Çamlık. Anschließend können Sie das für seine traditionellen geknöpften Häuser berühmte Dorf Ormana besuchen.',
      'Auf den Plateaus entlang dieser Route können Sie Wildpferde beobachten. Die Straße von Serik (Antalya) führt Sie direkt nach Beşkonak, wo sich der Köprülü-Schlucht-Nationalpark befindet.',
      'In der Köprülü-Schlucht, einer der schönsten Rafting-Strecken der Türkei, können Sie Wassersport betreiben und historische sowie natürliche Gebiete wie die antike Stadt Selge und die Tazı-Schlucht erkunden.'
    ],
    ru: [
      'Если вы направитесь в сторону Анталии из YenishireHome, сначала вы встретите национальный парк Деребуджак Чамлык. После этого можно посетить деревню Ормана, известную своими традиционными "домами на пуговицах".',
      'На плато вдоль этого маршрута можно увидеть диких лошадей в их естественной среде. Дорога от района Серик (Анталия) ведет прямо в Бешконак, где находится Национальный парк Каньон Кёпрюлю.',
      'В каньоне Кёпрюлю, одном из самых красивых мест для рафтинга в Турции, вы можете заняться водными видами спорта, а также исследовать окружающие исторические и природные достопримечательности, такие как Древний город Сельге и каньон Тазы.'
    ]
  },
  locations: [
    {
      id: 'camlik',
      title: { tr: 'Derebucak Çamlık Mağaraları Milli Parkı', en: 'Derebucak Çamlık Caves National Park', de: 'Nationalpark Derebucak Çamlık Höhlen', ru: 'Национальный парк пещер Деребуджак Чамлык' },
      description: {
        tr: ['2022 yılında milli park ilan edilen ve Körükini, Suluin, Balatini, Asmacıini, Çocuk Attıkları Delik, Saklı Uçurum, Derevend, Baraj, Eski Düden, Dede Tarlası Düdeni, Gavur Beşiği ve Dölek Düdeni mağaralarını barındıran milli park 1147 hektar büyüklüğündeki alanı kapsamaktadır. Balatini Mağarası, Türkiye\'nin baştan sona kat edilebilen en uzun mağaralarından birisidir. Suluin Mağarası özellikle turistik faaliyetlerin arttığı yaz aylarında botla gezi için uygun, oldukça süslü bir mağaradır. Deverend ve Döllüköğü mağaraları da ziyaretçilerin ilgisini çekebilecek derecede jeomorfolojik zenginliğe sahiptir. Mastaltı, Dede Tarla, Çocuk Attıkları Delik mağaraları rehber eşliğinde inişe uygun, dikey-yarı eğimli mağara deneyimi yaşamak isteyen ziyaretçiler için ideal mağaralardır.'],
        en: ['Declared a national park in 2022, it covers 1147 hectares holding several caves including Körükini, Suluin, Balatini, and more. Balatini Cave is one of Turkey\'s longest completely traversable caves. Suluin Cave is suitable for boat trips, especially in the summer. Deverend and Döllüköğü caves represent rich geomorphological features. Others like Mastaltı and Dede Tarla offer vertical semi-inclined cave experiences ideal for guided descents.'],
        de: ['Es wurde 2022 zum Nationalpark erklärt und umfasst 1147 Hektar. Es birgt Höhlen wie Körükini, Suluin, Balatini und andere. Die Balatini-Höhle ist eine der am längsten vollständig durchquerbaren Höhlen der Türkei. Suluin eignet sich besonders im Sommer für Bootstouren. Höhlen wie Mastaltı und Dede Tarla sind ideal für Kletterer und Steilabfahrten mit Führern.'],
        ru: ['Парк, объявленный национальным в 2022 году, охватывает 1147 гектаров и включает такие пещеры, как Кёрюкини, Сулуин, Балатини и др. Пещера Балатини — одна из самых длинных сквозных пещер в Турции. Сулуин особенно подходит для поездок на лодках летом. Пещеры Масталты и Деде Тарла идеальны для посетителей, желающих спуститься с гидом в пещеры вертикального или полунаклонного типа.']
      },
      mapLink: 'https://www.google.com/maps/dir//derebucak+çamlık+mağaraları+milli+parkı/@37.1436284,30.4829038,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c4d4c67355ce61:0x42757743fbf3c009!2m2!1d31.615455!2d37.3486348?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('%C3%A7aml%C4%B1k', 6)
    },
    {
      id: 'ormana',
      title: { tr: 'Ormana Köyü (Düğmeli Evler)', en: 'Ormana Village (Buttoned Houses)', de: 'Ormana Dorf (Geknöpfte Häuser)', ru: 'Деревня Ормана (Дома на пуговицах)' },
      description: {
        tr: ['Antalya’nın Akseki, İbradı, Ormana ve Ürünlü’de bulunan geleneksel Osmanlı mimarisini yansıtan özgün bu yapılar, sedir katran ağacından kestikleri ahşabı birbirinin içine kenetlenecek şekilde iskelet olarak kullanıp, binayı taş yığarak, herhangi bir harç veya çimento gibi malzeme kullanmadan yapılması sonucu iskeletin dışarda kalan kısımları da düğme gibi gözükmesi nedeniyle adına düğmeli (pişduvan) evler denmektedir.'],
        en: ['Reflecting traditional Ottoman architecture in Antalya’s Akseki, İbradı, Ormana and Ürünlü regions, these original structures are made of cedar tar wood. Wooden skeletons are interlocked, and the building is erected by stacking stones without any cement or mortar. The parts of the wooden skeleton sticking out externally look like buttons, hence giving the structures the name "buttoned (pişduvan) houses".'],
        de: ['Diese originellen Gebäude spiegeln die traditionelle osmanische Architektur in Antalyas Gebieten Akseki, İbradı und Ormana wider. Sie bestehen aus ineinandergreifenden Zedernholzgerüsten mit aufgestapelten Steinen – ganz ohne Mörtel. Die außen hervorstehenden Enden der Holzteile sehen aus wie Knöpfe, weshalb sie als „Geknöpfte Häuser“ (Pişduvan) bezeichnet werden.'],
        ru: ['Эти оригинальные постройки отражают традиционную османскую архитектуру в районах Аксеки, Ибрады, Ормана и Урюнлю. Они построены из кедрового дерева. Деревянные каркасы соединяются между собой, а пространство заполняется камнями без какого-либо цемента или раствора. Выступающие наружу части деревянного каркаса напоминают пуговицы, отсюда и название «Дома на пуговицах».']
      },
      mapLink: 'https://www.google.com/maps/dir//Ormana+Düğmeli+Evler,+Ormana,+Ormana+Köyü+Yolu,+07691+İbradı%2FAntalya/@37.3775675,31.2505047,10z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14c4b55ca33bc147:0x89ea3bf10e6f75f1!2m2!1d31.5811472!2d37.0747675!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('d%C3%BC%C4%9Fmeli', 10)
    },
    {
      id: 'koprulu',
      title: { tr: 'Köprülü Kanyon Milli Parkı', en: 'Köprülü Canyon National Park', de: 'Nationalpark Köprülü-Schlucht', ru: 'Национальный парк каньона Кёпрюлю' },
      description: {
        tr: [
          'Köprülü Kanyon Milli Parkı, Antalya ili Manavgat ilçesinin 63 kilometre kuzeybatısındadır. Manavgat ilçesi sınırları içinde bulunan Köprüçay (Köprü) Nehri ve tarihi Selge Antik Kenti’nin bulunduğu yerde 366.140 dekarlık bir alanı kapsayan bu yöre, 1973 yılında Milli Park olarak ilan edilmiştir. Milli Park’ın kaynak değerini oluşturan Köprüçay’ın, Bolasan köyü ile Beşkonak arasında meydana getirdiği yarma vadi, 14 kilometre uzunluğu ve 100 metreyi aşan yüksekliği ile Türkiye\'nin en uzun kanyonlarından biridir. ki tarafı dik, çıkılması hemen hemen imkânsız olan kanyonlardaki yeraltı suları ile beslenen Köprüçay, Türkiye\'nin en güzel doğal rekreasyon alanlarından biridir. Nehrin batısındaki dağlık arazide bulunan antik Selge kenti; nehrin kenarındaki kaleler, su kemerleri, Roma dönemine ait köprüler ve tarihi yollar gibi pek çok arkeolojik kaynak, Köprülü Kanyon’un önemini artırmaktadır. Ayrıca, Milli Park içinde kapladığı 400 hektarlık alanla, tüm Akdeniz Bölgesi’nin en büyük doğal servi ormanı, ilginç jeomorfolojik özellikli Adam (Şeytan) Kayaları ve Tazı Kanyonu’nda karşılaşabileceğiniz diğer güzelliklerdir.',
          'Köprülü Kanyon Milli Parkı, barındırdığı doğal, tarihi ve kültürel zenginlikler sayesinde ziyaretçilerine çok sayıda etkinlik seçeneği sunmaktadır. Başta, Türkiye’nin en önemli rafting rotalarından biri olan Köprüçay üzerinde rafting, kano ve kanyoning (kanyon geçişi) sporları olmak üzere yüzme, doğa yürüyüşü, kaya tırmanışı, oryantiring, bisiklet, olta balıkçılığı vb. sportif etkinlikler ile botanik-yaban hayatı gözlemciliği, jeolojik yapı gözlemciliği, kampçılık, fotoğrafçılık, piknik, cip safari, yayla gezileri gibi çok çeşitli etkinliklere katılma olanağı bulunmaktadır. Bölgeye gelen ziyaretçiler, Milli Park içindeki Selge Antik Kenti ile bir bölümü Milli Park içinde bulunan Aziz Paul Yolu’nu da gezi programlarına dahil edebilirler.'
        ],
        en: [
          'Located 63 km northwest of Manavgat, Antalya, Köprülü Canyon National Park covers 366,140 decares including the Köprüçay River and Ancient City of Selge. It became a National Park in 1973. The 14-km-long gorge formed by Köprüçay between Bolasan and Beşkonak is one of Turkey\'s longest canyons, exceeding 100 meters in height. The river, fed by groundwater, makes up a brilliant recreation area with extremely steep walls. Numerous archaeological sources like Selge, castles, aqueducts, ancient Roman bridges, and the Mediterranean\'s largest natural cypress forest exist here.',
          'Due to its abundant natural and cultural riches, the park provides endless activities. Its most famous is white-water rafting, alongside kayaking, canyoning, rock climbing, camping, fishing, and photography. Visitors can also append St. Paul Trail and Selge Ancient City to their itineraries.'
        ],
        de: [
          'Der Nationalpark Köprülü-Schlucht, 63 km von Manavgat (Antalya) entfernt, umfasst 366.140 Dekar rund um den Fluss Köprüçay und die Antike Stadt Selge, die 1973 als Nationalpark registriert wurde. Die 14 km lange Schlucht mit über 100 Meter Höhe ist eine der längsten der Türkei. Der von Grundwassern gespeiste Fluss bietet ein herrliches Erholungsgebiet. Unterhalb der Stadt Selge befinden sich römische Brücken, Burgen und Aquädukte.',
          'Der Park bietet zahlreiche Freizeitmöglichkeiten wie Wildwasser-Rafting auf dem Köprüçay, Kanufahren, Canyoning, Wandern, Klettern und Camping. Touristen können auch die St. Paul-Route und die Antike Stadt Selge in ihre Ausflüge einbauen.'
        ],
        ru: [
          'Национальный парк Каньон Кёпрюлю, расположенный в 63 км к северо-западу от Манавгата (Анталья), охватывает 366 140 акров вокруг реки Кёпрючай и древнего города Сельге (объявлен национальным парком в 1973 г.). Ущелье длиной 14 км и высотой более 100 метров — одно из самых длинных в Турции. Река образует красивейшую зону отдыха с крутыми стенами. В парке сохранились руины замков, акведуков и древнеримских мостов, а также крупнейший кипарисовый лес.',
          'Парк предлагает множество развлечений, включая один из лучших в Турции маршрутов для рафтинга, каякинг, каньонинг, скалолазание, походы на природу, кемпинг и рыбалку. Посетители также могут пройти по Тропе Святого Павла и древнему городу Сельге.'
        ]
      },
      mapLink: 'https://www.google.com/maps/dir//Köprülü+Kanyon+Milli+Parkı,+Beşkonak,+Manavgat%2FAntalya/@37.1918306,31.09847,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14c3593458bc0a2b:0xcd64ea3414af90c4!2m2!1d31.1808719!2d37.1917224!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('k%C3%B6pr%C3%BCl%C3%BC', 11)
    }
  ]
};
