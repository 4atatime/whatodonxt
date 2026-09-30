/* =========================================================
   whatodonxt — all the little interactions (plain JS, no libraries)
   ========================================================= */

const SPIN_TIME = 1000;   // how long one 360° spin takes, in milliseconds

const flower = document.getElementById('flower');
const spinner = flower.querySelector('.spin');
const answer = document.getElementById('answer');   // only exists on content.html


/* ---- spin the flower once, all the way round (360°) ----
   returns a promise that resolves when the spin is done */
let spinning = false;
function spin() {
  spinning = true;
  flower.classList.add('spinning');
  const done = spinner.animate
    ? spinner.animate(
        [{ transform: 'rotate(0turn)' }, { transform: 'rotate(1turn)' }],
        { duration: SPIN_TIME, easing: 'cubic-bezier(0.45, 0, 0.2, 1)' }
      ).finished.catch(() => {})
    : Promise.resolve();
  return done.then(() => {
    spinning = false;
    flower.classList.remove('spinning');
  });
}


/* ---- the green arrow: from the end of the text, curving right at the flower ----
   redrawn whenever the layout changes, so it always points at the flower */
const aim = document.querySelector('.aim');
const aimPath = aim.querySelector('path');
const aimFrom = document.querySelector('[data-aim]');   // the text the arrow starts from
const main = aim.parentElement;

function drawArrow() {
  const box = aim.getBoundingClientRect();
  const edge = box.right - parseFloat(getComputedStyle(main).paddingRight);

  // last line of the text
  const range = document.createRange();
  range.selectNodeContents(aimFrom);
  const lines = [...range.getClientRects()].filter((r) => r.width > 0);
  if (!lines.length) return aimPath.removeAttribute('d');
  const last = lines[lines.length - 1];

  // start: right after the last line, or just below it if there's no room on the right
  let x0 = last.right + 14, y0 = last.top + last.height * 0.55;
  if (edge - last.right < 56) { x0 = last.right - 28; y0 = last.bottom + 10; }
  x0 -= box.left; y0 -= box.top;

  // end: just outside the petals, on the line towards the flower's centre
  const f = flower.getBoundingClientRect();
  const cx = f.left + f.width / 2 - box.left;
  const cy = f.top + f.height / 2 - box.top;
  const reach = f.width * 0.5 + 14;
  const dist = Math.hypot(x0 - cx, y0 - cy);
  if (dist < reach + 30) return aimPath.removeAttribute('d');   // too close, skip the arrow
  let x1 = cx + (x0 - cx) / dist * reach;
  let y1 = cy + (y0 - cy) / dist * reach;

  // 20% shorter: trim 10% off each end, so it keeps a little distance from both text and flower
  const trim = 0.1, dx = x1 - x0, dy = y1 - y0;
  x0 += dx * trim; y0 += dy * trim;
  x1 -= dx * trim; y1 -= dy * trim;

  // a gentle curve, bulging outwards (like a hand-drawn arrow)
  const vx = x1 - x0, vy = y1 - y0, len = Math.hypot(vx, vy);
  const bend = len * 0.22;
  const qx = (x0 + x1) / 2 + vy / len * bend;
  const qy = (y0 + y1) / 2 - vx / len * bend;

  // arrowhead: two short strokes, following the curve's direction at the tip
  const tl = Math.hypot(x1 - qx, y1 - qy);
  const tx = (x1 - qx) / tl, ty = (y1 - qy) / tl;
  const head = 9, a = 0.5;   // length (px), half-angle (radians)
  const hx = (s) => x1 - head * (tx * Math.cos(a) - s * ty * Math.sin(a));
  const hy = (s) => y1 - head * (ty * Math.cos(a) + s * tx * Math.sin(a));

  const n = (v) => v.toFixed(1);
  aimPath.setAttribute('d',
    `M${n(x0)} ${n(y0)} Q${n(qx)} ${n(qy)} ${n(x1)} ${n(y1)} ` +
    `M${n(hx(1))} ${n(hy(1))} L${n(x1)} ${n(y1)} L${n(hx(-1))} ${n(hy(-1))}`);
}

drawArrow();
new ResizeObserver(drawArrow).observe(main);
if (document.fonts) document.fonts.ready.then(drawArrow);


/* ---- home page: spin, fade the text out, then open the answer page ---- */
if (!answer) {
  flower.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;   // cmd/ctrl-click still opens a new tab
    e.preventDefault();
    if (spinning) return;
    document.body.classList.add('leaving');
    spin().then(() => { location.href = flower.href; });
  });

  // coming back with the browser's back button: undo the fade-out
  window.addEventListener('pageshow', () => document.body.classList.remove('leaving'));
}


/* ---- answer page: show answers from answers.js, no repeats ---- */
if (answer) {
  // shuffle a copy of the pool (Fisher–Yates)
  function shuffled(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // take answers off a shuffled deck; when it's empty, say so and reshuffle
  let deck = shuffled(ANSWERS);
  function nextAnswer() {
    if (deck.length) return deck.pop();
    deck = shuffled(ANSWERS);
    return ALL_SEEN;
  }

  // [word] in answers.js  →  (word) in green bold, and ' → ’ (nicer apostrophe)
  function format(text) {
    return text
      .replace(/\[(.+?)\]/g, '(<span class="green bold">$1</span>)')
      .replace(/'/g, '’');
  }

  answer.innerHTML = format(nextAnswer());

  // tap: the old answer fades out while the flower spins, the new one appears when it stops
  flower.addEventListener('click', () => {
    if (spinning) return;
    answer.classList.add('swap');
    aim.classList.add('swap');
    spin().then(() => {
      answer.innerHTML = format(nextAnswer());
      drawArrow();
      answer.classList.remove('swap');
      aim.classList.remove('swap');
    });
  });
}


/* ---- "about" pop-up (footer, both pages) ---- */
const about = document.getElementById('about');

document.querySelector('[data-open-about]').addEventListener('click', () => about.showModal());

// close with the ×, or by tapping outside the box (Esc works by itself)
about.addEventListener('click', (e) => {
  const r = about.getBoundingClientRect();
  const outside = e.detail > 0 &&   // a real tap/click (not the Enter key)
    (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom);
  if (outside || e.target.closest('[data-close]')) about.close();
});
