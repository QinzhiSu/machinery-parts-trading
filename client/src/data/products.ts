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
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/excavator-caterpillar-9xF7KEMRVew2dhnpWk5VNU.webp',
        description: 'CAT 320D Hydraulic Excavator. Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Cooling System: Radiator with fan. Transmission: Hydrostatic. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for general excavation, loading, and material handling.'
      },
      {
        id: 'cat-320d2',
        model: 'CAT 320D2',
        name: 'Hydraulic Excavator',
        specs: '20.8 ton | 121 kW | 1.19 m³ bucket | Operating Weight: 20,800 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/excavator-caterpillar-9xF7KEMRVew2dhnpWk5VNU.webp',
        description: 'CAT 320D2 Hydraulic Excavator (Generation 2). Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Enhanced Features: Improved fuel efficiency, better hydraulic controls, reduced emissions. Travel Speed: 4.5 km/h. Swing Speed: 12 rpm. Perfect for construction, landscaping, and utility work.'
      },
      {
        id: 'cat-320gc',
        model: 'CAT 320 GC',
        name: 'Hydraulic Excavator (Gas Powered)',
        specs: '20.5 ton | 121 kW | 1.19 m³ bucket | Operating Weight: 20,500 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/excavator-caterpillar-9xF7KEMRVew2dhnpWk5VNU.webp',
        description: 'CAT 320 GC Hydraulic Excavator (Natural Gas). Engine: Caterpillar C6.4 Natural Gas (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Fuel Tank: 180 L (Gas). Hydraulic System: 280 bar. Eco-friendly alternative fuel option. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for environmentally sensitive projects.'
      },
      {
        id: 'cat-330c',
        model: 'CAT 330C',
        name: 'Hydraulic Excavator',
        specs: '30 ton | 168 kW | 1.69 m³ bucket | Operating Weight: 30,000 kg',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'CAT 330C Hydraulic Excavator. Engine: Caterpillar C7.1 Diesel (168 kW/225 HP). Bucket Capacity: 1.69 m³. Max Digging Depth: 7.2 m. Boom Length: 7.1 m. Stick Length: 2.7 m. Undercarriage: Rubber Track (700mm). Hydraulic System: 280 bar. Fuel Tank: 250 L. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for medium to large-scale excavation, mining, and earthmoving projects.'
      },
      {
        id: 'cat-336d',
        model: 'CAT 336D',
        name: 'Hydraulic Excavator',
        specs: '36.5 ton | 206 kW | 2.1 m³ bucket | Operating Weight: 36,500 kg',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        description: 'CAT 336D Hydraulic Excavator. Engine: Caterpillar C9 Diesel (206 kW/276 HP). Bucket Capacity: 2.1 m³. Max Digging Depth: 7.5 m. Boom Length: 7.4 m. Stick Length: 2.8 m. Undercarriage: Rubber Track (800mm). Hydraulic System: 280 bar. Fuel Tank: 300 L. Swing Speed: 11 rpm. Travel Speed: 4.5 km/h. Perfect for large-scale mining, quarrying, and heavy construction.'
      },
      // ===== DOZERS (Bulldozers) =====
      {
        id: 'cat-d6r',
        model: 'CAT D6R',
        name: 'Bulldozer',
        specs: '18 ton | 138 kW | SU blade 4.6 m³ | Operating Weight: 18,000 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'CAT D6R Bulldozer. Engine: Caterpillar C6.4 Diesel (138 kW/185 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Height: 1.27 m. Blade Capacity: 4.6 m³. Undercarriage: Steel Track (457mm). Transmission: Hydrostatic. Drawbar Pull: 185 kN. Travel Speed: 11 km/h. Fuel Tank: 180 L. Ideal for general dozing, land clearing, and construction site preparation.'
      },
      {
        id: 'cat-d6t',
        model: 'CAT D6T',
        name: 'Bulldozer',
        specs: '19 ton | 149 kW | SU blade 4.6 m³ | Operating Weight: 19,000 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'CAT D6T Bulldozer. Engine: Caterpillar C6.4 Diesel (149 kW/200 HP). Blade Type: Standard Straight (SU). Blade Width: 3.66 m. Blade Height: 1.27 m. Blade Capacity: 4.6 m³. Undercarriage: Steel Track (457mm). Transmission: Hydrostatic. Drawbar Pull: 200 kN. Travel Speed: 11 km/h. Fuel Tank: 200 L. Enhanced power and efficiency for heavy-duty dozing operations.'
      },
      {
        id: 'cat-d7r',
        model: 'CAT D7R',
        name: 'Bulldozer',
        specs: '28 ton | 186 kW | SU blade 7.4 m³ | Operating Weight: 28,000 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'CAT D7R Bulldozer. Engine: Caterpillar C9 Diesel (186 kW/250 HP). Blade Type: Standard Straight (SU). Blade Width: 4.27 m. Blade Height: 1.73 m. Blade Capacity: 7.4 m³. Undercarriage: Steel Track (610mm). Transmission: Hydrostatic. Drawbar Pull: 280 kN. Travel Speed: 10.5 km/h. Fuel Tank: 300 L. Excellent for large-scale earthmoving and mining applications.'
      },
      {
        id: 'cat-d8r',
        model: 'CAT D8R',
        name: 'Bulldozer',
        specs: '38 ton | 231 kW | SU blade 10.5 m³ | Operating Weight: 38,000 kg',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'CAT D8R Bulldozer. Engine: Caterpillar C15 Diesel (231 kW/310 HP). Blade Type: Standard Straight (SU). Blade Width: 4.88 m. Blade Height: 2.15 m. Blade Capacity: 10.5 m³. Undercarriage: Steel Track (762mm). Transmission: Hydrostatic. Drawbar Pull: 380 kN. Travel Speed: 10.5 km/h. Fuel Tank: 450 L. Perfect for major mining, quarrying, and heavy construction projects.'
      },
      // ===== WHEEL LOADERS =====
      {
        id: 'cat-950h',
        model: 'CAT 950H',
        name: 'Wheel Loader',
        specs: '20 ton | 138 kW | 2.2 m³ bucket | Operating Weight: 20,000 kg',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'CAT 950H Wheel Loader. Engine: Caterpillar C6.4 Diesel (138 kW/185 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Transmission: Torque Converter. Travel Speed: 40 km/h. Fuel Tank: 200 L. Ideal for general loading, material handling, and construction site work.'
      },
      {
        id: 'cat-950l',
        model: 'CAT 950L',
        name: 'Wheel Loader',
        specs: '21 ton | 149 kW | 2.2 m³ bucket | Operating Weight: 21,000 kg',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'CAT 950L Wheel Loader. Engine: Caterpillar C6.4 Diesel (149 kW/200 HP). Bucket Capacity: 2.2 m³. Max Lift Height: 3.2 m. Lift Capacity at Full Height: 8.5 ton. Undercarriage: 4-Wheel Drive. Tire Size: 20.5R25. Transmission: Torque Converter. Travel Speed: 40 km/h. Fuel Tank: 220 L. Enhanced power and performance for demanding loading operations.'
      },
      {
        id: 'cat-966h',
        model: 'CAT 966H',
        name: 'Wheel Loader',
        specs: '24 ton | 186 kW | 3.1 m³ bucket | Operating Weight: 24,000 kg',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'CAT 966H Wheel Loader. Engine: Caterpillar C9 Diesel (186 kW/250 HP). Bucket Capacity: 3.1 m³. Max Lift Height: 3.4 m. Lift Capacity at Full Height: 11 ton. Undercarriage: 4-Wheel Drive. Tire Size: 23.5R25. Transmission: Torque Converter. Travel Speed: 42 km/h. Fuel Tank: 280 L. Perfect for medium to large-scale loading and material handling.'
      },
      {
        id: 'cat-966l',
        model: 'CAT 966L',
        name: 'Wheel Loader',
        specs: '25 ton | 206 kW | 3.1 m³ bucket | Operating Weight: 25,000 kg',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
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
      { id: 'xcmg-sp-1', partNumber: 'XE215C-01-0001', name: 'Engine Oil Filter', description: 'Engine oil filter for XCMG XE215C excavator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-2', partNumber: 'XE215C-02-0001', name: 'Fuel Filter', description: 'Fuel filter for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-3', partNumber: 'XE215C-03-0001', name: 'Air Filter', description: 'Air cleaner element for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-4', partNumber: 'LW500FN-04-0001', name: 'Hydraulic Filter', description: 'Hydraulic filter for XCMG wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'xcmg-sp-5', partNumber: 'XE215C-05-0001', name: 'Track Link', description: 'Track link assembly for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'xcmg-sp-6', partNumber: 'XE215C-06-0001', name: 'Bucket Tooth', description: 'Bucket tooth for XCMG excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
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
        id: 'lg-clg856',
        model: 'CLG856',
        name: 'Wheel Loader',
        specs: '18 ton | 162 kW | 3.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The LiuGong CLG856 wheel loader offers reliable performance and excellent value.'
      },
      {
        id: 'lg-clg920',
        model: 'CLG920',
        name: 'Wheel Loader',
        specs: '20 ton | 186 kW | 3.5 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The CLG920 wheel loader provides excellent performance for heavy-duty applications.'
      },
      {
        id: 'lg-clg922',
        model: 'CLG922',
        name: 'Wheel Loader',
        specs: '22 ton | 206 kW | 3.8 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The CLG922 is a high-performance wheel loader for demanding applications.'
      },
      {
        id: 'lg-cde110',
        model: 'CDE110',
        name: 'Hydraulic Excavator',
        specs: '11 ton | 75 kW | 0.55 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The LiuGong CDE110 mini excavator is perfect for compact construction sites.'
      }
    ],
    spareParts: [
      { id: 'lg-sp-1', partNumber: 'CLG856-01-0001', name: 'Engine Oil Filter', description: 'Engine oil filter for LiuGong wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-2', partNumber: 'CLG856-02-0001', name: 'Fuel Filter', description: 'Fuel filter for LiuGong loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-3', partNumber: 'CLG856-03-0001', name: 'Air Filter', description: 'Air cleaner element for LiuGong machinery', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-4', partNumber: 'CLG856-04-0001', name: 'Hydraulic Filter', description: 'Hydraulic filter for LiuGong wheel loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-5', partNumber: 'CLG856-05-0001', name: 'Transmission Filter', description: 'Transmission filter for LiuGong loaders', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'lg-sp-6', partNumber: 'CDE110-06-0001', name: 'Bucket Tooth', description: 'Bucket tooth for LiuGong excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
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
        id: 'sany-sy215c',
        model: 'SY215C',
        name: 'Hydraulic Excavator',
        specs: '21 ton | 122 kW | 1.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SANY SY215C excavator delivers reliable performance for construction and mining.'
      },
      {
        id: 'sany-sy365c',
        model: 'SY365C',
        name: 'Hydraulic Excavator',
        specs: '36 ton | 206 kW | 1.8 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SY365C is a large excavator for heavy-duty mining and construction.'
      },
      {
        id: 'sany-sy465h',
        model: 'SY465H',
        name: 'Hydraulic Excavator',
        specs: '46 ton | 250 kW | 2.3 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SY465H is a premium large excavator for major mining operations.'
      },
      {
        id: 'sany-sy50c',
        model: 'SY50C',
        name: 'Mini Excavator',
        specs: '5 ton | 37 kW | 0.2 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SANY SY50C mini excavator is perfect for small-scale construction work.'
      },
      {
        id: 'sany-sy75c',
        model: 'SY75C',
        name: 'Mini Excavator',
        specs: '7.5 ton | 54 kW | 0.3 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SY75C mini excavator offers excellent maneuverability for tight spaces.'
      },
      {
        id: 'sany-sy135c',
        model: 'SY135C',
        name: 'Hydraulic Excavator',
        specs: '13.5 ton | 97 kW | 0.6 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The SY135C is a compact excavator for versatile construction applications.'
      }
    ],
    spareParts: [
      { id: 'sany-sp-1', partNumber: 'SY215C-01-0001', name: 'Engine Oil Filter', description: 'Engine oil filter for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-2', partNumber: 'SY215C-02-0001', name: 'Fuel Filter', description: 'Fuel filter for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-3', partNumber: 'SY215C-03-0001', name: 'Air Filter', description: 'Air cleaner element for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-4', partNumber: 'SY215C-04-0001', name: 'Hydraulic Filter', description: 'Hydraulic filter for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Filters' },
      { id: 'sany-sp-5', partNumber: 'SY215C-05-0001', name: 'Track Link', description: 'Track link assembly for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Undercarriage' },
      { id: 'sany-sp-6', partNumber: 'SY215C-06-0001', name: 'Bucket Tooth', description: 'Bucket tooth for SANY excavators', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Ground Engaging Tools' },
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
        id: 'km-pc200',
        model: 'PC200',
        name: 'Hydraulic Excavator',
        specs: '20 ton | 110 kW | 1.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Komatsu PC200 excavator is a versatile mid-size machine for general construction.'
      },
      {
        id: 'km-pc300',
        model: 'PC300',
        name: 'Hydraulic Excavator',
        specs: '30 ton | 162 kW | 1.6 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The PC300 is a large excavator designed for heavy-duty mining and construction.'
      },
      {
        id: 'km-pc400',
        model: 'PC400',
        name: 'Hydraulic Excavator',
        specs: '40 ton | 206 kW | 2.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The PC400 is a premium large excavator for major mining operations.'
      },
      {
        id: 'km-wa320',
        model: 'WA320',
        name: 'Wheel Loader',
        specs: '20 ton | 138 kW | 3.0 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The Komatsu WA320 wheel loader offers excellent performance and reliability.'
      },
      {
        id: 'km-wa380',
        model: 'WA380',
        name: 'Wheel Loader',
        specs: '24 ton | 186 kW | 3.5 m³ bucket',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80',
        description: 'The WA380 wheel loader provides excellent loading capacity and efficiency.'
      },
      {
        id: 'km-d65px',
        model: 'D65PX',
        name: 'Bulldozer',
        specs: '22 ton | 162 kW | SU blade 5.6 m³',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/bulldozer-shantui-GeiAbRUNPRA3FmNtE8gKWU.webp',
        description: 'The Komatsu D65PX bulldozer delivers excellent performance for dozing and pushing.'
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
        id: 'iz-fvr34',
        model: 'FVR34',
        name: 'Heavy Duty Truck',
        specs: '20 ton | 190 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Isuzu FVR34 is a reliable heavy-duty truck for construction and logistics.'
      },
      {
        id: 'iz-fvr35',
        model: 'FVR35',
        name: 'Heavy Duty Truck',
        specs: '25 ton | 210 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The FVR35 offers enhanced power and capacity for heavy-duty applications.'
      },
      {
        id: 'iz-giga',
        model: 'GIGA',
        name: 'Heavy Duty Truck',
        specs: '30 ton | 250 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The GIGA is Isuzu\'s premium heavy-duty truck for demanding applications.'
      },
      {
        id: 'iz-elf',
        model: 'ELF',
        name: 'Medium Duty Truck',
        specs: '12 ton | 130 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The ELF is a versatile medium-duty truck for urban and construction use.'
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
        id: 'sm-x3000',
        model: 'X3000',
        name: 'Heavy Duty Truck',
        specs: '25 ton | 290 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Shacman X3000 is a premium heavy-duty truck for long-distance hauling.'
      },
      {
        id: 'sm-f3000',
        model: 'F3000',
        name: 'Heavy Duty Truck',
        specs: '20 ton | 250 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The F3000 offers reliable performance for construction and mining.'
      },
      {
        id: 'sm-m3000',
        model: 'M3000',
        name: 'Medium Duty Truck',
        specs: '15 ton | 190 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The M3000 is a versatile medium-duty truck for urban and regional transport.'
      },
      {
        id: 'sm-l3000',
        model: 'L3000',
        name: 'Light Duty Truck',
        specs: '10 ton | 150 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The L3000 is an economical light-duty truck for general cargo transport.'
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
        id: 'st-howo-a7',
        model: 'HOWO A7',
        name: 'Heavy Duty Truck',
        specs: '25 ton | 290 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Sinotruk HOWO A7 is a premium heavy-duty truck for long-distance hauling.'
      },
      {
        id: 'st-howo-t5g',
        model: 'HOWO T5G',
        name: 'Heavy Duty Truck',
        specs: '20 ton | 250 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The HOWO T5G offers reliable performance for construction and mining.'
      },
      {
        id: 'st-howo-vx',
        model: 'HOWO VX',
        name: 'Medium Duty Truck',
        specs: '15 ton | 190 kW | 6-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The HOWO VX is a versatile medium-duty truck for urban and regional transport.'
      },
      {
        id: 'st-howo-light',
        model: 'HOWO Light Duty',
        name: 'Light Duty Truck',
        specs: '10 ton | 150 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The HOWO Light Duty is an economical truck for general cargo transport.'
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
        id: 'ty-landcruiser',
        model: 'Land Cruiser',
        name: 'Heavy Duty Truck',
        specs: '3.5 ton | 120 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Toyota Land Cruiser is a legendary heavy-duty truck for off-road and construction.'
      },
      {
        id: 'ty-hilux',
        model: 'Hilux',
        name: 'Pickup Truck',
        specs: '2.8 ton | 110 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Toyota Hilux is a versatile pickup truck for construction and utility work.'
      },
      {
        id: 'ty-coaster',
        model: 'Coaster',
        name: 'Commercial Bus',
        specs: '5 ton | 110 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Toyota Coaster is a reliable commercial bus for passenger transport.'
      },
      {
        id: 'ty-dyna',
        model: 'Dyna',
        name: 'Medium Duty Truck',
        specs: '3 ton | 95 kW | 4-cylinder diesel',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/truck-lineup-BTngFzLT6659jP3HKE93B4.webp',
        description: 'The Toyota Dyna is a compact medium-duty truck for urban delivery.'
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
        id: 'cm-b6.7',
        model: 'B6.7',
        name: 'Diesel Engine',
        specs: '6.7L | 205 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Cummins B6.7 is a reliable diesel engine for medium-duty applications.'
      },
      {
        id: 'cm-l9',
        model: 'L9',
        name: 'Diesel Engine',
        specs: '8.9L | 265 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The L9 is a powerful diesel engine for heavy-duty construction and mining.'
      },
      {
        id: 'cm-x12',
        model: 'X12',
        name: 'Diesel Engine',
        specs: '11.9L | 310 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The X12 is a premium diesel engine for major mining and industrial applications.'
      },
      {
        id: 'cm-qsx15',
        model: 'QSX15',
        name: 'Diesel Engine',
        specs: '14.9L | 373 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The QSX15 is a high-performance diesel engine for extreme duty applications.'
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
        id: 'wc-wp6',
        model: 'WP6',
        name: 'Diesel Engine',
        specs: '6.0L | 162 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The Weichai WP6 is a reliable diesel engine for medium-duty applications.'
      },
      {
        id: 'wc-wp9',
        model: 'WP9',
        name: 'Diesel Engine',
        specs: '8.9L | 250 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The WP9 is a powerful diesel engine for heavy-duty construction and mining.'
      },
      {
        id: 'wc-wp10',
        model: 'WP10',
        name: 'Diesel Engine',
        specs: '10.0L | 290 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The WP10 is a premium diesel engine for major mining and industrial applications.'
      },
      {
        id: 'wc-wp12',
        model: 'WP12',
        name: 'Diesel Engine',
        specs: '12.0L | 340 kW | 6-cylinder',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'The WP12 is a high-performance diesel engine for extreme duty applications.'
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
