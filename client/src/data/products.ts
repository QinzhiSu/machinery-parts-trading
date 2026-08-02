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
  compatibleModels?: string[];
}

export interface Brand {
  id: string;
  name: string;
  fullName: string;
  category: Category;
  country: string;
  description: string;
  logo: string;
  logoImage?: string;
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-cat-bUo3q4ixt5ck3vq2PzfRkV.webp',
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
      { id: 'cat-sp-1', partNumber: '1R-0739', name: 'Oil Filter', description: "CAT part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-2', partNumber: '322-3154', name: 'Oil Filter (New Model)', description: "CAT part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-3', partNumber: '1R-0750', name: 'Fuel Filter (Secondary/Fine)', description: "CAT part. Replace every 250-500 hours or based on fuel quality.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-4', partNumber: '179-9806', name: 'Hydraulic Oil Filter', description: "CAT part. Replace every 500-1000 hours or based on fluid analysis results.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-5', partNumber: '093-7521', name: 'Hydraulic Oil Filter (New Model)', description: "CAT part. Replace every 500-1000 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-6', partNumber: '209-6000', name: 'Hydraulic Return Oil Filter', description: "CAT part. Replace every 500-1000 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-7', partNumber: '6I-2501', name: 'Air Filter (Outer)', description: "CAT part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-8', partNumber: '6I-2502', name: 'Air Filter (Inner)', description: "CAT part. Replace with outer element or replace inner element every 2 outer element changes.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance / Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-9', partNumber: '193-2767', name: 'Radiator Water Tank Assembly', description: "CAT part. Replace if overheating or leaking.", image: '/manus-storage/cat_ee9e5401.png', category: 'Cooling System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-10', partNumber: '49178-00520', name: 'Turbocharger', description: "CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: 'Turbo / Intake System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-11', partNumber: '9W-3137', name: 'Track Chain Assembly', description: "CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Undercarriage / Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-12', partNumber: '348-1867', name: 'Track Roller', description: "CAT part. Replace if leaking or worn.", image: '/manus-storage/cat_ee9e5401.png', category: 'Undercarriage / Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-13', partNumber: '248-7143', name: 'Front Idler', description: "CAT part. Replace if worn or making abnormal noise.", image: '/manus-storage/cat_ee9e5401.png', category: 'Undercarriage / Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-14', partNumber: '', name: 'Drive Sprocket', description: "CAT part. Replace when gear teeth are worn or broken.", image: '/manus-storage/cat_ee9e5401.png', category: 'Undercarriage / Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-15', partNumber: '8E-5600', name: 'Carrier Roller', description: "CAT part. Replace if leaking or worn.", image: '/manus-storage/cat_ee9e5401.png', category: 'Undercarriage / Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-16', partNumber: '1U-3351', name: 'Bucket Teeth (J Series Universal)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation / GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-17', partNumber: '', name: 'Bucket Tooth Adapter', description: "CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation / GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-18', partNumber: '6Y-3394', name: 'Tooth Lock Pin', description: "CAT part. Replace synchronously every time teeth are replaced.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation / GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-19', partNumber: '499-0030', name: 'Final Drive/Travel Reduction Gear Assembly', description: "CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).", image: '/manus-storage/cat_ee9e5401.png', category: '传动系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-20', partNumber: '', name: '行走(履带)马达', description: "CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: '传动系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-21', partNumber: '', name: 'Swing Motor and Reducer', description: "CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: '传动系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-22', partNumber: '183-5300 (1U3302V)', name: '斗齿(J300系列,V型)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(小型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-23', partNumber: '8E-9490', name: 'Bucket Tooth Adapter (J300 Side-Lock)', description: "CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(小型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-24', partNumber: '8E-4402 (1U3352V)', name: '斗齿(J350系列,HD穿透型)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(中型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-25', partNumber: '1U-3352', name: '斗齿(J350系列,通用型)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(中型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-26', partNumber: '9N-4353', name: '斗齿(J350摩擦磨损型)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(中型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-27', partNumber: '7T-3402PT', name: 'Bucket Tooth (J400/J460 Series)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(大型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-28', partNumber: '3G-6304', name: 'Bucket Tooth (J300 Major Repair/Dozer Welded Adapter)', description: "CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘属性/GET(大型段)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-29', partNumber: '2159985', name: 'Boom Cylinder Seal Repair Kit', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder / Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-30', partNumber: '2344587', name: 'Bucket Cylinder Seal Repair Kit', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder / Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-31', partNumber: '1589088', name: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder / Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-32', partNumber: '1709808', name: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder / Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-33', partNumber: '087-5805', name: 'Bucket-Boom Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘臂销套系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-34', partNumber: '087-5806', name: 'Rod-Boom Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘臂销套系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-35', partNumber: '087-5845', name: 'Rod-Cylinder Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘臂销套系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-36', partNumber: '163-3749', name: 'Rod-Boom Connection Bushing', description: "CAT part. Replace with pin, high-frequency wear part.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘臂销套系统', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-37', partNumber: '137-2919', name: 'Bucket Bushing (Boom Position)', description: "CAT part. Replace with pin, high-frequency wear part.", image: '/manus-storage/cat_ee9e5401.png', category: '挖掘臂销套系统', compatibleModels: ["CAT 320", "CAT 320D"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-shantui-EpSrfWDZGfUrNmfakpiLVz.webp',
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
      { id: 'shantui-sp-1', partNumber: '61000070005', name: 'Oil Filter', description: "SHANTUI 零件。250-500小时随保养更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-2', partNumber: '612600081334', name: 'Fuel Filter', description: "SHANTUI 零件。250-500小时,雨季/劣质油缩短", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-3', partNumber: '4070801 (FS1003)', name: '柴油滤芯(SD22)', description: "SHANTUI 零件。250-500小时", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-4', partNumber: '3315843', name: '柴油粗滤器', description: "SHANTUI 零件。250-500小时", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-5', partNumber: '23Y-56B-12000-1 (612600110540', name: '空气滤芯(SD16)', description: "SHANTUI 零件。250-500小时或视灰尘环境", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-6', partNumber: '6127-81-7412T', name: '空气滤芯(SD22外芯)', description: "SHANTUI 零件。250-500小时", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-7', partNumber: '16Y-75-23200', name: '转向液压油滤芯', description: "SHANTUI 零件。500-1000小时", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-8', partNumber: '175-49-11580', name: '变速箱滤芯', description: "SHANTUI 零件。500-1000小时", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-9', partNumber: 'FY-5290', name: 'Hydraulic Oil Filter', description: "SHANTUI 零件。500-1000小时或视油液检测", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-10', partNumber: '3016627', name: '蓄电池充电发电机(SD22)', description: "SHANTUI 零件。发电异常/异响时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Electrical / Starting', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-11', partNumber: '通用件(可配Denso', name: '发电机总成(28V/45A通用)', description: "SHANTUI 零件。发电异常/异响时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Electrical / Starting', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-12', partNumber: 'YJ355', name: '液力变矩器总成(SD16)', description: "SHANTUI 零件。异响/传动效率下降时更换(大修类)", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-13', partNumber: '175-13-21007', name: '液力变矩器总成(SD22)', description: "SHANTUI 零件。异响/传动效率下降时更换(大修类)", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-14', partNumber: '4061161', name: '变矩器冷却器', description: "SHANTUI 零件。散热不良/传动油温过高时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-15', partNumber: 'P16Y-16-00000', name: '转向离合器总成', description: "SHANTUI 零件。转向异响/打滑时更换(大修类)", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-16', partNumber: '16Y-17-04000', name: '转向制动带', description: "SHANTUI 零件。制动效果下降/异响时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-17', partNumber: '144-40-22230', name: '转向阀体', description: "SHANTUI 零件。转向异常/卡滞时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-18', partNumber: '16Y-76-06000', name: '转向泵总成', description: "SHANTUI 零件。转向沉重/异响时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-19', partNumber: '07432-71203', name: '变速箱泵总成', description: "SHANTUI 零件。异响/供油不足时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-20', partNumber: '154-15-35000', name: '变速箱控制阀', description: "SHANTUI 零件。换挡异常时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动/变速系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-21', partNumber: '203MJ-37000', name: '履带链条总成(SD16)', description: "SHANTUI 零件。履带松旷/磨损超限时更换(大修类高价件)", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-22', partNumber: '216MJ-38000', name: '履带链条总成(SD22)', description: "SHANTUI 零件。履带松旷/磨损超限时更换(大修类高价件)", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-23', partNumber: '228MC-41000', name: '履带链条总成(SD32)', description: "SHANTUI 零件。履带松旷/磨损超限时更换(大修类高价件)", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-24', partNumber: '154-30-00291', name: '前导向轮总成(SD22)', description: "SHANTUI 零件。磨损/异响时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-25', partNumber: '16Y-40-03000', name: '履带引导轮/托链轮(SD16)', description: "SHANTUI 零件。漏油/磨损时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-26', partNumber: 'P16Y-40-10000', name: '单边支重轮(SD16)', description: "SHANTUI 零件。漏油/磨损时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-27', partNumber: 'P16Y-40-09000', name: '双边支重轮(SD16)', description: "SHANTUI 零件。漏油/磨损时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-28', partNumber: 'P203MA-00063', name: '履带板/湿地履带板螺栓(72长)', description: "SHANTUI 零件。随履带板更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-29', partNumber: '01011-52430', name: '履带板螺栓/驱动齿轮螺栓', description: "SHANTUI 零件。随部件更换时同步更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Undercarriage / Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-30', partNumber: '154-81-11191', name: '推土铲刀总成', description: "SHANTUI 零件。磨损见底/变形时更换", image: '/manus-storage/shantui_679b20ec.png', category: '推土铲刀/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-31', partNumber: '16Y-81-00002', name: '切削刃(cutting edge)/端刃', description: "SHANTUI 零件。磨损见底时更换,推土机高频易损件", image: '/manus-storage/shantui_679b20ec.png', category: '推土铲刀/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-32', partNumber: '150-70-21356', name: '端刃(右)', description: "SHANTUI 零件。磨损见底时更换,推土机高频易损件", image: '/manus-storage/shantui_679b20ec.png', category: '推土铲刀/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-33', partNumber: '31Y-89-07000', name: '松土器(ripper)刀柄', description: "SHANTUI 零件。磨损/断裂时更换", image: '/manus-storage/shantui_679b20ec.png', category: '推土铲刀/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-34', partNumber: '154-27-12273A', name: '驱动链轮齿块(segment)', description: "SHANTUI 零件。轮齿磨损/断齿时更换(大修类高价件)", image: '/manus-storage/shantui_679b20ec.png', category: '推土铲刀/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-35', partNumber: '随SD13', name: '万向节总成', description: "SHANTUI 零件。异响/抖动时更换", image: '/manus-storage/shantui_679b20ec.png', category: '传动系统', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-36', partNumber: 'P16Y-62-51000XJK', name: '液压提升缸修理包', description: "SHANTUI 零件。漏油/密封老化时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Hydraulic System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-37', partNumber: '16Y-03A-03000', name: '散热器总成', description: "SHANTUI 零件。过热/渗漏时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Cooling System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-38', partNumber: '600-613-1140', name: '散热风扇总成', description: "SHANTUI 零件。异响/扇叶断裂时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Cooling System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-39', partNumber: 'P16Y-05C-08000', name: '主销(king pin)', description: "SHANTUI 零件。转向异响/间隙过大时更换", image: '/manus-storage/shantui_679b20ec.png', category: 'Steering / Suspension', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-40', partNumber: '07012-00085', name: '最终驱动骨架油封', description: "SHANTUI 零件。漏油时更换(大修类)", image: '/manus-storage/shantui_679b20ec.png', category: 'Drive / Final Drive', compatibleModels: ["Shantui SD", "SD32"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-xcmg-Jxi8eA25WmnWeHreGHKWeS.webp',
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
      { id: 'xcmg-sp-1', partNumber: '860115046', name: 'Hydraulic Oil Filter', description: "XCMG 零件。500-1000小时或视油液检测", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-2', partNumber: '860117355', name: 'Air Filter', description: "XCMG 零件。250-500小时或视灰尘环境", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-3', partNumber: '803164329 (SH60472)', name: 'Hydraulic Return Oil Filter', description: "XCMG 零件。500-1000小时", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-4', partNumber: '860130116', name: '空气滤芯套装(内外芯)', description: "XCMG 零件。随外芯周期同步更换内芯", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-5', partNumber: '803164591', name: '液压油滤芯(变体)', description: "XCMG 零件。500-1000小时", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-6', partNumber: '860133763', name: 'Oil Filter', description: "XCMG 零件。250-500小时随保养更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-7', partNumber: '803086817', name: '空气滤芯(ZL50)', description: "XCMG 零件。250-500小时", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-8', partNumber: '803300971', name: '机油滤芯(带锁止阀)', description: "XCMG 零件。250-500小时", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-9', partNumber: '803164216', name: '液压油滤芯(型号2)', description: "XCMG 零件。500-1000小时", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-10', partNumber: 'WG1371E1', name: '水温传感器', description: "XCMG 零件。水温异常报警时更换", image: '/manus-storage/xcmg_29a234a0.png', category: '电气/传感器', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-11', partNumber: '252101813', name: 'Bucket Teeth', description: "XCMG 零件。磨损见底或断裂时更换,高频更换件", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation / GET', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-12', partNumber: '252101812', name: '右侧斗齿', description: "XCMG 零件。磨损见底或断裂时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation / GET', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-13', partNumber: '252101811', name: '左侧斗齿', description: "XCMG 零件。磨损见底或断裂时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation / GET', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-14', partNumber: '252109213 (Z5G.8.1XI.1-3)', name: '斗齿座(Tooth Holder)', description: "XCMG 零件。随斗齿更换,寿命长于斗齿本身", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation / GET', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-15', partNumber: '272200753 (2BS315A)', name: '变速箱总成(带变矩器)', description: "XCMG 零件。异响/传动效率下降时更换(大修类高价件)", image: '/manus-storage/xcmg_29a234a0.png', category: '传动/变速系统', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-16', partNumber: '250200147 (ZL40.6.18A)', name: '变速箱控制阀(变速阀)', description: "XCMG 零件。换挡异常时更换", image: '/manus-storage/xcmg_29a234a0.png', category: '传动/变速系统', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-17', partNumber: '2BS315.30.3-1', name: '变速箱倒挡活塞', description: "XCMG 零件。换挡不畅/打滑时更换", image: '/manus-storage/xcmg_29a234a0.png', category: '传动/变速系统', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-18', partNumber: '860115193', name: '驱动桥半轴齿轮(差速器齿轮)', description: "XCMG 零件。大修/异响时更换(大修类)", image: '/manus-storage/xcmg_29a234a0.png', category: '传动/变速系统', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-19', partNumber: '803013093 (P7260-100', name: '工作液压泵', description: "XCMG 零件。异响/供油不足/压力下降时更换(大修类高价件)", image: '/manus-storage/xcmg_29a234a0.png', category: 'Hydraulic System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-20', partNumber: '275100191', name: '刹车片(SOMA制动衬片)', description: "XCMG 零件。30,000-50,000km或视磨损", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-21', partNumber: '275101789', name: '制动盘(刹车盘)', description: "XCMG 零件。盘面磨损/异响时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-22', partNumber: '252115198', name: '手刹阀', description: "XCMG 零件。驻车异响/失效时检修更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-23', partNumber: '250200519 (ZL40A.13A.1)', name: '手刹鼓(制动鼓)', description: "XCMG 零件。制动效果下降/异响时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-24', partNumber: '803164070', name: '唇形油封', description: "XCMG 零件。漏油时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Sealing / Transmission Parts', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-25', partNumber: '860117405', name: '万向节联轴器', description: "XCMG 零件。异响/抖动时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Sealing / Transmission Parts', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-26', partNumber: '5000140', name: '溢流阀(继动阀)', description: "XCMG 零件。液压异常/压力不稳时更换", image: '/manus-storage/xcmg_29a234a0.png', category: 'Hydraulic System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-liugong-ksq6QwtKBFnDB9L5yA7mC4.webp',
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
      { id: 'liugong-sp-1', partNumber: '53C0005', name: 'Hydraulic Return Oil Filter', description: "LIUGONG 零件。500-1000小时或视油液检测", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-2', partNumber: '53C0053', name: 'Oil Filter', description: "LIUGONG 零件。250-500小时随保养更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-3', partNumber: '53C0953', name: 'Hydraulic Oil Filter', description: "LIUGONG 零件。500-1000小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-4', partNumber: '53C0576', name: 'Diesel Filter', description: "LIUGONG 零件。250-500小时或视油品", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-5', partNumber: '53C0011 (SFM-516)', name: 'Hydraulic Return Oil Filter (Model 2)', description: "LIUGONG 零件。500-1000小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-6', partNumber: '53C0167', name: 'Pilot Hydraulic Oil Filter', description: "LIUGONG 零件。500-1000小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-7', partNumber: '40C5856', name: 'Air Filter Element', description: "LIUGONG 零件。250-500小时或视灰尘环境", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-8', partNumber: '53C0052', name: 'Diesel Filter (Universal Type)', description: "LIUGONG 零件。250-500小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-9', partNumber: 'SP105056', name: 'Oil Filter (Model 2)', description: "LIUGONG 零件。250-500小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-10', partNumber: '50C0117', name: 'Air Filter Element (Model 2)', description: "LIUGONG 零件。250-500小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-11', partNumber: '53C0089', name: 'Hydraulic Return Oil Filter (Model 3)', description: "LIUGONG 零件。500-1000小时", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance / Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-12', partNumber: '72A0005', name: 'Bucket Teeth', description: "LIUGONG 零件。磨损见底或断裂时更换,高频更换件", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Excavation / GET', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-13', partNumber: '11C1061 (JHP2080', name: 'Steering Oil Pump (Gear Pump)', description: "LIUGONG 零件。转向沉重/异响时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: '转向/液压系统', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-14', partNumber: '10C0031 (ZL50G.9.25)', name: 'Left Steering Cylinder', description: "LIUGONG 零件。漏油/转向异响时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: '转向/液压系统', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-15', partNumber: 'Verify by model', name: 'Brake Booster', description: "LIUGONG 零件。制动响应变慢/失效时检修更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Brake System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-16', partNumber: 'Verify by model', name: 'Brake Pad (Friction Lining)', description: "LIUGONG 零件。30,000-50,000km或视磨损", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Brake System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-17', partNumber: '42C0352', name: 'Transmission Assembly (ZF/LiuGong)', description: "LIUGONG 零件。异响/传动效率下降时更换(大修类高价件)", image: '/manus-storage/liugong1_81eaa09f.png', category: '传动/变速系统', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-18', partNumber: '37B0428', name: 'Transmission Control Unit (ZF)', description: "LIUGONG 零件。换挡异常/电控故障时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: '传动/变速系统', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-19', partNumber: '20C0020 (LG50G-37a)', name: 'Radiator Assembly', description: "LIUGONG 零件。过热/渗漏时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Cooling System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-20', partNumber: 'SP105609', name: 'Fan Bracket', description: "LIUGONG 零件。异响/断裂时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Cooling System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-21', partNumber: '38B0042', name: 'Reversing Alarm', description: "LIUGONG 零件。报警失效时更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Electrical System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-22', partNumber: '37B0915', name: 'Fuse Box', description: "LIUGONG 零件。电路异常时检修更换", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Electrical System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-23', partNumber: '40C0019 (Cummins 6CT8.3-C215)', name: 'Diesel Engine Assembly (Reference)', description: "LIUGONG 零件。大修类,仅供参考发动机型号", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Engine System', compatibleModels: ["Liugong CLG856", "CLG856H"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-sany-BzP4S9vNGuBFpnC2Q6cGdz.webp',
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
      { id: 'sany-sp-1', partNumber: '60201217', name: 'Fuel Filter', description: "SANY Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-2', partNumber: 'B222100000551', name: 'Oil Filter', description: "SANY Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-3', partNumber: '60033346', name: 'Fuel Filter (Old Model)', description: "SANY Part. Replace every 250-500 hours.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-4', partNumber: 'JM-2034', name: 'Oil Filter (SY215C/225C Series)', description: "SANY Part. Replace every 250-500 hours.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-5', partNumber: 'B222100000521', name: 'Fuel Filter (New 9 Series)', description: "SANY Part. Replace every 250-500 hours.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-6', partNumber: '60201217', name: 'Fuel Filter (Replacement Part)', description: "SANY Part. Replace every 250-500 hours.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-7', partNumber: 'JM-3077', name: 'Fuel Filter (SY215C/225C New Model)', description: "SANY Part. Replace every 250-500 hours.", image: '/manus-storage/sany_5f4793a0.png', category: 'Maintenance / Filtration System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-8', partNumber: '', name: 'Bucket Teeth', description: "SANY Part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/sany_5f4793a0.png', category: 'Excavation / GET', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-9', partNumber: '', name: 'Front Idler', description: "SANY Part. Replace when worn or abnormal noise occurs.", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-10', partNumber: '', name: 'Drive Sprocket', description: "SANY Part. Replace when sprocket teeth are worn or broken (overhaul category, high-value part).", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-11', partNumber: '', name: 'Bottom Roller', description: "SANY Part. Replace when oil leaks or worn.", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-12', partNumber: '', name: 'Top Roller/Carrier Roller', description: "SANY Part. Replace when oil leaks or worn.", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-13', partNumber: '', name: 'Track Chain Assembly', description: "SANY Part. Replace when track is loose or wear exceeds limit (overhaul category, high-value part).", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-14', partNumber: 'Trasteel Track', name: 'Track Shoe', description: "SANY Part. Replace when worn or cracked.", image: '/manus-storage/sany_5f4793a0.png', category: 'Undercarriage / Track System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-15', partNumber: 'A28VO130', name: 'Main Hydraulic Pump (Rexroth Type)', description: "SANY Part. Replace when abnormal noise, insufficient oil supply, or pressure drop occurs (overhaul category, high-value part).", image: '/manus-storage/sany_5f4793a0.png', category: 'Hydraulic System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-16', partNumber: '', name: 'Travel Motor/Final Drive Assembly', description: "SANY Part. Replace when abnormal noise or climbing difficulty occurs (overhaul category, high-value part).", image: '/manus-storage/sany_5f4793a0.png', category: 'Hydraulic System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-17', partNumber: 'KYB', name: 'Swing Motor and Reducer', description: "SANY Part. Replace when turntable makes abnormal noise or swing is weak (overhaul category).", image: '/manus-storage/sany_5f4793a0.png', category: 'Hydraulic System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-18', partNumber: 'Cummins', name: 'Turbocharger', description: "SANY Part. Replace when power decreases, abnormal noise, or oil leaks occur (overhaul category).", image: '/manus-storage/sany_5f4793a0.png', category: 'Engine System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-19', partNumber: '', name: 'Alternator Assembly', description: "SANY Part. Replace when power generation is abnormal or abnormal noise occurs.", image: '/manus-storage/sany_5f4793a0.png', category: 'Engine System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-20', partNumber: '', name: 'Starter Assembly', description: "SANY Part. Replace when starting is weak or abnormal noise occurs.", image: '/manus-storage/sany_5f4793a0.png', category: 'Engine System', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-21', partNumber: '', name: 'Bucket Cylinder Seal Repair Kit', description: "SANY Part. Replace when oil leaks or seal ages.", image: '/manus-storage/sany_5f4793a0.png', category: 'Hydraulic Cylinder / Seals', compatibleModels: ["SANY SY", "SY365"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-komatsu-htXJjLxeofV9GSnx9KRgP2.webp',
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
      { id: 'komatsu-sp-1', partNumber: '600-211-5241(也作600-211-5240', name: 'Oil Filter', description: "KOMATSU Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-2', partNumber: '6136-71-6120', name: 'Fuel Filter', description: "KOMATSU Part. Replace every 250-500 hours or depending on oil quality.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-3', partNumber: 'ST40611A', name: 'Air Filter (Outer)', description: "KOMATSU Part. Replace every 250-500 hours or depending on dust environment.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-4', partNumber: 'ST40611B', name: 'Air Filter (Inner)', description: "KOMATSU Part. Replace synchronously with the outer element.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-5', partNumber: 'ST30805', name: 'Hydraulic Oil Filter', description: "KOMATSU Part. Replace every 500-1000 hours or based on fluid analysis.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-6', partNumber: 'ST30815', name: 'Pilot Hydraulic Filter', description: "KOMATSU Part. Replace every 500-1000 hours.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-7', partNumber: '600-411-1151(WF2075)', name: 'Fuel Filter (New 7/8 Series)', description: "KOMATSU Part. Replace every 250-500 hours.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-8', partNumber: '600-311-9121', name: 'Fuel Filter (Universal)', description: "KOMATSU Part. Replace every 250-500 hours.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-9', partNumber: '6735-51-5140', name: 'Oil Filter (6D102 Engine)', description: "KOMATSU Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Maintenance / Filtration System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-10', partNumber: '208-27-31221', name: 'Drive Sprocket (Old Model)', description: "KOMATSU Part. Replace when sprocket teeth are worn or broken (overhaul category, high-value part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Undercarriage / Track System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-11', partNumber: '20Y-27-11582', name: 'Drive Sprocket (7/8 Series)', description: "KOMATSU Part. Replace when sprocket teeth are worn or broken (overhaul category, high-value part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Undercarriage / Track System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-12', partNumber: '20Y-32-02091', name: 'Track Shoe Assembly', description: "KOMATSU Part. Replace when worn or broken (overhaul category, high-value part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Undercarriage / Track System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-13', partNumber: '207-30-00510', name: 'Bottom Roller (PC300-7 Ref)', description: "KOMATSU Part. Replace when oil leaks or worn.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Undercarriage / Track System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-14', partNumber: '208-30-00510', name: 'Top Roller (PC400-7 Ref)', description: "KOMATSU Part. Replace when oil leaks or worn.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Undercarriage / Track System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-15', partNumber: '2057019570 (K25,208-70-14152)', name: 'Bucket Teeth (K25 Series)', description: "KOMATSU Part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Excavation / GET', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-16', partNumber: '207-70-14151RC', name: 'Tooth Lock Pin', description: "KOMATSU Part. Replace synchronously with bucket teeth.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Excavation / GET', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-17', partNumber: '708-2L-00400 (708-2L-00500', name: 'Main Hydraulic Pump Assembly', description: "KOMATSU Part. Replace when abnormal noise, insufficient oil supply, or pressure drop occurs (overhaul category, high-value part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Hydraulic System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-18', partNumber: '708-2L-31411', name: 'Main Hydraulic Pump (Model 2)', description: "KOMATSU Part. Replace when abnormal noise or insufficient oil supply occurs (overhaul category).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Hydraulic System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-19', partNumber: '706-7G-01170 (706-7G-01140', name: 'Swing Motor Assembly', description: "KOMATSU Part. Replace when turntable makes abnormal noise or swing is weak (overhaul category, high-value part).", image: '/manus-storage/komatsu_4cb14839.png', category: 'Hydraulic System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-20', partNumber: '708-2L-06710 (708-2L-07710', name: 'Relief Valve', description: "KOMATSU Part. Replace when hydraulic abnormality or unstable pressure occurs.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Hydraulic System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-21', partNumber: '08086-20000', name: 'Ignition Key Switch Assembly', description: "KOMATSU Part. Replace when key is worn or switch fails.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Electrical System', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-22', partNumber: '22B-06-11910', name: 'Ignition Key Switch (Old Model)', description: "KOMATSU Part. Replace when key is worn or switch fails.", image: '/manus-storage/komatsu_4cb14839.png', category: 'Electrical System', compatibleModels: ["Komatsu PC200", "PC200-8"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-isuzu-M6UfEnac2WTSvbD5uCcpAW.webp',
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
      { id: 'isuzu-sp-1', partNumber: '1-87810-075-2', name: 'Oil Filter', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-2', partNumber: 'ST10716 (KRH0642', name: '机油滤芯(二级)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-3', partNumber: 'ST10720 (KRH0643', name: '机油滤芯(型号2)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-4', partNumber: 'ST20703 (KSP0281', name: 'Fuel Filter', description: "ISUZU 零件。250-500小时或视油品", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-5', partNumber: 'ST40620AB (KRH0652+KRH1320)', name: 'Air Filter', description: "ISUZU 零件。250-500小时或视灰尘环境", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-6', partNumber: 'ST30805 (71416241)', name: 'Hydraulic Oil Filter', description: "ISUZU 零件。500-1000小时或视油液检测", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-7', partNumber: '30732 (83984918)', name: '液压油滤芯(型号2)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-8', partNumber: 'ST70810 (KRJ4008)', name: '液压油滤芯(型号3)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-9', partNumber: 'ST30813 (4294135)', name: '先导阀滤芯', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-10', partNumber: '1-13200-487-2 (1132004872)', name: '机油滤芯(卡车版)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-11', partNumber: '1-13610877-1', name: 'Water Pump Assembly', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-12', partNumber: '1136500161 (1-13650016-1)', name: '水泵总成(型号2)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-13', partNumber: '114400-2720 (RHC62C)', name: 'Turbocharger', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Intake / Supercharging', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-14', partNumber: '1-11310-199-0 (1113101990)', name: '机油泵总成', description: "ISUZU 零件。润滑不良/压力异常时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Lubrication System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-15', partNumber: '1-13100277-0 (1131002770)', name: '机油输送泵', description: "ISUZU 零件。润滑不良时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Lubrication System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-16', partNumber: '898175-9510', name: '机油泵(高压型)', description: "ISUZU 零件。润滑不良/压力异常时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Lubrication System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-17', partNumber: 'ST40629AB (1421339', name: '空气滤芯(6HK1)', description: "ISUZU 零件。250-500小时或视灰尘环境", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-18', partNumber: 'ST10767 (4484495)', name: '机油滤芯(6HK1)', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-19', partNumber: 'ST29121 (4085912', name: '柴油滤芯(6HK1一级)', description: "ISUZU 零件。250-500小时或视油品", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-20', partNumber: 'ST20304 (4S00483', name: '柴油滤芯(6HK1二级)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-21', partNumber: 'ST30855 (4448402', name: '液压油滤芯(6HK1)', description: "ISUZU 零件。500-1000小时或视油液检测", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-22', partNumber: 'ST70810 (4210224)', name: '液压油滤芯(6HK1型号2)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-23', partNumber: 'ST30807 (4207841', name: '先导阀滤芯(6HK1)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-24', partNumber: '1-13201023-0 (1132010230)', name: '机油滤芯总成(6HK1-3代)', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-25', partNumber: 'ST20880 (4679981', name: '柴油滤芯(6HK1-3代/新款)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: 'Maintenance / Filtration System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-26', partNumber: '8-98042848-2 (1-87310835-0)', name: '水泵总成(6HK1)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-27', partNumber: '1-13650133-3', name: '水泵总成(6HK1型号2)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-28', partNumber: '8-97627-356-1 (8976273561)', name: '水泵总成(6HK1 FVR卡车版)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-29', partNumber: '8-97515301-1', name: '电子机油泵', description: "ISUZU 零件。润滑不良/压力异常时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Lubrication System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-30', partNumber: '8-98091565-1 (8-98091565-0', name: '燃油喷射泵总成', description: "ISUZU 零件。喷油不良/启动困难时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Fuel System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-31', partNumber: '8-94392-713-5', name: '燃油喷射泵(型号2)', description: "ISUZU 零件。喷油不良时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Fuel System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-32', partNumber: '8-97602-049-4', name: '燃油喷射泵(FTR/FXR/FVR卡车版)', description: "ISUZU 零件。喷油不良时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Fuel System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-33', partNumber: '1144003900', name: '涡轮增压器(RHG6型)', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类高价件)", image: '/manus-storage/isuzu_208688e1.png', category: 'Intake / Supercharging', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-34', partNumber: '114400-4050 (1144004050)', name: '涡轮增压器(RHG6,SH300)', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: 'Intake / Supercharging', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-35', partNumber: '1-21723066-0 (1217230660)', name: 'Oil Cooler Core', description: "ISUZU 零件。散热不良/渗漏时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-36', partNumber: '1136603321', name: '散热风扇叶片', description: "ISUZU 零件。异响/扇叶断裂时更换", image: '/manus-storage/isuzu_208688e1.png', category: 'Cooling System', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-37', partNumber: '1141420320 (1141420280)', name: '排气歧管', description: "ISUZU 零件。裂纹/漏气时更换", image: '/manus-storage/isuzu_208688e1.png', category: '进气/排气', compatibleModels: ["Isuzu 6BG1", "6HK1"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-shacman-X3PB3ycsffgtiMvyASV9uJ.webp',
    color: '#E53935',
    machines: [
      {
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
      { id: 'shacman-sp-1', partNumber: '4110000556209', name: 'Oil Filter', description: 'Shacman Delong Part. Replace every 5,000-10,000km with maintenance.', image: '/manus-storage/shacman_273a0f44.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-2', partNumber: '6126300080205', name: 'Fuel Filter', description: 'Shacman Delong Part. Replace every 20,000km or depending on oil quality.', image: '/manus-storage/shacman_273a0f44.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-3', partNumber: '612630110319', name: 'Air Filter', description: 'Shacman Delong Part. Replace every 10,000-20,000km or depending on road conditions.', image: '/manus-storage/shacman_273a0f44.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-4', partNumber: 'DZ91189550169', name: 'Fuel Pre-filter (Water Separator)', description: 'Shacman Delong Part. Replace every 5,000-10,000km, or sooner in rainy season/with poor quality fuel.', image: '/manus-storage/shacman_273a0f44.png', category: 'Maintenance / Filtration System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-5', partNumber: 'DZ95009440015', name: 'Brake Shoe Spring', description: 'Shacman Delong Part. Inspect with brake shoe replacement.', image: '/manus-storage/shacman_273a0f44.png', category: 'Brake System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-6', partNumber: 'DZ9100189008', name: 'Exhaust Brake Butterfly Valve', description: 'Shacman Delong Part. Inspect/repair when abnormal noise or reduced braking efficiency occurs.', image: '/manus-storage/shacman_273a0f44.png', category: 'Brake System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-7', partNumber: 'DZ9114160032', name: 'Clutch Disc Assembly', description: 'Shacman Delong Part. Replace when clutch slips or makes abnormal noise.', image: '/manus-storage/shacman_273a0f44.png', category: 'Transmission / Clutch', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-8', partNumber: 'DZ97259190435', name: 'Turbocharger Intake Pipe', description: 'Shacman Delong Part. Inspect/replace when air leaks or cracks occur.', image: '/manus-storage/shacman_273a0f44.png', category: 'Turbo / Intake System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-9', partNumber: 'DZ15221443120', name: 'Lateral Shock Absorber', description: 'Shacman Delong Part. Replace when abnormal noise or oil leaks occur.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-10', partNumber: 'DZ13241440150', name: 'Rear Suspension Shock Absorber', description: 'Shacman Delong Part. Replace when abnormal noise or oil leaks occur.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-11', partNumber: 'DZ13241440080', name: 'Cab Rear Shock Absorber', description: 'Shacman Delong Part. Replaces when abnormal noise occurs, suppressing cab shake.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-12', partNumber: 'DZ9X259520006', name: 'Drive Axle Air Spring (Airbag)', description: 'Shacman Delong Part. Replace when aged or air leaks occur.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-13', partNumber: 'DZ9325952015', name: 'Front Leaf Spring Assembly (with Bracket/Hanger)', description: 'Shacman Delong Part. Replace when sagging or broken.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-14', partNumber: 'DZ15221740011', name: 'Wiper Linkage Assembly (with Motor)', description: 'Shacman Delong Part. Replace when wipers are not working or making abnormal noise.', image: '/manus-storage/shacman_273a0f44.png', category: 'Body / Electrical', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-15', partNumber: 'D90009410196', name: 'Front Wheel Hub Assembly', description: 'Shacman Delong Part. Replace when abnormal noise or excessive bearing clearance occurs.', image: '/manus-storage/shacman_273a0f44.png', category: 'Hub / Drive', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-16', partNumber: 'DZ16231440072', name: 'Height Valve (Air Suspension)', description: 'Shacman Delong Part. Inspect/replace when abnormal body height occurs.', image: '/manus-storage/shacman_273a0f44.png', category: 'Suspension System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-17', partNumber: 'DZ9114311067', name: '传动轴总成(F3000)', description: 'Shacman Delong 零件。异响/抖动/大修时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Drive / Universal Joint', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-18', partNumber: 'AZ9114310125', name: '驱动轴节叉', description: 'Shacman Delong 零件。传动轴异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Hub / Drive Shaft', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-19', partNumber: '30222', name: '前轮轴承维修包', description: 'Shacman Delong 零件。异响/间隙过大时更换,建议核实原厂号', image: '/manus-storage/shacman_273a0f44.png', category: 'Hub / Drive Shaft', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-20', partNumber: 'STR', name: 'Steering Knuckle Arm / Tie Rod (Steering Trapezoidal Arm)', description: 'Shacman Delong Part. Inspect when steering precision decreases or vehicle drifts.', image: '/manus-storage/shacman_273a0f44.png', category: 'Steering System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-21', partNumber: 'King Pin Assembly', name: 'Steering King Pin Assembly', description: 'Shacman Delong Part. Replace when steering makes abnormal noise or excessive clearance occurs.', image: '/manus-storage/shacman_273a0f44.png', category: 'Steering System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-22', partNumber: 'WD615-Alternator', name: 'Alternator Assembly', description: 'Shacman Delong 零件。发电异常/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Electrical / Starting', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-23', partNumber: 'WD615-Starter', name: 'Starter Assembly', description: 'Shacman Delong 零件。启动无力/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Electrical / Starting', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-24', partNumber: 'WD615-Water Pump', name: 'Water Pump Assembly', description: 'Shacman Delong 零件。冷却液渗漏/异响时更换,建议核实VG1500060051是否通用', image: '/manus-storage/shacman_273a0f44.png', category: 'Cooling System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-25', partNumber: 'WD615-Turbo', name: 'Turbocharger Assembly', description: 'Shacman Delong Part. Replace when power drops or oil leaks occur (major repair).', image: '/manus-storage/shacman_273a0f44.png', category: 'Intake / Supercharging', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-26', partNumber: 'WG9000360-Brake Chamber', name: '制动气室(前/后桥)', description: 'Shacman Delong 零件。刹车异响/漏气时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Brake System', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-27', partNumber: 'DZ15221740016', name: '前雨刮片', description: 'Shacman Delong 零件。每年或雨季前更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/雨刮', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-28', partNumber: 'DZ14251740013', name: '雨刮臂(SWF)', description: 'Shacman Delong 零件。雨刮不贴合/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/雨刮', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-29', partNumber: 'DZ93189724110', name: '左前大灯总成', description: 'Shacman Delong 零件。大灯破损/进水时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Body / Electrical', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-30', partNumber: 'DZ93189724120', name: '右前大灯总成', description: 'Shacman Delong 零件。大灯破损/进水时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Body / Electrical', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-31', partNumber: 'DZ93189230090', name: '离合器总泵及油壶总成', description: 'Shacman Delong 零件。离合器踏板异常/漏油时更换', image: '/manus-storage/shacman_273a0f44.png', category: 'Transmission / Clutch', compatibleModels: ["Shacman Delong", "Shacman X3000"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-sinotruk-5Uc3pUtJP4KqQPM8uJNjQL.webp',
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
      { id: 'sinotruk-sp-1', partNumber: 'VG61000070005', name: 'Oil Filter', description: 'SINOTRUK Part. Replace every 5,000-10,000km with maintenance.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Maintenance / Filtration System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-2', partNumber: 'WG9725190055', name: 'Air Filter Element Assembly', description: 'SINOTRUK Part. Replace every 10,000-20,000km depending on road conditions.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Maintenance / Filtration System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-3', partNumber: 'WG9925550110', name: 'Diesel Pre-filter (Water Separator)', description: 'SINOTRUK Part. Replace every 5,000-10,000km, or sooner in rainy season/with poor quality fuel.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Maintenance / Filtration System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-4', partNumber: 'VG1560080012', name: 'Diesel Fine Filter', description: 'SINOTRUK Part. Replace synchronously with the pre-filter.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Maintenance / Filtration System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-5', partNumber: 'VG1095094002', name: 'Alternator (28V/70A)', description: 'SINOTRUK Part. Inspect/replace when abnormal power generation or noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Electrical / Starting', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-6', partNumber: 'VG1560090001', name: 'Starter Assembly', description: 'SINOTRUK Part. Replace when starting is weak or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Electrical / Starting', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-7', partNumber: 'VG1093130001', name: 'Air Compressor (Twin-cylinder, Water-cooled)', description: 'SINOTRUK Part. Replace when brake air pressure is insufficient or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Intake / Supercharging', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-8', partNumber: 'AZ9231340200', name: 'Front Brake Shoe Assembly', description: 'SINOTRUK Part. Replace every 30,000-50,000km or depending on wear.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-9', partNumber: 'WG9231342069', name: 'Rear Brake Shoe (with Friction Lining)', description: 'SINOTRUK Part. Inspect synchronously with front shoes, more frequently for heavy-duty models.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-10', partNumber: 'WG9100440001', name: 'Brake Camshaft (Left)', description: 'SINOTRUK Part. Inspect with brake shoes.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-11', partNumber: 'WG9231340061', name: 'Brake Slack Adjuster (Automatic)', description: 'SINOTRUK Part. Replace when abnormal brake noise or abnormal travel occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-12', partNumber: 'WG9000360101', name: 'Brake Chamber (Front Axle)', description: 'SINOTRUK Part. Replace when abnormal brake noise or air leaks occur.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-13', partNumber: 'WG9100443001', name: 'Brake Disc', description: 'SINOTRUK Part. Replace when disc wear or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-14', partNumber: '1601ZB1T-130', name: 'Clutch Pressure Plate Assembly', description: 'SINOTRUK Part. Replace when clutch slips or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Transmission / Clutch', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-15', partNumber: 'WG9100410104', name: 'Clutch Release Bearing (with Booster Pump)', description: 'SINOTRUK Part. Replace when clutch noise or heavy pedal occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Transmission / Clutch', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-16', partNumber: 'AZ9725529272', name: 'V-type Thrust Rod (Stabilizer Link)', description: 'SINOTRUK Part. Inspect/replace when suspension noise or deviation occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering / Suspension', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-17', partNumber: 'AZ9738410041', name: 'Steering Knuckle Arm (Left)', description: 'SINOTRUK Part. Replace when steering noise or reduced accuracy occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering / Suspension', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-18', partNumber: '179000520040', name: 'Front Leaf Spring Eye Pin', description: 'SINOTRUK Part. Replace when leaf spring noise or looseness occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering / Suspension', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-19', partNumber: 'WG9100520034', name: 'Front Leaf Spring Hanger', description: 'SINOTRUK Part. Replace synchronously with pin/bushing.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering / Suspension', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-20', partNumber: 'WG9100410129', name: 'King Pin Bushing', description: 'SINOTRUK Part. Replace when steering noise or excessive play occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering / Suspension', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-21', partNumber: 'WG9925680028', name: 'Front Suspension Shock Absorber Assembly', description: 'SINOTRUK Part. Replace when noise or oil leakage occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-22', partNumber: 'WG1642440084', name: 'Rear Suspension Shock Absorber Assembly', description: 'SINOTRUK Part. Replace when noise or oil leakage occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-23', partNumber: 'WG9725520789', name: 'Rear Leaf Spring Assembly', description: 'SINOTRUK Part. Replace when sagging or breakage occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-24', partNumber: 'AZ9725520254', name: 'Leaf Spring U-Bolt Plate', description: 'SINOTRUK Part. Inspect and replace with the spring.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Suspension / Shock Absorption', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-25', partNumber: 'AZ9761341010', name: 'Rear Axle Half Shaft (Right)', description: 'SINOTRUK Part. Replace when noise or breakage occurs (major repair type).', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Body / Wiper', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-26', partNumber: 'WG9725310020', name: 'Universal Joint Cross Assembly', description: 'SINOTRUK Part. Replace when driveshaft noise or vibration occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Drive / Universal Joint', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-27', partNumber: 'WG9014310125', name: 'Driveshaft Assembly (Transmission to Drive Axle)', description: 'SINOTRUK Part. Replace when noise/vibration occurs or during major overhaul.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Drive / Universal Joint', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-28', partNumber: 'VG1500060051', name: 'Water Pump Assembly', description: 'SINOTRUK Part. Replace when coolant leaks or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Cooling System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-29', partNumber: 'WG1642111011', name: 'Radiator Grille / Water Tank Cover', description: 'SINOTRUK Part. Replace when collision damage or aging cracks occur.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Cooling System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-30', partNumber: 'VG1540110066', name: 'Turbocharger Assembly', description: 'SINOTRUK Part. Replace when power drops, abnormal noise, or oil leaks occur (major repair type).', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Intake / Supercharging', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-31', partNumber: 'WG9925541280', name: 'Muffler (Exhaust Pipe) Assembly', description: 'SINOTRUK Part. Replace when exhaust noise or rust perforation occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Exhaust System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-32', partNumber: 'WG9725471016', name: 'Power Steering Pump', description: 'SINOTRUK Part. Replace when steering is heavy or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Steering System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-33', partNumber: 'WG1560161130', name: 'Clutch Driven Plate (Friction Plate)', description: 'SINOTRUK Part. Replace when clutch slips or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Transmission / Clutch', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-34', partNumber: 'AZ9114230018', name: 'Clutch Booster Cylinder (Release Cylinder)', description: 'SINOTRUK Part. Replace when clutch pedal is heavy or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Transmission / Clutch', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-35', partNumber: 'WG9100440027', name: 'Front Brake Friction Plate (Lining)', description: 'SINOTRUK Part. Inspect and replace with brake shoes.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-36', partNumber: 'WG9100440030', name: 'Brake Shoe Assembly (with Lining)', description: 'SINOTRUK Part. Replace every 30,000-50,000km or depending on wear.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-37', partNumber: 'WG9000360522', name: 'Parking/Hand Brake Valve', description: 'SINOTRUK Part. Inspect/replace when parking brake noise or failure occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-38', partNumber: 'WG9725542041', name: 'Exhaust Brake Valve', description: 'SINOTRUK Part. Inspect/replace when braking effect decreases.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Brake System', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-39', partNumber: 'WG2209280005', name: 'Input Shaft Speed Sensor', description: 'SINOTRUK Part. Inspect/replace when abnormal gear shifting occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Electrical / Sensor', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-40', partNumber: 'WG9000360523', name: 'Four-Circuit Air Protection Valve', description: 'SINOTRUK Part. Replace when abnormal air pressure or poor braking occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Electrical / Sensor', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-41', partNumber: 'WG1642330003', name: 'Door Window Regulator (Left/Right)', description: 'SINOTRUK Part. Replace when window lift failure occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Body / Cab', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-42', partNumber: 'AZ9114310125', name: 'Drive Shaft Yoke (Universal Joint Yoke)', description: 'SINOTRUK Part. Replace when driveshaft noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Hub / Drive Shaft', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-43', partNumber: 'WG9719820001', name: 'Hydraulic Pump (Lifting System)', description: 'SINOTRUK Part. Inspect/replace when lifting is weak or abnormal noise occurs.', image: '/manus-storage/sinotruck_d3e8e9bd.png', category: 'Hydraulic / PTO', compatibleModels: ["Sinotruk HOWO", "WD615"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-toyota-eMCYaDmH4YRA9CcMUFVQDD.webp',
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
      { id: 'toyota-sp-1', partNumber: '90915-YZZJ3', name: 'Oil Filter', description: 'Toyota Hilux part. Replace during maintenance every 5,000-10,000km.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Maintenance / Filtration System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-2', partNumber: '17801-0L040', name: 'Air Filter Assembly', description: 'Toyota Hilux part. Replace every 10,000-20,000km or depending on road conditions.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Maintenance / Filtration System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-3', partNumber: '23390-0L090', name: 'Diesel Fuel Coarse Filter', description: 'Toyota Hilux part. Critical part for diesel vehicles, replace every 20,000km.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Maintenance / Filtration System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-4', partNumber: '87139-0K060', name: 'Air Conditioning / Pollen Filter', description: 'Toyota Hilux part. Replace every 10,000-15,000km.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Maintenance / Filtration System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-5', partNumber: '04426-0L020', name: 'Fuel Pump SCV Valve', description: 'Toyota Hilux part. Replace when fuel system malfunctions, note year model.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Maintenance / Filtration System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-6', partNumber: '90916-T2033', name: 'Fan / Alternator V-Belt', description: 'Toyota Hilux part. Inspect every 60,000-100,000km.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Transmission / Belt', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-7', partNumber: '13521-0E010', name: 'Timing Chain Assembly', description: 'Toyota Hilux part. Chain drive has a longer lifespan, requires regular inspection.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Transmission / Belt', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-8', partNumber: '13566-0E010', name: 'Timing Chain Guide', description: 'Toyota Hilux part. Inspect with chain assembly.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Transmission / Belt', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-9', partNumber: '13616-0E010', name: 'Crankshaft Timing Gear', description: 'Toyota Hilux part. Replace during major overhaul.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Transmission / Belt', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-10', partNumber: '04465-0K360', name: 'Front Brake Pad', description: 'Toyota Hilux part. Replace every 30,000-60,000km or depending on wear.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Braking System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-11', partNumber: '04495-0K160', name: 'Rear Brake Shoe', description: 'Toyota Hilux part. Inspect and replace synchronously with front pads.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Braking System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-12', partNumber: '47750-0K300', name: 'Rear Brake Cylinder Assembly', description: 'Toyota Hilux part. Replace when oil leaks or sticking occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Braking System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-13', partNumber: '47730-0K300', name: 'Front Brake Cylinder Body', description: 'Toyota Hilux part. Replace in conjunction with brake pads.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Braking System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-14', partNumber: '48510-8Z205', name: 'Front Shock Absorber', description: 'Toyota Hilux part. Replace every 80,000-100,000km or when abnormal noise occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Suspension System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-15', partNumber: '48654-0K080', name: 'Front Lower Control Arm Bushing', description: 'Toyota Hilux part. Inspect when suspension abnormal noise or deviation occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Suspension System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-16', partNumber: '90385-T0014', name: 'Rear Leaf Spring Shackle Bushing', description: 'Toyota Hilux part. Replace when spring abnormal noise or sagging occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Suspension System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-17', partNumber: 'VIN-Specific', name: 'Shock Absorber Top Mount', description: 'Toyota Hilux part. Inspect when abnormal noise or sagging occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Suspension System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-18', partNumber: '45046-09810', name: 'Steering Tie Rod Ball Joint', description: 'Toyota Hilux part. Inspect when steering wheel abnormal noise or deviation occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Steering System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-19', partNumber: '45503-0K130', name: 'Steering Rack End', description: 'Toyota Hilux part. Replace with tie rod end.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Steering System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-20', partNumber: '45601-35070', name: 'Steering Knuckle Arm', description: 'Toyota Hilux part. Inspect when steering abnormal noise or accuracy decreases.', image: "/manus-storage/toyota_parts_a1da12f5.png", category: 'Steering System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-21', partNumber: '90369-T0003', name: 'Front Wheel Bearing Assembly', description: 'Toyota Hilux part. Replace when abnormal noise or excessive clearance occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Hub / Drive Shaft', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-22', partNumber: '90366-T0060', name: 'Rear Wheel Bearing Assembly', description: 'Toyota Hilux part. Replace when abnormal noise occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Hub / Drive Shaft', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-23', partNumber: '43040-0K070', name: 'Front CV Constant Velocity Joint', description: 'Toyota Hilux part. Replace when abnormal noise or driving vibration occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Hub / Drive Shaft', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-24', partNumber: '43371-0K130', name: 'Drive Shaft Cross Joint', description: 'Toyota Hilux part. Replace when driveshaft abnormal noise occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Hub / Drive Shaft', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-25', partNumber: '41110-0K280', name: 'Front Differential Housing', description: 'Toyota Hilux part. For major overhaul/abnormal noise, professional part, VIN verification recommended.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Differential / Transmission', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-26', partNumber: '41201-09E42', name: 'Differential Gear Assembly', description: 'Toyota Hilux part. Major overhaul part, not a regular wear item.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Differential / Transmission', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-27', partNumber: '16100-09711', name: 'Water Pump Assembly', description: 'Toyota Hilux part. Replace when coolant leaks/abnormal noise occurs, inspect every 60,000-80,000km.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Cooling System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-28', partNumber: '16278-0E010', name: 'Water Passage Bypass Hose', description: 'Toyota Hilux part. Inspect along with water pump.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Cooling System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-29', partNumber: '16711-0L170', name: 'Radiator Fan Shroud', description: 'Toyota Hilux part. Inspect when fan abnormal noise or poor heat dissipation occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Cooling System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-30', partNumber: '16400-0K350', name: 'Radiator Assembly', description: 'Toyota Hilux part. Replace when overheating or leaking occurs.', image: '/manus-storage/toyota_parts_a1da12f5.png', category: 'Cooling System', compatibleModels: ["Hilux Revo", "Hilux Vigo"] }
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-cummins-d4g3j7AHTBedhXHXo52c8E.webp',
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
      { id: 'cm-sp-1', partNumber: '3415317', name: 'Turbocharger Hose', description: 'Cummins 3415317 - Turbocharger Hose. Connects the turbocharger and intake manifold, resistant to high temperatures and pressures. Compatible with: Dongfeng Cummins 6CT8.3. Engine Models: 6CT8.3. Specifications: Flexible hose, high temperature and pressure resistant.', image: '/manus-storage/cummins_3415317_1376ea0d.jpg', category: 'Engine System' },
      { id: 'cm-sp-2', partNumber: '3415347', name: 'Connecting Rod Bearing', description: 'Cummins 3415347 - Connecting Rod Bearing. Engine connecting rod bearing, withstands reciprocating connecting rod loads, made of copper-lead alloy material. Compatible with: Foton Aumark, JAC Shuailing, Shaanxi K3000. Engine Models: ISF 3.8. Specifications: Copper-lead alloy, thickness 1.5mm.', image: '/manus-storage/cummins_3415347_c61c9feb.jpg', category: 'Engine System' },
      { id: 'cm-sp-3', partNumber: '3900227', name: 'Connecting Rod Bolt', description: 'Cummins 3900227 - Connecting Rod Assembly. Engine connecting rod assembly, connects piston and crankshaft, withstands combustion pressure. Compatible with: Foton Aoling, Shaanxi L3000. Engine Models: ISF 3.8. Specifications: Forged steel, length 180mm.', image: '/manus-storage/cummins_3900227_f7751ecf.jpg', category: 'Engine System' },
      { id: 'cm-sp-4', partNumber: '3901969', name: 'Connecting Rod Bearing', description: 'Cummins 3901969 - Piston. Engine piston, reciprocates in the cylinder, withstands combustion pressure and thermal load. Compatible with: Shaanxi Delong, Foton Aumark. Engine Models: ISF 3.8. Specifications: Aluminum alloy, diameter 92mm.', image: '/manus-storage/cummins_3901969_08926021.jpg', category: 'Engine System' },
      { id: 'cm-sp-5', partNumber: '3916361', name: 'Water Pump Seal Ring', description: 'Cummins 3916361 - Water Pump Seal Ring. Water pump shaft seal, prevents coolant leakage, made of oil-resistant and heat-resistant rubber material. Compatible with: Foton Aumark, Shaanxi L3000. Engine Models: ISF 3.8 / 2.8. Specifications: Rubber seal ring, inner diameter 35mm.', image: '/manus-storage/cummins_3916361_5992c0e2.jpg', category: 'Cooling System' },
      { id: 'cm-sp-6', partNumber: '3921652', name: 'Oil Filter', description: 'Cummins 3921652 - Oil Filter. Engine oil filter, filters impurities and metal particles in the oil. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Paper filter element, flow rate 50L/min.', image: '/manus-storage/cummins_3921652_e541402f.jpg', category: 'Engine System' },
      { id: 'cm-sp-7', partNumber: '3928629', name: 'Intake Valve', description: 'Cummins 3928629 - Intake Valve. Engine intake valve, controls intake stroke, made of heat-resistant alloy steel material. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Alloy steel, head diameter 35mm.', image: '/manus-storage/cummins_3928629_7c5fb658.jpg', category: 'Engine System' },
      { id: 'cm-sp-8', partNumber: '3931084', name: 'Flameout Solenoid Valve', description: 'Cummins 3931084 - Exhaust Valve. Engine exhaust valve, controls exhaust stroke, made of high-temperature resistant nickel-chromium alloy. Compatible with: Foton Aoling, Shaanxi L3000. Engine Models: ISF 3.8. Specifications: Nickel-chromium alloy, head diameter 30mm.', image: '/manus-storage/cummins_3931084_ab1c737d.jpg', category: 'Fuel System' },
      { id: 'cm-sp-9', partNumber: '3934410', name: 'Intake Gasket', description: 'Cummins 3934410 - Intake Manifold Gasket. Intake manifold sealing gasket, prevents intake leakage. Compatible with: Shaanxi Delong, Foton Aumark. Engine Models: ISF 3.8. Specifications: Asbestos rubber gasket, thickness 2mm.', image: '/manus-storage/cummins_3934410_9031136d.jpg', category: 'Engine System' },
      { id: 'cm-sp-10', partNumber: '3939181', name: 'Intake Manifold Gasket', description: 'Cummins 3939181 - Intake Thermostat. Intake cooler thermostat, regulates intake temperature. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Brass plate, thickness 0.5mm.', image: '/manus-storage/cummins_3939181_8ae4b69d.jpg', category: 'Engine System' },
      { id: 'cm-sp-11', partNumber: '3940639', name: 'Fuel Pump Gasket', description: 'Cummins 3940639 - Fuel Line. High-pressure fuel line, connects fuel pump and injector, withstands high pressure. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: High-pressure steel pipe, working pressure 200bar.', image: '/manus-storage/cummins_3940639_e9db0c0b.jpg', category: 'Fuel System' },
      { id: 'cm-sp-12', partNumber: '3944001', name: 'Fuel Overflow Valve', description: 'Cummins 3944001 - Fuel Filter. Engine fuel filter, filters impurities in the fuel. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Paper filter element, filtration accuracy 10μm.', image: '/manus-storage/cummins_3944001_6772d94a.jpg', category: 'Fuel System' },
      { id: 'cm-sp-13', partNumber: '3945917', name: 'Main Bearing Kit', description: 'Cummins 3945917 - Main Bearing Kit. Crankshaft main bearing, supports crankshaft rotation, made of copper-lead alloy. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Copper-lead alloy, thickness 2mm.', image: '/manus-storage/cummins_3945617_19ad025e.jpg', category: 'Engine System' },
      { id: 'cm-sp-15', partNumber: '3945918', name: 'Oil Pan Gasket', description: 'Cummins 3945918 - Oil Pan Gasket. Oil pan sealing gasket, prevents oil leakage. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Silicone rubber gasket, thickness 3mm.', image: '/manus-storage/cummins_3945918_1cf3e640.jpg', category: 'Engine System' },
      { id: 'cm-sp-16', partNumber: '3945967', name: 'Cylinder Head Gasket', description: 'Cummins 3945967 - Fuel Return Line. Low-pressure fuel line, connects fuel tank and fuel pump. Compatible with: Foton Aumark F3000, JAC Shuailing. Engine Models: ISF / L. Specifications: Rubber hose, inner diameter 8mm.', image: '/manus-storage/cummins_3945967_649dccda.jpg', category: 'Engine System' },
      { id: 'cm-sp-17', partNumber: '3950661', name: 'Front Oil Seal', description: 'Cummins 3950661 - Connecting Rod Bearing Kit. Connecting rod bearing, supports connecting rod rotation, made of copper-lead alloy material. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Copper-lead alloy, thickness 1.5mm.', image: '/manus-storage/part_3950661_170_6065a594.jpg', category: 'Engine System' },
      { id: 'cm-sp-19', partNumber: '3957290', name: 'Front Oil Seal', description: 'Cummins 3957290 - Front Oil Seal. Crankshaft front oil seal, prevents oil leakage from the front end of the crankshaft. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Fluororubber oil seal, inner diameter 40mm.', image: '/manus-storage/cummins_3957290_c78509bb.jpg', category: 'Engine System' },
      { id: 'cm-sp-20', partNumber: '3964715', name: 'Exhaust Valve Push Rod', description: 'Cummins 3964715 - Exhaust Valve Push Rod. Engine exhaust valve push rod, transmits camshaft movement to the exhaust valve. Compatible with: Foton Aumark, Shaanxi L3000. Engine Models: ISF 3.8. Specifications: Alloy steel, length 250mm.', image: '/manus-storage/bh6ks02TyHvK_904e11da.png', category: 'Engine System' },
      { id: 'cm-sp-21', partNumber: '3965966', name: 'Belt Tensioner', description: 'Cummins 3965966 - Oil Cooler. Oil cooler, reduces oil temperature, uses aluminum casing. Compatible with: Shaanxi Delong, Foton Aumark. Engine Models: ISF 3.8. Specifications: Aluminum, flow rate 50L/min.', image: '/manus-storage/cummins_3965966_90512daa.jpg', category: 'Engine System' },
      { id: 'cm-sp-22', partNumber: '3967252', name: 'Oil Cooler Core', description: 'Cummins 3967252 - Oil Pressure Sensor. Oil pressure sensor, monitors engine oil pressure. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Electronic sensor, operating temperature -40~120℃.', image: '/manus-storage/cummins_3967252_4e371f9c.jpg', category: 'Cooling System' },
      { id: 'cm-sp-23', partNumber: '3968559', name: 'Oil Pressure Sensor', description: 'Cummins 3968559 - Piston Ring. Engine piston ring, seals piston and cylinder, prevents gas leakage. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Cast iron, thickness 1.5mm.', image: '/manus-storage/cummins_3968559_6252712e.jpg', category: 'Engine System' },
      { id: 'cm-sp-24', partNumber: '3972125', name: 'High Pressure Fuel Line', description: 'Cummins 3972125 - High Pressure Fuel Line. Injector high-pressure fuel line, connects fuel pump and injector. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: High-pressure steel pipe, working pressure 250bar.', image: '/manus-storage/cummins_3972125_e7990527.jpg', category: 'Fuel System' },
      { id: 'cm-sp-25', partNumber: '3972777', name: 'Fuel Line', description: 'Cummins 3972777 - Fuel Line. Engine fuel line, delivers high-pressure fuel to the injector. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: High-pressure steel pipe, working pressure 200bar.', image: '/manus-storage/cummins_3972777_60bef43e.jpg', category: 'Fuel System' },
      { id: 'cm-sp-26', partNumber: '3979176', name: 'Fan Belt', description: 'Cummins 3979176 - Valve Stem Seal. Valve stem oil seal, prevents oil from entering the cylinder. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Fluororubber oil seal, inner diameter 8mm.', image: '/manus-storage/cummins_3979176_bffadba2.jpg', category: 'Engine System' },
      { id: 'cm-sp-27', partNumber: '4931169', name: 'Piston Assembly', description: 'Cummins 4931169 - Piston Pin. Piston pin, connects piston and connecting rod. Compatible with: Shaanxi Delong, Foton Aumark. Engine Models: ISF 3.8. Specifications: Alloy steel, diameter 20mm.', image: '/manus-storage/cummins_4931169_cff9f6b0.jpg', category: 'Engine System' },
      { id: 'cm-sp-28', partNumber: '4934058', name: 'Piston Cooling Nozzle', description: 'Cummins 4934058 - Piston Cooling Nozzle. Piston cooling nozzle, sprays oil to cool the piston. Compatible with: Foton Aumark, JAC Shuailing. Engine Models: ISF 3.8. Specifications: Copper nozzle, oil spray volume 0.5L/min.', image: '/manus-storage/cummins_4934058_74c8ce70.jpg', category: 'Engine System' },
      { id: 'cm-sp-29', partNumber: '4941464', name: 'Cylinder Head Bolt', description: 'Cummins 4941464 - Cylinder Liner. Engine cylinder liner, provides space for piston movement. Compatible with: Shaanxi K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Cast iron, wall thickness 5mm.', image: '/manus-storage/cummins_4941464_b12100d6.jpg', category: 'Engine System' },
      { id: 'cm-sp-30', partNumber: '4981794', name: 'Connecting Rod Assembly', description: 'Cummins 4981794 - Intake Valve. Engine intake valve, controls intake stroke, made of heat-resistant alloy steel. Compatible with: Foton Aumark, Shaanxi L3000. Engine Models: ISF 3.8. Specifications: Alloy steel, head diameter 35mm.', image: '/manus-storage/4981794(2)_cd8e079b.webp', category: 'Engine System' },
      { id: 'cm-sp-31', partNumber: '4981795', name: 'Connecting Rod Bearing', description: 'Cummins 4981795 - Connecting Rod Bearing. Engine connecting rod bearing, withstands reciprocating connecting rod loads. Compatible with: Foton Aumark, JAC Shuailing, Shaanxi K3000. Engine Models: ISF 3.8. Specifications: Copper-lead alloy, thickness 1.5mm.', image: '/manus-storage/cummins_4981795_340aae63.jpg', category: 'Engine System' },
      { id: 'cm-sp-32', partNumber: '4987914', name: 'Main Bearing Shell', description: 'Cummins 4987914 - Main Bearing Shell. Crankshaft main bearing, supports crankshaft rotation. Compatible with: Foton Aoling, Shaanxi L3000. Engine Models: ISF 3.8. Specifications: Copper-lead alloy, thickness 2mm.', image: '/manus-storage/cummins_4987914_fe46f482.jpg', category: 'Engine System' },
      { id: 'cm-sp-33', partNumber: '4987917', name: 'Thrust Washer', description: 'Cummins 4987917 - Thrust Washer. Crankshaft thrust washer, limits crankshaft axial movement. Compatible with: Foton Aumark, JAC Junling. Engine Models: ISF 3.8. Specifications: Bronze plate, thickness 3mm.', image: '/manus-storage/cummins_4987917_d7d1a945.jpg', category: 'Engine System' },
      { id: 'cm-sp-34', partNumber: '4988747', name: 'Oil Pump', description: 'Cummins 4988747 - Oil Pump. Engine oil pump, circulates oil supply, adopts gear pump design. Compatible with: Shaanxi Delong K3000, Foton Aumark. Engine Models: ISF 3.8. Specifications: Gear pump, flow rate 60L/min.', image: '/manus-storage/cummins_4988747_3766fb1d.jpg', category: 'Lubrication System' },
      { id: 'cm-sp-35', partNumber: '5320276', name: 'Water Pump Assembly', description: 'Cummins 5320276 - Water Pump Assembly. Engine cooling water pump, circulates coolant, adopts aluminum pump body. Compatible with: Foton Aumark, Shaanxi L3000. Engine Models: ISF 3.8 / 2.8. Specifications: Aluminum pump body, flow rate 80L/min.', image: '/manus-storage/cummins_5320276_5b9a1160.jpg', category: 'Cooling System' },
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
    logoImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/logo-weichai-blackred-TpcerzBHqPoBTB5uGxa54d.webp',
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
      { id: 'weichai-sp-1', partNumber: '61000070005(替代号W962', name: 'Oil Filter', description: "WEICHAI Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-2', partNumber: '612630080088(PRELINE 420,替代号PL420', name: '柴油滤芯(WP10专用)', description: "WEICHAI Part. Replace every 250-500 hours or depending on oil quality.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-3', partNumber: '612600081334(替代号FF5622', name: 'Fuel Filter (Universal)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-4', partNumber: '612630080087(替代号WDK11102', name: '柴油滤芯(型号2)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-5', partNumber: '612630080203(替代号CX1016E4', name: '柴油滤芯(型号3)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-6', partNumber: '612630080205(替代号1111474)', name: '柴油滤芯(型号4)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-7', partNumber: '612600081335(PRELINE 420,替代号PL420', name: '柴油滤芯总成', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-8', partNumber: '612630060015(替代号PROVENT200', name: 'Oil-gas Separator Filter Element', description: "WEICHAI Part. Replace every 500-1000 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-9', partNumber: '612630060138', name: 'Oil-gas Separator Filter Element (Model 2)', description: "WEICHAI Part. Replace every 500-1000 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-10', partNumber: '612630010239(替代号W11170', name: 'Oil Filter (Universal Variant)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-11', partNumber: '612600081335A', name: 'Diesel Filter (Universal for WP4/WP6/WD615/WD10/WP10/WP12)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Maintenance / Filtration System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-12', partNumber: '1000402861', name: 'Water Pump Assembly', description: "WEICHAI Part. Replace when coolant leaks or abnormal noise occurs.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Cooling System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-13', partNumber: '612600061872', name: 'Water Pump Assembly (Dedicated for WD12/WP12)', description: "WEICHAI Part. Replace when coolant leaks or abnormal noise occurs.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Cooling System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-14', partNumber: '612600140062', name: 'Thermostat', description: "WEICHAI Part. Replace when water temperature is abnormal or overheats.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Cooling System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-15', partNumber: '615G00060016', name: 'Thermostat Assembly (WD615)', description: "WEICHAI Part. Replace when water temperature is abnormal or overheats.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Cooling System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-16', partNumber: '61200100157', name: 'Fan Hydraulic Drive Assembly (Clutch Fan)', description: "WEICHAI Part. Replace when radiator has abnormal noise or fan slips.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Belt', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-17', partNumber: '612600090206D', name: 'Alternator Assembly (28V/70A)', description: "WEICHAI Part. Replace when power generation is abnormal or abnormal noise occurs.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Electrical / Starting', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-18', partNumber: '61560080276(替代号Kbel132p110)', name: 'Fuel Injector', description: "WEICHAI Part. Replace when injection is poor or starting is difficult (check every 2000 hours / replace every 4000-6000 hours).", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Fuel System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-19', partNumber: '1000000623', name: 'Injector Nozzle', description: "WEICHAI Part. Check and replace periodically with the injector.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Fuel System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-20', partNumber: '1002018309(612600081327)', name: 'Fuel Filter Element (Assembly Type)', description: "WEICHAI Part. Replace every 250-500 hours.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Fuel System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-21', partNumber: '612600190222', name: 'ECU Electronic Control Unit', description: "WEICHAI Part. Repair or replace when fault light alarms or unable to start (overhaul category, high-value part).", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Fuel System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-22', partNumber: '612600080611', name: 'Turbocharger (WP10)', description: "WEICHAI Part. Replace when power decreases, abnormal noise, or oil leaks (overhaul category, high-value part).", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Intake / Supercharging', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-23', partNumber: '1001248542', name: 'Turbocharger (Highland Type)', description: "WEICHAI Part. Replace when power decreases, abnormal noise, or oil leaks (overhaul category).", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Intake / Supercharging', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-24', partNumber: '1001740613', name: 'Oil Filter (Assembly Type)', description: "WEICHAI Part. Replace every 250-500 hours with maintenance.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Lubrication System', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-25', partNumber: '61500010100', name: 'Rear Crankshaft Oil Seal', description: "WEICHAI Part. Replace during overhaul or when oil leaks (overhaul category).", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Sealing / Transmission Parts', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-26', partNumber: '4110000556111(61500030009', name: 'Connecting Rod Assembly', description: "WEICHAI Part. Overhaul category, repair or replace when abnormal noise or knocking occurs.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Piston Assembly', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-27', partNumber: '612600900072', name: 'Cylinder Liner Piston Kit', description: "WEICHAI Part. Overhaul category, replace when oil consumption is high or power decreases.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Piston Assembly', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-28', partNumber: '612600030150', name: 'Piston (Standard Size)', description: "WEICHAI Part. Overhaul category, replace when oil consumption is high or knocking occurs.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Piston Assembly', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-29', partNumber: 'Z20050060', name: 'Piston Ring', description: "WEICHAI Part. Overhaul category, replace when oil consumption is abnormal.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Piston Assembly', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-30', partNumber: '61500010344', name: 'Water-cooled Cylinder Liner', description: "WEICHAI Part. Overhaul category, replace when oil consumption is high or cylinder pressure is insufficient.", image: '/manus-storage/weichai_2cc7d2af.png', category: 'Transmission / Piston Assembly', compatibleModels: ["Weichai WP10", "WP12"] }
    ]
  },
];
