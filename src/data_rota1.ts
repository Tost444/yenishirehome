import { AppRoute } from './types';
import { getImages } from './data_intro';

export const dataRota1: AppRoute = {
  id: 'rota-1',
  label: { tr: 'Rota 1', en: 'Route 1', de: 'Route 1', ru: 'Маршрут 1' },
  title: { 
    tr: '1. Rota: Melikler Yaylası – Aksu – Sagalassos', 
    en: '1st Route: Melikler Plateau – Aksu – Sagalassos', 
    de: '1. Route: Melikler Plateau – Aksu – Sagalassos', 
    ru: '1-й Маршрут: Плато Меликлер – Аксу – Сагалассос' 
  },
  intro: {
    tr: [
      'Dedegöl Dağı, Isparta iline bağlı olan Yenişarbademli ilçesi sınırları içerisinde yer alır. Dağın kaya türü kireç taşıdır ve yüksekliği 2998 metredir. Dedegöl, Kızıldağ Milli Parkı içerisinde bulunur.',
      'Bölge; dağ yürüyüşü, kamp, tırmanma için uygun yer ve imkanlar sunmaktadır. Her yıl binlerce dağcının katılımı ile Melikler Yaylası’nda Dağcılık Şenliği düzenlenmektedir. Teknik olarak bir zorluğu bulunmamakla birlikte günübirlik uzun bir yürüyüş ile zirvesine ulaşılabilir. Kamp alanından zirveye 10 km bir yürüyüş gerektirir. Yürüyüşün süresi kişilere ve ekiplere göre değişebilmekle birlikte yaklaşık olarak 4 saat çıkış ve 4 saat iniştir. Dağın en ideal mevsimi Haziran’dan Eylül sonuna kadardır ancak kış aylarında hem dağcılık hem de tur kayağı faaliyetleri gerçekleştirilebilir.',
      'Melikler Yaylası’nın dışında Pınargözü Mağarası, Kargöl, Yeşilgöl, Yaka Kanyonu, Eldere Bölgesi, Kuzukulağı Yaylası özellikle kampçılar, tırmanışçılar ve doğa yürüyüşçüleri tarafından yoğun bir şekilde kullanılmaktadır.',
      'YenishireHome’dan Isparta yönüne doğru ilerlediğinizde, yaklaşık 20 dakika içinde Melikler Yaylası’na ulaşabilirsiniz. Burada yer alan Pınargözü Mağarası, Türkiye’nin en uzun mağaralarından biridir. Aynı bölgede Karagöl, Yeşil Göl ve Dedegöl Dağı çevresinde yürüyüş ve zirve tırmanışları yapılabilmektedir.',
      'Melikler Yaylası’ndan yaklaşık 20 dakika uzaklıktaki Yaka Kanyonu, doğa yürüyüşü ve kanyon geçişi için ideal bir parkurdur.',
      'Isparta yönüne devam ettiğinizde, Aksu ilçe merkezine 10 dakikalık mesafede yer alan Zindan Mağarası ve daha ilerideki Başpınar Tabiat Parkı ziyaret edilebilecek diğer doğal güzelliklerdir.',
      'Bu rotayı Eğirdir ilçesi üzerinden Kovada Gölü yönüne çevirerek sürdürdüğünüzde, sırasıyla Kasnak Meşesi Tabiatı Koruma Alanı, Kovada Gölü Milli Parkı ve Yazılı Kanyon Tabiat Parkı gibi eşsiz alanlarda doğa yürüyüşü yapabilirsiniz. Aynı güzergâhta bulunan Sagalassos Antik Kenti, bölgenin en etkileyici arkeolojik miraslarındandır.'
    ],
    en: [
      'Mount Dedegöl is located within the borders of Yenişarbademli district of Isparta province. The rock type is limestone, with a height of 2998 meters. Dedegöl is located within Kızıldağ National Park.',
      'The region offers suitable places and opportunities for hiking, camping, and climbing. A Mountaineering Festival is held every year at Melikler Plateau with the participation of thousands of mountaineers. Although there is no technical difficulty, the summit can be reached with a long day hike. The ideal season for the mountain is from June to the end of September.',
      'When you proceed towards Isparta from YenishireHome, you can reach Melikler Plateau in about 20 minutes. Here lies Pınargözü Cave, one of Turkey\'s longest caves. In the same region, hiking and summit climbs can be done around Karagöl, Yeşil Göl and Mount Dedegöl.',
      'Yaka Canyon, about 20 minutes from Melikler Plateau, is an ideal track for nature walks and canyoning. Continuing towards Isparta, Zindan Cave and Başpınar Nature Park are other natural beauties.',
      'When pursuing this route towards Lake Kovada via Eğirdir, you can hike in unique areas like Kasnak Oak Nature Reserve, Lake Kovada National Park, and Yazılı Canyon Nature Park respectively. The Ancient City of Sagalassos on this route is one of the most impressive archaeological heritages of the region.'
    ],
    de: [
      'Der Berg Dedegöl befindet sich innerhalb der Grenzen des Bezirks Yenişarbademli in der Provinz Isparta. Die Gesteinsart ist Kalkstein mit einer Höhe von 2998 Metern. Dedegöl befindet sich im Kızıldağ-Nationalpark.',
      'Die Region bietet geeignete Orte und Möglichkeiten zum Wandern, Campen und Klettern. Jedes Jahr findet auf dem Melikler-Plateau ein Bergsteigerfestival unter Beteiligung von Tausenden von Bergsteigern statt. Obwohl es keine technischen Schwierigkeiten gibt, kann der Gipfel mit einer langen Tageswanderung erreicht werden. Die ideale Jahreszeit für den Berg ist von Juni bis Ende September.',
      'Wenn Sie von YenishireHome in Richtung Isparta fahren, erreichen Sie nach etwa 20 Minuten das Melikler-Plateau. Hier befindet sich die Pınargözü-Höhle, eine der längsten Höhlen der Türkei.',
      'Die Yaka-Schlucht, etwa 20 Minuten vom Melikler-Plateau entfernt, ist ein idealer Weg für Naturwanderungen und Canyoning. Wenn Sie weiter in Richtung Isparta fahren, sind die Zindan-Höhle und der Başpınar-Naturpark weitere Naturschönheiten.',
      'Wenn Sie diese Route in Richtung des Kovada-Sees über Eğirdir fortsetzen, können Sie in einzigartigen Gebieten wie dem Kasnak-Eichen-Naturschutzgebiet, dem Kovada-See-Nationalpark und dem Yazılı-Canyon-Naturpark wandern. Die antike Stadt Sagalassos auf dieser Route ist eines der beeindruckendsten archäologischen Erben der Region.'
    ],
    ru: [
      'Гора Дедегёль расположена в границах района Енишарбадемли провинции Ыспарта. Порода камня – известняк, высота 2998 метров. Дедегёль находится на территории национального парка Кызылдаг.',
      'Регион предлагает подходящие места и возможности для пеших прогулок, кемпинга и скалолазания. Ежегодно на плато Меликлер проводится фестиваль альпинизма с участием тысяч альпинистов. Вершины можно достичь за долгий однодневный поход. Идеальный сезон для гор — с июня по конец сентября.',
      'Если вы направитесь в сторону Ыспарты из YenishireHome, вы сможете добраться до плато Меликлер примерно за 20 минут. Здесь находится пещера Пынаргёзю, одна из самых длинных пещер Турции.',
      'Каньон Яка, расположенный примерно в 20 минутах езды от плато Меликлер, является идеальным местом для прогулок на природе и каньонинга. Если продолжить путь в сторону Ыспарты, другие природные красоты — пещера Зиндан и природный парк Башпынар.',
      'Двигаясь по этому маршруту в сторону озера Ковада через Эгирдир, вы сможете совершить пешие прогулки в таких уникальных местах, как природный заповедник дуба Каснак, национальный парк озера Ковада и природный парк каньона Язылы. Древний город Сагалассос на этом маршруте является одним из самых впечатляющих археологических наследий региона.'
    ]
  },
  locations: [
    {
      id: 'melikler',
      title: { tr: 'Melikler Yaylası', en: 'Melikler Plateau', de: 'Melikler Plateau', ru: 'Плато Меликлер' },
      description: {
        tr: ['Yayla, Dedegöl Dağı eteklerinde yer alır. Yenişarbademli İlçesine yaklaşık olarak uzaklığı 15 kilometredir. Kampçılık, yürüyüş ve dağ tırmanışı gibi aktiviteler için tercih edilmektedir. Etrafı çam ağaçlarıyla çevrili olan kamp alanı, Dedegöl Dağı’nın mükemmel manzarasına sahiptir. Düzlük bir alanda ve 1735 rakımdadır. Her yıl Melikler Yaylası ve Dedegöl Dağı’nda mayıs ayında düzenlenen dağcılık şenliği, ulusal seviyede önemli bir aktivitedir. Ayrıca Türkiye\'nin ölçüm yapılan en karanlık noktalarından biri olan Melikler Yaylası’nda her yıl temmuz veya ağustos ayında Gökyüzü Gözlem Şenliği düzenlenmektedir. Melikler Yaylası’nda kampçılık ve gökyüzü gözleminin yanı sıra Dedegöl Dağı’na, Karagöl ve Yeşilgöl’e tırmanış, yayla alanından Pınargözü Mağarası’na ve Yaka Kanyonu’na yürüyüş gibi rotalarda alternatif aktiviteler de yapılabilmektedir.'],
        en: ['Located at the foothills of Mount Dedegöl, approximately 15 kilometers from Yenişarbademli district. It is preferred for activities like camping, hiking, and mountain climbing. The camping area, surrounded by pine trees, has a perfect view of Mount Dedegöl at 1735 altitude. The mountaineering festival held in May is a nationally important activity. Also, one of Turkey\'s darkest measured points, it hosts the Sky Observation Festival in July or August. Alternative activities including ascents to Mount Dedegöl, Karagöl, and Yeşilgöl, or walks to Pınargözü Cave and Yaka Canyon can be done here.'],
        de: ['Das Plateau liegt an den Ausläufern des Berges Dedegöl, etwa 15 Kilometer vom Bezirk Yenişarbademli entfernt. Es wird für Aktivitäten wie Camping, Wandern und Bergsteigen bevorzugt. Der von Pinienwäldern umgebene Campingplatz bietet auf 1735 Metern Höhe einen perfekten Blick auf den Dedegöl. Hier gibt es auch alternative Routen wie den Aufstieg zum Dedegöl-Gipfel, zum Karagöl und zum Yeşilgöl.'],
        ru: ['Плато расположено у подножия горы Дедегёль, примерно в 15 км от района Енишарбадемли. Подходит для кемпинга, походов и альпинизма. Кемпинг, окруженный сосновым лесом на высоте 1735 м, предлагает идеальный вид на гору Дедегёль. Отсюда можно совершать восхождения на вершину Дедегёль, озера Карагёль и Ешильгёль, или прогулки к пещере Пынаргёзю и каньону Яка.']
      },
      mapLink: 'https://www.google.com/maps/dir//Melikler+Yaylası+Piknik+ve+Kamp+alanı+için+kapalıdır,+Yaka,+32510+Yaka%2FAksu%2FIsparta/@37.7016214,31.2911617,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14c53dbbaa50e6c3:0x93a0ac1916a4e646!2m2!1d31.2937366!2d37.7016172!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('dedegol', 6)
    },
    {
      id: 'pinargozu',
      title: { tr: 'Pınargözü Mağarası', en: 'Pınargözü Cave', de: 'Pınargözü Höhle', ru: 'Пещера Пынаргёзю' },
      description: {
        tr: ['Yenişarbademli ilçesinin 11 kilometre batısında yer alan bir mağaradır. İçerisinden debisi 778 lt/sn olan büyük bir kaynak çıkmaktadır. Ayrıca mağaranın içerisinde birçok sifon ve büyük çağlayan vardır. Mağarada yapılan uzun süreli araştırmalarla 16 km’lik bölümü ölçülmüş ancak sonuna kadar henüz ulaşılamamıştır. Belirlenen son nokta girişten +660 m yukarıdadır. Bu yükseklik ülkemizde ölçülen en büyük yüksekliktir. Mağaranın içinde değişik büyüklükte gölcükler, şelaleler, damlataş havuzları ve her türden damlataş birikimleri geniş yer kaplamaktadırlar. Girişte ise saatte hızı 150-160 km olan şiddetli bir rüzgâr vardır. Pınargözü Mağarası’nın uzunluğu, girişe göre yüksekliği, su sıcaklığı (3-4 0C) ve rüzgâr hızı bakımından Türkiye’nin en büyük mağarasıdır. Turizm açısından Avrupa’nın en uzun mağarası olarak da kabul edilmektedir.'],
        en: ['Located 11 kilometers west of Yenişarbademli district. A large spring with a flow rate of 778 lt/sec emerges from inside. The cave features many siphons and large cascading falls. Long-term research has measured a 16 km section, but its end hasn\'t been reached yet. Its mapped final point is +660 m above the entrance, making it the greatest measured elevation difference for a cave in Turkey. There is a fierce wind blowing at 150-160 km/h at the entrance, making it Turkey’s largest cave in various aspects, and it is considered Europe\'s longest cave in tourism terms.'],
        de: ['Eine Höhle 11 Kilometer westlich des Bezirks Yenişarbademli. Von innen tritt eine große Quelle aus. Lange Forschungen haben einen 16 km langen Abschnitt gemessen, aber das Ende wurde noch nicht erreicht. Der gemessene Endpunkt liegt +660 m über dem Eingang. Am Eingang weht ein starker Wind mit 150-160 km/h. Sie gilt auch in touristischer Hinsicht als die längste Höhle Europas.'],
        ru: ['Пещера, расположенная в 11 км к западу от района Енишарбадемли. Изнутри вытекает большой источник. Многолетние исследования измерили 16 км часть, но ее конец еще не достигнут. Был измерен перепад высот +660 м, это самый большой показатель в Турции. У входа дует сильный ветер со скоростью 150-160 км/ч. Считается самой длинной пещерой Европы в туристическом аспекте.']
      },
      mapLink: 'https://www.google.com/maps/dir//Pınargözü+Mağarası,+Yenicami,+32850+Yenişarbademli%2FIsparta/@37.6952705,31.2268218,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x14c53c4d4535cd9f:0xc67ec4b9079429c5!2m2!1d31.3092237!2d37.6951633!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('p%C4%B1nargozu', 7)
    },
    {
      id: 'yaka-kanyonu',
      title: { tr: 'Yaka Kanyonu', en: 'Yaka Canyon', de: 'Yaka Schlucht', ru: 'Каньон Яка' },
      description: {
        tr: ['Melikler Yaylası’na yaklaşık 7,5 kilometre uzaklıkta bulunan kanyonun toplam uzunluğu yaklaşık 4 km, genişliği 1,5 ile 2 metre arasında değişmekte olup sarp ve yalçın kayalıklarının duvar yüksekliği 30 metre den başlayıp 100 metreyi geçmektedir. Kanyonun içerisinde birçok şelale ve doğal havuzlar bulunmaktadır. Eşine az rastlanır nitelikte doğal bir yapıya sahip olan bu kanyonda çok fazla ekipmana ihtiyaç duymadan herkes rahatlıkla yürüyebilir. Fakat yağışlı havalarda kanyon koridoru dar olduğundan, su seviyesi hızla yükseleceği için tehlikeli olabilir.'],
        en: ['Located approximately 7.5 kilometers from Melikler Plateau, the total length of the canyon is about 4 km. Its width varies between 1.5 and 2 meters, and the wall height of its steep rocks starts at 30 meters and exceeds 100 meters. There are many waterfalls and natural pools in the canyon. It is possible to hike easily without needing much equipment, but it can be dangerous in rainy weather due to rapidly rising water levels.'],
        de: ['Die Schlucht, etwa 7,5 Kilometer vom Melikler-Plateau entfernt, hat eine Gesamtlänge von etwa 4 km. Die Breite variiert zwischen 1,5 und 2 Metern, die Steilwände sind über 100 Meter hoch. Es gibt viele Wasserfälle und natürliche Pools. Es ist leicht ohne viel Ausrüstung zu wandern, kann aber bei Regenwetter wegen der ansteigenden Wasserstände gefährlich sein.'],
        ru: ['Расположенный примерно в 7,5 км от плато Меликлер, каньон имеет общую длину около 4 км. Его ширина варьируется от 1,5 до 2 метров, а отвесные скалы превышают 100 метров в высоту. Здесь много водопадов и природных бассейнов. Походы возможны без специального снаряжения, но в дождливую погоду каньон опасен из-за быстрого подъема воды.']
      },
      mapLink: 'https://www.google.com/maps/dir//Unnamed+Road,+32512+Yaka%2FYenişarbademli%2FIsparta/@37.7072461,31.1615463,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c51634426007f3:0x9fa9ea100195643e!2m2!1d31.2439473!2d37.7072748?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('yaka', 3)
    },
    {
      id: 'karagol',
      title: { tr: 'Karagöl Buzul Gölü', en: 'Karagöl Glacial Lake', de: 'Karagöl Gletschersee', ru: 'Ледниковое озеро Карагёль' },
      description: {
        tr: ['Dedegöl Dağının doğusunda yer alan Karagöl, 2500 metrekare büyüklüğe sahip bir buzul gölüdür. Güzel bir doğaya sahip olan Karagöl; sadece Karagöl’ün çevresinde ve Dedegöl Dağının eteklerinde bulunan Dedegöl çiçeği ile dikkat çekmektedir. Göl etrafında kamp yapılabilir, zaman zaman yılkı atlarıyla karşılaşılabilir.'],
        en: ['Located east of Mount Dedegöl, Karagöl is a glacial lake of 2500 square meters. Having beautiful nature, Karagöl draws attention with the Dedegöl flower, found only around the lake and the foothills of Mount Dedegöl. Camping is possible around the lake, and sometimes wild horses can be encountered.'],
        de: ['Karagöl östlich des Berges Dedegöl ist ein Gletschersee von 2500 Quadratmetern. Er hat eine wunderschöne Natur und fällt durch die Dedegöl-Blume auf, die nur um den See herum zu finden ist. Camping am See ist möglich, und manchmal trifft man auf Wildpferde.'],
        ru: ['Карагёль, расположенное к востоку от горы Дедегёль, представляет собой ледниковое озеро площадью 2500 кв. метров. Привлекает внимание цветком Дедегёль, который растет только рядом с озером. Возле озера можно разбить лагерь, а иногда встретить диких лошадей.']
      },
      mapLink: 'https://tr.wikiloc.com/gezi-yuruyus-rotalari/karagol-patika-dedegol-4784051',
      images: getImages('karagol', 4)
    },
    {
      id: 'yesilgol',
      title: { tr: 'Yeşilgöl', en: 'Yeşilgöl', de: 'Yeşilgöl', ru: 'Ешилгёль' },
      description: {
        tr: ['Dedegöl Dağı’nın batısında yer alan Yeşilgöl, bahar aylarında karların erimesiyle birlikte oluşan ve yaz aylarında suyu gittikçe azalan göl, keşfedilmeyi bekleyen bir cennettir. Melikler yaylasından başlayan yürüyüş parkuru, yaklaşık 3 saat sürmektedir. Gölün etrafında kap atılabilecek yerler ve kar sularının oluşturduğu bir dere mevcut.'],
        en: ['Located west of Mount Dedegöl, Yeşilgöl forms with melting snows in spring and gradually decreases in summer. The walking track starting from Melikler plateau takes about 3 hours. There are places to camp around the lake and a stream formed by snow waters.'],
        de: ['Westlich des Berges Dedegöl gelegen, bildet sich Yeşilgöl im Frühjahr mit schmelzendem Schnee und nimmt im Sommer allmählich ab. Die Wanderstrecke, die vom Melikler-Plateau ausgeht, dauert etwa 3 Stunden. Es gibt Campingplätze um den See und einen durch Schneewasser gebildeten Bach.'],
        ru: ['Ешилгёль, расположенное к западу от горы Дедегёль, образуется весной из талого снега, а к лету постепенно высыхает. Пешеходный маршрут от плато Меликлер занимает около 3 часов. Вокруг озера есть места для кемпинга и ручей из талых вод.']
      },
      mapLink: 'https://tr.wikiloc.com/gezi-yuruyus-rotalari/dedegol-yesilgol-145549482',
      images: getImages('yesilgol', 2)
    },
    {
      id: 'kuzukulagi',
      title: { tr: 'Kuzukulağı Yaylası', en: 'Kuzukulağı Plateau', de: 'Kuzukulağı Plateau', ru: 'Плато Кузукулагы' },
      description: {
        tr: ['Türkiye’nin en önemli uzun duvar tırmanış rotalarının bulunduğu Kuzukulağı Yaylası ve civarına yıl içinde dört mevsim boyunca binlerce doğa sporcusu kaya tırmanışı, uzun duvar tırmanışı, sportif kaya tırmanışı, dağcılık, tur kayağı, kampçılık, doğa yürüyüşü, bisiklet ve motocross için kullanılmaktadır. Önemli uzun duvar tırmanış rotalarının bulunduğu bölgenin sahip olduğu kaya tırmanış ve doğa sporları potansiyeli oldukça fazladır. Yaz aylarında gerçekleştirilen Kuzukulağı Doğa Sporları Festivali her sene çok sayıda ziyaretçi ağırlamaktadır. Yerli ve yabancı rota açıcılar tarafından uluslararası standartlarda meydana getirilen, uzunlukları 20 ila 600 metre arasında değişen tırmanış rotaların sayısı her geçen yıl artmaktadır. Birçok endemik bitki türü ve yaban hayat çeşitliliğine ev sahipliği yapan bölge, çok sayıda yürüyüş rotasına sahiptir.'],
        en: ['Kuzukulağı Plateau, possessing Turkey\'s most important big wall climbing routes, is used year-round by thousands of nature athletes for activities such as climbing, mountaineering, skiing, camping, and cycling. The Kuzukulağı Nature Sports Festival held in the summer welcomes numerous visitors annually. With climbing routes varying from 20 to 600 meters in length, set at international standards by domestic and foreign route setters, its popularity increases every year.'],
        de: ['Das Kuzukulağı-Plateau, das über die wichtigsten Kletterrouten für lange Wände in der Türkei verfügt, wird das ganze Jahr über von Tausenden von Natursportlern genutzt. Das im Sommer abgehaltene Kuzukulağı-Natursportfestival begrüßt jährlich zahlreiche Besucher. Mit Kletterrouten von 20 bis 600 Metern Länge, die von in- und ausländischen Routenerschließern nach internationalen Standards festgelegt wurden.'],
        ru: ['Плато Кузукулагы, где находятся самые важные маршруты для альпинизма по большим стенам в Турции, круглый год используется тысячами спортсменов для скалолазания, кемпинга и треккинга. Летний фестиваль спорта на природе Кузукулагы ежегодно принимает множество посетителей. Место славится маршрутами длиной от 20 до 600 метров, созданными по международным стандартам.']
      },
      mapLink: 'https://www.google.com/maps/dir//J6WJ%2B65,+32512+Eldere%2FAksu%2FIsparta/@37.6243836,31.2366017,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c5196dc34cbd29:0x136850077028d333!2m2!1d31.2304254!2d37.6456191?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('kuzu', 3)
    },
    {
      id: 'zindan',
      title: { tr: 'Zindan Mağarası', en: 'Zindan Cave', de: 'Zindan Höhle', ru: 'Пещера Зиндан' },
      description: {
        tr: [
          'Aksu ilçesinin 2 kilometre kuzeydoğusunda bulunan Zindan Mağarası, Aksu Çayı boğazının güneye bakan yamacında, deniz seviyesinden 1300 metre yükseklikte yer alır. 765 metre uzunluğunda olan mağaranın içi tamamen aydınlatılmıştır. Yatay yönde gelişmiş olan mağaranın içinde yürümek ve gezmek son derece rahat ve kolaydır. Yarı aktif olan mağara içinde değişik damlataş, akmataş, kenartaş ve yer altı deresinin oluşturduğu aşınım ve sarkıtlar bulunmaktadır. Ayrıca, mağara içinde bazı kesimlerde minyatür kanyonlar oluşmuştur. Mağaranın sonunda, hamam diye isimlendirilen bölümün tabanında mozaik biçimli özgün kalsit kristalleri bulunmaktadır. Yapılan analizler sonucu, mağara içinde akan suyun kalsiyum ve magnezyum değerlerinin yüksek olduğu tespit edilmiştir.',
          'Mağara girişinde siyah, beyaz ve kırmızı taş tesseradan yapılmış Eurymedon (Köprü Çayı Tanrısı) başı, iki yanında yunus motifi, altta ve üstte kanatlı uçan erkek motifleri olan mozaikler bulunmaktadır.'
        ],
        en: [
          'Zindan Cave, located 2 kilometers northeast of Aksu district, lies on the south-facing slope of the Aksu Stream gorge. The 765-meter-long cave is completely illuminated inside. Walking and exploring within the horizontally developed cave is quite easy. It contains stalactites and miniature canyons. Peculiar mosaic-shaped calcite crystals can be found at the end of the cave. The flowing water features high calcium and magnesium values.',
          'At the cave entrance, there are mosaics made of black, white, and red stone tessera displaying the head of Eurymedon (God of Köprü Stream), along with dolphin and winged flying male motifs.'
        ],
        de: [
          'Die Zindan-Höhle, 2 Kilometer nordöstlich des Bezirks Aksu gelegen, befindet sich am nach Süden ausgerichteten Hang der Aksu-Schlucht auf 1300 Metern Höhe. Die 765 Meter lange Höhle ist innen vollständig beleuchtet und sehr einfach zu durchqueren. Am Ende der Höhle befinden sich originelle Mosaik-förmige Calcitkristalle.',
          'Am Eingang der Höhle befinden sich Mosaike aus schwarzen, weißen und roten Stein-Tesseren, die den Kopf von Eurymedon (Gott des Köprü-Baches) sowie Delfin- und fliegende Männer-Motive zeigen.'
        ],
        ru: [
          'Пещера Зиндан, расположенная в 2 км к северо-востоку от района Аксу, находится на высоте 1300 метров. Пещера длиной 765 метров полностью освещена изнутри, по ней очень легко ходить. В конце пещеры находятся оригинальные мозаичные кристаллы кальцита, а вода здесь богата кальцием и магнием.',
          'У входа в пещеру находятся мозаики из черных, белых и красных каменных тессер, изображающие голову Эвримедона (бога реки Кёпрю), а также мотивы дельфинов и летающих людей.'
        ]
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KU-bpHV0EsUUMb-NSPCIGTPR&daddr=Çayı,+Çay,+32510+Aksu/Isparta',
      images: getImages('zindan', 4)
    },
    {
      id: 'baspinar',
      title: { tr: 'Başpınar Tabiat Parkı', en: 'Başpınar Nature Park', de: 'Naturpark Başpınar', ru: 'Природный парк Башпынар' },
      description: {
        tr: ['Aksu İlçesi sınırlarında, Sorgun Barajı yolu üzerinde yer alan Başpınar Tabiat Parkı; Aksu İlçe Merkezine 8 km uzaklıktadır. Aksu İlçe Merkezi’nden Zindan Mağarası’na giden yol üzerinde, sırasıyla Zindan Mağarası ve balık çiftlikleri geçilerek Başpınar Tabiat Parkı’na ulaşılır. Yayla alanında içme suyu olarak kullanılabilecek bir kaynak mevcuttur.'],
        en: ['Located within the borders of Aksu District on the way to Sorgun Dam, Başpınar Nature Park is 8 km from the Aksu District Center. It can be reached by passing Zindan Cave and fish farms on the road. There is a spring suitable for drinking water in the plateau area.'],
        de: ['Der Naturpark Başpınar innerhalb der Grenzen des Bezirks Aksu auf dem Weg zum Sorgun-Staudamm liegt 8 km vom Bezirkszentrum Aksu entfernt. Man erreicht ihn, indem man auf der Straße die Zindan-Höhle und Fischfarmen passiert. Auf dem Plateau gibt es eine als Trinkwasser nutzbare Quelle.'],
        ru: ['Природный парк Башпынар, расположенный в границах района Аксу на пути к плотине Соргун, находится в 8 км от центра района Аксу. Добраться до него можно, проехав мимо пещеры Зиндан и рыбных ферм. На плато есть источник, пригодный для питья.']
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KTGqRYXuEsUUMUAwt5s5_2r5&daddr=Kurtuluş,+yol+üzeri+Sorgun+Barajı,+32510+Aksu/Isparta',
      images: getImages('basp%C4%B1nar', 4)
    },
    {
      id: 'kovada',
      title: { tr: 'Kovada Gölü Milli Parkı', en: 'Lake Kovada National Park', de: 'Kovada-See-Nationalpark', ru: 'Национальный парк озера Ковада' },
      description: {
        tr: ['Eğirdir İlçesi’nin 29 kilometre güneyinde bulunan Kovada Gölü, oldukça sığ bir göldür. Benzersiz flora zenginliği ve yaban hayatı çeşitliliğinin yanı sıra, açık havada dinlenme ve eğlenme imkanları bakımından büyük potansiyele sahip olması, Kovada Gölü ve çevresini milli park yapmaya yetmiştir. 6534 hektar büyüklüğündeki milli park ve çevresinde, doğa araştırması, kamp yapma, yürüyüş, manzara seyretme, kuş gözlemciliği ve tırmanma yapılabilmektedir.'],
        en: ['Located 29 kilometers south of Eğirdir District, Lake Kovada is a quite shallow lake. Besides its unique flora richness and wildlife diversity, its potential for outdoor recreation and entertainment was enough to make the area a national park. Activities like nature research, camping, hiking, scenery viewing, bird watching, and climbing can be done in the 6534-hectare national park.'],
        de: ['Der 29 Kilometer südlich des Bezirks Eğirdir gelegene Kovada-See ist ein ziemlich flacher See. Seine einzigartige Flora und Tierwelt sowie sein großes Potenzial für Erholung im Freien reichten aus, ihn zu einem Nationalpark zu machen. Auf 6534 Hektar können Sie campen, wandern, Vögel beobachten und die Landschaft bewundern.'],
        ru: ['Озеро Ковада, расположенное в 29 км к югу от района Эгирдир, является довольно мелким озером. Его богатая флора и животный мир, а также потенциал для отдыха на открытом воздухе позволили создать здесь национальный парк. На площади в 6534 гектара можно заняться кемпингом, походами, наблюдением за птицами и альпинизмом.']
      },
      mapLink: 'https://www.google.com/maps/dir//kovada+gölü+milli+parkı/@37.2735873,30.439671,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c455353adecb5b:0xd16f30b17d5a8dc9!2m2!1d30.8743411!2d37.6287896?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('kovada', 6)
    },
    {
      id: 'kasnak',
      title: { tr: 'Kasnak Meşesi Tabiatı Koruma Alanı', en: 'Kasnak Oak Nature Reserve', de: 'Naturschutzgebiet Kasnak-Eiche', ru: 'Природный заповедник дуба Каснак' },
      description: {
        tr: ['Ülkemizin endemik meşe türünü içerisinde barındıran Kasnak Meşesi Tabiatı Koruma Alanı, Isparta ili, Eğirdir ilçesi, Yukarıgökdere Köyü sınırları içerisinde yer alan, 27.07.1987 tarihinde, Kasnak Meşesinin doğal olarak meşcere kurduğu tek alan olması sebebiyle Tabiatı Koruma Alanı statüsü ile koruma altına alınmış ve 1.300 hektar büyüklüğe sahip bir doğa parçasıdır. Biyolojik çeşitlilik açısından son derece zengin bir alan olan Kasnak Meşesi Tabiatı Koruma Alanında yapılan akademik çalışmalarda 442 bitki türü tespit edilmiş olup bunların 69 adeti endemik bitkidir. Kasnak Meşesi Tabiatı koruma Alanı Dünyada kasnak meşesi ağaçlarının oluşturduğu tek ormanlık alan özelliğini taşıyor.'],
        en: ['Hosting Turkey\'s endemic oak species, the Kasnak Oak Nature Reserve is a 1,300-hectare nature area under protection since 1987 as it is the only area providing a natural stand for Kasnak oaks. Highly rich in biological diversity, academic studies here have identified 442 plant species, 69 being endemic. The Kasnak Oak Nature Reserve is the only forest area in the world formed by Kasnak oak trees.'],
        de: ['Das Naturschutzgebiet Kasnak-Eiche beherbergt die endemischen Eichenarten der Türkei und steht seit 1987 unter Schutz, da es das einzige Gebiet ist, in dem Kasnak-Eichen natürlich wachsen. Es ist reich an Biodiversität: Akademische Studien haben 442 Pflanzenarten identifiziert, von denen 69 endemisch sind. Es ist das weltweit einzige Waldgebiet, das aus Kasnak-Eichen besteht.'],
        ru: ['Этот природный заповедник площадью 1300 гектаров охраняется с 1987 года и является единственным местом естественного произрастания эндемичного дуба Каснак. Заповедник очень богат биологическим разнообразием: здесь выявлено 442 вида растений, 69 из которых эндемичны. Это единственный в мире лес из дубов Каснак.']
      },
      mapLink: 'https://www.google.com/maps/dir//Balkırı+Köyü,+32502+Eğirdir%2FIsparta/@37.7481184,30.744045,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c5a92004c3b575:0xecc5d09608e0d024!2m2!1d30.826446!2d37.7481471?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('kasnak', 3)
    },
    {
      id: 'yazili-kanyon',
      title: { tr: 'Yazılı Kanyon Tabiat Parkı', en: 'Yazılı Canyon Nature Park', de: 'Naturpark Yazılı Schlucht', ru: 'Природный парк каньона Язылы' },
      description: {
        tr: ['Sütçüler İlçesi’ne 20 km uzaklıkta bulunan Yazılı Kanyon Tabiat Parkı, 600 ha.lık bir alanı kapsamaktadır. Kanyonun yan duvarlarında Bizans dönemine ait ibadet yapılan bölümler, sunak yerleri ve yazılar bulunmaktadır. Bu yazıtlar nedeniyle kanyona “Yazılı Kanyon” denilmiştir. Kanyonun derinliği 100 ile 400 m.dir. Çandır Köyü hudutları içerisinde kalan park, 1989 yılında tabiat parkı olarak tescil edilmiştir. Tabiat parkı, zengin bitki örtüsü ve yaban hayatı ile seyrine doyum olmayan eşsiz doğal güzellikleriyle turistlerin sürekli ziyaret ettiği bir yerdir. Tarihi “Kral Yolu”nun da geçtiği kanyon, tapınak ve kaya yazıtları ile tarihi önem arz etmektedir. Aziz Paul, Perge\'den Pisidia Antiokheia’ya giderken bu kanyondan geçmiştir. Park alanı içerisinde, halkın dinlenmesine uygun kamp alanı bulunmaktadır.'],
        en: ['Located 20 km from Sütçüler District, Yazılı Canyon Nature Park covers 600 hectares. The side walls of the canyon feature worship sections, altars, and inscriptions dating back to the Byzantine period. These inscriptions gave the canyon its name "Yazılı" (Written). The park registered in 1989 features unique natural beauties and historical significance with the historical "King\'s Road" passing through it. St. Paul passed through this canyon from Perge to Pisidia Antiokheia. The park contains a camping area suitable for relaxation.'],
        de: ['Der 20 km vom Bezirk Sütçüler entfernte Naturpark Yazılı Canyon umfasst 600 Hektar. Die Seitenwände der Schlucht weisen Kultstätten, Altäre und Inschriften aus der byzantinischen Zeit auf, denen die Schlucht ihren Namen verdankt. Der 1989 registrierte Park beeindruckt mit seiner einzigartigen Natur und der historischen Königsstraße. Der hl. Paulus verbrachte diesen Canyon auf dem Weg von Perge nach Pisidia Antiochia.'],
        ru: ['Природный парк каньона Язылы, расположенный в 20 км от района Сютчулер, занимает площадь 600 гектаров. На боковых стенах каньона имеются места для богослужений, алтари и надписи византийского периода, благодаря которым каньон и получил название "Письменный" (Yazılı). Через каньон проходит историческая Королевская дорога, а Св. Павел проходил здесь по пути из Перге в Писидийскую Антиохию. В парке есть места для кемпинга.']
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KbGrnn0a-MQUMQB2GncufZWP&daddr=Çandır+Köyü+Yolu,+32952+Çandır/Sütçüler/Isparta',
      images: getImages('yaz%C4%B1l%C4%B1', 4)
    },
    {
      id: 'sagalassos',
      title: { tr: 'Sagalassos Antik Kenti', en: 'Ancient City of Sagalassos', de: 'Antike Stadt Sagalassos', ru: 'Древний город Сагалассос' },
      description: {
        tr: ['Sagalassos Antik Kenti, Burdur’un Ağlasun ilçesinde yer almaktadır. Akdağ yamaçlarına kurulan kent, denizden 1500-1700 metre kadar yüksekliktedir. Roma döneminde Pisidia bölgesinin en önemli kentlerinden biri olmuştur. Sagalassos’ta bulunan yapıların büyük bir çoğunluğu Roma dönemine aittir. Kentte ilk yerleşim izleri günümüzden 12 bin yıl öncesine kadar uzanmaktadır. MS 13. yüzyılın başlarında ise Selçukluların, son Bizans askeri kale yerleşimini ortadan kaldırmasıyla kentte yaşam sona ermiştir. Sagalassos, Anadolu\'nun en iyi korunagelmiş antik kentlerinden biridir. Kente girişte, saray büyüklüğünde bir kent konağının avlusu ve salonları yer alır. Kentin alt kısmına büyük Roma İmparatorluk Hamamı hâkimdir. Aşağı agora etrafında, agora çeşmesi ile Apollo Klarios Tapınağı’nın ve Hadrian Çeşmesi’nin kalıntıları yer alır. Yukarı agora etrafında pek çok anıt açığa çıkarılmış ve onarılarak ayağa kaldırılmıştır. Kentin en belirgin yapısı, suları günümüzde de çağlayan Antoninler Çeşmesi’dir. Kalıntılar arasında kent meydanına açılan iki anıtsal kemer, agoranın dört köşesinde yükselen onursal sütunlar, belediye binası, kent konseyi binası, kilise ve dans eden kızlar kabartmaları ile tanınan heroon dikkat çekicidir. Kentin antik kütüphanesi ile tiyatrosunun kalıntıları da günümüze ulaşmıştır.'],
        en: ['The Ancient City of Sagalassos is located in the Ağlasun district of Burdur. Built on the slopes of Akdağ, the city is at an altitude of 1500-1700 meters above sea level. It was one of the most important cities of the Pisidia region during the Roman period. Most structures date to the Roman period. Sagalassos is one of the best-preserved ancient cities in Anatolia. It features the ruins of the Apollo Klarios Temple, Hadrian\'s Fountain, and the magnificent Antonine Fountain, which still has flowing water today. The city also includes an ancient library, theater ruins, a grand Roman Imperial Bath, and a prominent heroon.'],
        de: ['Die antike Stadt Sagalassos liegt im Bezirk Ağlasun in Burdur. Die Stadt wurde an den Hängen des Akdağ erbaut und liegt auf einer Höhe von 1500-1700 Metern über dem Meeresspiegel. Es war in der Römerzeit eine der wichtigsten Städte der Pisidien-Region. Sagalassos ist eine der am besten erhaltenen antiken Städte Anatoliens, bekannt für den Apollo-Klarios-Tempel, den Hadriansbrunnen und den prachtvollen Antoninus-Brunnen, der bis heute noch Wasser führt.'],
        ru: ['Древний город Сагалассос находится в районе Агласун провинции Бурдур. Построенный на склонах Акдага, он возвышается на 1500-1700 метров. Это один из наиболее хорошо сохранившихся древнеримских городов в Анатолии. Здесь находятся руины храма Аполлона Клариоса, фонтана Адриана и великолепного фонтана Антонина, воды которого по сей день низвергаются каскадами.']
      },
      mapLink: 'https://www.google.com/maps/dir//Kıraç,+15800+Ağlasun%2FBurdur/@37.6772662,30.4345541,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c44a0895555555:0xab8df9d563ad36f3!2m2!1d30.5169551!2d37.6772949?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('sagalassos', 7)
    }
  ]
};
