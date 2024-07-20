export const PUBLIC_ROUTES = {
  login: '/login',
  forgot: '/forgot',
  register: '/register',
}

export const PROTECTED_ROUTES = {
  home: '/',
  myScore: '/my-score',
  notifications: '/notifications',
  profile: '/profile',
  rating: '/rating',
  settings: '/settings',
  allCourses: '/courses',
  myCertificates: '/my-certificates',
}

export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
}

export const ROUTES_LINKS = Object.values(ROUTES)
