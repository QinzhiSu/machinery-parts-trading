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
        specs: '8.5 ton | 110 kW | 3.0 m³ bucket',
        image: '/manus-storage/856HE_348e297a.png',
        description: 'LiuGong 856HE Wheel Loader. Engine: Weichai WD615 (110 kW (150 HP)). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-856t',
        model: '856T',
        name: 'Wheel Loader',
        specs: '8.5 ton | 110 kW | 3.0 m³ bucket',
        image: '/manus-storage/856T_b17d0d76.png',
        description: 'LiuGong 856T Wheel Loader. Engine: Weichai WD615 (110 kW (150 HP)). Bucket Capacity: 3.0 m³. Operating Weight: 8,500 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-870he',
        model: '870HE',
        name: 'Wheel Loader',
        specs: '8.7 ton | 115 kW | 3.2 m³ bucket',
        image: '/manus-storage/870HE_9128d7b0.png',
        description: 'LiuGong 870HE Wheel Loader. Engine: Weichai WD615 (115 kW (156 HP)). Bucket Capacity: 3.2 m³. Operating Weight: 8,700 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-890t',
        model: '890T',
        name: 'Wheel Loader',
        specs: '8.9 ton | 120 kW | 3.4 m³ bucket',
        image: '/manus-storage/890T_b1caed62.png',
        description: 'LiuGong 890T Wheel Loader. Engine: Weichai WD615 (120 kW (163 HP)). Bucket Capacity: 3.4 m³. Operating Weight: 8,900 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-922e',
        model: '922E',
        name: 'Wheel Loader',
        specs: '9.2 ton | 125 kW | 3.6 m³ bucket',
        image: '/manus-storage/922E_83b68604.png',
        description: 'LiuGong 922E Wheel Loader. Engine: Weichai WD615 (125 kW (170 HP)). Bucket Capacity: 3.6 m³. Operating Weight: 9,200 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-922fe',
        model: '922FE',
        name: 'Wheel Loader',
        specs: '9.2 ton | 130 kW | 3.8 m³ bucket',
        image: '/manus-storage/922FE_c5980235.png',
        description: 'LiuGong 922FE Wheel Loader. Engine: Weichai WD615 (130 kW (177 HP)). Bucket Capacity: 3.8 m³. Operating Weight: 9,200 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-933e',
        model: '933E',
        name: 'Wheel Loader',
        specs: '9.3 ton | 135 kW | 4.0 m³ bucket',
        image: '/manus-storage/933E_3ef67cc8.png',
        description: 'LiuGong 933E Wheel Loader. Engine: Weichai WD615 (135 kW (184 HP)). Bucket Capacity: 4.0 m³. Operating Weight: 9,300 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-936e',
        model: '936E',
        name: 'Wheel Loader',
        specs: '9.6 ton | 140 kW | 4.2 m³ bucket',
        image: '/manus-storage/936E_81aed160.png',
        description: 'LiuGong 936E Wheel Loader. Engine: Weichai WD615 (140 kW (190 HP)). Bucket Capacity: 4.2 m³. Operating Weight: 9,600 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-938ehd',
        model: '938EHD',
        name: 'Wheel Loader',
        specs: '9.8 ton | 145 kW | 4.4 m³ bucket',
        image: '/manus-storage/938EHD_5215f127.png',
        description: 'LiuGong 938EHD Wheel Loader. Engine: Weichai WD615 (145 kW (197 HP)). Bucket Capacity: 4.4 m³. Operating Weight: 9,800 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-952f',
        model: '952F',
        name: 'Wheel Loader',
        specs: '9.5 ton | 142 kW | 4.3 m³ bucket',
        image: '/manus-storage/952F_def2cd67.png',
        description: 'LiuGong 952F Wheel Loader. Engine: Weichai WD615 (142 kW (193 HP)). Bucket Capacity: 4.3 m³. Operating Weight: 9,500 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-965f',
        model: '965F',
        name: 'Wheel Loader',
        specs: '9.6 ton | 148 kW | 4.5 m³ bucket',
        image: '/manus-storage/965F_729648e6.png',
        description: 'LiuGong 965F Wheel Loader. Engine: Weichai WD615 (148 kW (201 HP)). Bucket Capacity: 4.5 m³. Operating Weight: 9,600 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-8128h',
        model: '8128H',
        name: 'Hydraulic Excavator',
        specs: '12.8 ton | 85 kW | 0.50 m³ bucket',
        image: '/manus-storage/8128H_2a9ec8db.png',
        description: 'LiuGong 8128H Hydraulic Excavator. Engine: Weichai WD615 (85 kW (115 HP)). Bucket Capacity: 0.50 m³. Operating Weight: 12,800 kg. Perfect for excavation and material handling.'
      },
      {
        id: 'lg-6608f',
        model: '6608F',
        name: 'Wheel Loader',
        specs: '6.6 ton | 95 kW | 2.5 m³ bucket',
        image: '/manus-storage/6608F_d4164c38.png',
        description: 'LiuGong 6608F Wheel Loader. Engine: Weichai WD615 (95 kW (129 HP)). Bucket Capacity: 2.5 m³. Operating Weight: 6,600 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-4215d',
        model: '4215D',
        name: 'Wheel Loader',
        specs: '4.2 ton | 65 kW | 1.8 m³ bucket',
        image: '/manus-storage/4215D_7f783cbc.png',
        description: 'LiuGong 4215D Wheel Loader. Engine: Weichai WD615 (65 kW (88 HP)). Bucket Capacity: 1.8 m³. Operating Weight: 4,200 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-clg764a',
        model: 'CLG764A',
        name: 'Wheel Loader',
        specs: '7.6 ton | 105 kW | 2.8 m³ bucket',
        image: '/manus-storage/CLG764A_360fbab5.png',
        description: 'LiuGong CLG764A Wheel Loader. Engine: Weichai WD615 (105 kW (143 HP)). Bucket Capacity: 2.8 m³. Operating Weight: 7,600 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-clg777a',
        model: 'CLG777A',
        name: 'Wheel Loader',
        specs: '7.7 ton | 108 kW | 2.9 m³ bucket',
        image: '/manus-storage/placeholder.png',
        description: 'LiuGong CLG777A Wheel Loader. Engine: Weichai WD615 (108 kW (147 HP)). Bucket Capacity: 2.9 m³. Operating Weight: 7,700 kg. Perfect for loading, material handling, and construction work.'
      },
      {
        id: 'lg-dw105ae',
        model: 'DW105AE',
        name: 'Bulldozer',
        specs: '10.5 ton | 78 kW | Blade: 3.0 m',
        image: '/manus-storage/DW105AE_0cd6820d.png',
        description: 'LiuGong DW105AE Bulldozer. Engine: Weichai WD615 (78 kW (106 HP)). Blade Width: 3.0 m. Operating Weight: 10,500 kg. Ideal for grading and land preparation.'
      },
      {
        id: 'lg-td16n',
        model: 'TD16N',
        name: 'Bulldozer',
        specs: '16 ton | 110 kW | Blade: 3.5 m',
        image: '/manus-storage/TD16N_9729a409.png',
        description: 'LiuGong TD16N Bulldozer. Engine: Weichai WD615 (110 kW (150 HP)). Blade Width: 3.5 m. Operating Weight: 16,000 kg. Ideal for grading and land preparation.'
      },
      {
        id: 'lg-de100c',
        model: 'de100c',
        name: 'Bulldozer',
        specs: '10 ton | 75 kW | Blade: 2.8 m',
        image: '/manus-storage/de100c_e261d9a3.png',
        description: 'LiuGong de100c Bulldozer. Engine: Weichai WD615 (75 kW (102 HP)). Blade Width: 2.8 m. Operating Weight: 10,000 kg. Ideal for grading and land preparation.'
      },
      {
        id: 'lg-dw90',
        model: 'dw90',
        name: 'Bulldozer',
        specs: '9 ton | 65 kW | Blade: 2.5 m',
        image: '/manus-storage/dw90_2628074a.png',
        description: 'LiuGong dw90 Bulldozer. Engine: Weichai WD615 (65 kW (88 HP)). Blade Width: 2.5 m. Operating Weight: 9,000 kg. Ideal for grading and land preparation.'
      },
      {
        id: 'lg-ltc900t5',
        model: 'ltc900t5',
        name: 'Truck Crane',
        specs: '90 ton | 350 kW | Max Boom: 45 m',
        image: '/manus-storage/ltc900t5_5b01386e.png',
        description: 'LiuGong ltc900t5 Truck Crane. Engine: Weichai WD615 (350 kW (476 HP)). Max Lifting Capacity: 90 ton. Max Boom Length: 45 m. Perfect for heavy lifting and construction.'
      },
    ],
    spareParts: [
      { id: 'lg-filter-air', partNumber: 'AF26M', name: 'Air Filter', description: 'High-quality air filter for LiuGong machinery', image: '/manus-storage/placeholder.png', category: 'Filters' },
      { id: 'lg-filter-oil', partNumber: 'LF3M', name: 'Oil Filter', description: 'Premium oil filter for engine protection', image: '/manus-storage/placeholder.png', category: 'Filters' },
      { id: 'lg-filter-fuel', partNumber: 'FF5M', name: 'Fuel Filter', description: 'Fuel filter for clean combustion', image: '/manus-storage/placeholder.png', category: 'Filters' },
      { id: 'lg-bucket-tooth', partNumber: 'BT-001', name: 'Bucket Tooth', description: 'Replacement bucket tooth for loaders', image: '/manus-storage/placeholder.png', category: 'Bucket Parts' },
      { id: 'lg-track-link', partNumber: 'TL-50', name: 'Track Link', description: 'Durable track link for excavators', image: '/manus-storage/placeholder.png', category: 'Track Parts' },
      { id: 'lg-hydraulic-hose', partNumber: 'HH-25', name: 'Hydraulic Hose', description: 'High-pressure hydraulic hose', image: '/manus-storage/placeholder.png', category: 'Hydraulic' },
      { id: 'lg-seal-kit', partNumber: 'SK-100', name: 'Seal Kit', description: 'Complete seal kit for cylinders', image: '/manus-storage/placeholder.png', category: 'Seals' },
      { id: 'lg-bearing', partNumber: 'BR-30', name: 'Bearing', description: 'Precision bearing for machinery', image: '/manus-storage/placeholder.png', category: 'Bearings' },
      { id: 'lg-valve', partNumber: 'HV-15', name: 'Hydraulic Valve', description: 'Directional control valve', image: '/manus-storage/placeholder.png', category: 'Valves' },
      { id: 'lg-pump', partNumber: 'HP-80', name: 'Hydraulic Pump', description: 'Main hydraulic pump assembly', image: '/manus-storage/placeholder.png', category: 'Pumps' },
    ],
  },
];
