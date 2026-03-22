import { BUSINESS } from './theme'

// LocalBusiness Schema - Core business information for Google
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'EmergencyService', 'LocalBusiness'],
    '@id': 'https://chorltonlocksmiths.com/#business',
    name: BUSINESS.name,
    alternateName: 'Chorlton Locksmiths',
    slogan: '24/7 Emergency Locksmith in Chorlton & Manchester',
    description:
      'Professional emergency locksmith services in Chorlton, Manchester. Available 24/7 for residential, commercial, and auto locksmith needs across all of Greater Manchester. 30–60 minute response time. Fully insured.',
    url: 'https://chorltonlocksmiths.com',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: {
      '@type': 'ImageObject',
      url: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
      width: 1200,
      height: 630,
      caption: 'Chorlton Locksmiths — Emergency Locksmith in Chorlton and Manchester available 24/7',
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
      caption: 'Chorlton Locksmiths Limited — Manchester Emergency Locksmith',
    },
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    foundingDate: '2009',
    hasMap: 'https://maps.google.com/?q=615b+Wilbraham+Rd+Chorlton+Manchester+M21+9AN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '615b Wilbraham Rd',
      addressLocality: 'Chorlton-cum-Hardy',
      addressRegion: 'Greater Manchester',
      postalCode: 'M21 9AN',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'emergency',
        contactOption: 'TollFree',
        areaServed: 'GB',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    ],
    areaServed: [
      'Chorlton', 'Didsbury', 'Fallowfield', 'Withington', 'Rusholme',
      'Whalley Range', 'Moss Side', 'Hulme', 'Old Trafford', 'Stretford',
      'Sale', 'Altrincham', 'Urmston', 'Trafford Park', 'Salford', 'Eccles',
      'Worsley', 'Levenshulme', 'Gorton', 'Longsight', 'Ancoats',
      'Wythenshawe', 'Northenden', 'Stockport', 'Cheadle',
      'Manchester City Centre', 'Deansgate', 'Castlefield',
    ].map((name) => ({ '@type': 'City', name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.google.com/maps/search/Chorlton+Locksmiths+615b+Wilbraham+Rd+Manchester',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    knowsAbout: [
      'Emergency Locksmith', 'Lock Repair', 'Lock Replacement', 'uPVC Door Locks',
      'Euro Cylinder Locks', 'Multipoint Locks', 'Auto Locksmith', 'Key Cutting',
      'Residential Security', 'Commercial Security', 'Anti-Snap Locks',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services Manchester',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Locksmith Manchester', url: 'https://chorltonlocksmiths.com/services/emergency-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Locksmith Manchester — Car & Van', url: 'https://chorltonlocksmiths.com/services/auto-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Locksmith Manchester', url: 'https://chorltonlocksmiths.com/services/residential-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Locksmith Manchester', url: 'https://chorltonlocksmiths.com/services/commercial-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Repair Manchester', url: 'https://chorltonlocksmiths.com/services/lock-repair-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Replacement Manchester', url: 'https://chorltonlocksmiths.com/services/lock-replacement-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'uPVC Door Lock Specialist Manchester', url: 'https://chorltonlocksmiths.com/services/upvc-door-lock-specialist' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Locksmith Chorlton', url: 'https://chorltonlocksmiths.com/auto-locksmith-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Replacement Chorlton', url: 'https://chorltonlocksmiths.com/car-key-replacement-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Lockout Chorlton', url: 'https://chorltonlocksmiths.com/car-lockout-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lost Car Keys Chorlton', url: 'https://chorltonlocksmiths.com/lost-car-keys-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Programming Chorlton', url: 'https://chorltonlocksmiths.com/car-key-programming-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24 Hour Auto Locksmith Chorlton', url: 'https://chorltonlocksmiths.com/24-hour-auto-locksmith-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Van Locksmith Chorlton', url: 'https://chorltonlocksmiths.com/van-locksmith-chorlton' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ignition Repair Chorlton', url: 'https://chorltonlocksmiths.com/ignition-repair-chorlton' } },
      ],
    },
  }
}

// ImageObject Schema — helps Google Images rank and attribute the hero image
export const generateImageObjectSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': 'https://chorltonlocksmiths.com/#hero-image',
    contentUrl: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
    url: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
    name: 'Chorlton Locksmiths — Emergency Locksmith in Manchester 24/7',
    caption: 'Professional emergency locksmith services in Chorlton and Manchester. Available 24/7, 30–60 minute response time.',
    description: 'Chorlton Locksmiths provides 24/7 emergency locksmith services across Manchester and Greater Manchester including Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre.',
    representativeOfPage: true,
    width: { '@type': 'QuantitativeValue', value: 1200 },
    height: { '@type': 'QuantitativeValue', value: 630 },
    encodingFormat: 'image/webp',
    license: 'https://chorltonlocksmiths.com',
    acquireLicensePage: 'https://chorltonlocksmiths.com/contact',
    creditText: 'Chorlton Locksmiths Limited',
    creator: {
      '@type': 'Organization',
      name: 'Chorlton Locksmiths Limited',
      url: 'https://chorltonlocksmiths.com',
    },
    locationCreated: {
      '@type': 'Place',
      name: 'Chorlton-cum-Hardy, Manchester',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.4404,
        longitude: -2.2703,
      },
    },
  }
}

// WebPage Schema with Speakable — AEO optimized for voice search & AI answer engines
export const generateWebPageSchema = (data: {
  url: string
  name: string
  description: string
  speakableSelectors?: string[]
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://chorltonlocksmiths.com${data.url}#webpage`,
    url: `https://chorltonlocksmiths.com${data.url}`,
    name: data.name,
    description: data.description,
    inLanguage: 'en-GB',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://chorltonlocksmiths.com/#website',
      url: 'https://chorltonlocksmiths.com',
      name: 'Chorlton Locksmiths',
      description: '24/7 Emergency Locksmith in Chorlton and Manchester',
      publisher: {
        '@id': 'https://chorltonlocksmiths.com/#business',
      },
    },
    about: {
      '@id': 'https://chorltonlocksmiths.com/#business',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: data.speakableSelectors ?? ['h1', 'h2', '.speakable'],
    },
    primaryImageOfPage: {
      '@id': 'https://chorltonlocksmiths.com/#hero-image',
    },
  }
}

// Review/Rating Schema
export const generateReviewSchema = (
  reviews: Array<{ name: string; rating: number; text: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewBody: review.text,
      datePublished: new Date().toISOString().split('T')[0],
    })),
  }
}

// FAQ Schema
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Breadcrumb Schema
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://chorltonlocksmiths.com${item.url}`,
    })),
  }
}

// Shared area-served list for all auto/Chorlton service pages
export const CHORLTON_AREA_SERVED = [
  'Chorlton', 'Chorlton-cum-Hardy', 'Didsbury', 'Stretford', 'Sale',
  'Whalley Range', 'Fallowfield', 'Withington', 'Hulme', 'Old Trafford',
  'Moss Side', 'Rusholme', 'Salford', 'Urmston', 'Northenden',
  'Manchester City Centre', 'Trafford', 'Wythenshawe',
].map((name) => ({ '@type': 'City', name }))

// Service Schema (for individual service pages) — full, rich version
export const generateServiceSchema = (
  serviceData: {
    name: string
    description: string
    url: string
    serviceType?: string
  }
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://chorltonlocksmiths.com${serviceData.url}#service`,
    name: serviceData.name,
    description: serviceData.description,
    serviceType: serviceData.serviceType ?? 'Auto Locksmith Service',
    provider: {
      '@type': 'Locksmith',
      '@id': 'https://chorltonlocksmiths.com/#business',
      name: BUSINESS.name,
      url: 'https://chorltonlocksmiths.com',
      telephone: BUSINESS.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '615b Wilbraham Rd',
        addressLocality: 'Chorlton-cum-Hardy',
        addressRegion: 'Greater Manchester',
        postalCode: 'M21 9AN',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.coordinates.lat,
        longitude: BUSINESS.coordinates.lng,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(BUSINESS.rating),
        reviewCount: String(BUSINESS.reviews),
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: CHORLTON_AREA_SERVED,
    url: `https://chorltonlocksmiths.com${serviceData.url}`,
    telephone: BUSINESS.phone,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: 'Mobile',
      serviceLocation: {
        '@type': 'Place',
        name: 'Chorlton, Manchester',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.coordinates.lat,
          longitude: BUSINESS.coordinates.lng,
        },
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      areaServed: 'Chorlton, Manchester, UK',
    },
  }
}

// WebPage schema with Speakable — for AEO / voice search / AI answer engines
export const generateServicePageSchema = (data: {
  url: string
  name: string
  description: string
  dateModified?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://chorltonlocksmiths.com${data.url}#webpage`,
    url: `https://chorltonlocksmiths.com${data.url}`,
    name: data.name,
    description: data.description,
    inLanguage: 'en-GB',
    dateModified: data.dateModified ?? new Date().toISOString().split('T')[0],
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://chorltonlocksmiths.com/#website',
      url: 'https://chorltonlocksmiths.com',
      name: 'Chorlton Locksmiths',
    },
    about: { '@id': 'https://chorltonlocksmiths.com/#business' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable', '.faq-answer'],
    },
  }
}

// HowTo Schema (AEO — helps AI answer engines extract step-by-step answers)
export const generateHowToSchema = (data: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    step: data.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

// Organization Schema (for structured data markup)
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: 'https://chorltonlocksmiths.com',
    logo: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
    sameAs: [
      'https://www.google.com/maps/place/Chorlton+Locksmiths',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '615b Wilbraham Rd',
      addressLocality: 'Chorlton-cum-Hardy',
      addressRegion: 'Manchester',
      postalCode: 'M21 9AN',
      addressCountry: 'GB',
    },
  }
}
