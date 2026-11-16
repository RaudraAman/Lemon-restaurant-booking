# Little Lemon Restaurant Booking — Meta Front-End Capstone

A responsive, accessible React reservation demo built with Vite and React Router.

## Features
- Home page, booking form and confirmation page
- Date-based mock time slots, guest count (1–10), and occasion selection
- Client-side validation and accessible error messages
- Semantic HTML and responsive layout
- Session-based demo reservation persistence
- Unit and component tests with Vitest and React Testing Library

## Requirements
Node.js 18+ and npm.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite (usually http://localhost:5173).

## Tests
```bash
npm test
```

## Production build
```bash
npm run build
npm run preview
```

## Project structure
- `src/components/BookingForm.jsx`: form UI and state
- `src/pages/BookingPage.jsx`: booking screen
- `src/pages/ConfirmationPage.jsx`: reservation summary
- `src/utils/booking.js`: time slot rules, validation, formatting
- `src/services/reservations.js`: sessionStorage persistence

## Important limitations
This is a **frontend-only educational demo**, not a real reservation service. No API or backend is connected, and no real restaurant availability or booking is guaranteed. Availability slots are mock data; bookings are stored only in the current browser session. Real production booking requires server-side validation, inventory and concurrency controls, and a reservation API.

## Submission
Push the complete repository to GitHub and submit the public repository URL in Coursera's peer-graded assignment.
