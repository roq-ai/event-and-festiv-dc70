const mapping: Record<string, string> = {
  events: 'event',
  festivals: 'festival',
  organizations: 'organization',
  products: 'product',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
