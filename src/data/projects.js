

export const projects = [
  
    {
    id: 'oag-pwa',
    type: 'case-study',
    title: 'Ottawa Art Gallery: Accessible QR Code PWA',
    summary:
      'Accessible Progressive Web App for gallery visitors, with NaviLens integration for WCAG compliance.',
    highlights: [
      'Built an automated demographic survey and PDF reporting system that removed a $3,500/year third-party subscription.',
      'Presented several QR code strategies to stakeholders and pivoted scope twice based on feedback.',
      'Delivered with a 9-person Agile team using Git workflows and CI/CD.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'NaviLens'],
    links: [],
  },
  
  {
    id: 'lgt-booking',
    type: 'case-study',
    title: "Let's Get Together: Tech Support Booking",
    summary:
      'Frontend for a nonprofit booking system that helps seniors, students and job seekers get tech support.',
    highlights: [
      'Built an accessible interface with calendar scheduling and form validation.',
      'Created responsive components that work across devices.',
      'Coordinated a team of 3 and wrote integration docs for Google Calendar API.',
    ],
    stack: ['React'],
    links: [],
  },
  {
    slug: 'crapr',
    id: 'crapr',
    type: 'code',
    title: 'Crapr: Local Marketplace',
    summary:
      'Full-stack marketplace where people list and find unwanted items in their area.',
        highlights: [
      'Solved the problem of safely connecting buyers and sellers by designing and building a full REST-API-integrated user experience, from account creation and authentication to item search and listing management.',
      'Addressed data security needs by integrating JWT and Google OAuth for secure sign-in, protecting user data and private pages.',
      'Resolved multi-step transaction complexity with a structured workflow from initial interest to completed exchange, supported by location-based search and filtering.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Google OAuth'],
    links: [],
  },
  {
    id: 'crud-api',
    type: 'code',
    title: 'CRUD API with External Data',
    summary:
      'Backend service that exposes a clean API and enriches records from third-party sources.',
    highlights: [
      'Caching layer that speeds up responses and cuts external requests.',
      'Input validation and security checks against malformed data.',
    ],
    stack: ['Node.js', 'Express.js', 'Redis'],
    links: [],
  },
  {
    id: 'giftr',
    type: 'code',
    title: 'Giftr: Gift Tracking App',
    summary:
      'Cross-platform mobile app for tracking gift ideas for the people in your life.',
    highlights: [
      'Camera integration to attach photos to gift ideas.',
      'Birthday-sorted contacts list and validated forms.',
    ],
    stack: ['React Native', 'Expo', 'Context API'],
    links: [],
  },
]