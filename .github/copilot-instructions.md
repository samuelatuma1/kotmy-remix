# KOTMY Remix Codebase Guide

This document provides instructions and guidelines for contributing to the KOTMY Remix codebase. It is intended to be used by developers and AI agents to understand the project's structure and conventions.

## Technology Stack

This project is a [Remix](https://remix.run/) application built with:

-   **Framework**: Remix (a full-stack web framework for React)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS with Radix UI for accessible components.
-   **State Management**: Jotai for client-side state management.
-   **Data Fetching/Mutations**: Primarily handled by Remix's `loader` and `action` functions. `axios` is available for client-side requests.
-   **UI Components**: A mix of custom components and components from `swiper` and `react-chartjs-2`.

## Directory Structure (`app/`)

The `app/` directory contains the core of the application. Here's a breakdown of its structure:

-   `assets/`: Contains static assets like images, icons, and fonts.
-   `components/`: Contains reusable React components, organized by their scope:
    -   `admin/`: Components used exclusively in the admin section.
    -   `public/`: Components used in the public-facing pages.
    -   `user/`: Components used in the user-specific section.
    -   `reusables/`: Components that are used across multiple sections.
-   `hooks/`: Contains custom React hooks.
-   `lib/`: Contains utility functions, helpers, and shared logic.
    -   `api/`: Client-side data fetching logic.
    -   `cache/`: Caching related utilities.
    -   `data/`: Mock data or data shaping utilities.
    -   `helpers/`: Generic helper functions.
    -   `store/`: Jotai atoms for state management.
    -   `types/`: TypeScript type definitions.
    -   `*.utils.ts`: Utility files for specific data types like dates and numbers.
    -   `session.server.ts`: Server-side session management.
-   `routes/`: This is where the application's routes are defined, following Remix's file-based routing convention.
    -   Files named `_index.tsx` are the index route of a directory.
    -   Files with `$` in their name are dynamic routes (e.g., `_public.contests.$tournamentId._index.tsx`).
    -   Layouts are defined by files with a leading underscore (e.g., `_public.tsx`, `admin.tsx`, `user.tsx`) and their corresponding routes are nested under them.
-   `services/`: Contains the application's business logic, organized by domain. This is where you should interact with databases or external APIs.
    -   `admin/`
    -   `auth/`
    -   `contest/`
    -   `contestant/`
    -   `tournament/`
    -   `user/`
-   `entry.client.tsx` & `entry.server.tsx`: The entry points for the client and server.
-   `root.tsx`: The root component of the application.
-   `*.css`: Global and component-specific stylesheets.

## Adding a New Feature

To add a new feature, follow these steps:

1.  **Create the Route**:
    -   Create a new file in the `app/routes/` directory. The file name will determine the URL.
    -   For example, to create a new page at `/my-feature`, create a file named `my-feature.tsx` inside the appropriate layout folder (e.g., `admin.my-feature.tsx`).

2.  **Define Loaders and Actions**:
    -   Use the `loader` function in your route file to fetch data for the page.
    -   Use the `action` function to handle data mutations (e.g., form submissions).

3.  **Create Components**:
    -   If the feature requires complex UI, create reusable components in the `app/components/` directory.
    -   Organize your components into the appropriate subdirectory (`admin/`, `public/`, `user/`, or `reusables/`).

4.  **Add Business Logic**:
    -   If the feature requires new business logic (e.g., interacting with a database), add a new file or function to the appropriate subdirectory in `app/services/`.
    -   Keep business logic separate from your UI components.

5.  **Add Utilities or Hooks**:
    -   If you need new utility functions, add them to `app/lib/`.
    -   If you need a new custom hook, add it to `app/hooks/`.

6.  **State Management**:
    -   For client-side state, use `jotai`. Define your atoms in `app/lib/store/` and use them in your components.

7.  **Styling**:
    -   Use Tailwind CSS for styling.
    -   Follow the existing conventions for class names and component styling.

## Conventions

-   **File Naming**: Use kebab-case for file names (e.g., `my-feature.tsx`).
-   **Component Naming**: Use PascalCase for component names (e.g., `MyFeature`).
-   **Code Style**: Follow the existing code style and formatting. This project uses ESLint to enforce code style.
-   **Data Flow**: Adhere to the Remix data flow principles. Fetch data in `loader` functions and mutate data in `action` functions.
-   **Types**: Add types for all new functions, variables, and props.
