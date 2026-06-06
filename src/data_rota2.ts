import { AppRoute } from './types';
import { getImages } from './data_intro';

export const dataRota2: AppRoute = {
  id: 'rota-2',
  label: { tr: 'Rota 2', en: 'Route 2', de: 'Route 2', ru: 'Маршрут 2' },
  title: { 
    tr: '2. Rota: Kubadabad Sarayı – Kızıldağ – Psidia Antik Kenti', 
    en: '2nd Route: Kubadabad Palace – Kızıldağ – Psidia Ancient City', 
    de: '2. Route: Kubadabad Palast – Kızıldağ – Antike Stadt Psidia', 
    ru: '2-й Маршрут: Дворец Кубадабад – Кызылдаг – Древний город Псидия' 
  },
  intro: {
    tr: [
      'YenishireHome’dan Beyşehir Gölü kıyısı boyunca Şarkikaraağaç yönüne ilerlediğinizde, ilk olarak Kubadabad Sarayı’nı ziyaret edebilirsiniz. Anadolu Selçuklu mimarisinin önemli örneklerinden olan bu yapı, göl manzarasıyla büyüleyicidir.',
      'Daha sonra Şarkikaraağaç ilçe merkezine çok yakın konumdaki Kızıldağ Milli Parkı’nı gezebilir; sonrasında Yalvaç ilçesinde yer alan Psidia Antiokheia Antik Kenti’ni ziyaret edebilirsiniz.'
    ],
    en: [
      'When you proceed towards Şarkikaraağaç along the shore of Lake Beyşehir from YenishireHome, you can first visit Kubadabad Palace. This structure, which is one of the important examples of Anatolian Seljuk architecture, is fascinating with its lake view.',
      'Then, you can visit Kızıldağ National Park, located very close to Şarkikaraağaç district center; afterwards, you can visit the Ancient City of Psidia Antiokheia in Yalvaç district.'
    ],
    de: [
      'Wenn Sie von YenishireHome am Ufer des Beyşehir-Sees entlang in Richtung Şarkikaraağaç fahren, können Sie zuerst den Kubadabad-Palast besuchen. Dieses Gebäude, eines der wichtigsten Beispiele der kleinasiatischen Seldschuken-Architektur, ist mit seinem Seeblick faszinierend.',
      'Anschließend können Sie den Kızıldağ-Nationalpark ganz in der Nähe von Şarkikaraağaç besuchen; danach können Sie die antike Stadt Psidia Antiokheia im Bezirk Yalvaç erkunden.'
    ],
    ru: [
      'Продвигаясь по берегу озера Бейшехир от YenishireHome в сторону Шаркикараагача, сначала можно посетить дворец Кубадабад. Это важное произведение анатолийской сельджукской архитектуры очаровывает видом на озеро.',
      'Затем можно посетить национальный парк Кызылдаг, расположенный неподалеку от Шаркикараагача, а после этого — древнеримский город Писидийская Антиохия в Ялваче.'
    ]
  },
  locations: [
    {
      id: 'kubadabad',
      title: { tr: 'Kubadabad Sarayı', en: 'Kubadabad Palace', de: 'Kubadabad Palast', ru: 'Дворец Кубадабад' },
      description: {
        tr: ['Kubadâbâd Selçuklu Saray Sitesi günümüze ulaşabilmiş tek Selçuklu Saray yapısı olup, I. Alaaddin Keykubad’ın (1220-1236) emriyle yapılmıştır. Yapı, Osmanlı dönemine ait olan Edirne ve Topkapı saraylarının öncüsü olma özelliğini taşır. Külliye, Beyşehir Gölü’nün hemen yanında ve Anamas Dağları’nın eteklerindedir. 1980’den bu yana kazı çalışmaları devam etmektedir. Saraydan günümüze müzeleri süsleyen göz kamaştırıcı çinilerle, saray kalıntıları kalmıştır. Çinilerdeki motifler; av eğlencelerini, büyülü inançları, sultanı, ileri gelenleri ve hizmetkârları canlandırır. Saraydan çıkarılan nadide çini eserler başta Karatay Müzesi olmak üzere Konya’da değişik müzelerde sergilenmektedir.'],
        en: ['Kubadabad Seljuk Palace Site is the only surviving Seljuk Palace structure to the present day, built by the order of I. Alaaddin Keykubad (1220-1236). The structure is the precursor of the Edirne and Topkapi palaces belonging to the Ottoman period. The complex is right next to Lake Beyşehir and at the foothills of the Anamas Mountains. Excavations have continued since 1980. The dazzling tiles decorating today\'s museums and palace ruins have survived to the present. The motifs on the tiles depict hunting entertainment, magical beliefs, the sultan, dignitaries, and servants.'],
        de: ['Die seldschukische Palaststätte Kubadabad ist der einzige erhaltene seldschukische Palast, der von Alaeddin Keykubad I. (1220-1236) erbaut wurde. Der Komplex liegt direkt am Beyşehir-See und am Fuße des Anamas-Gebirges. Von dem Palast sind bis heute Palastruinen und schillernde Fliesen erhalten, die die Museen schmücken. Die Fliesenmotive zeigen das Sultanat, magische Überzeugungen und Jagdvergnügen.'],
        ru: ['Дворец Кубадабад — единственный сохранившийся до наших дней сельджукский дворец, построенный по приказу Ала ад-Дина Кей-Кубада I. Комплекс находится прямо у озера Бейшехир у подножия гор Анамас. До наших дней дошли руины и ослепительная плитка, украшающая музеи. Мотивы плитки изображают султана, охоту, магические верования и слуг.']
      },
      mapLink: 'https://www.google.com/maps/dir//Kubadabad+Sarayı+Harabeleri,+Gölyaka,+Beyşehir%2FKonya/@37.7328356,31.4290232,13.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14c53818b619f487:0x3afce7d2b1a683d4!2m2!1d31.4394788!2d37.743726!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('kubadabat', 6)
    },
    {
      id: 'kizildag',
      title: { tr: 'Kızıldağ Milli Parkı', en: 'Kızıldağ National Park', de: 'Kızıldağ Nationalpark', ru: 'Национальный парк Кызылдаг' },
      description: {
        tr: ['1993 yılında milli park ilan edilen ve Isparta ilinin, Şarkikaraağaç ilçesi sınırları içindeki Kızıldağ Milli Parkı\'nda bulunan mavi sedir ağacı ormanlarının bol oksijen üretimi nedeniyle milli parkın temiz havası, oksijen açısından zengin olup, akciğer, astım ve solunum problemi olan insanlar için şifa kaynağıdır. 3, 6 ve 9 km\'lik yürüyüş yollarının da bulunduğu Kızıldağ Milli Parkı sınırları içerisinde kiralanabilir bungalov evleri, konteyner ev, kamp yapabileceğiniz çok sayıda çadır yerleri ve piknik alanları mevcuttur.'],
        en: ['Declared a national park in 1993, Kızıldağ National Park located in Şarkikaraağaç district has rich oxygen originating from its blue cedar forests, making it a source of healing for those with lung, asthma, and respiratory problems. The park features 3, 6, and 9 km walking trails. There are rentable bungalow houses, container houses, many tent areas for camping, and picnic spots.'],
        de: ['Der 1993 zum Nationalpark erklärte Kızıldağ-Nationalpark im Bezirk Şarkikaraağaç verfügt dank seiner blauen Zedernwälder über sehr sauerstoffreiche Luft, was ihn zu einer Heilquelle für Lungen- und Asthmapatienten macht. Es gibt 3, 6 und 9 km lange Wanderwege, mietbare Bungalows und viele Zeltplätze zum Campen.'],
        ru: ['Национальный парк Кызылдаг, объявленный таковым в 1993 году, славится кислородом, который выделяют леса голубых кедров. Воздух здесь считается целебным для людей с легочными и астматическими болезнями. В парке есть 3, 6 и 9 км пешеходные маршруты, можно арендовать бунгало или останавливаться в палатках кемпинга.']
      },
      mapLink: 'https://www.google.com/maps/dir//Kızıldağ+Milli+Parkı,+Beyköy+Köyü,+32802+Şarkikaraağaç%2FIsparta/@38.040272,31.2831358,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14c559308eb4fee9:0x8a19bbef1127bafd!2m2!1d31.3655377!2d38.0401656!3e0?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('k%C4%B1z%C4%B1lda%C4%9F', 4)
    },
    {
      id: 'psidia',
      title: { tr: 'Psidia Antiokheia Antik Kenti', en: 'Ancient City of Psidia Antiokheia', de: 'Antike Stadt Psidia Antiokheia', ru: 'Древний город Псидия Антиохия' },
      description: {
        tr: ['Pisidia Antiokheia Antik Kenti, Akdeniz, Ege ve İç Anadolu bölgelerinin kesiştiği Göller Yöresi’nde, Isparta iline bağlı Yalvaç ilçesinin yaklaşık 1 kilometre kuzeydoğusunda bulunmaktadır. Kent, meyilli ve kısmen kayalıklı bir arazi üzerine kurulmuştur. Kuzey ve batısından Hisarardı yolu, güneydoğusundan ise Antiochos (Hisarardı) Çayı geçmektedir. Yamuk planlı olarak tanımlanabilen kentte Roma ve Bizans Dönemi’ne ait yapı kalıntıları bulunmaktadır. Yapılan kazılar (1914-1924) ve araştırmalarla (1982-1983) surların geçtiği yerler tamamen belirlenmiştir. Şehrin ana giriş kapısı batıda bulunmaktadır. Şehrin kuzeyinde Su Kemerleri, Nympheum, Hamam, Palestra gibi yapıların kalıntıları mevcuttur. Merkezde Tiyatro, Tiberius Alanı, Propylon ve Augustus Tapınağı alanı yer almaktadır. Aziz Paulus’un ziyaret edip Hristiyanlığı yaydığı yerler hac merkezi kabul edilmektedir. Bu nedenle Pisidia Antiokheia’da bulunan St. Paul Kilisesi de hac merkezilerinden biridir.'],
        en: ['The Ancient City of Pisidia Antiokheia is located in the Lakes Region, about 1 km northeast of Yalvaç district in Isparta. Established on sloping and rocky terrain, it has structures dating back to the Roman and Byzantine periods. The ancient city features Aqueducts, Nympheum, Bath, Palestra, Theater, Tiberius Square, and the Temple of Augustus. Because St. Paul visited and spread Christianity here, the St. Paul Church located in Pisidia Antiokheia is considered a pilgrimage center.'],
        de: ['Die antike Stadt Pisidia Antiokheia liegt in der Seenregion, ca. 1 km nordöstlich des Bezirks Yalvaç. Die auf schrägem und felsigem Gelände errichtete Stadt weist römische und byzantinische Ruinen auf, darunter ein Theater, einen Augustus-Tempel und Aquädukte. Da der Heilige Paulus die Stadt besuchte, gilt die hier befindliche St. Paul-Kirche als Wallfahrtsort.'],
        ru: ['Древнеримский город Писидийская Антиохия расположен в Озерном крае, к северо-востоку от Ялвача. Построенный на скалистой местности, он сохранил здания римского и византийского периодов: акведуки, театр и храм Августа. Так как Святой Павел посещал Антиохию, расположенная здесь церковь Св. Павла считается центром паломничества.']
      },
      mapLink: 'https://www.google.com/maps/dir//Cumhuriyet,+32400+Yalvaç%2FIsparta/@38.3082614,31.1071573,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cf9213ecea99f9:0x906996024ed0d75c!2m2!1d31.1895583!2d38.3082902?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
      images: getImages('psidia', 5)
    }
  ]
};
