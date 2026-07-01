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
    tagline: 'Lab-certified, disease-free, uniform planting material',
    image: '/images/cat-tissue-culture.png',
  },
  {
    slug: 'fruit-plants',
    name: 'Fruit Plants',
    tagline: 'High-yield grafted & certified fruit saplings',
    image: '/images/cat-fruit-plants.png',
  },
  {
    slug: 'plantation-crops',
    name: 'Plantation Crops',
    tagline: 'Areca palm, coffee, cashew and more',
    image: '/images/cat-plantation.png',
  },
  {
    slug: 'forestry-timber',
    name: 'Forestry & Timber',
    tagline: 'Native trees for agroforestry and timber farming',
    image: '/images/cat-forestry.png',
  },
  {
    slug: 'seeds-inputs',
    name: 'Seeds & Inputs',
    tagline: 'Quality vegetable seeds and agricultural inputs',
    image: '/images/cat-seeds.png',
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
  // ── TISSUE CULTURE PLANTS ────────────────────────────────────────────
  {
    slug: 'tc-banana-g9',
    name: 'Tissue Culture Banana (G9 / Grand Naine)',
    scientificName: 'Musa acuminata (Grand Naine)',
    localName: 'ಬಾಳೆ ಗಿಡ / வாழை / అరటి',
    category: 'tissue-culture-plants',
    categoryName: 'Tissue Culture Plants',
    image: '/images/product-banana.png',
    gallery: ['/images/product-banana.png', '/images/cat-tissue-culture.png', '/images/hero-plantation.png'],
    shortDescription: 'Virus-indexed, genetically uniform G9 banana plantlets for high bunch yields.',
    description:
      'Our G9 (Grand Naine) tissue culture banana plants are produced in certified labs, fully virus-indexed and hardened in our nurseries before dispatch. Each plant guarantees genetic uniformity, synchronized harvesting and superior bunch weight compared to sucker-propagated material.',
    benefits: [
      'Genetically uniform — true-to-type plants across the field',
      'Virus-free and disease-indexed at source',
      'Synchronized flowering enables single-pass mechanized harvest',
      'Bunch weight of 25–35 kg; superior to sucker-grown crops',
    ],
    rating: 4.8,
    reviewCount: 412,
    badge: 'Certified',
    bestSeller: true,
    sizes: [
      { label: 'Pack of 10', price: 500, mrp: 600 },
      { label: 'Pack of 50', price: 2300, mrp: 2800 },
      { label: 'Pack of 100', price: 4500, mrp: 5500 },
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
      lifespan: 'Perennial — ratoon up to 3 cycles',
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
    slug: 'tc-teak',
    name: 'Tissue Culture Teak Plant',
    scientificName: 'Tectona grandis',
    localName: 'ಸಾಗವಾನಿ / தேக்கு / టేకు',
    category: 'tissue-culture-plants',
    categoryName: 'Tissue Culture Plants',
    image: '/images/product-teak.png',
    gallery: ['/images/product-teak.png', '/images/cat-tissue-culture.png'],
    shortDescription: 'Clonally propagated teak with straight bole and superior timber quality.',
    description:
      'Tissue culture teak plants are clonally produced from elite mother trees selected for fast growth, straight trunk and superior timber quality. Unlike seed-grown teak, each plant is genetically identical, ensuring uniform plantation yield and predictable returns over the commercial cycle.',
    benefits: [
      'Clonal propagation from elite, high-yielding mother trees',
      'Straight bole development — maximises timber grade',
      'Faster growth than seed-propagated material',
      'Disease-free, uniform establishment across the plantation',
    ],
    rating: 4.7,
    reviewCount: 318,
    badge: 'Clonal',
    bestSeller: true,
    sizes: [
      { label: 'Pack of 10', price: 1300, mrp: 1550 },
      { label: 'Pack of 50', price: 6000, mrp: 7200 },
      { label: 'Pack of 100', price: 11500, mrp: 13800 },
    ],
    specs: {
      climate: 'Tropical, 13–42°C; well-drained soil',
      states: 'Karnataka, Kerala, Tamil Nadu, Andhra Pradesh',
      season: 'June–September (onset of monsoon)',
      spacing: '3 m × 3 m to 4 m × 4 m',
      yield: '8–12 m³ of timber per acre at 12 years',
      water: 'Moderate; drought-tolerant once established',
      fertilizer: 'NPK + organic manure in first 3 years',
      harvest: '12–15 years for commercial timber',
      height: '20–30 m at maturity',
      lifespan: 'Long-lived perennial timber tree',
    },
    growingGuide: [
      'Dig pits of 45×45×45 cm at 3 m spacing; fill with topsoil and FYM.',
      'Plant during early monsoon when soil moisture is adequate.',
      'Apply NPK and organic manure in the first 3 years for rapid trunk development.',
      'Clear competing weeds in the first two seasons; teak is self-thinning thereafter.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'tc-black-pepper',
    name: 'Tissue Culture Black Pepper',
    scientificName: 'Piper nigrum',
    localName: 'ಕರಿಮೆಣಸು / கருமிளகு / నల్ల మిరియాలు',
    category: 'tissue-culture-plants',
    categoryName: 'Tissue Culture Plants',
    image: '/images/product-pepper.png',
    gallery: ['/images/product-pepper.png', '/images/cat-tissue-culture.png'],
    shortDescription: 'High-yielding tissue culture black pepper — virus-free vines for commercial spice farming.',
    description:
      'Tissue culture black pepper vines are produced from Panniyur-1 and Karimunda selections — proven high-yielding, disease-tolerant varieties. Each vine is virus-indexed to be free from Phytophthora and mosaic virus, ensuring a clean start and consistent productivity over its long commercial life.',
    benefits: [
      'Virus-free — protects against Phytophthora and mosaic',
      'Selected from proven high-yield, disease-tolerant varieties',
      'Uniform establishment and early first harvest',
      'Superior berry fill and spice oil content',
    ],
    rating: 4.6,
    reviewCount: 224,
    badge: 'Virus-Free',
    sizes: [
      { label: 'Pack of 10', price: 800, mrp: 960 },
      { label: 'Pack of 25', price: 1800, mrp: 2200 },
      { label: 'Pack of 50', price: 3400, mrp: 4100 },
    ],
    specs: {
      climate: 'Humid tropical, 20–33°C; 1500–3000 mm rainfall',
      states: 'Kerala, Karnataka (Coorg), Tamil Nadu (Nilgiris)',
      season: 'June–July with onset of southwest monsoon',
      spacing: '3 m × 3 m with living or dead standards',
      yield: '2–4 kg dry pepper per vine at maturity',
      water: 'Regular irrigation in dry months',
      fertilizer: 'NPK + organic manure biannually',
      harvest: '3–4 years for first commercial harvest',
      height: 'Vine — trained to 6–10 m standards',
      lifespan: '15–20 years of commercial production',
    },
    growingGuide: [
      'Plant against Erythrina or silver oak standards at 3 m spacing.',
      'Dig 50×50×50 cm pits; enrich with compost and neem cake.',
      'Trail vines up the standard and tie gently every 2–3 weeks.',
      'Apply Bordeaux mixture before monsoon to manage Phytophthora.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },

  // ── FRUIT PLANTS ─────────────────────────────────────────────────────
  {
    slug: 'grafted-mango',
    name: 'Grafted Mango Plant',
    scientificName: 'Mangifera indica',
    localName: 'ಮಾವಿನ ಗಿಡ / மாங்கை மரம் / మామిడి',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-mango.png',
    gallery: ['/images/product-mango.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'Grafted mango saplings — Alphonso, Banganapalli, Totapuri and Kesar varieties.',
    description:
      'Our grafted mango plants are produced by veneer-grafting onto vigorous rootstocks, ensuring early bearing and true-to-variety fruit. Choose from top commercial varieties — Alphonso, Banganapalli, Totapuri, Kesar and more — for your region.',
    benefits: [
      'Early bearing at 3–4 years vs 7+ for seedling trees',
      'True-to-variety fruit with consistent size, colour and flavour',
      'Strong, disease-resistant rootstock',
      'Compact, manageable canopy for high-density planting',
    ],
    rating: 4.8,
    reviewCount: 367,
    bestSeller: true,
    sizes: [
      { label: 'Single plant', price: 150, mrp: 185 },
      { label: 'Pack of 5', price: 700, mrp: 875 },
      { label: 'Pack of 10', price: 1350, mrp: 1700 },
    ],
    specs: {
      climate: 'Tropical & subtropical, 24–30°C; dry flowering period essential',
      states: 'Karnataka, Andhra Pradesh, Tamil Nadu, Telangana',
      season: 'Transplant June–July or Feb–March',
      spacing: '8–10 m for conventional; 5 m for high-density',
      yield: '50–100 kg per tree at full bearing (8+ years)',
      water: 'Drip or flood; stop irrigation 2 months before flowering',
      fertilizer: 'NPK + micronutrients; annual organic manure',
      harvest: '3–4 years (grafted) for first crop',
      height: '5–10 m (can be managed shorter)',
      lifespan: '40–50 years of commercial production',
    },
    growingGuide: [
      'Dig pits of 1 m × 1 m × 1 m; fill with topsoil, FYM and superphosphate.',
      'Plant grafted saplings ensuring the graft union is above soil level.',
      'Provide shade for the first two weeks; water daily until established.',
      'Apply annual fertilizer doses split across pre-flowering and post-harvest.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'grafted-guava',
    name: 'Grafted Guava Plant',
    scientificName: 'Psidium guajava',
    localName: 'ಸೀಬೆ ಗಿಡ / கொய்யா / జామ',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-guava.png',
    gallery: ['/images/product-guava.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'High-yield grafted guava — L-49, Lalit and Taiwan Pink varieties available.',
    description:
      "Grafted guava plants from certified mother blocks guarantee heavy, uniform fruit set across the tree's long commercial life. Varieties include L-49 (Lucknow 49) for fresh market, Lalit for processing and Taiwan Pink for premium retail.",
    benefits: [
      'Bearing begins within 2–3 years of planting',
      'High fruit set — 100–200 fruits per tree per year',
      'Resistant to wilt (Fusarium) when grafted on resistant rootstock',
      'Excellent shelf life for transport to distant markets',
    ],
    rating: 4.7,
    reviewCount: 289,
    sizes: [
      { label: 'Single plant', price: 110, mrp: 140 },
      { label: 'Pack of 5', price: 520, mrp: 660 },
      { label: 'Pack of 10', price: 990, mrp: 1250 },
    ],
    specs: {
      climate: 'Tropical & subtropical, tolerates 10–42°C',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh, Telangana',
      season: 'Plant June–July or Feb–March',
      spacing: '5–6 m (conventional); 3 m × 2 m (high density)',
      yield: '50–80 kg per tree per year at full bearing',
      water: 'Drip recommended; drought-tolerant once established',
      fertilizer: 'NPK split in 4 doses; FYM annually',
      harvest: '2–3 years for first crop',
      height: '3–5 m (manageable with pruning)',
      lifespan: '25–30 years',
    },
    growingGuide: [
      'Prepare pits 60×60×60 cm with compost and neem cake.',
      'Plant during early monsoon or cooler months.',
      'Train to an open vase shape by removing crossing branches.',
      'Apply copper-based fungicide before monsoon to manage anthracnose.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'grafted-custard-apple',
    name: 'Grafted Custard Apple (Sitaphal)',
    scientificName: 'Annona squamosa',
    localName: 'ಸೀತಾಫಲ / சீதாப்பழம் / సీతాఫలం',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-custard-apple.png',
    gallery: ['/images/product-custard-apple.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'Grafted custard apple for heavy, sweet fruit — ideal for dry and semi-arid regions.',
    description:
      'Grafted custard apple plants bear fruit 2–3 years earlier than seedling trees and produce larger, sweeter, more uniform fruits with thicker pulp. Excellent for dry Deccan agroclimatic zones with shallow, well-drained soils.',
    benefits: [
      'Early and heavy fruit set — 40–80 fruits per tree',
      'Uniform fruit size and high pulp-to-seed ratio',
      'Highly drought-tolerant once established',
      'Strong natural pest resistance in organic farms',
    ],
    rating: 4.5,
    reviewCount: 178,
    sizes: [
      { label: 'Single plant', price: 130, mrp: 165 },
      { label: 'Pack of 5', price: 620, mrp: 780 },
      { label: 'Pack of 10', price: 1200, mrp: 1500 },
    ],
    specs: {
      climate: 'Semi-arid to tropical, 15–35°C; tolerates dry spells',
      states: 'Karnataka, Andhra Pradesh, Telangana, Tamil Nadu',
      season: 'Plant June–August',
      spacing: '5 m × 5 m',
      yield: '40–80 fruits per tree at full bearing',
      water: 'Low — 8–12 litres/plant on dry days',
      fertilizer: 'Organic-based; light NPK doses',
      harvest: '3–4 years (grafted)',
      height: '3–6 m',
      lifespan: '20–25 years',
    },
    growingGuide: [
      'Plant in pits of 60×60×60 cm with mixed compost and neem cake.',
      'Provide irrigation during fruit development; reduce before ripening.',
      'Hand-pollinate in low-bee areas for better fruit set.',
      'Harvest when the skin begins to turn pale and segments crack slightly.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'seedless-lemon-lime',
    name: 'Seedless Lemon / Lime (Grafted)',
    scientificName: 'Citrus limon / Citrus aurantifolia',
    localName: 'ನಿಂಬೆ ಹಣ್ಣು / எலுமிச்சை / నిమ్మకాయ',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-lemon.png',
    gallery: ['/images/product-lemon.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'Grafted seedless lemon/lime plants for high juice yield and premium market value.',
    description:
      'Our grafted seedless citrus plants (lemon and acid lime varieties) are budded on Rangpur lime or rough lemon rootstock for robust growth and disease resistance. Seedless fruits command significantly higher market prices and are preferred by processors and modern retailers.',
    benefits: [
      'Seedless fruits — premium retail and processing price',
      'High juice percentage — ideal for beverage industry',
      'Grafted on vigorous, disease-resistant rootstock',
      'Year-round fruiting in irrigated conditions',
    ],
    rating: 4.6,
    reviewCount: 213,
    badge: 'Seedless',
    sizes: [
      { label: 'Single plant', price: 120, mrp: 150 },
      { label: 'Pack of 5', price: 570, mrp: 715 },
      { label: 'Pack of 10', price: 1100, mrp: 1380 },
    ],
    specs: {
      climate: 'Tropical to subtropical; well-drained, slightly acidic soil',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh, Kerala',
      season: 'Plant February–March or June–July',
      spacing: '4–5 m × 4–5 m',
      yield: '40–80 kg per tree per year',
      water: 'Drip; regular irrigation avoids fruit drop',
      fertilizer: 'NPK + zinc + boron; biannual FYM application',
      harvest: '2–3 years for first commercial crop',
      height: '3–5 m',
      lifespan: '20–30 years',
    },
    growingGuide: [
      'Plant in well-drained, loamy soil — citrus is sensitive to waterlogging.',
      'Maintain drip irrigation; water stress at flowering improves fruit set.',
      'Apply zinc sulphate foliar spray to prevent deficiency.',
      'Spray Bordeaux mixture before monsoon to prevent canker and gummosis.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'grafted-sapota',
    name: 'Grafted Sapota (Chikoo)',
    scientificName: 'Manilkara zapota',
    localName: 'ಸಪೋಟ / சப்போட்டா / సపోటా',
    category: 'fruit-plants',
    categoryName: 'Fruit Plants',
    image: '/images/product-sapota.png',
    gallery: ['/images/product-sapota.png', '/images/cat-fruit-plants.png'],
    shortDescription: 'Long-bearing grafted sapota with sweet, malty flavour — low maintenance crop.',
    description:
      'Grafted sapota begins fruiting in 3–4 years and continues to produce for over 50 years with minimal care. Once established, it tolerates dry spells, coastal salinity and a range of soils, making it one of the lowest-maintenance perennial fruit crops in South India.',
    benefits: [
      'Long commercial life — over 50 years of production',
      'Low input requirement once established',
      'Two bearing seasons per year in irrigated farms',
      'Excellent shelf life and retail demand',
    ],
    rating: 4.7,
    reviewCount: 195,
    sizes: [
      { label: 'Single plant', price: 115, mrp: 145 },
      { label: 'Pack of 5', price: 545, mrp: 690 },
      { label: 'Pack of 10', price: 1050, mrp: 1320 },
    ],
    specs: {
      climate: 'Warm tropical; tolerates salinity and drought',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh, Kerala',
      season: 'Plant June–July or February–March',
      spacing: '8 m × 8 m',
      yield: '100–150 kg per tree per year at full bearing',
      water: 'Low to moderate; drip or flood',
      fertilizer: 'Light NPK + FYM; minimal compared to other fruits',
      harvest: '3–4 years for first crop',
      height: '10–15 m (can be managed at 5–6 m)',
      lifespan: '50+ years',
    },
    growingGuide: [
      'Dig pits of 75×75×75 cm and fill with topsoil and FYM.',
      'Provide support staking in the first year to prevent wind damage.',
      'Minimal pruning required — remove dead and crossing branches only.',
      'Irrigate regularly in first 2 years; sapota is self-sufficient after establishment.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },

  // ── PLANTATION CROPS ─────────────────────────────────────────────────
  {
    slug: 'areca-palm',
    name: 'Areca Palm Seedling',
    scientificName: 'Areca catechu',
    localName: 'ಅಡಿಕೆ ಮರ / பாக்கு மரம் / అడిక్కాయ',
    category: 'plantation-crops',
    categoryName: 'Plantation Crops',
    image: '/images/product-areca.png',
    gallery: ['/images/product-areca.png', '/images/cat-plantation.png'],
    shortDescription: 'Certified areca palm (betel nut) seedlings for commercial plantation — top South Canara varieties.',
    description:
      'Our areca palm seedlings are raised from disease-free selected mother palms with high nut yield and good nut weight. Mangala, Sumangala and Shreemangala varieties are available. Areca cultivation is the backbone of coastal Karnataka and Kerala farming, offering steady annual income.',
    benefits: [
      'Selected from high-yielding, disease-free mother palms',
      'Uniform seedling quality — all from certified nursery blocks',
      'Drought-tolerant and flood-resistant once established',
      'High and consistent annual returns for 30–40 years',
    ],
    rating: 4.7,
    reviewCount: 341,
    bestSeller: true,
    sizes: [
      { label: 'Single plant', price: 90, mrp: 115 },
      { label: 'Pack of 10', price: 850, mrp: 1050 },
      { label: 'Pack of 25', price: 2000, mrp: 2500 },
    ],
    specs: {
      climate: 'Humid tropical, 14–35°C; 1500 mm+ rainfall or irrigated',
      states: 'Karnataka (Dakshina Kannada, Shivamogga), Kerala',
      season: 'June–July with monsoon onset',
      spacing: '2.7 m × 2.7 m',
      yield: '0.5–1 kg dry nuts per palm per month at maturity',
      water: 'Drip or sprinkler; critical during dry months',
      fertilizer: 'NPK + FYM; biannual application recommended',
      harvest: '6–7 years for first fruiting',
      height: '15–20 m at full maturity',
      lifespan: '40–50 years of commercial production',
    },
    growingGuide: [
      'Transplant 12–18 month old seedlings into 90×90×90 cm pits enriched with compost.',
      'Provide shade cloth for the first 3 months post-planting.',
      'Maintain adequate soil moisture through drip irrigation in dry months.',
      'Apply recommended doses of fertilizer in split applications during growing season.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'coffee-seedling',
    name: 'Coffee Seedling (Arabica / Robusta)',
    scientificName: 'Coffea arabica / Coffea canephora',
    localName: 'ಕಾಫಿ ಗಿಡ / காபி செடி / కాఫీ మొక్క',
    category: 'plantation-crops',
    categoryName: 'Plantation Crops',
    image: '/images/product-coffee.png',
    gallery: ['/images/product-coffee.png', '/images/cat-plantation.png'],
    shortDescription: 'Shade-grown Arabica and Robusta coffee seedlings for the Western Ghats.',
    description:
      'Our coffee seedlings are raised from disease-resistant, high-cup-quality selections — S.795 and Cauvery (Arabica), and CxR selections (Robusta). Suited to the Western Ghats elevation belt of Karnataka and Kerala, these seedlings establish quickly under shade and produce consistently over their long life.',
    benefits: [
      'Disease-tolerant selections — reduced fungicide input',
      'Excellent cup quality — preferred by specialty roasters',
      'Adapts well to shade-grown agroforestry systems',
      'Consistent annual yield for 20–30 years',
    ],
    rating: 4.6,
    reviewCount: 258,
    sizes: [
      { label: 'Pack of 10', price: 900, mrp: 1100 },
      { label: 'Pack of 50', price: 3999, mrp: 4900 },
      { label: 'Pack of 100', price: 7500, mrp: 9200 },
    ],
    specs: {
      climate: 'Cool humid tropical, 15–25°C; 1500–2500 mm rainfall',
      states: 'Karnataka (Coorg, Chikmagalur), Kerala (Wayanad)',
      season: 'June–July after pre-monsoon showers',
      spacing: '2.5 m × 2.5 m (Arabica); 3 m × 3 m (Robusta)',
      yield: '500–800 g clean beans per plant per year',
      water: 'Rain-fed; supplemental irrigation in blossom period',
      fertilizer: 'NPK + micronutrients — biannual schedule',
      harvest: '3–4 years for first commercial crop',
      height: '2–3 m (managed with pruning)',
      lifespan: '25–30 years',
    },
    growingGuide: [
      'Plant under Silver Oak or Erythrina shade at 2.5 m spacing.',
      'Dig 45×45×45 cm pits; fill with topsoil and compost.',
      'Train to a single stem in the first year; allow branching thereafter.',
      'Apply pre-blossom irrigation in February to trigger uniform flowering.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'cashew-nut-seedling',
    name: 'Cashew Nut Seedling',
    scientificName: 'Anacardium occidentale',
    localName: 'ಗೇರು ಗಿಡ / முந்திரி / జీడిపప்பு',
    category: 'plantation-crops',
    categoryName: 'Plantation Crops',
    image: '/images/product-cashew.png',
    gallery: ['/images/product-cashew.png', '/images/cat-plantation.png'],
    shortDescription: 'Grafted cashew nut plants from dwarf, high-yielding selections for coastal farms.',
    description:
      'Our cashew plants are air-layered or grafted from dwarf, early-bearing selections — Ullal-4, BPP-8 and Vengurla-4. These varieties produce larger nuts with better shelling percentage and are preferred by the processing industry across coastal Karnataka, Goa and Kerala.',
    benefits: [
      'Dwarf stature — easier harvest and pest management',
      'High NNE (nut-to-kernel ratio) for better processor returns',
      'Early bearing — first nuts at 3–4 years',
      'Salt-tolerant for coastal farm conditions',
    ],
    rating: 4.5,
    reviewCount: 192,
    sizes: [
      { label: 'Pack of 10', price: 750, mrp: 930 },
      { label: 'Pack of 25', price: 1750, mrp: 2200 },
      { label: 'Pack of 50', price: 3300, mrp: 4100 },
    ],
    specs: {
      climate: 'Coastal tropical; tolerates laterite and sandy soils',
      states: 'Karnataka (Coastal), Goa, Kerala, Tamil Nadu',
      season: 'May–June pre-monsoon',
      spacing: '7 m × 7 m',
      yield: '8–12 kg raw nuts per tree per year',
      water: 'Low — rain-fed; drought-tolerant after establishment',
      fertilizer: 'NPK + micronutrients annually',
      harvest: '3–4 years first crop; full yield at 8–10 years',
      height: '5–8 m (dwarf varieties shorter)',
      lifespan: '30–40 years',
    },
    growingGuide: [
      'Plant on well-drained laterite or sandy loam; avoid waterlogged sites.',
      'Dig 60×60×60 cm pits; add compost and rock phosphate.',
      'Provide wind protection in the first year if in exposed coastal sites.',
      'Spray copper oxychloride before and after monsoon to manage powdery mildew.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },

  // ── FORESTRY & TIMBER ─────────────────────────────────────────────────
  {
    slug: 'silver-oak',
    name: 'Silver Oak Seedling',
    scientificName: 'Grevillea robusta',
    localName: 'ಬೆಳ್ಳಿ ಓಕ್ / வெள்ளி ஓக் / సిల్వర్ ఓక్',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-silver-oak.png',
    gallery: ['/images/product-silver-oak.png', '/images/cat-forestry.png'],
    shortDescription: 'Fast-growing shade and timber tree widely used as a standard for pepper and coffee.',
    description:
      'Silver Oak (Grevillea robusta) is the most commonly used shade tree in coffee and pepper plantations across South India. Its fast growth, non-invasive root system and light filtered shade make it the preferred living standard for black pepper vines and coffee bushes.',
    benefits: [
      'Fast-growing — provides shade within 18–24 months',
      'Non-invasive roots; compatible with intercropping',
      'Timber suitable for furniture, plywood and fuel',
      'Supports pepper and coffee as a living standard',
    ],
    rating: 4.6,
    reviewCount: 287,
    bestSeller: true,
    sizes: [
      { label: 'Pack of 10', price: 380, mrp: 480 },
      { label: 'Pack of 50', price: 1800, mrp: 2250 },
      { label: 'Pack of 100', price: 3400, mrp: 4250 },
    ],
    specs: {
      climate: 'Adaptable; thrives in tropical and subtropical zones',
      states: 'Karnataka, Kerala, Tamil Nadu, Andhra Pradesh',
      season: 'June–July monsoon onset',
      spacing: '3 m as pepper standard; 6 m standalone',
      yield: 'Timber at 8–10 years; continuous shade benefit',
      water: 'Moderate; drought-tolerant once established',
      fertilizer: 'Minimal; benefits from plantation base dose',
      harvest: '8–10 years for timber; trimmings as green manure',
      height: '20–35 m at maturity',
      lifespan: '30–40 years',
    },
    growingGuide: [
      'Plant 12–18 months before establishing pepper or coffee.',
      'Dig pits of 45×45×45 cm; mix with compost and topsoil.',
      'Prune side branches in the first year to develop a clean trunk.',
      'Use pruned material as green manure to enrich the soil.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'neem-seedling',
    name: 'Neem Seedling',
    scientificName: 'Azadirachta indica',
    localName: 'ಬೇವಿನ ಮರ / வேப்ப மரம் / వేప మొక్క',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-neem.png',
    gallery: ['/images/product-neem.png', '/images/cat-forestry.png'],
    shortDescription: 'Multipurpose neem tree for farm boundary planting, timber and biopesticide production.',
    description:
      'Neem is one of India\'s most versatile farm trees — providing shade, natural pest deterrence, organic manure (neem cake), timber and traditional medicinal value. An excellent choice for boundary planting, agroforestry rows and wasteland reclamation.',
    benefits: [
      'Natural biopesticide — neem leaves deter pests organically',
      'Neem seed yield used for neem oil and neem cake production',
      'Fast-growing shade tree for boundary and intercrop rows',
      'Extremely drought-tolerant; thrives in poor soils',
    ],
    rating: 4.7,
    reviewCount: 354,
    sizes: [
      { label: 'Pack of 10', price: 330, mrp: 420 },
      { label: 'Pack of 50', price: 1500, mrp: 1900 },
      { label: 'Pack of 100', price: 2800, mrp: 3500 },
    ],
    specs: {
      climate: 'Tropical and semi-arid; tolerates poor, degraded soils',
      states: 'All South Indian states',
      season: 'June–August monsoon',
      spacing: '5–6 m for boundary; 8 m standalone',
      yield: '30–50 kg seeds per tree per year at full bearing',
      water: 'Very low — once established, rain-fed only',
      fertilizer: 'Minimal — no regular fertilization needed',
      harvest: 'Seeds at 3–5 years; timber at 10–15 years',
      height: '15–20 m at maturity',
      lifespan: '100–200 years',
    },
    growingGuide: [
      'Plant seedlings in pits of 30×30×30 cm with topsoil and compost.',
      'Water for the first two weeks; neem is self-sufficient once established.',
      'Use fallen leaves as mulch and green manure around crops.',
      'Harvest seeds during summer and press for neem oil.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'mahogany-seedling',
    name: 'Mahogany Seedling',
    scientificName: 'Swietenia mahagoni',
    localName: 'ಮಹೋಗನಿ / மஹோகனி / మహోగని',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-mahogany.png',
    gallery: ['/images/product-mahogany.png', '/images/cat-forestry.png'],
    shortDescription: 'Premium hardwood mahogany seedlings for commercial timber farming and agroforestry.',
    description:
      'Mahogany is among the world\'s most valuable hardwoods. Grown commercially across South India for timber and veneer, it commands excellent market prices at harvest. The straight-grained, durable wood is sought after by furniture makers, shipbuilders and decorative wood industries.',
    benefits: [
      'High-value hardwood — premium furniture and veneer timber',
      'Straight-grained, durable wood with attractive appearance',
      'Good growth rate for a premium hardwood',
      'Can be intercropped for income during early plantation years',
    ],
    rating: 4.5,
    reviewCount: 163,
    sizes: [
      { label: 'Pack of 10', price: 650, mrp: 800 },
      { label: 'Pack of 50', price: 2900, mrp: 3600 },
      { label: 'Pack of 100', price: 5500, mrp: 6800 },
    ],
    specs: {
      climate: 'Tropical; well-drained loamy soil preferred',
      states: 'Karnataka, Kerala, Tamil Nadu, Andhra Pradesh',
      season: 'June–July with monsoon onset',
      spacing: '4 m × 4 m',
      yield: 'Premium hardwood timber at 10–15 years',
      water: 'Moderate; drought-tolerant once mature',
      fertilizer: 'Organic manure in first 2 years',
      harvest: '10–15 years for commercial timber',
      height: '15–25 m at maturity',
      lifespan: '50+ years',
    },
    growingGuide: [
      'Plant in deep, well-drained soil; mahogany does not tolerate waterlogging.',
      'Dig 60×60×60 cm pits; enrich with compost and rock phosphate.',
      'Clear grass competition in the first 2 years for rapid early growth.',
      'Prune lower branches in years 3–5 to develop a clean, valuable bole.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'raktachandan',
    name: 'Raktachandan (Red Sandalwood)',
    scientificName: 'Pterocarpus santalinus',
    localName: 'ರಕ್ತಚಂದನ / செம்மரம் / రక్తచందనం',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-raktachandan.png',
    gallery: ['/images/product-raktachandan.png', '/images/cat-forestry.png'],
    shortDescription: 'Rare, high-value red sandalwood seedlings — endemic to South India and in heavy demand.',
    description:
      'Red Sandalwood (Pterocarpus santalinus), endemic to the Eastern Ghats of Andhra Pradesh and Telangana, is one of India\'s most commercially valuable timbers. The dense, blood-red heartwood is highly prized for traditional medicines, musical instruments, handicrafts and dyes. Private cultivation is legally permitted and increasingly popular as a long-term investment crop.',
    benefits: [
      'One of the highest-value timbers in South India',
      'Legal private cultivation permitted under Forest Act guidelines',
      'Strong demand from Ayurveda, handicraft and export industries',
      'Low maintenance after establishment; drought-tolerant',
    ],
    rating: 4.8,
    reviewCount: 147,
    badge: 'High Value',
    sizes: [
      { label: 'Pack of 5', price: 700, mrp: 875 },
      { label: 'Pack of 10', price: 1350, mrp: 1700 },
      { label: 'Pack of 25', price: 3200, mrp: 4000 },
    ],
    specs: {
      climate: 'Dry tropical; tolerates rocky, degraded soils',
      states: 'Andhra Pradesh, Telangana, Tamil Nadu, Karnataka',
      season: 'June–August with monsoon',
      spacing: '4 m × 4 m',
      yield: 'Premium heartwood timber at 15–20 years',
      water: 'Very low — drought-tolerant; no irrigation needed post-establishment',
      fertilizer: 'Minimal; organic manure in first 2 years',
      harvest: '15–20 years for commercially harvestable heartwood',
      height: '8–12 m at maturity',
      lifespan: 'Long-lived; heartwood increases with age',
    },
    growingGuide: [
      'Plant in rocky, shallow, well-drained soils — performs poorly in fertile clay.',
      'Dig pits of 30×30×30 cm; avoid excessive fertilization.',
      'Very little irrigation required after establishment.',
      'Consult local forest department guidelines for private plantation documentation.',
    ],
    faqs: [
      ...commonFaqs,
      {
        q: 'Is it legal to grow Raktachandan privately?',
        a: 'Yes. Private cultivation of Pterocarpus santalinus is legally permitted in India. You should register your plantation with the state forest department; we can assist with the documentation process.',
      },
    ],
    reviews: baseReviews,
  },
  {
    slug: 'doopa-tree',
    name: 'Doopa (Black Dammar Tree)',
    scientificName: 'Canarium strictum',
    localName: 'ಧೂಪ ಮರ / தூப மரம் / ధూప చెట్టు',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-doopa.png',
    gallery: ['/images/product-doopa.png', '/images/cat-forestry.png'],
    shortDescription: 'Sacred South Indian resin tree — doopa/dhoop — with medicinal and timber value.',
    description:
      'Doopa (Canarium strictum), the Black Dammar tree, is a sacred resin-yielding species native to the Western Ghats. Its resin is widely used in traditional South Indian rituals (dhoop incense), Ayurvedic medicine and as a wood varnish. The timber is medium-weight and used in construction. A meaningful addition to any agroforestry or sacred grove planting.',
    benefits: [
      'Resin yield used for traditional incense and Ayurvedic preparations',
      'Medium-density timber useful for construction and boats',
      'Sacred species — suitable for farm temple groves',
      'Supports Western Ghats biodiversity and bird habitat',
    ],
    rating: 4.4,
    reviewCount: 98,
    sizes: [
      { label: 'Pack of 10', price: 750, mrp: 950 },
      { label: 'Pack of 25', price: 1700, mrp: 2200 },
      { label: 'Pack of 50', price: 3200, mrp: 4100 },
    ],
    specs: {
      climate: 'Humid tropical; Western Ghats and coastal zones',
      states: 'Kerala, Karnataka (Western Ghats), Tamil Nadu',
      season: 'June–July with monsoon',
      spacing: '5–6 m',
      yield: 'Resin tapping from year 6–8',
      water: 'Moderate; humidity-loving species',
      fertilizer: 'Minimal; organic compost in first 2 years',
      harvest: 'Resin from year 6; timber at 20+ years',
      height: '15–25 m at maturity',
      lifespan: 'Long-lived forest tree',
    },
    growingGuide: [
      'Plant in humid, shaded conditions — ideal for agroforestry understorey.',
      'Provide partial shade in the first 2 years for optimal establishment.',
      'Water regularly through the first dry season.',
      'Tapping of resin begins once the trunk reaches 20 cm girth.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },
  {
    slug: 'paiyani-tree',
    name: 'Paiyani (South Indian Hardwood)',
    scientificName: 'Careya arborea',
    localName: 'ಪೈಯಾನಿ / பையனி / పైయని',
    category: 'forestry-timber',
    categoryName: 'Forestry & Timber',
    image: '/images/product-paiyani.png',
    gallery: ['/images/product-paiyani.png', '/images/cat-forestry.png'],
    shortDescription: 'Native South Indian hardwood tree for agroforestry, boundary planting and farm use.',
    description:
      'Paiyani (Careya arborea, also known as Kumbhi or Patana Oak) is a medium-to-large native hardwood tree widespread across South India\'s deciduous forests and farmlands. Its bark has traditional medicinal uses, the timber is used in rural construction and agricultural tools, and the flowers are an important honey source.',
    benefits: [
      'Hardy native species adapted to South Indian farmlands',
      'Bark and flowers used in traditional medicine',
      'Durable timber for rural construction and tool handles',
      'Excellent honey source — flowers attract pollinators',
    ],
    rating: 4.3,
    reviewCount: 86,
    sizes: [
      { label: 'Pack of 10', price: 650, mrp: 820 },
      { label: 'Pack of 25', price: 1500, mrp: 1900 },
      { label: 'Pack of 50', price: 2800, mrp: 3500 },
    ],
    specs: {
      climate: 'Tropical deciduous; tolerates a range of soils',
      states: 'Karnataka, Kerala, Tamil Nadu, Andhra Pradesh',
      season: 'June–August with monsoon',
      spacing: '5 m × 5 m for agroforestry',
      yield: 'Timber at 12–15 years',
      water: 'Low to moderate; drought-tolerant once established',
      fertilizer: 'Minimal; organic mulch in first 2 years',
      harvest: 'Bark (medicinal) ongoing; timber at 12–15 years',
      height: '12–20 m at maturity',
      lifespan: '50–100 years',
    },
    growingGuide: [
      'Plant in any well-drained soil — adaptable to red laterite and black cotton soils.',
      'Dig pits of 45×45×45 cm and fill with topsoil and compost.',
      'Water through the first two dry seasons; self-sufficient thereafter.',
      'Ideal as boundary tree, providing shade to adjacent crops.',
    ],
    faqs: commonFaqs,
    reviews: baseReviews,
  },

  // ── SEEDS & INPUTS ───────────────────────────────────────────────────
  {
    slug: 'vegetable-seeds-pack',
    name: 'Hybrid Vegetable Seeds (Assorted Pack)',
    scientificName: 'Various F1 hybrid varieties',
    localName: 'ತರಕಾರಿ ಬೀಜಗಳು / காய்கறி விதைகள் / కూరగాయ విత్తనాలు',
    category: 'seeds-inputs',
    categoryName: 'Seeds & Inputs',
    image: '/images/product-seeds.png',
    gallery: ['/images/product-seeds.png', '/images/cat-seeds.png'],
    shortDescription: 'Certified F1 hybrid vegetable seeds — tomato, chilli, brinjal, capsicum, okra and more.',
    description:
      'Our curated seed packs contain certified F1 hybrid varieties from reputed seed companies, packaged for South Indian growing conditions. Each pack is tested for germination rate (minimum 85%) and variety trueness. Choose individual crop packs or our seasonal assortments.',
    benefits: [
      'Minimum 85% germination guarantee',
      'F1 hybrid varieties — uniform, high-yielding',
      'Varieties selected for South Indian climate and pest tolerance',
      'Sealed, moisture-proof packaging for extended shelf life',
    ],
    rating: 4.5,
    reviewCount: 312,
    sizes: [
      { label: 'Single crop pack (10 g)', price: 45, mrp: 60 },
      { label: '5 crop packs', price: 200, mrp: 275 },
      { label: '10 crop packs', price: 380, mrp: 520 },
    ],
    specs: {
      climate: 'Variety-dependent; suitable for all South Indian zones',
      states: 'Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Kerala',
      season: 'Kharif (June–July) and Rabi (Oct–Nov)',
      spacing: 'Crop-specific; sowing guide included',
      yield: 'Crop-specific; see individual variety guide',
      water: 'Drip or flood depending on crop',
      fertilizer: 'NPK + organic as per crop requirement',
      harvest: 'Crop-specific — tomato 70 days, chilli 90 days',
      height: 'Crop-specific',
      lifespan: 'Single season; seeds viable for 12–18 months',
    },
    growingGuide: [
      'Sow in well-prepared nursery beds or pro-trays with cocopeat media.',
      'Maintain consistent moisture for uniform germination.',
      'Transplant at the 2–4 true leaf stage to the main field.',
      'Follow the enclosed crop-specific fertilizer and spray schedule.',
    ],
    faqs: [
      ...commonFaqs,
      {
        q: 'Which crops are available as individual packs?',
        a: 'Tomato, chilli, brinjal, capsicum, okra, cucumber, bitter gourd, ash gourd, beans, and cabbage. Seasonal availability varies — contact us for the current list.',
      },
    ],
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
