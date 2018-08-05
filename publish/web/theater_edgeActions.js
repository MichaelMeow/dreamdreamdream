
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js",callback:function(){EC.centerStage(sym);EC.Parallax.setup(sym);}});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","click",function(sym,e){window.open("http://www.dreamdreamdream.org","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var youtubevid=$("<iframe/>");sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','500');youtubevid.attr('height','281');youtubevid.attr('src','http://player.vimeo.com/video/23161809');youtubevid.attr('frameborder','1');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_psa_button}","click",function(sym,e){jQuery('html,body').animate({scrollTop:0},0);var youtubevid=$("<iframe/>");sym.$("vcontainer").empty(youtubevid);sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','500');youtubevid.attr('height','281');youtubevid.attr('src','http://www.youtube.com/embed/ipsIvWAQF4A');youtubevid.attr('frameborder','1');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_truelovebutton}","click",function(sym,e){jQuery('html,body').animate({scrollTop:0},0);var youtubevid=$("<iframe/>");sym.$("vcontainer").empty(youtubevid);sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','500');youtubevid.attr('height','281');youtubevid.attr('src','http://player.vimeo.com/video/23161809');youtubevid.attr('frameborder','1');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mteeriebutton}","click",function(sym,e){jQuery('html,body').animate({scrollTop:0},0);var youtubevid=$("<iframe/>");sym.$("vcontainer").empty(youtubevid);sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','500');youtubevid.attr('height','281');youtubevid.attr('src','http://player.vimeo.com/video/53181305');youtubevid.attr('frameborder','1');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'comingsoon'
(function(symbolName){})("comingsoon");
//Edge symbol end:'comingsoon'

//=========================================================

//Edge symbol: 'vcontainersymbol'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){var youtubevid=$("<iframe/>");sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','500');youtubevid.attr('height','281');youtubevid.attr('src','http://player.vimeo.com/video/23161809');youtubevid.attr('frameborder','1');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
})("vcontainersymbol");
//Edge symbol end:'vcontainersymbol'

//=========================================================

//Edge symbol: 'screen'
(function(symbolName){})("screen");
//Edge symbol end:'screen'
})(jQuery,AdobeEdge,"EDGE-1597286518");