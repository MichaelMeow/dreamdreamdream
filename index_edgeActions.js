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
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         var mySound = new buzz.sound( "sounds/shipsounds", {
             formats: [ "ogg", "mp3", "acc" ]
         });
         
         mySound.play()
             .fadeIn()
             .loop()
             .bind( "timeupdate", function() {
                var timer = buzz.toTimer( this.getTime() );
                document.getElementById( "timer" ).innerHTML = timer;
             });

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_work2}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/work", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Camp}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/camp", "_self");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_join}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("join");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_birds3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("game");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nest2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/contact", "_self");
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_theater3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/theater", "_self");
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_sagansign2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/institute", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_store2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/store", "_self");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_eventsbutton}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/events", "_self");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mushies}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.dreamdreamdream.org/join", "_self");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_picklereveal}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.kickstarter.com/projects/651896065/smores-campfire-kit", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Check if a new cache is available on page load.
         window.addEventListener('load', function(e) {
         
           window.applicationCache.addEventListener('updateready', function(e) {
             if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
               // Browser downloaded a new app cache.
               // Swap it in and reload the page to get the new hotness.
               window.applicationCache.swapCache();
               if (confirm('A new version of this site is available. Load it?')) {
                 window.location.reload();
               }
             } else {
               // Manifest didn't changed. Nothing new to server.
             }
           }, false);
         
         }, false);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'work'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18496, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("work");
   //Edge symbol end:'work'

   //=========================================================
   
   //Edge symbol: 'Camp'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44737, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("Camp");
   //Edge symbol end:'Camp'

   //=========================================================
   
   //Edge symbol: 'Theater'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31682, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("Theater");
   //Edge symbol end:'Theater'

   //=========================================================
   
   //Edge symbol: 'Clouds'
   (function(symbolName) {   
   
   })("Clouds");
   //Edge symbol end:'Clouds'

   //=========================================================
   
   //Edge symbol: 'nest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33496, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("nest");
   //Edge symbol end:'nest'

   //=========================================================
   
   //Edge symbol: 'birds'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3291, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("birds");
   //Edge symbol end:'birds'

   //=========================================================
   
   //Edge symbol: 'shark'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8128, function(sym, e) {
         sym.play("loop");
         

      });
      //Edge binding end

   })("shark");
   //Edge symbol end:'shark'

   //=========================================================
   
   //Edge symbol: 'theater'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23496, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("theater");
   //Edge symbol end:'theater'

   //=========================================================
   
   //Edge symbol: 'book'
   (function(symbolName) {   
   
   })("book");
   //Edge symbol end:'book'

   //=========================================================
   
   //Edge symbol: 'campdeck'
   (function(symbolName) {   
   
   })("campdeck");
   //Edge symbol end:'campdeck'

   //=========================================================
   
   //Edge symbol: 'camppizza'
   (function(symbolName) {   
   
   })("camppizza");
   //Edge symbol end:'camppizza'

   //=========================================================
   
   //Edge symbol: 'theaterseats'
   (function(symbolName) {   
   
   })("theaterseats");
   //Edge symbol end:'theaterseats'

   //=========================================================
   
   //Edge symbol: 'workinside'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1502, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 588, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2331, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("workover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("workout");
         

      });
      //Edge binding end

   })("workinside");
   //Edge symbol end:'workinside'

   //=========================================================
   
   //Edge symbol: 'worksign'
   (function(symbolName) {   
   
   })("worksign");
   //Edge symbol end:'worksign'

   //=========================================================
   
   //Edge symbol: 'theaterinside'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_theater2}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("theaterover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_theater2}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("theaterout");
         

      });
      //Edge binding end

   })("theaterinside");
   //Edge symbol end:'theaterinside'

   //=========================================================
   
   //Edge symbol: 'sheet'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1410, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 854, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2246, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_theatersign2}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("theaterover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("theaterout");
         

      });
      //Edge binding end

   })("sheet");
   //Edge symbol end:'sheet'

   //=========================================================
   
   //Edge symbol: 'campinside'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2557, function(sym, e) {
         sym.stop();
         // play the timeline from the given position (ms or label)
         sym.play("camprainbow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 845, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2948, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("campover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("campout");
         

      });
      //Edge binding end

   })("campinside");
   //Edge symbol end:'campinside'

   //=========================================================
   
   //Edge symbol: 'nestinside'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 890, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2733, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3677, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("nestover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("nestout");
         

      });
      //Edge binding end

   })("nestinside");
   //Edge symbol end:'nestinside'

   //=========================================================
   
   //Edge symbol: 'store'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_store}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("store");
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 895, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1832, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2879, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("storeover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("storeout");
         

      });
      //Edge binding end

   })("store");
   //Edge symbol end:'store'

   //=========================================================
   
   //Edge symbol: 'sagansign'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 964, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2201, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2896, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle8}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("out");
         

      });
      //Edge binding end

   })("sagansign");
   //Edge symbol end:'sagansign'

   //=========================================================
   
   //Edge symbol: 'picklereveal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle9}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1938, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2375, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 883, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle9}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle9}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("out");
         

      });
      //Edge binding end

   })("picklereveal");
   //Edge symbol end:'picklereveal'

   //=========================================================
   
   //Edge symbol: 'mushies'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 809, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1638, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("over");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3617, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseleave", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("out");
         

      });
      //Edge binding end

   })("mushies");
   //Edge symbol end:'mushies'

   //=========================================================
   
   //Edge symbol: 'jets'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1204, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

   })("jets");
   //Edge symbol end:'jets'

})(jQuery, AdobeEdge, "EDGE-1529726274");