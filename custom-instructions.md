
## KOTMY Remix Codebase Guide

This document provides instructions and guidelines for contributing to the KOTMY Remix codebase. It is intended to be used by developers and AI agents to understand the project's structure and conventions.

---

## AI ONLY INSTRUCTIONS
- You are a staff frontend engineer with years of experience building frontend software in the fintech and e-commerce space
- You try to keep the UI on the app consistent
- Follow an ultra-clean, Apple/Stripe-inspired aesthetic: ample whitespace, subtle shadows, and a monochromatic palette with a single intentional accent color.
- Implement fully responsive layouts (mobile, tablet, desktop) with a mobile-friendly hamburger menu.
- Add smooth micro-interactions (e.g., gentle scale-up on hover, smooth fade-ins).
- You ask questions if prompt looks like the logic does not add up, or if you suspect a typo in the prompt

### Technology Stack

This project is a [Remix](https://remix.run/) application built with:

- **Framework**: Remix (a full-stack web framework for React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Radix UI for accessible components.
- **State Management**: Jotai for client-side state management.
- **Data Fetching/Mutations**: Primarily handled by Remix's `loader` and `action` functions. `axios` is available for client-side requests.
- **UI Components**: A mix of custom components and components from `swiper` and `react-chartjs-2`.

---

### Directory Structure (`app/`)

The `app/` directory contains the core of the application. Here's a breakdown of its structure:

- `assets/`: Contains static assets like images, icons, and fonts.
- `components/`: Contains reusable React components, organized by their scope:
    - `admin/`: Components used exclusively in the admin section.
    - `public/`: Components used in the public-facing pages.
    - `user/`: Components used in the user-specific section.
    - `reusables/`: Components that are used across multiple sections.
- `hooks/`: Contains custom React hooks.
- `lib/`: Contains utility functions, helpers, and shared logic.
    - `api/`: Client-side data fetching logic.
    - `cache/`: Caching related utilities.
    - `data/`: Mock data or data shaping utilities.
    - `helpers/`: Generic helper functions.
    - `store/`: Jotai atoms for state management.
    - `types/`: TypeScript type definitions.
    - `*.utils.ts`: Utility files for specific data types like dates and numbers.
    - `session.server.ts`: Server-side session management.
- `routes/`: This is where the application's routes are defined, following Remix's file-based routing convention.
    - Files named `_index.tsx` are the index route of a directory.
    - Files with `$` in their name are dynamic routes (e.g., `_public.contests.$tournamentId._index.tsx`).
    - Layouts are defined by files with a leading underscore (e.g., `_public.tsx`, `admin.tsx`, `user.tsx`) and their corresponding routes are nested under them.
- `services/`: Contains the application's business logic, organized by domain. This is where you should interact with databases or external APIs.
    - `admin/`
    - `auth/`
    - `contest/`
    - `contestant/`
    - `tournament/`
    - `user/`
- `entry.client.tsx` & `entry.server.tsx`: The entry points for the client and server.
- `root.tsx`: The root component of the application.
- `*.css`: Global and component-specific stylesheets.

---

### Adding a New Feature

To add a new feature, follow these steps:

1. **Create the Route**:
    - Create a new file in the `app/routes/` directory. The file name will determine the URL.
    - For example, to create a new page at `/my-feature`, create a file named `my-feature.tsx` inside the appropriate layout folder (e.g., `admin.my-feature.tsx`).

2. **Define Loaders and Actions**:
    - Use the `loader` function in your route file to fetch data for the page.
    - Use the `action` function to handle data mutations (e.g., form submissions).

3. **Create Components**:
    - If the feature requires complex UI, create reusable components in the `app/components/` directory.
    - Organize your components into the appropriate subdirectory (`admin/`, `public/`, `user/`, or `reusables/`).

4. **Add Business Logic**:
    - If the feature requires new business logic (e.g., interacting with a database), add a new file or function to the appropriate subdirectory in `app/services/`.
    - Keep business logic separate from your UI components.

5. **Add Utilities or Hooks**:
    - If you need new utility functions, add them to `app/lib/`.
    - If you need a new custom hook, add it to `app/hooks/`.

6. **State Management**:
    - For client-side state, use `jotai`. Define your atoms in `app/lib/store/` and use them in your components.

7. **Styling**:
    - Use Tailwind CSS for styling.
    - Follow the existing conventions for class names and component styling.

---

### Conventions

- **File Naming**: Use kebab-case for file names (e.g., `my-feature.tsx`).
- **Component Naming**: Use PascalCase for component names (e.g., `MyFeature`).
- **Code Style**: Follow the existing code style and formatting. This project uses ESLint to enforce code style.
- **Data Flow**: Adhere to the Remix data flow principles. Fetch data in `loader` functions and mutate data in `action` functions.
- **Types**: Add types for all new functions, variables, and props.

---

## Example: Admin Tournament Management

### 1. Define Interfaces

**File:** [`app/services/tournament/types/tournament.interface.ts`](app/services/tournament/types/tournament.interface.ts)
```typescript
export interface ITournamentDto { ... }
export interface ICreateTournamentDto { ... }
export interface ITournament { ... }
export interface ITournamentRepository { ... }
export function dtoToTournament(dto: ITournamentDto): ITournament { ... }


2. Implement Service Layer
File: app/services/tournament/tournament.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { MethodsEnum } from "~/lib/api/types/methods.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { ITournamentDto, ITournament, ITournamentRepository, dtoToTournament } from "./types/tournament.interface";

class TournamentRepository implements ITournamentRepository {
  async getTournaments(): Promise<TFetcherResponse<ITournament[]>> { ... }
  async getTournamentById(tournamentId: string): Promise<TFetcherResponse<ITournament>> { ... }
  async createTournament(dto: FormData, token: string): Promise<TFetcherResponse<ITournament>> { ... }
  async updateTournament({ id, dto }: { id: string; dto: FormData }, cookie: string): Promise<TFetcherResponse<ITournament>> { ... }
  async deleteTournament(tournamentId: string, token: string): Promise<TFetcherResponse<null>> { ... }
}
export const tournamentRepo = new TournamentRepository();

3. Create Components
File: app/components/admin/tournament/TournamentCard.tsx

import type { ITournament } from "~/services/tournament/types/tournament.interface";
export default function TournamentCard({ tournament }: { tournament: ITournament }) {
  // Card UI here
}

4. Create Route Page
File: app/routes/admin.tournaments._index.tsx
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { tournamentRepo } from "~/services/tournament/tournament.server";
import TournamentCard from "~/components/admin/tournament/TournamentCard";
import Cta from "~/components/reusables/Cta";
import Svg from "~/components/reusables/Svg";
import { icons } from "~/assets/icons";

export async function loader({}: LoaderFunctionArgs) {
  const { data: tournaments, error } = await tournamentRepo.getTournaments();
  if (error) throw new Error(error.detail as string);
  return json({ tournaments });
}

export default function Tournaments() {
  const { tournaments } = useLoaderData<typeof loader>();
  return (
    <main className="w-full overflow-y-auto p-6">
      <section className="flex justify-between items-center mb-8 sm:mb-16">
        <h1 className="text-2xl font-black text-primary">Tournaments</h1>
        <Cta element="link" to="add" className="hidden sm:flex gap-2 items-center rounded-lg px-3 py-2">
          <Svg src={icons.addIcon} width={".9em"} />
          Create Tournament
        </Cta>
      </section>
      <section className="my-8 grid sm:grid-cols-2 gap-6">
        {tournaments.map(tournament => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </section>
    </main>
  );
}

5. Add/Update Forms
File: app/components/admin/tournament/CreateTournamentForm.tsx

export default function CreateTournamentForm() {
  // Form fields and submit logic
}

File: app/routes/admin.tournaments.add.tsx
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { setToast } from "~/lib/session.server";
import { prepareTournamentDto, tournamentRepo } from "~/services/tournament/tournament.server";
import CreateTournamentForm from "~/components/admin/tournament/CreateTournamentForm";

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  if (!cookieHeader) return redirect("/login");
  const formData = await request.formData();
  const payload = prepareTournamentDto(formData);
  const { error } = await tournamentRepo.createTournament(payload, cookieHeader);
  if (error) {
    const { headers } = await setToast({ request, toast: `error::${error?.detail}::${Date.now()}` });
    return json(error, { headers });
  }
  const { headers } = await setToast({ request, toast: `success::A new tournament has been created::${Date.now()}` });
  return redirect("/admin/tournaments", { headers });
}

export default function AddTournament() {
  return (
    <main className="w-full overflow-y-auto p-6">
      <CreateTournamentForm />
    </main>
  );
}

General Coding Conventions
File Naming: Use kebab-case for files, PascalCase for components.
Types: Always type props, state, and API responses.
Remix Data Flow: Use loader for fetching, action for mutations.
Styling: Use Tailwind CSS utility classes.
Pagination: Use the shared Pagination component.
Responsiveness: Use Tailwind's responsive classes (sm:, md:, etc.).
Build for mobile first
Business Logic: Keep all API/database logic in app/services/.
Reusability: Place shared UI in app/components/reusables/.
Example File Links
Tournament Interface
Tournament Service
Tournament Card Component
Tournament Index Route
Tournament Add Route
