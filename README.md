# whatodonxt

A flower that tells you what to do next. Live: https://4atatime.github.io/whatodonxt/

## Status

Live from the `main` branch (GitHub Pages). Redesign done in the `redesign` branch and merged.

- Works on phone, tablet and desktop (two columns from 860px wide).
- Flower spins on tap; answers fade in, never repeat until all are seen (or page reload).
- Share: native share sheet, or copies the link ("copied!").
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
| share message            | `main.js`      | `text:`                |
| colours, sizes           | `style.css`    | `:root` (top)          |

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

## Run locally

`python3 -m http.server` → http://localhost:8000
