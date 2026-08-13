import type { Language } from './translations';

type ConstructionBrandId = 'caterpillar' | 'shantui' | 'xcmg' | 'liugong' | 'sany' | 'komatsu';
type CountryKey = 'USA' | 'China' | 'Japan';
type ConstructionPageTextKey = 'heroDescription' | 'more';

interface ConstructionPageTranslation {
  heroDescription: string;
  more: string;
  countries: Record<CountryKey, string>;
  descriptions: Record<ConstructionBrandId, string>;
}

export const constructionPageTranslations: Record<Language, ConstructionPageTranslation> = {
  en: {
    heroDescription: 'Excavators, bulldozers, wheel loaders, motor graders, cranes and more — whole machines and spare parts.',
    more: 'more',
    countries: { USA: 'United States', China: 'China', Japan: 'Japan' },
    descriptions: {
      caterpillar: 'World-leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.',
      shantui: 'China’s largest bulldozer manufacturer and one of the world’s leading construction machinery brands, producing bulldozers, excavators, road machinery, and more.',
      xcmg: 'One of China’s largest and most comprehensive construction machinery manufacturers, producing cranes, excavators, loaders, road machinery, and more.',
      liugong: 'Leading Chinese manufacturer of construction machinery, including wheel loaders, excavators, and bulldozers.',
      sany: 'Global leader in heavy equipment manufacturing, producing excavators, concrete pumps, cranes, and more.',
      komatsu: 'Japanese multinational corporation specializing in construction, mining, and military equipment.',
    },
  },
  zh: {
    heroDescription: '挖掘机、推土机、装载机、平地机、起重机等整机与配件。',
    more: '更多',
    countries: { USA: '美国', China: '中国', Japan: '日本' },
    descriptions: {
      caterpillar: '全球领先的工程与采矿设备、柴油和天然气发动机、工业燃气轮机及柴电机车制造商。',
      shantui: '中国最大的推土机制造商，也是全球领先的工程机械品牌之一，生产推土机、挖掘机、道路机械等产品。',
      xcmg: '中国规模最大、产品最全面的工程机械制造商之一，生产起重机、挖掘机、装载机、道路机械等产品。',
      liugong: '中国领先的工程机械制造商，产品包括装载机、挖掘机和推土机。',
      sany: '全球领先的重型装备制造商，生产挖掘机、混凝土泵、起重机等产品。',
      komatsu: '专注于工程、采矿和军用设备的日本跨国企业。',
    },
  },
  es: {
    heroDescription: 'Excavadoras, bulldozers, cargadoras de ruedas, motoniveladoras, grúas y más: máquinas completas y repuestos.',
    more: 'más',
    countries: { USA: 'Estados Unidos', China: 'China', Japan: 'Japón' },
    descriptions: {
      caterpillar: 'Fabricante líder mundial de equipos de construcción y minería, motores diésel y de gas natural, turbinas de gas industriales y locomotoras diésel-eléctricas.',
      shantui: 'El mayor fabricante chino de bulldozers y una de las principales marcas mundiales de maquinaria de construcción; fabrica bulldozers, excavadoras, maquinaria vial y más.',
      xcmg: 'Uno de los fabricantes chinos de maquinaria de construcción más grandes y completos; produce grúas, excavadoras, cargadoras, maquinaria vial y más.',
      liugong: 'Fabricante chino líder de maquinaria de construcción, incluidas cargadoras de ruedas, excavadoras y bulldozers.',
      sany: 'Líder mundial en fabricación de equipos pesados; produce excavadoras, bombas de hormigón, grúas y más.',
      komatsu: 'Corporación multinacional japonesa especializada en equipos de construcción, minería y uso militar.',
    },
  },
  fr: {
    heroDescription: 'Pelles, bulldozers, chargeuses sur pneus, niveleuses, grues et plus encore : machines complètes et pièces détachées.',
    more: 'de plus',
    countries: { USA: 'États-Unis', China: 'Chine', Japan: 'Japon' },
    descriptions: {
      caterpillar: 'Fabricant mondial de premier plan d’équipements de construction et miniers, de moteurs diesel et au gaz naturel, de turbines à gaz industrielles et de locomotives diesel-électriques.',
      shantui: 'Plus grand fabricant chinois de bulldozers et l’une des grandes marques mondiales de machines de construction, produisant bulldozers, pelles, machines routières et plus encore.',
      xcmg: 'L’un des fabricants chinois les plus grands et les plus complets de machines de construction, produisant grues, pelles, chargeuses, machines routières et plus encore.',
      liugong: 'Fabricant chinois majeur de machines de construction, notamment de chargeuses sur pneus, pelles et bulldozers.',
      sany: 'Leader mondial de la fabrication d’équipements lourds, produisant pelles, pompes à béton, grues et plus encore.',
      komatsu: 'Entreprise multinationale japonaise spécialisée dans les équipements de construction, miniers et militaires.',
    },
  },
  de: {
    heroDescription: 'Bagger, Planierraupen, Radlader, Motorgrader, Krane und mehr — komplette Maschinen und Ersatzteile.',
    more: 'mehr',
    countries: { USA: 'Vereinigte Staaten', China: 'China', Japan: 'Japan' },
    descriptions: {
      caterpillar: 'Weltweit führender Hersteller von Bau- und Bergbaumaschinen, Diesel- und Erdgasmotoren, Industriegasturbinen und diesel-elektrischen Lokomotiven.',
      shantui: 'Chinas größter Hersteller von Planierraupen und eine der weltweit führenden Baumaschinenmarken; produziert Planierraupen, Bagger, Straßenbaumaschinen und mehr.',
      xcmg: 'Einer der größten und umfassendsten chinesischen Baumaschinenhersteller; produziert Krane, Bagger, Lader, Straßenbaumaschinen und mehr.',
      liugong: 'Führender chinesischer Hersteller von Baumaschinen, darunter Radlader, Bagger und Planierraupen.',
      sany: 'Weltweit führender Hersteller von Schwermaschinen; produziert Bagger, Betonpumpen, Krane und mehr.',
      komatsu: 'Japanischer multinationaler Konzern, spezialisiert auf Bau-, Bergbau- und Militärausrüstung.',
    },
  },
  pt: {
    heroDescription: 'Escavadeiras, tratores de esteiras, pás carregadeiras, motoniveladoras, guindastes e muito mais — máquinas completas e peças sobressalentes.',
    more: 'mais',
    countries: { USA: 'Estados Unidos', China: 'China', Japan: 'Japão' },
    descriptions: {
      caterpillar: 'Fabricante líder mundial de equipamentos de construção e mineração, motores a diesel e gás natural, turbinas a gás industriais e locomotivas diesel-elétricas.',
      shantui: 'Maior fabricante chinês de tratores de esteiras e uma das principais marcas mundiais de máquinas de construção, produzindo tratores, escavadeiras, máquinas rodoviárias e mais.',
      xcmg: 'Um dos maiores e mais completos fabricantes chineses de máquinas de construção, produzindo guindastes, escavadeiras, carregadeiras, máquinas rodoviárias e mais.',
      liugong: 'Fabricante chinês líder de máquinas de construção, incluindo pás carregadeiras, escavadeiras e tratores de esteiras.',
      sany: 'Líder global na fabricação de equipamentos pesados, produzindo escavadeiras, bombas de concreto, guindastes e mais.',
      komatsu: 'Corporação multinacional japonesa especializada em equipamentos de construção, mineração e uso militar.',
    },
  },
  ru: {
    heroDescription: 'Экскаваторы, бульдозеры, фронтальные погрузчики, автогрейдеры, краны и другое — готовые машины и запасные части.',
    more: 'ещё',
    countries: { USA: 'США', China: 'Китай', Japan: 'Япония' },
    descriptions: {
      caterpillar: 'Ведущий мировой производитель строительного и горнодобывающего оборудования, дизельных и газовых двигателей, промышленных газовых турбин и дизель-электрических локомотивов.',
      shantui: 'Крупнейший китайский производитель бульдозеров и один из ведущих мировых брендов строительной техники; выпускает бульдозеры, экскаваторы, дорожные машины и другое.',
      xcmg: 'Один из крупнейших и наиболее комплексных китайских производителей строительной техники; выпускает краны, экскаваторы, погрузчики, дорожные машины и другое.',
      liugong: 'Ведущий китайский производитель строительной техники, включая фронтальные погрузчики, экскаваторы и бульдозеры.',
      sany: 'Мировой лидер в производстве тяжёлой техники, выпускающий экскаваторы, бетононасосы, краны и другое.',
      komatsu: 'Японская многонациональная корпорация, специализирующаяся на строительной, горнодобывающей и военной технике.',
    },
  },
  ja: {
    heroDescription: '油圧ショベル、ブルドーザー、ホイールローダー、モーターグレーダー、クレーンなど、完成機とスペアパーツを取り揃えています。',
    more: 'その他',
    countries: { USA: 'アメリカ合衆国', China: '中国', Japan: '日本' },
    descriptions: {
      caterpillar: '建設・鉱山機械、ディーゼル・天然ガスエンジン、産業用ガスタービン、ディーゼル電気機関車の世界有数のメーカーです。',
      shantui: '中国最大のブルドーザーメーカーであり、ブルドーザー、油圧ショベル、道路機械などを生産する世界有数の建設機械ブランドです。',
      xcmg: 'クレーン、油圧ショベル、ローダー、道路機械などを生産する、中国最大級かつ総合的な建設機械メーカーの一つです。',
      liugong: 'ホイールローダー、油圧ショベル、ブルドーザーなどを製造する中国有数の建設機械メーカーです。',
      sany: '油圧ショベル、コンクリートポンプ、クレーンなどを生産する世界有数の重機メーカーです。',
      komatsu: '建設、鉱山、軍用機器を専門とする日本の多国籍企業です。',
    },
  },
  ar: {
    heroDescription: 'حفارات وجرافات ولوادر بعجلات وممهدات ورافعات وغيرها — معدات كاملة وقطع غيار.',
    more: 'المزيد',
    countries: { USA: 'الولايات المتحدة', China: 'الصين', Japan: 'اليابان' },
    descriptions: {
      caterpillar: 'شركة رائدة عالميًا في تصنيع معدات البناء والتعدين ومحركات الديزل والغاز الطبيعي وتوربينات الغاز الصناعية والقاطرات الديزل-كهربائية.',
      shantui: 'أكبر مصنع صيني للجرافات وإحدى العلامات الرائدة عالميًا في معدات البناء، تنتج الجرافات والحفارات ومعدات الطرق وغيرها.',
      xcmg: 'إحدى أكبر وأشمل شركات تصنيع معدات البناء في الصين، تنتج الرافعات والحفارات واللوادر ومعدات الطرق وغيرها.',
      liugong: 'شركة صينية رائدة في تصنيع معدات البناء، بما يشمل اللوادر بعجلات والحفارات والجرافات.',
      sany: 'رائد عالمي في تصنيع المعدات الثقيلة، ينتج الحفارات ومضخات الخرسانة والرافعات وغيرها.',
      komatsu: 'شركة يابانية متعددة الجنسيات متخصصة في معدات البناء والتعدين والمعدات العسكرية.',
    },
  },
  it: {
    heroDescription: 'Escavatori, bulldozer, pale gommate, motolivellatrici, gru e molto altro — macchine complete e ricambi.',
    more: 'altro',
    countries: { USA: 'Stati Uniti', China: 'Cina', Japan: 'Giappone' },
    descriptions: {
      caterpillar: 'Produttore leader mondiale di attrezzature per costruzione e miniere, motori diesel e a gas naturale, turbine a gas industriali e locomotive diesel-elettriche.',
      shantui: 'Il maggiore produttore cinese di bulldozer e uno dei principali marchi mondiali di macchine per costruzione; produce bulldozer, escavatori, macchine stradali e altro.',
      xcmg: 'Uno dei produttori cinesi di macchine per costruzione più grandi e completi; produce gru, escavatori, pale caricatrici, macchine stradali e altro.',
      liugong: 'Produttore cinese leader di macchine per costruzione, tra cui pale gommate, escavatori e bulldozer.',
      sany: 'Leader mondiale nella produzione di attrezzature pesanti; produce escavatori, pompe per calcestruzzo, gru e altro.',
      komatsu: 'Società multinazionale giapponese specializzata in attrezzature per costruzione, estrazione mineraria e impiego militare.',
    },
  },
};

export function getTranslatedConstructionPageText(key: ConstructionPageTextKey, language: Language) {
  return constructionPageTranslations[language][key];
}

export function getTranslatedConstructionCountry(country: string, language: Language) {
  return constructionPageTranslations[language].countries[country as CountryKey] ?? country;
}

export function getTranslatedConstructionBrandDescription(
  brandId: string,
  language: Language,
  fallback: string,
) {
  return constructionPageTranslations[language].descriptions[brandId as ConstructionBrandId] ?? fallback;
}
