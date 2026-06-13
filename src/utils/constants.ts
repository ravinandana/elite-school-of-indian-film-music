export const API_BASE_URL = "https://api.eliteschooloffilmusic.com";
export const COURSES_ENDPOINT = `${API_BASE_URL}/courses`;
export const FACULTY_ENDPOINT = `${API_BASE_URL}/faculty`;
export const TESTIMONIALS_ENDPOINT = `${API_BASE_URL}/testimonials`;
export const ADMISSIONS_INFO = {
    process: "To apply for admission, please fill out the contact form and we will get back to you with the details.",
    requirements: [
        "Completed application form",
        "Copy of previous academic records",
        "Personal statement",
        "Recommendation letters"
    ]
};
export const SOCIAL_MEDIA_LINKS = {
    facebook: "https://facebook.com/eliteschooloffilmusic",
    instagram: "https://instagram.com/eliteschooloffilmusic",
    twitter: "https://twitter.com/eliteschooloffilmusic",
    linkedin: "https://linkedin.com/company/eliteschooloffilmusic"
};

export const SCHOOL_NAME = 'Elite School of Indian Film Music';
export const WHATSAPP_NUMBER = '+919686212053';
export const WHATSAPP_MESSAGE = 'Hi, I am interested in joining Elite School of Indian Film Music.';
export const EMAIL = 'choodegowdaap@gmail.com';
export const PHONE = '9686212053';

export const COURSES = [
  {
    id: 1,
    name: 'Carnatic Vocals',
    description: 'Master the classical Carnatic vocal tradition with authentic techniques and ragas',
    level: 'Beginner to Advanced',
    icon: '🎤',
  },
  {
    id: 2,
    name: 'Guitar',
    description: 'Learn acoustic and electric guitar from basics to advanced levels',
    level: 'Beginner to Advanced',
    icon: '🎸',
  },
  {
    id: 3,
    name: 'Keyboard & Piano',
    description: 'Professional keyboard and piano training for film music composition',
    level: 'Beginner to Advanced',
    icon: '🎹',
  },
  {
    id: 4,
    name: 'Light Music',
    description: 'Explore contemporary light music, pop, and film music styles',
    level: 'All Levels',
    icon: '🎵',
  },
  {
    id: 5,
    name: 'Devotional Songs',
    description: 'Learn bhajans, kirtans, and devotional music with spiritual depth',
    level: 'All Levels',
    icon: '🙏',
  },
  {
    id: 6,
    name: 'Conducting & Orchestration',
    description: 'Master the art of conducting orchestras and musical arrangements',
    level: 'Intermediate to Advanced',
    icon: '👨‍🎼',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ravinandana H S',
    role: 'Keyboard & Carnatic Classical Student',
    message: 'Elite School has transformed my musical journey. The faculty is incredibly knowledgeable and supportive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Saptha Swaroop',
    role: 'Guitar & Carnatic Classical Student',
    message: 'From basic chords to confident stage solos in months.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Hitesh Dev',
    role: 'Keyboard Student',
    message: 'I can now play songs and understand music much better.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Shrehansh Champi Bhat',
    role: 'Keyboard & Guitar Student',
    message: 'The teacher creates a positive and comfortable learning environment. I have improved my skills and confidence.',
    avatar: '/images/testimonials/priya.jpg',
    rating: 5
  },
  {
    id: 5,
    name: 'Likhith T.D',
    role: 'Vocal & Keyboard Student',
    message: 'From simple melodies to full arrangements and live performances.',
    avatar: '/images/testimonials/priya.jpg',
    rating: 5
  },
  {
    id: 6,
    name: 'Pallavi N',
    role: 'Guitar & Keyboard Student',
    message: 'Joining Elite School transformed my confidence. The instructors focused on my weaknesses.',
    rating: 5
  }
];

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'BSMB Band', href: '/bsmb' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100077365312221' },
  { name: 'Instagram', url: 'https://www.instagram.com/krishnachoodegowda/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@eliteschoolofindianfilmmus5207' },
  { name: 'Twitter', url: 'https://twitter.com/eliteschooloffilmusic' },
];

export const BSMB_BAND = {
  name: 'Bangalore South Music Band',
  tagline: 'Professional Music for Every Celebration',
  description: 'Experience the magic of live music at your special events. BSMB brings professionalism, passion, and perfection to every performance.',
  phone: PHONE,
  whatsapp: WHATSAPP_NUMBER,
};

export const BSMB_MEMBERS = [
  {
    id: 1,
    name: 'Krishna',
    role: 'Keyboardist & Guitarist',
    phone: PHONE, // +91-9686212053
    email: EMAIL,
    avatar: '/images/krishna-sir-new.jpeg',
    bio: 'Main keyboardist — arrangements, live leads and studio sessions.'
  },
  {
    id: 2,
    name: 'Vinay Ayyar',
    role: 'Drummer',
    phone: '7795335933',
    email: 'Vinayayyar777@gmail.com',
    avatar: '/images/vinay-sir.jpeg',
    bio: 'Lead drummer — rhythm section, percussion specialist for live shows.'
  }
];

export const BAND_SERVICES = [
  {
    id: 1,
    name: 'Marriage Concerts',
    description: 'Make your wedding unforgettable with our professional musicians. We perform classical, devotional, and contemporary music tailored to your preferences.',
    icon: '💒',
    features: [
      'Pre-wedding ceremonies',
      'Mehndi night performances',
      'Reception entertainment',
      'Wedding dance performances',
      'Live background music'
    ],
    price: 'Custom packages available'
  },
  {
    id: 2,
    name: 'Devotional Concerts',
    description: 'Spiritual and soulful performances perfect for temples, religious events, and spiritual gatherings. Connect with divine music through our expert performers.',
    icon: '🙏',
    features: [
      'Bhajan performances',
      'Kirtan sessions',
      'Temple events',
      'Spiritual gatherings',
      'Festival performances'
    ],
    price: 'Custom packages available'
  },
  {
    id: 3,
    name: 'Folk Music Concerts',
    description: 'Celebrate Indian heritage with authentic folk music performances. Experience traditional melodies and dance from across India.',
    icon: '🎭',
    features: [
      'Regional folk performances',
      'Traditional dance performances',
      'Cultural events',
      'Heritage celebrations',
      'Community programs'
    ],
    price: 'Custom packages available'
  },
];