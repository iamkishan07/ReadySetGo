# ReadySetGo

A simple and responsive interview-preparation tracker built to help you organize your practice questions and track your learning progress in one place.

Add questions, categorize them by topic and difficulty, update their status, and monitor your progress through a clean dashboard. ReadySetGo also includes a dedicated progress page, a machine-coding progress card, and dark and light themes.

Your questions and theme preferences are saved automatically in your browser using `localStorage`, so your data remains available when you revisit the app in the same browser.

**Built with:** React, Tailwind CSS, Redux Toolkit, React Router DOM, React Hook Form, and Vite.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Application Routes](#application-routes)
7. [How the App Works](#how-the-app-works)
8. [State Management with Redux Toolkit](#state-management-with-redux-toolkit)
9. [Data Persistence with LocalStorage](#data-persistence-with-localstorage)
10. [Dashboard and Progress Tracking](#dashboard-and-progress-tracking)
11. [Responsive Design](#responsive-design)
12. [Dark and Light Theme](#dark-and-light-theme)
13. [Form Validation](#form-validation)
14. [Customization](#customization)
15. [Deployment](#deployment)
16. [Troubleshooting](#troubleshooting)
17. [Known Limitations](#known-limitations)
18. [Future Improvements](#future-improvements)
19. [License](#license)

---

## Features

### Dashboard
- Summary cards displaying question statistics.
- Machine-coding progress card.
- Recent questions section showing up to six questions.
- Overall completion donut chart.
- Category-wise progress bars.
- Automatically calculated statistics based on the question list.

### Question Tracker
- View and manage your practice questions in one place.
- Filter questions by category, status, and difficulty.
- Search questions using the search bar.
- Update a question's status directly from the tracker.
- Delete questions you no longer need.
- Display category, difficulty, and status using reusable badges.

### Add Question
- Add new interview-preparation questions through a dedicated form.
- Choose a category, difficulty, and initial status.
- Validate required fields before submitting.
- Automatically update the question list and dashboard after adding a question.

### Progress Tracking
- View your overall completion percentage.
- Track completed, pending, and in-progress questions.
- Monitor progress across different categories.
- See visual progress indicators to understand your preparation at a glance.

### Theme Support
- Switch between dark and light themes.
- Save the selected theme in `localStorage`.
- Apply the saved theme when reopening the application.

### Responsive Interface
- Layout adapts to desktop, tablet, and mobile screens.
- Responsive navigation for smaller screens.
- Flexible dashboard cards and progress sections.
- Horizontally scrollable question table on smaller screens.
- Mobile-friendly forms, filters, and action buttons.

### Local Data Storage
- Questions and theme preferences are saved automatically.
- Data remains available after refreshing the page.
- No backend or database is required to run the application locally.

---

## Tech Stack

| Purpose | Technology |
|---|---|
| Frontend UI | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Global State Management | Redux Toolkit |
| Redux Integration | React Redux |
| Client-Side Routing | React Router DOM |
| Form Handling and Validation | React Hook Form |
| Data Persistence | Browser LocalStorage |
| Charts | Custom SVG donut chart and progress bars |
| Language | JavaScript (JSX) |

> Package versions are managed through `package.json`. Check that file for the exact versions installed in your project.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js:** Use a version supported by your installed Vite version.
- **npm:** Included with Node.js.
- **Git:** Optional, if you want to clone the repository.

Check your installed versions:

```bash
node -v
npm -v
```

### Installation

**1. Clone the repository**

Replace the repository URL below with your actual GitHub repository URL.

```bash
git clone <your-repository-url>
```

**2. Navigate to the project folder**

```bash
cd preptrack
```

Use your actual project folder name if it is different.

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

The development server supports hot reloading, so changes to your source files appear in the browser during development.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Previews the production build locally. |

Run the production build before deploying:

```bash
npm run build
```

---

## Project Structure

The following is a representative structure of the application. Keep the file names aligned with your actual project.

```text
ReadySetGo/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── constants.js
    ├── utils.js
    ├── storage.js
    │
    ├── store/
    │   ├── store.js
    │   ├── questionsSlice.js
    │   └── themeSlice.js
    │
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── StatCard.jsx
    │   ├── ProgressBar.jsx
    │   ├── DonutChart.jsx
    │   ├── Badge.jsx
    │   ├── SearchBar.jsx
    │   ├── FilterBar.jsx
    │   ├── CategoryProgress.jsx
    │   ├── RecentQuestions.jsx
    │   ├── EmptyState.jsx
    │   └── CompletionRing.jsx
    │
    └── pages/
        ├── Dashboard.jsx
        ├── QuestionTracker.jsx
        ├── Progress.jsx
        └── AddQuestion.jsx
```

**Main files and their responsibilities**

- `main.jsx` — Initializes React and provides the Redux store and router.
- `App.jsx` — Defines the main application layout and page routes.
- `index.css` — Contains Tailwind directives and shared styling classes.
- `constants.js` — Stores category, difficulty, status, and color configuration.
- `utils.js` — Contains helper functions for calculating statistics and percentages.
- `storage.js` — Handles reading and writing saved application data.
- `store.js` — Configures the Redux store and persistence logic.
- `questionsSlice.js` — Manages question-related state and actions.
- `themeSlice.js` — Manages the selected theme.
- `components/` — Contains reusable UI elements.
- `pages/` — Contains the main application screens.

---

## Application Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Dashboard | View overall statistics and recent questions. |
| `/tracker` | Question Tracker | Search, filter, update, and delete questions. |
| `/progress` | Progress | Review completion statistics and category progress. |
| `/add` | Add Question | Add a new question to your tracker. |

The application uses React Router DOM for client-side navigation, allowing users to move between pages without reloading the entire application.

---

## How the App Works

ReadySetGo follows a straightforward data flow:

```text
        ┌──────────────┐   dispatch(action)   ┌─────────────────┐
 User → │  Page / Form │ ───────────────────▶ │  Redux slice    │
        └──────────────┘                      │  (reducer)      │
               ▲                              └────────┬────────┘
               │ useSelector                           │ new state
               │                                       ▼
        ┌──────┴───────┐   store.subscribe    ┌─────────────────┐
        │ Re-render UI │ ◀─────────────────── │  Redux store    │
        └──────────────┘                      └────────┬────────┘
                                                       │ save
                                                       ▼
                                              ┌─────────────────┐
                                              │  localStorage   │
                                              └─────────────────┘
```

The main steps are:

1. A user performs an action, such as adding a question or changing its status.
2. The component dispatches the corresponding Redux action.
3. The relevant reducer updates the application state.
4. Components using `useSelector` receive the updated state and re-render.
5. The store's persistence logic saves the updated data to `localStorage`.
6. When the application starts again, saved data is loaded as the initial state.

### Example: Adding a Question

1. The user opens the Add Question page.
2. The form collects the question title, category, difficulty, and status.
3. React Hook Form validates the submitted data.
4. If validation succeeds, the component dispatches `addQuestion(formData)`.
5. The questions reducer adds the new question to the list.
6. The application navigates to the Question Tracker page.
7. The dashboard and progress statistics update automatically from the new question list.

---

## State Management with Redux Toolkit

Redux Toolkit provides a centralized place to manage questions and theme preferences.

### Questions Slice

The questions slice manages the question list and machine-coding information.

A representative state structure is:

```js
{
  list: [
    {
      id: "unique-id",
      title: "Two Sum",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending"
    }
  ],
  machineCoding: {
    status: "In Progress",
    percent: 50,
    description: "Practice machine-coding problems"
  }
}
```

The exact fields and initial values depend on the implementation in `questionsSlice.js`.

### Main Question Actions

| Action | Purpose |
|---|---|
| `addQuestion(formData)` | Adds a question to the list. |
| `changeStatus({ id, status })` | Updates the status of a question. |
| `deleteQuestion(id)` | Deletes a question. |

### Question Categories

- DSA
- Git
- Technical

### Difficulty Levels

- Easy
- Medium
- Hard

### Question Statuses

- Pending
- In Progress
- Completed

These values help organize questions and calculate progress consistently across the application.

### Theme Slice

The theme slice stores the currently selected theme.

```js
{
  mode: "light"
}
```

The theme toggle dispatches `toggleTheme()`, switching between light and dark modes.

### Calculated Statistics

Helper functions in `utils.js`, such as `getStats()` and `toPercent()`, help calculate values used by the dashboard and progress page.

Calculating statistics from the current question list prevents the dashboard from becoming inconsistent with the tracker.

---

## Data Persistence with LocalStorage

ReadySetGo uses the browser's `localStorage` to save data without requiring a backend.

| Storage Key | Purpose |
|---|---|
| `preptrack-questions` | Saves questions and related question state. |
| `preptrack-theme` | Saves the selected theme. |

The actual keys should match those defined in your `storage.js` and Redux store implementation.

### How Persistence Works

- On the first visit, the application can use its initial sample questions.
- When questions or their statuses change, the updated state is saved.
- Deleted questions remain deleted after refreshing the page.
- The saved theme is restored when the app is reopened.

### Important Notes

- Data is stored separately for each browser and device.
- Data is not synchronized between devices.
- Clearing the website's local storage can remove saved data.
- Data in a private or incognito session may disappear when that session ends.
- There is no account-based backup or cloud synchronization.

To reset the application, open your browser's developer tools and navigate to **Application → Local Storage**. Remove the relevant ReadySetGo keys, then refresh the page.

---

## Dashboard and Progress Tracking

The dashboard gives a quick overview of interview preparation.

It includes:

- Summary cards for question totals and completion.
- Machine-coding progress.
- A recent questions section.
- An overall completion donut chart.
- Category-wise progress indicators.

The progress page provides a more focused view of preparation progress, including status totals and category breakdowns.

These values are calculated from the current state rather than maintained as separate, manually updated totals.

**Completion percentage**

The general completion calculation is:

```text
Completion Percentage =
(Completed Questions / Total Questions) × 100
```

When there are no questions, the application should handle the division-by-zero case and display a sensible default, such as `0%`.

---

## Responsive Design

ReadySetGo is designed to work across desktop, tablet, and mobile screens.

Responsive layout techniques include:

- Tailwind CSS responsive breakpoints.
- Flexible grid layouts for dashboard cards.
- Mobile-friendly spacing and form controls.
- Responsive navigation.
- Minimum-width protection for content containers.
- Horizontal scrolling for wide tables on small screens.
- Bottom spacing to prevent content from being hidden behind mobile navigation.

The goal is to keep the interface readable and usable without requiring the entire page to overflow horizontally on smaller devices.

---

## Dark and Light Theme

The application supports dark and light modes through a theme toggle.

Tailwind CSS can use class-based dark mode with the following configuration:

```js
darkMode: "class"
```

The application applies the `dark` class to the HTML element based on the current theme.

For example:

```jsx
<div className="bg-white text-slate-900 dark:bg-slate-800 dark:text-white">
  ReadySetGo
</div>
```

Shared styles in `index.css` may include reusable classes such as:

- `.card` — Shared panel styling.
- `.muted` — Secondary text styling.
- `.input` — Form input styling.

If your `index.html` contains an early theme initialization script, it can apply the saved theme before the page is displayed and help avoid a flash of the wrong theme during reload.

---

## Form Validation

The Add Question page uses React Hook Form to manage form values and validation.

Commonly used features include:

- `useForm()` — Initializes the form.
- `register()` — Connects input fields to the form.
- `handleSubmit()` — Handles valid form submission.
- `formState.errors` — Provides validation errors for display.

The question title should be required and contain at least three characters, according to the form validation rules.

Validation helps prevent empty or invalid question entries from being added to the tracker.

---

## Customization

| Requirement | Where to make changes |
|---|---|
| Add a category | Update the category configuration in `constants.js` and the related form options. |
| Change category or status colors | Update the corresponding style mappings in `constants.js`. |
| Start without sample questions | Set the initial question list to an empty array in `questionsSlice.js`. |
| Change machine-coding information | Update the initial machine-coding state and related UI. |
| Add a new page | Create a page component, configure its route in `App.jsx`, and add navigation. |
| Change the primary color | Update the relevant Tailwind color classes. |
| Modify question validation | Update the rules in `AddQuestion.jsx`. |
| Change persistence behavior | Update `storage.js` and the store initialization/subscription logic. |

---

## Deployment

ReadySetGo can be deployed to a static hosting platform such as Vercel, Netlify, or Cloudflare Pages.

### 1. Build the Project

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

### 2. Deploy

Connect your GitHub repository to your preferred hosting platform, select the Vite framework preset if available, and use the following settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`

### 3. Configure SPA Routing

Because the application uses `BrowserRouter`, the hosting platform must serve `index.html` for application routes such as `/tracker`, `/progress`, and `/add`.

Otherwise, opening or refreshing a nested route directly may return a 404 error.

**Vercel**

Create a `vercel.json` file in the project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Netlify**

Create a `public/_redirects` file with:

```text
/*  /index.html  200
```

Use the redirect configuration appropriate for your hosting platform.

---

## Troubleshooting

| Problem | Possible Solution |
|---|---|
| `npm run dev` fails | Check the Node.js version required by your installed Vite version and reinstall dependencies if needed. |
| Tailwind styles are missing | Confirm that `index.css` is imported and the Tailwind configuration includes the correct source files. |
| Saved data does not appear | Check the local storage keys, initialization logic, and browser console. |
| Old questions keep appearing | Remove the relevant question key from Local Storage and reload the app. |
| Dark mode does not switch | Check the theme slice, toggle action, and application of the `dark` class. |
| A nested route returns 404 after deployment | Configure the hosting platform to rewrite application routes to `index.html`. |
| A component displays `undefined` | Verify Redux state paths, initial values, and component props. |
| Dashboard numbers do not update | Confirm that the UI uses the latest Redux state and that the reducer updates the correct list. |

---

## Known Limitations

- Data is stored locally in the browser.
- There is no backend, login system, or cross-device synchronization.
- Questions can be added, deleted, and have their status changed; editing question details is not included unless implemented separately.
- There are no automated tests documented for the current version.
- The machine-coding progress card may use predefined progress data rather than a separate collection of tracked machine-coding questions.
- Clearing local storage can remove saved questions and preferences.

---

## Future Improvements

Possible improvements for future versions include:

- Edit existing questions.
- Add tags and custom categories.
- Sort questions by title, difficulty, or date.
- Track practice sessions and completion dates.
- Add question import and export.
- Add automated unit and component tests.
- Introduce authentication and cloud synchronization.
- Add accessibility improvements and keyboard navigation.

These are suggestions for future development, not claims that the features are already implemented.

---

## License

This project is intended for learning, practice, and personal use. Add a specific open-source license if you plan to distribute the project under one.