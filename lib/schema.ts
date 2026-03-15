import { BUSINESS } from './theme'

// LocalBusiness Schema - Core business information for Google
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': 'https://chorltonlocksmiths.co.uk/#business',
    name: BUSINESS.name,
    description:
      'Professional emergency locksmith services in Chorlton, Manchester. Available 24/7 for residential, commercial, and auto locksmith needs across all of Greater Manchester.',
    url: 'https://chorltonlocksmiths.co.uk',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: 'https://chorltonlocksmiths.co.uk/og-image.jpg',
    priceRange: '££',
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
    areaServed: [
      'Chorlton', 'Didsbury', 'Fallowfield', 'Withington', 'Rusholme',
      'Whalley Range', 'Moss Side', 'Hulme', 'Old Trafford', 'Stretford',
      'Sale', 'Altrincham', 'Urmston', 'Trafford Park', 'Salford', 'Eccles',
      'Worsley', 'Levenshulme', 'Gorton', 'Longsight', 'Ancoats',
      'Wythenshawe', 'Northenden', 'Stockport', 'Cheadle',
      'Manchester City Centre', 'Deansgate', 'Castlefield',
    ].map((name) => ({ '@type': 'City', name, '@id': `https://www.wikidata.org/wiki/${encodeURIComponent(name)}` })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.google.com/maps/place/Chorlton+Locksmiths',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Locksmith', url: 'https://chorltonlocksmiths.co.uk/services/emergency-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Locksmith — Car & Van', url: 'https://chorltonlocksmiths.co.uk/services/auto-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Locksmith', url: 'https://chorltonlocksmiths.co.uk/services/residential-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Locksmith', url: 'https://chorltonlocksmiths.co.uk/services/commercial-locksmith-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Repair', url: 'https://chorltonlocksmiths.co.uk/services/lock-repair-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Replacement', url: 'https://chorltonlocksmiths.co.uk/services/lock-replacement-manchester' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'uPVC Door Locks', url: 'https://chorltonlocksmiths.co.uk/services/upvc-door-lock-specialist' } },
      ],
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
      item: `https://chorltonlocksmiths.co.uk${item.url}`,
    })),
  }
}

// Service Schema (for individual service pages)
export const generateServiceSchema = (
  serviceData: {
    name: string
    description: string
    url: string
  }
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      '@type': 'Locksmith',
      name: BUSINESS.name,
      url: 'https://chorltonlocksmiths.co.uk',
    },
    areaServed: {
      '@type': 'City',
      name: 'Manchester',
    },
    url: `https://chorltonlocksmiths.co.uk${serviceData.url}`,
    telephone: BUSINESS.phone,
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
    url: 'https://chorltonlocksmiths.co.uk',
    logo: 'https://chorltonlocksmiths.co.uk/logo.png',
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
