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
      { id: 'cat-sp-1', partNumber: '1R-0739', name: 'Oil Filter', description: "CAT part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-2', partNumber: '322-3154', name: 'Oil Filter (New Model)', description: "CAT part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-3', partNumber: '1R-0750', name: 'Fuel Filter (Secondary/Fine Filter)', description: "CAT part. Replace every 250-500 hours or based on fuel quality.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-4', partNumber: '179-9806', name: 'Hydraulic Oil Filter', description: "CAT part. Replace every 500-1000 hours or based on fluid analysis results.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-5', partNumber: '093-7521', name: 'Hydraulic Oil Filter (New Model)', description: "CAT part. Replace every 500-1000 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-6', partNumber: '209-6000', name: 'Hydraulic Return Oil Filter', description: "CAT part. Replace every 500-1000 hours.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-7', partNumber: '6I-2501', name: 'Air Filter (Outer Element)', description: "CAT part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-8', partNumber: '6I-2502', name: 'Air Filter (Inner Element)', description: "CAT part. Replace with outer element or replace inner element every 2 outer element changes.", image: '/manus-storage/cat_ee9e5401.png', category: 'Maintenance/Filtration System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-9', partNumber: '193-2767', name: 'Radiator Water Tank Assembly', description: "CAT part. Replace if overheating or leaking.", image: '/manus-storage/cat_ee9e5401.png', category: 'Cooling System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-10', partNumber: '49178-00520', name: 'Turbocharger', description: "CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: 'Turbocharging/Intake System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-11', partNumber: '9W-3137', name: 'Track Chain Assembly', description: "CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Chassis/Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-12', partNumber: '348-1867', name: 'Track Roller', description: "CAT part. Replace if leaking or worn.", image: '/manus-storage/cat_ee9e5401.png', category: 'Chassis/Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-13', partNumber: '248-7143', name: 'Front Idler', description: "CAT part. Replace if worn or making abnormal noise.", image: '/manus-storage/cat_ee9e5401.png', category: 'Chassis/Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-14', partNumber: '', name: 'Drive Sprocket', description: "CAT part. Replace when gear teeth are worn or broken.", image: '/manus-storage/cat_ee9e5401.png', category: 'Chassis/Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-15', partNumber: '8E-5600', name: 'Carrier Roller', description: "CAT part. Replace if leaking or worn.", image: '/manus-storage/cat_ee9e5401.png', category: 'Chassis/Track System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-16', partNumber: '1U-3351', name: 'Bucket Teeth (Universal J Series)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-17', partNumber: '', name: 'Bucket Teeth Adapter', description: "CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-18', partNumber: '6Y-3394', name: 'Bucket Teeth Pin/Lock Pin', description: "CAT part. Replace synchronously every time teeth are replaced.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-19', partNumber: '499-0030', name: 'Final Drive/Travel Reduction Gear Assembly', description: "CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Transmission System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-20', partNumber: '', name: 'Travel (Track) Motor', description: "CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: 'Transmission System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-21', partNumber: '', name: 'Swing (Turntable) Motor and Reducer', description: "CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).", image: '/manus-storage/cat_ee9e5401.png', category: 'Transmission System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-22', partNumber: '183-5300 (1U3302V)', name: 'Bucket Teeth (J300 Series, V-Type)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Small)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-23', partNumber: '8E-9490', name: 'Bucket Tooth Adapter (J300 Side-Lock)', description: "CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Small)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-24', partNumber: '8E-4402 (1U3352V)', name: 'Bucket Teeth (J350 Series, HD Penetrating)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Medium)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-25', partNumber: '1U-3352', name: 'Bucket Teeth (J350 Series, Universal)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Medium)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-26', partNumber: '9N-4353', name: 'Bucket Teeth (J350 Friction Wear)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Medium)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-27', partNumber: '7T-3402PT', name: 'Bucket Tooth (J400/J460 Series)', description: "CAT part. Replace when worn to limit or cracked (high-frequency replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Large)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-28', partNumber: '3G-6304', name: 'Bucket Tooth (J300 Major Repair/Dozer Welded Adapter)', description: "CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.", image: '/manus-storage/cat_ee9e5401.png', category: 'Excavation/GET (Large)', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-29', partNumber: '2159985', name: 'Boom Cylinder Seal Repair Kit', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder/Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-30', partNumber: '2344587', name: 'Bucket Cylinder Seal Repair Kit', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder/Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-31', partNumber: '1589088', name: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder/Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-32', partNumber: '1709808', name: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)', description: "CAT part. Replace when leaking or seal aging occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Hydraulic Cylinder/Seals', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-33', partNumber: '087-5805', name: 'Bucket-Boom Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).", image: '/manus-storage/cat_ee9e5401.png', category: 'Boom Pin/Bushing System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-34', partNumber: '087-5806', name: 'Rod-Boom Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Boom Pin/Bushing System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-35', partNumber: '087-5845', name: 'Rod-Cylinder Connection Pin', description: "CAT part. Replace when abnormal noise or excessive clearance occurs.", image: '/manus-storage/cat_ee9e5401.png', category: 'Boom Pin/Bushing System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-36', partNumber: '163-3749', name: 'Rod-Boom Connection Bushing', description: "CAT part. Replace with pin, high-frequency wear part.", image: '/manus-storage/cat_ee9e5401.png', category: 'Boom Pin/Bushing System', compatibleModels: ["CAT 320", "CAT 320D"] },
      { id: 'cat-sp-37', partNumber: '137-2919', name: 'Bucket Bushing (Boom Position)', description: "CAT part. Replace with pin, high-frequency wear part.", image: '/manus-storage/cat_ee9e5401.png', category: 'Boom Pin/Bushing System', compatibleModels: ["CAT 320", "CAT 320D"] }
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
      { id: 'shantui-sp-1', partNumber: '61000070005', name: 'Oil Filter', description: "SHANTUI part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-2', partNumber: '612600081334', name: 'Diesel Filter', description: "SHANTUI part. Replace every 250-500 hours, shorten in rainy season/poor quality oil.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-3', partNumber: '4070801 (FS1003)', name: 'Diesel Filter (SD22)', description: "SHANTUI part. Replace every 250-500 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-4', partNumber: '3315843', name: 'Diesel Coarse Filter', description: "SHANTUI part. Replace every 250-500 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-5', partNumber: '23Y-56B-12000-1 (612600110540)', name: 'Air Filter (SD16)', description: "SHANTUI part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-6', partNumber: '6127-81-7412T', name: 'Air Filter (SD22 Outer)', description: "SHANTUI part. Replace every 250-500 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-7', partNumber: '16Y-75-23200', name: 'Steering Hydraulic Oil Filter', description: "SHANTUI part. Replace every 500-1000 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-8', partNumber: '175-49-11580', name: 'Transmission Filter', description: "SHANTUI part. Replace every 500-1000 hours.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-9', partNumber: 'FY-5290', name: 'Hydraulic Oil Filter', description: "SHANTUI part. Replace every 500-1000 hours or based on fluid analysis.", image: '/manus-storage/shantui_679b20ec.png', category: 'Maintenance/Filtration System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-10', partNumber: '3016627', name: 'Battery Charging Alternator (SD22)', description: "SHANTUI part. Replace when abnormal charging/noise occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Electrical/Starting', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-11', partNumber: 'Universal (Compatible with Denso)', name: 'Alternator Assembly (28V/45A Universal)', description: "SHANTUI part. Replace when abnormal charging/noise occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Electrical/Starting', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-12', partNumber: 'YJ355', name: 'Torque Converter Assembly (SD16)', description: "SHANTUI part. Replace when abnormal noise/transmission efficiency drops (major repair).", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-13', partNumber: '175-13-21007', name: 'Torque Converter Assembly (SD22)', description: "SHANTUI part. Replace when abnormal noise/transmission efficiency drops (major repair).", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-14', partNumber: '4061161', name: 'Torque Converter Cooler', description: "SHANTUI part. Replace when poor heat dissipation/transmission oil temperature is too high.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-15', partNumber: 'P16Y-16-00000', name: 'Steering Clutch Assembly', description: "SHANTUI part. Replace when steering noise/slippage occurs (major repair).", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-16', partNumber: '16Y-17-04000', name: 'Steering Brake Band', description: "SHANTUI part. Replace when braking effect drops/noise occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-17', partNumber: '144-40-22230', name: 'Steering Valve Body', description: "SHANTUI part. Replace when steering abnormal/stuck occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-18', partNumber: '16Y-76-06000', name: 'Steering Pump Assembly', description: "SHANTUI part. Replace when steering heavy/noise occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-19', partNumber: '07432-71203', name: 'Transmission Pump Assembly', description: "SHANTUI part. Replace when abnormal noise/insufficient oil supply occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-20', partNumber: '154-15-35000', name: 'Transmission Control Valve', description: "SHANTUI part. Replace when abnormal shift occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Gearbox System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-21', partNumber: '203MJ-37000', name: 'Track Chain Assembly (SD16)', description: "SHANTUI part. Replace when track slack/wear exceeds limit (major repair, high-value item).", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-22', partNumber: '216MJ-38000', name: 'Track Chain Assembly (SD22)', description: "SHANTUI part. Replace when track slack/wear exceeds limit (major repair, high-value item).", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-23', partNumber: '228MC-41000', name: 'Track Chain Assembly (SD32)', description: "SHANTUI part. Replace when track slack/wear exceeds limit (major repair, high-value item).", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-24', partNumber: '154-30-00291', name: 'Front Idler Wheel Assembly (SD22)', description: "SHANTUI part. Replace when wear/noise occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-25', partNumber: '16Y-40-03000', name: 'Track Guide Wheel/Carrier Roller (SD16)', description: "SHANTUI part. Replace when leaking/wear occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-26', partNumber: 'P16Y-40-10000', name: 'Single-Sided Support Wheel (SD16)', description: "SHANTUI part. Replace when leaking/wear occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-27', partNumber: 'P16Y-40-09000', name: 'Double-Sided Support Wheel (SD16)', description: "SHANTUI part. Replace when leaking/wear occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-28', partNumber: 'P203MA-00063', name: 'Track Shoe/Wetland Track Shoe Bolt (72 Long)', description: "SHANTUI part. Replace with track shoe.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-29', partNumber: '01011-52430', name: 'Track Shoe Bolt/Drive Sprocket Bolt', description: "SHANTUI part. Replace simultaneously with component replacement.", image: '/manus-storage/shantui_679b20ec.png', category: 'Chassis/Track System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-30', partNumber: '154-81-11191', name: 'Dozer Blade Assembly', description: "SHANTUI part. Replace when wear reaches bottom/deformation occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Dozer Blade/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-31', partNumber: '16Y-81-00002', name: 'Cutting Edge/End Bit', description: "SHANTUI part. Replace when wear reaches bottom. High-frequency wear part for bulldozers.", image: '/manus-storage/shantui_679b20ec.png', category: 'Dozer Blade/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-32', partNumber: '150-70-21356', name: 'End Bit (Right)', description: "SHANTUI part. Replace when wear reaches bottom. High-frequency wear part for bulldozers.", image: '/manus-storage/shantui_679b20ec.png', category: 'Dozer Blade/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-33', partNumber: '31Y-89-07000', name: 'Ripper Shank', description: "SHANTUI part. Replace when wear/breakage occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Dozer Blade/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-34', partNumber: '154-27-12273A', name: 'Drive Sprocket Segment', description: "SHANTUI part. Replace when tooth wear/breakage occurs (major repair, high-value item).", image: '/manus-storage/shantui_679b20ec.png', category: 'Dozer Blade/GET', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-35', partNumber: 'Varies by SD13', name: 'Universal Joint Assembly', description: "SHANTUI part. Replace when abnormal noise/vibration occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-36', partNumber: 'P16Y-62-51000XJK', name: 'Hydraulic Lift Cylinder Repair Kit', description: "SHANTUI part. Replace when leaking/seal aging occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Hydraulic System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-37', partNumber: '16Y-03A-03000', name: 'Radiator Assembly', description: "SHANTUI part. Replace when overheating/leaking occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Cooling System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-38', partNumber: '600-613-1140', name: 'Cooling Fan Assembly', description: "SHANTUI part. Replace when abnormal noise/blade breakage occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Cooling System', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-39', partNumber: 'P16Y-05C-08000', name: 'King Pin', description: "SHANTUI part. Replace when steering noise/excessive clearance occurs.", image: '/manus-storage/shantui_679b20ec.png', category: 'Steering/Suspension', compatibleModels: ["Shantui SD", "SD32"] },
      { id: 'shantui-sp-40', partNumber: '07012-00085', name: 'Final Drive Skeleton Oil Seal', description: "SHANTUI part. Replace when leaking occurs (major repair).", image: '/manus-storage/shantui_679b20ec.png', category: 'Transmission/Final Drive', compatibleModels: ["Shantui SD", "SD32"] }
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
      { id: 'xcmg-sp-1', partNumber: '860115046', name: 'Hydraulic Oil Filter', description: "XCMG part. Replace every 500-1000 hours or based on fluid analysis results.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-2', partNumber: '860117355', name: 'Air Filter', description: "XCMG part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-3', partNumber: '803164329 (SH60472)', name: 'Hydraulic Return Oil Filter', description: "XCMG part. Replace every 500-1000 hours.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-4', partNumber: '860130116', name: 'Air Filter Assembly (Inner and Outer)', description: "XCMG part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-5', partNumber: '803164591', name: 'Hydraulic Oil Filter (Variant)', description: "XCMG part. Replace every 500-1000 hours.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-6', partNumber: '860133763', name: 'Oil Filter', description: "XCMG part. Replace every 250-500 hours or based on fuel quality.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-7', partNumber: '803086817', name: 'Air Filter (ZL50)', description: "XCMG part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-8', partNumber: '803300971', name: 'Oil Filter (with Lock Valve)', description: "XCMG part. Replace every 500-1000 hours or based on fluid analysis results.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-9', partNumber: '803164216', name: 'Hydraulic Oil Filter (Model 2)', description: "XCMG part. Replace every 500-1000 hours.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Maintenance/Filtration System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-10', partNumber: 'WG1371E1', name: 'Water Temperature Sensor', description: "XCMG part. Inspect every 500-1000 hours.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Electrical/Sensor System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-11', partNumber: '252101813', name: 'Bucket Teeth', description: "XCMG part. Replace synchronously every time teeth are replaced.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation/Bucket Teeth', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-12', partNumber: '252101812', name: 'Right Bucket Tooth', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation/Bucket Teeth', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-13', partNumber: '252101811', name: 'Left Bucket Tooth', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation/Bucket Teeth', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-14', partNumber: '252109213 (Z5G.8.1XI.1-3)', name: 'Bucket Tooth Seat', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Excavation/Bucket Teeth', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-15', partNumber: '272200753 (2BS315A)', name: 'Transmission Assembly', description: "XCMG part. Replace when abnormal shifting occurs.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Transmission/Gearbox System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-16', partNumber: '250200147 (ZL40.6.18A)', name: 'Transmission Control Valve', description: "XCMG part. Replace when shifting is difficult/slipping occurs.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Transmission/Gearbox System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-17', partNumber: '2BS315.30.3-1', name: 'Transmission Reverse Piston', description: "XCMG part. Replace when abnormal shifting occurs.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Transmission/Gearbox System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-18', partNumber: '860115193', name: 'Drive Axle Differential Gear', description: "XCMG part. Replace during major repair or when abnormal noise occurs (major repair).", image: '/manus-storage/xcmg_29a234a0.png', category: 'Transmission/Gearbox System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-19', partNumber: '803013093 (P7260-100', name: 'Working Hydraulic Pump', description: "XCMG part. Replace when abnormal noise, insufficient oil supply, or pressure drop (major repair, high-cost).", image: '/manus-storage/xcmg_29a234a0.png', category: 'Hydraulic System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-20', partNumber: '275100191', name: 'Brake Pads', description: "XCMG part. Replace every 30,000-50,000 km or based on wear.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-21', partNumber: '275101789', name: 'Brake Disc', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-22', partNumber: '252115198', name: 'Parking Brake Valve', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-23', partNumber: '250200519 (ZL40A.13A.1)', name: 'Brake Drum', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Brake System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-24', partNumber: '803164070', name: 'Lip Seal Ring', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Sealing/Drive Components', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-25', partNumber: '860117405', name: 'Universal Joint Coupling', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Sealing/Drive Components', compatibleModels: ["XCMG ZL50G", "ZL50GN"] },
      { id: 'xcmg-sp-26', partNumber: '5000140', name: 'Relief Valve', description: "XCMG part. Replace when worn to bottom or broken.", image: '/manus-storage/xcmg_29a234a0.png', category: 'Hydraulic System', compatibleModels: ["XCMG ZL50G", "ZL50GN"] }
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
      { id: 'liugong-sp-1', partNumber: '53C0005', name: 'Hydraulic Return Oil Filter', description: "LIUGONG part. Replace every 500-1000 hours or based on fluid analysis.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-2', partNumber: '53C0053', name: 'Oil Filter', description: "LIUGONG part. Replace during maintenance every 250-500 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-3', partNumber: '53C0953', name: 'Hydraulic Oil Filter', description: "LIUGONG part. Replace every 500-1000 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-4', partNumber: '53C0576', name: 'Diesel Filter', description: "LIUGONG part. Replace every 250-500 hours or based on oil quality.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-5', partNumber: '53C0011 (SFM-516)', name: 'Hydraulic Return Oil Filter (Model 2)', description: "LIUGONG part. Replace every 500-1000 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-6', partNumber: '53C0167', name: 'Pilot Hydraulic Oil Filter', description: "LIUGONG part. Replace every 500-1000 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-7', partNumber: '40C5856', name: 'Air Filter', description: "LIUGONG part. Replace every 250-500 hours or based on dust environment.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-8', partNumber: '53C0052', name: 'Diesel Filter (Universal)', description: "LIUGONG part. Replace every 250-500 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-9', partNumber: 'SP105056', name: 'Oil Filter (Model 2)', description: "LIUGONG part. Replace every 250-500 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-10', partNumber: '50C0117', name: 'Air Filter (Model 2)', description: "LIUGONG part. Replace every 250-500 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-11', partNumber: '53C0089', name: 'Hydraulic Return Oil Filter (Model 3)', description: "LIUGONG part. Replace every 500-1000 hours.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Maintenance/Filtration System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-12', partNumber: '72A0005', name: 'Bucket Tooth', description: "LIUGONG part. Replace when worn to bottom or cracked (high-frequency replacement).", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Excavation/GET', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-13', partNumber: '11C1061 (JHP2080', name: 'Steering Oil Pump (Gear Pump)', description: "LIUGONG part. Replace when steering heavy or abnormal noise occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Steering/Hydraulic System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-14', partNumber: '10C0031 (ZL50G.9.25)', name: 'Left Steering Cylinder', description: "LIUGONG part. Replace when oil leaks or steering abnormal noise occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Steering/Hydraulic System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-15', partNumber: 'Verify by specific model', name: 'Brake Booster', description: "LIUGONG part. Repair or replace when braking response slows or fails.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Braking System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-16', partNumber: 'Verify by specific model', name: 'Brake Pad (Friction Lining)', description: "LIUGONG part. Replace every 30,000-50,000 km or based on wear.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Braking System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-17', partNumber: '42C0352', name: 'Transmission Assembly (ZF/LiuGong)', description: "LIUGONG part. Replace when abnormal noise or transmission efficiency drops (major repair).", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Transmission/Gearbox System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-18', partNumber: '37B0428', name: 'Transmission Control Unit (ZF)', description: "LIUGONG part. Replace when shifting abnormal or electrical control failure occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Transmission/Gearbox System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-19', partNumber: '20C0020 (LG50G-37a)', name: 'Radiator Assembly', description: "LIUGONG part. Replace when overheating or leaking occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Cooling System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-20', partNumber: 'SP105609', name: 'Fan Bracket', description: "LIUGONG part. Replace when abnormal noise or cracking occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Cooling System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-21', partNumber: '38B0042', name: 'Reversing Alarm', description: "LIUGONG part. Replace when alarm fails.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Electrical System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-22', partNumber: '37B0915', name: 'Fuse Box', description: "LIUGONG part. Repair or replace when circuit abnormal occurs.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Electrical System', compatibleModels: ["Liugong CLG856", "CLG856H"] },
      { id: 'liugong-sp-23', partNumber: '40C0019 (Cummins 6CT8.3-C215)', name: 'Diesel Engine Assembly Reference', description: "LIUGONG part. Major repair class, for engine model reference only.", image: '/manus-storage/liugong1_81eaa09f.png', category: 'Engine System', compatibleModels: ["Liugong CLG856", "CLG856H"] }
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
      { id: 'sany-sp-1', partNumber: '60201217', name: '燃油滤芯', description: "SANY 零件。250-500小时随保养更换", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-2', partNumber: 'B222100000551', name: 'Oil Filter', description: "SANY 零件。250-500小时随保养更换", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-3', partNumber: '60033346', name: '燃油滤芯(老款)', description: "SANY 零件。250-500小时", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-4', partNumber: 'JM-2034', name: '机油滤芯(SY215C/225C系列)', description: "SANY 零件。250-500小时", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-5', partNumber: 'B222100000521', name: '燃油滤芯(新款9系)', description: "SANY 零件。250-500小时", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-6', partNumber: '60201217', name: '燃油滤芯(替代号)', description: "SANY 零件。250-500小时", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-7', partNumber: 'JM-3077', name: '燃油滤芯(SY215C/225C新款)', description: "SANY 零件。250-500小时", image: '/manus-storage/sany_5f4793a0.png', category: '保养/滤清系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-8', partNumber: '', name: '铲斗斗齿', description: "SANY 零件。磨损见底或断裂时更换,高频更换件", image: '/manus-storage/sany_5f4793a0.png', category: '挖掘属性/GET', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-9', partNumber: '', name: '前导向轮', description: "SANY 零件。磨损/异响时更换", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-10', partNumber: '', name: '驱动链轮', description: "SANY 零件。轮齿磨损/断齿时更换(大修类高价件)", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-11', partNumber: '', name: '下托链轮(Bottom Roller)', description: "SANY 零件。漏油/磨损时更换", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-12', partNumber: '', name: '上托轮(Top Roller/Carrier Roller)', description: "SANY 零件。漏油/磨损时更换", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-13', partNumber: '', name: 'Track Chain Assembly', description: "SANY 零件。履带松旷/磨损超限时更换(大修类高价件)", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-14', partNumber: 'Trasteel Track', name: '履带板/track shoe', description: "SANY 零件。磨损/断裂时更换", image: '/manus-storage/sany_5f4793a0.png', category: '底盘/履带系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-15', partNumber: 'A28VO130', name: '主液压泵(Rexroth型)', description: "SANY 零件。异响/供油不足/压力下降时更换(大修类高价件)", image: '/manus-storage/sany_5f4793a0.png', category: '液压系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-16', partNumber: '', name: '行走(履带)马达/最终驱动总成', description: "SANY 零件。异响/爬坡无力时更换(大修类高价件)", image: '/manus-storage/sany_5f4793a0.png', category: '液压系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-17', partNumber: 'KYB', name: '回转(转台)马达及减速机', description: "SANY 零件。转台异响/回转无力时更换(大修类)", image: '/manus-storage/sany_5f4793a0.png', category: '液压系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-18', partNumber: 'Cummins', name: 'Turbocharger', description: "SANY 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/sany_5f4793a0.png', category: '发动机系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-19', partNumber: '', name: '发电机总成', description: "SANY 零件。发电异常/异响时更换", image: '/manus-storage/sany_5f4793a0.png', category: '发动机系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-20', partNumber: '', name: '起动机总成', description: "SANY 零件。启动无力/异响时更换", image: '/manus-storage/sany_5f4793a0.png', category: '发动机系统', compatibleModels: ["SANY SY", "SY365"] },
      { id: 'sany-sp-21', partNumber: '', name: '铲斗油缸密封修理包', description: "SANY 零件。漏油/密封老化时更换", image: '/manus-storage/sany_5f4793a0.png', category: '液压缸/密封件', compatibleModels: ["SANY SY", "SY365"] }
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
      { id: 'komatsu-sp-1', partNumber: '600-211-5241(也作600-211-5240', name: 'Oil Filter', description: "KOMATSU 零件。250-500小时随保养更换", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-2', partNumber: '6136-71-6120', name: '柴油滤芯', description: "KOMATSU 零件。250-500小时或视油品", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-3', partNumber: 'ST40611A', name: '空气滤芯(外芯)', description: "KOMATSU 零件。250-500小时或视灰尘环境", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-4', partNumber: 'ST40611B', name: '空气滤芯(内芯)', description: "KOMATSU 零件。随外芯周期同步更换", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-5', partNumber: 'ST30805', name: 'Hydraulic Oil Filter', description: "KOMATSU 零件。500-1000小时或视油液检测", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-6', partNumber: 'ST30815', name: '先导液压滤芯', description: "KOMATSU 零件。500-1000小时", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-7', partNumber: '600-411-1151(WF2075)', name: '柴油滤芯(新款7/8系)', description: "KOMATSU 零件。250-500小时", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-8', partNumber: '600-311-9121', name: '柴油滤芯(通用型)', description: "KOMATSU 零件。250-500小时", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-9', partNumber: '6735-51-5140', name: '机油滤芯(6D102发动机)', description: "KOMATSU 零件。250-500小时随保养更换", image: '/manus-storage/komatsu_4cb14839.png', category: '保养/滤清系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-10', partNumber: '208-27-31221', name: '驱动链轮(旧款)', description: "KOMATSU 零件。轮齿磨损/断齿时更换(大修类高价件)", image: '/manus-storage/komatsu_4cb14839.png', category: '底盘/履带系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-11', partNumber: '20Y-27-11582', name: '驱动链轮(7/8系)', description: "KOMATSU 零件。轮齿磨损/断齿时更换(大修类高价件)", image: '/manus-storage/komatsu_4cb14839.png', category: '底盘/履带系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-12', partNumber: '20Y-32-02091', name: '履带板总成', description: "KOMATSU 零件。磨损/断裂时更换(大修类高价件)", image: '/manus-storage/komatsu_4cb14839.png', category: '底盘/履带系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-13', partNumber: '207-30-00510', name: '下托链轮(Track Roller,PC300-7参考)', description: "KOMATSU 零件。漏油/磨损时更换", image: '/manus-storage/komatsu_4cb14839.png', category: '底盘/履带系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-14', partNumber: '208-30-00510', name: '上托轮(Carrier Roller,PC400-7参考)', description: "KOMATSU 零件。漏油/磨损时更换", image: '/manus-storage/komatsu_4cb14839.png', category: '底盘/履带系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-15', partNumber: '2057019570 (K25,208-70-14152)', name: '铲斗斗齿(K25系列)', description: "KOMATSU 零件。磨损见底或断裂时更换,高频更换件", image: '/manus-storage/komatsu_4cb14839.png', category: '挖掘属性/GET', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-16', partNumber: '207-70-14151RC', name: '斗齿锁定销', description: "KOMATSU 零件。随斗齿更换时同步更换", image: '/manus-storage/komatsu_4cb14839.png', category: '挖掘属性/GET', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-17', partNumber: '708-2L-00400 (708-2L-00500', name: '主液压泵总成', description: "KOMATSU 零件。异响/供油不足/压力下降时更换(大修类高价件)", image: '/manus-storage/komatsu_4cb14839.png', category: '液压系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-18', partNumber: '708-2L-31411', name: '主液压泵(型号2)', description: "KOMATSU 零件。异响/供油不足时更换(大修类)", image: '/manus-storage/komatsu_4cb14839.png', category: '液压系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-19', partNumber: '706-7G-01170 (706-7G-01140', name: '回转(转台)马达总成', description: "KOMATSU 零件。转台异响/回转无力时更换(大修类高价件)", image: '/manus-storage/komatsu_4cb14839.png', category: '液压系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-20', partNumber: '708-2L-06710 (708-2L-07710', name: '安全阀(溢流阀)', description: "KOMATSU 零件。液压异常/压力不稳时更换", image: '/manus-storage/komatsu_4cb14839.png', category: '液压系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-21', partNumber: '08086-20000', name: '点火钥匙开关总成', description: "KOMATSU 零件。钥匙磨损/开关失效时更换", image: '/manus-storage/komatsu_4cb14839.png', category: '电气系统', compatibleModels: ["Komatsu PC200", "PC200-8"] },
      { id: 'komatsu-sp-22', partNumber: '22B-06-11910', name: '点火钥匙开关(老款)', description: "KOMATSU 零件。钥匙磨损/开关失效时更换", image: '/manus-storage/komatsu_4cb14839.png', category: '电气系统', compatibleModels: ["Komatsu PC200", "PC200-8"] }
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
      { id: 'isuzu-sp-1', partNumber: '1-87810-075-2', name: 'Oil Filter', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-2', partNumber: 'ST10716 (KRH0642', name: '机油滤芯(二级)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-3', partNumber: 'ST10720 (KRH0643', name: '机油滤芯(型号2)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-4', partNumber: 'ST20703 (KSP0281', name: '柴油滤芯', description: "ISUZU 零件。250-500小时或视油品", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-5', partNumber: 'ST40620AB (KRH0652+KRH1320)', name: '空气滤芯', description: "ISUZU 零件。250-500小时或视灰尘环境", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-6', partNumber: 'ST30805 (71416241)', name: 'Hydraulic Oil Filter', description: "ISUZU 零件。500-1000小时或视油液检测", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-7', partNumber: '30732 (83984918)', name: '液压油滤芯(型号2)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-8', partNumber: 'ST70810 (KRJ4008)', name: '液压油滤芯(型号3)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-9', partNumber: 'ST30813 (4294135)', name: '先导阀滤芯', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-10', partNumber: '1-13200-487-2 (1132004872)', name: '机油滤芯(卡车版)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-11', partNumber: '1-13610877-1', name: '水泵总成', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-12', partNumber: '1136500161 (1-13650016-1)', name: '水泵总成(型号2)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-13', partNumber: '114400-2720 (RHC62C)', name: 'Turbocharger', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '进气/增压', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-14', partNumber: '1-11310-199-0 (1113101990)', name: '机油泵总成', description: "ISUZU 零件。润滑不良/压力异常时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '润滑系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-15', partNumber: '1-13100277-0 (1131002770)', name: '机油输送泵', description: "ISUZU 零件。润滑不良时更换", image: '/manus-storage/isuzu_208688e1.png', category: '润滑系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-16', partNumber: '898175-9510', name: '机油泵(高压型)', description: "ISUZU 零件。润滑不良/压力异常时更换", image: '/manus-storage/isuzu_208688e1.png', category: '润滑系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-17', partNumber: 'ST40629AB (1421339', name: '空气滤芯(6HK1)', description: "ISUZU 零件。250-500小时或视灰尘环境", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-18', partNumber: 'ST10767 (4484495)', name: '机油滤芯(6HK1)', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-19', partNumber: 'ST29121 (4085912', name: '柴油滤芯(6HK1一级)', description: "ISUZU 零件。250-500小时或视油品", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-20', partNumber: 'ST20304 (4S00483', name: '柴油滤芯(6HK1二级)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-21', partNumber: 'ST30855 (4448402', name: '液压油滤芯(6HK1)', description: "ISUZU 零件。500-1000小时或视油液检测", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-22', partNumber: 'ST70810 (4210224)', name: '液压油滤芯(6HK1型号2)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-23', partNumber: 'ST30807 (4207841', name: '先导阀滤芯(6HK1)', description: "ISUZU 零件。500-1000小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-24', partNumber: '1-13201023-0 (1132010230)', name: '机油滤芯总成(6HK1-3代)', description: "ISUZU 零件。250-500小时随保养更换", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-25', partNumber: 'ST20880 (4679981', name: '柴油滤芯(6HK1-3代/新款)', description: "ISUZU 零件。250-500小时", image: '/manus-storage/isuzu_208688e1.png', category: '保养/滤清系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-26', partNumber: '8-98042848-2 (1-87310835-0)', name: '水泵总成(6HK1)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-27', partNumber: '1-13650133-3', name: '水泵总成(6HK1型号2)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-28', partNumber: '8-97627-356-1 (8976273561)', name: '水泵总成(6HK1 FVR卡车版)', description: "ISUZU 零件。冷却液渗漏/异响时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-29', partNumber: '8-97515301-1', name: '电子机油泵', description: "ISUZU 零件。润滑不良/压力异常时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '润滑系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-30', partNumber: '8-98091565-1 (8-98091565-0', name: '燃油喷射泵总成', description: "ISUZU 零件。喷油不良/启动困难时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '燃油系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-31', partNumber: '8-94392-713-5', name: '燃油喷射泵(型号2)', description: "ISUZU 零件。喷油不良时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '燃油系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-32', partNumber: '8-97602-049-4', name: '燃油喷射泵(FTR/FXR/FVR卡车版)', description: "ISUZU 零件。喷油不良时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '燃油系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-33', partNumber: '1144003900', name: '涡轮增压器(RHG6型)', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类高价件)", image: '/manus-storage/isuzu_208688e1.png', category: '进气/增压', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-34', partNumber: '114400-4050 (1144004050)', name: '涡轮增压器(RHG6,SH300)', description: "ISUZU 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/isuzu_208688e1.png', category: '进气/增压', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-35', partNumber: '1-21723066-0 (1217230660)', name: '机油冷却器芯', description: "ISUZU 零件。散热不良/渗漏时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
      { id: 'isuzu-sp-36', partNumber: '1136603321', name: '散热风扇叶片', description: "ISUZU 零件。异响/扇叶断裂时更换", image: '/manus-storage/isuzu_208688e1.png', category: '冷却系统', compatibleModels: ["Isuzu 6BG1", "6HK1"] },
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
      { id: 'shacman-sp-1', partNumber: '4110000556209', name: 'Oil Filter', description: 'Shacman Delong 零件。5,000-10,000km随保养更换', image: '/manus-storage/shacman_273a0f44.png', category: '保养/滤清系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-2', partNumber: '6126300080205', name: '柴油滤芯', description: 'Shacman Delong 零件。每20,000km或视油品', image: '/manus-storage/shacman_273a0f44.png', category: '保养/滤清系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-3', partNumber: '612630110319', name: '空气滤芯', description: 'Shacman Delong 零件。10,000-20,000km视路况', image: '/manus-storage/shacman_273a0f44.png', category: '保养/滤清系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-4', partNumber: 'DZ91189550169', name: '燃油粗滤器(油水分离器)', description: 'Shacman Delong 零件。5,000-10,000km,雨季/劣质油缩短', image: '/manus-storage/shacman_273a0f44.png', category: '保养/滤清系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-5', partNumber: 'DZ95009440015', name: '刹车蹄片弹簧', description: 'Shacman Delong 零件。随蹄片更换检查', image: '/manus-storage/shacman_273a0f44.png', category: '制动系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-6', partNumber: 'DZ9100189008', name: '排气制动蝶阀', description: 'Shacman Delong 零件。异响/制动效果下降时检修', image: '/manus-storage/shacman_273a0f44.png', category: '制动系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-7', partNumber: 'DZ9114160032', name: '离合器片总成', description: 'Shacman Delong 零件。离合器打滑/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '传动/离合器', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-8', partNumber: 'DZ97259190435', name: '涡轮增压器进气管', description: 'Shacman Delong 零件。漏气/开裂时检修更换', image: '/manus-storage/shacman_273a0f44.png', category: '增压/进气', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-9', partNumber: 'DZ15221443120', name: '侧倾/横向减震器', description: 'Shacman Delong 零件。异响/漏油时更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂减震', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-10', partNumber: 'DZ13241440150', name: '后悬挂减震器', description: 'Shacman Delong 零件。异响/漏油时更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂减震', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-11', partNumber: 'DZ13241440080', name: '驾驶室后减震器', description: 'Shacman Delong 零件。抑制驾驶室晃动,异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂减震', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-12', partNumber: 'DZ9X259520006', name: '驱动桥空气弹簧(气囊)', description: 'Shacman Delong 零件。老化/漏气时更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂减震', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-13', partNumber: 'DZ9325952015', name: '前钢板弹簧总成(带支架/吊耳)', description: 'Shacman Delong 零件。下沉/断裂时更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂减震', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-14', partNumber: 'DZ15221740011', name: '雨刮连杆总成(带电机)', description: 'Shacman Delong 零件。雨刮不工作/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/电气', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-15', partNumber: 'D90009410196', name: '前轮毂总成', description: 'Shacman Delong 零件。异响/轴承间隙过大时更换', image: '/manus-storage/shacman_273a0f44.png', category: '轮毂/传动', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-16', partNumber: 'DZ16231440072', name: '高度阀(空气悬挂)', description: 'Shacman Delong 零件。车身高度异常时检修更换', image: '/manus-storage/shacman_273a0f44.png', category: '悬挂系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-17', partNumber: 'DZ9114311067', name: '传动轴总成(F3000)', description: 'Shacman Delong 零件。异响/抖动/大修时更换', image: '/manus-storage/shacman_273a0f44.png', category: '传动/万向节', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-18', partNumber: 'AZ9114310125', name: '驱动轴节叉', description: 'Shacman Delong 零件。传动轴异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '轮毂/传动轴', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-19', partNumber: '30222(参考件号)', name: '前轮轴承维修包', description: 'Shacman Delong 零件。异响/间隙过大时更换,建议核实原厂号', image: '/manus-storage/shacman_273a0f44.png', category: '轮毂/传动轴', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-20', partNumber: '需按VIN核实(标准STR', name: '转向节臂/横拉杆(转向梯形臂)', description: 'Shacman Delong 零件。转向精度下降/跑偏时检查', image: '/manus-storage/shacman_273a0f44.png', category: '转向系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-21', partNumber: '需按前桥型号核实', name: '转向主销(king pin)总成', description: 'Shacman Delong 零件。转向异响/间隙过大时更换', image: '/manus-storage/shacman_273a0f44.png', category: '转向系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-22', partNumber: '需按发动机型号核实(WD615', name: '发电机总成', description: 'Shacman Delong 零件。发电异常/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '电气/启动', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-23', partNumber: '需按发动机型号核实(WD615', name: '起动机总成', description: 'Shacman Delong 零件。启动无力/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '电气/启动', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-24', partNumber: '需按发动机型号核实(WD615', name: '水泵总成', description: 'Shacman Delong 零件。冷却液渗漏/异响时更换,建议核实VG1500060051是否通用', image: '/manus-storage/shacman_273a0f44.png', category: '冷却系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-25', partNumber: '需按发动机型号核实(WD615', name: '涡轮增压器总成', description: 'Shacman Delong 零件。动力下降/漏油时更换(大修类)', image: '/manus-storage/shacman_273a0f44.png', category: '进气/增压', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-26', partNumber: '需按桥型核实(参考HOWO WG9000360系列)', name: '制动气室(前/后桥)', description: 'Shacman Delong 零件。刹车异响/漏气时更换', image: '/manus-storage/shacman_273a0f44.png', category: '制动系统', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-27', partNumber: 'DZ15221740016', name: '前雨刮片', description: 'Shacman Delong 零件。每年或雨季前更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/雨刮', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-28', partNumber: 'DZ14251740013', name: '雨刮臂(SWF)', description: 'Shacman Delong 零件。雨刮不贴合/异响时更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/雨刮', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-29', partNumber: 'DZ93189724110', name: '左前大灯总成', description: 'Shacman Delong 零件。大灯破损/进水时更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/电气', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-30', partNumber: 'DZ93189724120', name: '右前大灯总成', description: 'Shacman Delong 零件。大灯破损/进水时更换', image: '/manus-storage/shacman_273a0f44.png', category: '车身/电气', compatibleModels: ["Shacman Delong", "Shacman X3000"] },
      { id: 'shacman-sp-31', partNumber: 'DZ93189230090', name: '离合器总泵及油壶总成', description: 'Shacman Delong 零件。离合器踏板异常/漏油时更换', image: '/manus-storage/shacman_273a0f44.png', category: '传动/离合器', compatibleModels: ["Shacman Delong", "Shacman X3000"] }
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
      { id: 'sinotruk-sp-1', partNumber: 'VG61000070005', name: 'Oil Filter', description: "SINOTRUK 零件。5,000-10,000km随保养更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '保养/滤清系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-2', partNumber: 'WG9725190055', name: '空气滤芯总成', description: "SINOTRUK 零件。视路况10,000-20,000km", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '保养/滤清系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-3', partNumber: 'WG9925550110', name: '柴油粗滤器(油水分离器)', description: "SINOTRUK 零件。5,000-10,000km,雨季/劣质油品缩短周期", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '保养/滤清系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-4', partNumber: 'VG1560080012', name: '柴油精滤器', description: "SINOTRUK 零件。与粗滤器同步更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '保养/滤清系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-5', partNumber: 'VG1095094002', name: '发电机(28V/70A)', description: "SINOTRUK 零件。发电异常/异响时检修更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '电气/启动', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-6', partNumber: 'VG1560090001', name: '起动机总成', description: "SINOTRUK 零件。启动无力/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '电气/启动', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-7', partNumber: 'VG1093130001', name: '空气压缩机(双缸水冷)', description: "SINOTRUK 零件。刹车气压不足/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '进气/增压', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-8', partNumber: 'AZ9231340200', name: '前刹车蹄片总成', description: "SINOTRUK 零件。30,000-50,000km或视磨损", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-9', partNumber: 'WG9231342069', name: '后刹车蹄片(带摩擦片)', description: "SINOTRUK 零件。与前片同步检查,重载车型更频繁", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-10', partNumber: 'WG9100440001', name: '制动凸轮轴(左)', description: "SINOTRUK 零件。随刹车蹄片检查", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-11', partNumber: 'WG9231340061', name: '刹车间隙自动调整臂', description: "SINOTRUK 零件。制动异响/行程异常时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-12', partNumber: 'WG9000360101', name: '制动气室(前桥)', description: "SINOTRUK 零件。刹车异响/漏气时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-13', partNumber: 'WG9100443001', name: '刹车盘', description: "SINOTRUK 零件。盘面磨损/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-14', partNumber: '1601ZB1T-130', name: '离合器压盘总成', description: "SINOTRUK 零件。离合器打滑/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/离合器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-15', partNumber: 'WG9100410104', name: '离合器分离轴承(助力泵)', description: "SINOTRUK 零件。离合器异响/踩踏沉重时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/离合器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-16', partNumber: 'AZ9725529272', name: 'V型推力杆(稳定杆连杆)', description: "SINOTRUK 零件。悬挂异响/跑偏时检查更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向/悬挂', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-17', partNumber: 'AZ9738410041', name: '转向节臂/羊角(左)', description: "SINOTRUK 零件。转向异响/精度下降时", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向/悬挂', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-18', partNumber: '179000520040', name: '前钢板弹簧卷耳销', description: "SINOTRUK 零件。钢板弹簧异响/松旷时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向/悬挂', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-19', partNumber: 'WG9100520034', name: '前钢板弹簧吊耳', description: "SINOTRUK 零件。与销/衬套同步更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向/悬挂', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-20', partNumber: 'WG9100410129', name: 'king pin主销衬套', description: "SINOTRUK 零件。转向异响/间隙过大时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向/悬挂', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-21', partNumber: 'WG9925680028', name: '前悬挂减震器总成', description: "SINOTRUK 零件。异响/漏油时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '悬挂减震', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-22', partNumber: 'WG1642440084', name: '后悬挂减震器总成', description: "SINOTRUK 零件。异响/漏油时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '悬挂减震', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-23', partNumber: 'WG9725520789', name: '后钢板弹簧总成', description: "SINOTRUK 零件。下沉/断裂时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '悬挂减震', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-24', partNumber: 'AZ9725520254', name: '钢板弹簧U型螺栓压板', description: "SINOTRUK 零件。随弹簧检查更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '悬挂减震', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-25', partNumber: 'AZ9761341010', name: '后桥半轴(右)', description: "SINOTRUK 零件。异响/断裂时更换(大修类)", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '车身/雨刮', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-26', partNumber: 'WG9725310020', name: '万向节十字轴总成', description: "SINOTRUK 零件。传动轴异响/抖动时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/万向节', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-27', partNumber: 'WG9014310125', name: '传动轴总成(变速箱至驱动桥)', description: "SINOTRUK 零件。异响/抖动/大修时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/万向节', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-28', partNumber: 'VG1500060051', name: '水泵总成', description: "SINOTRUK 零件。冷却液渗漏/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '冷却系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-29', partNumber: 'WG1642111011', name: '散热器护罩/水箱罩', description: "SINOTRUK 零件。碰撞/老化开裂时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '冷却系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-30', partNumber: 'VG1540110066', name: '涡轮增压器总成', description: "SINOTRUK 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '进气/增压', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-31', partNumber: 'WG9925541280', name: '消声器(排气筒)总成', description: "SINOTRUK 零件。排气异响/锈蚀穿孔时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '排气系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-32', partNumber: 'WG9725471016', name: '动力转向助力泵', description: "SINOTRUK 零件。转向沉重/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '转向系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-33', partNumber: 'WG1560161130', name: '离合器从动盘(摩擦片)', description: "SINOTRUK 零件。离合器打滑/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/离合器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-34', partNumber: 'AZ9114230018', name: '离合器助力缸(分离缸)', description: "SINOTRUK 零件。离合器踩踏沉重/异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '传动/离合器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-35', partNumber: 'WG9100440027', name: '前刹车摩擦片(内衬)', description: "SINOTRUK 零件。随蹄片检查更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-36', partNumber: 'WG9100440030', name: '刹车蹄片总成(带内衬)', description: "SINOTRUK 零件。30,000-50,000km或视磨损", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-37', partNumber: 'WG9000360522', name: '驻车/手刹阀', description: "SINOTRUK 零件。驻车异响/失效时检修更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-38', partNumber: 'WG9725542041', name: '排气制动阀', description: "SINOTRUK 零件。制动效果下降时检修更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '制动系统', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-39', partNumber: 'WG2209280005', name: '输入轴转速传感器', description: "SINOTRUK 零件。变速箱换挡异常时检修更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '电气/传感器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-40', partNumber: 'WG9000360523', name: '四回路气压保护阀', description: "SINOTRUK 零件。气压异常/制动不良时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '电气/传感器', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-41', partNumber: 'WG1642330003', name: '车门玻璃升降器(左/右)', description: "SINOTRUK 零件。升降失灵时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '车身/驾驶室', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-42', partNumber: 'AZ9114310125', name: '驱动轴节叉(万向节叉)', description: "SINOTRUK 零件。传动轴异响时更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '轮毂/传动轴', compatibleModels: ["Sinotruk HOWO", "WD615"] },
      { id: 'sinotruk-sp-43', partNumber: 'WG9719820001', name: '液压油泵(举升系统)', description: "SINOTRUK 零件。举升无力/异响时检修更换", image: '/manus-storage/sinotruck_d3e8e9bd.png', category: '液压/取力', compatibleModels: ["Sinotruk HOWO", "WD615"] }
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
      { id: 'toyota-sp-1', partNumber: '90915-YZZJ3', name: 'Oil Filter', description: 'Toyota Hilux 零件。5,000-10,000km随保养更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '保养/滤清系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-2', partNumber: '17801-0L040', name: '空气滤芯', description: 'Toyota Hilux 零件。10,000-20,000km或视路况', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '保养/滤清系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-3', partNumber: '23390-0L090', name: '柴油滤芯(前置)', description: 'Toyota Hilux 零件。每20,000km,柴油车关键件', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '保养/滤清系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-4', partNumber: '87139-0K060', name: '空调/花粉滤芯', description: 'Toyota Hilux 零件。10,000-15,000km', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '保养/滤清系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-5', partNumber: '04426-0L020', name: '燃油泵SCV阀', description: 'Toyota Hilux 零件。燃油系统故障时更换,注意年款', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '保养/滤清系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-6', partNumber: '90916-T2033', name: '风扇/发电机V带', description: 'Toyota Hilux 零件。60,000-100,000km检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '传动/皮带', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-7', partNumber: '13521-0E010(链条张紧齿轮)', name: '正时链条组件(非皮带)', description: 'Toyota Hilux 零件。链条驱动寿命较长,需定期检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '传动/皮带', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-8', partNumber: '13566-0E010', name: '正时链条导轨', description: 'Toyota Hilux 零件。随链条组件检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '传动/皮带', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-9', partNumber: '13616-0E010', name: '曲轴正时齿轮', description: 'Toyota Hilux 零件。大修时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '传动/皮带', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-10', partNumber: '04465-0K360', name: '前刹车片', description: 'Toyota Hilux 零件。30,000-60,000km或视磨损', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '制动系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-11', partNumber: '04495-0K160', name: '后刹车蹄片', description: 'Toyota Hilux 零件。与前片同步检查更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '制动系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-12', partNumber: '47750-0K300', name: '刹车分泵总成(后)', description: 'Toyota Hilux 零件。渗油/卡滞时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '制动系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-13', partNumber: '47730-0K300', name: '刹车分泵缸体(前)', description: 'Toyota Hilux 零件。配合刹车片总成', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '制动系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-14', partNumber: '48510-8Z205', name: '前减震器', description: 'Toyota Hilux 零件。80,000-100,000km或异响时', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '悬挂系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-15', partNumber: '48654-0K080', name: '前下摆臂衬套', description: 'Toyota Hilux 零件。悬挂异响、跑偏时检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '悬挂系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-16', partNumber: '90385-T0014', name: '后钢板弹簧吊耳衬套', description: 'Toyota Hilux 零件。弹簧异响/下沉时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '悬挂系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-17', partNumber: '需按VIN核实', name: '减震器上支座(顶胶)', description: 'Toyota Hilux 零件。异响/下沉时检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '悬挂系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-18', partNumber: '45046-09810', name: '转向拉杆球头', description: 'Toyota Hilux 零件。方向盘异响/跑偏时检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '转向系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-19', partNumber: '45503-0K130', name: '转向机拉杆端', description: 'Toyota Hilux 零件。与拉杆球头配套更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '转向系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-20', partNumber: '45601-35070', name: '转向节臂(羊角臂)', description: 'Toyota Hilux 零件。转向异响/精度下降时', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '转向系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-21', partNumber: '90369-T0003', name: '前轮轴承总成', description: 'Toyota Hilux 零件。异响/间隙过大时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '轮毂/传动轴', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-22', partNumber: '90366-T0060', name: '后轮轴承总成(含ABS环)', description: 'Toyota Hilux 零件。异响时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '轮毂/传动轴', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-23', partNumber: '43040-0K070', name: '前CV等速万向节', description: 'Toyota Hilux 零件。异响、行驶抖动时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '轮毂/传动轴', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-24', partNumber: '43371-0K130', name: '传动轴十字节(万向节)', description: 'Toyota Hilux 零件。传动轴异响时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '轮毂/传动轴', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-25', partNumber: '41110-0K280', name: '前差速器壳体', description: 'Toyota Hilux 零件。大修/异响时,专业件建议核实VIN', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '差速器/传动', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-26', partNumber: '41201-09E42', name: '差速器齿轮总成', description: 'Toyota Hilux 零件。大修件,非常规易损', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '差速器/传动', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-27', partNumber: '16100-09711', name: '水泵总成', description: 'Toyota Hilux 零件。冷却液渗漏/异响时更换,建议6-8万km检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '冷却系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-28', partNumber: '16278-0E010', name: '水路旁通管', description: 'Toyota Hilux 零件。随水泵一同检查', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '冷却系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-29', partNumber: '16711-0L170', name: '散热器风扇罩', description: 'Toyota Hilux 零件。风扇异响/散热不良时', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '冷却系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] },
      { id: 'toyota-sp-30', partNumber: '16400-0K350', name: '散热器总成(参考)', description: 'Toyota Hilux 零件。过热/渗漏时更换', image: '/manus-storage/toyota_parts_a1da12f5.png', category: '冷却系统', compatibleModels: ["Hilux Revo", "Hilux Vigo"] }
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
      { id: 'weichai-sp-1', partNumber: '61000070005(替代号W962', name: 'Oil Filter', description: "WEICHAI 零件。250-500小时随保养更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-2', partNumber: '612630080088(PRELINE 420,替代号PL420', name: '柴油滤芯(WP10专用)', description: "WEICHAI 零件。250-500小时或视油品", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-3', partNumber: '612600081334(替代号FF5622', name: '柴油滤芯(通用型)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-4', partNumber: '612630080087(替代号WDK11102', name: '柴油滤芯(型号2)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-5', partNumber: '612630080203(替代号CX1016E4', name: '柴油滤芯(型号3)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-6', partNumber: '612630080205(替代号1111474)', name: '柴油滤芯(型号4)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-7', partNumber: '612600081335(PRELINE 420,替代号PL420', name: '柴油滤芯总成', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-8', partNumber: '612630060015(替代号PROVENT200', name: '油气分离器滤芯', description: "WEICHAI 零件。500-1000小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-9', partNumber: '612630060138', name: '油气分离器滤芯(型号2)', description: "WEICHAI 零件。500-1000小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-10', partNumber: '612630010239(替代号W11170', name: '机油滤芯(通用变体)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-11', partNumber: '612600081335A', name: '柴油滤芯(WP4/WP6/WD615/WD10/WP10/WP12通用)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '保养/滤清系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-12', partNumber: '1000402861', name: '水泵总成', description: "WEICHAI 零件。冷却液渗漏/异响时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '冷却系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-13', partNumber: '612600061872', name: '水泵总成(WD12/WP12专用)', description: "WEICHAI 零件。冷却液渗漏/异响时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '冷却系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-14', partNumber: '612600140062', name: '节温器(恒温器)', description: "WEICHAI 零件。水温异常/过热时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '冷却系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-15', partNumber: '615G00060016', name: '节温器总成(WD615)', description: "WEICHAI 零件。水温异常/过热时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '冷却系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-16', partNumber: '61200100157', name: '风扇液力驱动总成(离合风扇)', description: "WEICHAI 零件。散热异响/风扇打滑时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/皮带', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-17', partNumber: '612600090206D', name: '发电机总成(28V/70A)', description: "WEICHAI 零件。发电异常/异响时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '电气/启动', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-18', partNumber: '61560080276(替代号Kbel132p110)', name: '燃油喷油器', description: "WEICHAI 零件。喷油不良/启动困难时更换(2000小时检查/4000-6000小时更换)", image: '/manus-storage/weichai_2cc7d2af.png', category: '燃油系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-19', partNumber: '1000000623', name: '喷油嘴(injector nozzle)', description: "WEICHAI 零件。随喷油器周期检查更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '燃油系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-20', partNumber: '1002018309(612600081327)', name: '燃油滤芯元件(总成型)', description: "WEICHAI 零件。250-500小时", image: '/manus-storage/weichai_2cc7d2af.png', category: '燃油系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-21', partNumber: '612600190222', name: 'ECU电控单元', description: "WEICHAI 零件。故障灯报警/无法启动时检修更换(大修类高价件)", image: '/manus-storage/weichai_2cc7d2af.png', category: '燃油系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-22', partNumber: '612600080611', name: '涡轮增压器(WP10)', description: "WEICHAI 零件。动力下降/异响/漏油时更换(大修类高价件)", image: '/manus-storage/weichai_2cc7d2af.png', category: '进气/增压', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-23', partNumber: '1001248542', name: '涡轮增压器(高原型)', description: "WEICHAI 零件。动力下降/异响/漏油时更换(大修类)", image: '/manus-storage/weichai_2cc7d2af.png', category: '进气/增压', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-24', partNumber: '1001740613', name: '机油滤芯(总成型)', description: "WEICHAI 零件。250-500小时随保养更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '润滑系统', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-25', partNumber: '61500010100', name: '后曲轴油封', description: "WEICHAI 零件。大修/漏油时更换(大修类)", image: '/manus-storage/weichai_2cc7d2af.png', category: '密封/传动件', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-26', partNumber: '4110000556111(61500030009', name: '连杆总成', description: "WEICHAI 零件。大修类,异响/敲缸时检修更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/活塞组件', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-27', partNumber: '612600900072', name: '缸套活塞组套件', description: "WEICHAI 零件。大修类,烧机油/功率下降时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/活塞组件', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-28', partNumber: '612600030150', name: '活塞(标准尺寸)', description: "WEICHAI 零件。大修类,烧机油/敲缸时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/活塞组件', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-29', partNumber: 'Z20050060', name: '活塞环', description: "WEICHAI 零件。大修类,机油消耗异常时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/活塞组件', compatibleModels: ["Weichai WP10", "WP12"] },
      { id: 'weichai-sp-30', partNumber: '61500010344', name: '水冷缸套', description: "WEICHAI 零件。大修类,烧机油/缸压不足时更换", image: '/manus-storage/weichai_2cc7d2af.png', category: '传动/活塞组件', compatibleModels: ["Weichai WP10", "WP12"] }
    ]
  },
];
