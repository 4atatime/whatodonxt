/* =========================================================
   whatodonxt — all the little interactions (plain JS, no libraries)
   ========================================================= */

const SITE_URL = 'https://4atatime.github.io/whatodonxt/';

const flower = document.getElementById('flower');
const answer = document.getElementById('answer');   // only exists on content.html


/* ---- spin the flower: each tap adds a bit more than a full turn ---- */
let angle = 0;
function spin() {
  angle += 300 + Math.random() * 240;   // lands at a slightly different angle every time
  flower.style.transform = `rotate(${angle}deg)`;
}


/* ---- home page: spin, fade the text out, then open the answer page ---- */
if (flower && !answer) {
  flower.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;   // cmd/ctrl-click still opens a new tab
    e.preventDefault();
    spin();
    document.body.classList.add('leaving');
    setTimeout(() => { location.href = flower.href; }, 550);
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

  // tap: spin, fade the old answer out, swap it, fade the new one in
  let swapTimer;
  flower.addEventListener('click', () => {
    spin();
    answer.classList.add('swap');
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => {
      answer.innerHTML = format(nextAnswer());
      answer.classList.remove('swap');
    }, 280);
  });
}


/* ---- share button (footer, both pages) ---- */
const shareButton = document.getElementById('share');
const toast = document.getElementById('toast');

shareButton.addEventListener('click', async () => {
  // phones (and some browsers): open the native share sheet
  if (navigator.share) {
    try {
      await navigator.share({ title: 'whatodonxt', text: 'not sure what to do next? ask the flower:', url: SITE_URL });
      return;
    } catch (err) {
      if (err.name === 'AbortError') return;   // share sheet was closed, that's fine
    }
  }
  // everywhere else: copy the link instead
  try {
    await navigator.clipboard.writeText(SITE_URL);
    showToast('copied!');
  } catch {
    showToast(SITE_URL);   // clipboard blocked: at least show the link
  }
});

// small bubble above the share button that disappears by itself
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}
