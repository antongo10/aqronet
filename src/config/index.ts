export const config = {
  // Klaviyo configuration
  klaviyo: {
    listId: process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID || '',
    publicApiKey: process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_API_KEY || '',
  },
  
  // Site configuration
  site: {
    name: 'AQROnet',
    description: 'Book 1:1 Calls with Elite CEOs',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aqronet.com',
  },
  
  // Navigation links
  navigation: {
    main: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Join Waitlist', href: '#waitlist' },
    ],
  },
  
  // Social media links
  social: {
    twitter: 'https://twitter.com/aqronet',
    linkedin: 'https://linkedin.com/company/aqronet',
    facebook: 'https://facebook.com/aqronet',
  },
  
  // Contact information
  contact: {
    email: 'contact@aqronet.com',
  },
}

// Updated features with better-suited images
export const features = [
  {
    id: 1,
    title: 'Direct CEO Access',
    description: 'Connect directly with successful CEOs who have built and scaled companies.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 2,
    title: 'Pay Per Call',
    description: 'No subscriptions or long-term commitments. Pay only for the calls you need.',
    image: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    title: 'Verified Experts',
    description: 'All CEOs are thoroughly vetted to ensure you get the best advice.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2000&q=80',
  }
]

// Updated howItWorks section
export const howItWorks = {
  row1: {
    wide: {
      id: 1,
      title: 'Browse Expert CEOs',
      description: 'Explore profiles of successful CEOs and their expertise areas. Find the perfect match for your business needs.',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=2000&q=80',
    },
    thin: {
      id: 2,
      title: 'Book Your Call',
      description: 'Select a time slot and make a secure payment.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80',
    }
  },
  row2: [
    {
      id: 3,
      title: 'Prepare',
      description: 'Get a detailed agenda and preparation guide for your call.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 4,
      title: 'Connect',
      description: 'Join your video call and get transformative insights.',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 5,
      title: 'Implement',
      description: 'Get an action plan and follow-up resources.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80',
    }
  ]
}

// Partner logos
export const partners = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png',
  },
  {
    id: 2,
    name: 'InnovateLabs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png',
  },
  {
    id: 3,
    name: 'FutureWorks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png',
  },
  {
    id: 4,
    name: 'GlobalTech',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png',
  },
  {
    id: 5,
    name: 'SmartSolutions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1000px-Netflix_2015_logo.svg.png',
  },
  {
    id: 6,
    name: 'NextGen',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_logo.svg/1000px-Microsoft_logo.svg.png',
  },
]