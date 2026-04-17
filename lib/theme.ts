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
  phone: '+447309903243',
  phoneDisplay: '07309 903243',
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
    name: 'Emergency Auto Locksmith',
    slug: 'emergency-locksmith-manchester',
    description: 'Available 24/7 for emergency car and van lockouts',
    icon: 'AlertCircle',
  },
  {
    id: 'auto-locksmith',
    name: 'Auto Locksmith Services',
    slug: 'auto-locksmith-manchester',
    description: 'Car & van lockout, key cutting, programming, and auto lock services across Manchester',
    icon: 'Car',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    service: 'Emergency Auto Locksmith',
    rating: 5,
    text: 'Locked out of my car at 2am and they arrived in 45 minutes. Professional, friendly, and great value. Highly recommended!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    service: 'Car Key Replacement',
    rating: 5,
    text: 'Lost my car keys and they sorted me out quickly with a replacement. No hassle, fair price, very professional.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    service: 'Van Locksmith',
    rating: 5,
    text: 'Our work van was locked with keys inside. Fast response and non-destructive entry. Excellent service!',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    service: 'Car Lockout',
    rating: 5,
    text: 'Emergency car lockout on the motorway. Called them and they spoke me through it. Outstanding local service.',
  },
  {
    id: 5,
    name: 'David Lee',
    service: 'Key Fob Programming',
    rating: 5,
    text: 'Needed new car keys programmed. They did it on-site without drama. Professional and affordable.',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    service: 'Broken Key Extraction',
    rating: 5,
    text: 'Broke my key in the car ignition and they extracted it perfectly without damage. Great technicians.',
  },
]

export const TRUST_POINTS = [
  'Fast Auto Locksmith Response',
  'Mobile Service — We Come To You',
  '24/7 Emergency Auto Services',
  'Non-Destructive Vehicle Entry',
  'Expert Key Programming',
  'Trusted Throughout Manchester',
]
