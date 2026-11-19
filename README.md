# Little Lemon — Meta Front-End Developer Capstone

An original, responsive React + Vite restaurant reservation demo. The design is **inspired by** the Little Lemon brand style and publicly shared capstone wireframes; it is not a copy of another student's code or an official fixed Figma specification.

## Start

```bash
npm install
npm run dev
npm test
npm run build
```

## Peer-review rubric mapping

| Criterion | Implementation |
| --- | --- |
| UI/UX and wireframe | `src/styles.css`, homepage, booking page; see `DESIGN.md` |
| Semantic HTML | Header, Footer, Home, BookingPage, BookingForm |
| Mobile + desktop | CSS media queries at 900px and 620px |
| SEO / Open Graph | `index.html` |
| BookingForm child component | `BookingPage.jsx` renders `<BookingForm />` |
| Parent owns available times | `BookingPage.jsx` uses `useReducer(initializeTimes, updateTimes)` and passes `availableTimes` + `dispatch` |
| Client-side validation | `src/utils/booking.js` and accessible inline errors |
| Unit tests | `src/tests/` |
| Passing tests | `npm test` |

## Booking flow

Home → Reserve a table → Choose date/time/guests/occasion/name/email → Validate → Confirmation. Date changes update available slots from the parent. Availability is **deterministic mock data**, not a live reservation service. No real booking is created or persisted.

## Design references

- https://github.com/CamiloMedel/LittleLemon-Capstone (public Figma process and prototype)
- https://github.com/NaNcmyk/Little-Lemon (public Figma and Little Lemon style guide explanation)

Brand colors: green `#495E57`, yellow `#F4CE14`, peach `#EE9972`. Typography: Markazi Text and Karla. The visual treatment and layout here are independently implemented.

## Notes for reviewers

- Run `npm install && npm test && npm run dev`.
- Check the reservation form and try invalid inputs.
- Resize browser to 375px, 768px and 1440px.
- This demo uses no backend; confirmation is illustrative only.
- Open Graph image and URL tags should be added after deployment when real public URLs exist.

## Local restaurant assets

This version uses **local image files** rather than external Unsplash image URLs or emoji food placeholders. See [ASSET-SOURCES.md](ASSET-SOURCES.md) and [ASSET-LICENSE.txt](ASSET-LICENSE.txt) for attribution and rights notes.
