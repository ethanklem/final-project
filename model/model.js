var homeContent = ` <div class="hero">
<div class="heroText">
    <p class="header">Header goes here</p>
    <p class="smallerText">Less important text goes here</p>
    <p class="loremHero">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Fugiat aliquid minus nemo sed est.</p>
    <button class="heroBtn">Read More</button>
</div>
</div>

<section class="quote">
<div class="homeQuote">
    <p class="theQuote">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <p class="name">John Smith <br> <span class="job">Corporation CEO, books author.</span> </p>
</div>
</section>


<section class="upcoming">
<h1>Upcoming Events:</h1>
<div class="allEvents">
    <div class="event">
        <div class="date"> <span class="day"> 06</span> <br> <span class="month">JUN</span> </div>
        <div class="bothText">
        <p class="topText">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottomText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>

    <div class="event">
        <div class="date"> <span class="day"> 06</span> <br> <span class="month">JUN</span> </div>
        <div class="bothText">
        <p class="topText">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottomText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>

    <div class="event">
        <div class="date"> <span class="day"> 06</span> <br> <span class="month">JUN</span> </div>
        <div class="bothText">
        <p class="topText">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottomText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>

    <div class="event">
        <div class="date"> <span class="day"> 06</span> <br> <span class="month">JUN</span> </div>
        <div class="bothText">
        <p class="topText">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottomText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>

    <div class="event">
        <div class="date"> <span class="day"> 06</span> <br> <span class="month">JUN</span> </div>
        <div class="bothText">
        <p class="topText">Sed et persipiatis unde omnis iste natus</p>
        <p class="bottomText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>
</div>
</section>


`;
var aboutContent = "";
var galleryContent = "";
var blogContent = "";
var contactContent = "";


var foodContent = "";

var deejayContent = "";

var speechContent = ""

var foodfestContent = "";

var internationalContent = "";


 
export function getPageContent (pageId, callback) {
    $("#app").html(eval(pageId));
//    if (callback) {
//        callback();
//     }
}

