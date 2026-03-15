// Theme constants for Chorlton Locksmiths

export const COLORS = {
  primary: '#0F172A', // Dark blue
  accent: '#F59E0B', // Orange
  accentDark: '#D97706',
  neutral: {
    light: '#F5F5F5',
    gray: '#6B7280',
    dark: '#111827',
  },
  text: {
    primary: '#111827',
    secondary: '#6B7280',
  },
  bg: {
    light: '#FFFFFF',
    dark: '#0F172A',
  },
  border: '#E5E7EB',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
}

export const BUSINESS = {
  name: 'Chorlton Locksmiths Limited',
  phone: '+447388789881',
  phoneDisplay: '07388 789881',
  email: 'info@chorltonlocksmiths.co.uk',
  address: '615b Wilbraham Rd, Chorlton-cum-Hardy, Manchester M21 9AN, United Kingdom',
  coordinates: {
    lat: 53.4404,
    lng: -2.2703,
  },
  rating: 4.6,
  reviews: 127,
  yearsEstablished: 15,
  serviceHours: {
    weekday: '8:00 AM - 11:00 PM',
    weekend: '9:00 AM - 10:00 PM',
    emergency: '24/7',
  },
}

export const SERVICE_AREAS = [
  'Chorlton',
  'Didsbury',
  'Whalley Range',
  'Stretford',
  'Sale',
  'Fallowfield',
  'Manchester City Centre',
  'Moss Side',
  'Old Trafford',
  'Salford',
  'Eccles',
  'Worsley',
  'Urmston',
  'Altrincham',
  'Withington',
  'Rusholme',
  'Levenshulme',
  'Gorton',
  'Longsight',
  'Hulme',
  'Ancoats',
  'Deansgate',
  'Castlefield',
  'Trafford Park',
  'Wythenshawe',
  'Northenden',
  'Stockport',
  'Cheadle',
]

export const SERVICES = [
  {
    id: 'emergency',
    name: 'Emergency Locksmith',
    slug: 'emergency-locksmith-manchester',
    description: 'Available 24/7 for emergency lockouts and urgent lock issues',
    icon: 'AlertCircle',
  },
  {
    id: 'residential',
    name: 'Residential Locksmith',
    slug: 'residential-locksmith-manchester',
    description: 'Home security solutions including locks, keys, and door repairs',
    icon: 'Home',
  },
  {
    id: 'commercial',
    name: 'Commercial Locksmith',
    slug: 'commercial-locksmith-manchester',
    description: 'Business security systems and access control solutions',
    icon: 'Building2',
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair',
    slug: 'lock-repair-manchester',
    description: 'Expert repair service for all types of locks',
    icon: 'Wrench',
  },
  {
    id: 'lock-replacement',
    name: 'Lock Replacement',
    slug: 'lock-replacement-manchester',
    description: 'Complete lock replacement with modern security systems',
    icon: 'Key',
  },
  {
    id: 'upvc-locks',
    name: 'uPVC Door Locks',
    slug: 'upvc-door-lock-specialist',
    description: 'Specialist uPVC lock repairs and replacements',
    icon: 'Lock',
  },
  {
    id: 'auto-locksmith',
    name: 'Auto Locksmith',
    slug: 'auto-locksmith-manchester',
    description: 'Car & van lockout, key cutting, and auto lock services across Manchester',
    icon: 'Car',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    service: 'Emergency Locksmith',
    rating: 5,
    text: 'Great place very helpful owner reasonably priced. Highly recommended!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    service: 'Residential Locksmith',
    rating: 5,
    text: 'Have no hesitation recommending this independent locksmith. Professional and prompt service.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    service: 'Commercial Locksmith',
    rating: 5,
    text: 'Excellent service. Came out quickly when we had a lock issue. Very knowledgeable.',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    service: 'Lock Replacement',
    rating: 5,
    text: 'Called for an emergency lockout at 11pm and they arrived within 20 minutes. Outstanding.',
  },
  {
    id: 5,
    name: 'David Lee',
    service: 'uPVC Door Locks',
    rating: 5,
    text: 'Professional, affordable, and honest. Saved me hundreds compared to other quotes.',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    service: 'Lock Repair',
    rating: 5,
    text: 'Fixed my lock issue quickly. Excellent customer service and fair pricing.',
  },
]

export const TRUST_POINTS = [
  'Local to Chorlton & Manchester',
  'Fast Response Times',
  'Affordable Pricing',
  'Available 24/7',
  'Professional & Certified',
  'Trusted by Residents',
]
