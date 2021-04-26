var homeContent = "<h1>Hey</h1>";
var aboutContent = "Hi";
var galleryContent = "gallery";
var blogContent = "blog";
var contactContent = "contact";


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

