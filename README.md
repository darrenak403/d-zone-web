# D-Zone — Next.js Learning Project

A small learning project to understand Next.js App Router, authentication and layout patterns.

## Goals

- Learn Next.js App Router: layout, nested layouts, pages, middleware
- Implement authentication with Clerk
- Build an optimal layout system (header, responsive sidebar → drawer)
- Manage theme (light/dark) with Context + CSS Modules
- Use TypeScript and Prisma for basic data modeling

## Important notes

- Authentication: Clerk handles sign-in, sign-out and user session. Middleware protects routes.
- Layouts: Root `app/layout.tsx` provides global structure. Use nested layouts for app areas (e.g. `(app)` route group).
- Sidebar behavior: Desktop shows persistent sidebar; below breakpoint it becomes a Drawer.
- Theme: `SettingsContext` holds theme and sidebar state; `ThemeProvider` wraps Ant Design `ConfigProvider`.
- Prisma + Supabase: Use pooler/direct URLs from Supabase dashboard. If shadow DB issues occur, consider setting `SHADOW_DATABASE_URL` or using `prisma db push`.

## Screenshots

```md
![Screenshot 1](https://github.com/darrenak403/spotify-clone/blob/main/screenshots/Home.png)
![Screenshot 2](https://github.com/darrenak403/spotify-clone/blob/main/screenshots/Dashboard.png)
![Screenshot 3](https://github.com/darrenak403/spotify-clone/blob/main/screenshots/Chat%20RealTime.png)
```

## Learning outcomes

- Understand how Next.js App Router composes layouts and pages
- Implement route protection and basic auth flows
- Build responsive layout patterns and theme propagation

---

Short, focused learning repo — expand features as you practice.
