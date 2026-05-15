// ============================================================
// VXZO Global Machinery & Parts Trading - Product Database
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

export function getBrandById(id: string): Brand | undefined {
  return brands.find(b => b.id === id);
}

export function getBrandsByCategory(category: Category): Brand[] {
  return brands.filter(b => b.category === category);
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
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'cat-sp-1', partNumber: '106-3969', name: 'Primary Air Filter', description: 'Primary Air Filter for 320B, 320C, 320D. Engine: 3066, C6.4. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-2', partNumber: '106-3973', name: 'Secondary Air Filter', description: 'Secondary Air Filter for 320B, 320C, 320D. Engine: 3066, C6.4. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-3', partNumber: '163-0472', name: 'Valve Cover Gasket', description: 'Valve Cover Gasket for 950G, 938G. Engine: 3116, 3126. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-4', partNumber: '175-8027', name: 'Track Roller (Single Flange)', description: 'Track Roller (Single Flange) for D6R, D6T, D6N. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'cat-sp-5', partNumber: '183-2823', name: 'Fuel Priming Pump', description: 'Fuel Priming Pump for 320D, 330D, 336D. Engine: C7, C9, C13. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'cat-sp-6', partNumber: '185-5294', name: 'Alternator', description: 'Alternator for 320D, 325D, 330D. Engine: C7, C9. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Electrical' },
      { id: 'cat-sp-7', partNumber: '190-6681', name: 'Fan Belt (Ribbed)', description: 'Fan Belt (Ribbed) for 320D, 120K. Engine: C7. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Belts' },
      { id: 'cat-sp-8', partNumber: '197-9386', name: 'Piston Ring Set', description: 'Piston Ring Set for 320C, 320D. Engine: 3066 / C6.4. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-9', partNumber: '1R-0719', name: 'Transmission Filter', description: 'Transmission Filter for D6R, D7R, D8R, 950H, 966H. Engine: N/A. High Turnover: YES', image: '/manus-storage/NKbEqrjZ4lwr_7542a337.jpg', category: 'Filters' },
      { id: 'cat-sp-10', partNumber: '1R-0735', name: 'Hydraulic Oil Filter', description: 'Hydraulic Oil Filter for 950G, 966G, 988G, D6R, D7R. Engine: N/A. High Turnover: YES', image: '/manus-storage/HpSAVvKQgR5J_d9c21f63.jpg', category: 'Filters' },
      { id: 'cat-sp-11', partNumber: '1R-0749', name: 'Fuel Filter (Secondary)', description: 'Fuel Filter (Secondary) for 336D, D6R, D7R, 966H. Engine: C7, C9, C12, C15, 3406. High Turnover: YES (Must-stock)', image: '/manus-storage/VsMFwesujEND_bdcfe3e3.jpg', category: 'Filters' },
      { id: 'cat-sp-12', partNumber: '1R-0762', name: 'Advanced Efficiency Fuel Filter', description: 'Advanced Efficiency Fuel Filter for 330D, 345D, 980H. Engine: C9, C11, C13, C15. High Turnover: YES', image: '/manus-storage/lPZ1c8d0P1KT_b1e6156a.jpg', category: 'Filters' },
      { id: 'cat-sp-13', partNumber: '1R-1808', name: 'Engine Oil Filter', description: 'Engine Oil Filter for 320D, 330D, 336D, 345D, 349D. Engine: C7, C9, C13, C15. High Turnover: YES (Must-stock)', image: '/manus-storage/BdhAzqKATMvt_7792aab3.jpg', category: 'Filters' },
      { id: 'cat-sp-14', partNumber: '1U-3352', name: 'Bucket Tooth (J350)', description: 'Bucket Tooth (J350) for 320, 322, 325 Series. Engine: N/A. High Turnover: YES (High Wear)', image: '/manus-storage/soEbKPVAVIaR_0fef890a.jpg', category: 'Wear Parts' },
      { id: 'cat-sp-15', partNumber: '1U-3352RC', name: 'Bucket Tooth (Heavy Duty)', description: 'Bucket Tooth (Heavy Duty) for 320, 325 (Rock Application). Engine: N/A. High Turnover: YES (High Wear)', image: '/manus-storage/tSkpHmij4HwV_fc0935b1.jpg', category: 'Wear Parts' },
      { id: 'cat-sp-16', partNumber: '207-1556', name: 'Starter Motor', description: 'Starter Motor for 320C, 320D. Engine: 3066, C6.4. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Electrical' },
      { id: 'cat-sp-17', partNumber: '221-9355', name: 'Cylinder Head Gasket', description: 'Cylinder Head Gasket for 320D, 120K, M325C. Engine: C7. High Turnover: YES (Repair)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-18', partNumber: '230-2520', name: 'Connecting Rod Bearing', description: 'Connecting Rod Bearing for 345D, 349D, D8R. Engine: C13, C15. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-19', partNumber: '235-2858', name: 'Turbocharger', description: 'Turbocharger for 320D Excavator. Engine: C7. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-20', partNumber: '243-6710', name: 'Main Bearing (Standard)', description: 'Main Bearing (Standard) for 320D, 330D. Engine: C7, C9. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-21', partNumber: '248-5513', name: 'Thermostat', description: 'Thermostat for Universal. Engine: C7, C9, C13. High Turnover: YES (Cooling)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-22', partNumber: '295-9126', name: 'Injection Pump', description: 'Injection Pump for 320D GC, 420E. Engine: C4.4, C6.6. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'cat-sp-23', partNumber: '326-1644', name: 'Water Separator', description: 'Water Separator for 320D, 323D, 420E. Engine: C4.4, C6.6, C7. High Turnover: YES (Must-stock)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cat-sp-24', partNumber: '326-4700', name: 'Fuel Injector (Common Rail)', description: 'Fuel Injector (Common Rail) for 320D Excavator. Engine: C6.4. High Turnover: YES (Critical)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'cat-sp-25', partNumber: '332-6020', name: 'Full Gasket Kit (Overhaul)', description: 'Full Gasket Kit (Overhaul) for 330D, 336D, D6R. Engine: C9. High Turnover: Medium (Major)', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-26', partNumber: '352-0203', name: 'Water Pump', description: 'Water Pump for 345D, 349D, D8R, D8T. Engine: C13, C15, C18. High Turnover: Medium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine' },
      { id: 'cat-sp-27', partNumber: '4T-6381', name: 'Cutting Edge (Dozer)', description: 'Cutting Edge (Dozer) for D6R, D6T Bulldozer. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Wear Parts' },
      { id: 'cat-sp-28', partNumber: '4T-6387', name: 'End Bit (Left)', description: 'End Bit (Left) for D6R, D6T Bulldozer. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Wear Parts' },
      { id: 'cat-sp-29', partNumber: '4T-6388', name: 'End Bit (Right)', description: 'End Bit (Right) for D6R, D6T Bulldozer. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Wear Parts' },
      { id: 'cat-sp-30', partNumber: '6I-9254', name: 'Tooth Adapter (Center)', description: 'Tooth Adapter (Center) for 320 Series Excavator. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Wear Parts' },
      { id: 'cat-sp-31', partNumber: 'CR5508', name: 'Carrier Roller', description: 'Carrier Roller for 320B, 320C, 320D. Engine: N/A. High Turnover: YES', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
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
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      {
        id: 'shantui-sp-1',
        partNumber: '16Y-40-09000',
        name: 'Single Flange Track Roller',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Single Flange Track Roller. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-2',
        partNumber: '16Y-40-10000',
        name: 'Double Flange Track Roller',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Double Flange Track Roller. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-3',
        partNumber: '16Y-30-00000',
        name: 'Idler Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Idler Assembly. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/HUMEcesbyAE8_0caf4ff6.png'
      },
      {
        id: 'shantui-sp-4',
        partNumber: '16Y-45-00000',
        name: 'Carrier Roller Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Carrier Roller Assembly. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-5',
        partNumber: '16Y-54-00000',
        name: 'Track Shoe Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Track Shoe Assembly. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-6',
        partNumber: '16Y-41-00000',
        name: 'Track Chain Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Track Chain Assembly. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-7',
        partNumber: '16Y-54-00012/13',
        name: 'Track Bolt & Nut',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'Track Bolt & Nut. Applicable to: SD16, SD22, DH16, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-8',
        partNumber: '22Y-32-00000',
        name: 'SD22 Idler Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'SD22 Idler Assembly. Applicable to: SD22, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/HUMEcesbyAE8_0caf4ff6.png'
      },
      {
        id: 'shantui-sp-9',
        partNumber: '22Y-40-00000',
        name: 'SD22 Track Roller Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'SD22 Track Roller Assembly. Applicable to: SD22, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-10',
        partNumber: '22Y-41-00000',
        name: 'SD22 Track Chain Assembly',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'SD22 Track Chain Assembly. Applicable to: SD22, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-11',
        partNumber: '8280-40-00000',
        name: 'DH46 Mine Type Track Roller',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'DH46 Mine Type Track Roller. Applicable to: DH46. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-12',
        partNumber: '8280-54-00000',
        name: 'DH46 Reinforced Track Shoe',
        category: 'Bulldozer - Chassis & Travel System',
        description: 'DH46 Reinforced Track Shoe. Applicable to: DH46. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/DHKW4Teze1mN_c5f5c641.webp'
      },
      {
        id: 'shantui-sp-13',
        partNumber: '16Y-75-23200',
        name: 'Transmission Filter',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Transmission Filter. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-14',
        partNumber: '16Y-15-00000',
        name: 'Transmission Control Valve',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Transmission Control Valve. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/NKbEqrjZ4lwr_4bbb5b51.jpg'
      },
      {
        id: 'shantui-sp-15',
        partNumber: '23Y-17B-00000',
        name: 'Steering Clutch Assembly',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Steering Clutch Assembly. Applicable to: SD22, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/NKbEqrjZ4lwr_4bbb5b51.jpg'
      },
      {
        id: 'shantui-sp-16',
        partNumber: '22Y-87-00001',
        name: 'Final Drive Gear',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Final Drive Gear. Applicable to: SD22, DH24. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/NKbEqrjZ4lwr_4bbb5b51.jpg'
      },
      {
        id: 'shantui-sp-17',
        partNumber: '16Y-16-01000',
        name: 'Clutch Friction Plate',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Clutch Friction Plate. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/NKbEqrjZ4lwr_4bbb5b51.jpg'
      },
      {
        id: 'shantui-sp-18',
        partNumber: '16Y-16-01100',
        name: 'Clutch Steel Plate',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Clutch Steel Plate. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/NKbEqrjZ4lwr_4bbb5b51.jpg'
      },
      {
        id: 'shantui-sp-19',
        partNumber: '16Y-14-00000',
        name: 'Transmission Oil Seal Repair Kit',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Transmission Oil Seal Repair Kit. Applicable to: SD16 Full Series. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/5ZWag8W1OaSu_4290c181.webp'
      },
      {
        id: 'shantui-sp-20',
        partNumber: '16Y-17-02000',
        name: 'Steering Cylinder Oil Seal',
        category: 'Bulldozer - Transmission & Hydraulic System',
        description: 'Steering Cylinder Oil Seal. Applicable to: SD22, DH24. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/VsMFwesujEND_c6d74c9e.jpg'
      },
      {
        id: 'shantui-sp-21',
        partNumber: '16Y-80-00019',
        name: 'Blade Corner Edge',
        category: 'Bulldozer - Structure & Seal System',
        description: 'Blade Corner Edge. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/HUMEcesbyAE8_0caf4ff6.png'
      },
      {
        id: 'shantui-sp-22',
        partNumber: '16Y-80-00018',
        name: 'Main Cutting Blade',
        category: 'Bulldozer - Structure & Seal System',
        description: 'Main Cutting Blade. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/HUMEcesbyAE8_0caf4ff6.png'
      },
      {
        id: 'shantui-sp-23',
        partNumber: '16Y-63-00000',
        name: 'Tilt Cylinder Oil Seal Repair Kit',
        category: 'Bulldozer - Structure & Seal System',
        description: 'Tilt Cylinder Oil Seal Repair Kit. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/5ZWag8W1OaSu_4290c181.webp'
      },
      {
        id: 'shantui-sp-24',
        partNumber: '16Y-62-00000',
        name: 'Lift Cylinder Oil Seal Repair Kit',
        category: 'Bulldozer - Structure & Seal System',
        description: 'Lift Cylinder Oil Seal Repair Kit. Applicable to: SD16, DH16-B3. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/5ZWag8W1OaSu_4290c181.webp'
      },
      {
        id: 'shantui-sp-25',
        partNumber: '16Y-40-01000',
        name: 'Travel Motor Oil Seal',
        category: 'Bulldozer - Structure & Seal System',
        description: 'Travel Motor Oil Seal. Applicable to: SD16 Full Series. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/VsMFwesujEND_c6d74c9e.jpg'
      },
      {
        id: 'shantui-sp-26',
        partNumber: '61000070005',
        name: 'Engine Oil Filter',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Engine Oil Filter. Applicable to: SD16, DH16-B3. Engine: Weichai WD615. Brand: Weichai',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-27',
        partNumber: '612600080211',
        name: 'Fuel Pre-filter',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Fuel Pre-filter. Applicable to: Full Bulldozer Series. Engine: Weichai WD615/WP12. Brand: Weichai',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-28',
        partNumber: '612600080134',
        name: 'Fuel Fine Filter',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Fuel Fine Filter. Applicable to: Full Bulldozer Series. Engine: Weichai WD615/WP12. Brand: Weichai',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-29',
        partNumber: '16Y-76-23000',
        name: 'Air Filter',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Air Filter. Applicable to: SD16, DH16-B3. Engine: Weichai WD615. Brand: Weichai Matching',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-30',
        partNumber: '612600080353',
        name: 'Fuel Transfer Pump',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Fuel Transfer Pump. Applicable to: SD16, SD22, DH16, DH24. Engine: Weichai WD615/WP12. Brand: Weichai',
        image: '/manus-storage/mEykvoZZnbwy_009c3ba9.png'
      },
      {
        id: 'shantui-sp-31',
        partNumber: '612600060101',
        name: 'Cooling Water Pump',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Cooling Water Pump. Applicable to: Full Bulldozer Series. Engine: Weichai WD615/WP12. Brand: Weichai',
        image: '/manus-storage/mEykvoZZnbwy_009c3ba9.png'
      },
      {
        id: 'shantui-sp-32',
        partNumber: '16Y-76-14000',
        name: 'Fan Belt',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Fan Belt. Applicable to: SD16, DH16-B3. Engine: Weichai WD615. Brand: Weichai Matching',
        image: '/manus-storage/HpSAVvKQgR5J_971d5808.jpg'
      },
      {
        id: 'shantui-sp-33',
        partNumber: '612600060335',
        name: 'Alternator Belt',
        category: 'Bulldozer - Engine Wear Parts',
        description: 'Alternator Belt. Applicable to: Full Bulldozer Series. Engine: Weichai WD615/WP12. Brand: Weichai',
        image: '/manus-storage/HpSAVvKQgR5J_971d5808.jpg'
      },
      {
        id: 'shantui-sp-34',
        partNumber: '708-2L-00415',
        name: 'Main Hydraulic Pump',
        category: 'Excavator - Hydraulic System',
        description: 'Main Hydraulic Pump. Applicable to: SE210LC. Engine: N/A. Brand: Kawasaki Matching',
        image: '/manus-storage/lPZ1c8d0P1KT_347a850d.jpg'
      },
      {
        id: 'shantui-sp-35',
        partNumber: '14531818',
        name: 'Pilot Filter',
        category: 'Excavator - Hydraulic System',
        description: 'Pilot Filter. Applicable to: SE210LC, SE335LC, SE390LC. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-36',
        partNumber: 'J213-03A-020001',
        name: 'Return Oil Filter',
        category: 'Excavator - Hydraulic System',
        description: 'Return Oil Filter. Applicable to: SE210LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-37',
        partNumber: 'J213-03A-010001',
        name: 'Inlet Oil Filter',
        category: 'Excavator - Hydraulic System',
        description: 'Inlet Oil Filter. Applicable to: SE210LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-38',
        partNumber: 'J235-03A-030001',
        name: 'Pipeline Filter',
        category: 'Excavator - Hydraulic System',
        description: 'Pipeline Filter. Applicable to: SE335LC, SE390LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/BdhAzqKATMvt_ebec6d67.jpg'
      },
      {
        id: 'shantui-sp-39',
        partNumber: 'SE210-001',
        name: 'Travel Motor Repair Kit',
        category: 'Excavator - Hydraulic System',
        description: 'Travel Motor Repair Kit. Applicable to: SE210LC. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/5ZWag8W1OaSu_4290c181.webp'
      },
      {
        id: 'shantui-sp-40',
        partNumber: 'SE210-002',
        name: 'Swing Motor Repair Kit',
        category: 'Excavator - Hydraulic System',
        description: 'Swing Motor Repair Kit. Applicable to: SE210LC. Engine: N/A. Brand: OEM Matching',
        image: '/manus-storage/5ZWag8W1OaSu_4290c181.webp'
      },
      {
        id: 'shantui-sp-41',
        partNumber: 'J213-62-00000',
        name: 'Boom Cylinder Oil Seal Repair Kit',
        category: 'Excavator - Hydraulic System',
        description: 'Boom Cylinder Oil Seal Repair Kit. Applicable to: SE210LC. Engine: N/A. Brand: OEM Seal Parts',
        image: '/manus-storage/7kSIAoqERqKl_963148f6.webp'
      },
      {
        id: 'shantui-sp-42',
        partNumber: 'J213-63-00000',
        name: 'Arm Cylinder Oil Seal Repair Kit',
        category: 'Excavator - Hydraulic System',
        description: 'Arm Cylinder Oil Seal Repair Kit. Applicable to: SE210LC. Engine: N/A. Brand: OEM Seal Parts',
        image: '/manus-storage/7kSIAoqERqKl_963148f6.webp'
      },
      {
        id: 'shantui-sp-43',
        partNumber: 'J213-64-00000',
        name: 'Bucket Cylinder Oil Seal Repair Kit',
        category: 'Excavator - Hydraulic System',
        description: 'Bucket Cylinder Oil Seal Repair Kit. Applicable to: SE210LC. Engine: N/A. Brand: OEM Seal Parts',
        image: '/manus-storage/fZEQTmhPChmb_605f9d95.webp'
      },
      {
        id: 'shantui-sp-44',
        partNumber: '205-70-73160',
        name: 'Standard Bucket Tooth',
        category: 'Excavator - Bucket Structure',
        description: 'Standard Bucket Tooth. Applicable to: SE210LC, SE335LC, SE390LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/lPZ1c8d0P1KT_347a850d.jpg'
      },
      {
        id: 'shantui-sp-45',
        partNumber: '205-70-73161',
        name: 'Tooth Pin',
        category: 'Excavator - Bucket Structure',
        description: 'Tooth Pin. Applicable to: SE210LC, SE335LC, SE390LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/soEbKPVAVIaR_169a7ad5.jpg'
      },
      {
        id: 'shantui-sp-46',
        partNumber: '205-70-73220',
        name: 'Side Cutter',
        category: 'Excavator - Bucket Structure',
        description: 'Side Cutter. Applicable to: SE210LC. Engine: N/A. Brand: Original Shantui',
        image: '/manus-storage/tSkpHmij4HwV_d788949e.jpg'
      }
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
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'xcmg-803070123', partNumber: '803070123', name: 'Track Shoe', description: 'XCMG Track Shoe (OEM: 803070123). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/L7W8f1DXErIX_a1b2c3d4.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070124', partNumber: '803070124', name: 'Track Chain Assembly', description: 'XCMG Track Chain Assembly (OEM: 803070124). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/ixtxmJEIShPz_e5f6g7h8.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070125', partNumber: '803070125', name: 'Drive Sprocket', description: 'XCMG Drive Sprocket (OEM: 803070125). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070126', partNumber: '803070126', name: 'Front Idler', description: 'XCMG Front Idler (OEM: 803070126). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070127', partNumber: '803070127', name: 'Lower Track Roller', description: 'XCMG Lower Track Roller (OEM: 803070127). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070128', partNumber: '803070128', name: 'Upper Carrier Roller', description: 'XCMG Upper Carrier Roller (OEM: 803070128). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070129', partNumber: '803070129', name: 'Track Frame', description: 'XCMG Track Frame (OEM: 803070129). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070130', partNumber: '803070130', name: 'Idler Arm', description: 'XCMG Idler Arm (OEM: 803070130). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070131', partNumber: '803070131', name: 'Track Tensioner', description: 'XCMG Track Tensioner (OEM: 803070131). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070132', partNumber: '803070132', name: 'Track Bolt', description: 'XCMG Track Bolt (OEM: 803070132). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070133', partNumber: '803070133', name: 'Track Pin', description: 'XCMG Track Pin (OEM: 803070133). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070134', partNumber: '803070134', name: 'Track Roller Bearing', description: 'XCMG Track Roller Bearing (OEM: 803070134). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070135', partNumber: '803070135', name: 'Sprocket Bearing', description: 'XCMG Sprocket Bearing (OEM: 803070135). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803070136', partNumber: '803070136', name: 'Idler Bearing', description: 'XCMG Idler Bearing (OEM: 803070136). Category: Excavator Undercarriage. Applicable Models: XE215DA/XE155UCR/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/axMq3scQ8xZr_i9j0k1l2.jpg', category: 'Excavator Undercarriage' },
      { id: 'xcmg-803080101', partNumber: '803080101', name: 'Main Pump', description: 'XCMG Main Pump (OEM: 803080101). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/Tut5cGqK9Ja8_a34e1d85.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080102', partNumber: '803080102', name: 'Pilot Pump', description: 'XCMG Pilot Pump (OEM: 803080102). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/6aPLKIWRPN1o_5438173b.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080103', partNumber: '803080103', name: 'Hydraulic Motor', description: 'XCMG Hydraulic Motor (OEM: 803080103). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/VCvdAPqtPArs_5846936c.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080104', partNumber: '803080104', name: 'Proportional Valve', description: 'XCMG Proportional Valve (OEM: 803080104). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/DHKW4Teze1mN_f7dc502b.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080105', partNumber: '803080105', name: 'Main Control Valve', description: 'XCMG Main Control Valve (OEM: 803080105). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/DHKW4Teze1mN_f7dc502b.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080106', partNumber: '803080106', name: 'Pressure Reducing Valve', description: 'XCMG Pressure Reducing Valve (OEM: 803080106). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/DHKW4Teze1mN_f7dc502b.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080107', partNumber: '803080107', name: 'Directional Control Valve', description: 'XCMG Directional Control Valve (OEM: 803080107). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/DHKW4Teze1mN_f7dc502b.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080108', partNumber: '803080108', name: 'Boom Cylinder', description: 'XCMG Boom Cylinder (OEM: 803080108). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080109', partNumber: '803080109', name: 'Arm Cylinder', description: 'XCMG Arm Cylinder (OEM: 803080109). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080110', partNumber: '803080110', name: 'Bucket Cylinder', description: 'XCMG Bucket Cylinder (OEM: 803080110). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080111', partNumber: '803080111', name: 'Swing Motor', description: 'XCMG Swing Motor (OEM: 803080111). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/VCvdAPqtPArs_5846936c.webp', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803080112', partNumber: '803080112', name: 'Hydraulic Filter', description: 'XCMG Hydraulic Filter (OEM: 803080112). Category: Excavator Hydraulic System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Hydraulic System' },
      { id: 'xcmg-803090101', partNumber: '803090101', name: 'Cylinder Head', description: 'XCMG Cylinder Head (OEM: 803090101). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/yD91EmphfF8N_e9eec149.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090102', partNumber: '803090102', name: 'Engine Block', description: 'XCMG Engine Block (OEM: 803090102). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/RrQL1gjKniwG_ff95782f.png', category: 'Excavator Engine System' },
      { id: 'xcmg-803090103', partNumber: '803090103', name: 'Crankshaft', description: 'XCMG Crankshaft (OEM: 803090103). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090104', partNumber: '803090104', name: 'Camshaft', description: 'XCMG Camshaft (OEM: 803090104). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090105', partNumber: '803090105', name: 'Piston', description: 'XCMG Piston (OEM: 803090105). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090106', partNumber: '803090106', name: 'Connecting Rod', description: 'XCMG Connecting Rod (OEM: 803090106). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090107', partNumber: '803090107', name: 'Valve', description: 'XCMG Valve (OEM: 803090107). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090108', partNumber: '803090108', name: 'Fuel Injector', description: 'XCMG Fuel Injector (OEM: 803090108). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090109', partNumber: '803090109', name: 'Turbocharger', description: 'XCMG Turbocharger (OEM: 803090109). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/7kSIAoqERqKl_34604984.webp', category: 'Excavator Engine System' },
      { id: 'xcmg-803090110', partNumber: '803090110', name: 'Engine Oil Filter', description: 'XCMG Engine Oil Filter (OEM: 803090110). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Engine System' },
      { id: 'xcmg-803090111', partNumber: '803090111', name: 'Air Filter', description: 'XCMG Air Filter (OEM: 803090111). Category: Excavator Engine System. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Engine System' },
      { id: 'xcmg-803100101', partNumber: '803100101', name: 'Bucket Tooth', description: 'XCMG Bucket Tooth (OEM: 803100101). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100102', partNumber: '803100102', name: 'Bucket Adapter', description: 'XCMG Bucket Adapter (OEM: 803100102). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100103', partNumber: '803100103', name: 'Boom', description: 'XCMG Boom (OEM: 803100103). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100104', partNumber: '803100104', name: 'Arm', description: 'XCMG Arm (OEM: 803100104). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100105', partNumber: '803100105', name: 'Bucket', description: 'XCMG Bucket (OEM: 803100105). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100106', partNumber: '803100106', name: 'Swing Frame', description: 'XCMG Swing Frame (OEM: 803100106). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100107', partNumber: '803100107', name: 'Swing Bearing', description: 'XCMG Swing Bearing (OEM: 803100107). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100108', partNumber: '803100108', name: 'Cabin', description: 'XCMG Cabin (OEM: 803100108). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100109', partNumber: '803100109', name: 'Counterweight', description: 'XCMG Counterweight (OEM: 803100109). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803100110', partNumber: '803100110', name: 'Undercarriage Guard', description: 'XCMG Undercarriage Guard (OEM: 803100110). Category: Excavator Working Device. Applicable Models: XE215DA/XE370CA/XE520E. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Excavator Working Device' },
      { id: 'xcmg-803110101', partNumber: '803110101', name: 'Transmission', description: 'XCMG Transmission (OEM: 803110101). Category: Loader Transmission System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/5ZWag8W1OaSu_92386e1d.webp', category: 'Loader Transmission System' },
      { id: 'xcmg-803110102', partNumber: '803110102', name: 'Torque Converter', description: 'XCMG Torque Converter (OEM: 803110102). Category: Loader Transmission System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/5ZWag8W1OaSu_92386e1d.webp', category: 'Loader Transmission System' },
      { id: 'xcmg-803120101', partNumber: '803120101', name: 'Brake Disc', description: 'XCMG Brake Disc (OEM: 803120101). Category: Loader Brake System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/RrQL1gjKniwG_ff95782f.png', category: 'Loader Brake System' },
      { id: 'xcmg-803120102', partNumber: '803120102', name: 'Brake Pad', description: 'XCMG Brake Pad (OEM: 803120102). Category: Loader Brake System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/RrQL1gjKniwG_ff95782f.png', category: 'Loader Brake System' },
      { id: 'xcmg-803120103', partNumber: '803120103', name: 'Brake Cylinder', description: 'XCMG Brake Cylinder (OEM: 803120103). Category: Loader Brake System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/RrQL1gjKniwG_ff95782f.png', category: 'Loader Brake System' },
      { id: 'xcmg-803120104', partNumber: '803120104', name: 'Brake Hose', description: 'XCMG Brake Hose (OEM: 803120104). Category: Loader Brake System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/RrQL1gjKniwG_ff95782f.png', category: 'Loader Brake System' },
      { id: 'xcmg-803130101', partNumber: '803130101', name: 'Wheel', description: 'XCMG Wheel (OEM: 803130101). Category: Loader Wheel System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/mEykvoZZnbwy_e5cea219.png', category: 'Loader Wheel System' },
      { id: 'xcmg-803130102', partNumber: '803130102', name: 'Tire', description: 'XCMG Tire (OEM: 803130102). Category: Loader Wheel System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/mEykvoZZnbwy_e5cea219.png', category: 'Loader Wheel System' },
      { id: 'xcmg-803130103', partNumber: '803130103', name: 'Wheel Hub', description: 'XCMG Wheel Hub (OEM: 803130103). Category: Loader Wheel System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/mEykvoZZnbwy_e5cea219.png', category: 'Loader Wheel System' },
      { id: 'xcmg-803130104', partNumber: '803130104', name: 'Bearing', description: 'XCMG Bearing (OEM: 803130104). Category: Loader Wheel System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/mEykvoZZnbwy_e5cea219.png', category: 'Loader Wheel System' },
      { id: 'xcmg-803140101', partNumber: '803140101', name: 'Loader Bucket', description: 'XCMG Loader Bucket (OEM: 803140101). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803140102', partNumber: '803140102', name: 'Bucket Tooth', description: 'XCMG Bucket Tooth (OEM: 803140102). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803140103', partNumber: '803140103', name: 'Boom Arm', description: 'XCMG Boom Arm (OEM: 803140103). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803140104', partNumber: '803140104', name: 'Articulation Joint', description: 'XCMG Articulation Joint (OEM: 803140104). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803140105', partNumber: '803140105', name: 'Steering Cylinder', description: 'XCMG Steering Cylinder (OEM: 803140105). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803140106', partNumber: '803140106', name: 'Cabin', description: 'XCMG Cabin (OEM: 803140106). Category: Loader Working Device. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Loader Working Device' },
      { id: 'xcmg-803150101', partNumber: '803150101', name: 'Loader Hydraulic Pump', description: 'XCMG Loader Hydraulic Pump (OEM: 803150101). Category: Loader Hydraulic System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/Tut5cGqK9Ja8_a34e1d85.webp', category: 'Loader Hydraulic System' },
      { id: 'xcmg-803150102', partNumber: '803150102', name: 'Loader Hydraulic Motor', description: 'XCMG Loader Hydraulic Motor (OEM: 803150102). Category: Loader Hydraulic System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/VCvdAPqtPArs_5846936c.webp', category: 'Loader Hydraulic System' },
      { id: 'xcmg-803150103', partNumber: '803150103', name: 'Loader Hydraulic Cylinder', description: 'XCMG Loader Hydraulic Cylinder (OEM: 803150103). Category: Loader Hydraulic System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Loader Hydraulic System' },
      { id: 'xcmg-803150104', partNumber: '803150104', name: 'Loader Hydraulic Valve', description: 'XCMG Loader Hydraulic Valve (OEM: 803150104). Category: Loader Hydraulic System. Applicable Models: XC9260/XC968. High-quality genuine XCMG spare part with warranty.', image: '/manus-storage/DHKW4Teze1mN_f7dc502b.webp', category: 'Loader Hydraulic System' },
    ]
  },
  {
    id: 'liugong',
    name: 'LiuGong',
    fullName: 'Liugong Machinery Co., Ltd.',
    category: 'construction',
    country: 'China',
    description: 'Leading Chinese manufacturer of construction machinery including wheel loaders, excavators, and bulldozers.',
    logo: 'LIUGONG',
    color: '#0277BD',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'lg-sp-1', partNumber: 'CLG856-01-0001', name: 'Engine Oil Filter', description: 'LiuGong engine oil filter for wheel loaders and excavators. OEM: CLG856-01-0001. Category: Engine Filters. Applicable Models: CLG856H/CLG862H/CLG890H. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Engine Filters' },
      { id: 'lg-sp-2', partNumber: 'CLG856-02-0001', name: 'Fuel Filter', description: 'LiuGong fuel filter for construction machinery. OEM: CLG856-02-0001. Category: Fuel System. Applicable Models: CLG856H/CLG862H/CLG890H. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Fuel System' },
      { id: 'lg-sp-3', partNumber: 'CLG856-03-0001', name: 'Air Filter', description: 'LiuGong air cleaner element for loaders and excavators. OEM: CLG856-03-0001. Category: Air Filters. Applicable Models: CLG856H/CLG862H/CLG890H. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Air Filters' },
      { id: 'lg-sp-4', partNumber: 'CLG856-04-0001', name: 'Hydraulic Filter', description: 'LiuGong hydraulic filter for wheel loaders. OEM: CLG856-04-0001. Category: Hydraulic Filters. Applicable Models: CLG856H/CLG862H/CLG890H. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Hydraulic Filters' },
      { id: 'lg-sp-5', partNumber: 'CLG856-05-0001', name: 'Transmission Filter', description: 'LiuGong transmission filter for loaders. OEM: CLG856-05-0001. Category: Transmission Filters. Applicable Models: CLG856H/CLG862H/CLG890H. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Transmission Filters' },
      { id: 'lg-sp-6', partNumber: 'CLG914E-06-0001', name: 'Bucket Tooth', description: 'LiuGong bucket tooth for excavators. OEM: CLG914E-06-0001. Category: Ground Engaging Tools. Applicable Models: CLG914E/CLG909ECR/CLG915E. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Ground Engaging Tools' },
      { id: 'lg-sp-7', partNumber: 'CLG856-07-0001', name: 'Track Shoe', description: 'LiuGong track shoe for excavators. OEM: CLG856-07-0001. Category: Undercarriage. Applicable Models: CLG914E/CLG909ECR/CLG915E. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/L7W8f1DXErIX_a1b2c3d4.jpg', category: 'Undercarriage' },
      { id: 'lg-sp-8', partNumber: 'CLG856-08-0001', name: 'Boom Cylinder', description: 'LiuGong boom cylinder for excavators. OEM: CLG856-08-0001. Category: Hydraulic Cylinders. Applicable Models: CLG914E/CLG909ECR/CLG915E. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Hydraulic Cylinders' },
      { id: 'lg-sp-9', partNumber: 'CLG856-09-0001', name: 'Arm Cylinder', description: 'LiuGong arm cylinder for excavators. OEM: CLG856-09-0001. Category: Hydraulic Cylinders. Applicable Models: CLG914E/CLG909ECR/CLG915E. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/fZEQTmhPChmb_d570e5f6.webp', category: 'Hydraulic Cylinders' },
      { id: 'lg-sp-10', partNumber: 'CLG414-10-0001', name: 'Blade', description: 'LiuGong grading blade for motor graders. OEM: CLG414-10-0001. Category: Grader Blades. Applicable Models: CLG414/CLG4215. High-quality genuine LiuGong spare part with warranty.', image: '/manus-storage/HUMEcesbyAE8_d9da0548.png', category: 'Grader Blades' },
    ]
  },
  {
    id: 'sany',
    name: 'SANY',
    fullName: 'Sany Heavy Industry Co., Ltd.',
    category: 'construction',
    country: 'China',
    description: 'Global leader in heavy equipment manufacturing, producing excavators, concrete pumps, cranes, and more.',
    logo: 'SANY',
    color: '#F57C00',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'sany-sp-60151839', partNumber: '60151839', name: 'Filter System', description: 'SANY Filter System (OEM: 60151839). Category: Fuel Filter Element. Applicable Models: SY55C SY60C SY75C SY135C SY215C SY365H. Engine Model: 4JJ1 4D34 V3800. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Fuel Filter Element' },
      { id: 'sany-sp-60206590', partNumber: '60206590', name: 'Filter System', description: 'SANY Filter System (OEM: 60206590). Category: Fuel Filter Element. Applicable Models: SY215C SY235C SY335C. Engine Model: 6HK1 DD6FRC. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Fuel Filter Element' },
      { id: 'sany-sp-60281527', partNumber: '60281527', name: 'Filter System', description: 'SANY Filter System (OEM: 60281527). Category: Oil Filter Element. Applicable Models: SY55C SY60C SY75C. Engine Model: 4JJ1 V3300. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Oil Filter Element' },
      { id: 'sany-sp-60281528', partNumber: '60281528', name: 'Filter System', description: 'SANY Filter System (OEM: 60281528). Category: Inner & Outer Air Filter. Applicable Models: SY135C SY215C SY335C. Engine Model: 6HK1 4JJ1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Inner & Outer Air Filter' },
      { id: 'sany-sp-b222100000238', partNumber: 'B222100000238', name: 'Filter System', description: 'SANY Filter System (OEM: B222100000238). Category: Pilot Filter Element. Applicable Models: SY16C SY18U SY35U SY55C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Pilot Filter Element' },
      { id: 'sany-sp-b222100000239', partNumber: 'B222100000239', name: 'Filter System', description: 'SANY Filter System (OEM: B222100000239). Category: Return Oil Filter. Applicable Models: SY215C SY245C SY365H SY485H. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Return Oil Filter' },
      { id: 'sany-sp-60008221', partNumber: '60008221', name: 'Filter System', description: 'SANY Filter System (OEM: 60008221). Category: Suction Oil Filter. Applicable Models: SY135C SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Suction Oil Filter' },
      { id: 'sany-sp-4940647', partNumber: '4940647', name: 'Filter System', description: 'SANY Filter System (OEM: 4940647). Category: Fuel Fine Filter. Applicable Models: SY215E SY245H SY305H. Engine Model: QSB6.7. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Fuel Fine Filter' },
      { id: 'sany-sp-5262314', partNumber: '5262314', name: 'Filter System', description: 'SANY Filter System (OEM: 5262314). Category: Engine Oil Filter. Applicable Models: SY215C SY335C SY365H. Engine Model: QSL9. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Engine Oil Filter' },
      { id: 'sany-sp-60101254', partNumber: '60101254', name: 'Filter System', description: 'SANY Filter System (OEM: 60101254). Category: Outer Air Filter. Applicable Models: SY75C SY95C SY135C. Engine Model: 4JJ1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Outer Air Filter' },
      { id: 'sany-sp-60101255', partNumber: '60101255', name: 'Filter System', description: 'SANY Filter System (OEM: 60101255). Category: Inner Air Filter. Applicable Models: SY75C SY95C SY135C. Engine Model: 4JJ1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Inner Air Filter' },
      { id: 'sany-sp-b222100000240', partNumber: 'B222100000240', name: 'Filter System', description: 'SANY Filter System (OEM: B222100000240). Category: Spin-on Hydraulic Filter. Applicable Models: SY215C SY235C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Spin-on Hydraulic Filter' },
      { id: 'sany-sp-60222159', partNumber: '60222159', name: 'Filter System', description: 'SANY Filter System (OEM: 60222159). Category: Transmission Filter. Applicable Models: SW956H SW960E SW966E. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Transmission Filter' },
      { id: 'sany-sp-60235811', partNumber: '60235811', name: 'Filter System', description: 'SANY Filter System (OEM: 60235811). Category: Fuel Water Separator. Applicable Models: SY215C SY335C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Fuel Water Separator' },
      { id: 'sany-sp-60251236', partNumber: '60251236', name: 'Filter System', description: 'SANY Filter System (OEM: 60251236). Category: Water Separator Filter. Applicable Models: SY155C SY215C. Engine Model: 4JJ1 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Water Separator Filter' },
      { id: 'sany-sp-60267891', partNumber: '60267891', name: 'Filter System', description: 'SANY Filter System (OEM: 60267891). Category: Hydraulic Cartridge Filter. Applicable Models: SY335C SY365H. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Hydraulic Cartridge Filter' },
      { id: 'sany-sp-b222100000241', partNumber: 'B222100000241', name: 'Filter System', description: 'SANY Filter System (OEM: B222100000241). Category: Magnetic Oil Filter. Applicable Models: SY215C SY245C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=Filter+System', category: 'Magnetic Oil Filter' },
      { id: 'sany-sp-13690773', partNumber: '13690773', name: 'Engine System', description: 'SANY Engine System (OEM: 13690773). Category: Cooling Water Pump. Applicable Models: SY215C SY235C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Cooling Water Pump' },
      { id: 'sany-sp-b220401000459', partNumber: 'B220401000459', name: 'Engine System', description: 'SANY Engine System (OEM: B220401000459). Category: Solenoid Valve. Applicable Models: SY155C SY135C. Engine Model: 4JJ1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Solenoid Valve' },
      { id: 'sany-sp-60021385', partNumber: '60021385', name: 'Engine System', description: 'SANY Engine System (OEM: 60021385). Category: Generator Fan Belt. Applicable Models: SY215C SY335C. Engine Model: 6HK1 QSB6.7. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Generator Fan Belt' },
      { id: 'sany-sp-60035782', partNumber: '60035782', name: 'Engine System', description: 'SANY Engine System (OEM: 60035782). Category: Thermostat Valve. Applicable Models: SY215C SY235C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Thermostat Valve' },
      { id: 'sany-sp-60087621', partNumber: '60087621', name: 'Engine System', description: 'SANY Engine System (OEM: 60087621). Category: Crankshaft Front Oil Seal. Applicable Models: SY215C SY335C. Engine Model: 6HK1 QSB6.7. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Crankshaft Front Oil Seal' },
      { id: 'sany-sp-60087622', partNumber: '60087622', name: 'Engine System', description: 'SANY Engine System (OEM: 60087622). Category: Crankshaft Rear Oil Seal. Applicable Models: SY215C SY365H. Engine Model: 6HK1 QSL9. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Crankshaft Rear Oil Seal' },
      { id: 'sany-sp-b210101000081', partNumber: 'B210101000081', name: 'Engine System', description: 'SANY Engine System (OEM: B210101000081). Category: Fuel Transfer Pump. Applicable Models: SY215C SY235C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Fuel Transfer Pump' },
      { id: 'sany-sp-60125489', partNumber: '60125489', name: 'Engine System', description: 'SANY Engine System (OEM: 60125489). Category: Injector Nozzle. Applicable Models: SY335C SY365H. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Injector Nozzle' },
      { id: 'sany-sp-60135791', partNumber: '60135791', name: 'Engine System', description: 'SANY Engine System (OEM: 60135791). Category: Engine Full Gasket Kit. Applicable Models: SY215C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Engine Full Gasket Kit' },
      { id: 'sany-sp-60145822', partNumber: '60145822', name: 'Engine System', description: 'SANY Engine System (OEM: 60145822). Category: Cylinder Head Gasket. Applicable Models: SY215C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Cylinder Head Gasket' },
      { id: 'sany-sp-b210201000121', partNumber: 'B210201000121', name: 'Engine System', description: 'SANY Engine System (OEM: B210201000121). Category: Turbocharger Assembly. Applicable Models: SY335C SY365H. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Turbocharger Assembly' },
      { id: 'sany-sp-b210301000132', partNumber: 'B210301000132', name: 'Engine System', description: 'SANY Engine System (OEM: B210301000132). Category: Engine Mount Rubber Pad. Applicable Models: SY215C SY135C. Engine Model: 4JJ1 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Engine Mount Rubber Pad' },
      { id: 'sany-sp-b210401000143', partNumber: 'B210401000143', name: 'Engine System', description: 'SANY Engine System (OEM: B210401000143). Category: Connecting Rod Bearing. Applicable Models: SY215C SY335C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Connecting Rod Bearing' },
      { id: 'sany-sp-b210501000154', partNumber: 'B210501000154', name: 'Engine System', description: 'SANY Engine System (OEM: B210501000154). Category: Piston Ring Set. Applicable Models: SY215C SY335C. Engine Model: 6HK1 QSB6.7. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Piston Ring Set' },
      { id: 'sany-sp-60051234', partNumber: '60051234', name: 'Engine System', description: 'SANY Engine System (OEM: 60051234). Category: Exhaust Manifold Gasket. Applicable Models: SY215C SY235C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Exhaust Manifold Gasket' },
      { id: 'sany-sp-60061245', partNumber: '60061245', name: 'Engine System', description: 'SANY Engine System (OEM: 60061245). Category: Alternator Assembly. Applicable Models: SY215C SY335C. Engine Model: 6HK1. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Alternator Assembly' },
      { id: 'sany-sp-60071256', partNumber: '60071256', name: 'Engine System', description: 'SANY Engine System (OEM: 60071256). Category: Starter Motor. Applicable Models: SY215C SY335C. Engine Model: 6HK1 QSB6.7. High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Starter Motor' },
      { id: 'sany-sp-b220601000165', partNumber: 'B220601000165', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B220601000165). Category: Main Pump Repair Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Main Pump Repair Kit' },
      { id: 'sany-sp-b220701000176', partNumber: 'B220701000176', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B220701000176). Category: Main Relief Valve. Applicable Models: SY215C SY235C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Main Relief Valve' },
      { id: 'sany-sp-b220801000187', partNumber: 'B220801000187', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B220801000187). Category: Control Valve Spool. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Control Valve Spool' },
      { id: 'sany-sp-b220901000198', partNumber: 'B220901000198', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B220901000198). Category: Check Valve. Applicable Models: SY215C SY245C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Check Valve' },
      { id: 'sany-sp-60081267', partNumber: '60081267', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: 60081267). Category: Hydraulic Quick Coupling. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Hydraulic Quick Coupling' },
      { id: 'sany-sp-60091278', partNumber: '60091278', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: 60091278). Category: High Pressure Hydraulic Hose. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'High Pressure Hydraulic Hose' },
      { id: 'sany-sp-60101289', partNumber: '60101289', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: 60101289). Category: Hydraulic Oil Cooler. Applicable Models: SY335C SY365H. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Hydraulic Oil Cooler' },
      { id: 'sany-sp-b221001000209', partNumber: 'B221001000209', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221001000209). Category: Oil Pump Assembly. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Oil Pump Assembly' },
      { id: 'sany-sp-b221101000210', partNumber: 'B221101000210', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221101000210). Category: Swing Motor Assembly. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Swing Motor Assembly' },
      { id: 'sany-sp-b221201000221', partNumber: 'B221201000221', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221201000221). Category: Travel Motor Assembly. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Travel Motor Assembly' },
      { id: 'sany-sp-b221301000232', partNumber: 'B221301000232', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221301000232). Category: Swing Motor Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Swing Motor Seal Kit' },
      { id: 'sany-sp-b221401000243', partNumber: 'B221401000243', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221401000243). Category: Travel Motor Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Travel Motor Seal Kit' },
      { id: 'sany-sp-b221501000254', partNumber: 'B221501000254', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221501000254). Category: Boom Cylinder Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Boom Cylinder Seal Kit' },
      { id: 'sany-sp-b221601000265', partNumber: 'B221601000265', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221601000265). Category: Arm Cylinder Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Arm Cylinder Seal Kit' },
      { id: 'sany-sp-b221701000276', partNumber: 'B221701000276', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221701000276). Category: Bucket Cylinder Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Bucket Cylinder Seal Kit' },
      { id: 'sany-sp-b221801000287', partNumber: 'B221801000287', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221801000287). Category: Lift Cylinder Seal Kit. Applicable Models: SY50C SY65C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Lift Cylinder Seal Kit' },
      { id: 'sany-sp-b221901000298', partNumber: 'B221901000298', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B221901000298). Category: Steering Cylinder Seal Kit. Applicable Models: SY50C SY65C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Steering Cylinder Seal Kit' },
      { id: 'sany-sp-b222001000309', partNumber: 'B222001000309', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222001000309). Category: Outrigger Cylinder Seal Kit. Applicable Models: STC250T5 STC1200T7. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Outrigger Cylinder Seal Kit' },
      { id: 'sany-sp-b222101000310', partNumber: 'B222101000310', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222101000310). Category: Track Adjuster Cylinder Seal Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Adjuster Cylinder Seal Kit' },
      { id: 'sany-sp-b222201000321', partNumber: 'B222201000321', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222201000321). Category: Steering Hydraulic Hose. Applicable Models: SY50C SY65C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Steering Hydraulic Hose' },
      { id: 'sany-sp-b222301000332', partNumber: 'B222301000332', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222301000332). Category: O-Ring Assortment Repair Kit. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'O-Ring Assortment Repair Kit' },
      { id: 'sany-sp-b222401000343', partNumber: 'B222401000343', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222401000343). Category: U-Cup Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'U-Cup Seal' },
      { id: 'sany-sp-b222501000354', partNumber: 'B222501000354', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222501000354). Category: Wiper Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Wiper Seal' },
      { id: 'sany-sp-b222601000365', partNumber: 'B222601000365', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222601000365). Category: Mechanical Face Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Mechanical Face Seal' },
      { id: 'sany-sp-b222701000376', partNumber: 'B222701000376', name: 'Hydraulic System', description: 'SANY Hydraulic System (OEM: B222701000376). Category: Pressure Sensor. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Pressure Sensor' },
      { id: 'sany-sp-60111290', partNumber: '60111290', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60111290). Category: Track Chain Assembly. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Chain Assembly' },
      { id: 'sany-sp-60121301', partNumber: '60121301', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60121301). Category: Track Pin And Bushing. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Pin And Bushing' },
      { id: 'sany-sp-60131312', partNumber: '60131312', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60131312). Category: Track Bolt And Nut. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Bolt And Nut' },
      { id: 'sany-sp-60141323', partNumber: '60141323', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60141323). Category: Track Shoe Plate. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Shoe Plate' },
      { id: 'sany-sp-60151334', partNumber: '60151334', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60151334). Category: Lower Track Roller. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Lower Track Roller' },
      { id: 'sany-sp-60161345', partNumber: '60161345', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60161345). Category: Upper Carrier Roller. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Upper Carrier Roller' },
      { id: 'sany-sp-60171356', partNumber: '60171356', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60171356). Category: Front Idler. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Front Idler' },
      { id: 'sany-sp-60181367', partNumber: '60181367', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60181367). Category: Drive Sprocket. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Drive Sprocket' },
      { id: 'sany-sp-60191378', partNumber: '60191378', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60191378). Category: Roller Bearing. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Roller Bearing' },
      { id: 'sany-sp-60201389', partNumber: '60201389', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60201389). Category: Roller Outer Oil Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Roller Outer Oil Seal' },
      { id: 'sany-sp-60211390', partNumber: '60211390', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60211390). Category: Idler Oil Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Idler Oil Seal' },
      { id: 'sany-sp-60221401', partNumber: '60221401', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60221401). Category: Hub Oil Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Hub Oil Seal' },
      { id: 'sany-sp-60231412', partNumber: '60231412', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60231412). Category: Track Adjuster Cylinder. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Track Adjuster Cylinder' },
      { id: 'sany-sp-60241423', partNumber: '60241423', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60241423). Category: Dust Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Dust Seal' },
      { id: 'sany-sp-60251434', partNumber: '60251434', name: 'Undercarriage', description: 'SANY Undercarriage (OEM: 60251434). Category: SPGW Oil Seal. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'SPGW Oil Seal' },
      { id: 'sany-sp-60261445', partNumber: '60261445', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60261445). Category: Standard Bucket Tooth. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Standard Bucket Tooth' },
      { id: 'sany-sp-60271456', partNumber: '60271456', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60271456). Category: Bucket Side Cutter. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Bucket Side Cutter' },
      { id: 'sany-sp-60281467', partNumber: '60281467', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60281467). Category: Tooth Adapter. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Tooth Adapter' },
      { id: 'sany-sp-60291478', partNumber: '60291478', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60291478). Category: Loader Bucket Tooth. Applicable Models: SY50C SY65C SY90C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Loader Bucket Tooth' },
      { id: 'sany-sp-60301489', partNumber: '60301489', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60301489). Category: Ripper Tooth. Applicable Models: DL560. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Ripper Tooth' },
      { id: 'sany-sp-60311490', partNumber: '60311490', name: 'Bucket & Tooth', description: 'SANY Bucket & Tooth (OEM: 60311490). Category: Wear Plate. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Wear Plate' },
      { id: 'sany-sp-60321501', partNumber: '60321501', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60321501). Category: Arm Pin Shaft. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Arm Pin Shaft' },
      { id: 'sany-sp-60331512', partNumber: '60331512', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60331512). Category: Bucket Pin Shaft. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Bucket Pin Shaft' },
      { id: 'sany-sp-60341523', partNumber: '60341523', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60341523). Category: Boom Bushing. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Boom Bushing' },
      { id: 'sany-sp-60351534', partNumber: '60351534', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60351534). Category: Pin Snap Ring. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Pin Snap Ring' },
      { id: 'sany-sp-60361545', partNumber: '60361545', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60361545). Category: Spring Seat. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Spring Seat' },
      { id: 'sany-sp-60371556', partNumber: '60371556', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60371556). Category: Recoil Spring. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Recoil Spring' },
      { id: 'sany-sp-60381567', partNumber: '60381567', name: 'Structural Parts', description: 'SANY Structural Parts (OEM: 60381567). Category: Vibration Rubber Damper. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Vibration Rubber Damper' },
      { id: 'sany-sp-60391578', partNumber: '60391578', name: 'Transmission System', description: 'SANY Transmission System (OEM: 60391578). Category: Drive Shaft Universal Joint. Applicable Models: SY50C SY65C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Drive Shaft Universal Joint' },
      { id: 'sany-sp-60401589', partNumber: '60401589', name: 'Transmission System', description: 'SANY Transmission System (OEM: 60401589). Category: Transmission Filter. Applicable Models: SY50C SY65C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Transmission Filter' },
      { id: 'sany-sp-60411590', partNumber: '60411590', name: 'Brake System', description: 'SANY Brake System (OEM: 60411590). Category: Brake Pad. Applicable Models: SY215C SY335C. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Brake Pad' },
      { id: 'sany-sp-60421601', partNumber: '60421601', name: 'Brake System', description: 'SANY Brake System (OEM: 60421601). Category: Compactor Brake Seal Kit. Applicable Models: SSR160AC-8 SSR200C-8H. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Compactor Brake Seal Kit' },
      { id: 'sany-sp-60431612', partNumber: '60431612', name: 'Brake System', description: 'SANY Brake System (OEM: 60431612). Category: Crane Brake Pad. Applicable Models: STC250T5 STC1200T7. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Crane Brake Pad' },
      { id: 'sany-sp-60441623', partNumber: '60441623', name: 'Compactor System', description: 'SANY Compactor System (OEM: 60441623). Category: Compactor Drum Rubber Ring. Applicable Models: SSR160AC-8 SSR200C-8H. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Compactor Drum Rubber Ring' },
      { id: 'sany-sp-60451634', partNumber: '60451634', name: 'Crane System', description: 'SANY Crane System (OEM: 60451634). Category: Crane Wire Rope. Applicable Models: STC250T5 STC1200T7. Engine Model: . High-quality genuine SANY spare part with warranty.', image: 'https://via.placeholder.com/400x300?text=SANY+Spare+Part', category: 'Crane Wire Rope' },
    ]
  },
  {
    id: 'komatsu',
    name: 'Komatsu',
    fullName: 'Komatsu Ltd.',
    category: 'construction',
    country: 'Japan',
    description: 'Japanese multinational corporation specializing in construction, mining, and military equipment.',
    logo: 'KOMATSU',
    color: '#1565C0',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'km-sp-1', partNumber: 'PC200-01-0001', name: 'Engine Oil Filter', description: 'Engine oil filter for Komatsu excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-2', partNumber: 'PC200-02-0001', name: 'Fuel Filter', description: 'Fuel filter for Komatsu excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-3', partNumber: 'PC200-03-0001', name: 'Air Filter', description: 'Air cleaner element for Komatsu excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-4', partNumber: 'WA320-04-0001', name: 'Hydraulic Filter', description: 'Hydraulic filter for Komatsu wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'km-sp-5', partNumber: 'PC200-05-0001', name: 'Track Link', description: 'Track link assembly for Komatsu excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'km-sp-6', partNumber: 'PC200-06-0001', name: 'Bucket Tooth', description: 'Bucket tooth for Komatsu excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
      { id: 'km-sp-7', partNumber: 'D65PX-07-0001', name: 'Cutting Edge', description: 'Blade cutting edge for Komatsu bulldozers', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
    ]
  },
  // ========== TRUCKS & ENGINES ==========
  {
    id: 'isuzu',
    name: 'Isuzu',
    fullName: 'Isuzu Motors Limited',
    category: 'truck',
    country: 'Japan',
    description: 'Japanese commercial vehicle manufacturer known for reliable trucks and diesel engines.',
    logo: 'ISUZU',
    color: '#C41E3A',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'iz-sp-1', partNumber: '8-97602-428-0', name: 'Engine Oil Filter', description: 'Engine oil filter for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'iz-sp-2', partNumber: '8-97602-429-0', name: 'Fuel Filter', description: 'Fuel filter for Isuzu diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'iz-sp-3', partNumber: '8-97602-430-0', name: 'Air Filter', description: 'Air cleaner element for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'iz-sp-4', partNumber: '8-97602-431-0', name: 'Cabin Air Filter', description: 'Cabin air filter for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'iz-sp-5', partNumber: '8-97602-432-0', name: 'Transmission Filter', description: 'Transmission filter for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'iz-sp-6', partNumber: '8-97602-433-0', name: 'Brake Pad Set', description: 'Brake pad set for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'iz-sp-7', partNumber: '8-97602-434-0', name: 'Alternator', description: 'Alternator for Isuzu trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Electrical' },
    ]
  },
  {
    id: 'shacman',
    name: 'Shacman',
    fullName: 'Shaanxi Automobile Group Co., Ltd.',
    category: 'truck',
    country: 'China',
    description: 'Leading Chinese heavy-duty truck manufacturer producing commercial vehicles for construction and logistics.',
    logo: 'SHACMAN',
    color: '#E53935',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'sm-sp-1', partNumber: 'DZ96189584001', name: 'Engine Oil Filter', description: 'Engine oil filter for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sm-sp-2', partNumber: 'DZ96189584002', name: 'Fuel Filter', description: 'Fuel filter for Shacman diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sm-sp-3', partNumber: 'DZ96189584003', name: 'Air Filter', description: 'Air cleaner element for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sm-sp-4', partNumber: 'DZ96189584004', name: 'Cabin Air Filter', description: 'Cabin air filter for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sm-sp-5', partNumber: 'DZ96189584005', name: 'Transmission Filter', description: 'Transmission filter for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sm-sp-6', partNumber: 'DZ96189584006', name: 'Brake Pad Set', description: 'Brake pad set for Shacman trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
    ]
  },
  {
    id: 'sinotruk',
    name: 'Sinotruk',
    fullName: 'China National Heavy Duty Truck Group Co., Ltd.',
    category: 'truck',
    country: 'China',
    description: 'Leading Chinese heavy-duty truck manufacturer producing HOWO and other commercial vehicle brands.',
    logo: 'SINOTRUK',
    color: '#D32F2F',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'st-sp-1', partNumber: 'VG1560118229', name: 'Engine Oil Filter', description: 'Engine oil filter for Sinotruk HOWO trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-2', partNumber: 'VG1560118230', name: 'Fuel Filter', description: 'Fuel filter for Sinotruk diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-3', partNumber: 'VG1560118231', name: 'Air Filter', description: 'Air cleaner element for Sinotruk trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-4', partNumber: 'VG1560118232', name: 'Cabin Air Filter', description: 'Cabin air filter for Sinotruk trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-5', partNumber: 'VG1560118233', name: 'Transmission Filter', description: 'Transmission filter for Sinotruk trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'st-sp-6', partNumber: 'VG1560118234', name: 'Brake Pad Set', description: 'Brake pad set for Sinotruk trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'st-sp-7', partNumber: 'VG1560118235', name: 'Alternator', description: 'Alternator for Sinotruk trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Electrical' },
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    fullName: 'Toyota Motor Corporation',
    category: 'truck',
    country: 'Japan',
    description: 'Japanese automotive manufacturer known for reliable trucks and commercial vehicles.',
    logo: 'TOYOTA',
    color: '#EB0A1E',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'ty-sp-1', partNumber: '15600-29015', name: 'Engine Oil Filter', description: 'Engine oil filter for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'ty-sp-2', partNumber: '23390-64480', name: 'Fuel Filter', description: 'Fuel filter for Toyota diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'ty-sp-3', partNumber: '17801-54090', name: 'Air Filter', description: 'Air cleaner element for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'ty-sp-4', partNumber: '87139-02090', name: 'Cabin Air Filter', description: 'Cabin air filter for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'ty-sp-5', partNumber: '35330-60050', name: 'Transmission Filter', description: 'Transmission filter for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'ty-sp-6', partNumber: '04465-35090', name: 'Brake Pad Set', description: 'Brake pad set for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Brake System' },
      { id: 'ty-sp-7', partNumber: '27060-28050', name: 'Alternator', description: 'Alternator for Toyota trucks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Electrical' },
    ]
  },
  {
    id: 'cummins',
    name: 'Cummins',
    fullName: 'Cummins Inc.',
    category: 'engine',
    country: 'USA',
    description: 'Leading manufacturer of diesel and natural gas engines for construction, mining, and power generation.',
    logo: 'CUMMINS',
    color: '#C41E3A',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'cm-sp-1', partNumber: '3883753', name: 'Engine Oil Filter', description: 'Engine oil filter for Cummins diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cm-sp-2', partNumber: '3315844', name: 'Fuel Filter', description: 'Fuel filter for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cm-sp-3', partNumber: '3937903', name: 'Air Filter', description: 'Air cleaner element for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'cm-sp-4', partNumber: '4326799', name: 'Coolant Filter', description: 'Coolant filter for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cooling System' },
      { id: 'cm-sp-5', partNumber: '3936316', name: 'Fuel Injection Pump', description: 'Fuel injection pump for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'cm-sp-6', partNumber: '3931880', name: 'Turbocharger', description: 'Turbocharger for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine Components' },
      { id: 'cm-sp-7', partNumber: '3928135', name: 'Water Pump', description: 'Water pump for Cummins engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cooling System' },
    ]
  },
  {
    id: 'weichai',
    name: 'Weichai',
    fullName: 'Weichai Power Co., Ltd.',
    category: 'engine',
    country: 'China',
    description: 'Leading Chinese diesel engine manufacturer for construction, mining, and power generation.',
    logo: 'WEICHAI',
    color: '#0277BD',
    machines: [
      {
        id: 'lg-856he',
        model: '856HE',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³',
        image: '/manus-storage/CLG777A_360fbab5.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.'
      }
    ],
    spareParts: [
      { id: 'wc-sp-1', partNumber: '612600070341', name: 'Engine Oil Filter', description: 'Engine oil filter for Weichai diesel engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'wc-sp-2', partNumber: '612600081061', name: 'Fuel Filter', description: 'Fuel filter for Weichai engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'wc-sp-3', partNumber: '612600110336', name: 'Air Filter', description: 'Air cleaner element for Weichai engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'wc-sp-4', partNumber: '612600140001', name: 'Coolant Filter', description: 'Coolant filter for Weichai engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cooling System' },
      { id: 'wc-sp-5', partNumber: '612600070343', name: 'Fuel Injection Pump', description: 'Fuel injection pump for Weichai engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Fuel System' },
      { id: 'wc-sp-6', partNumber: '612600118902', name: 'Turbocharger', description: 'Turbocharger for Weichai engines', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Engine Components' },
    ]
  },
];
