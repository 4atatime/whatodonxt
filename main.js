
var script = document.createElement('script');
script.src = 'jQuery.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);



var copyText= [
   '<div>drink a glass (200-500ml) of water, and then slowly stand up, think about (<span class="green bold">water</span>).</div>',
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

  $("#answer_text").html(copyText[Math.floor(Math.random()*copyText.length)])


//$('#flowerbutton').addEventListener('click', function(){
   //function_1();
      //var deg_temp =45;
      //deg_temp = deg_temp+460;
      //$("#flowerbutton").rotate(deg_temp);

   //function_2();
      //$("#answer_text").html(copyText[Math.floor(Math.random()*copyText.length)]);

//});

$(function() {
   $("#flowerbutton").click(function () {
     $("#answer_text").html(copyText[Math.floor(Math.random()*copyText.length)]);
   });
 
 });

 $('#sharebutton').on('click', () => {
   if (navigator.share) {
     navigator.share({
         title: 'Web Share API Draft',
         text: 'fun site that gives you shitty advices:',
         url: 'https://wicg.github.io/web-share/#share-method',
       })
       .then(() => console.log('thanks for sharing:)'))
       .catch((error) => console.log('shoot! something went wrong :(', error));
   } else {
     console.log('rejected by your browser, but you can still share it the old way.');
   }
 });