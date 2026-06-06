import fs from 'fs';

const rawData = fs.readFileSync('src/data.ts', 'utf-8');

// A quick and dirty naive string replacement script using LLM generated translations
const translations = {
  // Common UI words
  "Giriş": { "en": "Intro", "de": "Einführung", "ru": "Введение" },
  "Aktiviteler": { "en": "Activities", "de": "Aktivitäten", "ru": "Активности" },
  "1. Rota: Melikler Yaylası – Aksu – Sagalassos": {
    "en": "Route 1: Melikler Plateau – Aksu – Sagalassos",
    "de": "Route 1: Melikler-Plateau – Aksu – Sagalassos",
    "ru": "Маршрут 1: Плато Меликлер – Аксу – Сагалассос"
  },
  "2. Rota: Kubadabad Sarayı – Kızıldağ – Psidia Antik Kenti": {
    "en": "Route 2: Kubadabad Palace – Kızıldağ – Psidia Ancient City",
    "de": "Route 2: Kubadabad-Palast – Kızıldağ – Antike Stadt Psidia",
    "ru": "Маршрут 2: Дворец Кубадабад – Кызылдаг – Древний город Псидия"
  },
  "3. Rota: Leylekler Vadisi – Beyşehir – Eflatunpınar – Fasıllar": {
    "en": "Route 3: Storks Valley – Beyşehir – Eflatunpınar – Fasıllar",
    "de": "Route 3: Störche-Tal – Beyşehir – Eflatunpınar – Fasıllar",
    "ru": "Маршрут 3: Долина Аистов – Бейшехир – Эфлатунпинар – Фасиллар"
  },
  "4. Rota: Çamlık Mağaraları – Ormana – Köprülü Kanyon": {
    "en": "Route 4: Çamlık Caves – Ormana – Köprülü Canyon",
    "de": "Route 4: Çamlık-Höhlen – Ormana – Köprülü-Schlucht",
    "ru": "Маршрут 4: Пещеры Чамлык – Ормана – Каньон Кёпрюлю"
  },
  "YenishireHome Turizm Kataloğu": {
    "en": "YenishireHome Tourism Catalog",
    "de": "YenishireHome Tourismus-Katalog",
    "ru": "Туристический каталог YenishireHome"
  },
  "Rota 1": { "en": "Route 1", "de": "Route 1", "ru": "Маршрут 1" },
  "Rota 2": { "en": "Route 2", "de": "Route 2", "ru": "Маршрут 2" },
  "Rota 3": { "en": "Route 3", "de": "Route 3", "ru": "Маршрут 3" },
  "Rota 4": { "en": "Route 4", "de": "Route 4", "ru": "Маршрут 4" },
  // Titles of places
  "Melikler Yaylası": { "en": "Melikler Plateau", "de": "Melikler Plateau", "ru": "Плато Меликлер" },
  "Pınargözü Mağarası": { "en": "Pınargözü Cave", "de": "Pınargözü Höhle", "ru": "Пещера Пынаргёзю" },
  "Yaka Kanyonu": { "en": "Yaka Canyon", "de": "Yaka Schlucht", "ru": "Каньон Яка" },
  "Karagöl Buzul Gölü": { "en": "Karagöl Glacial Lake", "de": "Karagöl Gletschersee", "ru": "Ледниковое озеро Карагёль" },
  "Yeşilgöl": { "en": "Yeşilgöl", "de": "Yeşilgöl", "ru": "Ешилгёль" },
  "Kuzukulağı Yaylası": { "en": "Kuzukulağı Plateau", "de": "Kuzukulağı Plateau", "ru": "Плато Кузукулагы" },
  "Zindan Mağarası": { "en": "Zindan Cave", "de": "Zindan Höhle", "ru": "Пещера Зиндан" },
  "Başpınar Tabiat Parkı": { "en": "Başpınar Nature Park", "de": "Naturpark Başpınar", "ru": "Природный парк Башпынар" },
  "Kovada Gölü Milli Parkı": { "en": "Lake Kovada National Park", "de": "Kovada-See-Nationalpark", "ru": "Национальный парк озера Ковада" },
  "Kasnak Meşesi Tabiatı Koruma Alanı": { "en": "Kasnak Oak Nature Reserve", "de": "Naturschutzgebiet Kasnak-Eiche", "ru": "Природный заповедник дуба Каснак" },
  "Yazılı Kanyon Tabiat Parkı": { "en": "Yazılı Canyon Nature Park", "de": "Naturpark Yazılı Schlucht", "ru": "Природный парк каньона Язылы" },
  "Sagalassos Antik Kenti": { "en": "Ancient City of Sagalassos", "de": "Antike Stadt Sagalassos", "ru": "Древний город Сагалассос" },
  "Kubadabad Sarayı": { "en": "Kubadabad Palace", "de": "Kubadabad Palast", "ru": "Дворец Кубадабад" },
  "Kızıldağ Milli Parkı": { "en": "Kızıldağ National Park", "de": "Kızıldağ Nationalpark", "ru": "Национальный парк Кызылдаг" },
  "Psidia Antiokheia Antik Kenti": { "en": "Ancient City of Psidia Antiokheia", "de": "Antike Stadt Psidia Antiokheia", "ru": "Древний город Псидия Антиохия" },
  "Beyşehir Gölü Milli Parkı": { "en": "Lake Beyşehir National Park", "de": "Beyşehir-See Nationalpark", "ru": "Национальный парк озера Бейшехир" },
  "Beyşehir": { "en": "Beyşehir", "de": "Beyşehir", "ru": "Бейшехир" },
  "Eşrefoğlu Camii": { "en": "Eşrefoğlu Mosque", "de": "Eşrefoğlu Moschee", "ru": "Мечеть Эшрефоглу" },
  "Fasıllar Hitit Anıtı": { "en": "Fasıllar Hittite Monument", "de": "Hethitisches Monument von Fasıllar", "ru": "Хеттский памятник Фасиллар" },
  "Eflatunpınar Hitit Su Anıtı": { "en": "Eflatunpınar Hittite Water Monument", "de": "Hethitisches Wassermonument von Eflatunpınar", "ru": "Хеттский водный памятник Эфлатунпинар" },
  "Leylekler Vadisi": { "en": "Storks Valley", "de": "Storchental", "ru": "Долина Аистов" },
  "Nilüfer Bahçesi": { "en": "Lotus Garden", "de": "Lotusgarten", "ru": "Сад Лотосов" },
  "Karaburun Plajı": { "en": "Karaburun Beach", "de": "Karaburun Strand", "ru": "Пляж Карабурун" },
  "Derebucak Çamlık Mağaraları Milli Parkı": { "en": "Derebucak Çamlık Caves National Park", "de": "Nationalpark Derebucak Çamlık Höhlen", "ru": "Национальный пар пещер Деребуджак Чамлык" },
  "Düğmeli Evler": { "en": "Buttoned Houses", "de": "Knopfhäuser", "ru": "Пуговичные дома" },
  "Köprülü Kanyon Milli Parkı": { "en": "Köprülü Canyon National Park", "de": "Nationalpark Köprülü-Schlucht", "ru": "Национальный парк каньона Кёпрюлю" },
  "Aziz Paul Yolu": { "en": "Saint Paul Trail", "de": "Paulusweg", "ru": "Тропа Святого Павла" },
  "Keykubat Göç ve Kervan Yolu": { "en": "Keykubat Migration and Caravan Route", "de": "Keykubat Migrations- und Karawanenroute", "ru": "Миграционный и караванный маршрут Кейкубат" }
};

// Paragraph translator by calling Google Translate via an open API is not possible in this sandboxed script.
// Instead, let's keep the script simple. We will use dummy literal text structure but I'll write a Python script because Node doesn't easily translate without an API key, we will just use placeholders for descriptions for the other languages, and the user can translate them later, OR we will give the app a helper function that returns translated strings or falls back to TR. But wait! The prompt says "ona görede çevir düzgün bir şekilde" (translate it properly accordingly). It means I MUST translate them!

