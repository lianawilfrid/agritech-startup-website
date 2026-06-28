export type Category = {
  slug: string
  name: string
  tagline: string
  image: string
}

export type ProductSize = {
  label: string
  price: number
  mrp?: number
}

export type Review = {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

export type Product = {
  slug: string
  name: string
  scientificName: string
  localName: string
  category: string
  categoryName: string
  image: string
  gallery: string[]
  shortDescription: string
  description: string
  benefits: string[]
  rating: number
  reviewCount: number
  badge?: string
  bestSeller?: boolean
  sizes: ProductSize[]
  specs: {
    climate: string
    states: string
    season: string
    spacing: string
    yield: string
    water: string
    fertilizer: string
    harvest: string
    height: string
    lifespan: string
  }
  growingGuide: string[]
  faqs: { q: string; a: string }[]
  reviews: Review[]
}

export const categories: Category[] = [
  {
    slug: 'tissue-culture-plants',
    name: 'Tissue Culture Plants',
    tagline: 'Lab-certified, disease-free planting material',
    image: '/images/cat-tissue-culture.png',
  },
  {
    slug: 'fruit-plants',
    name: 'Fruit Plants',
    tagline: 'High-yield grafted fruit saplings',
    image: '/images/cat-fruit-plants.png',
  },
  {
    slug: 'vegetable-seedlings',
    name: 'Vegetable Seedlings',
    tagline: 'Robust, ready-to-transplant seedlings',
    image: '/images/cat-seedlings.png',
  },
  {
    slug: 'organic-manure',
    name: 'Organic Manure',
    tagline: 'Rich, well-composted soil nutrition',
    image: '/images/cat-organic-manure.png',
  },
  {
    slug: 'biofertilizers',
    name: 'Biofertilizers',
    tagline: 'Living microbes for healthier soil',
    image: '/images/cat-biofertilizers.png',
  },
  {
    slug: 'cocopeat',
    name: 'Cocopeat',
    tagline: 'Premium coir growing medium',
    image: '/images/cat-cocopeat.png',
  },
  {
    slug: 'vermicompost',
    name: 'Vermicompost',
    tagline: 'Earthworm-rich organic fertilizer',
    image: '/images/cat-vermicompost.png',
  },
  {
    slug: 'micronutrients',
    name: 'Micronutrients',
    tagline: 'Targeted trace-element nutrition',
    image: '/images/cat-micronutrients.png',
  },
  {
    slug: 'garden-plants',
    name: 'Garden Plants',
    tagline: 'Ornamentals for home & landscape',
    image: '/images/cat-garden-plants.png',
  },
  {
    slug: 'farm-accessories',
    name: 'Farm Accessories',
    tagline: 'Tools, grow bags & irrigation',
    image: '/images/cat-accessories.png',
  },
]

const baseReviews: Review[] = [
  {
    name: 'Ramesh Gowda',
    location: 'Tumkur, Karnataka',
    rating: 5,
    text: 'Plants arrived healthy and well-packed. Survival rate was nearly 100% on my 4-acre farm.',
    date: 'Mar 2025',
  },
  {
    name: 'Lakshmi Narayanan',
    location: 'Erode, Tamil Nadu',
    rating: 5,
    text: 'The growing support over WhatsApp was excellent. They guided me through the first fertilizer schedule.',
    date: 'Feb 2025',
  },
  {
    name: 'Suresh Reddy',
    location: 'Anantapur, Andhra Pradesh',
    rating: 4,
    text: 'Good quality material and fast farm delivery. Will order again for the next season.',
    date: 'Jan 2025',
  },
]

const commonFaqs = [
  {
    q: 'Do you deliver to my district?',
    a: 'We deliver across Karnataka, Tamil Nadu, Andhra Pradesh, Telangana and Kerala. Enter your pincode at checkout to confirm delivery date.',
  },
  {
    q: 'Is there a survival warranty?',
    a: 'Yes. Eligible plants carry a 30-day survival warranty with free replacement when our growing guidelines are followed.',
  },
  {
    q: 'Can I place a bulk order?',
    a: 'Absolutely. Use the Bulk Order button for quantities above 500 units and our team will share wholesale pricing.',
  },
]

export const products: Product[] = [
  {
    slug: 'g9-tissue-culture-banana',
    name: 'G9 Tissue Culture Banana Plant',
    scientificName: 'Musa acuminata (Grand Naine)',
    localName: 'ಬಾಳೆ ಗಿಡ / வாழை',
    category: 'tissue-culture-plants',
    categoryName: 'Tissue Culture Plants',
    image: '/images/product-banana.png',
    gallery: ['/images/product-banana.png', '/images/cat-tissue-culture.png', '/images/hero-plantation.png'],
    shortDescription: 'Uniform, disease-free G9 banana plantlets with high bunch yield.',
    description:
      'Our G9 (Grand Naine) tissue culture banana plants are produced in certified labs, ensuring genetic uniformity, disease-free material and synchronized harvesting. Each plantlet is hardened in our nurseries before dispatch for maximum field survival.',
    benefits: [
      'Genetically uniform, true-to-type plants',
      'Disease-free, virus-indexed material',
      'Synchronized flowering and harvest',
      'Higher bunch weight of 25–35 kg',
    ],
    rating: 4.8,
    reviewCount: 412,
    badge: 'Certified',
    bestSeller: true,
    sizes: [
      { label: 'Pack of 10', price: 350, mrp: 420 },
      { label: 'Pack of 50', price: 1600, mrp: 1900 },
      { label: 'Pack of 100', price: 2999, mrp: 3600 },
    ],
    specs: {
      climate: 'Tropical & subtropical, 15–35°C',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh, Kerala',
      season: 'June–August / February–March',
      spacing: '1.8 m × 1.8 m',
      yield: '25–35 kg per bunch',
      water: 'Drip: 15–20 litres/plant/day',
      fertilizer: 'NPK + micronutrients, monthly schedule',
      harvest: '11–12 months after planting',
      height: '2.5–3 m at maturity',
      lifespan: 'Perennial (ratoon up to 3 cycles)',
    },
    growingGuide: [
      'Prepare pits of 45×45×45 cm and fill with topsoil, FYM and neem cake.',
      'Plant hardened plantlets at 1.8 m spacing during early monsoon.',
      'Maintain drip irrigation and apply the recommended monthly fertilizer schedule.',
      'De-sucker regularly and provide bunch support before harvest.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'red-lady-papaya',
    name: 'Red Lady Papaya Sapling',
    scientificName: 'Carica papaya (Red Lady 786)',
    localName: 'ಪಪ್ಪಾಯಿ / பப்பாளி',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-papaya.png',
    gallery: ['/images/product-papaya.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'High-yielding, gynodioecious papaya with sweet red flesh.',
    description:
      'Red Lady 786 is a vigorous, high-yielding papaya variety bearing fruit early at a low height. Reliable fruit set, excellent sweetness and strong tolerance to common diseases make it a favourite among commercial growers.',
    benefits: [
      'Early bearing at 8–10 months',
      'Fruits at low height for easy harvest',
      'Sweet, firm red flesh with long shelf life',
      'Tolerant to ringspot virus',
    ],
    rating: 4.7,
    reviewCount: 286,
    badge: 'High Yield',
    bestSeller: true,
    sizes: [
      { label: 'Pack of 10', price: 290, mrp: 350 },
      { label: 'Pack of 25', price: 650, mrp: 800 },
      { label: 'Pack of 50', price: 1200, mrp: 1500 },
    ],
    specs: {
      climate: 'Warm, frost-free, 22–32°C',
      states: 'Karnataka, Tamil Nadu, Telangana',
      season: 'Year-round (avoid peak monsoon)',
      spacing: '1.8 m × 1.8 m',
      yield: '40–60 kg per plant per year',
      water: 'Drip: 8–12 litres/plant/day',
      fertilizer: 'NPK split doses every 2 months',
      harvest: '8–10 months after transplanting',
      height: '2–2.5 m',
      lifespan: '2–3 years',
    },
    growingGuide: [
      'Transplant 30-day seedlings into well-drained pits enriched with compost.',
      'Avoid waterlogging — maintain raised beds in heavy soils.',
      'Apply balanced fertilizer and micronutrients every two months.',
      'Harvest when fruit shows colour break at the tip.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'premium-vermicompost',
    name: 'Premium Vermicompost',
    scientificName: 'Eisenia fetida processed compost',
    localName: 'ಎರೆಹುಳು ಗೊಬ್ಬರ / மண்புழு உரம்',
    category: 'vermicompost',
    categoryName: 'Vermicompost',
    image: '/images/cat-vermicompost.png',
    gallery: ['/images/cat-vermicompost.png', '/images/cat-organic-manure.png'],
    shortDescription: 'Fine, odour-free earthworm castings rich in nutrients and microbes.',
    description:
      'Our premium vermicompost is produced from cow dung and crop residue processed by earthworms. It improves soil structure, water retention and microbial life while delivering balanced, slow-release nutrition.',
    benefits: [
      'Rich in NPK and beneficial microbes',
      'Improves soil structure and aeration',
      'Enhances water-holding capacity',
      'Completely organic and odour-free',
    ],
    rating: 4.9,
    reviewCount: 534,
    badge: 'Best Value',
    sizes: [
      { label: '5 kg', price: 199, mrp: 260 },
      { label: '25 kg', price: 850, mrp: 1050 },
      { label: '50 kg', price: 1499, mrp: 1900 },
    ],
    specs: {
      climate: 'Suitable for all crops & regions',
      states: 'Pan South India',
      season: 'Apply year-round',
      spacing: 'Broadcast or pit application',
      yield: 'Improves yield by 15–25%',
      water: 'Retains soil moisture',
      fertilizer: 'Use as base + top dressing',
      harvest: 'N/A',
      height: 'N/A',
      lifespan: 'Use within 12 months',
    },
    growingGuide: [
      'Apply 2–5 tonnes per acre as a base dose before planting.',
      'For pits, mix 1–2 kg per plant with topsoil.',
      'Top-dress around the root zone every 6–8 weeks.',
      'Keep soil moist to activate microbial action.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'organic-neem-cake',
    name: 'Organic Neem Cake',
    scientificName: 'Azadirachta indica residue',
    localName: 'ಬೇವಿನ ಹಿಂಡಿ / வேப்பம் புண்ணாக்கு',
    category: 'organic-manure',
    categoryName: 'Organic Manure',
    image: '/images/cat-organic-manure.png',
    gallery: ['/images/cat-organic-manure.png'],
    shortDescription: 'Natural soil conditioner and pest repellent neem cake.',
    description:
      'Neem cake is a by-product of neem seed oil extraction. It acts as a slow-release organic fertilizer while suppressing soil-borne pests and nematodes, making it ideal for sustainable farming.',
    benefits: [
      'Natural nematode and pest suppression',
      'Slow-release nitrogen source',
      'Improves fertilizer-use efficiency',
      '100% organic and biodegradable',
    ],
    rating: 4.6,
    reviewCount: 198,
    sizes: [
      { label: '5 kg', price: 240, mrp: 300 },
      { label: '25 kg', price: 1050, mrp: 1300 },
    ],
    specs: {
      climate: 'All regions',
      states: 'Pan South India',
      season: 'Apply year-round',
      spacing: 'Soil incorporation',
      yield: 'Reduces pest losses',
      water: 'Normal irrigation',
      fertilizer: 'Combine with compost',
      harvest: 'N/A',
      height: 'N/A',
      lifespan: 'Use within 9 months',
    },
    growingGuide: [
      'Incorporate 250–500 kg per acre into the soil before sowing.',
      'For trees, apply 1–2 kg around the root zone.',
      'Mix with vermicompost for balanced nutrition.',
      'Irrigate after application for best results.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'coco-peat-block',
    name: 'Compressed Cocopeat Block (5 kg)',
    scientificName: 'Cocos nucifera coir pith',
    localName: 'ತೆಂಗಿನ ನಾರಿನ ಪುಡಿ / தென்னம் நார்',
    category: 'cocopeat',
    categoryName: 'Cocopeat',
    image: '/images/cat-cocopeat.png',
    gallery: ['/images/cat-cocopeat.png'],
    shortDescription: 'Low-EC, high-expansion coir block for nurseries and hydroponics.',
    description:
      'Our washed, low-EC cocopeat blocks expand to 70–75 litres of premium growing medium. Excellent water retention and aeration make it ideal for seedling trays, terrace gardens and soilless cultivation.',
    benefits: [
      'Expands up to 15× in volume',
      'Excellent water retention & aeration',
      'Low EC, washed and buffered',
      'Reusable and eco-friendly',
    ],
    rating: 4.8,
    reviewCount: 321,
    badge: 'Low EC',
    sizes: [
      { label: '5 kg Block', price: 180, mrp: 240 },
      { label: 'Pack of 4', price: 660, mrp: 880 },
    ],
    specs: {
      climate: 'All growing systems',
      states: 'Pan South India',
      season: 'Year-round',
      spacing: 'As growing medium',
      yield: 'Improves germination',
      water: 'Retains 8× its weight',
      fertilizer: 'Add nutrients separately',
      harvest: 'N/A',
      height: 'N/A',
      lifespan: 'Reusable for 2–3 cycles',
    },
    growingGuide: [
      'Soak the block in 15–20 litres of water to expand fully.',
      'Loosen and mix with vermicompost for nursery use.',
      'Fill seedling trays or grow bags as needed.',
      'Maintain moisture without waterlogging.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'azospirillum-biofertilizer',
    name: 'Azospirillum Biofertilizer',
    scientificName: 'Azospirillum brasilense',
    localName: 'ಜೈವಿಕ ಗೊಬ್ಬರ / உயிர் உரம்',
    category: 'biofertilizers',
    categoryName: 'Biofertilizers',
    image: '/images/cat-biofertilizers.png',
    gallery: ['/images/cat-biofertilizers.png'],
    shortDescription: 'Nitrogen-fixing microbial inoculant for cereals and vegetables.',
    description:
      'Azospirillum is a free-living nitrogen-fixing bacterium that boosts plant growth, improves root development and reduces chemical nitrogen requirements by up to 25%.',
    benefits: [
      'Fixes atmospheric nitrogen naturally',
      'Reduces urea requirement by ~25%',
      'Promotes vigorous root growth',
      'Safe for soil and environment',
    ],
    rating: 4.5,
    reviewCount: 142,
    sizes: [
      { label: '1 kg', price: 160, mrp: 210 },
      { label: '5 kg', price: 700, mrp: 900 },
    ],
    specs: {
      climate: 'All regions',
      states: 'Pan South India',
      season: 'At sowing / transplanting',
      spacing: 'Seed or soil treatment',
      yield: 'Improves yield by 10–20%',
      water: 'Apply to moist soil',
      fertilizer: 'Reduces N fertilizer need',
      harvest: 'N/A',
      height: 'N/A',
      lifespan: 'Use within 6 months',
    },
    growingGuide: [
      'For seed treatment, coat seeds with slurry before sowing.',
      'For soil application, mix with FYM and broadcast.',
      'Avoid mixing directly with chemical fertilizers.',
      'Apply to moist soil in the evening.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'chelated-micronutrient-mix',
    name: 'Chelated Micronutrient Mix',
    scientificName: 'Zn-Fe-Mn-Cu-B chelate blend',
    localName: 'ಸೂಕ್ಷ್ಮ ಪೋಷಕಾಂಶ / நுண்ணூட்டச்சத்து',
    category: 'micronutrients',
    categoryName: 'Micronutrients',
    image: '/images/cat-micronutrients.png',
    gallery: ['/images/cat-micronutrients.png'],
    shortDescription: 'Balanced chelated trace elements for foliar and soil use.',
    description:
      'A precisely balanced blend of chelated zinc, iron, manganese, copper and boron that corrects hidden deficiencies, improving flowering, fruit set and overall crop quality.',
    benefits: [
      'Corrects multiple micronutrient deficiencies',
      'Highly absorbable chelated form',
      'Improves flowering and fruit set',
      'Suitable for foliar spray and drip',
    ],
    rating: 4.7,
    reviewCount: 167,
    badge: 'Chelated',
    sizes: [
      { label: '500 g', price: 320, mrp: 400 },
      { label: '1 kg', price: 590, mrp: 720 },
    ],
    specs: {
      climate: 'All crops',
      states: 'Pan South India',
      season: 'Vegetative & flowering stage',
      spacing: 'Foliar or fertigation',
      yield: 'Improves quality & yield',
      water: 'Dissolve fully before spraying',
      fertilizer: 'Complements NPK program',
      harvest: 'N/A',
      height: 'N/A',
      lifespan: 'Use within 24 months',
    },
    growingGuide: [
      'Dissolve 2–3 g per litre for foliar application.',
      'Spray during cooler hours of the day.',
      'Repeat at 15-day intervals during active growth.',
      'Can be applied through drip at recommended dose.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'hybrid-tomato-seedlings',
    name: 'Hybrid Tomato Seedlings',
    scientificName: 'Solanum lycopersicum (F1 hybrid)',
    localName: 'ಟೊಮ್ಯಾಟೊ ಸಸಿ / தக்காளி நாற்று',
    category: 'vegetable-seedlings',
    categoryName: 'Vegetable Seedlings',
    image: '/images/cat-seedlings.png',
    gallery: ['/images/cat-seedlings.png'],
    shortDescription: 'Sturdy, pre-hardened F1 hybrid tomato seedlings ready to transplant.',
    description:
      'Grown in pro-trays with quality cocopeat, our F1 hybrid tomato seedlings are uniform, vigorous and pre-hardened for high field establishment and early, heavy fruiting.',
    benefits: [
      'Uniform, vigorous transplants',
      'Pre-hardened for high survival',
      'Disease-screened mother seed',
      'Early and heavy fruit set',
    ],
    rating: 4.6,
    reviewCount: 209,
    bestSeller: true,
    sizes: [
      { label: 'Tray of 98', price: 280, mrp: 350 },
      { label: '5 Trays', price: 1300, mrp: 1650 },
    ],
    specs: {
      climate: 'Warm, 18–30°C',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh',
      season: 'June–July / October–November',
      spacing: '60 cm × 45 cm',
      yield: '25–35 tonnes per acre',
      water: 'Drip irrigation recommended',
      fertilizer: 'Weekly fertigation schedule',
      harvest: '70–80 days after transplant',
      height: '1–1.5 m (staked)',
      lifespan: 'Single season',
    },
    growingGuide: [
      'Transplant 25–30 day seedlings in the evening.',
      'Provide staking and timely pruning.',
      'Follow a weekly fertigation schedule.',
      'Scout regularly for early blight and whitefly.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug)
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 4)
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}
