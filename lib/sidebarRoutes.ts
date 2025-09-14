export const sidebarRoutes = (user?: { id?: string }) => [
  {
    name: "home",
    icon: "eva:home-file",
    router: "/",
  },
  {
    name: "my profile",
    icon: "bi:person-fill",
    router: `/profile/${user?.id}`,
  },
  {
    name: "messages",
    icon: "eva:message-circle-fill",
    router: "/messages",
  },
];
