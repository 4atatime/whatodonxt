/* =========================================================
   ✿ THE ANSWERS POOL ✿
   ---------------------------------------------------------
   - One answer per line, inside "double quotes", with a comma at the end.
   - Put the green highlighted word(s) in [square brackets]:
         "think about [water]."   →   think about (water).   ← "water" in green
   - To add an answer: copy any line, paste it, change the words. That's it.
   - Need a " inside an answer? Use curly quotes “ ” instead.
   - Order doesn't matter: they get shuffled, and nothing repeats
     until every answer has been shown once (or the page is reloaded).
   ========================================================= */

const ANSWERS = [
  "drink a glass of water (200-500ml), slowly stand up, and think about [water] for a while.",
  "do some [yoga] with the people you live with, or just by yourself, and pay attention to your [tip toes].",
  "rinse and dry an apple, then softly place your [lips] on its skin, as if you were whispering to the seeds inside.",
  "put on a Werner Herzog film around 10pm, with only one dim, warm light on, in bed or on the sofa, and [dive in].",
  "ask a friend to send you a song they've been listening to lately. play it, and wander through your [memories] with them.",
  "cook a dish you've never tried before, with a [random album] by your fav musician playing in the background.",
  "go downstairs, and only walk in the direction the [cigarette butts] on the pavement are pointing.",
  "find a cozy spot to watch people come and go, and [imagine] what a kid would think about all of it.",
  "look out of your window for a building you've never been inside. then [go visit] it, quickly, before you change your mind.",
  "look around for something in your favorite color, and carry [that color] in your mind for the rest of the day.",

  // new ones
  "walk somewhere that's a bit too far to walk to. no music, no map, let your [feet] decide the way back.",
  "open a random book on page 64 and read only one sentence. that's your [sentence] for today.",
  "give the streets around you [secret names], as if you lived in a city only you know about.",
  "make one small [mistake] on purpose today, and treat it like it was the plan all along.",
  "sit by an open window and listen to everything like it's an album. the fridge counts, the birds count, [everything counts].",
  "sit next to someone you like without talking much, like two [trees] growing side by side.",
  "make a cup of coffee, sit very still, and wait for an idea the way you'd wait for a [fish] to bite.",
  "look out of the window and say today's [weather report] out loud, even if nobody is listening.",
  "draw a map of your neighborhood from memory, then use it to get a little [lost].",
  "water a plant, and tell it one small [secret] while you're at it.",
  "text someone you haven't talked to in a while, just “hi, thought of you”, and [nothing else].",
  "put your hand on a tree, close your eyes, and guess [how old] it is.",
];

// Shown once after every answer above has been seen. The next tap starts a new round.
const ALL_SEEN = "that's [every single one]. go try one of them, or tap again to start over.";
