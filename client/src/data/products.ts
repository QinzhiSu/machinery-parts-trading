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
      // ===== EXCAVATORS (Excavators) =====
      {
        id: 'cat-320d',
        model: 'CAT 320D',
        name: 'Hydraulic Excavator',
        specs: '20.5 ton | 121 kW | 1.19 m³ bucket | Operating Weight: 20,500 kg',
        image: '/manus-storage/320D_8a1e02e6.jpeg',
        description: 'CAT 320D Hydraulic Excavator. Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Cooling System: Radiator with fan. Transmission: Hydrostatic. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for general excavation, loading, and material handling.'
      },
      {
        id: 'cat-320d2',
        model: 'CAT 320D2',
        name: 'Hydraulic Excavator',
        specs: '20.8 ton | 121 kW | 1.19 m³ bucket | Operating Weight: 20,800 kg',
        image: '/manus-storage/320D2_0478c97f.jpeg',
        description: 'CAT 320D2 Hydraulic Excavator (Generation 2). Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Enhanced Features: Improved fuel efficiency, better hydraulic controls, reduced emissions. Travel Speed: 4.5 km/h. Swing Speed: 12 rpm. Perfect for construction, landscaping, and utility work.'
      },
      {
        id: 'cat-320gc',
        model: 'CAT 320 GC',
        name: 'Hydraulic Excavator (Gas Powered)',
        specs: '20.5 ton | 121 kW | 1.19 m³ bucket | Operating Weight: 20,500 kg',
        image: '/manus-storage/320GC_cc5abc63.jpeg',
        description: 'CAT 320 GC Hydraulic Excavator (Natural Gas). Engine: Caterpillar C6.4 Natural Gas (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Fuel Tank: 180 L (Gas). Hydraulic System: 280 bar. Eco-friendly alternative fuel option. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for environmentally sensitive projects.'
      },
      {
        id: 'cat-330c',
        model: 'CAT 330C',
        name: 'Hydraulic Excavator',
        specs: '30 ton | 168 kW | 1.69 m³ bucket | Operating Weight: 30,000 kg',
        image: '/manus-storage/330C_b6088d0c.jpeg',
        description: 'CAT 330C Hydraulic Excavator. Engine: Caterpillar C7.1 Diesel (168 kW/225 HP). Bucket Capacity: 1.69 m³. Max Digging Depth: 7.2 m. Boom Length: 7.1 m. Stick Length: 2.7 m. Undercarriage: Rubber Track (700mm). Hydraulic System: 280 bar. Fuel Tank: 250 L. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for medium to large-scale excavation, mining, and earthmoving projects.'
      },
      {
        id: 'cat-336d',
        model: 'CAT 336D',
        name: 'Hydraulic Excavator',
        specs: '36.5 ton | 206 kW | 2.1 m³ bucket | Operating Weight: 36,500 kg',
        image: '/manus-storage/336D_dc59bfa4.jpg',
        description: 'CAT 336D Hydraulic Excavator. Engine: Caterpillar C9 Diesel (206 kW/276 HP). Bucket Capacity: 2.1 m³. Max Digging Depth: 7.5 m. Boom Length: 7.4 m. Stick Length: 2.8 m. Undercarriage: Rubber Track (800mm). Hydraulic System: 280 bar. Fuel Tank: 300 L. Swing Speed: 11 rpm. Travel Speed: 4.5 km/h. Perfect for large-scale mining, quarrying, and heavy construction.'
      },
      // ===== DOZERS (Bulldozers) =====
      {
        id: 'cat-d6r',
        model: 'CAT D6R',
        name: 'Bulldozer',
        specs: '18 ton | 138 kW | SU blade 4.6 m³ | Operating Weight: 18,000 kg',
        image: '/manus-storage/D6R_9ee7c412.jpeg',
        description: 'CAT D6R Bulldozer. Engine: Caterpillar C6.4 Diesel (138 kW/185 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Height: 1.27 m. Blade Capacity: 4.6 m³. Undercarriage: Steel Track (457mm). Transmission: Hydrostatic. Drawbar Pull: 185 kN. Travel Speed: 11 km/h. Fuel Tank: 180 L. Ideal for general dozing, land clearing, and construction site preparation.'
      },
      {
        id: 'cat-d6t',
        model: 'CAT D6T',
        name: 'Bulldozer',
        specs: '19 ton | 149 kW | SU blade 4.6 m³ | Operating Weight: 19,000 kg',
        image: '/manus-storage/D6T_0b530551.jpeg',
        description: 'CAT D6T Bulldozer. Engine: Caterpillar C6.4 Diesel (149 kW/200 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Height: 1.27 m. Blade Capacity: 4.6 m³. Undercarriage: Steel Track (457mm). Transmission: Hydrostatic. Drawbar Pull: 200 kN. Travel Speed: 11 km/h. Fuel Tank: 200 L. Enhanced power and efficiency for heavy-duty dozing operations.'
      },
      {
        id: 'cat-d7r',
        model: 'CAT D7R',
        name: 'Bulldozer',
        specs: '28 ton | 186 kW | SU blade 7.4 m³ | Operating Weight: 28,000 kg',
        image: '/manus-storage/D7R_1f06175f.jpeg',
        description: 'CAT D7R Bulldozer. Engine: Caterpillar C9 Diesel (186 kW/250 HP). Blade Type: Standard Straight (SU). Blade Width: 4.27 m. Blade Height: 1.73 m. Blade Capacity: 7.4 m³. Undercarriage: Steel Track (610mm). Transmission: Hydrostatic. Drawbar Pull: 280 kN. Travel Speed: 10.5 km/h. Fuel Tank: 300 L. Excellent for large-scale earthmoving and mining applications.'
      },
      {
        id: 'cat-d8r',
        model: 'CAT D8R',
        name: 'Bulldozer',
        specs: '38 ton | 231 kW | SU blade 10.5 m³ | Operating Weight: 38,000 kg',
        image: '/manus-storage/D8R_33e472d5.jpeg',
        description: 'CAT D8R Bulldozer. Engine: Caterpillar C15 Diesel (231 kW/310 HP). Blade Type: Standard Straight (SU). Blade Width: 4.88 m. Blade Height: 2.15 m. Blade Capacity: 10.5 m³. Undercarriage: Steel Track (762mm). Transmission: Hydrostatic. Drawbar Pull: 380 kN. Travel Speed: 10.5 km/h. Fuel Tank: 450 L. Perfect for major mining, quarrying, and heavy construction projects.'
      },
      // ===== WHEEL LOADERS =====
      {
        id: 'cat-950h',
        model: 'CAT 950H',
        name: 'Wheel Loader',
        specs: '20 ton | 138 kW | 2.2 m³ bucket | Operating Weight: 20,000 kg',
        image: '/manus-storage/950H_b17d33be.jpeg',
        description: 'CAT 950H Wheel Loader. Engine: Caterpillar C6.4 Diesel (138 kW/185 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Transmission: Torque Converter. Travel Speed: 40 km/h. Fuel Tank: 200 L. Ideal for general loading, material handling, and construction site work.'
      },
      {
        id: 'cat-950l',
        model: 'CAT 950L',
        name: 'Wheel Loader',
        specs: '21 ton | 149 kW | 2.2 m³ bucket | Operating Weight: 21,000 kg',
        image: '/manus-storage/950L_15077f35.jpeg',
        description: 'CAT 950L Wheel Loader. Engine: Caterpillar C6.4 Diesel (149 kW/200 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8.5 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Transmission: Torque Converter. Travel Speed: 40 km/h. Fuel Tank: 220 L. Enhanced power and performance for demanding loading operations.'
      },
      {
        id: 'cat-966h',
        model: 'CAT 966H',
        name: 'Wheel Loader',
        specs: '24 ton | 186 kW | 3.1 m³ bucket | Operating Weight: 24,000 kg',
        image: '/manus-storage/966H_46daa795.jpeg',
        description: 'CAT 966H Wheel Loader. Engine: Caterpillar C9 Diesel (186 kW/250 HP). Bucket Capacity: 3.1 m³. Max Lift Height: 3.4 m. Lift Capacity at Full Height: 11 ton. Undercarriage: 4-Wheel Drive. Tire Size: 23.5R25. Transmission: Torque Converter. Travel Speed: 42 km/h. Fuel Tank: 280 L. Perfect for medium to large-scale loading and material handling.'
      },
      {
        id: 'cat-966l',
        model: 'CAT 966L',
        name: 'Wheel Loader',
        specs: '25 ton | 206 kW | 3.1 m³ bucket | Operating Weight: 25,000 kg',
        image: '/manus-storage/966L_f415e2f8.jpeg',
        description: 'CAT 966L Wheel Loader. Engine: Caterpillar C9 Diesel (206 kW/276 HP). Bucket Capacity: 3.1 m³. Max Lift Height: 3.4 m. Lift Capacity at Full Height: 11.5 ton. Undercarriage: 4-Wheel Drive. Tire Size: 23.5R25. Transmission: Torque Converter. Travel Speed: 42 km/h. Fuel Tank: 300 L. Excellent for heavy-duty loading, quarrying, and mining applications.'
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
        id: 'shantui-sd16',
        model: 'Shantui SD16',
        name: 'Bulldozer SD16',
        specs: '16 ton | 162 kW | 3.5 m³ blade | Operating Weight: 16,000 kg',
        image: '/manus-storage/SD16_a14fb776.jpeg',
        description: 'Shantui SD16 Medium Bulldozer. Engine: Weichai WD10G220 (162 kW/220 HP). Blade Type: Standard Straight (SU). Blade Capacity: 3.5 m³. Undercarriage: Steel Track (457mm). Transmission: Hydrostatic. Drawbar Pull: 150 kN. Travel Speed: 10 km/h. Fuel Tank: 180 L. Ideal for general dozing, land clearing, and construction site preparation.'
      },
      {
        id: 'shantui-sd22',
        model: 'Shantui SD22',
        name: 'Bulldozer SD22',
        specs: '22 ton | 200 kW | 5.0 m³ blade | Operating Weight: 22,000 kg',
        image: '/manus-storage/SD22_518f26bb.jpeg',
        description: 'Shantui SD22 Large Bulldozer. Engine: Weichai WD10G270 (200 kW/270 HP). Blade Type: Standard Straight (SU). Blade Capacity: 5.0 m³. Undercarriage: Steel Track (610mm). Transmission: Hydrostatic. Drawbar Pull: 200 kN. Travel Speed: 10 km/h. Fuel Tank: 250 L. Excellent for large-scale earthmoving and mining applications.'
      },
      {
        id: 'shantui-sd32',
        model: 'Shantui SD32',
        name: 'Bulldozer SD32',
        specs: '32 ton | 250 kW | 7.2 m³ blade | Operating Weight: 32,000 kg',
        image: '/manus-storage/SD32_b7a78a7e.jpeg',
        description: 'Shantui SD32 Extra-Large Bulldozer. Engine: Weichai WD10G336 (250 kW/336 HP). Blade Type: Standard Straight (SU). Blade Capacity: 7.2 m³. Undercarriage: Steel Track (762mm). Transmission: Hydrostatic. Drawbar Pull: 280 kN. Travel Speed: 10 km/h. Fuel Tank: 400 L. Perfect for major mining, quarrying, and heavy construction projects.'
      },
      {
        id: 'shantui-se75',
        model: 'Shantui SE75',
        name: 'Excavator SE75',
        specs: '7.5 ton | 66 kW | 0.3 m³ bucket | Operating Weight: 7,500 kg',
        image: '/manus-storage/SE75_2f646ded.jpeg',
        description: 'Shantui SE75 Small Hydraulic Excavator. Engine: Yuchai YC4D90 (66 kW/90 HP). Bucket Capacity: 0.3 m³. Max Digging Depth: 4.5 m. Boom Length: 5.2 m. Undercarriage: Rubber Track (400mm). Hydraulic System: 280 bar. Fuel Tank: 120 L. Ideal for small-scale excavation and utility work.'
      },
      {
        id: 'shantui-se130',
        model: 'Shantui SE130',
        name: 'Excavator SE130',
        specs: '13 ton | 79 kW | 0.55 m³ bucket | Operating Weight: 13,000 kg',
        image: '/manus-storage/SE130_29bff90b.jpeg',
        description: 'Shantui SE130 Medium Hydraulic Excavator. Engine: Yuchai YC6108 (79 kW/108 HP). Bucket Capacity: 0.55 m³. Max Digging Depth: 5.5 m. Boom Length: 6.2 m. Undercarriage: Rubber Track (500mm). Hydraulic System: 280 bar. Fuel Tank: 150 L. Perfect for general excavation and loading operations.'
      },
      {
        id: 'shantui-se215',
        model: 'Shantui SE215',
        name: 'Excavator SE215',
        specs: '21.5 ton | 176 kW | 1.0 m³ bucket | Operating Weight: 21,500 kg',
        image: '/manus-storage/SE215_84f2c1ce.jpeg',
        description: 'Shantui SE215 Large Hydraulic Excavator. Engine: Yuchai YC6K240 (176 kW/240 HP). Bucket Capacity: 1.0 m³. Max Digging Depth: 6.8 m. Boom Length: 7.1 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 250 L. Excellent for medium to large-scale mining and construction.'
      },
      {
        id: 'shantui-se220',
        model: 'Shantui SE220',
        name: 'Excavator SE220',
        specs: '22 ton | 176 kW | 1.0 m³ bucket | Operating Weight: 22,000 kg',
        image: '/manus-storage/SE220_ddc2968c.jpeg',
        description: 'Shantui SE220 Large Hydraulic Excavator. Engine: Yuchai YC6K240 (176 kW/240 HP). Bucket Capacity: 1.0 m³. Max Digging Depth: 6.8 m. Boom Length: 7.1 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 250 L. Ideal for heavy-duty excavation and quarrying operations.'
      },
      {
        id: 'shantui-l36',
        model: 'Shantui L36-C3',
        name: 'Wheel Loader L36-C3',
        specs: '13.6 ton | 147 kW | 2.2 m³ bucket | Operating Weight: 13,600 kg',
        image: '/manus-storage/L36-C3_d5769b3b.jpeg',
        description: 'Shantui L36-C3 Medium Wheel Loader. Engine: Weichai WD10G200 (147 kW/200 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Transmission: Torque Converter. Travel Speed: 40 km/h. Fuel Tank: 200 L. Ideal for general loading and material handling.'
      },
      {
        id: 'shantui-l55',
        model: 'Shantui L55-C5',
        name: 'Wheel Loader L55-C5',
        specs: '21 ton | 200 kW | 3.5 m³ bucket | Operating Weight: 21,000 kg',
        image: '/manus-storage/L55-C5_f68afe9e.jpeg',
        description: 'Shantui L55-C5 Large Wheel Loader. Engine: Weichai WD10G270 (200 kW/270 HP). Bucket Capacity: 3.5 m³. Max Lift Height: 3.4 m. Lift Capacity at Full Height: 12 ton. Undercarriage: 4-Wheel Drive. Tire Size: 23.5R25. Transmission: Torque Converter. Travel Speed: 42 km/h. Fuel Tank: 280 L. Perfect for heavy-duty loading and quarrying.'
      },
      {
        id: 'shantui-sg19',
        model: 'Shantui SG19-C6',
        name: 'Motor Grader SG19-C6',
        specs: '13.5 ton | 147 kW | 3.7 m blade | Operating Weight: 13,500 kg',
        image: '/manus-storage/SG19-C6_c2efe98e.jpeg',
        description: 'Shantui SG19-C6 Medium Motor Grader. Engine: Weichai WD10G200 (147 kW/200 HP). Blade Width: 3.7 m. Blade Height: 1.2 m. Undercarriage: 6-Wheel Drive. Transmission: Hydrostatic. Grading Width: 3.7 m. Travel Speed: 40 km/h. Fuel Tank: 200 L. Ideal for road construction and maintenance.'
      },
      {
        id: 'shantui-sg21',
        model: 'Shantui SG21-B6',
        name: 'Motor Grader SG21-B6',
        specs: '16.5 ton | 200 kW | 3.7 m blade | Operating Weight: 16,500 kg',
        image: '/manus-storage/SG21-B6_42397f73.jpeg',
        description: 'Shantui SG21-B6 Large Motor Grader. Engine: Weichai WD10G270 (200 kW/270 HP). Blade Width: 3.7 m. Blade Height: 1.2 m. Undercarriage: 6-Wheel Drive. Transmission: Hydrostatic. Grading Width: 3.7 m. Travel Speed: 42 km/h. Fuel Tank: 250 L. Perfect for large-scale road grading and construction.'
      },
      {
        id: 'shantui-dh10',
        model: 'Shantui DH10-C2',
        name: 'Diesel Engine DH10-C2',
        specs: '2.5L | 74 kW | 100 HP',
        image: '/manus-storage/DH10-C2_a4702ae0.jpeg',
        description: 'Shantui DH10-C2 Medium Diesel Engine. Displacement: 2.5L. Power Output: 74 kW (100 HP). Type: 4-Cylinder Turbocharged Diesel. Fuel Consumption: 210 g/kWh. Torque: 320 Nm @ 1400 rpm. Cooling System: Water-cooled with radiator. Ideal for small to medium construction equipment.'
      },
      {
        id: 'shantui-dh13',
        model: 'Shantui DH13-C3',
        name: 'Diesel Engine DH13-C3',
        specs: '3.0L | 96 kW | 130 HP',
        image: '/manus-storage/DH13-C3_344d7d17.jpeg',
        description: 'Shantui DH13-C3 Large Diesel Engine. Displacement: 3.0L. Power Output: 96 kW (130 HP). Type: 4-Cylinder Turbocharged Diesel. Fuel Consumption: 215 g/kWh. Torque: 400 Nm @ 1400 rpm. Cooling System: Water-cooled with radiator. Perfect for medium construction equipment.'
      },
      {
        id: 'shantui-dh46',
        model: 'Shantui DH46-C3',
        name: 'Diesel Engine DH46-C3',
        specs: '4.6L | 132 kW | 180 HP',
        image: '/manus-storage/DH46-C3_eda6e955.jpeg',
        description: 'Shantui DH46-C3 Extra-Large Diesel Engine. Displacement: 4.6L. Power Output: 132 kW (180 HP). Type: 6-Cylinder Turbocharged Diesel. Fuel Consumption: 220 g/kWh. Torque: 550 Nm @ 1400 rpm. Cooling System: Water-cooled with radiator. Ideal for large construction equipment and heavy machinery.'
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
        id: 'xcmg-xe155ucr',
        model: 'XE155UCR',
        name: 'Compact Hydraulic Excavator',
        specs: '15.5 ton | 80 kW | 0.65 m³ bucket',
        image: '/manus-storage/XE155UCR_527b8a21.jpg',
        description: 'XCMG XE155UCR compact hydraulic excavator designed for urban construction and tight spaces. Features advanced hydraulic system, fuel-efficient Cummins engine, and excellent maneuverability. Engine: Cummins 4BTA3.9-C130 (80 kW / 109 HP). Max digging depth: 6.2 m. Max reach height: 9.8 m.'
      },
      {
        id: 'xcmg-xe215da',
        model: 'XE215DA',
        name: 'Mid-Size Hydraulic Excavator',
        specs: '21.5 ton | 122 kW | 1.0 m³ bucket',
        image: '/manus-storage/XE215DA_297f0d64.jpeg',
        description: 'XCMG XE215DA mid-size hydraulic excavator for general construction and earthmoving. Features fuel-efficient Cummins engine, smooth hydraulic operation, and durable undercarriage. Engine: Cummins 6BTA5.9-C180 (122 kW / 165 HP). Max digging depth: 6.8 m. Max reach height: 10.4 m.'
      },
      {
        id: 'xcmg-xe215ev',
        model: 'XE215EV',
        name: 'Electric Hybrid Excavator',
        specs: '21.5 ton | 122 kW | 1.0 m³ bucket',
        image: '/manus-storage/XE215EV_32741e1c.png',
        description: 'XCMG XE215EV eco-friendly hybrid excavator with electric-hydraulic system. Reduces fuel consumption by 30%, lower emissions, ideal for urban and environmental-sensitive projects. Hybrid Electric System (122 kW equivalent). Max digging depth: 6.8 m. Max reach height: 10.4 m.'
      },
      {
        id: 'xcmg-xe520e',
        model: 'XE520E',
        name: 'Large Hydraulic Excavator',
        specs: '52 ton | 320 kW | 2.8 m³ bucket',
        image: '/manus-storage/XE520E_4e72cccf.jpeg',
        description: 'XCMG XE520E large-scale hydraulic excavator for mining and heavy construction. Features powerful Cummins engine, advanced load-sensing hydraulics, and reinforced undercarriage. Engine: Cummins QSX15-C600 (320 kW / 435 HP). Max digging depth: 8.5 m. Max reach height: 12.8 m.'
      },
      {
        id: 'xcmg-xe4000e',
        model: 'XE4000E',
        name: 'Ultra-Large Mining Excavator',
        specs: '400 ton | 2100 kW | 21 m³ bucket',
        image: '/manus-storage/XE4000E_a401060d.bmp',
        description: 'XCMG XE4000E ultra-large mining excavator for open-pit mining operations. Features massive bucket capacity, powerful hydraulic system, and advanced automation. Engine: Cummins QSK78-C3000 (2100 kW / 2857 HP). Max digging depth: 12.5 m. Max reach height: 18.5 m.'
      },
      {
        id: 'xcmg-xc9260',
        model: 'XC9260',
        name: 'Mid-Size Wheel Loader',
        specs: '26 ton | 180 kW | 3.5 m³ bucket',
        image: '/manus-storage/XC9260_f6fa5f6b.png',
        description: 'XCMG XC9260 mid-size wheel loader for construction and material handling. Features powerful Weichai engine, smooth transmission, and excellent load capacity. Engine: Weichai WP12.430E50 (180 kW / 245 HP). Max load capacity: 18 ton. Max dump height: 3.2 m.'
      },
      {
        id: 'xcmg-xc968',
        model: 'XC968',
        name: 'Large Wheel Loader',
        specs: '68 ton | 410 kW | 6.0 m³ bucket',
        image: '/manus-storage/XC968_330a600d.png',
        description: 'XCMG XC968 large wheel loader for heavy-duty loading and transport. Features advanced load-sensing hydraulics, comfortable cab, and high reliability. Engine: Cummins QSX15-C600 (410 kW / 559 HP). Max load capacity: 42 ton. Max dump height: 3.8 m.'
      },
      {
        id: 'xcmg-xc968-ev',
        model: 'XC968-EV',
        name: 'Electric Wheel Loader',
        specs: '68 ton | 410 kW | 6.0 m³ bucket',
        image: '/manus-storage/XC968-EV_fe292a3f.png',
        description: 'XCMG XC968-EV electric wheel loader with zero emissions. Ideal for underground mines, tunnels, and enclosed spaces. Reduces operating costs significantly. Electric Motor System (410 kW equivalent). Max load capacity: 42 ton. Max dump height: 3.8 m.'
      },
      {
        id: 'xcmg-gd220j',
        model: 'GD220J',
        name: 'Motor Grader',
        specs: '22 ton | 155 kW | 3.7 m blade',
        image: '/manus-storage/GD220J_d58ae730.jpeg',
        description: 'XCMG GD220J motor grader for road construction and maintenance. Features precision blade control, comfortable operator cabin, and excellent grading accuracy. Engine: Weichai WD10.336E50 (155 kW / 211 HP). Max grading width: 3.5 m.'
      },
      {
        id: 'xcmg-dl560',
        model: 'DL560',
        name: 'Hydraulic Bulldozer',
        specs: '56 ton | 410 kW | 5.2 m blade',
        image: '/manus-storage/DL560_58315436.png',
        description: 'XCMG DL560 large hydraulic bulldozer for heavy earthmoving and site preparation. Features powerful engine, advanced hydraulic system, and reinforced undercarriage. Engine: Cummins QSX15-C600 (410 kW / 559 HP). Blade capacity: 5.2 m³. Max blade pressure: 280 bar.'
      },
      {
        id: 'xcmg-xct45u',
        model: 'XCT45U',
        name: 'Mobile Truck Crane',
        specs: '45 ton | 290 kW | 42 m boom',
        image: '/manus-storage/XCT45U_6a596d70.webp',
        description: 'XCMG XCT45U mobile truck crane for lifting and material handling. Features advanced boom control, high stability, and excellent load capacity. Engine: Weichai WP12.430E50 (290 kW / 395 HP). Max lift capacity: 45 ton. Max boom length: 42 m. Max working height: 48 m.'
      },
      {
        id: 'xcmg-xlc17000',
        model: 'XLC17000',
        name: 'Large Crawler Crane',
        specs: '170 ton | 410 kW | 100 m boom',
        image: '/manus-storage/XLC17000_f4051095.jpeg',
        description: 'XCMG XLC17000 large crawler crane for heavy lifting in mining and construction. Features powerful hydraulic system, excellent stability, and advanced load monitoring. Engine: Cummins QSX15-C600 (410 kW / 559 HP). Max lift capacity: 170 ton. Max boom length: 100 m. Max working height: 120 m.'
      },
      {
        id: 'xcmg-xc978e',
        model: 'XC978E',
        name: 'Vibratory Road Roller',
        specs: '9.8 ton | 75 kW | 2.1 m drum',
        image: '/manus-storage/XC978E_c520434e.webp',
        description: 'XCMG XC978E vibratory road roller for asphalt and soil compaction. Features high compaction efficiency, smooth operation, and fuel efficiency. Engine: Weichai WD615.47 (75 kW / 102 HP). Drum width: 2.1 m. Compaction depth: 0.3 m.'
      },
      {
        id: 'xcmg-xde120',
        model: 'XDE120',
        name: 'Rotary Drilling Rig',
        specs: '120 ton | 200 kW | 1500 m depth',
        image: '/manus-storage/XDE120_381e634c.jpeg',
        description: 'XCMG XDE120 rotary drilling rig for geotechnical and water well drilling. Features advanced drilling system, high precision, and excellent reliability. Engine: Cummins 6BTA5.9-C180 (200 kW / 272 HP). Max drilling depth: 1500 m. Drill pipe diameter: 127 mm.'
      },
      {
        id: 'xcmg-xde260',
        model: 'XDE260',
        name: 'Large Rotary Drilling Rig',
        specs: '260 ton | 350 kW | 3000 m depth',
        image: '/manus-storage/xde260_0cad1859.png',
        description: 'XCMG XDE260 large rotary drilling rig for deep geotechnical drilling. Features powerful drilling system, advanced automation, and high efficiency. Engine: Cummins QSX15-C600 (350 kW / 476 HP). Max drilling depth: 3000 m. Drill pipe diameter: 152 mm.'
      },
      {
        id: 'xcmg-xca120g7-1h',
        model: 'XCA120G7-1H',
        name: 'Truck-Mounted Crane',
        specs: '120 ton | 350 kW | 60 m boom',
        image: '/manus-storage/XCA120G7-1H_b247aa65.png',
        description: 'XCMG XCA120G7-1H truck-mounted crane for versatile lifting operations. Features compact design, high mobility, and excellent load capacity. Engine: Cummins QSX15-C600 (350 kW / 476 HP). Max lift capacity: 120 ton. Max boom length: 60 m. Max working height: 68 m.'
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
      { id: 'lg-856he', model: '856HE', name: 'Wheel Loader', specs: '8.5 ton | 110 kW | 3.0 m³', image: '/manus-storage/856HE_348e297a.png', description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Max Loading Height: 3.2 m. Perfect for loading and material handling.' },
      { id: 'lg-856t', model: '856T', name: 'Wheel Loader', specs: '8.5 ton | 110 kW | 3.0 m³', image: '/manus-storage/856T_b17d0d76.png', description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW / 150 HP). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Reliable loader for construction work.' },
      { id: 'lg-870he', model: '870HE', name: 'Wheel Loader', specs: '8.7 ton | 115 kW | 3.2 m³', image: '/manus-storage/870HE_9128d7b0.png', description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW / 156 HP). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Ideal for medium-duty operations.' },
      { id: 'lg-890t', model: '890T', name: 'Wheel Loader', specs: '8.9 ton | 120 kW | 3.4 m³', image: '/manus-storage/890T_b1caed62.png', description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW / 163 HP). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Suitable for quarry applications.' },
      { id: 'lg-922e', model: '922E', name: 'Wheel Loader', specs: '9.2 ton | 125 kW | 3.6 m³', image: '/manus-storage/922E_83b68604.png', description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW / 170 HP). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Excellent for material handling.' },
      { id: 'lg-922fe', model: '922FE', name: 'Wheel Loader', specs: '9.2 ton | 130 kW | 3.8 m³', image: '/manus-storage/922FE_c5980235.png', description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW / 177 HP). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Enhanced performance model.' },
      { id: 'lg-933e', model: '933E', name: 'Wheel Loader', specs: '9.3 ton | 135 kW | 4.0 m³', image: '/manus-storage/933E_3ef67cc8.png', description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW / 184 HP). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for heavy-duty loading.' },
      { id: 'lg-936e', model: '936E', name: 'Wheel Loader', specs: '9.6 ton | 140 kW | 4.2 m³', image: '/manus-storage/936E_81aed160.png', description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW / 190 HP). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Ideal for mining and quarry.' },
      { id: 'lg-938ehd', model: '938EHD', name: 'Wheel Loader', specs: '9.8 ton | 145 kW | 4.4 m³', image: '/manus-storage/938EHD_5215f127.png', description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW / 197 HP). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. High-performance loader.' },
      { id: 'lg-952f', model: '952F', name: 'Wheel Loader', specs: '9.5 ton | 142 kW | 4.3 m³', image: '/manus-storage/952F_def2cd67.png', description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW / 193 HP). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Versatile loader.' },
      { id: 'lg-965f', model: '965F', name: 'Wheel Loader', specs: '9.6 ton | 148 kW | 4.5 m³', image: '/manus-storage/965F_729648e6.png', description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW / 201 HP). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Premium loader.' },
      { id: 'lg-8128h', model: '8128H', name: 'Hydraulic Excavator', specs: '12.8 ton | 85 kW | 0.50 m³', image: '/manus-storage/8128H_2a9ec8db.png', description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW / 115 HP). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Compact excavator.' },
      { id: 'lg-6608f', model: '6608F', name: 'Wheel Loader', specs: '6.6 ton | 95 kW | 2.5 m³', image: '/manus-storage/6608F_d4164c38.png', description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW / 129 HP). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Compact loader.' },
      { id: 'lg-4215d', model: '4215D', name: 'Wheel Loader', specs: '4.2 ton | 65 kW | 1.8 m³', image: '/manus-storage/4215D_7f783cbc.png', description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW / 88 HP). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Entry-level loader.' },
      { id: 'lg-clg764a', model: 'CLG764A', name: 'Wheel Loader', specs: '7.6 ton | 105 kW | 2.8 m³', image: '/manus-storage/CLG764A_360fbab5.png', description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW / 143 HP). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Mid-range loader.' },
      { id: 'lg-clg777a', model: 'CLG777A', name: 'Wheel Loader', specs: '7.7 ton | 108 kW | 2.9 m³', image: '/manus-storage/CLG777A_a2b2b4c0.png', description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW / 147 HP). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Reliable loader.' },
      { id: 'lg-dw105ae', model: 'DW105AE', name: 'Bulldozer', specs: '10.5 ton | 78 kW | Blade: 3.0 m', image: '/manus-storage/DW105AE_0cd6820d.png', description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW / 106 HP). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Grading and land preparation.' },
      { id: 'lg-td16n', model: 'TD16N', name: 'Bulldozer', specs: '16 ton | 110 kW | Blade: 3.5 m', image: '/manus-storage/TD16N_9729a409.png', description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW / 150 HP). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Heavy-duty bulldozer.' },
      { id: 'lg-de100c', model: 'de100c', name: 'Bulldozer', specs: '10 ton | 75 kW | Blade: 2.8 m', image: '/manus-storage/de100c_e261d9a3.png', description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW / 102 HP). Blade Width: 2.8 m. Operating Weight: 10,000 kg. General grading.' },
      { id: 'lg-dw90', model: 'dw90', name: 'Bulldozer', specs: '9 ton | 65 kW | Blade: 2.5 m', image: '/manus-storage/dw90_2628074a.png', description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW / 88 HP). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Compact bulldozer.' },
      { id: 'lg-ltc900t5', model: 'ltc900t5', name: 'Truck Crane', specs: '90 ton | 350 kW | Max Boom: 45 m', image: '/manus-storage/ltc900t5_5b01386e.png', description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW / 476 HP). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Heavy lifting.' }
    ],
    spareParts: [
      { id: 'lg-sp-1', partNumber: '40C0441', name: 'Engine Oil Filter', description: 'LiuGong OEM Part 40C0441. Category: Filtration System. Applicable Models: CLG906E CLG907E CLG908E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-001.png', category: 'Filtration System' },
      { id: 'lg-sp-2', partNumber: '40C0440', name: 'Fuel Filter', description: 'LiuGong OEM Part 40C0440. Category: Filtration System. Applicable Models: CLG906E CLG907E CLG908E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-002.png', category: 'Filtration System' },
      { id: 'lg-sp-3', partNumber: '53C0583', name: 'Fuel Water Separator', description: 'LiuGong OEM Part 53C0583. Category: Filtration System. Applicable Models: CLG906E CLG907E CLG908E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-003.png', category: 'Filtration System' },
      { id: 'lg-sp-4', partNumber: '40C0506', name: 'Air Filter Element', description: 'LiuGong OEM Part 40C0506. Category: Filtration System. Applicable Models: CLG906E CLG907E CLG908E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-004.png', category: 'Filtration System' },
      { id: 'lg-sp-5', partNumber: '40C5856', name: 'Air Filter Assembly', description: 'LiuGong OEM Part 40C5856. Category: Filtration System. Applicable Models: CLG855N CLG856H CLG862H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-005.png', category: 'Filtration System' },
      { id: 'lg-sp-6', partNumber: '53C1037', name: 'Hydraulic Return Oil Filter', description: 'LiuGong OEM Part 53C1037. Category: Filtration System. Applicable Models: CPC20 CPC25 CPC30 CPC35. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-006.png', category: 'Filtration System' },
      { id: 'lg-sp-7', partNumber: 'SP101730', name: 'Engine Oil Filter', description: 'LiuGong OEM Part SP101730. Category: Filtration System. Applicable Models: CLG922E CLG925E CLG930E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-007.png', category: 'Filtration System' },
      { id: 'lg-sp-8', partNumber: 'SP101731', name: 'Fuel Filter Element', description: 'LiuGong OEM Part SP101731. Category: Filtration System. Applicable Models: CLG922E CLG925E CLG930E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-008.png', category: 'Filtration System' },
      { id: 'lg-sp-9', partNumber: 'SP101733', name: 'Air Filter Inner Outer', description: 'LiuGong OEM Part SP101733. Category: Filtration System. Applicable Models: CLG922E CLG925E CLG930E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-009.png', category: 'Filtration System' },
      { id: 'lg-sp-10', partNumber: '40C1032', name: 'Inner Air Filter', description: 'LiuGong OEM Part 40C1032. Category: Filtration System. Applicable Models: CLG933E CLG936E CLG938EHD. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-010.png', category: 'Filtration System' },
      { id: 'lg-sp-11', partNumber: '40C1033', name: 'Outer Air Filter', description: 'LiuGong OEM Part 40C1033. Category: Filtration System. Applicable Models: CLG933E CLG936E CLG938EHD. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-011.png', category: 'Filtration System' },
      { id: 'lg-sp-12', partNumber: '40C0071', name: 'Fuel Filter', description: 'LiuGong OEM Part 40C0071. Category: Filtration System. Applicable Models: ZL30E ZL30C. Engine: Weichai WD615. High-quality genuine spare part.', image: '/manus-storage/liugong-part-012.png', category: 'Filtration System' },
      { id: 'lg-sp-13', partNumber: '3288812', name: 'Fan V Belt', description: 'LiuGong OEM Part 3288812. Category: Filtration System. Applicable Models: CLG856H CLG933E. Engine: Cummins 6BTA5.9. High-quality genuine spare part.', image: '/manus-storage/liugong-part-013.png', category: 'Filtration System' },
      { id: 'lg-sp-14', partNumber: '3289224', name: 'Multi Rib Belt', description: 'LiuGong OEM Part 3289224. Category: Filtration System. Applicable Models: CLG939EES CLG945E. Engine: Cummins L9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-014.png', category: 'Filtration System' },
      { id: 'lg-sp-15', partNumber: 'SP101732', name: 'Crankshaft Front Oil Seal', description: 'LiuGong OEM Part SP101732. Category: Seal & Gasket System. Applicable Models: CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-015.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-16', partNumber: '13B0288', name: 'Dust Wiper Seal', description: 'LiuGong OEM Part 13B0288. Category: Seal & Gasket System. Applicable Models: CLG906E CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-016.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-17', partNumber: '60218856', name: 'Hub Oil Seal', description: 'LiuGong OEM Part 60218856. Category: Seal & Gasket System. Applicable Models: CLG856H SW936K SW956H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-017.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-18', partNumber: 'B240101000011', name: 'Main Pump Seal Repair Kit', description: 'LiuGong OEM Part B240101000011. Category: Seal & Gasket System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-018.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-19', partNumber: '4110000556132', name: 'Rubber Sealing Ring', description: 'LiuGong OEM Part 4110000556132. Category: Seal & Gasket System. Applicable Models: CLG950 CLG970. Engine: Cummins QSG12. High-quality genuine spare part.', image: '/manus-storage/liugong-part-019.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-20', partNumber: 'D38-000-74+A', name: 'Water Pump Gasket', description: 'LiuGong OEM Part D38-000-74+A. Category: Seal & Gasket System. Applicable Models: XS142J XS162J. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-020.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-21', partNumber: '129900-23001', name: 'Connecting Rod Gasket', description: 'LiuGong OEM Part 129900-23001. Category: Seal & Gasket System. Applicable Models: CLG906E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-021.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-22', partNumber: '729906-22950', name: 'Piston Ring Set', description: 'LiuGong OEM Part 729906-22950. Category: Seal & Gasket System. Applicable Models: CLG906E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-022.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-23', partNumber: 'SP138335', name: 'Injector Seal Kit', description: 'LiuGong OEM Part SP138335. Category: Seal & Gasket System. Applicable Models: CLG835H CLG922E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-023.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-24', partNumber: 'B240101000012', name: 'Boom Cylinder Seal Kit', description: 'LiuGong OEM Part B240101000012. Category: Seal & Gasket System. Applicable Models: CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-024.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-25', partNumber: 'B240101000013', name: 'Arm Cylinder Seal Kit', description: 'LiuGong OEM Part B240101000013. Category: Seal & Gasket System. Applicable Models: CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-025.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-26', partNumber: 'B240101000014', name: 'Bucket Cylinder Seal Kit', description: 'LiuGong OEM Part B240101000014. Category: Seal & Gasket System. Applicable Models: CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-026.png', category: 'Seal & Gasket System' },
      { id: 'lg-sp-27', partNumber: '11D1121', name: 'Bucket Pin Shaft', description: 'LiuGong OEM Part 11D1121. Category: Working Device System. Applicable Models: CLG906E CLG907E CLG908E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-027.png', category: 'Working Device System' },
      { id: 'lg-sp-28', partNumber: '55A2618', name: 'Bushing Sleeve', description: 'LiuGong OEM Part 55A2618. Category: Working Device System. Applicable Models: CLG906E CLG907E CLG908E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-028.png', category: 'Working Device System' },
      { id: 'lg-sp-29', partNumber: '72A0151', name: 'Standard Bucket Tooth', description: 'LiuGong OEM Part 72A0151. Category: Working Device System. Applicable Models: CLG856H CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-029.png', category: 'Working Device System' },
      { id: 'lg-sp-30', partNumber: '14A0215', name: 'Tooth Lock Pin', description: 'LiuGong OEM Part 14A0215. Category: Working Device System. Applicable Models: CLG856H CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-030.png', category: 'Working Device System' },
      { id: 'lg-sp-31', partNumber: '60165232', name: 'Heavy Duty Bucket Tooth', description: 'LiuGong OEM Part 60165232. Category: Working Device System. Applicable Models: CLG922E CLG933E CLG952F CLG965F. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-031.png', category: 'Working Device System' },
      { id: 'lg-sp-32', partNumber: '60165233', name: 'Tooth Adapter Holder', description: 'LiuGong OEM Part 60165233. Category: Working Device System. Applicable Models: CLG922E CLG933E CLG952F. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-032.png', category: 'Working Device System' },
      { id: 'lg-sp-33', partNumber: 'B250101000041', name: 'Bucket Pin', description: 'LiuGong OEM Part B250101000041. Category: Working Device System. Applicable Models: CLG906E CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-033.png', category: 'Working Device System' },
      { id: 'lg-sp-34', partNumber: 'B250101000042', name: 'Boom Bushing', description: 'LiuGong OEM Part B250101000042. Category: Working Device System. Applicable Models: CLG906E CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-034.png', category: 'Working Device System' },
      { id: 'lg-sp-35', partNumber: '10C3793', name: 'Arm Pin Shaft', description: 'LiuGong OEM Part 10C3793. Category: Working Device System. Applicable Models: CLG922E CLG925E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-035.png', category: 'Working Device System' },
      { id: 'lg-sp-36', partNumber: '10C3790', name: 'Arm Bushing', description: 'LiuGong OEM Part 10C3790. Category: Working Device System. Applicable Models: CLG922E CLG925E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-036.png', category: 'Working Device System' },
      { id: 'lg-sp-37', partNumber: '10C3698', name: 'Boom Pin Shaft', description: 'LiuGong OEM Part 10C3698. Category: Working Device System. Applicable Models: CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-037.png', category: 'Working Device System' },
      { id: 'lg-sp-38', partNumber: '10C3697', name: 'Boom Bushing', description: 'LiuGong OEM Part 10C3697. Category: Working Device System. Applicable Models: CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-038.png', category: 'Working Device System' },
      { id: 'lg-sp-39', partNumber: '11119724', name: 'Track Chain Assembly', description: 'LiuGong OEM Part 11119724. Category: Undercarriage System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-039.png', category: 'Undercarriage System' },
      { id: 'lg-sp-40', partNumber: '13021205', name: 'Drive Sprocket', description: 'LiuGong OEM Part 13021205. Category: Undercarriage System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-040.png', category: 'Undercarriage System' },
      { id: 'lg-sp-41', partNumber: 'B230102000021', name: 'Front Idler Wheel', description: 'LiuGong OEM Part B230102000021. Category: Undercarriage System. Applicable Models: CLG906E CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-041.png', category: 'Undercarriage System' },
      { id: 'lg-sp-42', partNumber: 'B230103000022', name: 'Lower Track Roller', description: 'LiuGong OEM Part B230103000022. Category: Undercarriage System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-042.png', category: 'Undercarriage System' },
      { id: 'lg-sp-43', partNumber: 'B230104000023', name: 'Upper Carrier Roller', description: 'LiuGong OEM Part B230104000023. Category: Undercarriage System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-043.png', category: 'Undercarriage System' },
      { id: 'lg-sp-44', partNumber: 'B230201000031', name: 'Track Adjuster Cylinder', description: 'LiuGong OEM Part B230201000031. Category: Undercarriage System. Applicable Models: CLG922E CLG933E CLG936E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-044.png', category: 'Undercarriage System' },
      { id: 'lg-sp-45', partNumber: 'B230105000024', name: 'Track Shoe Plate', description: 'LiuGong OEM Part B230105000024. Category: Undercarriage System. Applicable Models: CLG906E CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-045.png', category: 'Undercarriage System' },
      { id: 'lg-sp-46', partNumber: '13021206', name: 'Sprocket Segment', description: 'LiuGong OEM Part 13021206. Category: Undercarriage System. Applicable Models: CLG939EES CLG945E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-046.png', category: 'Undercarriage System' },
      { id: 'lg-sp-47', partNumber: 'B230102000025', name: 'Idler Oil Seal', description: 'LiuGong OEM Part B230102000025. Category: Undercarriage System. Applicable Models: CLG922E CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-047.png', category: 'Undercarriage System' },
      { id: 'lg-sp-48', partNumber: '249490002', name: 'High Pressure Hydraulic Hose', description: 'LiuGong OEM Part 249490002. Category: Hydraulic System. Applicable Models: All Liugong Excavator. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-048.png', category: 'Hydraulic System' },
      { id: 'lg-sp-49', partNumber: 'SP105060', name: 'Fuel Pump Solenoid Valve', description: 'LiuGong OEM Part SP105060. Category: Hydraulic System. Applicable Models: CLG835H CLG856H. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-049.png', category: 'Hydraulic System' },
      { id: 'lg-sp-50', partNumber: '5346207', name: 'Hydraulic Solenoid Valve', description: 'LiuGong OEM Part 5346207. Category: Hydraulic System. Applicable Models: CLG855N CLG856H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-050.png', category: 'Hydraulic System' },
      { id: 'lg-sp-51', partNumber: '31C0118', name: 'Pipe Elbow Joint', description: 'LiuGong OEM Part 31C0118. Category: Hydraulic System. Applicable Models: All Liugong Models. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-051.png', category: 'Hydraulic System' },
      { id: 'lg-sp-52', partNumber: '44C0027', name: 'Steering Control Valve', description: 'LiuGong OEM Part 44C0027. Category: Hydraulic System. Applicable Models: CLG856H CLG862H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-052.png', category: 'Hydraulic System' },
      { id: 'lg-sp-53', partNumber: 'SP138336', name: 'Fuel Injection Pump', description: 'LiuGong OEM Part SP138336. Category: Engine System. Applicable Models: CLG835H CLG922E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-053.png', category: 'Engine System' },
      { id: 'lg-sp-54', partNumber: 'SP138330', name: 'Fuel Injector Nozzle', description: 'LiuGong OEM Part SP138330. Category: Engine System. Applicable Models: CLG835H CLG922E. Engine: Cummins 6LT9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-054.png', category: 'Engine System' },
      { id: 'lg-sp-55', partNumber: '3530521', name: 'Turbocharger Assembly', description: 'LiuGong OEM Part 3530521. Category: Engine System. Applicable Models: CLG856H CLG933E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-055.png', category: 'Engine System' },
      { id: 'lg-sp-56', partNumber: '61560113227', name: 'Generator Fan Belt', description: 'LiuGong OEM Part 61560113227. Category: Engine System. Applicable Models: ZL50G. Engine: Weichai WD615. High-quality genuine spare part.', image: '/manus-storage/liugong-part-056.png', category: 'Engine System' },
      { id: 'lg-sp-57', partNumber: 'D38-000-74', name: 'Cooling Water Pump', description: 'LiuGong OEM Part D38-000-74. Category: Engine System. Applicable Models: XS142S CLG856H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-057.png', category: 'Engine System' },
      { id: 'lg-sp-58', partNumber: '3793021', name: 'Turbocharger', description: 'LiuGong OEM Part 3793021. Category: Engine System. Applicable Models: CLG939EES. Engine: Cummins L9.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-058.png', category: 'Engine System' },
      { id: 'lg-sp-59', partNumber: '3590044', name: 'Turbocharger', description: 'LiuGong OEM Part 3590044. Category: Engine System. Applicable Models: CLG856H. Engine: Cummins M11. High-quality genuine spare part.', image: '/manus-storage/liugong-part-059.png', category: 'Engine System' },
      { id: 'lg-sp-60', partNumber: '3966430', name: 'Camshaft Shaft', description: 'LiuGong OEM Part 3966430. Category: Engine System. Applicable Models: CLG816H. Engine: Cummins B3.3. High-quality genuine spare part.', image: '/manus-storage/liugong-part-060.png', category: 'Engine System' },
      { id: 'lg-sp-61', partNumber: '129907-44740', name: 'Cooling Fan Blade', description: 'LiuGong OEM Part 129907-44740. Category: Engine System. Applicable Models: CLG906E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-061.png', category: 'Engine System' },
      { id: 'lg-sp-62', partNumber: '40C1048', name: 'Engine Drive Belt', description: 'LiuGong OEM Part 40C1048. Category: Engine System. Applicable Models: CLG906E. Engine: Yanmar 4TNV94L. High-quality genuine spare part.', image: '/manus-storage/liugong-part-062.png', category: 'Engine System' },
      { id: 'lg-sp-63', partNumber: '60218855', name: 'Brake Pad Shoe', description: 'LiuGong OEM Part 60218855. Category: Loader & Road Machinery System. Applicable Models: CLG856H SW936K SW956H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-063.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-64', partNumber: 'B260101000051', name: 'Transmission Filter', description: 'LiuGong OEM Part B260101000051. Category: Loader & Road Machinery System. Applicable Models: CLG856H SW956H SW960E. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-064.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-65', partNumber: 'SP157484', name: 'Fan Belt', description: 'LiuGong OEM Part SP157484. Category: Loader & Road Machinery System. Applicable Models: CLG856H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-065.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-66', partNumber: 'SP187404', name: 'Hydraulic Rubber Hose', description: 'LiuGong OEM Part SP187404. Category: Loader & Road Machinery System. Applicable Models: CLG856H. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-066.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-67', partNumber: 'SP130554', name: 'Air Filter', description: 'LiuGong OEM Part SP130554. Category: Loader & Road Machinery System. Applicable Models: CLG4215D. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-067.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-68', partNumber: '4215D-001', name: 'Grader Blade Pin', description: 'LiuGong OEM Part 4215D-001. Category: Loader & Road Machinery System. Applicable Models: CLG4215D. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-068.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-69', partNumber: '6608F-002', name: 'Compactor Drum Bearing', description: 'LiuGong OEM Part 6608F-002. Category: Loader & Road Machinery System. Applicable Models: XS6608F. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-069.png', category: 'Loader & Road Machinery System' },
      { id: 'lg-sp-70', partNumber: 'CPC20-001', name: 'Lift Cylinder Seal Kit', description: 'LiuGong OEM Part CPC20-001. Category: Forklift System. Applicable Models: CPC20 CPC25. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-070.png', category: 'Forklift System' },
      { id: 'lg-sp-71', partNumber: 'CPC30-002', name: 'Steering Cylinder Seal Kit', description: 'LiuGong OEM Part CPC30-002. Category: Forklift System. Applicable Models: CPC30 CPC35. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-071.png', category: 'Forklift System' },
      { id: 'lg-sp-72', partNumber: '490BPG-003', name: 'Engine Oil Filter', description: 'LiuGong OEM Part 490BPG-003. Category: Forklift System. Applicable Models: CPC20 CPC25. Engine: Xinchai 490BPG. High-quality genuine spare part.', image: '/manus-storage/liugong-part-072.png', category: 'Forklift System' },
      { id: 'lg-sp-73', partNumber: 'C240PKJ-004', name: 'Fuel Filter Element', description: 'LiuGong OEM Part C240PKJ-004. Category: Forklift System. Applicable Models: CPCD20 CPCD25. Engine: Isuzu C240PKJ. High-quality genuine spare part.', image: '/manus-storage/liugong-part-073.png', category: 'Forklift System' },
      { id: 'lg-sp-74', partNumber: '777A-001', name: 'Backhoe Bucket Tooth', description: 'LiuGong OEM Part 777A-001. Category: Backhoe Loader System. Applicable Models: Liugong 777A 764A. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-074.png', category: 'Backhoe Loader System' },
      { id: 'lg-sp-75', partNumber: '777A-002', name: 'Loader Bucket Pin', description: 'LiuGong OEM Part 777A-002. Category: Backhoe Loader System. Applicable Models: Liugong 777A 764A. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-075.png', category: 'Backhoe Loader System' },
      { id: 'lg-sp-76', partNumber: '764A-003', name: 'Track Roller', description: 'LiuGong OEM Part 764A-003. Category: Backhoe Loader System. Applicable Models: Liugong 764A. Engine: N/A. High-quality genuine spare part.', image: '/manus-storage/liugong-part-076.png', category: 'Backhoe Loader System' }
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
        id: 'sany-sy35u',
        model: 'SY35U',
        name: 'Mini Excavator',
        specs: '3.5 ton | 25 kW | 0.12 m³ bucket',
        image: '/manus-storage/SY35U_eaed7302.webp',
        description: 'SANY SY35U ultra-compact mini excavator for landscaping and confined spaces. Features compact design, fuel efficiency, and excellent precision. Engine: Yuchai YC3D60-20 (25 kW / 34 HP). Operating weight: 3.5 ton. Bucket capacity: 0.12 m³. Max digging depth: 2.8 m. Perfect for small-scale construction and landscaping work.'
      },
      {
        id: 'sany-sy135f',
        model: 'SY135F',
        name: 'Mini Excavator',
        specs: '13.5 ton | 74 kW | 0.5 m³ bucket',
        image: '/manus-storage/SY135F_9bd51599.webp',
        description: 'SANY SY135F compact excavator for utility work and small construction. Features fuel-efficient engine, smooth control, and excellent maneuverability. Engine: Yuchai YC4D80-20 (74 kW / 100 HP). Operating weight: 13.5 ton. Bucket capacity: 0.5 m³. Max digging depth: 4.5 m. Ideal for landscaping and small construction projects.'
      },
      {
        id: 'sany-sy155h',
        model: 'SY155H',
        name: 'Excavator',
        specs: '15 ton | 74 kW | 0.65 m³ bucket',
        image: '/manus-storage/SY155H_862bcf37.webp',
        description: 'SANY SY155H mid-size excavator for general construction and excavation. Features fuel-efficient engine, smooth hydraulics, and excellent reliability. Engine: Yuchai YC4D80-20 (74 kW / 100 HP). Operating weight: 15 ton. Bucket capacity: 0.65 m³. Max digging depth: 5.2 m. Ideal for construction, mining, and earthmoving operations.'
      },
      {
        id: 'sany-sy215c',
        model: 'SY215C',
        name: 'Excavator',
        specs: '21.5 ton | 110 kW | 0.9 m³ bucket',
        image: '/manus-storage/SY215C_9f686dd4.webp',
        description: 'SANY SY215C popular mid-size excavator for construction and mining. Features powerful engine, advanced hydraulic system, and high efficiency. Engine: Cummins QSB4.5 (110 kW / 150 HP). Operating weight: 21.5 ton. Bucket capacity: 0.9 m³. Max digging depth: 6.0 m. Perfect for general construction and mining.'
      },
      {
        id: 'sany-sy335c',
        model: 'SY335C',
        name: 'Excavator',
        specs: '33.5 ton | 162 kW | 1.4 m³ bucket',
        image: '/manus-storage/SY335C_400ae492.webp',
        description: 'SANY SY335C large excavator for heavy-duty mining and construction. Features powerful Cummins engine, advanced hydraulic system, and high efficiency. Engine: Cummins QSB6.7 (162 kW / 220 HP). Operating weight: 33.5 ton. Bucket capacity: 1.4 m³. Max digging depth: 6.8 m. Excellent for large-scale excavation and mining.'
      },
      {
        id: 'sany-sy365h',
        model: 'SY365H',
        name: 'Excavator',
        specs: '36.5 ton | 206 kW | 1.7 m³ bucket',
        image: '/manus-storage/SY365H_82e03c4d.webp',
        description: 'SANY SY365H large excavator for major mining and construction projects. Features powerful Cummins engine, advanced control system, and excellent stability. Engine: Cummins QSB6.7 (206 kW / 280 HP). Operating weight: 36.5 ton. Bucket capacity: 1.7 m³. Max digging depth: 7.0 m. Ideal for large-scale mining and construction.'
      },
      {
        id: 'sany-sy550h',
        model: 'SY550H',
        name: 'Excavator',
        specs: '55 ton | 280 kW | 2.4 m³ bucket',
        image: '/manus-storage/SY550H_072b043d.webp',
        description: 'SANY SY550H super-large excavator for major mining operations. Features powerful Cummins engine, advanced hydraulic system, and excellent efficiency. Engine: Cummins QSM11 (280 kW / 380 HP). Operating weight: 55 ton. Bucket capacity: 2.4 m³. Max digging depth: 8.0 m. Perfect for large-scale mining projects.'
      },
      {
        id: 'sany-sy650h',
        model: 'SY650H',
        name: 'Excavator',
        specs: '65 ton | 340 kW | 3.0 m³ bucket',
        image: '/manus-storage/SY650H_86480fd9.webp',
        description: 'SANY SY650H ultra-large excavator for major mining operations. Features powerful Cummins engine, advanced control system, and excellent stability. Engine: Cummins QSM11 (340 kW / 460 HP). Operating weight: 65 ton. Bucket capacity: 3.0 m³. Max digging depth: 8.5 m. Ideal for large-scale mining and earthmoving.'
      },
      {
        id: 'sany-sy956h',
        model: 'SY956H',
        name: 'Excavator',
        specs: '95 ton | 500 kW | 4.5 m³ bucket',
        image: '/manus-storage/SY956H_f166e7ef.png',
        description: 'SANY SY956H mega excavator for major mining and quarrying operations. Features powerful Cummins engine, advanced hydraulic system, and exceptional efficiency. Engine: Cummins QSK60 (500 kW / 680 HP). Operating weight: 95 ton. Bucket capacity: 4.5 m³. Max digging depth: 9.5 m. Perfect for large-scale mining and quarrying.'
      },
      {
        id: 'sany-sy55c',
        model: 'SY55C',
        name: 'Wheel Loader',
        specs: '5.5 ton | 74 kW | 2.0 m³ bucket',
        image: '/manus-storage/SY55C_b53e35a5.webp',
        description: 'SANY SY55C compact wheel loader for light-duty material handling. Features fuel-efficient engine, smooth hydraulic system, and excellent visibility. Engine: Yuchai YC4D80-20 (74 kW / 100 HP). Operating weight: 5.5 ton. Bucket capacity: 2.0 m³. Max loading height: 2.8 m. Perfect for small construction sites.'
      },
      {
        id: 'sany-sy60c',
        model: 'SY60C',
        name: 'Wheel Loader',
        specs: '6 ton | 110 kW | 2.5 m³ bucket',
        image: '/manus-storage/SY60C_e56369ef.webp',
        description: 'SANY SY60C mid-size wheel loader for general material handling. Features powerful engine, smooth hydraulic system, and excellent visibility. Engine: Cummins QSB4.5 (110 kW / 150 HP). Operating weight: 6 ton. Bucket capacity: 2.5 m³. Max loading height: 3.0 m. Excellent for construction and mining operations.'
      },
      {
        id: 'sany-sy75c',
        model: 'SY75C',
        name: 'Wheel Loader',
        specs: '7.5 ton | 155 kW | 3.0 m³ bucket',
        image: '/manus-storage/SY75C_cf0e2362.webp',
        description: 'SANY SY75C large wheel loader for heavy-duty material handling. Features powerful Cummins engine, advanced control system, and excellent stability. Engine: Cummins QSB6.7 (155 kW / 210 HP). Operating weight: 7.5 ton. Bucket capacity: 3.0 m³. Max loading height: 3.2 m. Ideal for large-scale construction and mining.'
      },
      {
        id: 'sany-xc968',
        model: 'XC968',
        name: 'Wheel Loader',
        specs: '96 ton | 500 kW | 6.0 m³ bucket',
        image: '/manus-storage/XC968_513b412e.png',
        description: 'SANY XC968 ultra-large wheel loader for major mining operations. Features powerful Cummins engine, advanced hydraulic system, and exceptional efficiency. Engine: Cummins QSK60 (500 kW / 680 HP). Operating weight: 96 ton. Bucket capacity: 6.0 m³. Max loading height: 3.8 m. Perfect for large-scale mining and quarrying.'
      },
      {
        id: 'sany-sy16c',
        model: 'SY16C',
        name: 'Backhoe Loader',
        specs: '8 ton | 75 kW | 2.0 m³ bucket',
        image: '/manus-storage/SY16C_ec705e0e.webp',
        description: 'SANY SY16C backhoe loader for versatile construction and excavation work. Features combined loading and digging capability, comfortable cabin, and reliable performance. Engine: Yuchai YC4D80-20 (75 kW / 102 HP). Operating weight: 8 ton. Front bucket: 2.0 m³. Rear bucket: 0.25 m³. Perfect for utility work and small construction.'
      },
      {
        id: 'sany-sy18c',
        model: 'SY18C',
        name: 'Backhoe Loader',
        specs: '9 ton | 110 kW | 2.5 m³ bucket',
        image: '/manus-storage/SY18C_048ea560.webp',
        description: 'SANY SY18C backhoe loader for general construction and excavation. Features combined loading and digging capability, advanced hydraulic system, and excellent performance. Engine: Cummins QSB4.5 (110 kW / 150 HP). Operating weight: 9 ton. Front bucket: 2.5 m³. Rear bucket: 0.3 m³. Excellent for construction and utility work.'
      },
      {
        id: 'sany-gd220j',
        model: 'GD220J',
        name: 'Motor Grader',
        specs: '22 ton | 155 kW | 3.7 m blade',
        image: '/manus-storage/GD220J_5230ed14.jpeg',
        description: 'SANY GD220J motor grader for road construction and maintenance. Features precise blade control, powerful Cummins engine, and excellent visibility. Engine: Cummins QSB6.7 (155 kW / 210 HP). Operating weight: 22 ton. Blade width: 3.7 m. Grading accuracy: ±20 mm. Ideal for highway and airport construction.'
      },
      {
        id: 'sany-xde120',
        model: 'XDE120',
        name: 'Motor Grader',
        specs: '12 ton | 110 kW | 3.2 m blade',
        image: '/manus-storage/XDE120_7253de2b.jpeg',
        description: 'SANY XDE120 compact motor grader for road maintenance and light construction. Features precise blade control, fuel-efficient engine, and excellent maneuverability. Engine: Cummins QSB4.5 (110 kW / 150 HP). Operating weight: 12 ton. Blade width: 3.2 m. Grading accuracy: ±15 mm. Perfect for road maintenance and small projects.'
      },
      {
        id: 'sany-dl560',
        model: 'DL560',
        name: 'Bulldozer',
        specs: '56 ton | 280 kW | 4.0 m blade',
        image: '/manus-storage/DL560_fa1499e2.png',
        description: 'SANY DL560 large bulldozer for heavy-duty earthmoving and construction. Features powerful Cummins engine, advanced hydraulic system, and excellent stability. Engine: Cummins QSM11 (280 kW / 380 HP). Operating weight: 56 ton. Blade width: 4.0 m. Blade capacity: 6.5 m³. Ideal for large-scale construction and mining projects.'
      },
      {
        id: 'sany-ssr160ac',
        model: 'SSR160AC-8',
        name: 'Vibratory Roller',
        specs: '16 ton | 110 kW | 2.1 m width',
        image: '/manus-storage/SSR160AC-8_0a41f2ff.webp',
        description: 'SANY SSR160AC-8 vibratory roller for asphalt and soil compaction. Features powerful Cummins engine, advanced vibration system, and excellent compaction efficiency. Engine: Cummins QSB4.5 (110 kW / 150 HP). Operating weight: 16 ton. Roller width: 2.1 m. Compaction depth: 0.3 m. Perfect for road construction and maintenance.'
      },
      {
        id: 'sany-ssr200c',
        model: 'SSR200C-8H',
        name: 'Vibratory Roller',
        specs: '20 ton | 155 kW | 2.1 m width',
        image: '/manus-storage/SSR200C-8H_d8390bbc.webp',
        description: 'SANY SSR200C-8H vibratory roller for heavy-duty asphalt compaction. Features powerful Cummins engine, advanced vibration system, and excellent efficiency. Engine: Cummins QSB6.7 (155 kW / 210 HP). Operating weight: 20 ton. Roller width: 2.1 m. Compaction depth: 0.4 m. Ideal for highway and airport construction.'
      },
      {
        id: 'sany-stc250t5',
        model: 'STC250T5',
        name: 'Truck Crane',
        specs: '250 ton | 500 kW | 60 m boom',
        image: '/manus-storage/STC250T5_0dcf44b0.webp',
        description: 'SANY STC250T5 large truck crane for heavy lifting and construction. Features powerful Cummins engine, advanced control system, and excellent stability. Engine: Cummins QSK60 (500 kW / 680 HP). Lifting capacity: 250 ton. Max boom length: 60 m. Perfect for major construction and industrial projects.'
      },
      {
        id: 'sany-stc1200t7',
        model: 'STC1200T7',
        name: 'Truck Crane',
        specs: '1200 ton | 800 kW | 100 m boom',
        image: '/manus-storage/STC1200T7_d0f368f9.webp',
        description: 'SANY STC1200T7 mega truck crane for ultra-heavy lifting operations. Features powerful engine, advanced hydraulic system, and exceptional stability. Engine: Cummins QSK95 (800 kW / 1088 HP). Lifting capacity: 1200 ton. Max boom length: 100 m. Ideal for major infrastructure and industrial projects.'
      },
      {
        id: 'sany-sac600e',
        model: 'SAC600E',
        name: 'Concrete Pump',
        specs: '600 m³/h | 500 kW | 60 m boom',
        image: '/manus-storage/SAC600E_ea1e482a.webp',
        description: 'SANY SAC600E truck-mounted concrete pump for large-scale construction. Features powerful Cummins engine, advanced hydraulic system, and high efficiency. Engine: Cummins QSK60 (500 kW / 680 HP). Pumping capacity: 600 m³/h. Max boom length: 60 m. Perfect for major construction projects.'
      },
      {
        id: 'sany-scc1000tb',
        model: 'SCC1000TB',
        name: 'Concrete Pump',
        specs: '1000 m³/h | 800 kW | 80 m boom',
        image: '/manus-storage/SCC1000TB_e01f9b29.webp',
        description: 'SANY SCC1000TB ultra-large concrete pump for major construction operations. Features powerful Cummins engine, advanced control system, and exceptional efficiency. Engine: Cummins QSK95 (800 kW / 1088 HP). Pumping capacity: 1000 m³/h. Max boom length: 80 m. Ideal for large-scale construction projects.'
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
        id: 'komatsu-pc60-8',
        model: 'PC60-8',
        name: 'Mini Excavator',
        specs: '6.0 ton | 44 kW | 0.25 m³ bucket | Operating Weight: 6,000 kg',
        image: '/manus-storage/PC60-8_50d6ee06.jpg',
        description: 'Komatsu PC60-8 Mini Excavator. Improved fuel efficiency and performance. Engine: 4D68E-1A (44 kW/59 HP). Bucket Capacity: 0.25 m³. Max Digging Depth: 3.8 m. Boom Length: 3.0 m. Stick Length: 1.9 m. Travel Speed: 3.2 km/h. Perfect for construction, landscaping, and utility applications.',
      },
      {
        id: 'komatsu-pc130-7',
        model: 'PC130-7',
        name: 'Hydraulic Excavator',
        specs: '13.0 ton | 75 kW | 0.55 m³ bucket | Operating Weight: 13,000 kg',
        image: '/manus-storage/PC130-7_0da319a0.jpg',
        description: 'Komatsu PC130-7 Hydraulic Excavator. Mid-size excavator for general construction. Engine: SAA4D95LE (75 kW/100 HP). Bucket Capacity: 0.55 m³. Max Digging Depth: 5.2 m. Boom Length: 5.0 m. Stick Length: 2.3 m. Undercarriage: Rubber Track (400mm). Travel Speed: 4.0 km/h. Ideal for general excavation and material handling.',
      },
      {
        id: 'komatsu-pc200-8',
        model: 'PC200-8',
        name: 'Hydraulic Excavator',
        specs: '20.0 ton | 110 kW | 0.88 m³ bucket | Operating Weight: 20,000 kg',
        image: '/manus-storage/PC200-8_720f167f.png',
        description: 'Komatsu PC200-8 Hydraulic Excavator. Popular mid-size model for construction and mining. Engine: SAA6D107E (110 kW/147 HP). Bucket Capacity: 0.88 m³. Max Digging Depth: 6.5 m. Boom Length: 6.1 m. Stick Length: 2.4 m. Undercarriage: Rubber Track (500mm). Hydraulic System: 280 bar. Travel Speed: 4.5 km/h. Perfect for general construction and earthmoving.',
      },
      {
        id: 'komatsu-pc200-11m1',
        model: 'PC200-11M1',
        name: 'Hydraulic Excavator',
        specs: '20.8 ton | 130 kW | 0.88 m³ bucket | Operating Weight: 20,800 kg',
        image: '/manus-storage/PC200-11M1_92f3aac2.webp',
        description: 'Komatsu PC200-11M1 Hydraulic Excavator. Latest generation with improved fuel efficiency. Engine: SAA6D107E-1A (130 kW/174 HP). Bucket Capacity: 0.88 m³. Max Digging Depth: 6.5 m. Boom Length: 6.1 m. Stick Length: 2.4 m. Undercarriage: Rubber Track (500mm). Enhanced hydraulic system with better performance. Travel Speed: 4.5 km/h. Excellent for modern construction projects.',
      },
      {
        id: 'komatsu-pc360lc-11',
        model: 'PC360LC-11',
        name: 'Hydraulic Excavator',
        specs: '36.0 ton | 206 kW | 1.6 m³ bucket | Operating Weight: 36,000 kg',
        image: '/manus-storage/pc360LC-11_5869e62a.jpeg',
        description: 'Komatsu PC360LC-11 Hydraulic Excavator. Large-scale excavator for mining and heavy construction. Engine: SAA6D140E-3 (206 kW/276 HP). Bucket Capacity: 1.6 m³. Max Digging Depth: 7.5 m. Boom Length: 7.0 m. Stick Length: 2.8 m. Undercarriage: Rubber Track (700mm). Hydraulic System: 280 bar. Travel Speed: 4.5 km/h. Perfect for large-scale mining and quarrying.',
      },
      {
        id: 'komatsu-d65ex-16',
        model: 'D65EX-16',
        name: 'Bulldozer',
        specs: '16.5 ton | 110 kW | SU blade 4.0 m³ | Operating Weight: 16,500 kg',
        image: '/manus-storage/D65EX-16_88753224.jpeg',
        description: 'Komatsu D65EX-16 Bulldozer. Compact dozer for general construction. Engine: SAA6D95LE (110 kW/147 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Capacity: 4.0 m³. Undercarriage: Steel Track (457mm). Travel Speed: 10 km/h. Fuel Tank: 150 L. Ideal for land clearing and site preparation.',
      },
      {
        id: 'komatsu-d65px-18',
        model: 'D65PX-18',
        name: 'Bulldozer',
        specs: '18.0 ton | 130 kW | SU blade 4.3 m³ | Operating Weight: 18,000 kg',
        image: '/manus-storage/D65PX-18_fae74fa9.jpeg',
        description: 'Komatsu D65PX-18 Bulldozer. Enhanced performance dozer with improved power. Engine: SAA6D95LE-1 (130 kW/174 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Capacity: 4.3 m³. Undercarriage: Steel Track (457mm). Travel Speed: 10.5 km/h. Fuel Tank: 160 L. Great for heavy-duty dozing operations.',
      },
      {
        id: 'komatsu-d85ex-15r',
        model: 'D85EX-15R',
        name: 'Bulldozer',
        specs: '28.0 ton | 186 kW | SU blade 7.2 m³ | Operating Weight: 28,000 kg',
        image: '/manus-storage/d85ex-15r_4d47ff8a.jpeg',
        description: 'Komatsu D85EX-15R Bulldozer. Large-scale dozer for mining and heavy construction. Engine: SAA6D140E (186 kW/250 HP). Blade Type: Standard Straight (SU). Blade Width: 4.27 m. Blade Capacity: 7.2 m³. Undercarriage: Steel Track (610mm). Travel Speed: 10.5 km/h. Fuel Tank: 300 L. Perfect for large-scale earthmoving and mining.',
      },
      {
        id: 'komatsu-gd655_5',
        model: 'GD655-5',
        name: 'Motor Grader',
        specs: '16.0 ton | 110 kW | 3.66 m blade | Operating Weight: 16,000 kg',
        image: '/manus-storage/GD655_5_3aac29e3.png',
        description: 'Komatsu GD655-5 Motor Grader. Precision grading for road construction. Engine: SAA6D95LE (110 kW/147 HP). Blade Width: 3.66 m. Blade Length: 4.27 m. Operating Weight: 16,000 kg. Transmission: Hydrostatic. Travel Speed: 40 km/h. Fuel Tank: 150 L. Ideal for road construction and maintenance.',
      },
      {
        id: 'komatsu-wa200-6',
        model: 'WA200-6',
        name: 'Wheel Loader',
        specs: '20.0 ton | 110 kW | 2.2 m³ bucket | Operating Weight: 20,000 kg',
        image: '/manus-storage/wa200-6_a50945fe.jpeg',
        description: 'Komatsu WA200-6 Wheel Loader. Versatile loader for general construction. Engine: SAA6D107E (110 kW/147 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8.5 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Travel Speed: 40 km/h. Fuel Tank: 200 L. Perfect for loading and material handling.',
      },
      {
        id: 'komatsu-wa250-6',
        model: 'WA250-6',
        name: 'Wheel Loader',
        specs: '25.0 ton | 130 kW | 2.5 m³ bucket | Operating Weight: 25,000 kg',
        image: '/manus-storage/wa250-6_d7d36309.jpeg',
        description: 'Komatsu WA250-6 Wheel Loader. Mid-size loader with enhanced power. Engine: SAA6D107E-1A (130 kW/174 HP). Bucket Capacity: 2.5 m³. Max Lift Height: 3.4 m. Lift Capacity at Full Height: 10 ton. Undercarriage: 4-Wheel Drive. Tire Size: 23.5R25. Travel Speed: 42 km/h. Fuel Tank: 220 L. Excellent for demanding loading operations.',
      },
      {
        id: 'komatsu-wa470-11',
        model: 'WA470-11',
        name: 'Wheel Loader',
        specs: '47.0 ton | 260 kW | 4.6 m³ bucket | Operating Weight: 47,000 kg',
        image: '/manus-storage/WA470-11_70f7c1fa.jpg',
        description: 'Komatsu WA470-11 Wheel Loader. Large-scale loader for mining and heavy construction. Engine: SAA6D170E-5 (260 kW/349 HP). Bucket Capacity: 4.6 m³. Max Lift Height: 3.8 m. Lift Capacity at Full Height: 18 ton. Undercarriage: 4-Wheel Drive. Tire Size: 29.5R25. Travel Speed: 45 km/h. Fuel Tank: 400 L. Perfect for large-scale loading and material handling.',
      },
    ],
    spareParts: [
      { id: 'km-sp-1', partNumber: '600-211-1231', name: 'Engine Oil Filter', description: 'Engine Oil Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-2', partNumber: '600-311-3111', name: 'Fuel Filter Element', description: 'Fuel Filter Element', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-3', partNumber: '600-411-1171', name: 'Outer Air Filter', description: 'Outer Air Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-4', partNumber: '600-411-1181', name: 'Inner Air Filter', description: 'Inner Air Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-5', partNumber: '07063-51383', name: 'Hydraulic Oil Filter', description: 'Hydraulic Oil Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-6', partNumber: '424-16-11140', name: 'Pilot Filter', description: 'Pilot Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-7', partNumber: '21N-60-12210', name: 'Hydraulic Drain Filter', description: 'Hydraulic Drain Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-8', partNumber: '714-10-16951', name: 'Transmission Oil Filter', description: 'Transmission Oil Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-9', partNumber: '17A-15-17271', name: 'Steering Oil Filter', description: 'Steering Oil Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-10', partNumber: '600-181-6730', name: 'Fuel Water Separator', description: 'Fuel Water Separator', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-11', partNumber: '600-211-1240', name: 'Spin-on Oil Filter', description: 'Spin-on Oil Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-12', partNumber: '600-311-3120', name: 'Fuel Filter Head', description: 'Fuel Filter Head', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-13', partNumber: '600-411-1190', name: 'Air Filter Element', description: 'Air Filter Element', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-14', partNumber: '07063-51384', name: 'Return Filter', description: 'Return Filter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Filtration System' },
      { id: 'km-sp-15', partNumber: '04111-03031', name: 'Cylinder Head Gasket', description: 'Cylinder Head Gasket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-16', partNumber: '04111-03032', name: 'Oil Pan Gasket', description: 'Oil Pan Gasket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-17', partNumber: '04111-03033', name: 'Valve Cover Gasket', description: 'Valve Cover Gasket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-18', partNumber: '04111-03034', name: 'Timing Cover Gasket', description: 'Timing Cover Gasket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-19', partNumber: '04111-03035', name: 'Water Pump Seal', description: 'Water Pump Seal', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-20', partNumber: '04111-03036', name: 'Crankshaft Seal', description: 'Crankshaft Seal', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-21', partNumber: '04111-03037', name: 'Camshaft Seal', description: 'Camshaft Seal', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-22', partNumber: '04111-03038', name: 'Transmission Seal', description: 'Transmission Seal', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-23', partNumber: '04111-03039', name: 'Hydraulic Hose Seal', description: 'Hydraulic Hose Seal', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-24', partNumber: '04111-03040', name: 'O-ring Kit', description: 'O-ring Kit', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Seal & Gasket System' },
      { id: 'km-sp-25', partNumber: '205-70-74210', name: 'Bucket Tooth', description: 'Bucket Tooth', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-26', partNumber: '205-70-74220', name: 'Tooth Adapter', description: 'Tooth Adapter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-27', partNumber: '205-70-74230', name: 'Cutting Edge', description: 'Cutting Edge', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-28', partNumber: '205-70-74240', name: 'Side Cutter', description: 'Side Cutter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-29', partNumber: '205-70-74250', name: 'Ripper Tooth', description: 'Ripper Tooth', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-30', partNumber: '205-70-74260', name: 'Bucket Link', description: 'Bucket Link', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-31', partNumber: '205-70-74270', name: 'Boom Cylinder', description: 'Boom Cylinder', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-32', partNumber: '205-70-74280', name: 'Bucket Cylinder', description: 'Bucket Cylinder', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-33', partNumber: '205-70-74290', name: 'Stick Cylinder', description: 'Stick Cylinder', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Working Device System' },
      { id: 'km-sp-34', partNumber: '207-30-00010', name: 'Track Link', description: 'Track Link', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-35', partNumber: '207-30-00020', name: 'Track Shoe', description: 'Track Shoe', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-36', partNumber: '207-30-00030', name: 'Sprocket', description: 'Sprocket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-37', partNumber: '207-30-00040', name: 'Idler', description: 'Idler', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-38', partNumber: '207-30-00050', name: 'Roller', description: 'Roller', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-39', partNumber: '207-30-00060', name: 'Track Pin', description: 'Track Pin', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-40', partNumber: '207-30-00070', name: 'Track Bushing', description: 'Track Bushing', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-41', partNumber: '207-30-00080', name: 'Drive Sprocket', description: 'Drive Sprocket', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Undercarriage System' },
      { id: 'km-sp-42', partNumber: '708-1U-00011', name: 'Main Pump', description: 'Main Pump', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-43', partNumber: '708-1U-00012', name: 'Pilot Pump', description: 'Pilot Pump', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-44', partNumber: '708-1U-00013', name: 'Hydraulic Valve', description: 'Hydraulic Valve', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-45', partNumber: '708-1U-00014', name: 'Pressure Relief Valve', description: 'Pressure Relief Valve', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-46', partNumber: '708-1U-00015', name: 'Hydraulic Hose', description: 'Hydraulic Hose', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-47', partNumber: '708-1U-00016', name: 'Hydraulic Cylinder', description: 'Hydraulic Cylinder', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-48', partNumber: '708-1U-00017', name: 'Proportional Valve', description: 'Proportional Valve', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Hydraulic System' },
      { id: 'km-sp-49', partNumber: '6151-31-1100', name: 'Crankshaft', description: 'Crankshaft', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-50', partNumber: '6151-31-1110', name: 'Camshaft', description: 'Camshaft', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-51', partNumber: '6151-31-1120', name: 'Connecting Rod', description: 'Connecting Rod', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-52', partNumber: '6151-31-1130', name: 'Piston', description: 'Piston', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-53', partNumber: '6151-31-1140', name: 'Piston Ring', description: 'Piston Ring', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-54', partNumber: '6151-31-1150', name: 'Valve', description: 'Valve', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-55', partNumber: '6151-31-1160', name: 'Turbocharger', description: 'Turbocharger', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-56', partNumber: '6151-31-1170', name: 'Fuel Injector', description: 'Fuel Injector', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-57', partNumber: '6151-31-1180', name: 'Glow Plug', description: 'Glow Plug', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-58', partNumber: '6151-31-1190', name: 'Starter Motor', description: 'Starter Motor', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-59', partNumber: '6151-31-1200', name: 'Alternator', description: 'Alternator', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-60', partNumber: '6151-31-1210', name: 'Water Pump', description: 'Water Pump', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Engine System' },
      { id: 'km-sp-61', partNumber: '714-10-16960', name: 'Transmission Pump', description: 'Transmission Pump', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Loader & Road Machinery System' },
      { id: 'km-sp-62', partNumber: '714-10-16970', name: 'Transmission Valve', description: 'Transmission Valve', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Loader & Road Machinery System' },
      { id: 'km-sp-63', partNumber: '714-10-16980', name: 'Transmission Cylinder', description: 'Transmission Cylinder', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Loader & Road Machinery System' },
      { id: 'km-sp-64', partNumber: '714-10-16990', name: 'Torque Converter', description: 'Torque Converter', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Loader & Road Machinery System' },
      { id: 'km-sp-65', partNumber: '16Y-60-06010', name: 'Forklift Mast', description: 'Forklift Mast', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Forklift System' },
      { id: 'km-sp-66', partNumber: '16Y-60-06020', name: 'Forklift Carriage', description: 'Forklift Carriage', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Forklift System' },
      { id: 'km-sp-67', partNumber: '16Y-60-06030', name: 'Forklift Load Backrest', description: 'Forklift Load Backrest', image: '/manus-storage/komatsu-part-placeholder.png', category: 'Forklift System' },
    ]
  },
  // ========== TRUCKS & ENGINES ==========
  {
    id: 'isuzu',
    name: 'Isuzu',
    fullName: 'Isuzu Motors Limited',
    category: 'engine',
    country: 'Japan',
    description: 'Japanese commercial vehicle manufacturer known for reliable trucks and diesel engines.',
    logo: 'ISUZU',
    color: '#C41E3A',
    machines: [
      {
        id: 'isu-4hk1',
        model: '4HK1',
        name: 'Diesel Engine',
        specs: '5.2L | 130-150 kW | 4 cylinders',
        image: '/manus-storage/isuzu_4hk1_ed382539.jpeg',
        description: 'Isuzu 4HK1 Diesel Engine. Mid-range four-cylinder turbocharged diesel engine for medium-duty trucks and equipment. Displacement: 5.2L. Power Output: 130-150 kW (174-200 HP). Torque: 420-500 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4. Ideal for medium-duty dump trucks and loaders.'
      },
      {
        id: 'isu-6hk1',
        model: '6HK1',
        name: 'Diesel Engine',
        specs: '7.8L | 190-220 kW | 6 cylinders',
        image: '/manus-storage/isuzu_6hk1_05fba9f9.jpeg',
        description: 'Isuzu 6HK1 Diesel Engine. Heavy-duty six-cylinder turbocharged diesel engine for large trucks and construction equipment. Displacement: 7.8L. Power Output: 190-220 kW (255-295 HP). Torque: 600-700 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4. Perfect for heavy-duty dump trucks and large loaders.'
      },
      {
        id: 'isu-6uz1',
        model: '6UZ1',
        name: 'Diesel Engine',
        specs: '9.8L | 250-280 kW | 6 cylinders',
        image: '/manus-storage/isuzu_6uz1_9bb9e3a6.jpeg',
        description: 'Isuzu 6UZ1 Diesel Engine. Ultra-heavy-duty six-cylinder turbocharged diesel engine for maximum power applications. Displacement: 9.8L. Power Output: 250-280 kW (335-375 HP). Torque: 850-1000 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Ideal for mining trucks and large construction equipment.'
      },
      {
        id: 'isu-6wg1',
        model: '6WG1',
        name: 'Diesel Engine',
        specs: '15.6L | 320-380 kW | 6 cylinders',
        image: '/manus-storage/isuzu_6wg1_bc349766.jpeg',
        description: 'Isuzu 6WG1 Diesel Engine. Premium six-cylinder turbocharged diesel engine for ultra-heavy-duty applications. Displacement: 15.6L. Power Output: 320-380 kW (428-510 HP). Torque: 1200-1500 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Perfect for large dump trucks and mining equipment.'
      }
    ],
    spareParts: [
      { id: 'iz-sp-1', partNumber: '8-97602-428-0', name: '机油滤清器 (Oil Filter)', description: 'Isuzu 原厂机油滤清器，高效过滤发动机机油中的杂质和金属颗粒，保护发动机。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：纸质滤芯，流量 60L/min，工作温度 -40~120℃。', image: '/manus-storage/yxC5ZD3L2zUE_d8fb95cb.jpg', category: 'Lubrication System' },
      { id: 'iz-sp-2', partNumber: '8-97602-429-0', name: '燃油滤清器 (Fuel Filter)', description: 'Isuzu 原厂燃油滤清器，精密过滤燃油中的杂质和水分，提高喷油精度。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：纸质滤芯，过滤精度 10μm，工作压力 0.3-0.5bar。', image: '/manus-storage/byx0Bv8p9czO_81205870.jpg', category: 'Fuel System' },
      { id: 'iz-sp-3', partNumber: '8-97602-430-0', name: '空气滤清器 (Air Filter)', description: 'Isuzu 高效空气滤清器，有效过滤进气中的灰尘和颗粒，保证发动机进气清洁。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：纸质滤芯，过滤精度 5μm，流量 200m³/h。', image: '/manus-storage/enLwuJeEPvn0_3de8ef60.jpg', category: 'Engine System' },
      { id: 'iz-sp-4', partNumber: '8-97602-431-0', name: '活塞环套件 (Piston Ring Set)', description: 'Isuzu 原厂活塞环，精密加工，耐高温耐磨损，密封活塞和气缸，防止气体泄漏。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：铸铁，厚度 1.5-2mm，工作温度 300℃。', image: '/manus-storage/AdtHTxe5citR_4143c7b5.jpg', category: 'Engine System' },
      { id: 'iz-sp-5', partNumber: '8-97602-432-0', name: '气门室盖垫 (Valve Cover Gasket)', description: 'Isuzu 气门室盖密封垫片，防止机油泄漏，保护气门机构。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：硅橡胶垫片，厚度 2mm，耐油温度 200℃。', image: '/manus-storage/lvWKFs8LJMSi_4425bf62.jpg', category: 'Engine System' },
      { id: 'iz-sp-6', partNumber: '8-97602-433-0', name: '缸盖垫 (Cylinder Head Gasket)', description: 'Isuzu 缸盖密封垫片，密封气缸和缸盖，防止冷却液和机油泄漏。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：金属石棉垫片，厚度 1mm，工作压力 15bar。', image: '/manus-storage/n4y9t1gRbigZ_a2e143c0.png', category: 'Engine System' },
      { id: 'iz-sp-7', partNumber: '8-97602-434-0', name: '水泵总成 (Water Pump Assembly)', description: 'Isuzu 冷却水泵总成，高效循环冷却液，采用铝制泵体，保持发动机工作温度。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：铝制泵体，流量 80L/min，工作温度 -40~120℃。', image: '/manus-storage/fH4PectUpFgw_3a4d53be.jpg', category: 'Cooling System' },
      { id: 'iz-sp-8', partNumber: '8-97602-435-0', name: '节温器 (Thermostat)', description: 'Isuzu 冷却系统节温器，精确控制冷却液温度，提高发动机效率，降低油耗。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：黄铜阀芯，开启温度 82℃，工作压力 0.5bar。', image: '/manus-storage/le4Hw3O4MlmA_a72ae1b7.jpg', category: 'Cooling System' },
      { id: 'iz-sp-9', partNumber: '8-97602-436-0', name: '喷油器 (Fuel Injector)', description: 'Isuzu 燃油喷油器，精密喷射，雾化效果好，提高燃油利用率和发动机性能。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：电磁式喷油器，喷油压力 200bar，喷油量 50mm³/s。', image: '/manus-storage/y9pbq4jGWWSx_858eaa9d.jpg', category: 'Fuel System' },
      { id: 'iz-sp-10', partNumber: '8-97602-437-0', name: '高压燃油泵 (High Pressure Fuel Pump)', description: 'Isuzu 高压燃油泵，提供稳定的高压燃油，确保燃油喷射精度。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：齿轮泵，工作压力 200bar，流量 60L/min。', image: '/manus-storage/epH20GlTE0gF_9042edee.jpg', category: 'Fuel System' },
      { id: 'iz-sp-11', partNumber: '8-97602-438-0', name: '前油封 (Front Oil Seal)', description: 'Isuzu 曲轴前端油封，防止机油从曲轴前端泄漏，保护发动机。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：氟橡胶油封，内径 40mm，工作温度 -40~150℃。', image: '/manus-storage/WsTPyoaAVFJT_5daab65d.jpg', category: 'Engine System' },
      { id: 'iz-sp-12', partNumber: '8-97602-439-0', name: '后油封 (Rear Oil Seal)', description: 'Isuzu 曲轴后端油封，防止机油从曲轴后端泄漏，确保发动机密封。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：氟橡胶油封，内径 50mm，工作温度 -40~150℃。', image: '/manus-storage/kw1xBifZnetT_911f8b80.jpg', category: 'Engine System' },
      { id: 'iz-sp-13', partNumber: '8-97602-440-0', name: '气门盖 (Valve Cover)', description: 'Isuzu 发动机气门盖，保护气门机构，防止杂质进入。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：铝制，厚度 3mm，重量 2kg。', image: '/manus-storage/I6YM8o739jNJ_cf97a341.jpg', category: 'Engine System' },
      { id: 'iz-sp-14', partNumber: '8-97602-441-0', name: '机油泵 (Oil Pump)', description: 'Isuzu 发动机机油泵，循环供油，采用齿轮泵设计，确保润滑系统正常工作。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：齿轮泵，流量 70L/min，工作压力 5bar。', image: '/manus-storage/6lZq5V7GhAch_4ced24fd.jpg', category: 'Lubrication System' },
      { id: 'iz-sp-15', partNumber: '8-97602-442-0', name: '冷却液管 (Coolant Hose)', description: 'Isuzu 冷却液输送管，连接水泵和散热器，耐高温耐压，确保冷却液循环畅通。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：橡胶软管，内径 20mm，工作温度 -40~120℃。', image: '/manus-storage/l04iiQ8VXpuV_31dece8f.jpg', category: 'Cooling System' },
      { id: 'iz-sp-16', partNumber: '8-97602-443-0', name: '高压油管 (High Pressure Fuel Pipe)', description: 'Isuzu 喷油器高压油管，连接燃油泵和喷油器，耐高压防泄漏。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：高压钢管，工作压力 250bar，内径 3mm。', image: '/manus-storage/mTRIIbz5npZ7_ac87be38.jpg', category: 'Fuel System' },
      { id: 'iz-sp-17', partNumber: '8-97602-444-0', name: '交流发电机 (Alternator)', description: 'Isuzu 发动机交流发电机，为电气系统供电，保证车辆正常运行。兼容车型：五十铃 NPR、NQR、NRR 等。发动机型号：4HK1、6HK1、6UZ1、6WG1。规格：输出功率 100A，输出电压 14V，工作温度 -40~120℃。', image: '/manus-storage/g6y8Nuhx4tVz_07246d51.jpg', category: 'Electrical System' },
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
    machines: [      {
        id: 'shac-f3000-6x4-tractor',
        model: 'F3000 6×4 Tractor',
        name: 'Tractor Truck',
        specs: '6×4 | 280-350 kW | 30-40 ton GVW',
        image: '/manus-storage/shacman_f3000_6x4_tractor_f6b1a90f.jpeg',
        description: 'Shacman F3000 6×4 Tractor Truck. Mid-range tractor truck for regional transport. Engine: Weichai or Cummins (280-350 kW). GVW: 30-40 ton. Transmission: Manual. Cabin: Standard cab. Fuel Tank: 450L. Ideal for medium-haul routes.'
      },
      {
        id: 'shac-f3000-8x4-dump',
        model: 'F3000 8×4 Dump',
        name: 'Dump Truck',
        specs: '8×4 | 320-380 kW | 40-50 ton GVW',
        image: '/manus-storage/shacman_f3000_8x4_dump_91cb04ea.jpeg',
        description: 'Shacman F3000 8×4 Dump Truck. Heavy-duty dump truck for construction and mining. Engine: Weichai or Cummins (320-380 kW). GVW: 40-50 ton. Cargo Capacity: 22-26 m³. Hydraulic System: 280 bar. Perfect for large-scale earthmoving.'
      },
      {
        id: 'shac-f3000-h3000-mixer',
        model: 'F3000/H3000 Mixer',
        name: 'Concrete Mixer Truck',
        specs: '8×4 | 320-380 kW | 40-50 ton GVW',
        image: '/manus-storage/shacman_f3000_h3000_mixer_a2062d6e.jpeg',
        description: 'Shacman F3000/H3000 Concrete Mixer Truck. Heavy-duty mixer truck for construction. Engine: Weichai or Cummins (320-380 kW). GVW: 40-50 ton. Mixer Capacity: 9-12 m³. Hydraulic System: 280 bar. Ideal for construction projects.'
      },
      {
        id: 'shac-h3000-6x4-dump',
        model: 'H3000 6×4 Dump',
        name: 'Dump Truck',
        specs: '6×4 | 280-350 kW | 30-40 ton GVW',
        image: '/manus-storage/shacman_h3000_6x4_dump_edf8c6e7.jpeg',
        description: 'Shacman H3000 6×4 Dump Truck. Mid-range dump truck for construction. Engine: Weichai or Cummins (280-350 kW). GVW: 30-40 ton. Cargo Capacity: 18-22 m³. Hydraulic System: 280 bar. Perfect for medium-scale projects.'
      },
      {
        id: 'shac-h3000-6x4-tractor',
        model: 'H3000 6×4 Tractor',
        name: 'Tractor Truck',
        specs: '6×4 | 280-350 kW | 30-40 ton GVW',
        image: '/manus-storage/shacman_h3000_6x4_tractor_e130f2bc.jpeg',
        description: 'Shacman H3000 6×4 Tractor Truck. Mid-range tractor truck for regional transport. Engine: Weichai or Cummins (280-350 kW). GVW: 30-40 ton. Transmission: Manual. Cabin: Standard cab. Fuel Tank: 450L. Ideal for medium-haul routes.'
      },
      {
        id: 'shac-x3000-6x4-tractor',
        model: 'X3000 6×4 Tractor',
        name: 'Tractor Truck',
        specs: '6×4 | 300-350 kW | 35-45 ton GVW',
        image: '/manus-storage/shacman_x3000_6x4_tractor_0e4c3c29.jpeg',
        description: 'Shacman X3000 6×4 Tractor Truck. Advanced tractor truck for long-haul transport. Engine: Weichai (300-350 kW). GVW: 35-45 ton. Transmission: Automatic. Cabin: Luxury cab with air suspension. Fuel Tank: 550L. Perfect for international routes.'
      },
      {
        id: 'shac-x5000-6x4-dump',
        model: 'X5000 6×4 Dump',
        name: 'Dump Truck',
        specs: '6×4 | 300-350 kW | 35-45 ton GVW',
        image: '/manus-storage/shacman_x5000_6x4_dump_a2b42228.jpeg',
        description: 'Shacman X5000 6×4 Dump Truck. Advanced dump truck for construction. Engine: Weichai (300-350 kW). GVW: 35-45 ton. Cargo Capacity: 20-24 m³. Cabin: Luxury cab. Ideal for modern construction projects.'
      },
      {
        id: 'shac-x5000-6x4-tractor',
        model: 'X5000 6×4 Tractor',
        name: 'Tractor Truck',
        specs: '6×4 | 300-350 kW | 35-45 ton GVW',
        image: '/manus-storage/shacman_x5000_6x4_tractor_3433f0e8.jpeg',
        description: 'Shacman X5000 6×4 Tractor Truck. Premium tractor truck for long-haul transport. Engine: Weichai (300-350 kW). GVW: 35-45 ton. Transmission: Automatic. Cabin: Luxury sleeper cab. Fuel Tank: 550L. Perfect for international transport.'
      },
      {
        id: 'shac-x6000-6x4-tractor',
        model: 'X6000 6×4 Tractor',
        name: 'Premium Tractor Truck',
        specs: '6×4 | 350-400 kW | 40-50 ton GVW',
        image: '/manus-storage/shacman_x6000_6x4_tractor_1e0e8036.jpeg',
        description: 'Shacman X6000 6×4 Tractor Truck. Premium tractor truck for long-haul transport. Engine: Weichai (350-400 kW). GVW: 40-50 ton. Transmission: Automatic. Cabin: Luxury sleeper cab with advanced features. Fuel Tank: 600L. Perfect for premium international transport.'
      }],
    spareParts: [
      { id: 'sm-sp-1', partNumber: 'DZ96189584001', name: '机油滤清器 (Engine Oil Filter)', description: '陕汽原厂机油滤清器，高效过滤发动机机油中的杂质和金属颗粒，保护发动机。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴 WD615、WD10、WD12 或康明斯 Cummins。规格：纸质滤芯，流量 80L/min，工作温度 -40~120℃。', image: '/manus-storage/e1SPKaMyXaFf_aadcedec.webp', category: 'Lubrication System' },
      { id: 'sm-sp-2', partNumber: 'DZ96189584002', name: '燃油滤清器 (Fuel Filter)', description: '陕汽原厂燃油滤清器，精密过滤燃油中的杂质和水分，提高喷油精度。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：纸质滤芯，过滤精度 10μm，工作压力 0.3-0.5bar。', image: '/manus-storage/eoA6y2Zpvbnr_66a73ae1.webp', category: 'Fuel System' },
      { id: 'sm-sp-3', partNumber: 'DZ96189584003', name: '空气滤清器 (Air Filter)', description: '陕汽高效空气滤清器，有效过滤进气中的灰尘和颗粒，保证发动机进气清洁。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：纸质滤芯，过滤精度 5μm，流量 250m³/h。', image: '/manus-storage/5HS49kYwkL3T_7c6d3cb5.jpg', category: 'Engine System' },
      { id: 'sm-sp-4', partNumber: 'DZ96189584004', name: '活塞环套件 (Piston Ring Set)', description: '陕汽原厂活塞环，精密加工，耐高温耐磨损，密封活塞和气缸，防止气体泄漏。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：铸铁，厚度 1.5-2mm，工作温度 300℃。', image: '/manus-storage/Py7BOJxipE3Q_b819d746.jpg', category: 'Engine System' },
      { id: 'sm-sp-5', partNumber: 'DZ96189584005', name: '油封组件 (Oil Seal Set)', description: '陕汽发动机油封组件，防止机油泄漏，保护发动机密封。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：氟橡胶油封，工作温度 -40~150℃。', image: '/manus-storage/ehiFwnwf5Plz_a367baae.jpg', category: 'Engine System' },
      { id: 'sm-sp-6', partNumber: 'DZ96189584006', name: '水泵总成 (Water Pump Assembly)', description: '陕汽冷却水泵总成，高效循环冷却液，采用铝制泵体，保持发动机工作温度。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：铝制泵体，流量 100L/min，工作温度 -40~120℃。', image: '/manus-storage/gK1ib54AVxRC_8bf1988d.jpg', category: 'Cooling System' },
      { id: 'sm-sp-7', partNumber: 'DZ96189584007', name: '节温器 (Thermostat)', description: '陕汽冷却系统节温器，精确控制冷却液温度，提高发动机效率，降低油耗。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。发动机型号：潍柴或康明斯。规格：黄铜阀芯，开启温度 82℃，工作压力 0.5bar。', image: '/manus-storage/lo6JlAgkaXRI_a13ef9ba.jpg', category: 'Cooling System' },
      { id: 'sm-sp-8', partNumber: 'DZ96189584008', name: '制动垫片 (Brake Pad Set)', description: '陕汽原厂制动垫片，高摩擦系数，耐高温耐磨损，确保制动安全。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：半金属垫片，厚度 12-15mm，工作温度 -40~350℃。', image: '/manus-storage/H9y4FpXxw85c_e8344166.png', category: 'Brake System' },
      { id: 'sm-sp-9', partNumber: 'DZ96189584009', name: '离合器片 (Clutch Plate)', description: '陕汽原厂离合器片，高摩擦系数，耐高温，确保传动平稳。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铜基烧结，厚度 4.5mm，工作温度 -40~300℃。', image: '/manus-storage/eTlFABJlgUIk_46ac34c8.png', category: 'Transmission System' },
      { id: 'sm-sp-10', partNumber: 'DZ96189584010', name: '变速箱支架 (Gearbox Support)', description: '陕汽变速箱支架，承载变速箱重量，减震降噪。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铸铁支架，重量 8kg，工作温度 -40~80℃。', image: '/manus-storage/kAzjE4mH041q_1cc2e18b.png', category: 'Transmission System' },
      { id: 'sm-sp-11', partNumber: 'DZ96189584011', name: '后悬架 (Rear Suspension)', description: '陕汽后悬架总成，采用钢板弹簧设计，提供稳定的悬挂效果。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：钢板弹簧，承载能力 15吨，工作温度 -40~80℃。', image: '/manus-storage/sIH1eg74EIHg_7a3bffdd.png', category: 'Suspension System' },
      { id: 'sm-sp-12', partNumber: 'DZ96189584012', name: '悬架弹簧 (Leaf Spring)', description: '陕汽悬架钢板弹簧，承载重量，缓冲颠簸。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：锰钢弹簧，厚度 8mm，承载能力 10吨。', image: '/manus-storage/Vqa5xEv6OQPa_5a4e6006.jpg', category: 'Suspension System' },
      { id: 'sm-sp-13', partNumber: 'DZ96189584013', name: '交流发电机 (Alternator)', description: '陕汽原厂交流发电机，为电气系统供电，保证车辆正常运行。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：输出功率 120A，输出电压 14V，工作温度 -40~120℃。', image: '/manus-storage/rha4WtBc2lpV_52d7f2e8.jpg', category: 'Electrical System' },
      { id: 'sm-sp-14', partNumber: 'DZ96189584014', name: '启动马达 (Starter Motor)', description: '陕汽启动马达，快速启动发动机。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：功率 5.5kW，转速 11000rpm，工作温度 -40~120℃。', image: '/manus-storage/xHLvVTuk4XqP_1f965fe1.jpg', category: 'Electrical System' },
      { id: 'sm-sp-15', partNumber: 'DZ96189584015', name: '电池 (Battery)', description: '陕汽原厂蓄电池，提供启动电流，稳定供电。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：12V 200Ah，冷启动电流 1500A，工作温度 -40~65℃。', image: '/manus-storage/yX87GzCvbe04_c21db199.jpg', category: 'Electrical System' },
      { id: 'sm-sp-16', partNumber: 'DZ96189584016', name: '液压制动系统 (Hydraulic Brake System)', description: '陕汽液压制动系统，提供强大制动力，确保安全。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：工作压力 280bar，制动力 50吨，响应时间 0.1s。', image: '/manus-storage/58dRus5sseim_e2517033.jpg', category: 'Brake System' },
      { id: 'sm-sp-17', partNumber: 'DZ96189584017', name: '变速箱滤清器 (Transmission Filter)', description: '陕汽变速箱滤清器，过滤变速箱油中的杂质，保护变速箱。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：纸质滤芯，过滤精度 10μm，流量 50L/min。', image: '/manus-storage/l6Db14lg7gq8_e3b87d09.png', category: 'Transmission System' },
      { id: 'sm-sp-18', partNumber: 'DZ96189584018', name: '减震器 (Shock Absorber)', description: '陕汽减震器，吸收路面冲击，提高乘坐舒适度。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：双筒式，行程 200mm，工作压力 15bar。', image: '/manus-storage/7NGBLv06H284_2a195f08.jpg', category: 'Suspension System' },
      { id: 'sm-sp-19', partNumber: 'DZ96189584019', name: '离合器压盘 (Clutch Cover)', description: '陕汽离合器压盘，与离合器片配合，实现动力传递。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铸铁压盘，直径 350mm，压力 1200N。', image: '/manus-storage/Ge7H3bUW6F8c_a1710576.jpg', category: 'Transmission System' },
      { id: 'sm-sp-20', partNumber: 'DZ96189584020', name: '缸盖垫 (Cylinder Head Gasket)', description: '陕汽缸盖垫，防止冷却液和机油泄漏，确保发动机密封。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：多层钢板垫，厚度 1.5mm，工作温度 -40~150℃。', image: '/manus-storage/luWJm8JCFur4_8e224124.webp', category: 'Engine System' },
      { id: 'sm-sp-21', partNumber: 'DZ96189584021', name: '轴承套件 (Bearing Kit)', description: '陕汽轴承套件，包含多种规格轴承，用于变速箱和差速器。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：深沟球轴承，精度等级 P6，工作温度 -40~120℃。', image: '/manus-storage/Oo8MIcQYU94D_7be51583.webp', category: 'Transmission System' },
      { id: 'sm-sp-22', partNumber: 'DZ96189584022', name: '差速器总成 (Differential Assembly)', description: '陕汽差速器总成，实现左右车轮差速转动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：行星齿轮式，齿比 3.73，工作温度 -40~80℃。', image: '/manus-storage/X7Pq7vOxnbcE_3ee93f6d.webp', category: 'Transmission System' },
      { id: 'sm-sp-23', partNumber: 'DZ96189584023', name: '转向节销 (Kingpin)', description: '陕汽转向节销，连接转向节和车轴，支撑前轮。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：锻钢，直径 40mm，长度 180mm。', image: '/manus-storage/ku1aLlq3pDBg_ad36e387.jpg', category: 'Suspension System' },
      { id: 'sm-sp-24', partNumber: 'DZ96189584024', name: '转向节销套件 (Kingpin Kit)', description: '陕汽转向节销套件，包含销、衬套、垫片等配件。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：完整套件，包含所有密封件，工作温度 -40~80℃。', image: '/manus-storage/PdzRxVISVOV0_f68c6842.jpg', category: 'Suspension System' },
      { id: 'sm-sp-25', partNumber: 'DZ96189584025', name: '喷油泵 (Fuel Injection Pump)', description: '陕汽柴油喷油泵，为发动机供应高压燃油。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：高压泵，工作压力 250bar，流量 80L/h。', image: '/manus-storage/9WJLlPn4LQEa_29d2d462.jpg', category: 'Fuel System' },
      { id: 'sm-sp-26', partNumber: 'DZ96189584026', name: '喷油器座 (Fuel Injector Seat)', description: '陕汽喷油器座，固定喷油器，防止泄漏。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铜合金座，螺纹 M14×1.5，工作温度 -40~200℃。', image: '/manus-storage/gC9wNjS849An_6f7154f8.jpg', category: 'Fuel System' },
      { id: 'sm-sp-27', partNumber: 'DZ96189584027', name: '散热器 (Radiator)', description: '陕汽铝制散热器，高效散热，保持发动机工作温度。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铝制芯体，散热面积 2.5m²，工作压力 1.5bar。', image: '/manus-storage/uTleBWqFZum7_6d0ccaae.png', category: 'Cooling System' },
      { id: 'sm-sp-28', partNumber: 'DZ96189584028', name: '冷却液软管 (Coolant Hose)', description: '陕汽冷却液软管，连接散热器和水泵，耐高温。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：橡胶软管，内径 32mm，工作温度 -40~120℃。', image: '/manus-storage/pbNdRJKcOx7s_ecb5ff65.webp', category: 'Cooling System' },
      { id: 'sm-sp-29', partNumber: 'DZ96189584029', name: '转向柱支撑轴承 (Steering Column Bearing)', description: '陕汽转向柱支撑轴承，支撑转向柱，减少摩擦。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：球面滚子轴承，工作温度 -40~80℃。', image: '/manus-storage/9wvTRl99wcMX_8eba63a6.jpg', category: 'Steering System' },
      { id: 'sm-sp-30', partNumber: 'DZ96189584030', name: '转向节联轴节 (Steering Joint)', description: '陕汽转向节联轴节，连接转向柱和转向齿轮，传递转向力。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：万向节，直径 30mm，工作温度 -40~80℃。', image: '/manus-storage/JdVEya1tJQz2_b771f93b.jpg', category: 'Steering System' },
      { id: 'sm-sp-31', partNumber: 'DZ96189584031', name: '油箱盖 (Fuel Tank Cap)', description: '陕汽油箱盖，防止燃油泄漏和蒸发。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：塑料盖，开启压力 0.5bar，工作温度 -40~80℃。', image: '/manus-storage/3RuFb2S6PHyp_4ade1fc3.jpg', category: 'Fuel System' },
      { id: 'sm-sp-32', partNumber: 'DZ96189584032', name: '玻璃水储液罐盖 (Washer Reservoir Cap)', description: '陕汽玻璃水储液罐盖，防止液体泄漏。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：塑料盖，螺纹接口，工作温度 -40~60℃。', image: '/manus-storage/DsuqePZsEFya_fedd03c1.webp', category: 'Electrical System' },
      { id: 'sm-sp-33', partNumber: 'DZ96189584033', name: '座椅控制开关 (Seat Control Switch)', description: '陕汽电动座椅控制开关，调节座椅位置和靠背。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：3针开关，电压 12V，工作温度 -40~80℃。', image: '/manus-storage/utzh5e7pKw9x_3e5c0eff.jpg', category: 'Electrical System' },
      { id: 'sm-sp-34', partNumber: 'DZ96189584034', name: '转向柱下支撑轴承 (Lower Steering Column Bearing)', description: '陕汽转向柱下支撑轴承，支撑转向柱下端。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：滚针轴承，工作温度 -40~80℃。', image: '/manus-storage/6zsxgXqTrKcO_288eb5e1.jpg', category: 'Steering System' },
      { id: 'sm-sp-35', partNumber: 'DZ96189584035', name: '玻璃水储液罐盖（重型卡车）(Washer Reservoir Cap Heavy Duty)', description: '陕汽重型卡车玻璃水储液罐盖，耐压耐温。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：加强型塑料盖，工作温度 -40~60℃。', image: '/manus-storage/Oo8MIcQYU94D_7be51583.webp', category: 'Electrical System' },
      { id: 'sm-sp-36', partNumber: 'DZ96189584036', name: '座椅加热控制开关 (Seat Heating Switch)', description: '陕汽座椅加热控制开关，控制座椅加热功能。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：3档开关，电压 12V，功率 100W。', image: '/manus-storage/PdzRxVISVOV0_f68c6842.jpg', category: 'Electrical System' },
      { id: 'sm-sp-37', partNumber: 'DZ96189584037', name: '转向柱联轴节套件 (Steering Column Joint Kit)', description: '陕汽转向柱联轴节套件，包含所有连接件。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：完整套件，工作温度 -40~80℃。', image: '/manus-storage/9wvTRl99wcMX_8eba63a6.jpg', category: 'Steering System' },
      { id: 'sm-sp-38', partNumber: 'DZ96189584038', name: '发动机垫片套件 (Engine Gasket Kit)', description: '陕汽发动机垫片套件，包含所有发动机垫片。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：完整套件，包含缸盖垫、油底壳垫等。', image: '/manus-storage/JdVEya1tJQz2_b771f93b.jpg', category: 'Engine System' },
      { id: 'sm-sp-39', partNumber: 'DZ96189584039', name: '制动软管 (Brake Hose)', description: '陕汽制动软管，传输制动液，耐高压。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：橡胶软管，内径 10mm，工作压力 280bar。', image: '/manus-storage/k9iofFnUAOYC_363c61d0.png', category: 'Brake System' },
      { id: 'sm-sp-40', partNumber: 'DZ96189584040', name: '制动总泵 (Brake Master Cylinder)', description: '陕汽制动总泵，产生制动压力，控制制动系统。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：双腔总泵，排量 50ml，工作压力 280bar。', image: '/manus-storage/oHjbrEot2X81_9f3574c3.webp', category: 'Brake System' },
      { id: 'sm-sp-41', partNumber: 'DZ96189584041', name: '制动分泵 (Brake Wheel Cylinder)', description: '陕汽制动分泵，推动制动蹄，实现制动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：双活塞分泵，排量 25ml，工作压力 280bar。', image: '/manus-storage/mRpaJf7e6swT_ac3611b6.webp', category: 'Brake System' },
      { id: 'sm-sp-42', partNumber: 'DZ96189584042', name: '制动盘 (Brake Disc)', description: '陕汽制动盘，与制动垫片配合，实现制动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铸铁盘，厚度 30mm，直径 330mm。', image: '/manus-storage/mR4Pir0ztUBS_2a5cfcfc.webp', category: 'Brake System' },
      { id: 'sm-sp-43', partNumber: 'DZ96189584043', name: '制动鼓 (Brake Drum)', description: '陕汽制动鼓，与制动蹄配合，实现制动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铸铁鼓，直径 330mm，厚度 12mm。', image: '/manus-storage/lm4KRBZfLNLU_a6b889dd.webp', category: 'Brake System' },
      { id: 'sm-sp-44', partNumber: 'DZ96189584044', name: '制动蹄 (Brake Shoe)', description: '陕汽制动蹄，与制动鼓配合，实现制动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：铸铁蹄，长度 250mm，宽度 60mm。', image: '/manus-storage/Cgoga9i8UKSi_8bfc8367.png', category: 'Brake System' },
      { id: 'sm-sp-45', partNumber: 'DZ96189584045', name: '空气制动阀 (Air Brake Valve)', description: '陕汽空气制动阀，控制空气制动系统。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：电磁阀，工作压力 6-8bar，响应时间 0.1s。', image: '/manus-storage/XFXeeTbb8OWJ_a878ec54.webp', category: 'Brake System' },
      { id: 'sm-sp-46', partNumber: 'DZ96189584046', name: '空气压缩机 (Air Compressor)', description: '陕汽空气压缩机，为空气制动系统供气。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：排量 100L/min，工作压力 8bar，功率 5kW。', image: '/manus-storage/YIhWT7x9aSh3_d749ccde.webp', category: 'Brake System' },
      { id: 'sm-sp-47', partNumber: 'DZ96189584047', name: '空气干燥器 (Air Dryer)', description: '陕汽空气干燥器，干燥压缩空气，防止结冰。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：吸收式干燥器，处理能力 100L/min。', image: '/manus-storage/Tc8DG4d4KHXE_35b27165.webp', category: 'Brake System' },
      { id: 'sm-sp-48', partNumber: 'DZ96189584048', name: '储气罐 (Air Tank)', description: '陕汽储气罐，储存压缩空气，稳定系统压力。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：钢制罐，容积 100L，工作压力 8bar。', image: '/manus-storage/zohBkcU4aRAj_17a1039f.webp', category: 'Brake System' },
      { id: 'sm-sp-49', partNumber: 'DZ96189584049', name: '前轮毂轴承 (Front Wheel Hub Bearing)', description: '陕汽前轮毂轴承，支撑前轮，减少摩擦。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：圆锥滚子轴承，工作温度 -40~120℃。', image: '/manus-storage/LqSXMYuT9rRz_c173962c.png', category: 'Suspension System' },
      { id: 'sm-sp-50', partNumber: 'DZ96189584050', name: '后轮毂轴承 (Rear Wheel Hub Bearing)', description: '陕汽后轮毂轴承，支撑后轮，减少摩擦。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：圆锥滚子轴承，工作温度 -40~120℃。', image: '/manus-storage/XTo98a90f5zv_ac9d8409.png', category: 'Suspension System' },
      { id: 'sm-sp-51', partNumber: 'DZ96189584051', name: '转向拉杆 (Steering Tie Rod)', description: '陕汽转向拉杆，连接转向齿轮和转向节，传递转向力。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：锻钢杆，长度 800mm，工作温度 -40~80℃。', image: '/manus-storage/ZqWLRktfi4E1_32ead5cf.png', category: 'Steering System' },
      { id: 'sm-sp-52', partNumber: 'DZ96189584052', name: '转向拉杆端头 (Tie Rod End)', description: '陕汽转向拉杆端头，连接拉杆和转向节。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：球头端头，螺纹 M20×1.5，工作温度 -40~80℃。', image: '/manus-storage/kBF28pSE4jo2_10cc9723.png', category: 'Steering System' },
      { id: 'sm-sp-53', partNumber: 'DZ96189584053', name: '转向齿轮 (Steering Gear)', description: '陕汽转向齿轮，将转向柱的旋转转换为拉杆的直线运动。兼容车型：陕汽 F3000、H3000、X3000、X5000、X6000 等。规格：齿条齿轮式，传动比 16:1，工作温度 -40~80℃。', image: '/manus-storage/n4y9t1gRbigZ_f4160cdf.png', category: 'Steering System' },
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
    machines: [      {
        id: 'sino-howo-4x2',
        model: 'HOWO 4×2',
        name: 'Tractor Truck',
        specs: '4×2 | 220-280 kW | 20-30 ton GVW',
        image: '/manus-storage/sinotruck_howo_4x2_tractor_e84d4439.jpeg',
        description: 'Sinotruck HOWO 4×2 Tractor Truck. Light to mid-range tractor truck for regional transport. Engine: Weichai or Cummins (220-280 kW). GVW: 20-30 ton. Transmission: Manual. Cabin: Standard cab. Fuel Tank: 400L. Ideal for short to medium-haul routes.'
      },
      {
        id: 'sino-howo-6x4-tanker',
        model: 'HOWO 6×4 Tanker',
        name: 'Tanker Truck',
        specs: '6×4 | 280-350 kW | 30-40 ton GVW',
        image: '/manus-storage/sinotruck_howo_6x4_tanker_ac5aa97d.jpeg',
        description: 'Sinotruck HOWO 6×4 Tanker Truck. Heavy-duty tanker truck for liquid transport. Engine: Weichai or Cummins (280-350 kW). GVW: 30-40 ton. Tank Capacity: 15-25 m³. Hydraulic System: 280 bar. Perfect for fuel and chemical transport.'
      },
      {
        id: 'sino-howo-6x4-dump',
        model: 'HOWO 6×4 Dump',
        name: 'Dump Truck',
        specs: '6×4 | 280-350 kW | 30-40 ton GVW',
        image: '/manus-storage/sinotruck_howo7_6x4_dump_33adf304.jpeg',
        description: 'Sinotruck HOWO 6×4 Dump Truck. Heavy-duty dump truck for construction and mining. Engine: Weichai or Cummins (280-350 kW). GVW: 30-40 ton. Cargo Capacity: 18-22 m³. Hydraulic System: 280 bar. Perfect for large-scale earthmoving.'
      },
      {
        id: 'sino-howo-8x4-mixer',
        model: 'HOWO 8×4 Mixer',
        name: 'Concrete Mixer Truck',
        specs: '8×4 | 320-380 kW | 40-50 ton GVW',
        image: '/manus-storage/sinotruck_howo_8x4_mixer_3b9cc575.jpeg',
        description: 'Sinotruck HOWO 8×4 Concrete Mixer Truck. Ultra-heavy-duty mixer truck for construction. Engine: Weichai or Cummins (320-380 kW). GVW: 40-50 ton. Mixer Capacity: 8-12 m³. Hydraulic System: 280 bar. Ideal for large construction projects.'
      },
      {
        id: 'sino-howo-8x4-dump',
        model: 'HOWO 8×4 Dump',
        name: 'Dump Truck',
        specs: '8×4 | 320-380 kW | 40-50 ton GVW',
        image: '/manus-storage/sinotruck_howo7_8x4_dump_57063461.jpeg',
        description: 'Sinotruck HOWO 8×4 Dump Truck. Ultra-heavy-duty dump truck for mining and large construction projects. Engine: Weichai or Cummins (320-380 kW). GVW: 40-50 ton. Cargo Capacity: 25-30 m³. Hydraulic System: 280 bar. Ideal for mining operations.'
      },
      {
        id: 'sino-howo-t7s',
        model: 'HOWO T7S',
        name: 'Premium Dump Truck',
        specs: '6×4 | 300-350 kW | 35-45 ton GVW',
        image: '/manus-storage/sinotruck_howo_t7s_dump_15750202.jpeg',
        description: 'Sinotruck HOWO T7S Premium Dump Truck. Advanced dump truck with improved comfort and efficiency. Engine: Weichai (300-350 kW). GVW: 35-45 ton. Cargo Capacity: 20-25 m³. Cabin: Luxury cab with air suspension. Ideal for modern construction projects.'
      },
      {
        id: 'sino-howo-tx',
        model: 'HOWO TX',
        name: 'Tractor Truck',
        specs: '6×4 | 350-400 kW | 40-50 ton GVW',
        image: '/manus-storage/sinotruck_howo_tx_b9712232.jpeg',
        description: 'Sinotruck HOWO TX Tractor Truck. Premium tractor truck for long-haul transport. Engine: Weichai (350-400 kW). GVW: 40-50 ton. Transmission: Automatic. Cabin: Luxury sleeper cab. Fuel Tank: 600L. Perfect for international transport.'
      },
      {
        id: 'sino-howo-tx-dump',
        model: 'HOWO TX Dump',
        name: 'Dump Truck',
        specs: '8×4 | 350-400 kW | 45-55 ton GVW',
        image: '/manus-storage/sinotruck_howo_tx_dump_ac0a564b.jpeg',
        description: 'Sinotruck HOWO TX Dump Truck. Premium dump truck with advanced features. Engine: Weichai (350-400 kW). GVW: 45-55 ton. Cargo Capacity: 28-32 m³. Cabin: Luxury cab with air suspension. Ideal for premium mining operations.'
      },
      {
        id: 'sino-howo-t7h-concrete',
        model: 'HOWO T7H Concrete',
        name: 'Concrete Mixer Truck',
        specs: '8×4 | 340-380 kW | 45-55 ton GVW',
        image: '/manus-storage/sinotruck_howo_t7h_concrete_67c9ea13.webp',
        description: 'Sinotruck HOWO T7H Concrete Mixer Truck. Premium concrete mixer truck for large projects. Engine: Weichai (340-380 kW). GVW: 45-55 ton. Mixer Capacity: 10-14 m³. Hydraulic System: 280 bar. Ideal for major construction projects.'
      },
      {
        id: 'sino-sitrak-c7h',
        model: 'SITRAK C7H',
        name: 'Tractor Truck',
        specs: '6×4 | 350-400 kW | 40-50 ton GVW',
        image: '/manus-storage/sinotruck_sitrak_c7h_908612b6.jpeg',
        description: 'Sinotruck SITRAK C7H Tractor Truck. Premium tractor truck for long-haul transport. Engine: Weichai (350-400 kW). GVW: 40-50 ton. Transmission: Automatic. Cabin: Luxury sleeper cab with air suspension. Fuel Tank: 700L. Perfect for international transport.'
      },
      {
        id: 'sino-sitrak-c7h-mixer',
        model: 'SITRAK C7H Mixer',
        name: 'Concrete Mixer Truck',
        specs: '8×4 | 350-400 kW | 45-55 ton GVW',
        image: '/manus-storage/sinotruck_sitrak_c7h_mixer_c839b060.jpeg',
        description: 'Sinotruck SITRAK C7H Concrete Mixer Truck. Premium concrete mixer with advanced features. Engine: Weichai (350-400 kW). GVW: 45-55 ton. Mixer Capacity: 10-14 m³. Cabin: Luxury cab. Ideal for premium construction projects.'
      },
      {
        id: 'sino-howo-7',
        model: 'HOWO 7',
        name: 'Heavy Duty Truck',
        specs: '8×4 | 380-430 kW | 50-60 ton GVW',
        image: '/manus-storage/sinotruck_howo7_069ca297.jpeg',
        description: 'Sinotruck HOWO 7 Heavy Duty Truck. Latest generation heavy-duty truck with maximum power. Engine: Weichai or Cummins (380-430 kW). GVW: 50-60 ton. Cargo Capacity: 30-35 m³. Advanced hydraulic system. Perfect for extreme mining and construction.'
      }],
    spareParts: [
      // Lubrication System
      { id: 'st-sp-1', partNumber: 'VG1560118229', name: '机油滤清器 (Engine Oil Filter)', description: '重汽豪沃原厂机油滤清器，高效过滤发动机机油中的杂质和金属颗粒，保护发动机。兼容车型：重汽 HOWO 4×2、6×4、8×4、T7S、TX、SITRAK C7H 等。发动机型号：潍柴 WD615、WD10、WD12 或康明斯。规格：纸质滤芯，流量 120L/min，工作温度 -40~120℃。', image: '/manus-storage/ucpUdUZdpIAr_0fcb9d5f.webp', category: 'Lubrication System' },
      { id: 'st-sp-2', partNumber: 'VG1560080012', name: '机油泵 (Oil Pump)', description: '重汽豪沃机油泵，为发动机润滑系统供油。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：排量 8.5cc/rev，工作压力 0.5-0.8bar。', image: '/manus-storage/fcPGf6qqKLeF_220f6fb4.jpg', category: 'Lubrication System' },
      { id: 'st-sp-3', partNumber: 'VG1560080013', name: '机油滤清器座 (Oil Filter Seat)', description: '重汽豪沃机油滤清器座，连接机油滤清器和发动机。兼容车型：重汽 HOWO 系列。规格：铸铁，工作压力 0.8bar。', image: '/manus-storage/8yoUd9lwI4QU_fb1bcb17.jpg', category: 'Lubrication System' },
      
      // Fuel System
      { id: 'st-sp-4', partNumber: 'VG1560080012', name: '燃油滤清器 (Fuel Filter)', description: '重汽豪沃原厂燃油滤清器，精密过滤燃油中的杂质和水分，提高喷油精度。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：纸质滤芯，过滤精度 10μm，工作压力 0.3-0.5bar。', image: '/manus-storage/PdEw62cQZKqP_ac3ef499.webp', category: 'Fuel System' },
      { id: 'st-sp-5', partNumber: 'WG9925551410', name: '燃油滤清器总成 (Fuel Filter Assembly)', description: '重汽豪沃燃油滤清器总成，含滤芯和座。兼容车型：重汽 HOWO 系列。规格：纸质滤芯，过滤精度 5μm，工作压力 0.5bar。', image: '/manus-storage/o9DYZg0gms0G_2a6014f9.jpg', category: 'Fuel System' },
      { id: 'st-sp-6', partNumber: 'VG1560080011', name: '喷油器 (Fuel Injector)', description: '重汽豪沃原厂喷油器，精密喷射燃油到气缸。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：喷油压力 200bar，喷油量 50mm³/st。', image: '/manus-storage/3yVLeyGHnP5n_3fcfe09f.webp', category: 'Fuel System' },
      { id: 'st-sp-7', partNumber: 'VG1560080010', name: '高压油管 (High Pressure Fuel Pipe)', description: '重汽豪沃高压燃油管，连接喷油泵和喷油器。兼容车型：重汽 HOWO 系列。规格：工作压力 200bar，长度 1.2m。', image: '/manus-storage/ZX4YdBMDdIvf_a58a6b13.jpg', category: 'Fuel System' },
      
      // Engine System
      { id: 'st-sp-8', partNumber: 'VG1560118230', name: '空气滤清器 (Air Filter)', description: '重汽豪沃高效空气滤清器，有效过滤进气中的灰尘和颗粒，保证发动机进气清洁。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：纸质滤芯，过滤精度 5μm，流量 250m³/h。', image: '/manus-storage/keKWTf7psn43_42aec80d.jpg', category: 'Engine System' },
      { id: 'st-sp-9', partNumber: 'VG1560118231', name: '活塞环套件 (Piston Ring Set)', description: '重汽豪沃原厂活塞环，精密加工，耐高温耐磨损，密封活塞和气缸，防止气体泄漏。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：铸铁，厚度 1.5-2mm，工作温度 300℃。', image: '/manus-storage/lqsRdwHew27F_d931e63d.jpg', category: 'Engine System' },
      { id: 'st-sp-10', partNumber: 'VG1560118232', name: '气门油封 (Valve Oil Seal)', description: '重汽豪沃气门油封，防止机油进入气缸，保护发动机。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：氟橡胶油封，工作温度 -40~150℃。', image: '/manus-storage/QEmbgAIpztPF_520f4185.webp', category: 'Engine System' },
      { id: 'st-sp-11', partNumber: 'VG1560118233', name: '进气门 (Intake Valve)', description: '重汽豪沃进气门，控制进气流量。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：钛合金，直径 45mm，工作温度 400℃。', image: '/manus-storage/yvtgySs57Yno_3df46036.webp', category: 'Engine System' },
      { id: 'st-sp-12', partNumber: 'VG1560118234', name: '排气门 (Exhaust Valve)', description: '重汽豪沃排气门，排出燃烧废气。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：钛合金，直径 42mm，工作温度 450℃。', image: '/manus-storage/panh7ArNe8Kz_5454ef99.webp', category: 'Engine System' },
      { id: 'st-sp-13', partNumber: 'VG1560118235', name: '缸盖垫 (Cylinder Head Gasket)', description: '重汽豪沃缸盖垫，密封气缸盖和缸体。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：石棉垫，厚度 1.5mm，工作压力 25bar。', image: '/manus-storage/dE26oJpkG7vY_85a0cb88.jpg', category: 'Engine System' },
      { id: 'st-sp-14', partNumber: 'VG1560118236', name: '前油封 (Front Oil Seal)', description: '重汽豪沃曲轴前油封，防止机油泄漏。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：氟橡胶油封，工作温度 -40~150℃。', image: '/manus-storage/BHGlWOSjhU5w_9f29cc56.webp', category: 'Engine System' },
      { id: 'st-sp-15', partNumber: 'VG1560118237', name: '后油封 (Rear Oil Seal)', description: '重汽豪沃曲轴后油封，防止机油泄漏。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：氟橡胶油封，工作温度 -40~150℃。', image: '/manus-storage/baN8ShRqAIuM_6af4f6db.webp', category: 'Engine System' },
      
      // Cooling System
      { id: 'st-sp-16', partNumber: 'VG1560118238', name: '水泵总成 (Water Pump Assembly)', description: '重汽豪沃冷却水泵总成，高效循环冷却液，采用铝制泵体，保持发动机工作温度。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：铝制泵体，流量 100L/min，工作温度 -40~120℃。', image: '/manus-storage/m5OZXX2sDczn_4cc5bbb3.webp', category: 'Cooling System' },
      { id: 'st-sp-17', partNumber: 'VG1560118239', name: '节温器 (Thermostat)', description: '重汽豪沃冷却系统节温器，精确控制冷却液温度，提高发动机效率，降低油耗。兼容车型：重汽 HOWO 系列。发动机型号：潍柴或康明斯。规格：黄铜阀芯，开启温度 82℃，工作压力 0.5bar。', image: '/manus-storage/G0GeO0WrMAUD_64511560.webp', category: 'Cooling System' },
      { id: 'st-sp-18', partNumber: 'VG1560118240', name: '冷却液管 (Coolant Hose)', description: '重汽豪沃冷却液管，连接水泵、散热器和发动机。兼容车型：重汽 HOWO 系列。规格：橡胶管，直径 50mm，工作温度 -40~120℃。', image: '/manus-storage/0P7QMn0UmDbr_370e6c09.jpg', category: 'Cooling System' },
      { id: 'st-sp-19', partNumber: 'VG1560118241', name: '散热器 (Radiator)', description: '重汽豪沃散热器，散发冷却液的热量。兼容车型：重汽 HOWO 系列。规格：铝制，散热面积 2.5m²，工作压力 0.5bar。', image: '/manus-storage/dEjyxIKSGUQ9_da05659c.jpg', category: 'Cooling System' },
      { id: 'st-sp-20', partNumber: 'VG1560118242', name: '液压油冷却器 (Hydraulic Oil Cooler)', description: '重汽豪沃液压油冷却器，冷却液压系统油液。兼容车型：重汽 HOWO 系列。规格：铝制，散热面积 1.5m²，工作压力 280bar。', image: '/manus-storage/BHGlWOSjhU5w_9f29cc56.webp', category: 'Cooling System' },
      
      // Brake System
      { id: 'st-sp-21', partNumber: 'VG1560118243', name: '制动垫片 (Brake Pad Set)', description: '重汽豪沃原厂制动垫片，高摩擦系数，耐高温耐磨损，确保制动安全。兼容车型：重汽 HOWO 系列。规格：半金属垫片，厚度 12-15mm，工作温度 -40~350℃。', image: '/manus-storage/baN8ShRqAIuM_6af4f6db.webp', category: 'Brake System' },
      { id: 'st-sp-22', partNumber: 'WG9100443050', name: '前制动垫片 (Front Brake Pad)', description: '重汽豪沃前制动垫片，前轮制动。兼容车型：重汽 HOWO 系列。规格：半金属垫片，厚度 15mm，摩擦系数 0.45。', image: '/manus-storage/ucpUdUZdpIAr_0fcb9d5f.webp', category: 'Brake System' },
      { id: 'st-sp-23', partNumber: 'VG1560118244', name: '制动盘 (Brake Disc)', description: '重汽豪沃制动盘，与制动垫片配合实现制动。兼容车型：重汽 HOWO 系列。规格：铸铁盘，厚度 30mm，直径 370mm。', image: '/manus-storage/PdEw62cQZKqP_ac3ef499.webp', category: 'Brake System' },
      { id: 'st-sp-24', partNumber: 'VG1560118245', name: '制动蹄 (Brake Shoe)', description: '重汽豪沃制动蹄，鼓式制动系统。兼容车型：重汽 HOWO 系列。规格：铸铁蹄，厚度 8mm，工作温度 -40~350℃。', image: '/manus-storage/fcPGf6qqKLeF_220f6fb4.jpg', category: 'Brake System' },
      { id: 'st-sp-25', partNumber: 'VG1560118246', name: '制动软管 (Brake Hose)', description: '重汽豪沃制动软管，传输制动液压。兼容车型：重汽 HOWO 系列。规格：橡胶管，直径 12mm，工作压力 280bar。', image: '/manus-storage/8yoUd9lwI4QU_fb1bcb17.jpg', category: 'Brake System' },
      { id: 'st-sp-26', partNumber: 'VG1560118247', name: '制动总泵 (Brake Master Cylinder)', description: '重汽豪沃制动总泵，产生制动压力。兼容车型：重汽 HOWO 系列。规格：铸铁泵，直径 32mm，工作压力 280bar。', image: '/manus-storage/o9DYZg0gms0G_2a6014f9.jpg', category: 'Brake System' },
      { id: 'st-sp-27', partNumber: 'VG1560118248', name: '制动分泵 (Brake Wheel Cylinder)', description: '重汽豪沃制动分泵，推动制动垫片。兼容车型：重汽 HOWO 系列。规格：铸铁泵，直径 28mm，工作压力 280bar。', image: '/manus-storage/3yVLeyGHnP5n_3fcfe09f.webp', category: 'Brake System' },
      { id: 'st-sp-28', partNumber: 'VG1560118249', name: '空气压缩机 (Air Compressor)', description: '重汽豪沃空气压缩机，为气制动系统供气。兼容车型：重汽 HOWO 系列。规格：排气量 8.5L/min，工作压力 0.8bar。', image: '/manus-storage/ZX4YdBMDdIvf_a58a6b13.jpg', category: 'Brake System' },
      
      // Transmission System
      { id: 'st-sp-29', partNumber: 'VG1560118250', name: '离合器片 (Clutch Plate)', description: '重汽豪沃原厂离合器片，高摩擦系数，耐高温，确保传动平稳。兼容车型：重汽 HOWO 系列。规格：铜基烧结，厚度 4.5mm，工作温度 -40~300℃。', image: '/manus-storage/keKWTf7psn43_42aec80d.jpg', category: 'Transmission System' },
      { id: 'st-sp-30', partNumber: 'VG1560118251', name: '变速箱滤清器 (Transmission Filter)', description: '重汽豪沃变速箱滤清器，过滤变速箱油。兼容车型：重汽 HOWO 系列。规格：纸质滤芯，过滤精度 10μm，工作压力 0.5bar。', image: '/manus-storage/lqsRdwHew27F_d931e63d.jpg', category: 'Transmission System' },
      { id: 'st-sp-31', partNumber: 'VG1560118252', name: '变速箱支架 (Gearbox Support)', description: '重汽豪沃变速箱支架，承载变速箱重量，减震降噪。兼容车型：重汽 HOWO 系列。规格：铸铁支架，重量 8kg，工作温度 -40~80℃。', image: '/manus-storage/QEmbgAIpztPF_520f4185.webp', category: 'Transmission System' },
      { id: 'st-sp-32', partNumber: 'VG1560118253', name: '离合器压盘 (Clutch Pressure Plate)', description: '重汽豪沃离合器压盘，压紧离合器片。兼容车型：重汽 HOWO 系列。规格：铸铁盘，直径 350mm，工作温度 -40~300℃。', image: '/manus-storage/yvtgySs57Yno_3df46036.webp', category: 'Transmission System' },
      { id: 'st-sp-33', partNumber: 'VG1560118254', name: '轴承套件 (Bearing Kit)', description: '重汽豪沃轴承套件，支撑变速箱轴。兼容车型：重汽 HOWO 系列。规格：滚珠轴承，直径 50mm，工作温度 -40~120℃。', image: '/manus-storage/panh7ArNe8Kz_5454ef99.webp', category: 'Transmission System' },
      
      // Suspension System
      { id: 'st-sp-34', partNumber: 'VG1560118255', name: '后悬架 (Rear Suspension)', description: '重汽豪沃后悬架总成，采用钢板弹簧设计，提供稳定的悬挂效果。兼容车型：重汽 HOWO 系列。规格：钢板弹簧，承载能力 15吨，工作温度 -40~80℃。', image: '/manus-storage/dE26oJpkG7vY_85a0cb88.jpg', category: 'Suspension System' },
      { id: 'st-sp-35', partNumber: 'VG1560118256', name: '悬架弹簧 (Leaf Spring)', description: '重汽豪沃悬架钢板弹簧，承载重量，缓冲颠簸。兼容车型：重汽 HOWO 系列。规格：锰钢弹簧，厚度 8mm，承载能力 10吨。', image: '/manus-storage/BHGlWOSjhU5w_9f29cc56.webp', category: 'Suspension System' },
      { id: 'st-sp-36', partNumber: 'VG1560118257', name: '减震器 (Shock Absorber)', description: '重汽豪沃减震器，吸收悬架振动。兼容车型：重汽 HOWO 系列。规格：液压减震器，长度 600mm，工作压力 50bar。', image: '/manus-storage/baN8ShRqAIuM_6af4f6db.webp', category: 'Suspension System' },
      { id: 'st-sp-37', partNumber: 'VG1560118258', name: '转向节销 (Kingpin)', description: '重汽豪沃转向节销，连接转向节和悬架。兼容车型：重汽 HOWO 系列。规格：铸铁销，直径 50mm，工作温度 -40~80℃。', image: '/manus-storage/ucpUdUZdpIAr_0fcb9d5f.webp', category: 'Suspension System' },
      { id: 'st-sp-38', partNumber: 'VG1560118259', name: '转向节销套件 (Kingpin Repair Kit)', description: '重汽豪沃转向节销套件，含销和轴承。兼容车型：重汽 HOWO 系列。规格：铸铁销，直径 50mm，含轴承和垫片。', image: '/manus-storage/PdEw62cQZKqP_ac3ef499.webp', category: 'Suspension System' },
      
      // Electrical System
      { id: 'st-sp-39', partNumber: 'VG1560118260', name: '交流发电机 (Alternator)', description: '重汽豪沃原厂交流发电机，为电气系统供电，保证车辆正常运行。兼容车型：重汽 HOWO 系列。规格：输出功率 120A，输出电压 14V，工作温度 -40~120℃。', image: '/manus-storage/fcPGf6qqKLeF_220f6fb4.jpg', category: 'Electrical System' },
      { id: 'st-sp-40', partNumber: 'VG1560118261', name: '启动马达 (Starter Motor)', description: '重汽豪沃启动马达，快速启动发动机。兼容车型：重汽 HOWO 系列。规格：功率 5.5kW，转速 11000rpm，工作温度 -40~120℃。', image: '/manus-storage/8yoUd9lwI4QU_fb1bcb17.jpg', category: 'Electrical System' },
      { id: 'st-sp-41', partNumber: 'VG1560118262', name: '电池 (Battery)', description: '重汽豪沃原厂蓄电池，提供启动电流，稳定供电。兼容车型：重汽 HOWO 系列。规格：12V 200Ah，冷启动电流 1500A，工作温度 -40~65℃。', image: '/manus-storage/o9DYZg0gms0G_2a6014f9.jpg', category: 'Electrical System' },
      { id: 'st-sp-42', partNumber: 'VG1560118263', name: '点火开关 (Ignition Switch)', description: '重汽豪沃点火开关，控制发动机启动。兼容车型：重汽 HOWO 系列。规格：电流 15A，工作温度 -40~80℃。', image: '/manus-storage/3yVLeyGHnP5n_3fcfe09f.webp', category: 'Electrical System' },
      { id: 'st-sp-43', partNumber: 'VG1560118264', name: '车灯总成 (Light Assembly)', description: '重汽豪沃车灯总成，包括前灯、后灯、转向灯等。兼容车型：重汽 HOWO 系列。规格：LED 灯，功率 55W，工作温度 -40~80℃。', image: '/manus-storage/ZX4YdBMDdIvf_a58a6b13.jpg', category: 'Electrical System' },
      
      // Steering System
      { id: 'st-sp-44', partNumber: 'VG1560118265', name: '转向柱支撑轴承 (Steering Column Bearing)', description: '重汽豪沃转向柱支撑轴承，支撑转向柱。兼容车型：重汽 HOWO 系列。规格：滚珠轴承，直径 40mm，工作温度 -40~80℃。', image: '/manus-storage/keKWTf7psn43_42aec80d.jpg', category: 'Steering System' },
      { id: 'st-sp-45', partNumber: 'VG1560118266', name: '转向节联轴节 (Steering Joint)', description: '重汽豪沃转向节联轴节，连接转向柱和转向齿轮。兼容车型：重汽 HOWO 系列。规格：铸铁联轴节，直径 30mm，工作温度 -40~80℃。', image: '/manus-storage/lqsRdwHew27F_d931e63d.jpg', category: 'Steering System' },
      { id: 'st-sp-46', partNumber: 'VG1560118267', name: '转向拉杆 (Steering Tie Rod)', description: '重汽豪沃转向拉杆，连接转向节和转向齿轮。兼容车型：重汽 HOWO 系列。规格：铸铁杆，长度 1.2m，工作温度 -40~80℃。', image: '/manus-storage/QEmbgAIpztPF_520f4185.webp', category: 'Steering System' },
      { id: 'st-sp-47', partNumber: 'VG1560118268', name: '转向齿轮 (Steering Gear)', description: '重汽豪沃转向齿轮，将转向柱的转动转换为轮胎的转向。兼容车型：重汽 HOWO 系列。规格：齿轮比 18:1，工作温度 -40~80℃。', image: '/manus-storage/yvtgySs57Yno_3df46036.webp', category: 'Steering System' },
      { id: 'st-sp-48', partNumber: 'VG1560118269', name: '转向泵 (Steering Pump)', description: '重汽豪沃转向泵，为转向系统供油。兼容车型：重汽 HOWO 系列。规格：排量 8.5cc/rev，工作压力 150bar。', image: '/manus-storage/panh7ArNe8Kz_5454ef99.webp', category: 'Steering System' },
      
      // Other Components
      { id: 'st-sp-49', partNumber: 'VG1560118270', name: '液压油滤清器 (Hydraulic Oil Filter)', description: '重汽豪沃液压油滤清器，过滤液压系统油液。兼容车型：重汽 HOWO 系列。规格：纸质滤芯，过滤精度 10μm，工作压力 280bar。', image: '/manus-storage/dE26oJpkG7vY_85a0cb88.jpg', category: 'Hydraulic System' },
      { id: 'st-sp-50', partNumber: 'VG1560118271', name: '油箱盖 (Fuel Tank Cap)', description: '重汽豪沃油箱盖，密封油箱。兼容车型：重汽 HOWO 系列。规格：塑料盖，直径 80mm，工作温度 -40~80℃。', image: '/manus-storage/BHGlWOSjhU5w_9f29cc56.webp', category: 'Fuel System' },
      { id: 'st-sp-51', partNumber: 'VG1560118272', name: '玻璃水储液罐盖 (Washer Reservoir Cap)', description: '重汽豪沃玻璃水储液罐盖，密封玻璃水储液罐。兼容车型：重汽 HOWO 系列。规格：塑料盖，直径 60mm，工作温度 -40~80℃。', image: '/manus-storage/baN8ShRqAIuM_6af4f6db.webp', category: 'Other' },
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
    machines: [      {
        id: 'toyota-4runner',
        model: '4Runner',
        name: 'SUV',
        specs: '4×4 | 4.0L V6 | 215 kW | 4850 kg',
        image: '/manus-storage/toyota_4runner_d3054dd7.jpeg',
        description: 'Toyota 4Runner SUV. Premium off-road SUV for adventure and exploration. Engine: 4.0L V6 (215 kW). Transmission: Automatic. Seating: 7-8 passengers. Fuel Tank: 87L. Perfect for extreme terrain and family adventures.'
      },
      {
        id: 'toyota-fortuner',
        model: 'Fortuner',
        name: 'SUV',
        specs: '4×4 | 2.8L Diesel | 130 kW | 2755 kg',
        image: '/manus-storage/toyota_fortuner_cee5d261.jpeg',
        description: 'Toyota Fortuner SUV. Mid-size SUV for family and commercial use. Engine: 2.8L Diesel (130 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 80L. Ideal for Southeast Asian markets and rugged terrain.'
      },
      {
        id: 'toyota-hilux-4x4',
        model: 'Hilux 4×4',
        name: 'Pickup Truck',
        specs: '4×4 | 2.8L Diesel | 130 kW | 1850 kg',
        image: '/manus-storage/toyota_hilux_4x4_0507593e.jpeg',
        description: 'Toyota Hilux 4×4 Pickup Truck. Heavy-duty pickup truck for construction and agriculture. Engine: 2.8L Diesel (130 kW). Transmission: Manual/Automatic. Payload: 1000 kg. Fuel Tank: 80L. Perfect for tough working conditions.'
      },
      {
        id: 'toyota-lc70',
        model: 'Land Cruiser 70',
        name: 'SUV',
        specs: '4×4 | 4.0L V6 | 155 kW | 2100 kg',
        image: '/manus-storage/toyota_lc70_5f2a286f.jpeg',
        description: 'Toyota Land Cruiser 70 SUV. Classic off-road SUV with legendary reliability. Engine: 4.0L V6 (155 kW). Transmission: Manual. Seating: 5-7 passengers. Fuel Tank: 85L. Perfect for extreme off-road expeditions.'
      },
      {
        id: 'toyota-prado',
        model: 'Prado',
        name: 'SUV',
        specs: '4×4 | 2.7L Petrol | 120 kW | 2300 kg',
        image: '/manus-storage/toyota_prado_37be579f.jpeg',
        description: 'Toyota Prado SUV. Premium mid-size SUV for family and adventure. Engine: 2.7L Petrol (120 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 87L. Ideal for family travel and light off-roading.'
      },
      {
        id: 'toyota-tacoma-4x4',
        model: 'Tacoma 4×4',
        name: 'Pickup Truck',
        specs: '4×4 | 3.5L V6 | 205 kW | 1700 kg',
        image: '/manus-storage/toyota_tacoma_4x4_86577193.jpeg',
        description: 'Toyota Tacoma 4×4 Pickup Truck. Mid-size pickup truck for work and adventure. Engine: 3.5L V6 (205 kW). Transmission: Automatic. Payload: 1200 kg. Fuel Tank: 80L. Perfect for construction and outdoor enthusiasts.'
      },
      {
        id: 'toyota-tundra',
        model: 'Tundra',
        name: 'Pickup Truck',
        specs: '4×4 | 5.7L V8 | 280 kW | 2100 kg',
        image: '/manus-storage/toyota_tundra_e9444b96.jpeg',
        description: 'Toyota Tundra Pickup Truck. Full-size heavy-duty pickup truck. Engine: 5.7L V8 (280 kW). Transmission: Automatic. Payload: 1600 kg. Fuel Tank: 100L. Perfect for demanding work and heavy towing.'
      }],
    spareParts: [
      // Lubrication System
      { id: 'ty-sp-1', partNumber: '15600-29015', name: '機油滿油器 (Engine Oil Filter)', description: '丰田原廠機油滿油器，高效過溺發動機機油中的雜質和金屬顆粒，保護發動機。兼容车型：丰田 Hilux、4Runner、Land Cruiser、Fortuner、Tacoma、Tundra 等。發動機型号：2.8L柴油、4.0L V6、5.7L V8。规格：紙質滿油芯，流量 100L/min，工作温度 -40~120℃。', image: '/manus-storage/CaxCHBrIWosK_615ef53d.webp', category: 'Lubrication System' },
      { id: 'ty-sp-2', partNumber: '90915-20004', name: '機油滿油器組合 (Oil Filter Set)', description: '丰田機油滿油器組合，整組供應，水泵、Tacoma、Tundra、4Runner、FJ Cruiser、Land Cruiser、Hilux、Fortuner 等兼容。规格：高效過溺，流量 120L/min。', image: '/manus-storage/DCUSG4lowAM6_c429826a.jpg', category: 'Lubrication System' },
      { id: 'ty-sp-3', partNumber: '90915-20004-2', name: '機油滿油器雙件組 (Dual Oil Filter Pack)', description: '丰田機油滿油器雙件組，經濟實惠。兼容车型：丰田 Hilux、Tacoma、Tundra、4Runner、Land Cruiser、Fortuner 等。', image: '/manus-storage/BoFXFbcwtZDk_803a6975.jpg', category: 'Lubrication System' },
      { id: 'ty-sp-4', partNumber: '04152-37010', name: '機油泵 (Oil Pan)', description: '丰田發動機機油泵，存儲發動機機油。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：铝制，容量 5.5L。', image: '/manus-storage/wndpHoCfDJpH_891ddd5e.webp', category: 'Lubrication System' },
      { id: 'ty-sp-5', partNumber: '16100-09470', name: '水泵總成 (Water Pump Assembly)', description: '丰田冷却水泵總成，高效循環冷却液，提高發動機效率。兼容车型：丰田 4Runner、4.0L、Tacoma、5.0L、Tundra、5.7L V8 等。规格：铝制泵体，流量 150L/min。', image: '/manus-storage/JNAI0tJAIecg_ea841084.webp', category: 'Cooling System' },
      { id: 'ty-sp-6', partNumber: '90916-03144', name: '节温器 (Thermostat)', description: '丰田冷却系统节温器，精確控制冷却液温度，提高發動機效率。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：黄铜阀芯，開啟温度 82℃。', image: '/manus-storage/OVoSRC85OgZP_a1b5e0cd.jpg', category: 'Cooling System' },
      { id: 'ty-sp-7', partNumber: '16100-09525', name: '水泵總成帶水管 (Water Pump with Hose)', description: '丰田水泵總成帶水管，完整組件。兼容车型：丰田 2010-2019 车款。规格：铝制，流量 160L/min。', image: '/manus-storage/YPxsSOE7geR4_99054084.jpg', category: 'Cooling System' },
      { id: 'ty-sp-8', partNumber: '16100-69357', name: '水泵總成柴油版 (Diesel Water Pump)', description: '丰田柴油發動機水泵總成，適用柴油车型。兼容车型：丰田 HiAce、Hilux、Surf、4Runner、Prado、Land Cruiser、Dyna 等。發動機型号：1KZT、1KZ-TE、1KD-FTV、2KD-FTV。', image: '/manus-storage/NGUokJ9xcsyu_49692f89.jpg', category: 'Cooling System' },
      { id: 'ty-sp-9', partNumber: '16100-69356', name: '水泵總成柴油版-2 (Diesel Water Pump Alt)', description: '丰田柴油發動機水泵總成事版。兼容车型：丰田 HiAce、Hilux、Surf、4Runner、Prado、Land Cruiser 等。發動機型号：1KZT、1KZ-TE、1KD-FTV、2KD-FTV。', image: '/manus-storage/wz4PDFlwwrPh_285944d3.jpg', category: 'Cooling System' },
      
      // Fuel System
      { id: 'ty-sp-10', partNumber: '23390-64480', name: '燈油滿油器 (Fuel Filter)', description: '丰田柴油發動機燈油滿油器，精密過溺燈油中的雜質和水分。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：紙質滿油芯，過溺精度 10μm。', image: '/manus-storage/CaxCHBrIWosK_615ef53d.webp', category: 'Fuel System' },
      { id: 'ty-sp-11', partNumber: '23300-21030', name: '燈油水管滿油器 (Fuel Tank Filter)', description: '丰田燈油水管內滿油滿油器，保護燈油水管。兼容车型：丰田 Yaris〇4Runner、Rav4 等。规格：紙質滿油芯。', image: '/manus-storage/DCUSG4lowAM6_c429826a.jpg', category: 'Fuel System' },
      { id: 'ty-sp-12', partNumber: '23300-62040', name: '燈油泵 (Fuel Tank)', description: '丰田燈油泵，存儲燈油。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：銅制，容量 80L。', image: '/manus-storage/BoFXFbcwtZDk_803a6975.jpg', category: 'Fuel System' },
      { id: 'ty-sp-13', partNumber: '23210-75040', name: '燈油泵需水管 (Fuel Tank Filler Hose)', description: '丰田燈油泵需水管，連接燈油泵。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：橡胶管。', image: '/manus-storage/wndpHoCfDJpH_891ddd5e.webp', category: 'Fuel System' },
      { id: 'ty-sp-14', partNumber: '23300-54130', name: '燈油泵需水管組件 (Fuel Tank Hose Assembly)', description: '丰田燈油泵需水管組件。兼容车型：丰田 Hilux、Tacoma、Tundra 等。', image: '/manus-storage/JNAI0tJAIecg_ea841084.webp', category: 'Fuel System' },
      
      // Engine System
      { id: 'ty-sp-15', partNumber: '17801-54090', name: '空氣滿油器 (Air Filter)', description: '丰田空氣滿油器，有效過溺進氣中的灰塵和顆粒。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：紙質滿油芯，過溺精度 5μm。', image: '/manus-storage/OVoSRC85OgZP_a1b5e0cd.jpg', category: 'Engine System' },
      { id: 'ty-sp-16', partNumber: '13011-54150', name: '活塞環套件 (Piston Ring Set)', description: '丰田發動機活塞環，精密加工，耐高溫耐磨搊。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵、厩度 1.5-2mm。', image: '/manus-storage/YPxsSOE7geR4_99054084.jpg', category: 'Engine System' },
      { id: 'ty-sp-17', partNumber: '11012-54120', name: '氣門油封 (Valve Oil Seal)', description: '丰田氣門油封，防止機油進入氣缸。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：氟橡胶油封。', image: '/manus-storage/NGUokJ9xcsyu_49692f89.jpg', category: 'Engine System' },
      { id: 'ty-sp-18', partNumber: '13101-54150', name: '進氣門 (Intake Valve)', description: '丰田發動機進氣門，控制進氣流量。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵合金、直径 45mm。', image: '/manus-storage/wz4PDFlwwrPh_285944d3.jpg', category: 'Engine System' },
      { id: 'ty-sp-19', partNumber: '13111-54150', name: '排氣門 (Exhaust Valve)', description: '丰田發動機排氣門，排出燂烧废氣。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵合金、直径 42mm。', image: '/manus-storage/CaxCHBrIWosK_615ef53d.webp', category: 'Engine System' },
      { id: 'ty-sp-20', partNumber: '11213-54120', name: '缸蓋墠 (Cylinder Head Gasket)', description: '丰田發動機缸蓋墠，密封氣缸蓋和氣体。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：石棒墠、厩度 1.5mm。', image: '/manus-storage/DCUSG4lowAM6_c429826a.jpg', category: 'Engine System' },
      { id: 'ty-sp-21', partNumber: '90080-36002', name: '前油封 (Front Oil Seal)', description: '丰田發動機曲軸前油封，防止機油洩漏。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：氟橡胶油封。', image: '/manus-storage/BoFXFbcwtZDk_803a6975.jpg', category: 'Engine System' },
      { id: 'ty-sp-22', partNumber: '90080-36052', name: '後油封 (Rear Oil Seal)', description: '丰田發動機曲軸後油封，防止機油洩漏。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：氟橡胶油封。', image: '/manus-storage/wndpHoCfDJpH_891ddd5e.webp', category: 'Engine System' },
      { id: 'ty-sp-23', partNumber: '11213-54140', name: '氣門室蓋墠 (Valve Cover Gasket)', description: '丰田發動機氣門室蓋墠，密封氣門室。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：石棒墠、厩度 1.5mm。', image: '/manus-storage/JNAI0tJAIecg_ea841084.webp', category: 'Engine System' },
      
      // Brake System
      { id: 'ty-sp-24', partNumber: '04465-35090', name: '制動境片 (Brake Pad Set)', description: '丰田原廠制動境片，高摩擦系數，耐高溫耐磨搊。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：半金屬境片、厩度 12-15mm。', image: '/manus-storage/OVoSRC85OgZP_a1b5e0cd.jpg', category: 'Brake System' },
      { id: 'ty-sp-25', partNumber: '04465-12090', name: '前制動境片 (Front Brake Pad)', description: '丰田前輪制動境片。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：半金屬境片、厩度 15mm。', image: '/manus-storage/YPxsSOE7geR4_99054084.jpg', category: 'Brake System' },
      { id: 'ty-sp-26', partNumber: '04465-35190', name: '後制動境片 (Rear Brake Pad)', description: '丰田後輪制動境片。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：半金屬境片、厩度 12mm。', image: '/manus-storage/NGUokJ9xcsyu_49692f89.jpg', category: 'Brake System' },
      { id: 'ty-sp-27', partNumber: '43512-60080', name: '制動盤 (Brake Disc)', description: '丰田制動盤，與制動境片配合實現制動。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵盤、厩度 30mm、直径 370mm。', image: '/manus-storage/wz4PDFlwwrPh_285944d3.jpg', category: 'Brake System' },
      { id: 'ty-sp-28', partNumber: '04945-60050', name: '制動軟管 (Brake Hose)', description: '丰田制動軟管，傳輸制動液壓。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：橡胶管、直径 12mm。', image: '/manus-storage/CaxCHBrIWosK_615ef53d.webp', category: 'Brake System' },
      { id: 'ty-sp-29', partNumber: '47201-60050', name: '制動總泵 (Brake Master Cylinder)', description: '丰田制動總泵，產生制動壓力。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵泵、直径 32mm。', image: '/manus-storage/DCUSG4lowAM6_c429826a.jpg', category: 'Brake System' },
      { id: 'ty-sp-30', partNumber: '47730-60050', name: '制動分泵 (Brake Wheel Cylinder)', description: '丰田制動分泵，推動制動境片。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵泵、直径 28mm。', image: '/manus-storage/BoFXFbcwtZDk_803a6975.jpg', category: 'Brake System' },
      
      // Transmission System
      { id: 'ty-sp-31', partNumber: '31250-60050', name: '離合器片 (Clutch Plate)', description: '丰田原廠離合器片，高摩擦系數，耐高溫。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：銅基燒結、厩度 4.5mm。', image: '/manus-storage/wndpHoCfDJpH_891ddd5e.webp', category: 'Transmission System' },
      { id: 'ty-sp-32', partNumber: '35330-60050', name: '變速箱滿油器 (Transmission Filter)', description: '丰田變速箱滿油器，過溺變速箱油。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：紙質滿油芯、過溺精度 10μm。', image: '/manus-storage/JNAI0tJAIecg_ea841084.webp', category: 'Transmission System' },
      { id: 'ty-sp-33', partNumber: '12310-60050', name: '變速箱支架 (Gearbox Support)', description: '丰田變速箱支架，承載變速箱重量。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵支架、重量 8kg。', image: '/manus-storage/OVoSRC85OgZP_a1b5e0cd.jpg', category: 'Transmission System' },
      { id: 'ty-sp-34', partNumber: '31330-60050', name: '離合器壓盤 (Clutch Pressure Plate)', description: '丰田離合器壓盤，壓緊離合器片。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵盤、直径 350mm。', image: '/manus-storage/YPxsSOE7geR4_99054084.jpg', category: 'Transmission System' },
      { id: 'ty-sp-35', partNumber: '90080-36062', name: '軸承套件 (Bearing Kit)', description: '丰田軸承套件，支撑變速箱軸。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：溻珠軸承、直径 50mm。', image: '/manus-storage/NGUokJ9xcsyu_49692f89.jpg', category: 'Transmission System' },
      
      // Electrical System
      { id: 'ty-sp-36', partNumber: '27060-28050', name: '交流發電機 (Alternator)', description: '丰田發動機交流發電機，為電氣系統供電。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：輸出力 100A、輸出電壓 14V。', image: '/manus-storage/wz4PDFlwwrPh_285944d3.jpg', category: 'Electrical System' },
      { id: 'ty-sp-37', partNumber: '28100-54050', name: '啟動馬達 (Starter Motor)', description: '丰田啟動馬達，起動發動機。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：輸出力 3.5kW、輸出所需電壓 12V。', image: '/manus-storage/CaxCHBrIWosK_615ef53d.webp', category: 'Electrical System' },
      { id: 'ty-sp-38', partNumber: '28800-54010', name: '電池 (Battery)', description: '丰田電池，為發動機供電。兼容车型：丰田 Hilux、Tacoma、Tundra、Land Cruiser 等。规格：電壓 12V、容量 100Ah。', image: '/manus-storage/DCUSG4lowAM6_c429826a.jpg', category: 'Electrical System' },
      { id: 'ty-sp-39', partNumber: '84320-60050', name: '點火開關 (Ignition Switch)', description: '丰田點火開關，控制發動機點火。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：電壓 12V。', image: '/manus-storage/BoFXFbcwtZDk_803a6975.jpg', category: 'Electrical System' },
      { id: 'ty-sp-40', partNumber: '81110-60050', name: '車燈總成 (Headlight Assembly)', description: '丰田車燈總成，提供夜間照明。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：電壓 12V、功率 55W。', image: '/manus-storage/wndpHoCfDJpH_891ddd5e.webp', category: 'Electrical System' },
      
      // Suspension System
      { id: 'ty-sp-41', partNumber: '48080-60050', name: '減震器 (Shock Absorber)', description: '丰田減震器，吸收悸架振動。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：液壓減震器、長度 600mm。', image: '/manus-storage/JNAI0tJAIecg_ea841084.webp', category: 'Suspension System' },
      { id: 'ty-sp-42', partNumber: '48131-60050', name: '上悸架控制臂 (Upper Control Arm)', description: '丰田上悸架控制臂，連接上悸架。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵臂。', image: '/manus-storage/OVoSRC85OgZP_a1b5e0cd.jpg', category: 'Suspension System' },
      { id: 'ty-sp-43', partNumber: '48160-60050', name: '下悸架控制臂 (Lower Control Arm)', description: '丰田下悸架控制臂，連接下悸架。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鐵臂。', image: '/manus-storage/YPxsSOE7geR4_99054084.jpg', category: 'Suspension System' },
      { id: 'ty-sp-44', partNumber: '48080-60090', name: '悸架彈簧 (Leaf Spring)', description: '丰田悸架鉄板彈簧，承載重量、緩衝顏笃。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鎖鉄彈簧、厩度 8mm。', image: '/manus-storage/NGUokJ9xcsyu_49692f89.jpg', category: 'Suspension System' },
      { id: 'ty-sp-45', partNumber: '48090-60050', name: '後悸架 (Rear Suspension)', description: '丰田後悸架總成，採用鉄板彈簧設計，提供穩定的悸掙效果。兼容车型：丰田 Hilux、Tacoma、Tundra 等。规格：鉄板彈簧、承載能力 15吨。', image: '/manus-storage/wz4PDFlwwrPh_285944d3.jpg', category: 'Suspension System' },
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
        id: 'cum-6bt59',
        model: '6BT5.9-G2',
        name: 'Diesel Engine',
        specs: '5.9L | 110-130 kW | 6 cylinders',
        image: '/manus-storage/cummins_6bt59_d5b099df.jpeg',
        description: 'Cummins 6BT5.9-G2 Diesel Engine. Mid-range turbocharged diesel engine widely used in construction equipment and trucks. Displacement: 5.9L. Power Output: 110-130 kW (147-174 HP). Torque: 450-480 Nm. Fuel Type: Diesel. Emissions Standard: Euro 3. Ideal for excavators, loaders, and medium-duty trucks.'
      },
      {
        id: 'cum-isf38',
        model: 'ISF3.8',
        name: 'Diesel Engine',
        specs: '3.8L | 75-95 kW | 4 cylinders',
        image: '/manus-storage/cummins_isf38_b0d46346.jpeg',
        description: 'Cummins ISF3.8 Diesel Engine. Compact four-cylinder turbocharged diesel engine for light-duty applications. Displacement: 3.8L. Power Output: 75-95 kW (100-127 HP). Torque: 265-310 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4. Perfect for small trucks, vans, and light construction equipment.'
      },
      {
        id: 'cum-isl89',
        model: 'ISL8.9',
        name: 'Diesel Engine',
        specs: '8.9L | 180-210 kW | 6 cylinders',
        image: '/manus-storage/cummins_isl89_b5f08827.jpeg',
        description: 'Cummins ISL8.9 Diesel Engine. Mid-range six-cylinder turbocharged diesel engine for medium-duty trucks and construction equipment. Displacement: 8.9L. Power Output: 180-210 kW (240-280 HP). Torque: 700-850 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Ideal for dump trucks, mixers, and mid-size loaders.'
      },
      {
        id: 'cum-ism11',
        model: 'ISM11',
        name: 'Diesel Engine',
        specs: '11L | 250-280 kW | 6 cylinders',
        image: '/manus-storage/cummins_ism11_0f2c98f0.jpeg',
        description: 'Cummins ISM11 Diesel Engine. Heavy-duty six-cylinder turbocharged diesel engine for large trucks and construction equipment. Displacement: 11L. Power Output: 250-280 kW (335-375 HP). Torque: 1050-1200 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4. Perfect for heavy-duty dump trucks, concrete mixers, and large excavators.'
      },
      {
        id: 'cum-isx15',
        model: 'ISX15',
        name: 'Diesel Engine',
        specs: '15L | 330-380 kW | 6 cylinders',
        image: '/manus-storage/cummins_isx15_d1619e50.jpeg',
        description: 'Cummins ISX15 Diesel Engine. Ultra-heavy-duty six-cylinder turbocharged diesel engine for maximum power applications. Displacement: 15L. Power Output: 330-380 kW (440-510 HP). Torque: 1400-1600 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Ideal for large dump trucks, concrete pump trucks, and mining equipment.'
      },
      {
        id: 'cum-kta19',
        model: 'KTA19',
        name: 'Diesel Engine',
        specs: '19L | 450-500 kW | 6 cylinders',
        image: '/manus-storage/cummins_kta19_d20d2388.jpeg',
        description: 'Cummins KTA19 Diesel Engine. Premium ultra-heavy-duty six-cylinder turbocharged diesel engine for extreme power applications. Displacement: 19L. Power Output: 450-500 kW (600-670 HP). Torque: 1800-2000 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Perfect for mining trucks and large industrial equipment.'
      },
      {
        id: 'cum-qsb67',
        model: 'QSB6.7',
        name: 'Diesel Engine',
        specs: '6.7L | 150-180 kW | 6 cylinders',
        image: '/manus-storage/cummins_qsb67_e329b3a2.jpeg',
        description: 'Cummins QSB6.7 Diesel Engine. Mid-range six-cylinder turbocharged diesel engine for medium to heavy-duty applications. Displacement: 6.7L. Power Output: 150-180 kW (200-240 HP). Torque: 520-650 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Ideal for medium-duty trucks and construction equipment.'
      }
    ],
    spareParts: [
      { id: 'cm-sp-1', partNumber: '3415317', name: '涡轮增压器软管', description: 'Cummins 3415317 - 涡轮增压器软管. 涡轮增压器进气软管，连接涡轮增压器和进气歧管，耐高温高压。 Compatible with: 东风康明斯 6CT8.3. Engine Models: 6CT8.3. Specifications: 柔性软管，耐高温耐压.', image: '/manus-storage/cummins_3415317_1376ea0d.jpg', category: 'Engine System' },
      { id: 'cm-sp-2', partNumber: '3415347', name: '连杆瓦', description: 'Cummins 3415347 - 连杆瓦. 发动机连杆轴承，承受往复运动的连杆载荷，采用铜铅合金材料。 Compatible with: 福田欧马可、江淮帅铃、陕汽 K3000. Engine Models: ISF 3.8. Specifications: 铜铅合金，厚度 1.5mm.', image: '/manus-storage/cummins_3415347_c61c9feb.jpg', category: 'Engine System' },
      { id: 'cm-sp-3', partNumber: '3900227', name: '连杆螺栓', description: 'Cummins 3900227 - 连杆总成. 发动机连杆总成，连接活塞和曲轴，承受燃烧压力。 Compatible with: 福田奥铃、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 锻钢，长度 180mm.', image: '/manus-storage/cummins_3900227_f7751ecf.jpg', category: 'Engine System' },
      { id: 'cm-sp-4', partNumber: '3901969', name: '连杆瓦', description: 'Cummins 3901969 - 活塞. 发动机活塞，在气缸内往复运动，承受燃烧压力和热负荷。 Compatible with: 陕汽德龙、福田欧马可. Engine Models: ISF 3.8. Specifications: 铝合金，直径 92mm.', image: '/manus-storage/cummins_3901969_08926021.jpg', category: 'Engine System' },
      { id: 'cm-sp-5', partNumber: '3916361', name: '水泵密封圈', description: 'Cummins 3916361 - 水泵密封圈. 水泵轴封，防止冷却液泄漏，采用耐油耐热橡胶材料。 Compatible with: 福田欧马可、陕汽 L3000. Engine Models: ISF 3.8 / 2.8. Specifications: 橡胶密封圈，内径 35mm.', image: '/manus-storage/cummins_3916361_5992c0e2.jpg', category: 'Cooling System' },
      { id: 'cm-sp-6', partNumber: '3921652', name: '机油滤清器', description: 'Cummins 3921652 - 机油滤清器. 发动机机油滤清器，过滤机油中的杂质和金属颗粒。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 纸质滤芯，流量 50L/min.', image: '/manus-storage/cummins_3921652_e541402f.jpg', category: 'Engine System' },
      { id: 'cm-sp-7', partNumber: '3928629', name: '进气门', description: 'Cummins 3928629 - 进气门. 发动机进气门，控制进气行程，采用耐热合金钢材料。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 合金钢，头部直径 35mm.', image: '/manus-storage/cummins_3928629_7c5fb658.jpg', category: 'Engine System' },
      { id: 'cm-sp-8', partNumber: '3931084', name: '熄火电磁阀', description: 'Cummins 3931084 - 排气门. 发动机排气门，控制排气行程，采用耐高温镍铬合金。 Compatible with: 福田奥铃、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 镍铬合金，头部直径 30mm.', image: '/manus-storage/cummins_3931084_ab1c737d.jpg', category: 'Fuel System' },
      { id: 'cm-sp-9', partNumber: '3934410', name: '进气垫片', description: 'Cummins 3934410 - 进气歧管垫片. 进气歧管密封垫片，防止进气泄漏。 Compatible with: 陕汽德龙、福田欧马可. Engine Models: ISF 3.8. Specifications: 石棉橡胶垫片，厚度 2mm.', image: '/manus-storage/cummins_3934410_9031136d.jpg', category: 'Engine System' },
      { id: 'cm-sp-10', partNumber: '3939181', name: '进气管垫片', description: 'Cummins 3939181 - 进气节温片. 进气冷却器节温片，调节进气温度。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 黄铜片，厚度 0.5mm.', image: '/manus-storage/cummins_3939181_8ae4b69d.jpg', category: 'Engine System' },
      { id: 'cm-sp-11', partNumber: '3940639', name: '燃油泵垫片', description: 'Cummins 3940639 - 燃油管. 高压燃油管，连接燃油泵和喷油器，承受高压。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 高压钢管，工作压力 200bar.', image: '/manus-storage/cummins_3940639_e9db0c0b.jpg', category: 'Fuel System' },
      { id: 'cm-sp-12', partNumber: '3944001', name: '燃油溢流阀', description: 'Cummins 3944001 - 燃油滤清器. 发动机燃油滤清器，过滤燃油中的杂质。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 纸质滤芯，过滤精度 10μm.', image: '/manus-storage/cummins_3944001_6772d94a.jpg', category: 'Fuel System' },
      { id: 'cm-sp-13', partNumber: '3945917', name: '主轴承套件', description: 'Cummins 3945917 - 主轴承套件. 曲轴主轴承，支撑曲轴旋转，采用铜铅合金。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 铜铅合金，厚度 2mm.', image: '/manus-storage/cummins_3945617_19ad025e.jpg', category: 'Engine System' },
      { id: 'cm-sp-15', partNumber: '3945918', name: '油底壳垫片', description: 'Cummins 3945918 - 油底壳垫片. 油底壳密封垫片，防止机油泄漏。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 硅橡胶垫片，厚度 3mm.', image: '/manus-storage/cummins_3945918_1cf3e640.jpg', category: 'Engine System' },
      { id: 'cm-sp-16', partNumber: '3945967', name: '汽缸垫', description: 'Cummins 3945967 - 燃油无压管. 燃油低压管，连接燃油箱和燃油泵。 Compatible with: 福田欧马可 F3000、江淮帅铃. Engine Models: ISF / L. Specifications: 橡胶软管，内径 8mm.', image: '/manus-storage/cummins_3945967_649dccda.jpg', category: 'Engine System' },
      { id: 'cm-sp-17', partNumber: '3950661', name: '前油封', description: 'Cummins 3950661 - 连杆轴承套件. 连杆轴承，支撑连杆旋转，采用铜铅合金材料。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 铜铅合金，厚度 1.5mm.', image: '/manus-storage/part_3950661_170_6065a594.jpg', category: 'Engine System' },
      { id: 'cm-sp-19', partNumber: '3957290', name: '前油封', description: 'Cummins 3957290 - 前油封. 曲轴前端油封，防止机油从曲轴前端泄漏。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 氟橡胶油封，内径 40mm.', image: '/manus-storage/cummins_3957290_c78509bb.jpg', category: 'Engine System' },
      { id: 'cm-sp-20', partNumber: '3964715', name: '排气门推杆', description: 'Cummins 3964715 - 排气门推杆. 发动机排气门推杆，传递凸轮轴运动到排气门。 Compatible with: 福田欧马可、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 合金钢，长度 250mm.', image: '/manus-storage/bh6ks02TyHvK_904e11da.png', category: 'Engine System' },
      { id: 'cm-sp-21', partNumber: '3965966', name: '皮带张紧器', description: 'Cummins 3965966 - 机油冷却器. 机油冷却器，降低机油温度，采用铝制壳体。 Compatible with: 陕汽德龙、福田欧马可. Engine Models: ISF 3.8. Specifications: 铝制，流量 50L/min.', image: '/manus-storage/cummins_3965966_90512daa.jpg', category: 'Engine System' },
      { id: 'cm-sp-22', partNumber: '3967252', name: '机油冷却器芯', description: 'Cummins 3967252 - 机油压力传感器. 机油压力传感器，监测发动机机油压力。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 电子传感器，工作温度 -40~120℃.', image: '/manus-storage/cummins_3967252_4e371f9c.jpg', category: 'Cooling System' },
      { id: 'cm-sp-23', partNumber: '3968559', name: '机油压力传感器', description: 'Cummins 3968559 - 活塞环. 发动机活塞环，密封活塞和气缸，防止气体泄漏。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 铸铁，厚度 1.5mm.', image: '/manus-storage/cummins_3968559_6252712e.jpg', category: 'Engine System' },
      { id: 'cm-sp-24', partNumber: '3972125', name: '高压油管', description: 'Cummins 3972125 - 高压油管. 喷油器高压油管，连接燃油泵和喷油器。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 高压钢管，工作压力 250bar.', image: '/manus-storage/cummins_3972125_e7990527.jpg', category: 'Fuel System' },
      { id: 'cm-sp-25', partNumber: '3972777', name: '燃油管', description: 'Cummins 3972777 - 燃油管. 发动机燃油管，输送高压燃油到喷油器。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 高压钢管，工作压力 200bar.', image: '/manus-storage/cummins_3972777_60bef43e.jpg', category: 'Fuel System' },
      { id: 'cm-sp-26', partNumber: '3979176', name: '风扇皮带', description: 'Cummins 3979176 - 气门油封. 气门杆油封，防止机油进入气缸。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 氟橡胶油封，内径 8mm.', image: '/manus-storage/cummins_3979176_bffadba2.jpg', category: 'Engine System' },
      { id: 'cm-sp-27', partNumber: '4931169', name: '活塞组件', description: 'Cummins 4931169 - 活塞销. 活塞销，连接活塞和连杆。 Compatible with: 陕汽德龙、福田欧马可. Engine Models: ISF 3.8. Specifications: 合金钢，直径 20mm.', image: '/manus-storage/cummins_4931169_cff9f6b0.jpg', category: 'Engine System' },
      { id: 'cm-sp-28', partNumber: '4934058', name: '活塞冷却喷嘴', description: 'Cummins 4934058 - 活塞冷却喷嘴. 活塞冷却喷嘴，喷射机油冷却活塞。 Compatible with: 福田欧马可、江淮帅铃. Engine Models: ISF 3.8. Specifications: 铜制喷嘴，喷油量 0.5L/min.', image: '/manus-storage/cummins_4934058_74c8ce70.jpg', category: 'Engine System' },
      { id: 'cm-sp-29', partNumber: '4941464', name: '缸盖螺栓', description: 'Cummins 4941464 - 缸套. 发动机缸套，提供活塞运动的空间。 Compatible with: 陕汽 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 铸铁，壁厚 5mm.', image: '/manus-storage/cummins_4941464_b12100d6.jpg', category: 'Engine System' },
      { id: 'cm-sp-30', partNumber: '4981794', name: '连杆总成', description: 'Cummins 4981794 - 进气阀. 发动机进气阀，控制进气行程，采用耐热合金钢。 Compatible with: 福田欧马可、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 合金钢，头部直径 35mm.', image: '/manus-storage/4981794(2)_cd8e079b.webp', category: 'Engine System' },
      { id: 'cm-sp-31', partNumber: '4981795', name: '连杆瓦', description: 'Cummins 4981795 - 连杆瓦. 发动机连杆轴承，承受往复运动的连杆载荷。 Compatible with: 福田欧马可、江淮帅铃、陕汽 K3000. Engine Models: ISF 3.8. Specifications: 铜铅合金，厚度 1.5mm.', image: '/manus-storage/cummins_4981795_340aae63.jpg', category: 'Engine System' },
      { id: 'cm-sp-32', partNumber: '4987914', name: '主轴瓦', description: 'Cummins 4987914 - 主轴瓦. 曲轴主轴承，支撑曲轴旋转。 Compatible with: 福田奥铃、陕汽 L3000. Engine Models: ISF 3.8. Specifications: 铜铅合金，厚度 2mm.', image: '/manus-storage/cummins_4987914_fe46f482.jpg', category: 'Engine System' },
      { id: 'cm-sp-33', partNumber: '4987917', name: '止推片', description: 'Cummins 4987917 - 止推片. 曲轴止推片，限制曲轴轴向运动。 Compatible with: 福田欧马可、江淮骏铃. Engine Models: ISF 3.8. Specifications: 青铜片，厚度 3mm.', image: '/manus-storage/cummins_4987917_d7d1a945.jpg', category: 'Engine System' },
      { id: 'cm-sp-34', partNumber: '4988747', name: '机油泵', description: 'Cummins 4988747 - 机油泵. 发动机机油泵，循环供油，采用齿轮泵设计。 Compatible with: 陕汽德龙 K3000、福田欧马可. Engine Models: ISF 3.8. Specifications: 齿轮泵，流量 60L/min.', image: '/manus-storage/cummins_4988747_3766fb1d.jpg', category: 'Lubrication System' },
      { id: 'cm-sp-35', partNumber: '5320276', name: '水泵总成', description: 'Cummins 5320276 - 水泵总成. 发动机冷却水泵，循环冷却液，采用铝制泵体。 Compatible with: 福田欧马可、陕汽 L3000. Engine Models: ISF 3.8 / 2.8. Specifications: 铝制泵体，流量 80L/min.', image: '/manus-storage/cummins_5320276_5b9a1160.jpg', category: 'Cooling System' },
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
        id: 'wc-wp6-new',
        model: 'WP6',
        name: 'Diesel Engine',
        specs: '6L | 110-150 kW | 6 cylinders',
        image: '/manus-storage/weichai_wp6_64264921.jpeg',
        description: 'Weichai WP6 Diesel Engine. Mid-range six-cylinder turbocharged diesel engine for construction and truck applications. Displacement: 6L. Power Output: 110-150 kW (147-200 HP). Torque: 400-600 Nm. Fuel Type: Diesel. Emissions Standard: Euro 3/4. Ideal for loaders, graders, and medium-duty trucks.'
      },
      {
        id: 'wc-wp10-new',
        model: 'WP10',
        name: 'Diesel Engine',
        specs: '10L | 220-280 kW | 6 cylinders',
        image: '/manus-storage/weichai_wp10_be83cdd4.jpeg',
        description: 'Weichai WP10 Diesel Engine. Heavy-duty six-cylinder turbocharged diesel engine for large trucks and equipment. Displacement: 10L. Power Output: 220-280 kW (295-375 HP). Torque: 800-1000 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4. Perfect for dump trucks, mixers, and large excavators.'
      },
      {
        id: 'wc-wp12-new',
        model: 'WP12',
        name: 'Diesel Engine',
        specs: '12L | 280-350 kW | 6 cylinders',
        image: '/manus-storage/weichai_wp12_d4fb24b3.jpg',
        description: 'Weichai WP12 Diesel Engine. Ultra-heavy-duty six-cylinder turbocharged diesel engine for maximum power applications. Displacement: 12L. Power Output: 280-350 kW (375-470 HP). Torque: 1000-1200 Nm. Fuel Type: Diesel. Emissions Standard: Euro 4/5. Ideal for heavy-duty dump trucks and mining equipment.'
      },
      {
        id: 'wc-wp13-new',
        model: 'WP13',
        name: 'Diesel Engine',
        specs: '13L | 300-380 kW | 6 cylinders',
        image: '/manus-storage/weichai_wp13_cf7310d8.jpg',
        description: 'Weichai WP13 Diesel Engine. Premium six-cylinder turbocharged diesel engine for ultra-heavy-duty applications. Displacement: 13L. Power Output: 300-380 kW (400-510 HP). Torque: 1100-1400 Nm. Fuel Type: Diesel. Emissions Standard: Euro 5. Perfect for large dump trucks, concrete pump trucks, and mining operations.'
      }
    ],
    spareParts: [
      { id: 'wc-sp-oil-filter', partNumber: 'WD615.47', name: '机油滤清器 (Oil Filter)', description: '潍柴 WD615 系列发动机机油滤清器，高效过滤发动机机油中的杂质和污染物，保护发动机寿命。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/2pLOTXYgjNj7_fbf89341.webp', category: 'Lubrication System' },
      { id: 'wc-sp-fuel-filter', partNumber: 'WD615.48', name: '燃油滤清器 (Fuel Filter)', description: '潍柴原厂燃油滤清器，精密过滤燃油中的杂质，提高燃油喷射精度，延长喷油器寿命。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/aVqla6ayZoN7_c367eff8.jpg', category: 'Fuel System' },
      { id: 'wc-sp-air-filter', partNumber: 'WD615.49', name: '空气滤清器 (Air Filter)', description: '潍柴高效空气滤清器，有效过滤进气中的灰尘和污染物，保证发动机进气清洁。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/KRoaO0aSy76f_55963d55.jpg', category: 'Engine System' },
      { id: 'wc-sp-piston-ring', partNumber: 'WD615.50', name: '活塞环套件 (Piston Ring Set)', description: '潍柴原厂活塞环，精密加工，耐高温耐磨损，确保发动机密封性能。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/25m1DaILzdQN_9146ba84.jpg', category: 'Engine System' },
      { id: 'wc-sp-connecting-rod', partNumber: 'WD615.51', name: '连杆瓦 (Connecting Rod Bearing)', description: '潍柴连杆瓦，采用高强度合金材料，承载能力强，耐磨性好。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/EybUq9Zt8lj2_dc09746c.jpg', category: 'Engine System' },
      { id: 'wc-sp-main-bearing', partNumber: 'WD615.52', name: '主轴承套件 (Main Bearing Set)', description: '潍柴主轴承，精密加工，确保曲轴运转平稳，减少振动和噪音。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/Irhm1QUOw6PT_10bcfc69.webp', category: 'Engine System' },
      { id: 'wc-sp-valve-seal', partNumber: 'WD615.53', name: '气门油封 (Valve Oil Seal)', description: '潍柴气门油封，防止机油泄漏，保护气门导管，延长发动机寿命。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/RCtq76O6Gvj0_af56ca83.webp', category: 'Engine System' },
      { id: 'wc-sp-intake-valve', partNumber: 'WD615.54', name: '进气门 (Intake Valve)', description: '潍柴进气门，精密铸造，耐高温，确保进气效率和发动机性能。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/XFXeeTbb8OWJ_af011932.webp', category: 'Engine System' },
      { id: 'wc-sp-exhaust-valve', partNumber: 'WD615.55', name: '排气门 (Exhaust Valve)', description: '潍柴排气门，耐高温耐腐蚀，确保排气畅通，保证发动机正常运转。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/Tc8DG4d4KHXE_b7eaae48.webp', category: 'Engine System' },
      { id: 'wc-sp-water-pump', partNumber: 'WD615.56', name: '水泵 (Water Pump)', description: '潍柴水泵，高效循环冷却液，保持发动机工作温度，防止过热。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/Ddut7EfwwSJ7_12e1b77c.webp', category: 'Cooling System' },
      { id: 'wc-sp-thermostat', partNumber: 'WD615.57', name: '节温器 (Thermostat)', description: '潍柴节温器，精确控制冷却液温度，提高发动机效率，降低油耗。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/gGXpsSW7Y760_c91cc3f9.jpg', category: 'Cooling System' },
      { id: 'wc-sp-injector', partNumber: 'WD615.58', name: '喷油器 (Fuel Injector)', description: '潍柴喷油器，精密喷射，雾化效果好，提高燃油利用率和发动机性能。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/sTdwnu1ofWBX_e4503289.webp', category: 'Fuel System' },
      { id: 'wc-sp-fuel-pipe', partNumber: 'WD615.59', name: '高压油管 (High Pressure Fuel Pipe)', description: '潍柴高压油管，耐高压，防泄漏，确保燃油稳定供应。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/mTRIIbz5npZ7_ac87be38.jpg', category: 'Fuel System' },
      { id: 'wc-sp-front-seal', partNumber: 'WD615.60', name: '前油封 (Front Oil Seal)', description: '潍柴前油封，防止机油泄漏，保护曲轴，延长发动机寿命。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/CeNZLuLgECIi_ebff47dc.webp', category: 'Engine System' },
      { id: 'wc-sp-rear-seal', partNumber: 'WD615.61', name: '后油封 (Rear Oil Seal)', description: '潍柴后油封，防止机油泄漏，保护曲轴后端，确保发动机密封。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/0O0Eyc6Levn4_4987ba86.webp', category: 'Engine System' },
      { id: 'wc-sp-hydraulic-filter', partNumber: 'WD615.62', name: '液压油滤清器 (Hydraulic Oil Filter)', description: '潍柴液压油滤清器，过滤液压系统中的杂质，保护液压元件。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/4QlS3RdfrWXV_4c383fdb.png', category: 'Lubrication System' },
      { id: 'wc-sp-coolant-hose', partNumber: 'WD615.63', name: '冷却液管 (Coolant Hose)', description: '潍柴冷却液管，耐高温耐压，确保冷却液循环畅通。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/l04iiQ8VXpuV_6009392e.jpg', category: 'Cooling System' },
      { id: 'wc-sp-oil-cooler', partNumber: 'WD615.64', name: '机油冷却器 (Oil Cooler)', description: '潍柴机油冷却器，有效降低机油温度，保护发动机，延长机油寿命。兼容车型：陕汽、中国重汽、福田等。发动机型号：WD615、WD10、WD12。', image: '/manus-storage/G4hOmf1Mbs1L_c21a9ea8.jpg', category: 'Lubrication System' },
    ]
  },
];
