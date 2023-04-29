alert('cool schtuff, get ready :)');

var script = document.createElement('script');
script.src = 'jQuery.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$(function() {
    var copyText= [
     '<div>do (<span class="green bold">yoga</span>) with people you live with, or just by yourself, while consentrating on your (<span class="green bold">tip toes</span>).</div>',
     '<div>rinse and dry an apple, then softly place your (<span class="green bold">lips</span>) on to its surface, as if you are talking to the seeds inside.</div>',
     '<div>put on a film by Werner Herzog around 10pm, having only a dim and warm light on, in bed or sofa and (<span class="green bold">dive in</span>).</div>',
     '<div>ask a friend to send you a song they have been listening to, put it on, while revisiting (<span class="green bold">memories</span>) with this friend.</div>',
     '<div>try cooking an unfamiliar dish, while having a (<span class="green bold">random album</span>) from your fav musician in the background.</div>',
     '<div>get downstairs, but only walk in the direction of (<span class="green bold">cigarette butts</span>) on the pavement</div>',
     '<div>find a cozy spot where you can watch people come and go, (<span class="green bold">imagine</span>) how a kid would think upon this.</div>',
     '<div>search for a building from your window that you have never been to, quickly (<span class="green bold">run to visit</span>).</div>',
     '<div>look around, find whatever item that is in your favorite color, have (<span class="green bold">this color</span>) in your mind.</div>'
    ];
    $("#flowerbutton").click(function () {
       $("#answer_text").html(copyText[Math.floor(Math.random()*copyText.length)]);
    });
  
  });

