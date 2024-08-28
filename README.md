# Next.js Project Structure

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

Our project follows a well-organized structure to maintain clean and scalable code:

### Directory Purposes

1. `src/app/`: Contains route-based pages and API routes.
   - Example: `src/app/login/page.tsx` handles the login page UI and logic.

2. `src/components/`: Stores reusable React components.
   - `common/`: For widely used components across the app.
     Example: `src/components/common/Button.tsx`
   - `layout/`: For components that define the overall structure.
     Example: `src/components/layout/Header.tsx`

3. `src/utils/`: Contains utility functions and helper methods.
   - Example: `src/utils/formatDate.ts` for date formatting functions.

4. `src/hooks/`: Stores custom React hooks.
   - Example: `src/hooks/useAuth.ts` for authentication-related logic.

5. `src/styles/`: Holds global styles and CSS modules.
   - Example: `src/styles/globals.css` for app-wide styles.

6. `src/constants/`: Stores constant values and configuration.
   - Example: `src/constants/apiEndpoints.ts` for API URL constants.

7. `src/app/api/`: Contains API routes for server-side logic.
   - Example: `src/app/api/users/route.ts` for user-related API endpoints.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
