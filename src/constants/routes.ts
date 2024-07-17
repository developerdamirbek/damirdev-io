export const PUBLIC_ROUTES = {
  login: '/login',
  forgot: '/forgot',
  registry: '/registry',
}

export const PROTECTED_ROUTES = {
  home: '/',
  myScore: '/my-score',
  notifications: '/notifications',
  profile: '/profile',
  rating: '/rating',
  settings: '/settings',
  allCourses: '/all-courses',
  myCertificates: '/my-certificates',
}

export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
}

export const ROUTES_LINKS = Object.values(ROUTES)
