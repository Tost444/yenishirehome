import { AppRoute } from './types';
import { getImages } from './data_intro';

export const dataRota3: AppRoute = {
  id: 'rota-3',
  label: { tr: 'Rota 3', en: 'Route 3', de: 'Route 3', ru: 'Маршрут 3' },
  title: { 
    tr: '3. Rota: Leylekler Vadisi – Beyşehir – Eflatunpınar – Fasıllar', 
    en: '3rd Route: Storks Valley – Beyşehir – Eflatunpınar – Fasıllar', 
    de: '3. Route: Storchental – Beyşehir – Eflatunpınar – Fasıllar', 
    ru: '3-й Маршрут: Долина Аистов – Бейшехир – Эфлатунпинар – Фасиллар' 
  },
  intro: {
    tr: [
      'Beyşehir yönüne ilerlerken yol üzerinde bulunan Yeşildağ Mahallesi’ndeki Leylekler Vadisi, göçmen leyleklerin doğal ortamlarında gözlemlenebileceği nadir yerlerdendir.',
      'Beyşehir Gölü kıyısında bulunan Karaburun Plajı, Türkiye’nin en büyük tatlı su gölü olan Beyşehir Gölü’nde serinlemek isteyenler için ideal bir duraktır.',
      'İlçe merkezine ulaştığınızda, Selçuklu eserlerini ve tarihi çarşıyı gezebilir, yöresel lezzetleri tadabilirsiniz. Merkeze yaklaşık 10 km mesafedeki Nilüfer Bahçesi’nde gölde kayık turu yapabilir; yaklaşık 10 km daha ileride Eflatunpınar Hitit Anıtı’nı, yine ilçe merkezine 20 km mesafede yer alan Fasıllar Hitit Anıtı’nı ziyaret edebilirsiniz.'
    ],
    en: [
      'Proceeding towards Beyşehir, Storks Valley in Yeşildağ Neighborhood along the way is a rare place where migratory storks can be observed in their natural habitats.',
      'Karaburun Beach, located on the shores of Lake Beyşehir, is an ideal stop for those wishing to cool off in Lake Beyşehir, Turkey\'s largest freshwater lake.',
      'When you reach the district center, you can visit Seljuk works and the historical bazaar, and taste local delicacies. You can take a boat tour in the Lotus Garden, about 10 km from the center; visit the Eflatunpınar Hittite Monument 10 km further, and the Fasıllar Hittite Monument 20 km from the center.'
    ],
    de: [
      'Das Storchental im Stadtteil Yeşildağ ist ein seltener Ort, an dem Zugstörche in ihrer natürlichen Umgebung auf dem Weg nach Beyşehir beobachtet werden können.',
      'Der Karaburun-Strand am Ufer des Beyşehir-Sees ist ein idealer Stopp für alle, die sich im größten Süßwassersee der Türkei abkühlen möchten.',
      'Im Zentrum können Sie seldschukische Werke besichtigen und lokale Köstlichkeiten probieren. Im Lotusgarten, etwa 10 km vom Zentrum entfernt, können Sie eine Bootstour unternehmen, 10 km weiter das hethitische Denkmal Eflatunpınar und 20 km vom Zentrum entfernt das hethitische Denkmal Fasıllar besichtigen.'
    ],
    ru: [
      'Долина Аистов в районе Ешильдаг — редкое место по пути в Бейшехир, где можно наблюдать за перелетными аистами в их естественной среде.',
      'Пляж Карабурун, расположенный на берегу крупнейшего пресноводного озера Турции Бейшехир, — идеальная остановка, чтобы освежиться в воде.',
      'В центре города можно посетить сельджукские памятники, исторический базар и попробовать местные деликатесы. Вы можете отправиться на прогулку на лодке по Саду Лотосов (в 10 км от центра); посетить Хеттский памятник Эфлатунпинар в 20 км и памятник Фасиллар.'
    ]
  },
  locations: [
    {
      id: 'beysehir-golu',
      title: { tr: 'Beyşehir Gölü Milli Parkı', en: 'Lake Beyşehir National Park', de: 'Beyşehir-See Nationalpark', ru: 'Национальный парк озера Бейшехир' },
      description: {
        tr: ['Türkiye\'nin en büyük tatlı su kaynağı olan Beyşehir Gölü\'nde Beyşehir ve Kızıldağ olmak üzere iki ayrı millî park bulunmaktadır. 88 bin 750 hektarlık alanı kapsayan Beyşehir Gölü Milli Parkı Türkiye’nin en geniş milli parkıdır. Beyşehir Gölü Millî Parkı’nın orman formasyonunu ardıç, karaçam, göknar, sedir ve meşe türleri oluşturuyor. Ağaçlar yer yer göl kenarına kadar uzanarak Beyşehir Gölü\'nün koylarını ve körfezlerini görsel açıdan eşsiz bir manzaraya kavuşturuyor. Üstün değerdeki peyzaj güzellikleri, göçmen kuşlar için iyi bir barınak olması, potansiyel göl sularına dayalı sporlarına elverişli göl kıyılarının bulunması ile Selçuklu dönemine ait kültürel zenginlikler olması Beyşehir Gölü Millî Parkı\'nın kaynak değerlerini daha da önemli hale getirmektedir. Göl içerisindeki adalar su kuşlarının yuvalanması ve kuluçkalanmaları için önem teşkil ederken, adalar dalgıç türleri, kuğular, karabataklar, bazı balıkçıl türleri ve ördekler için kışlama ve kuluçka alanı olarak biliniyor. Yine, millî park bünyesindeki göl suyunun alkalin özellikte olması, sazan, levrek vb. balık çeşitlerinin bulunmasının yanında, su kaplumbağası ve yılanlar ise gölün faunasına zenginlik katıyor. Yoğun ziyaret dönemi Mayıs ile Ekim ayları arası olan Beyşehir Gölü Millî Parkı ziyaretçilere yeşil örtü ile zengin sahil kesimlerinde günübirlik çadır ve karavan kampı imkânı sunarken, farklı konaklama tercihleri için ise ilçe merkezinden yararlanılabiliyor.'],
        en: ['Lake Beyşehir, Turkey\'s largest freshwater source, contains two separate national parks. Covering 88,750 hectares, Lake Beyşehir National Park is Turkey\'s largest national park. The forest formations feature juniper, black pine, fir, cedar, and oak trees reaching up to the lakeshore in places, offering a visually stunning scenery. Being a great shelter for migratory birds and home to islands perfect for wintering ducks and swans, it presents profound biodiversity. During its peak season from May to October, the park offers daily tent and caravan camping opportunities.'],
        de: ['Der Beyşehir-See, das größte Süßwasserreservoir der Türkei, beherbergt zwei Nationalparks. Er ist mit 88.750 Hektar der größte Nationalpark der Türkei. Wacholder-, Schwarzkiefern-, Tannen-, Zedern- und Eichenarten ragen bis ans Seeufer. Er ist ein wichtiger Zufluchtsort für Zugvögel und verfügt über Inseln, die als Brutplätze dienen. Der Nationalpark, der von Mai bis Oktober von Besuchern stark frequentiert wird, bietet großartige Campingmöglichkeiten.'],
        ru: ['Озеро Бейшехир, крупнейший пресноводный водоем Турции, включает два национальных парка. Национальный парк озера Бейшехир (88 750 гектаров) является крупнейшим в Турции. Лес из можжевельника, черной сосны, пихты, кедра и дуба простирается до самых берегов, создавая уникальные пейзажи. Острова озера являются местом зимовки лебедей, бакланов и уток. В парке с мая по октябрь открыты места для кемпинга и автодомов.']
      },
      images: getImages('beysehirmp', 5)
    },
    {
      id: 'beysehir',
      title: { tr: 'Beyşehir', en: 'Beyşehir', de: 'Beyşehir', ru: 'Бейшехир' },
      description: {
        tr: [
          'M.Ö. 8.000 yıllık geçmişinde birçok medeniyete ev sahipliği yapan Beyşehir, köklü geçmişinden miras kalan tarihi yapılarıyla, muhteşem doğal güzellikleriyle, zengin kültürüyle ayrıcalıklı bir yere sahiptir.',
          'Beyşehir’in 10 km. kuzeybatısında yer alan, günümüzden yaklaşık 8.000 yıl öncesine tarihlenen bir Neolitik Çağ höyüğü olan Erbaba Höyüğü Beyşehir için en erken buluntuları sağlamaktadır. Kurt Beşiği ve Eflatun Pınar Anıtlarından da anlaşılacağı üzere kentin en önemli devrini Hititler Dönemi’nde yaşadığı düşünülmektedir. M.Ö. 2.000 yılları arasında Hititler; Eflatunpınar ve Fasıllar\'da ölmez eserler bırakmışlardır.',
          'M.Ö. 78-74 yılları arasında Roma İmparatorluğu hâkimiyetine geçen kentin Türk yurdu olması yönündeki çalışmalar Anadolu Selçukluları zamanında başlamıştır. Daha sonra maruz kaldığı Moğol istilasından sonra ise kent, Viranşehir adıyla anılmaya başlanmıştır. Eşrefoğlu Beyliği’nin kuruluşuyla birlikte ise çeşitli aşamalardan geçip en son Beyşehir adını almıştır.',
          'Beyşehir’de gezilecek başlıca yerler; Eşrefoğlu Camii ve külliyesi, taş köprü, Kubadabad Sarayı, Eflatunpınar Hitit Anıtı, Fasıllar Anıtı, nilüfer bahçesi, Karaburun Plajıdır.'
        ],
        en: [
          'Beyşehir, which has hosted many civilizations in its 8,000-year history, holds a privileged place with its historical structures, magnificent natural beauties, and rich culture.',
          'Erbaba Mound, a Neolithic mound dating back to 8,000 years ago located 10 km northwest of Beyşehir, provides the earliest finds. Hittites left immortal monuments in Eflatunpınar and Fasıllar in 2000 BC.',
          'The city came under Roman Empire rule between 78-74 BC, and its Turkification process began during the Anatolian Seljuk period. It took its final name "Beyşehir" with the foundation of the Eşrefoğlu Principality.',
          'The main places to visit in Beyşehir are the Eşrefoğlu Mosque and Complex, stone bridge, Kubadabad Palace, Eflatunpınar, Fasıllar Monument, Lotus Garden, and Karaburun Beach.'
        ],
        de: [
          'Beyşehir, das in seiner 8000-jährigen Geschichte viele Zivilisationen beherbergt hat, nimmt mit seinen historischen Strukturen, großartigen Naturschönheiten und seiner reichen Kultur einen priviligierten Platz ein.',
          'Der Erbaba-Hügel, der 8000 Jahre in die Jungsteinzeit zurückreicht, bietet die frühesten Funde. Auch die Hethiter hinterließen um 2000 v. Chr. unsterbliche Denkmäler.',
          'Die Stadt geriet unter römische und später unter seldschukische Herrschaft und erhielt ihren endgültigen Namen Beyşehir mit der Gründung des Eşrefoğlu-Fürstentums.',
          'Hauptsehenswürdigkeiten sind die Eşrefoğlu-Moschee, die Steinbrücke, der Kubadabad-Palast, die Hethitischen Denkmäler und der Lotusgarten.'
        ],
        ru: [
          'Бейшехир, принимавший множество цивилизаций в своей 8000-летней истории, занимает привилегированное место благодаря историческим зданиям, великолепной природе и богатой культуре.',
          'Курган Эрбаба, датируемый 8000-летней давностью, хранит самые ранние находки. Хетты также оставили бессмертные памятники в Эфлатунпинаре и Фасилларе в 2000 г. до н.э.',
          'Город перешел под власть Римской империи, затем начался процесс заселения турками-сельджуками. Позже, с основанием княжества Эшрефоглу, он получил имя Бейшехир.',
          'Главные достопримечательности: мечеть Эшрефоглу, каменный мост, дворец Кубадабад, памятники хеттов, сад Лотосов и пляж Карабурун.'
        ]
      },
      mapLink: 'https://www.google.com/maps/dir//Beyşehir,+Konya/@37.6799032,31.6418971,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14dab604762c398f:0xf9f310ea1be63238!2m2!1d31.724299!2d37.679796!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('bey%C5%9Fehir', 8)
    },
    {
      id: 'esrefoglu',
      title: { tr: 'Eşrefoğlu Camii', en: 'Eşrefoğlu Mosque', de: 'Eşrefoğlu Moschee', ru: 'Мечеть Эшрефоглу' },
      description: {
        tr: [
          'Beyşehir şehir merkezinde olup en eski Selçuklu Beylik dönemi yapılarındandır. Selçuklu Hakanı Sultan Sancar\'ın emri ile 1134 yılında yaptırılmış, daha sonra Eşrefoğlu Süleyman Bey tarafından 1297 yılında bugünkü şekliyle yeniden inşa edilmiştir. Halen ibadete ve ziyarete açıktır.',
          '7 asırlık cami, taş, tuğla, çini ve renkli boyama gibi birçok süsleme sanatının bir arada ve yoğun olarak kullanıldığı tek ahşap cami olması nedeniyle Türk mimarlık tarihinde özel bir yeri vardır. Cami, ahşap direkler üzerine oturtulan düz tavanlı camilerin en büyüğü olarak biliniyor. Caminin ahşap olmasına rağmen 7 asır çürümeden ayakta kalabilmesinin sırrının bugün bile bilinmediği caminin önemli özelliklerinden biri de ortasında bulunan, 4-5 metre derinliğindeki "karlık" denilen kuyudur. Karlığın, caminin çürümesini önlemek amacıyla yapıldığı sanılmaktadır. Karlığa dolan karın yavaş yavaş erimesiyle, nemin, caminin içindeki ağaçların ömrünü uzattığı sanılıyor. UNESCO tarafından 2012 yılında Dünya Mirası Geçici Listesi\'ne alınan Eşrefoğlu Camii, bir türbe, kervansaray ve hamam ile külliye şeklinde 1296-1299 yılları arasında Eşrefoğlu Beyliği döneminde Eşrefoğlu Seyfettin Süleyman Bey tarafından yaptırılmıştır. 2023\'te UNESCO Dünya Mirası listesine girmiştir. Taç kapısı, Selçuklu işi çini mozaiğiyle bezeli mihrabı, mükemmel bir künde kari tekniğiyle yapılmış minberi, ahşap sütunları, kalem işçiliği ile süslenmiş ahşap tavanı ve sayısız güzelliği ile bir müzeyi andırır. Beyşehir gölünün yanı başında bulunan bu camiyi muhakkak ziyaret etmelisiniz.',
          'Caminin çevresinde Eşrefoğlu Süleyman Bey Bedesteni ve hamamı, türbesi, tarihi hale kapısı, İsmail Ağa Medresesi gibi birçok tarihi yapı bulunmaktadır.'
        ],
        en: [
          'Located in Beyşehir city center, it is one of the oldest Seljuk Principality structures, originally built in 1134 and rebuilt in 1297. It is still open to worship and visits.',
          'The 7-century-old wooden mosque is the largest flat-ceilinged mosque built on wooden columns and stands without decaying. In the middle of the mosque is a 4-5 meter deep pit called "karlık" (snow pit), believed to have provided moisture regulating the trees to prevent decay. Listed as a UNESCO World Heritage site in 2023, the mosque is an architectural masterpiece resembling a museum with its wooden columns, tiled mihrab, and brilliant kündekari pulpit.',
          'There are many historical buildings such as bedesten, baths, and madrasah around the mosque.'
        ],
        de: [
          'Sie befindet sich im Stadtzentrum von Beyşehir und ist eines der ältesten Gebäude des seldschukischen Fürstentums. Sie wurde 1134 erbaut und 1297 in ihrer jetzigen Form wiedererrichtet.',
          'Die 7 Jahrhunderte alte Holzmoschee ist die größte Moschee mit flacher Holzdecke. Ein 4-5 Meter tiefes Schneebecken (karlık) in der Mitte der Moschee verhinderte angeblich den Holzverfall durch ständige Luftfeuchtigkeit. Die Eşrefoğlu-Moschee aus den Jahren 1296-1299 wurde 2023 in die UNESCO-Welterbeliste aufgenommen.',
          'Rund um die Moschee befinden sich viele historische Gebäude, wie ein Basar, ein Badehaus und eine Medrese.'
        ],
        ru: [
          'Находится в центре Бейшехира, одна из старейших построек сельджукского княжества. Первоначально построена в 1134 году и перестроена в 1297 году. Открыта для посещения и молитв.',
          'Уникальная деревянная мечеть с плоским потолком и 7-вековой историей. В центре мечети находится колодец для сбора снега (karlık), благодаря влажности от которого древесина сохранилась без гниения веками. Мечеть была внесена в список Всемирного наследия ЮНЕСКО в 2023 году. Она поражает великолепной плиткой михраба и деревянным зодчеством.',
          'Вокруг мечети расположены исторические постройки: базар, баня и медресе.'
        ]
      },
      mapLink: 'https://www.google.com/maps/dir//Eşrefoğlu+Camii,+İçerişehir,+Kale+Sk.+No:21,+42700+Beyşehir%2FKonya/@37.6888359,31.6392159,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14dab60755321469:0x19bc4cdb2fc059a0!2m2!1d31.7186508!2d37.6834831!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('e%C5%9Frefo%C4%9Flu', 10)
    },
    {
      id: 'fasillar',
      title: { tr: 'Fasıllar Hitit Anıtı', en: 'Fasıllar Hittite Monument', de: 'Hethitisches Monument von Fasıllar', ru: 'Хеттский памятник Фасиллар' },
      description: {
        tr: ['Anıt, Dünya\'nın en büyük kaya anıtlarından biridir ve Hititler döneminden kalmadır. Fasıllar Anıtı, Büyük Tanrı\'yı bir dağ tapınağında iki arslan arasında gösterir.Fasıllar anıtı Konya\'nın Beyşehir İlçesi\'ne bağlı, Fasıllar Köyü\'nün güneyine düşen, bir tepeciğin batı eteğinde yatmaktadır.2.25 x 2.75 x 8.30 metre boyutundadır. 72 ton ağırlığında dev bir kayanın 20 m2\'lik bir yüzüne oyulmuş olan üst üste iki Tanrı ile alttaki Tanrı\'nın iki yanında bir çift aslan kabartmasından oluşmaktadır. M.Ö. 1243 yılında Hititliler ile Mısırlılar arasında yapılan ve her iki tarafın da birbirine üstünlük sağlayamadığı Kadeş Savaşı, tarihin önemli dönüm noktalarından birisiydi. Savaş sonrası Hitit Kralı Muvattali ve Mısır Firavunu 2. Ramses arasında yapılan Kadeş Barış Antlaşması tarihteki ilk yazılı anlaşma niteliğindedir. Fasıllar Anıtı bu tarihi olayı Hititlilerin perspektifinden anlatmak amacıyla inşa edilmiştir.'],
        en: ['The monument is one of the largest rock monuments in the world dating back to the Hittites. Fasıllar Monument shows the Great God in a mountain temple between two lions. The monument is located in the west of Fasıllar Village, Beyşehir. Measuring 2.25 x 2.75 x 8.30 meters and weighing 72 tons, the giant rock is carved on its 20 sqm surface. It was constructed to display the Battle of Kadesh between Hittites and Egyptians, and the resulting Treaty of Kadesh, the first written treaty in history, from the Hittites’ perspective.'],
        de: ['Das Fasıllar-Monument ist eines der größten Felsdenkmäler der Welt aus der Hethiterzeit. Das Denkmal zeigt den großen Gott in einem Bergtempel zwischen zwei Löwen. Mit Abmessungen von 2,25 x 2,75 x 8,30 Metern und einem Gewicht von 72 Tonnen wurde es zur Darstellung der Kadesch-Schlacht und des darauffolgenden ersten Friedensvertrags der Geschichte zwischen Hethitern und Ägyptern aus hethitischer Perspektive errichtet.'],
        ru: ['Культовый хеттский памятник, один из крупнейших скальных памятников в мире. Памятник Фасиллар изображает Великого бога между двумя львами. Имея размеры 2,25 x 2,75 x 8,30 метров и веся 72 тонны, монумент был установлен, чтобы рассказать историю битвы при Кадеше около 1243 года до н.э. и первого мирного договора в истории с точки зрения хеттов.']
      },
      mapLink: 'https://www.google.com/maps/search/Fasıllar+Anıtları+/@37.6586684,31.8948964,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('fas%C4%B1llar', 2)
    },
    {
      id: 'eflatunpinar',
      title: { tr: 'Eflatunpınar Hitit Su Anıtı', en: 'Eflatunpınar Hittite Water Monument', de: 'Hethitisches Wassermonument von Eflatunpınar', ru: 'Хеттский водный памятник Эфлатунпинар' },
      description: {
        tr: ['Anıt MÖ 13. yüzyılın son çeyreğine tarihlendirilmektedir. Özgün taş işçiliği, kabartmalardaki kompozisyon ve bir açık hava tapınağı olarak düzenlenmesi ile Hitit uygarlığının diğer kaya anıtlarından ayrılmaktadır. Eflatunpınar Anıtı, doğal kaya üzerine yapılmamış, birbirine uygun olarak kesilmiş andezit blokların titizlikle birleştirilmesi ile inşa edilmiştir. Doğal bir su kaynağı üzerinde yapılmış büyük bir havuz ile suyun havuz içerisine akmasını sağlayan ve havuzun duvarına paralel yapılmış yatay su kanallarından oluşmaktadır. Dikdörtgen formda şekillendirilmiş kayalar üzerinde kabartma tekniğinde yapılmış tanrı ve tanrıça figürleri yer almaktadır.'],
        en: ['The monument dates back to the last quarter of the 13th century BC. It is distinguished from other Hittite rock monuments by its unique stonemasonry and arrangement as an open-air temple. The Eflatunpınar Monument is made of carefully interlocking cut andesite blocks rather than natural rocks. It consists of a large pool on a natural water source and horizontal water channels carrying water to the pool, decorated with relief figures of gods and goddesses.'],
        de: ['Das Denkmal stammt aus dem 13. Jahrhundert v. Chr. Es unterscheidet sich von anderen hethitischen Felsdenkmälern durch sein originelles Mauerwerk und das Open-Air-Tempel-Design. Es besteht aus präzise vereinigten Andesitblöcken auf einer natürlichen Wasserquelle und verfügt über ein großes Becken mit Reliefs von Göttern und Göttinnen.'],
        ru: ['Памятник датируется последней четвертью 13 века до нашей эры. В отличие от других скальных памятников хеттской цивилизации, это храм под открытым небом из идеально подогнанных блоков андезита. Построенный на природном источнике воды, он имеет большой бассейн с горизонтальными каналами и рельефами богов и богинь.']
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KZEuke5fstoUMR-AjsV-ieIx&daddr=Sadıkhacı,+42760+Beyşehir/Konya',
      images: getImages('eflatunp%C4%B1nar', 3)
    },
    {
      id: 'leylekler',
      title: { tr: 'Leylekler Vadisi', en: 'Storks Valley', de: 'Storchental', ru: 'Долина Аистов' },
      description: {
        tr: ['Konya\'nın Beyşehir ilçesinde doğaseverler için önemli bir durak da Beyşehir’in Adaköy mahallesindeki Leylekler Tepesi’dir. Buradaki leylekler son zamanlarda yerli yabancı birçok kişi ve doğaseverler tarafından çok yoğun ilgiyle karşılanmıştır. Bu nedenle yakın zamanda leylekleri gözetlemek için tepeye bir seyir terası inşa edilerek burası Leylekler Tepesi adıyla şöhret bulmaya başlamıştır. Yaklaşık 200 leylek yuvasının yer aldığı “Leylekler Tepesi”, 600 m. uzunluğa, 80 m. genişliğe ve yaklaşık 40 dekarlık alana sahip bulunmaktadır. Tarihi bir mezarlık olan ve tamamı ardıç ağaçlarıyla kaplı alanda hemen hemen her ardıç ağacının tepesinde bir leylek yuvası yer almakta ve her yuvada yavrularıyla birlikte 4-5 leylek barınmaktadır. Adaköy’ün simgesi haline gelen Leylekler Tepesi, değişkenlik göstermekle birlikte her yıl yaklaşık 500-600 leyleği misafir etmektedir.'],
        en: ['An important stop for nature lovers in Beyşehir is the Storks Hill in Adaköy. Attracting both locals and foreigners recently, a viewing terrace was built on the hill to watch the storks. The "Storks Hill," containing nearly 200 stork nests, covers 40 decares of an old historical cemetery dotted with juniper trees. Almost every juniper tree holds a nest hosting 4-5 storks including their young ones, welcoming roughly 500-600 storks each year.'],
        de: ['Der Storchenhügel im Dorf Adaköy in Beyşehir ist ein wichtiger Zwischenstopp für Naturliebhaber. Er zieht Touristen an, und eine Aussichtsterrasse wurde gebaut. Auf dem bewaldeten Gelände des historischen Friedhofs gibt es rund 200 Storchennester, die jährlich zwischen 500 und 600 Störche aufnehmen. Auf jedem Wacholderbaum befindet sich oft ein komplettes Storchennest.'],
        ru: ['Важной остановкой для любителей природы в Бейшехире является Холм аистов. Для наблюдения за аистами на холме недавно соорудили смотровую площадку. На историческом кладбище, где растут можжевеловые деревья, насчитывается около 200 гнезд, в которых ежегодно останавливаются 500-600 аистов со своими птенцами.']
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KcPMgvb7L8UUMfItiurH7YxH&daddr=Yeşildağ,+42730+Beyşehir/Konya',
      images: getImages('leylek', 5)
    },
    {
      id: 'nilufer',
      title: { tr: 'Nilüfer Bahçesi', en: 'Lotus Garden', de: 'Lotusgarten', ru: 'Сад Лотосов' },
      description: {
        tr: ['Beyşehir Gölü’nün Çiftlik Mahallesi kıyılarındaki Nilüfer Bahçesi eşsiz manzarası ve huzur veren doğasıyla herkesi kendine hayran bırakıyor. Yaklaşık 7 kilometrelik uzunluğuyla ülkemizin en büyük nilüfer bahçesi olan bölge zengin biyoçeşitliliğiyle de doğa severlerin ve fotoğraf tutkunlarının vazgeçilmezi haline gelmiştir.'],
        en: ['The Lotus Garden located on the shores of Lake Beyşehir\'s Çiftlik neighborhood fascinates everyone with its unique landscape. Stretching over almost 7 kilometers, it is Turkey\'s largest lotus garden, presenting a spectacular visual feast and rich biodiversity perfect for nature lovers and photographers.'],
        de: ['Der Lotusgarten an den Ufern des Viertels Çiftlik am Beyşehir-See fasziniert jeden mit seiner unvergleichlichen Landschaft. Mit einer Länge von ca. 7 Kilometern ist er der größte Lotusgarten der Türkei und ein Muss für Fotografen und Naturliebhaber.'],
        ru: ['Сад лотосов на берегах микрорайона Чифтлик на озере Бейшехир очаровывает всех своим неповторимым пейзажем. Обладая длиной около 7 км, это крупнейший сад лотосов в Турции, ставший Меккой для любителей природы и фотографов.']
      },
      mapLink: 'https://www.google.com/maps?client=opera&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KR2KjxS9tdoUMRjmQbu2vQHV&daddr=Çiftlik,+42700+Beyşehir/Konya',
      images: getImages('nil%C3%BCfer', 5)
    },
    {
      id: 'karaburun',
      title: { tr: 'Karaburun Plajı', en: 'Karaburun Beach', de: 'Karaburun Strand', ru: 'Пляж Карабурун' },
      description: {
        tr: ['Karaburun Plajı, Beyşehir Gölü Milli Parkı içinde yer alan ve üç kilometrelik uzunluğuyla dikkat çeken bir plajdır. Plaj, ince kumlu yapısı ve su sporları ile kamping olanakları sunmasıyla öne çıkmaktadır. Ayrıca, plajda bekârlar, aile ve kadınlar için ayrı bölümler bulunmaktadır.'],
        en: ['Karaburun Beach is located within Lake Beyşehir National Park, highlighted by its 3-kilometer lengthy shoreline. The beach is famous for its fine sand, water sports, and camping facilities. There are also separate sections allocated for single visitors, families, and women on the beach.'],
        de: ['Der Karaburun-Strand im Beyşehir-See-Nationalpark rühmt sich einer Küstenlinie von drei Kilometern. Er ist bekannt für seinen feinen Sand, Wassersport und Camping. Zudem gibt es hier separate Bereiche für Familien, Frauen und Singles.'],
        ru: ['Пляж Карабурун находится в национальном парке озера Бейшехир и имеет длину три километра. Пляж выделяется своим мелким песком, водными видами спорта и возможностями для кемпинга. На пляже также есть отдельные секции для холостяков, семей и женщин.']
      },
      mapLink: 'https://www.google.com/maps/place/Karaburun+Plaj%C4%B1/@37.631778,31.5282603,14z/data=!3m1!4b1!4m6!3m5!1s0x14c533c2ce9558c9:0x5016f035246e73fc!8m2!3d37.6317463!4d31.5488599!16s%2Fg%2F11cn8sg4xw?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('karaburun', 3)
    }
  ]
};
