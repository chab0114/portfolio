

export const projects = [
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
    id: 'crapr',
    type: 'code',
    title: 'Crapr: Local Marketplace',
    summary:
      'Full-stack marketplace where people list and find unwanted items in their area.',
    highlights: [
      'Google OAuth sign-in and JWT-protected routes.',
      'Transaction workflow from first interest to completion.',
      'Location-based search with keyword and distance filters.',
      'Deployed live with automatic updates on every push.',
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