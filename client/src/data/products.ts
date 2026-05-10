// ============================================================
// Design Philosophy: Industrial Minimalism
// Colors: Deep Navy #1A1A2E + Engineering Orange #F97316
// Typography: Barlow Condensed (headings) + Source Sans Pro (body) + Roboto Mono (part numbers)
// ============================================================

export type Category = 'construction' | 'truck' | 'engine';

export interface Machine {
  id: string;
  model: string;
  name: string;
  specs: string;
  image: string;
  description: string;
}

export interface SparePart {
  id: string;
  partNumber: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Brand {
  id: string;
  name: string;
  fullName: string;
  category: Category;
  country: string;
  description: string;
  logo: string;
  color: string;
  machines: Machine[];
  spareParts: SparePart[];
}

export const brands: Brand[] = [
  // ========== CONSTRUCTION MACHINERY ==========
  {
    id: 'caterpillar',
    name: 'Caterpillar',
    fullName: 'Caterpillar Inc. (CAT)',
    category: 'construction',
    country: 'USA',
    description: 'World\'s leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.',
    logo: 'CAT',
    color: '#F9A825',
    machines: [
      {
        id: 'cat-320',
        model: 'CAT 320',
        name: 'Hydraulic Excavator',
        specs: '20 ton | 121 kW | 1.19 m³ bucket',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/excavator-caterpillar-9xF7KEMRVew2dhnpWk5VNU.webp',
        description: 'The Cat 320 hydraulic excavator delivers performance, versatility, and efficiency for a wide range of applications.'
      },
      {
        id: 'cat-330',
        model: 'CAT 330',
        name: 'Hydraulic Excavator',
        specs: '30 ton | 168 kW | 1.69 m³ bucket',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The Cat 330 excavator offers enhanced performance and efficiency for large-scale earthmoving projects.'
      },
      {
        id: 'cat-d8t',
        model: 'CAT D8T',
        name: 'Bulldozer',
        specs: '38 ton | 231 kW | SU blade 10.5 m³',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'The Cat D8T dozer delivers outstanding performance in heavy dozing, ripping, and pushing applications.'
      },
      {
        id: 'cat-966m',
        model: 'CAT 966M',
        name: 'Wheel Loader',
        specs: '24 ton | 216 kW | 4.6 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The Cat 966M wheel loader offers excellent performance, fuel efficiency, and versatility.'
      },
      {
        id: 'cat-140m',
        model: 'CAT 140M',
        name: 'Motor Grader',
        specs: '15 ton | 138 kW | 4.27 m blade',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The Cat 140M motor grader provides superior grading performance and operator comfort.'
      },
      {
        id: 'cat-cs56b',
        model: 'CAT CS56B',
        name: 'Vibratory Soil Compactor',
        specs: '11 ton | 97 kW | 2.13 m drum',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The Cat CS56B soil compactor delivers excellent compaction performance and productivity.'
      }
    ],
    spareParts: [
      { id: 'cat-sp-1', partNumber: '1R-0750', name: 'Engine Oil Filter', description: 'Primary engine oil filter for CAT C7/C9 engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-2', partNumber: '1R-0716', name: 'Fuel Filter', description: 'Primary fuel filter element for CAT diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-3', partNumber: '4I-3948', name: 'Air Filter Primary', description: 'Primary air cleaner element for CAT excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-4', partNumber: '9X-7894', name: 'Hydraulic Filter', description: 'Hydraulic return filter for CAT 320/330 excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-5', partNumber: '175-4520', name: 'Track Link Assembly', description: 'Track link assembly for CAT 320 excavator undercarriage', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'cat-sp-6', partNumber: '9W-1552', name: 'Cutting Edge', description: 'Bolt-on cutting edge for CAT D8T bulldozer blade', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'cat-sp-7', partNumber: '6I-6454', name: 'Bucket Tooth', description: 'Penetration bucket tooth for CAT excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'cat-sp-8', partNumber: '3E-6457', name: 'Seal Kit - Boom Cylinder', description: 'Hydraulic cylinder seal kit for CAT 320 boom cylinder', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Seals & Gaskets' },
    ]
  },
  {
    id: 'shantui',
    name: 'Shantui',
    fullName: 'Shantui Construction Machinery Co., Ltd.',
    category: 'construction',
    country: 'China',
    description: 'China\'s largest bulldozer manufacturer and one of the world\'s top construction machinery brands, producing bulldozers, excavators, road machinery and more.',
    logo: 'SHANTUI',
    color: '#E65100',
    machines: [
      {
        id: 'st-sd16',
        model: 'SD16',
        name: 'Bulldozer',
        specs: '16 ton | 120 kW | 3.95 m³ blade',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'The Shantui SD16 is a medium-sized bulldozer widely used in earthmoving, land clearing, and construction projects.'
      },
      {
        id: 'st-sd22',
        model: 'SD22',
        name: 'Bulldozer',
        specs: '22 ton | 162 kW | 5.6 m³ blade',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'The SD22 bulldozer is designed for heavy-duty earthmoving and mining applications.'
      },
      {
        id: 'st-se215',
        model: 'SE215',
        name: 'Hydraulic Excavator',
        specs: '21 ton | 118 kW | 0.93 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Shantui SE215 excavator offers reliable performance for construction and mining operations.'
      },
      {
        id: 'st-sl50w',
        model: 'SL50W',
        name: 'Wheel Loader',
        specs: '16 ton | 162 kW | 3.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The SL50W wheel loader provides excellent loading capacity and fuel efficiency.'
      }
    ],
    spareParts: [
      { id: 'st-sp-1', partNumber: 'SD16-11-01000', name: 'Engine Oil Filter', description: 'Engine oil filter for Shantui SD16 bulldozer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-2', partNumber: 'SD16-14-01000', name: 'Air Filter', description: 'Air cleaner element for Shantui SD series bulldozers', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-3', partNumber: 'SD22-40-00000', name: 'Final Drive Assembly', description: 'Final drive assembly for Shantui SD22 bulldozer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'st-sp-4', partNumber: 'SD16-40-02000', name: 'Track Roller', description: 'Bottom roller for Shantui SD16 bulldozer undercarriage', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'st-sp-5', partNumber: 'SD16-16-01000', name: 'Cutting Edge', description: 'Blade cutting edge for Shantui SD16 bulldozer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'st-sp-6', partNumber: 'SD16-30-00000', name: 'Hydraulic Pump', description: 'Main hydraulic pump for Shantui SD16 bulldozer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
    ]
  },
  {
    id: 'xcmg',
    name: 'XCMG',
    fullName: 'Xuzhou Construction Machinery Group (XCMG)',
    category: 'construction',
    country: 'China',
    description: 'One of China\'s largest and most comprehensive construction machinery manufacturers, producing cranes, excavators, loaders, road machinery, and more.',
    logo: 'XCMG',
    color: '#D32F2F',
    machines: [
      {
        id: 'xcmg-xe215c',
        model: 'XE215C',
        name: 'Hydraulic Excavator',
        specs: '21.5 ton | 122 kW | 1.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The XCMG XE215C excavator delivers excellent performance and reliability for construction applications.'
      },
      {
        id: 'xcmg-xe370ca',
        model: 'XE370CA',
        name: 'Hydraulic Excavator',
        specs: '37 ton | 206 kW | 1.8 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The XE370CA is a large excavator designed for heavy-duty mining and construction projects.'
      },
      {
        id: 'xcmg-lw500fn',
        model: 'LW500FN',
        name: 'Wheel Loader',
        specs: '17 ton | 162 kW | 3.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The XCMG LW500FN wheel loader offers high productivity and fuel efficiency.'
      },
      {
        id: 'xcmg-gr215',
        model: 'GR215',
        name: 'Motor Grader',
        specs: '14.5 ton | 160 kW | 4.27 m blade',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The XCMG GR215 motor grader provides precise grading for road construction and maintenance.'
      },
      {
        id: 'xcmg-qy25k5',
        model: 'QY25K5',
        name: 'Truck Crane',
        specs: '25 ton | 162 kW | 31 m boom',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The XCMG QY25K5 truck crane offers excellent lifting capacity and mobility.'
      }
    ],
    spareParts: [
      { id: 'xcmg-sp-1', partNumber: 'XE215-01-01', name: 'Engine Oil Filter', description: 'Engine oil filter for XCMG XE215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-2', partNumber: 'XE215-02-01', name: 'Hydraulic Filter', description: 'Hydraulic oil filter for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-3', partNumber: 'LW500-40-01', name: 'Bucket Tooth', description: 'Loader bucket tooth for XCMG LW500 wheel loader', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'xcmg-sp-4', partNumber: 'XE215-30-01', name: 'Swing Motor', description: 'Hydraulic swing motor for XCMG XE215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
      { id: 'xcmg-sp-5', partNumber: 'XE215-50-01', name: 'Track Shoe', description: 'Track shoe assembly for XCMG XE215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'xcmg-sp-6', partNumber: 'XE215-60-01', name: 'Bucket Pin & Bushing', description: 'Bucket pin and bushing kit for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Pins & Bushings' },
    ]
  },
  {
    id: 'liugong',
    name: 'LiuGong',
    fullName: 'Guangxi LiuGong Machinery Co., Ltd.',
    category: 'construction',
    country: 'China',
    description: 'A leading Chinese construction machinery manufacturer known for wheel loaders, excavators, bulldozers, and road machinery with global distribution.',
    logo: 'LIUGONG',
    color: '#1565C0',
    machines: [
      {
        id: 'lg-856h',
        model: '856H',
        name: 'Wheel Loader',
        specs: '16 ton | 162 kW | 3.2 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The LiuGong 856H wheel loader is renowned for its reliability and performance in demanding conditions.'
      },
      {
        id: 'lg-915e',
        model: '915E',
        name: 'Hydraulic Excavator',
        specs: '15 ton | 84 kW | 0.6 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The LiuGong 915E excavator offers excellent digging performance and fuel efficiency.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Hydraulic Excavator',
        specs: '22 ton | 122 kW | 1.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The LiuGong 922E is a versatile mid-size excavator for construction and mining.'
      },
      {
        id: 'lg-b160c',
        model: 'B160C',
        name: 'Bulldozer',
        specs: '16 ton | 120 kW | 4.0 m³ blade',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        description: 'The LiuGong B160C bulldozer delivers reliable performance for earthmoving operations.'
      }
    ],
    spareParts: [
      { id: 'lg-sp-1', partNumber: 'LG856-01-001', name: 'Engine Oil Filter', description: 'Engine oil filter for LiuGong 856H wheel loader', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-2', partNumber: 'LG856-02-001', name: 'Transmission Filter', description: 'Transmission oil filter for LiuGong wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-3', partNumber: 'LG856-10-001', name: 'Bucket Tooth', description: 'Standard bucket tooth for LiuGong wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'lg-sp-4', partNumber: 'LG922-30-001', name: 'Hydraulic Pump', description: 'Main hydraulic pump for LiuGong 922E excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
      { id: 'lg-sp-5', partNumber: 'LG922-50-001', name: 'Track Roller', description: 'Bottom track roller for LiuGong excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
    ]
  },
  {
    id: 'sany',
    name: 'SANY',
    fullName: 'Sany Heavy Industry Co., Ltd.',
    category: 'construction',
    country: 'China',
    description: 'One of the world\'s largest construction machinery manufacturers, known for concrete machinery, excavators, cranes, and road machinery.',
    logo: 'SANY',
    color: '#C62828',
    machines: [
      {
        id: 'sany-sy215c',
        model: 'SY215C',
        name: 'Hydraulic Excavator',
        specs: '21.5 ton | 122 kW | 0.93 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SANY SY215C excavator delivers superior performance and reliability for construction projects.'
      },
      {
        id: 'sany-sy365h',
        model: 'SY365H',
        name: 'Hydraulic Excavator',
        specs: '36.5 ton | 206 kW | 1.8 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SY365H is a large excavator designed for heavy-duty mining and construction.'
      },
      {
        id: 'sany-slc60',
        model: 'SLC60',
        name: 'Crawler Crane',
        specs: '60 ton | 224 kW | 48 m boom',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The SANY SLC60 crawler crane provides excellent lifting performance and stability.'
      },
      {
        id: 'sany-sw405k',
        model: 'SW405K',
        name: 'Wheel Loader',
        specs: '18 ton | 162 kW | 3.5 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The SANY SW405K wheel loader offers high productivity and operator comfort.'
      },
      {
        id: 'sany-srt55c',
        model: 'SRT55C',
        name: 'Mining Truck',
        specs: '55 ton | 522 kW | 32 m³ body',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The SANY SRT55C mining truck is designed for high-efficiency ore and waste hauling.'
      }
    ],
    spareParts: [
      { id: 'sany-sp-1', partNumber: 'SY215-01-001', name: 'Engine Oil Filter', description: 'Engine oil filter for SANY SY215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-2', partNumber: 'SY215-02-001', name: 'Hydraulic Filter', description: 'Hydraulic return filter for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-3', partNumber: 'SY215-40-001', name: 'Travel Motor', description: 'Hydraulic travel motor for SANY SY215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
      { id: 'sany-sp-4', partNumber: 'SY215-50-001', name: 'Track Chain Assembly', description: 'Track chain assembly for SANY SY215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'sany-sp-5', partNumber: 'SY215-60-001', name: 'Bucket Tooth', description: 'Standard bucket tooth for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'sany-sp-6', partNumber: 'SY215-70-001', name: 'Swing Bearing', description: 'Slewing ring bearing for SANY SY215 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Bearings' },
    ]
  },
  {
    id: 'komatsu',
    name: 'Komatsu',
    fullName: 'Komatsu Ltd.',
    category: 'construction',
    country: 'Japan',
    description: 'A Japanese multinational corporation that manufactures construction, mining, and military equipment, as well as industrial equipment like press machines.',
    logo: 'KOMATSU',
    color: '#F57F17',
    machines: [
      {
        id: 'km-pc220',
        model: 'PC220-8',
        name: 'Hydraulic Excavator',
        specs: '22 ton | 125 kW | 1.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Komatsu PC220-8 excavator offers advanced technology and superior performance.'
      },
      {
        id: 'km-pc360',
        model: 'PC360-10M0',
        name: 'Hydraulic Excavator',
        specs: '36 ton | 200 kW | 1.8 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Komatsu PC360 is a powerful excavator for large-scale construction and mining.'
      },
      {
        id: 'km-d155ax',
        model: 'D155AX-8',
        name: 'Bulldozer',
        specs: '38 ton | 228 kW | SU blade 11.7 m³',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        description: 'The Komatsu D155AX-8 dozer delivers exceptional performance in heavy earthmoving.'
      },
      {
        id: 'km-wa470',
        model: 'WA470-8',
        name: 'Wheel Loader',
        specs: '24 ton | 196 kW | 4.5 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The Komatsu WA470-8 wheel loader offers excellent productivity and fuel efficiency.'
      },
      {
        id: 'km-gd655',
        model: 'GD655-5',
        name: 'Motor Grader',
        specs: '17 ton | 164 kW | 4.88 m blade',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'The Komatsu GD655-5 motor grader provides precise grading performance.'
      }
    ],
    spareParts: [
      { id: 'km-sp-1', partNumber: '600-211-1340', name: 'Engine Oil Filter', description: 'Engine oil filter for Komatsu SAA6D107 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-2', partNumber: '600-311-3750', name: 'Fuel Filter', description: 'Primary fuel filter for Komatsu diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-3', partNumber: '207-30-00200', name: 'Track Roller', description: 'Bottom track roller for Komatsu PC220 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'km-sp-4', partNumber: '207-70-00150', name: 'Bucket Tooth', description: 'Standard bucket tooth for Komatsu PC220 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'km-sp-5', partNumber: '708-2L-00500', name: 'Main Pump', description: 'Main hydraulic pump for Komatsu PC220 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
      { id: 'km-sp-6', partNumber: '207-27-00260', name: 'Swing Motor', description: 'Swing motor assembly for Komatsu PC220 excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Hydraulics' },
      { id: 'km-sp-7', partNumber: '195-30-00380', name: 'Sprocket', description: 'Drive sprocket for Komatsu D155 bulldozer', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
    ]
  },

  // ========== TRUCKS ==========
  {
    id: 'isuzu',
    name: 'Isuzu',
    fullName: 'Isuzu Motors Limited',
    category: 'truck',
    country: 'Japan',
    description: 'A Japanese commercial vehicle and diesel engine manufacturing company, known for reliable light to heavy-duty trucks and buses worldwide.',
    logo: 'ISUZU',
    color: '#B71C1C',
    machines: [
      {
        id: 'isuzu-npr',
        model: 'NPR 75',
        name: 'Light Duty Truck',
        specs: '3.5 ton | 110 kW | 4HK1 engine',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Isuzu NPR 75 is a versatile light-duty truck ideal for urban delivery and distribution.'
      },
      {
        id: 'isuzu-nqr',
        model: 'NQR 75',
        name: 'Medium Duty Truck',
        specs: '5 ton | 136 kW | 4HK1 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Isuzu NQR 75 medium-duty truck offers excellent payload capacity and fuel efficiency.'
      },
      {
        id: 'isuzu-fvr',
        model: 'FVR 34',
        name: 'Heavy Duty Truck',
        specs: '10 ton | 206 kW | 6HK1 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Isuzu FVR 34 is a reliable heavy-duty truck for long-haul transportation.'
      },
      {
        id: 'isuzu-giga',
        model: 'GIGA CXZ',
        name: 'Heavy Duty Tractor',
        specs: '25 ton | 353 kW | 6WG1 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Isuzu GIGA CXZ is a powerful tractor unit for heavy freight transportation.'
      }
    ],
    spareParts: [
      { id: 'isuzu-sp-1', partNumber: '8-97095-980-0', name: 'Engine Oil Filter', description: 'Engine oil filter for Isuzu 4HK1/6HK1 engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'isuzu-sp-2', partNumber: '8-94396-375-0', name: 'Fuel Filter', description: 'Fuel filter element for Isuzu diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'isuzu-sp-3', partNumber: '8-97049-751-0', name: 'Air Filter', description: 'Air cleaner element for Isuzu 4HK1 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'isuzu-sp-4', partNumber: '1-09625-006-0', name: 'Injector', description: 'Fuel injector for Isuzu 6HK1 common rail engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'isuzu-sp-5', partNumber: '1-87810-552-0', name: 'Brake Pad Set', description: 'Front brake pad set for Isuzu FVR/FRR trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'isuzu-sp-6', partNumber: '8-97034-572-0', name: 'Clutch Disc', description: 'Clutch disc assembly for Isuzu heavy trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Drivetrain' },
      { id: 'isuzu-sp-7', partNumber: '1-09625-335-0', name: 'Turbocharger', description: 'Turbocharger assembly for Isuzu 6HK1 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
    ]
  },
  {
    id: 'shacman',
    name: 'Shacman',
    fullName: 'Shaanxi Automobile Group Co., Ltd. (SHACMAN)',
    category: 'truck',
    country: 'China',
    description: 'A major Chinese heavy-duty truck manufacturer producing dump trucks, tractor trucks, cargo trucks, and special purpose vehicles for global markets.',
    logo: 'SHACMAN',
    color: '#1A237E',
    machines: [
      {
        id: 'shacman-x3000',
        model: 'X3000',
        name: 'Heavy Duty Tractor',
        specs: '6×4 | 430 HP | WP13 engine',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Shacman X3000 is a flagship heavy-duty tractor truck for long-haul transportation.'
      },
      {
        id: 'shacman-h3000',
        model: 'H3000',
        name: 'Dump Truck',
        specs: '6×4 | 380 HP | WP10 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Shacman H3000 dump truck offers excellent performance for construction and mining.'
      },
      {
        id: 'shacman-m3000',
        model: 'M3000',
        name: 'Cargo Truck',
        specs: '4×2 | 280 HP | WP7 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Shacman M3000 cargo truck provides reliable transportation for medium-haul logistics.'
      },
      {
        id: 'shacman-l3000',
        model: 'L3000',
        name: 'Mixer Truck',
        specs: '6×4 | 340 HP | WP10 engine | 8m³',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Shacman L3000 mixer truck is designed for concrete transportation in construction projects.'
      }
    ],
    spareParts: [
      { id: 'shacman-sp-1', partNumber: 'DZ9112550020', name: 'Engine Oil Filter', description: 'Engine oil filter for Shacman WP10/WP12 engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'shacman-sp-2', partNumber: 'DZ9112550010', name: 'Fuel Filter', description: 'Fuel filter for Shacman diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'shacman-sp-3', partNumber: 'DZ9100360010', name: 'Brake Lining', description: 'Rear brake lining for Shacman heavy trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'shacman-sp-4', partNumber: 'DZ9100410001', name: 'Clutch Disc', description: 'Clutch disc for Shacman X3000/H3000 trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Drivetrain' },
      { id: 'shacman-sp-5', partNumber: 'DZ9112340061', name: 'Shock Absorber', description: 'Front shock absorber for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Suspension' },
      { id: 'shacman-sp-6', partNumber: 'DZ9100840001', name: 'Leaf Spring', description: 'Rear leaf spring assembly for Shacman dump trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Suspension' },
    ]
  },
  {
    id: 'sinotruck',
    name: 'Sinotruck',
    fullName: 'China National Heavy Duty Truck Group (SINOTRUK)',
    category: 'truck',
    country: 'China',
    description: 'China\'s largest heavy-duty truck manufacturer, producing HOWO, SITRAK, and other brands for construction, mining, logistics, and special applications.',
    logo: 'SINOTRUK',
    color: '#0D47A1',
    machines: [
      {
        id: 'sino-howo-a7',
        model: 'HOWO A7',
        name: 'Heavy Duty Tractor',
        specs: '6×4 | 420 HP | MC11 engine',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The HOWO A7 is a premium heavy-duty tractor truck with advanced technology and comfort.'
      },
      {
        id: 'sino-howo-t7h',
        model: 'HOWO T7H',
        name: 'Heavy Duty Tractor',
        specs: '6×4 | 480 HP | MC13 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The HOWO T7H flagship tractor truck offers superior performance for long-haul transportation.'
      },
      {
        id: 'sino-howo-dump',
        model: 'HOWO ZZ3257N3847',
        name: 'Dump Truck',
        specs: '6×4 | 371 HP | WD615 engine | 16m³',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The HOWO dump truck is widely used in construction and mining for material hauling.'
      },
      {
        id: 'sino-sitrak-c7h',
        model: 'SITRAK C7H',
        name: 'Heavy Duty Tractor',
        specs: '6×4 | 540 HP | MAN D26 engine',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The SITRAK C7H is a premium truck with MAN technology for demanding long-haul operations.'
      }
    ],
    spareParts: [
      { id: 'sino-sp-1', partNumber: 'VG1540070007', name: 'Engine Oil Filter', description: 'Engine oil filter for Sinotruk WD615/WD618 engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sino-sp-2', partNumber: 'VG1540080011', name: 'Fuel Filter', description: 'Fuel filter for Sinotruk HOWO diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sino-sp-3', partNumber: 'WG9100360010', name: 'Brake Lining', description: 'Brake lining for Sinotruk HOWO trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'sino-sp-4', partNumber: 'WG9114160030', name: 'Clutch Disc', description: 'Clutch disc assembly for Sinotruk HOWO trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Drivetrain' },
      { id: 'sino-sp-5', partNumber: 'AZ9100680051', name: 'Wheel Hub', description: 'Rear wheel hub for Sinotruk HOWO trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Axle' },
      { id: 'sino-sp-6', partNumber: 'VG1560090012', name: 'Piston Ring Set', description: 'Piston ring set for Sinotruk WD615 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'sino-sp-7', partNumber: 'VG1246110010', name: 'Turbocharger', description: 'Turbocharger for Sinotruk WD615.47 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    fullName: 'Toyota Motor Corporation',
    category: 'truck',
    country: 'Japan',
    description: 'A global automotive manufacturer known for reliable commercial vehicles including the Land Cruiser, Hilux pickup trucks, and Hiace vans widely used in construction and mining.',
    logo: 'TOYOTA',
    color: '#D32F2F',
    machines: [
      {
        id: 'toyota-landcruiser-79',
        model: 'Land Cruiser 79',
        name: 'Pickup Truck',
        specs: '4×4 | 4.5L V8 Diesel | 1 ton payload',
        image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80',
        description: 'The Toyota Land Cruiser 79 is the ultimate off-road workhorse for mining and construction sites.'
      },
      {
        id: 'toyota-hilux-revo',
        model: 'Hilux Revo',
        name: 'Pickup Truck',
        specs: '4×4 | 2.8L Diesel | 1 ton payload',
        image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80',
        description: 'The Toyota Hilux Revo is a reliable and versatile pickup truck for tough working conditions.'
      },
      {
        id: 'toyota-hiace',
        model: 'Hiace 300',
        name: 'Van / Minibus',
        specs: '4×2 | 2.8L Diesel | 15 seats',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Toyota Hiace 300 is a versatile van for passenger and cargo transportation.'
      },
      {
        id: 'toyota-dyna',
        model: 'Dyna 300',
        name: 'Light Duty Truck',
        specs: '4×2 | 4.0L Diesel | 3 ton payload',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
        description: 'The Toyota Dyna 300 is a dependable light-duty truck for urban and regional delivery.'
      }
    ],
    spareParts: [
      { id: 'toyota-sp-1', partNumber: '90915-YZZD2', name: 'Engine Oil Filter', description: 'Engine oil filter for Toyota 1GD/2GD diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'toyota-sp-2', partNumber: '23303-0L010', name: 'Fuel Filter', description: 'Fuel filter for Toyota 1KD/2KD diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'toyota-sp-3', partNumber: '17801-0L040', name: 'Air Filter', description: 'Air cleaner element for Toyota Hilux/Land Cruiser', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'toyota-sp-4', partNumber: '04465-0K260', name: 'Brake Pad Set', description: 'Front brake pad set for Toyota Hilux Revo', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'toyota-sp-5', partNumber: '31250-0K090', name: 'Clutch Kit', description: 'Clutch disc and pressure plate kit for Toyota Hilux', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Drivetrain' },
      { id: 'toyota-sp-6', partNumber: '48520-0K170', name: 'Shock Absorber', description: 'Front shock absorber for Toyota Hilux Revo 4×4', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Suspension' },
      { id: 'toyota-sp-7', partNumber: '23670-0L090', name: 'Fuel Injector', description: 'Common rail fuel injector for Toyota 1KD engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
    ]
  },

  // ========== ENGINES ==========
  {
    id: 'cummins',
    name: 'Cummins',
    fullName: 'Cummins Inc.',
    category: 'engine',
    country: 'USA',
    description: 'A global power leader that designs, manufactures, and distributes engines, filtration, and power generation products for construction, mining, marine, and automotive applications.',
    logo: 'CUMMINS',
    color: '#E65100',
    machines: [
      {
        id: 'cum-b6.7',
        model: 'B6.7',
        name: 'Diesel Engine',
        specs: '6.7L | 140-224 kW | Tier 4 Final',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Cummins B6.7 is a versatile mid-range diesel engine for construction equipment and trucks.'
      },
      {
        id: 'cum-qsb7',
        model: 'QSB7',
        name: 'Diesel Engine',
        specs: '6.7L | 149-224 kW | Tier 4',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Cummins QSB7 engine delivers reliable power for off-highway equipment.'
      },
      {
        id: 'cum-qsl9',
        model: 'QSL9',
        name: 'Diesel Engine',
        specs: '8.9L | 224-298 kW | Tier 4',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Cummins QSL9 provides high performance for demanding construction applications.'
      },
      {
        id: 'cum-qsx15',
        model: 'QSX15',
        name: 'Diesel Engine',
        specs: '15L | 373-522 kW | Tier 4',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Cummins QSX15 is a high-power engine for large mining and construction equipment.'
      }
    ],
    spareParts: [
      { id: 'cum-sp-1', partNumber: '3931063', name: 'Engine Oil Filter', description: 'Engine oil filter for Cummins B/C series engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cum-sp-2', partNumber: '3931063', name: 'Fuel Filter', description: 'Fuel filter element for Cummins diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cum-sp-3', partNumber: '4955642', name: 'Injector', description: 'Fuel injector for Cummins QSB/QSL engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'cum-sp-4', partNumber: '3803714', name: 'Turbocharger', description: 'Turbocharger assembly for Cummins 6BT engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cum-sp-5', partNumber: '3901172', name: 'Piston Kit', description: 'Piston and ring kit for Cummins 6BT engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cum-sp-6', partNumber: '3803714', name: 'Water Pump', description: 'Coolant water pump for Cummins diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cooling System' },
      { id: 'cum-sp-7', partNumber: '4914058', name: 'Cylinder Head Gasket', description: 'Cylinder head gasket for Cummins 6BT engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
    ]
  },
  {
    id: 'weichai',
    name: 'Weichai',
    fullName: 'Weichai Power Co., Ltd.',
    category: 'engine',
    country: 'China',
    description: 'China\'s largest diesel engine manufacturer, producing engines for construction machinery, heavy trucks, marine vessels, and power generation equipment.',
    logo: 'WEICHAI',
    color: '#1B5E20',
    machines: [
      {
        id: 'wc-wp7',
        model: 'WP7',
        name: 'Diesel Engine',
        specs: '6.75L | 162-206 kW | National VI',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Weichai WP7 is a reliable medium-duty diesel engine for trucks and construction machinery.'
      },
      {
        id: 'wc-wp10',
        model: 'WP10',
        name: 'Diesel Engine',
        specs: '9.726L | 247-336 kW | National VI',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Weichai WP10 engine delivers powerful performance for heavy-duty trucks and equipment.'
      },
      {
        id: 'wc-wp13',
        model: 'WP13',
        name: 'Diesel Engine',
        specs: '12.54L | 336-485 kW | National VI',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Weichai WP13 is a high-power engine for heavy-duty trucks and large construction equipment.'
      },
      {
        id: 'wc-wd615',
        model: 'WD615',
        name: 'Diesel Engine',
        specs: '9.726L | 213-276 kW | Euro III',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Weichai WD615 is a widely used engine in Chinese heavy trucks and construction machinery.'
      }
    ],
    spareParts: [
      { id: 'wc-sp-1', partNumber: '1000422532', name: 'Engine Oil Filter', description: 'Engine oil filter for Weichai WP10/WP12 engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'wc-sp-2', partNumber: '1000422533', name: 'Fuel Filter', description: 'Fuel filter for Weichai diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'wc-sp-3', partNumber: '612600080611', name: 'Injector', description: 'Common rail injector for Weichai WD615 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'wc-sp-4', partNumber: '612600110696', name: 'Turbocharger', description: 'Turbocharger for Weichai WD615 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'wc-sp-5', partNumber: '612600060143', name: 'Water Pump', description: 'Coolant water pump for Weichai WD615 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cooling System' },
      { id: 'wc-sp-6', partNumber: '61500050029A', name: 'Piston Ring Set', description: 'Piston ring set for Weichai WD615 engine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'wc-sp-7', partNumber: '612600040231', name: 'Cylinder Liner', description: 'Cylinder liner for Weichai WD615 engine overhaul', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
    ]
  }
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(b => b.id === id);
};

export const getBrandsByCategory = (category: Category): Brand[] => {
  return brands.filter(b => b.category === category);
};
