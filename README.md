
# Compliment Generator

**Tech Stack:** HTML | CSS | JavaScript (Vanilla)

A charming, old-school-styled web app that delivers random compliments across various categories—romantic, funny, motivational, friendly—complete with features like voice narration, favorites management, shareable links via a custom modal, and dark mode.

---

## Features

* **Category-Based Compliments**
  Choose from multiple categories before generating a compliment (e.g., Romantic, Funny, Motivational, Friendly).

* **Random Generation**
  Hit the **New Compliment** button to display a fresh, randomly selected compliment from the chosen category.

* **Text-to-Speech**
  Hear the compliment aloud via the **Speak** button—leveraging the Web Speech API.

* **Favorites Management**
  Save your favorite compliments to the **Favourites** panel; duplicate entries are prevented for a cleaner UX.

* **Share Modal**
  Click **Share** to open a modal where you can:

  * Copy the compliment to clipboard with one click.
  * Share directly on WhatsApp, Instagram, Twitter, or LinkedIn via pre-filled links.

* **Dark Mode**
  Toggle between light and dark themes using the **Dark Mode** button.

* **Responsive Design**
  The layout adapts gracefully across devices—mobile, tablet, and desktop.

---

## Code Breakdown

### HTML (`index.html`)

* Wrapped inside `.complimentBox`, featuring a paper-like aesthetic with a washi-tape header.
* Contains elements for category selection, compliment display, action buttons, and the favourites bar.
* Includes the share modal template (hidden by default).

### CSS (`compli.css`)

* Old-school, cozy aesthetics: dashed paper borders, vintage color palette, typewriter-like font.
* Smooth transitions for modal scaling and theme toggles.
* Media queries ensure compatibility on all screen sizes.

### JavaScript (`compli.js`)

* **Selectors & Data:** Targets DOM elements and stores compliments grouped by category.
* **Event Handling:**

  * **New Compliment:** Picks a random compliment from the selected category.
  * **Speak:** Uses `SpeechSynthesisUtterance`.
  * **Favorites:** Stores unique items and prevents duplicates.
  * **Share Modal:** Populates modal with the compliment, sets up social sharing URLs using `encodeURIComponent()`, handles copy-to-clipboard and closing interactions.
  * **Dark Mode:** Toggles a CSS class for theme switch.

---

## Why It Stands Out

* **Thoughtful UX**: Smooth animations, intuitive action flows, and clear user feedback (e.g., “Copied!”).
* **Modular & Clean Code**: Files are separated logically, making maintenance and enhancements straightforward.
* **Feature-Rich Yet Lightweight**: No heavy frameworks—just lean, vanilla JS delivering full functionality.
* **Shareability Built-In**: Seamless integration with social platforms encourages user engagement.

---

## Future Enhancements

* Add **emoji icons** next to category options.
* Enable **removing items** from the favorites list.
* Introduce **animations** like gentle confetti when a new compliment appears.
* Enhance accessibility support (e.g., better ARIA labels, keyboard navigation).
* Add **persistence** using `localStorage` so favorites remain across sessions.


