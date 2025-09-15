export const sidebarRoutes = (user?: {id?: string}) => [
  {
    name: "home",
    icon: "eva:home-fill",
    router: "/",
  },
  {
    name: "my profile",
    icon: "eva:person-fill",
    router: `/profile/${user?.id}`,
  },
  {
    name: "messages",
    icon: "eva:message-circle-fill",
    router: "/messages",
  },
];
