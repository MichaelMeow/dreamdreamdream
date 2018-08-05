/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'theaterbg',
            type:'image',
            rect:['0px','0','100%','680px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"theaterbg.jpg",'50%','50%','100%','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['auto','816px','1843px','2184px','0px','auto'],
            fill:["rgba(57,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'justseats',
            type:'image',
            rect:['auto','553px','1843px','263px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"justseats.png",'0px','0px']
         },
         {
            id:'theaterplaylist2',
            type:'image',
            rect:['-4px','690px','1008px','2462px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"theaterplaylist2.png",'0px','0px']
         },
         {
            id:'screen2',
            type:'rect',
            rect:['0%','-2','auto','auto','auto','auto']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['-6px','388px','134px','193px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'psa_button',
            type:'rect',
            rect:['260px','931px','525px','281px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'automatedmanbutton',
            type:'rect',
            rect:['260px','931px','525px','281px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'pdbutton',
            type:'rect',
            rect:['260px','931px','525px','281px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'truelovebutton',
            type:'rect',
            rect:['260px','931px','525px','281px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['219px','916px','617px','200px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'mteeriebutton',
            type:'rect',
            rect:['260px','931px','525px','281px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'vcontainer',
            type:'rect',
            rect:['26.7%','136px','500px','281px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle4',
            type:'rect',
            rect:['54px','62px','165px','141px','auto','auto'],
            cursor:['pointer'],
            opacity:0,
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle4Copy',
            type:'rect',
            rect:['54px','221px','165px','86px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle4Copy2',
            type:'rect',
            rect:['54px','315px','165px','86px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'screen2',
            symbolName:'screen'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "opacity", '0']
         ],
         "${_vcontainer}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", 'auto'],
            ["style", "left", '27.78%'],
            ["style", "width", '500px'],
            ["style", "top", '128px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '281px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1']
         ],
         "${_truelovebutton}": [
            ["style", "top", '1259px'],
            ["style", "opacity", '0'],
            ["style", "left", '243px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle4Copy}": [
            ["style", "top", '221px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '86px']
         ],
         "${_pdbutton}": [
            ["style", "top", '2585px'],
            ["style", "left", '204px'],
            ["style", "height", '249px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '564px']
         ],
         "${_theaterplaylist2}": [
            ["style", "top", '694px'],
            ["style", "height", '2462px'],
            ["style", "left", '-4px'],
            ["style", "width", '1008px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(57,0,0,1.00)'],
            ["style", "top", '799px'],
            ["style", "height", '3357px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "width", '1843px']
         ],
         "${_Rectangle4}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_justseats}": [
            ["style", "top", '553px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ],
         "${_mteeriebutton}": [
            ["style", "top", '1657px'],
            ["style", "left", '209px'],
            ["style", "height", '231px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '587px']
         ],
         "${_Rectangle4Copy2}": [
            ["style", "top", '315px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '86px']
         ],
         "${_theaterbg}": [
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '680px'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_screen2}": [
            ["style", "left", '27.8%'],
            ["style", "top", '-17px']
         ],
         "${_automatedmanbutton}": [
            ["style", "top", '1948px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '249px'],
            ["style", "opacity", '0'],
            ["style", "left", '204px'],
            ["style", "width", '564px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '916px'],
            ["style", "height", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '219px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '1000px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '2452px'],
            ["style", "width", '100%']
         ],
         "${_psa_button}": [
            ["style", "top", '2285px'],
            ["style", "opacity", '0'],
            ["style", "left", '204px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 685,
         autoPlay: true,
         labels: {
            "Truelove": 0
         },
         timeline: [
            { id: "eid159", tween: [ "style", "${_automatedmanbutton}", "top", '1482px', { fromValue: '1948px'}], position: 0, duration: 295 },
            { id: "eid161", tween: [ "style", "${_automatedmanbutton}", "height", '249px', { fromValue: '249px'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "style", "${_automatedmanbutton}", "width", '564px', { fromValue: '564px'}], position: 0, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Rectangle}", "height", '3357px', { fromValue: '3357px'}], position: 685, duration: 0, easing: "easeInOutQuad" },
            { id: "eid160", tween: [ "style", "${_automatedmanbutton}", "left", '204px', { fromValue: '204px'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "style", "${_screen2}", "left", '27.8%', { fromValue: '27.8%'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_psa_button}", "top", '1482px', { fromValue: '2285px'}], position: 0, duration: 295 },
            { id: "eid169", tween: [ "style", "${_psa_button}", "top", '1765px', { fromValue: '1482px'}], position: 295, duration: 390 },
            { id: "eid144", tween: [ "style", "${_mteeriebutton}", "top", '1145px', { fromValue: '1657px'}], position: 0, duration: 295 },
            { id: "eid143", tween: [ "style", "${_truelovebutton}", "left", '243px', { fromValue: '243px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${_pdbutton}", "width", '564px', { fromValue: '564px'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_pdbutton}", "top", '1482px', { fromValue: '2585px'}], position: 0, duration: 295 },
            { id: "eid171", tween: [ "style", "${_pdbutton}", "top", '2080px', { fromValue: '1482px'}], position: 295, duration: 390 },
            { id: "eid137", tween: [ "style", "${_vcontainer}", "left", '26.7%', { fromValue: '27.78%'}], position: 0, duration: 162 },
            { id: "eid155", tween: [ "style", "${_Rectangle3}", "left", '216px', { fromValue: '219px'}], position: 0, duration: 45, easing: "easeInOutQuad" },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "top", '-905px', { fromValue: '799px'}], position: 0, duration: 685, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "style", "${_truelovebutton}", "top", '748px', { fromValue: '1259px'}], position: 0, duration: 295 },
            { id: "eid172", tween: [ "style", "${_pdbutton}", "left", '216px', { fromValue: '204px'}], position: 0, duration: 685 },
            { id: "eid151", tween: [ "style", "${_Rectangle3}", "top", '897px', { fromValue: '916px'}], position: 0, duration: 45 },
            { id: "eid156", tween: [ "style", "${_Rectangle3}", "top", '805px', { fromValue: '897px'}], position: 45, duration: 55 },
            { id: "eid154", tween: [ "style", "${_Rectangle3}", "top", '676px', { fromValue: '805px'}], position: 100, duration: 45 },
            { id: "eid153", tween: [ "style", "${_Rectangle3}", "top", '467px', { fromValue: '676px'}], position: 145, duration: 80 },
            { id: "eid152", tween: [ "style", "${_Rectangle3}", "top", '401px', { fromValue: '467px'}], position: 225, duration: 70 },
            { id: "eid157", tween: [ "style", "${_theaterplaylist2}", "top", '180px', { fromValue: '694px'}], position: 0, duration: 295, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_pdbutton}", "height", '249px', { fromValue: '249px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_mteeriebutton}", "left", '209px', { fromValue: '209px'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_psa_button}", "left", '209px', { fromValue: '204px'}], position: 0, duration: 685 },
            { id: "eid148", tween: [ "style", "${_mteeriebutton}", "width", '587px', { fromValue: '587px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_justseats}", "top", '-1158px', { fromValue: '553px'}], position: 0, duration: 685, easing: "easeInOutQuad" },
            { id: "eid70", tween: [ "style", "${_vcontainer}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_mteeriebutton}", "height", '231px', { fromValue: '231px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_screen2}", "top", '-548px', { fromValue: '-17px'}], position: 0, duration: 162, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_vcontainer}", "top", '-388px', { fromValue: '128px'}], position: 0, duration: 162, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_vcontainer}", "top", '-388px', { fromValue: '-388px'}], position: 162, duration: 0 }         ]
      }
   }
},
"comingsoon": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['7.7%','0%','100%','100%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',119,'rgba(255,111,0,1.00)','normal','none',''],
      id: 'Text',
      text: 'COMING SOON',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0%'],
            ["style", "text-align", 'center'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["color", "color", 'rgba(255,111,0,1.00)'],
            ["style", "left", '7.65%'],
            ["style", "font-size", '119px']
         ],
         "${symbolSelector}": [
            ["style", "height", '387px'],
            ["style", "width", '654px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"vcontainersymbol": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '500px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"screen": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'screen',
      type: 'image',
      rect: ['auto','1.3%','100%','100%','26.4%','auto'],
      fill: ['rgba(0,0,0,0)','images/screen.png','50%','50%','1000px','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_screen}": [
            ["style", "top", '1.32%'],
            ["style", "right", '26.39%'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100%'],
            ["style", "background-size", [1000,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", 'auto'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '682px'],
            ["style", "width", '1000px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1597286518");
