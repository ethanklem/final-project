import * as MODEL from "../model/model.js";
// import {getName as MODEL} from "../model/model.js";



function init() {


    //   let currentHeroImage = "home";

   $("nav a").click(function(e) {
       let btnID = this.id;
       let contentID = btnID + "Content";
    
      if (btnID == "home") {
        //   $("nav").removeClass("navabout").addClass(".homenav");
            $("nav").css("position", "absolute");
            $("nav").removeClass("otherNav").removeClass("nav").addClass("homeNav")
            $("nav").addClass("whitelogo").removeClass("blacklogo");

      } else {
        $("nav").css("position", "relative");
          $("nav").addClass("otherNav").removeClass("homeNav");
          $("nav").addClass("blacklogo").removeClass("whitelogo");

      }

      

     

    
        MODEL.getPageContent(contentID, addPromoListeners);
      console.log(btnID)

      

     
   });
}

function addPromoListeners() {


$(".galleryPics a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log(btnID)

    
});

$(".blog a").click(function(e) {
    let btnID = this.id;
    let contentID = btnID + "Content";

    MODEL.getPageContent(contentID);
    
    console.log(btnID)
});



}




$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
    $("nav").css("position", "absolute");
    $("nav").removeClass("otherNav").removeClass("nav").addClass("homeNav")
    $("nav").addClass("whitelogo").removeClass("blacklogo");
   
})

