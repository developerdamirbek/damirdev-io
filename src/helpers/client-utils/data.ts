export const getInitials = (firstName?: string, lastName?: string): string =>
  firstName || lastName ? `${firstName?.[0] || ''} ${lastName?.[0] || ''}` : ''
