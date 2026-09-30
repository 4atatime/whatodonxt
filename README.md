# whatodonxt

A flower that tells you what to do next. Live: https://4atatime.github.io/whatodonxt/

## Status

Live from the `main` branch (GitHub Pages). Work happens in the `redesign` branch, gets previewed locally, then is merged into `main`.

- Works on phone, tablet and desktop (two columns from 860px wide).
- Tap the flower: it spins once (360°), then shows an answer. Answers never repeat until all are seen (or page reload).
- Everything fits on one screen, no scrolling. The green arrow is drawn by `main.js` and always points at the flower.
- "about" pop-up in the footer.
- No jQuery, no frameworks. Font: Fraunces (Google Fonts).

## Edit text on GitHub (no install needed)

1. Open https://github.com/4atatime/whatodonxt and click the file (see table).
2. Click the ✏️ pencil (top right of the file).
3. Edit, then **Commit changes…** → **Commit changes**.
4. The site updates in about 1 minute. Refresh it to see.

| what to edit             | file           | look for               |
|--------------------------|----------------|------------------------|
| answers (random pool)    | `answers.js`   | `const ANSWERS`        |
| "seen them all" line     | `answers.js`   | `const ALL_SEEN`       |
| home page text           | `index.html`   | `✏️ HOME TEXT`         |
| answer page footnote     | `content.html` | `✏️ ANSWER PAGE TEXT`  |
| about pop-up             | `index.html` **and** `content.html` | `✏️ ABOUT TEXT` |
| spin speed               | `main.js`      | `SPIN_TIME`            |
| colours, text sizes, margins | `style.css` | `:root` (top)         |
| flower size              | `style.css`    | `.flower` (`width`)    |

## Images (`iPhone 13/`)

- `daisy.png`: the flower on the pages.
- `flower.png`: the browser-tab icon and the link-preview image (kept separate on purpose).
- `icon/`: home-screen icons ("todo:" logo).

## Answers format

```js
  "water a plant, and tell it one small [secret] while you're at it.",
```

- One answer per line, in `"quotes"`, comma at the end.
- `[word]` shows as **(word)** in green.
- For quotes inside an answer use curly ones: “ ”.
- If the site shows no answer after an edit, a quote or comma is missing.

In HTML text: `<br>` = new line, `<b>…</b>` = bold, `<span class="green">…</span>` = green.

## Changes (redesign, Sept 2026)

- Responsive layout; sticky header (nothing slides under it); aligned margins.
- Smooth flower spin + page transition; answer fade.
- New footer: credit to 4atatime + share button. Instagram removed.
- Answers moved to `answers.js`, shuffled without repeats; 12 new answers; copy revised.
- Softer green `#86D68E`, background `#121412`, Fraunces italic.
- Removed jQuery, `.DS_Store`, unused CSS; added `<!DOCTYPE>`, viewport, flower favicon.

## Changes (update, Sept 30 2026)

- Smaller, lighter type; everything fits one phone screen; wider margins.
- Flower spin rebuilt: full 360° on every tap, then the page turns / a new answer appears. Works with "reduce motion" on.
- Share button replaced by an "about" pop-up. Logo on the answer page links home.
- Green arrow is now drawn in code and aims at the flower on any screen, 20% shorter, with space at both ends.
- New, sharper flower photo (`daisy.png`), 20% smaller so it has room to breathe.
- About pop-up shortened: "hello and welcome <3", link to Oblique Strategies (Wikipedia), website + Instagram.
- Answer page: the answer sits in the middle of the screen, right above the flower.

## Ideas / not done yet

- Link-preview image (`og:image`) still shows the old flower.

## Run locally

`python3 -m http.server` → http://localhost:8000
