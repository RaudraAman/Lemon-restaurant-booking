# Design rationale and wireframe

This project follows Little Lemon's familiar green/yellow palette, rounded card surfaces, prominent reservation call-to-action, clear hierarchy, and mobile-first behavior. This is an independently authored design based on publicly shared capstone references, **not an assertion of pixel-perfect alignment with an unknown learner-specific Figma file**.

## Desktop wireframe

```text
+----------------------------------------------------------------+
| 🍋 LITTLE LEMON      Home   Menu   About   Reservations   Book   |
+----------------------------------------------------------------+
| DARK GREEN HERO                         | FOOD PHOTOGRAPH       |
| Little Lemon / Chicago                  |                       |
| Intro and [Reserve a table]             |                       |
+----------------------------------------------------------------+
| THIS WEEK'S SPECIALS                                            |
| [Greek salad]       [Bruschetta]       [Lemon dessert]          |
+----------------------------------------------------------------+
| ABOUT US / story                        | FOOD PHOTO            |
+----------------------------------------------------------------+
| FOOTER: brand / links / visit                                   |
+----------------------------------------------------------------+

BOOKING PAGE
+----------------------------------------------------------------+
| DARK GREEN RESERVATION BANNER                                   |
+----------------------------------------------------------------+
| Welcome / photo         | Book your table                       |
|                         | [Date]         [Time]                 |
|                         | [Guests]       [Occasion]             |
|                         | [Name]         [Email]                |
|                         | [Confirm reservation]                 |
+----------------------------------------------------------------+
```

## Mobile wireframe

```text
+------------------------+
| Logo            Menu ☰ |
| HERO COPY              |
| [Reserve a table]      |
| HERO IMAGE             |
| Specials (stacked)     |
| About (stacked)        |
| Footer                 |
+------------------------+

BOOKING
+------------------------+
| Reservation banner     |
| Intro                  |
| Date                   |
| Time                   |
| Guests                 |
| Occasion               |
| Name                   |
| Email                  |
| [Confirm reservation]  |
+------------------------+
```

## Accessibility

Semantic landmarks, labels tied to inputs, descriptive alternative text for decorative image regions, keyboard-accessible navigation, visible focus outlines, aria-invalid and role=alert errors, skip link, and high-contrast buttons.
