interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin', 'Event Organizer'],
  tenantName: 'Organization',
  applicationName: 'event and festival manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Browse through events and festivals',
    'Browse through rental products',
    'View images and videos from past events and festivals',
    'Inquire about services',
  ],
  ownerAbilities: [
    'Manage platform registration and login',
    'Define user roles',
    'Invite Event Organizers to the platform',
    'Test and deploy the platform',
  ],
};
