/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve
* function signatures and comments starting with 'Edge' to maintain the
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {


      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js",
         	callback: function() {
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");


      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','http://player.vimeo.com/video/68725495');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_psa_button}", "click", function(sym, e) {
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','http://www.youtube.com/embed/ipsIvWAQF4A');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_truelovebutton}", "click", function(sym, e) {
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','http://player.vimeo.com/video/23161809');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mteeriebutton}", "click", function(sym, e) {
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','https://player.vimeo.com/video/53181305');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "click", function(sym, e) {
         // insert code for mouse click here
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','http://player.vimeo.com/video/68725495');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_automatedmanbutton}", "click", function(sym, e) {
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','https://player.vimeo.com/video/76021786');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pdbutton}", "click", function(sym, e) {
         jQuery('html,body').animate({scrollTop:0},500);


         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").empty(youtubevid);

          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
         youtubevid.attr('src','http://player.vimeo.com/video/80758320');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "click", function(sym, e) {
         // insert code for mouse click here
         jQuery('html,body').animate({scrollTop:600},500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         jQuery('html,body').animate({scrollTop:1000},500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         jQuery('html,body').animate({scrollTop:1600},500);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'comingsoon'
   (function(symbolName) {

   })("comingsoon");
   //Edge symbol end:'comingsoon'

   //=========================================================

   //Edge symbol: 'vcontainersymbol'
   (function(symbolName) {

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").append(youtubevid);

          youtubevid.attr('type','text/html');
          youtubevid.attr('width','500');
          youtubevid.attr('height','281');
          youtubevid.attr('src','http://player.vimeo.com/video/23161809');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0

      });
      //Edge binding end

   })("vcontainersymbol");
   //Edge symbol end:'vcontainersymbol'

   //=========================================================

   //Edge symbol: 'screen'
   (function(symbolName) {

   })("screen");
   //Edge symbol end:'screen'

})(jQuery, AdobeEdge, "EDGE-1597286518");
