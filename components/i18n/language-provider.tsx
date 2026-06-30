'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type LocaleCode = 'en' | 'kn' | 'ta' | 'te' | 'ml'

export type Locale = {
  code: LocaleCode
  label: string
  english: string
}

export const locales: Locale[] = [
  { code: 'en', label: 'English', english: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'ta', label: 'தமிழ்', english: 'Tamil' },
  { code: 'te', label: 'తెలుగు', english: 'Telugu' },
  { code: 'ml', label: 'മലയാളം', english: 'Malayalam' },
]

const en = {
  // Navigation
  'nav.shop': 'Shop',
  'nav.categories': 'Categories',
  'nav.knowledge': 'Knowledge',
  'nav.about': 'About',
  'nav.why': 'Why Us',
  'nav.contact': 'Contact',
  'nav.account': 'Account',
  'nav.expert': 'Talk to an Expert',
  'header.shopAll': 'Shop All',

  // Common
  'common.addToCart': 'Add to Cart',
  'common.buyNow': 'Buy Now',
  'common.shopPlants': 'Shop Plants',

  // CTA banner
  'cta.title': 'Grow with confidence this season',
  'cta.subtitle':
    'Certified planting material, doorstep farm delivery and expert support in your language. Start your next crop with us today.',
  'cta.shop': 'Shop Plants',
  'cta.expert': 'Talk to an Expert',

  // Hero
  'hero.badge': 'Certified planting material since 2016',
  'hero.title1': 'Growing Prosperity,',
  'hero.title2': 'One Plant at a Time.',
  'hero.subtitle':
    'Premium Tissue Culture Plants, Certified Nursery Seedlings and Sustainable Agricultural Inputs delivered directly to your farm.',
  'hero.survivalWarranty': 'Survival Warranty',
  'hero.farmDelivery': 'Farm Delivery',
  'hero.expertSupport': 'Expert Support',
  'hero.statsFarmers': 'Farmers served',
  'hero.statsPlants': 'Plants delivered',
  'hero.statsSurvival': 'Survival rate',
  'hero.statsStates': 'Across South India',

  // Footer
  'footer.tagline':
    'Premium tissue culture plants, certified seedlings and sustainable farm inputs delivered directly to your farm across South India.',
  'footer.shop': 'Shop',
  'footer.company': 'Company',
  'footer.support': 'Support',
  'footer.aboutUs': 'About Us',
  'footer.whyChooseUs': 'Why Choose Us',
  'footer.warranty': 'Plant Warranty',
  'footer.knowledgeCenter': 'Knowledge Center',
  'footer.becomeDealer': 'Become a Dealer',
  'footer.trackOrder': 'Track Order',
  'footer.contact': 'Contact',
  'footer.myAccount': 'My Account',
  'footer.calculators': 'Calculators',
  'footer.whatsappSupport': 'WhatsApp Support',
  'footer.rights': 'All rights reserved.',
}

const kn: Record<string, string> = {
  'nav.shop': 'ಶಾಪ್',
  'nav.categories': 'ವರ್ಗಗಳು',
  'nav.knowledge': 'ಜ್ಞಾನ ಕೇಂದ್ರ',
  'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'nav.why': 'ನಮ್ಮನ್ನೇ ಏಕೆ',
  'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',
  'nav.account': 'ಖಾತೆ',
  'nav.expert': 'ತಜ್ಞರೊಂದಿಗೆ ಮಾತನಾಡಿ',
  'header.shopAll': 'ಎಲ್ಲಾ ಶಾಪ್ ಮಾಡಿ',

  'common.addToCart': 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
  'common.buyNow': 'ಈಗ ಖರೀದಿಸಿ',
  'common.shopPlants': 'ಸಸಿಗಳನ್ನು ಖರೀದಿಸಿ',

  'cta.title': 'ಈ ಋತುವಿನಲ್ಲಿ ವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ',
  'cta.subtitle':
    'ಪ್ರಮಾಣೀಕೃತ ನಾಟಿ ಸಾಮಗ್ರಿ, ಮನೆ ಬಾಗಿಲಿಗೆ ಫಾರ್ಮ್ ಡೆಲಿವರಿ ಮತ್ತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ತಜ್ಞರ ಬೆಂಬಲ. ಇಂದೇ ನಿಮ್ಮ ಮುಂದಿನ ಬೆಳೆಯನ್ನು ನಮ್ಮೊಂದಿಗೆ ಆರಂಭಿಸಿ.',
  'cta.shop': 'ಸಸಿಗಳನ್ನು ಖರೀದಿಸಿ',
  'cta.expert': 'ತಜ್ಞರೊಂದಿಗೆ ಮಾತನಾಡಿ',

  'hero.badge': '2016 ರಿಂದ ಪ್ರಮಾಣೀಕೃತ ನಾಟಿ ಸಾಮಗ್ರಿ',
  'hero.title1': 'ಸಮೃದ್ಧಿಯ ಬೆಳವಣಿಗೆ,',
  'hero.title2': 'ಒಂದು ಸಸಿಯಿಂದ ಪ್ರಾರಂಭ.',
  'hero.subtitle':
    'ಪ್ರೀಮಿಯಂ ಟಿಶ್ಯೂ ಕಲ್ಚರ್ ಸಸಿಗಳು, ಪ್ರಮಾಣೀಕೃತ ನರ್ಸರಿ ಸಸಿಗಳು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಪರಿಕರಗಳು ನೇರವಾಗಿ ನಿಮ್ಮ ಜಮೀನಿಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ.',
  'hero.survivalWarranty': 'ಬದುಕುಳಿಯುವ ಖಾತರಿ',
  'hero.farmDelivery': 'ಫಾರ್ಮ್ ಡೆಲಿವರಿ',
  'hero.expertSupport': 'ತಜ್ಞರ ಬೆಂಬಲ',
  'hero.statsFarmers': 'ಸೇವೆ ಪಡೆದ ರೈತರು',
  'hero.statsPlants': 'ತಲುಪಿಸಿದ ಸಸಿಗಳು',
  'hero.statsSurvival': 'ಬದುಕುಳಿಯುವ ದರ',
  'hero.statsStates': 'ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ',

  'footer.tagline':
    'ಪ್ರೀಮಿಯಂ ಟಿಶ್ಯೂ ಕಲ್ಚರ್ ಸಸಿಗಳು, ಪ್ರಮಾಣೀಕೃತ ಸಸಿಗಳು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಪರಿಕರಗಳನ್ನು ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ ನಿಮ್ಮ ಜಮೀನಿಗೆ ನೇರವಾಗಿ ತಲುಪಿಸಲಾಗುತ್ತದೆ.',
  'footer.shop': 'ಶಾಪ್',
  'footer.company': 'ಕಂಪನಿ',
  'footer.support': 'ಬೆಂಬಲ',
  'footer.aboutUs': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'footer.whyChooseUs': 'ನಮ್ಮನ್ನೇ ಏಕೆ ಆಯ್ಕೆಮಾಡಬೇಕು',
  'footer.warranty': 'ಸಸಿ ಖಾತರಿ',
  'footer.knowledgeCenter': 'ಜ್ಞಾನ ಕೇಂದ್ರ',
  'footer.becomeDealer': 'ಡೀಲರ್ ಆಗಿ',
  'footer.trackOrder': 'ಆರ್ಡರ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ',
  'footer.contact': 'ಸಂಪರ್ಕಿಸಿ',
  'footer.myAccount': 'ನನ್ನ ಖಾತೆ',
  'footer.calculators': 'ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
  'footer.whatsappSupport': 'ವಾಟ್ಸಾಪ್ ಬೆಂಬಲ',
  'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
}

const ta: Record<string, string> = {
  'nav.shop': 'கடை',
  'nav.categories': 'வகைகள்',
  'nav.knowledge': 'அறிவு மையம்',
  'nav.about': 'எங்களைப் பற்றி',
  'nav.why': 'ஏன் நாங்கள்',
  'nav.contact': 'தொடர்பு',
  'nav.account': 'கணக்கு',
  'nav.expert': 'நிபுணருடன் பேசுங்கள்',
  'header.shopAll': 'அனைத்தையும் வாங்கவும்',

  'common.addToCart': 'கூடைக்கு சேர்க்கவும்',
  'common.buyNow': 'இப்போது வாங்கவும்',
  'common.shopPlants': 'செடிகளை வாங்கவும்',

  'cta.title': 'இந்த பருவத்தில் நம்பிக்கையுடன் வளருங்கள்',
  'cta.subtitle':
    'சான்றளிக்கப்பட்ட நடவு பொருட்கள், வீட்டு வாசலுக்கு பண்ணை விநியோகம் மற்றும் உங்கள் மொழியில் நிபுணர் ஆதரவு. இன்றே உங்கள் அடுத்த பயிரை எங்களுடன் தொடங்குங்கள்.',
  'cta.shop': 'செடிகளை வாங்கவும்',
  'cta.expert': 'நிபுணருடன் பேசுங்கள்',

  'hero.badge': '2016 முதல் சான்றளிக்கப்பட்ட நடவு பொருட்கள்',
  'hero.title1': 'செழிப்பை வளர்க்கிறோம்,',
  'hero.title2': 'ஒரு செடியாக ஒரு நேரத்தில்.',
  'hero.subtitle':
    'பிரீமியம் திசு வளர்ப்பு செடிகள், சான்றளிக்கப்பட்ட நர்சரி நாற்றுகள் மற்றும் நிலையான விவசாய உள்ளீடுகள் நேரடியாக உங்கள் பண்ணைக்கு வழங்கப்படும்.',
  'hero.survivalWarranty': 'உயிர்வாழ்வு உத்தரவாதம்',
  'hero.farmDelivery': 'பண்ணை விநியோகம்',
  'hero.expertSupport': 'நிபுணர் ஆதரவு',
  'hero.statsFarmers': 'சேவை பெற்ற விவசாயிகள்',
  'hero.statsPlants': 'வழங்கப்பட்ட செடிகள்',
  'hero.statsSurvival': 'உயிர்வாழ்வு விகிதம்',
  'hero.statsStates': 'தென் இந்தியா முழுவதும்',

  'footer.tagline':
    'பிரீமியம் திசு வளர்ப்பு செடிகள், சான்றளிக்கப்பட்ட நாற்றுகள் மற்றும் நிலையான பண்ணை உள்ளீடுகள் தென் இந்தியா முழுவதும் உங்கள் பண்ணைக்கு நேரடியாக வழங்கப்படும்.',
  'footer.shop': 'கடை',
  'footer.company': 'நிறுவனம்',
  'footer.support': 'ஆதரவு',
  'footer.aboutUs': 'எங்களைப் பற்றி',
  'footer.whyChooseUs': 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்',
  'footer.warranty': 'செடி உத்தரவாதம்',
  'footer.knowledgeCenter': 'அறிவு மையம்',
  'footer.becomeDealer': 'டீலராக மாறுங்கள்',
  'footer.trackOrder': 'ஆர்டரை கண்காணி',
  'footer.contact': 'தொடர்பு',
  'footer.myAccount': 'என் கணக்கு',
  'footer.calculators': 'கால்குலேட்டர்கள்',
  'footer.whatsappSupport': 'வாட்ஸ்அப் ஆதரவு',
  'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
}

const te: Record<string, string> = {
  'nav.shop': 'షాప్',
  'nav.categories': 'వర్గాలు',
  'nav.knowledge': 'విజ్ఞాన కేంద్రం',
  'nav.about': 'మా గురించి',
  'nav.why': 'మమ్మల్నే ఎందుకు',
  'nav.contact': 'సంప్రదించండి',
  'nav.account': 'ఖాతా',
  'nav.expert': 'నిపుణుడితో మాట్లాడండి',
  'header.shopAll': 'అన్నీ షాప్ చేయండి',

  'common.addToCart': 'కార్ట్‌కి జోడించండి',
  'common.buyNow': 'ఇప్పుడే కొనండి',
  'common.shopPlants': 'మొక్కలను కొనండి',

  'cta.title': 'ఈ సీజన్‌లో నమ్మకంతో పెంచండి',
  'cta.subtitle':
    'సర్టిఫైడ్ నాటే సామగ్రి, ఇంటి వద్దకే వ్యవసాయ డెలివరీ మరియు మీ భాషలో నిపుణుల మద్దతు. ఈరోజే మీ తదుపరి పంటను మాతో ప్రారంభించండి.',
  'cta.shop': 'మొక్కలను కొనండి',
  'cta.expert': 'నిపుణుడితో మాట్లాడండి',

  'hero.badge': '2016 నుండి సర్టిఫైడ్ నాటే సామగ్రి',
  'hero.title1': 'సమృద్ధిని పెంచుతున్నాం,',
  'hero.title2': 'ఒక్కో మొక్కతో.',
  'hero.subtitle':
    'ప్రీమియం టిష్యూ కల్చర్ మొక్కలు, సర్టిఫైడ్ నర్సరీ మొక్కలు మరియు సుస్థిర వ్యవసాయ ఉత్పాదనలు నేరుగా మీ పొలానికి అందించబడతాయి.',
  'hero.survivalWarranty': 'జీవించే హామీ',
  'hero.farmDelivery': 'ఫామ్ డెలివరీ',
  'hero.expertSupport': 'నిపుణుల మద్దతు',
  'hero.statsFarmers': 'సేవలందిన రైతులు',
  'hero.statsPlants': 'అందించిన మొక్కలు',
  'hero.statsSurvival': 'జీవించే రేటు',
  'hero.statsStates': 'దక్షిణ భారతదేశం అంతటా',

  'footer.tagline':
    'ప్రీమియం టిష్యూ కల్చర్ మొక్కలు, సర్టిఫైడ్ మొక్కలు మరియు సుస్థిర వ్యవసాయ ఉత్పాదనలు దక్షిణ భారతదేశం అంతటా మీ పొలానికి నేరుగా అందించబడతాయి.',
  'footer.shop': 'షాప్',
  'footer.company': 'కంపెనీ',
  'footer.support': 'మద్దతు',
  'footer.aboutUs': 'మా గురించి',
  'footer.whyChooseUs': 'మమ్మల్నే ఎందుకు ఎంచుకోవాలి',
  'footer.warranty': 'మొక్క హామీ',
  'footer.knowledgeCenter': 'విజ్ఞాన కేంద్రం',
  'footer.becomeDealer': 'డీలర్ అవ్వండి',
  'footer.trackOrder': 'ఆర్డర్‌ని ట్రాక్ చేయండి',
  'footer.contact': 'సంప్రదించండి',
  'footer.myAccount': 'నా ఖాతా',
  'footer.calculators': 'కాలిక్యులేటర్లు',
  'footer.whatsappSupport': 'వాట్సాప్ మద్దతు',
  'footer.rights': 'అన్ని హక్కులు రక్షించబడ్డాయి.',
}

const ml: Record<string, string> = {
  'nav.shop': 'ഷോപ്പ്',
  'nav.categories': 'വിഭാഗങ്ങൾ',
  'nav.knowledge': 'അറിവ് കേന്ദ്രം',
  'nav.about': 'ഞങ്ങളെക്കുറിച്ച്',
  'nav.why': 'എന്തുകൊണ്ട് ഞങ്ങൾ',
  'nav.contact': 'ബന്ധപ്പെടുക',
  'nav.account': 'അക്കൗണ്ട്',
  'nav.expert': 'വിദഗ്ധനോട് സംസാരിക്കുക',
  'header.shopAll': 'എല്ലാം ഷോപ്പ് ചെയ്യുക',

  'common.addToCart': 'കാർട്ടിലേക്ക് ചേർക്കുക',
  'common.buyNow': 'ഇപ്പോൾ വാങ്ങുക',
  'common.shopPlants': 'ചെടികൾ വാങ്ങുക',

  'cta.title': 'ഈ സീസണിൽ ആത്മവിശ്വാസത്തോടെ വളരൂ',
  'cta.subtitle':
    'സർട്ടിഫൈഡ് നടീൽ വസ്തുക്കൾ, വീട്ടുപടിക്കൽ ഫാം ഡെലിവറി, നിങ്ങളുടെ ഭാഷയിൽ വിദഗ്ധ പിന്തുണ. ഇന്ന് തന്നെ നിങ്ങളുടെ അടുത്ത വിളവ് ഞങ്ങളോടൊപ്പം ആരംഭിക്കൂ.',
  'cta.shop': 'ചെടികൾ വാങ്ങുക',
  'cta.expert': 'വിദഗ്ധനോട് സംസാരിക്കുക',

  'hero.badge': '2016 മുതൽ സർട്ടിഫൈഡ് നടീൽ വസ്തുക്കൾ',
  'hero.title1': 'സമൃദ്ധി വളർത്തുന്നു,',
  'hero.title2': 'ഒരു ചെടി ഒരു സമയം.',
  'hero.subtitle':
    'പ്രീമിയം ടിഷ്യു കൾച്ചർ ചെടികൾ, സർട്ടിഫൈഡ് നഴ്സറി തൈകൾ, സുസ്ഥിര കാർഷിക ഉൽപ്പന്നങ്ങൾ നേരിട്ട് നിങ്ങളുടെ കൃഷിയിടത്തിലേക്ക് എത്തിക്കുന്നു.',
  'hero.survivalWarranty': 'അതിജീവന ഉറപ്പ്',
  'hero.farmDelivery': 'ഫാം ഡെലിവറി',
  'hero.expertSupport': 'വിദഗ്ധ പിന്തുണ',
  'hero.statsFarmers': 'സേവനം നൽകിയ കർഷകർ',
  'hero.statsPlants': 'എത്തിച്ച ചെടികൾ',
  'hero.statsSurvival': 'അതിജീവന നിരക്ക്',
  'hero.statsStates': 'ദക്ഷിണേന്ത്യയിലുടനീളം',

  'footer.tagline':
    'പ്രീമിയം ടിഷ്യു കൾച്ചർ ചെടികൾ, സർട്ടിഫൈഡ് തൈകൾ, സുസ്ഥിര കാർഷിക ഉൽപ്പന്നങ്ങൾ ദക്ഷിണേന്ത്യയിലുടനീളം നിങ്ങളുടെ കൃഷിയിടത്തിലേക്ക് നേരിട്ട് എത്തിക്കുന്നു.',
  'footer.shop': 'ഷോപ്പ്',
  'footer.company': 'കമ്പനി',
  'footer.support': 'പിന്തുണ',
  'footer.aboutUs': 'ഞങ്ങളെക്കുറിച്ച്',
  'footer.whyChooseUs': 'എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം',
  'footer.warranty': 'ചെടി ഉറപ്പ്',
  'footer.knowledgeCenter': 'അറിവ് കേന്ദ്രം',
  'footer.becomeDealer': 'ഡീലർ ആകുക',
  'footer.trackOrder': 'ഓർഡർ ട്രാക്ക് ചെയ്യുക',
  'footer.contact': 'ബന്ധപ്പെടുക',
  'footer.myAccount': 'എന്റെ അക്കൗണ്ട്',
  'footer.calculators': 'കാൽക്കുലേറ്ററുകൾ',
  'footer.whatsappSupport': 'വാട്സ്ആപ്പ് പിന്തുണ',
  'footer.rights': 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു.',
}

export type TranslationKey = keyof typeof en

const dictionaries: Record<LocaleCode, Record<string, string>> = {
  en,
  kn,
  ta,
  te,
  ml,
}

type LanguageContextValue = {
  locale: LocaleCode
  setLocale: (code: LocaleCode) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('locale') as LocaleCode | null
    if (stored && locales.some((l) => l.code === stored)) {
      setLocaleState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLocale = (code: LocaleCode) => {
    setLocaleState(code)
    document.documentElement.lang = code
    window.localStorage.setItem('locale', code)
  }

  const t = (key: TranslationKey) =>
    dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
