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
            id:'storewebtemp',
            display:'none',
            type:'image',
            rect:['0px','-1px','100.2%','103.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"storewebtemp.png",'0%','0%','100%','auto']
         },
         {
            id:'storeback',
            display:'none',
            type:'rect',
            rect:['95px','auto','187px','164px','auto','349px'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'kickbutton3',
            display:'none',
            type:'image',
            rect:['26.6%','54%','460px','201px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"kickbutton.png",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['39.5%','86.1%','265px','51px','auto','auto'],
            text:"COMING SOON!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',28,"rgba(255,255,255,1.00)","normal","none","italic"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_kickbutton3}": [
            ["style", "top", '54.01%'],
            ["style", "display", 'none'],
            ["style", "height", '201px'],
            ["style", "left", '26.61%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '460px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "min-width", '999.96px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_Text2}": [
            ["style", "top", '86.09%'],
            ["style", "width", '265px'],
            ["style", "height", '51px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "left", '39.49%'],
            ["style", "font-size", '28px']
         ],
         "${_storeback}": [
            ["style", "top", 'auto'],
            ["style", "height", '164px'],
            ["style", "left", '95px'],
            ["style", "bottom", '349px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '187px']
         ],
         "${_storewebtemp}": [
            ["style", "top", '0px'],
            ["style", "height", '103.48%'],
            ["style", "left", '0px'],
            ["style", "display", 'none'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '100.18%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "store": 0
         },
         timeline: [
            { id: "eid2575", tween: [ "style", "${_kickbutton3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2121", tween: [ "style", "${_kickbutton3}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutSine" },
            { id: "eid2463", tween: [ "style", "${_storewebtemp}", "top", '0px', { fromValue: '0px'}], position: 165, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1886", tween: [ "style", "${_storewebtemp}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1887", tween: [ "style", "${_storewebtemp}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" },
            { id: "eid1890", tween: [ "style", "${_storewebtemp}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1885", tween: [ "style", "${_storeback}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1888", tween: [ "style", "${_storeback}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" }         ]
      }
   }
},
"work": {
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
      id: 'workinside',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'workinside',
      symbolName: 'workinside'
   }   ]
   },
   states: {
      "Base State": {
         "${_workinside}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '302px'],
            ["style", "width", '355px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18496,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid1431", tween: [ "style", "${_workinside}", "top", '8px', { fromValue: '0px'}], position: 3000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1432", tween: [ "style", "${_workinside}", "top", '0px', { fromValue: '8px'}], position: 5000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1433", tween: [ "style", "${_workinside}", "top", '8px', { fromValue: '0px'}], position: 12659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid1434", tween: [ "style", "${_workinside}", "top", '0px', { fromValue: '8px'}], position: 14292, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1425", tween: [ "style", "${_workinside}", "left", '13px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1426", tween: [ "style", "${_workinside}", "left", '-13px', { fromValue: '13px'}], position: 3000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid1427", tween: [ "style", "${_workinside}", "left", '6px', { fromValue: '-13px'}], position: 7000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1428", tween: [ "style", "${_workinside}", "left", '-8px', { fromValue: '6px'}], position: 10000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid1429", tween: [ "style", "${_workinside}", "left", '21px', { fromValue: '-8px'}], position: 12703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid1430", tween: [ "style", "${_workinside}", "left", '0px', { fromValue: '21px'}], position: 16394, duration: 2102, easing: "easeInOutSine" }         ]
      }
   }
},
"Camp": {
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
      id: 'campinside',
      type: 'rect',
      rect: ['63','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'campinside',
      symbolName: 'campinside'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '284px'],
            ["style", "width", '353px']
         ],
         "${_campinside}": [
            ["style", "left", '63px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 44737,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid1654", tween: [ "style", "${_campinside}", "left", '76px', { fromValue: '63px'}], position: 0, duration: 10000, easing: "easeInOutQuad" },
            { id: "eid1655", tween: [ "style", "${_campinside}", "left", '50px', { fromValue: '76px'}], position: 10000, duration: 2938, easing: "easeInOutQuad" },
            { id: "eid1656", tween: [ "style", "${_campinside}", "left", '60px', { fromValue: '50px'}], position: 12938, duration: 1959, easing: "easeInOutQuad" },
            { id: "eid1657", tween: [ "style", "${_campinside}", "left", '47px', { fromValue: '60px'}], position: 14897, duration: 1958, easing: "easeInOutQuad" },
            { id: "eid1658", tween: [ "style", "${_campinside}", "left", '63px', { fromValue: '47px'}], position: 16855, duration: 5585, easing: "easeInOutQuad" },
            { id: "eid1659", tween: [ "style", "${_campinside}", "left", '52px', { fromValue: '63px'}], position: 22441, duration: 3614, easing: "easeInOutQuad" },
            { id: "eid1660", tween: [ "style", "${_campinside}", "left", '63px', { fromValue: '52px'}], position: 26055, duration: 2059, easing: "easeInOutQuad" },
            { id: "eid1661", tween: [ "style", "${_campinside}", "left", '51px', { fromValue: '63px'}], position: 28114, duration: 6886, easing: "easeInOutQuad" },
            { id: "eid1662", tween: [ "style", "${_campinside}", "left", '63px', { fromValue: '51px'}], position: 35000, duration: 9737, easing: "easeInOutQuad" },
            { id: "eid1663", tween: [ "style", "${_campinside}", "top", '0px', { fromValue: '0px'}], position: 12938, duration: 1959, easing: "easeInOutQuad" },
            { id: "eid1664", tween: [ "style", "${_campinside}", "top", '0px', { fromValue: '0px'}], position: 14897, duration: 1959, easing: "easeInOutQuad" },
            { id: "eid1665", tween: [ "style", "${_campinside}", "top", '8px', { fromValue: '0px'}], position: 22398, duration: 1599, easing: "easeInOutQuad" },
            { id: "eid1666", tween: [ "style", "${_campinside}", "top", '0px', { fromValue: '8px'}], position: 23997, duration: 2059, easing: "easeInOutQuad" }         ]
      }
   }
},
"Theater": {
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
      id: 'theater',
      type: 'image',
      rect: ['-2px','auto','385px','327px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/theater.png','0px','0px']
   },
   {
      id: 'sheet2',
      type: 'image',
      rect: ['-2px','-18px','385px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sheet2}": [
            ["style", "top", '-18px'],
            ["style", "-webkit-transform-origin", [17.61,38.14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [17.61,38.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [17.61,38.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [17.61,38.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [17.61,38.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-9px'],
            ["transform", "skewY", '0deg']
         ],
         "${_theater}": [
            ["style", "top", 'auto'],
            ["style", "left", '-2px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '327px'],
            ["style", "width", '385px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 31682,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid91", tween: [ "style", "${_sheet2}", "left", '-2px', { fromValue: '-9px'}], position: 0, duration: 7000, easing: "easeInOutQuad" },
            { id: "eid64", tween: [ "style", "${_sheet2}", "left", '27px', { fromValue: '-2px'}], position: 7000, duration: 3000, easing: "easeInOutQuad" },
            { id: "eid65", tween: [ "style", "${_sheet2}", "left", '8px', { fromValue: '27px'}], position: 10000, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid66", tween: [ "style", "${_sheet2}", "left", '-15px', { fromValue: '8px'}], position: 12000, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid67", tween: [ "style", "${_sheet2}", "left", '4px', { fromValue: '-15px'}], position: 14000, duration: 3000, easing: "easeInOutQuad" },
            { id: "eid68", tween: [ "style", "${_sheet2}", "left", '-10px', { fromValue: '4px'}], position: 17000, duration: 2703, easing: "easeInOutQuad" },
            { id: "eid69", tween: [ "style", "${_sheet2}", "left", '32px', { fromValue: '-10px'}], position: 19703, duration: 3691, easing: "easeInOutQuad" },
            { id: "eid70", tween: [ "style", "${_sheet2}", "left", '-2px', { fromValue: '32px'}], position: 23394, duration: 2102, easing: "easeInOutQuad" },
            { id: "eid89", tween: [ "style", "${_sheet2}", "left", '-9px', { fromValue: '-2px'}], position: 25496, duration: 6186, easing: "easeInOutQuad" },
            { id: "eid46", tween: [ "style", "${_theater}", "bottom", '-8px', { fromValue: '0px'}], position: 10000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid47", tween: [ "style", "${_theater}", "bottom", '0px', { fromValue: '-8px'}], position: 12000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid48", tween: [ "style", "${_theater}", "bottom", '-8px', { fromValue: '0px'}], position: 19659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid49", tween: [ "style", "${_theater}", "bottom", '0px', { fromValue: '-8px'}], position: 21292, duration: 2102, easing: "easeInOutSine" },
            { id: "eid39", tween: [ "style", "${_theater}", "left", '27px', { fromValue: '-2px'}], position: 7000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid40", tween: [ "style", "${_theater}", "left", '8px', { fromValue: '27px'}], position: 10000, duration: 2000, easing: "easeInSine" },
            { id: "eid41", tween: [ "style", "${_theater}", "left", '-15px', { fromValue: '8px'}], position: 12000, duration: 2000, easing: "easeOutSine" },
            { id: "eid42", tween: [ "style", "${_theater}", "left", '4px', { fromValue: '-15px'}], position: 14000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid43", tween: [ "style", "${_theater}", "left", '-10px', { fromValue: '4px'}], position: 17000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid44", tween: [ "style", "${_theater}", "left", '32px', { fromValue: '-10px'}], position: 19703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid45", tween: [ "style", "${_theater}", "left", '-2px', { fromValue: '32px'}], position: 23394, duration: 2102, easing: "easeInOutSine" },
            { id: "eid77", tween: [ "transform", "${_sheet2}", "skewY", '7deg', { fromValue: '0deg'}], position: 6575, duration: 730, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "transform", "${_sheet2}", "skewY", '-3deg', { fromValue: '7deg'}], position: 7305, duration: 695, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "transform", "${_sheet2}", "skewY", '7deg', { fromValue: '-3deg'}], position: 8000, duration: 1492, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "transform", "${_sheet2}", "skewY", '-5deg', { fromValue: '7deg'}], position: 9492, duration: 2314, easing: "easeInOutQuad" },
            { id: "eid82", tween: [ "transform", "${_sheet2}", "skewY", '0deg', { fromValue: '-5deg'}], position: 11806, duration: 2194, easing: "easeInOutQuad" },
            { id: "eid71", tween: [ "style", "${_sheet2}", "top", '-10px', { fromValue: '-18px'}], position: 10000, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid72", tween: [ "style", "${_sheet2}", "top", '-18px', { fromValue: '-10px'}], position: 12000, duration: 2000, easing: "easeInOutQuad" },
            { id: "eid73", tween: [ "style", "${_sheet2}", "top", '-10px', { fromValue: '-18px'}], position: 19659, duration: 1633, easing: "easeInOutQuad" },
            { id: "eid74", tween: [ "style", "${_sheet2}", "top", '-18px', { fromValue: '-10px'}], position: 21292, duration: 2102, easing: "easeInOutQuad" }         ]
      }
   }
},
"Clouds": {
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
      id: 'clouds22',
      type: 'image',
      rect: ['0px','auto','1360px','680px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/clouds2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '680px'],
            ["style", "width", '1360px']
         ],
         "${_clouds22}": [
            ["style", "top", 'auto'],
            ["style", "left", '-78px'],
            ["style", "bottom", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 240000,
         autoPlay: true,
         timeline: [
            { id: "eid98", tween: [ "style", "${_clouds22}", "left", '1152px', { fromValue: '-78px'}], position: 0, duration: 240000, easing: "easeInOutQuad" }         ]
      }
   }
},
"nest": {
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
      id: 'pizzaflag',
      type: 'image',
      rect: ['0px','auto','143px','149px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/pizzaflag.png','0px','0px']
   },
   {
      id: 'nestinside',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'nestinside',
      symbolName: 'nestinside'
   }   ]
   },
   states: {
      "Base State": {
         "${_nestinside}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pizzaflag}": [
            ["style", "-webkit-transform-origin", [57.81,24.12], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57.81,24.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57.81,24.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57.81,24.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57.81,24.12],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["style", "bottom", '0px'],
            ["style", "left", '0px'],
            ["style", "top", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '143px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 33496,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid1712", tween: [ "style", "${_nestinside}", "top", '8px', { fromValue: '0px'}], position: 18000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1713", tween: [ "style", "${_nestinside}", "top", '0px', { fromValue: '8px'}], position: 20000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1714", tween: [ "style", "${_nestinside}", "top", '8px', { fromValue: '0px'}], position: 27659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid1715", tween: [ "style", "${_nestinside}", "top", '0px', { fromValue: '8px'}], position: 29292, duration: 2102, easing: "easeInOutSine" },
            { id: "eid122", tween: [ "transform", "${_pizzaflag}", "skewY", '13deg', { fromValue: '0deg'}], position: 0, duration: 743, easing: "easeInOutSine" },
            { id: "eid123", tween: [ "transform", "${_pizzaflag}", "skewY", '-15deg', { fromValue: '13deg'}], position: 743, duration: 1063, easing: "easeInOutSine" },
            { id: "eid124", tween: [ "transform", "${_pizzaflag}", "skewY", '-5deg', { fromValue: '-15deg'}], position: 1806, duration: 3329, easing: "easeInOutSine" },
            { id: "eid125", tween: [ "transform", "${_pizzaflag}", "skewY", '9deg', { fromValue: '-5deg'}], position: 5135, duration: 3468, easing: "easeInOutSine" },
            { id: "eid126", tween: [ "transform", "${_pizzaflag}", "skewY", '-9deg', { fromValue: '9deg'}], position: 8603, duration: 3158, easing: "easeInOutSine" },
            { id: "eid127", tween: [ "transform", "${_pizzaflag}", "skewY", '1deg', { fromValue: '-9deg'}], position: 11761, duration: 3074, easing: "easeInOutSine" },
            { id: "eid128", tween: [ "transform", "${_pizzaflag}", "skewY", '-10deg', { fromValue: '1deg'}], position: 14835, duration: 272, easing: "easeInOutSine" },
            { id: "eid129", tween: [ "transform", "${_pizzaflag}", "skewY", '9deg', { fromValue: '-10deg'}], position: 15107, duration: 643, easing: "easeInOutSine" },
            { id: "eid130", tween: [ "transform", "${_pizzaflag}", "skewY", '-4deg', { fromValue: '9deg'}], position: 15750, duration: 2969, easing: "easeInOutSine" },
            { id: "eid131", tween: [ "transform", "${_pizzaflag}", "skewY", '8deg', { fromValue: '-4deg'}], position: 18719, duration: 2296, easing: "easeInOutSine" },
            { id: "eid132", tween: [ "transform", "${_pizzaflag}", "skewY", '-4deg', { fromValue: '8deg'}], position: 21015, duration: 1581, easing: "easeInOutSine" },
            { id: "eid133", tween: [ "transform", "${_pizzaflag}", "skewY", '8deg', { fromValue: '-4deg'}], position: 22596, duration: 4122, easing: "easeInOutSine" },
            { id: "eid134", tween: [ "transform", "${_pizzaflag}", "skewY", '0deg', { fromValue: '8deg'}], position: 26718, duration: 6778, easing: "easeInOutSine" },
            { id: "eid110", tween: [ "style", "${_pizzaflag}", "left", '9px', { fromValue: '0px'}], position: 15000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid111", tween: [ "style", "${_pizzaflag}", "left", '2px', { fromValue: '9px'}], position: 18000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid112", tween: [ "style", "${_pizzaflag}", "left", '6px', { fromValue: '2px'}], position: 22000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid113", tween: [ "style", "${_pizzaflag}", "left", '4px', { fromValue: '6px'}], position: 25000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid114", tween: [ "style", "${_pizzaflag}", "left", '9px', { fromValue: '4px'}], position: 27703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid115", tween: [ "style", "${_pizzaflag}", "left", '0px', { fromValue: '9px'}], position: 31394, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1704", tween: [ "style", "${_nestinside}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 2003, easing: "easeInOutSine" },
            { id: "eid1705", tween: [ "style", "${_nestinside}", "left", '0px', { fromValue: '1px'}], position: 2003, duration: 12997, easing: "easeInOutSine" },
            { id: "eid1706", tween: [ "style", "${_nestinside}", "left", '9px', { fromValue: '0px'}], position: 15000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1707", tween: [ "style", "${_nestinside}", "left", '2px', { fromValue: '9px'}], position: 18000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid1708", tween: [ "style", "${_nestinside}", "left", '6px', { fromValue: '2px'}], position: 22000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1709", tween: [ "style", "${_nestinside}", "left", '4px', { fromValue: '6px'}], position: 25000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid1710", tween: [ "style", "${_nestinside}", "left", '9px', { fromValue: '4px'}], position: 27703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid1711", tween: [ "style", "${_nestinside}", "left", '0px', { fromValue: '9px'}], position: 31394, duration: 2102, easing: "easeInOutSine" },
            { id: "eid120", tween: [ "style", "${_pizzaflag}", "-webkit-transform-origin", [57.81,24.12], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.81,24.12]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2580", tween: [ "style", "${_pizzaflag}", "-moz-transform-origin", [57.81,24.12], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.81,24.12]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2581", tween: [ "style", "${_pizzaflag}", "-ms-transform-origin", [57.81,24.12], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.81,24.12]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2582", tween: [ "style", "${_pizzaflag}", "msTransformOrigin", [57.81,24.12], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.81,24.12]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid2583", tween: [ "style", "${_pizzaflag}", "-o-transform-origin", [57.81,24.12], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57.81,24.12]}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid116", tween: [ "style", "${_pizzaflag}", "bottom", '-8px', { fromValue: '0px'}], position: 18000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid117", tween: [ "style", "${_pizzaflag}", "bottom", '0px', { fromValue: '-8px'}], position: 20000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid118", tween: [ "style", "${_pizzaflag}", "bottom", '-8px', { fromValue: '0px'}], position: 27659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid119", tween: [ "style", "${_pizzaflag}", "bottom", '0px', { fromValue: '-8px'}], position: 29292, duration: 2102, easing: "easeInOutSine" }         ]
      }
   }
},
"birds": {
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
      id: 'birds2',
      type: 'image',
      rect: ['0px','auto','72px','64px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/birds.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_birds2}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '72px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3291,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid143", tween: [ "style", "${_birds2}", "bottom", '6px', { fromValue: '0px'}], position: 0, duration: 1702, easing: "easeInOutSine" },
            { id: "eid144", tween: [ "style", "${_birds2}", "bottom", '0px', { fromValue: '6px'}], position: 1702, duration: 1587, easing: "easeInOutSine" }         ]
      }
   }
},
"shark": {
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
      transform: [[0,0],[],[],['0','0']],
      id: 'shark',
      type: 'image',
      rect: ['31px','auto','49px','43px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/shark.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_shark}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '0'],
            ["style", "bottom", '0px'],
            ["transform", "scaleX", '0'],
            ["style", "left", '31px']
         ],
         "${symbolSelector}": [
            ["style", "height", '43px'],
            ["style", "width", '49px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8128,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid161", tween: [ "transform", "${_shark}", "scaleY", '0.93', { fromValue: '0'}], position: 2678, duration: 1473, easing: "easeInOutSine" },
            { id: "eid162", tween: [ "transform", "${_shark}", "scaleY", '0.92', { fromValue: '0.93'}], position: 4151, duration: 2308, easing: "easeInSine" },
            { id: "eid164", tween: [ "transform", "${_shark}", "scaleY", '0', { fromValue: '0.92'}], position: 6459, duration: 1159, easing: "easeOutSine" },
            { id: "eid155", tween: [ "style", "${_shark}", "left", '-87px', { fromValue: '31px'}], position: 2678, duration: 4940, easing: "easeInOutSine" },
            { id: "eid156", tween: [ "style", "${_shark}", "bottom", '-10px', { fromValue: '0px'}], position: 2678, duration: 4940, easing: "easeInOutSine" },
            { id: "eid159", tween: [ "transform", "${_shark}", "scaleX", '0.81', { fromValue: '0'}], position: 2678, duration: 1473, easing: "easeInOutSine" },
            { id: "eid160", tween: [ "transform", "${_shark}", "scaleX", '0.92', { fromValue: '0.81'}], position: 4151, duration: 2308, easing: "easeInSine" },
            { id: "eid163", tween: [ "transform", "${_shark}", "scaleX", '0', { fromValue: '0.92'}], position: 6459, duration: 1159, easing: "easeOutSine" }         ]
      }
   }
},
"theater": {
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
      id: 'theater',
      type: 'image',
      rect: ['0px','8px','385px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/theater.png','0px','0px']
   },
   {
      id: 'sheet',
      type: 'rect',
      rect: ['0','-13','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'sheet',
      symbolName: 'sheet'
   }   ]
   },
   states: {
      "Base State": {
         "${_sheet}": [
            ["style", "top", '-13px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_theater}": [
            ["style", "left", '0px'],
            ["style", "top", '8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '327px'],
            ["style", "width", '385px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23496,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid1543", tween: [ "style", "${_sheet}", "top", '-5px', { fromValue: '-13px'}], position: 8000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1544", tween: [ "style", "${_sheet}", "top", '-13px', { fromValue: '-5px'}], position: 10000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1545", tween: [ "style", "${_sheet}", "top", '-5px', { fromValue: '-13px'}], position: 17659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid1546", tween: [ "style", "${_sheet}", "top", '-13px', { fromValue: '-5px'}], position: 19292, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1610", tween: [ "style", "${_theater}", "top", '16px', { fromValue: '8px'}], position: 8000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1611", tween: [ "style", "${_theater}", "top", '8px', { fromValue: '16px'}], position: 10000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1612", tween: [ "style", "${_theater}", "top", '16px', { fromValue: '8px'}], position: 17659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid1613", tween: [ "style", "${_theater}", "top", '8px', { fromValue: '16px'}], position: 19292, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1587", tween: [ "style", "${_sheet}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1547", tween: [ "style", "${_sheet}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 2274, easing: "easeInOutSine" },
            { id: "eid1548", tween: [ "style", "${_sheet}", "left", '0px', { fromValue: '10px'}], position: 2274, duration: 2726, easing: "easeInOutSine" },
            { id: "eid1549", tween: [ "style", "${_sheet}", "left", '13px', { fromValue: '0px'}], position: 5000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1550", tween: [ "style", "${_sheet}", "left", '-13px', { fromValue: '13px'}], position: 8000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid1551", tween: [ "style", "${_sheet}", "left", '6px', { fromValue: '-13px'}], position: 12000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1552", tween: [ "style", "${_sheet}", "left", '-8px', { fromValue: '6px'}], position: 15000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid1553", tween: [ "style", "${_sheet}", "left", '21px', { fromValue: '-8px'}], position: 17703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid1554", tween: [ "style", "${_sheet}", "left", '0px', { fromValue: '21px'}], position: 21394, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1602", tween: [ "style", "${_theater}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 2274, easing: "easeInOutSine" },
            { id: "eid1603", tween: [ "style", "${_theater}", "left", '0px', { fromValue: '10px'}], position: 2274, duration: 2726, easing: "easeInOutSine" },
            { id: "eid1604", tween: [ "style", "${_theater}", "left", '13px', { fromValue: '0px'}], position: 5000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1605", tween: [ "style", "${_theater}", "left", '-13px', { fromValue: '13px'}], position: 8000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid1606", tween: [ "style", "${_theater}", "left", '6px', { fromValue: '-13px'}], position: 12000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1607", tween: [ "style", "${_theater}", "left", '-8px', { fromValue: '6px'}], position: 15000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid1608", tween: [ "style", "${_theater}", "left", '21px', { fromValue: '-8px'}], position: 17703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid1609", tween: [ "style", "${_theater}", "left", '0px', { fromValue: '21px'}], position: 21394, duration: 2102, easing: "easeInOutSine" }         ]
      }
   }
},
"book": {
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
      id: 'Book2',
      type: 'image',
      rect: ['auto','auto','1000px','667px','50%','49.9%'],
      fill: ['rgba(0,0,0,0)','images/Book.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '667px'],
            ["style", "width", '1000px']
         ],
         "${_Book2}": [
            ["style", "top", 'auto'],
            ["style", "right", '50%'],
            ["style", "left", 'auto'],
            ["style", "bottom", '49.93%']
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
"campdeck": {
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
      id: 'campdeck',
      type: 'image',
      rect: ['-500px','0px','1000px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/campdeck.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_campdeck}": [
            ["style", "left", '-500px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '255px'],
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
},
"camppizza": {
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
      id: 'camppizza',
      type: 'image',
      rect: ['-355px','0px','1000px','680px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/camppizza.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_camppizza}": [
            ["style", "left", '-355px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '680px'],
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
},
"theaterseats": {
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
      rect: ['0px','0px','139.8%','982px','auto','auto'],
      overflow: 'visible',
      id: 'theaterseats',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/theaterseats.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_theaterseats}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '702px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '702px'],
            ["style", "width", '1030px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15286,
         autoPlay: true,
         timeline: [
            { id: "eid1067", tween: [ "style", "${_theaterseats}", "height", '702px', { fromValue: '702px'}], position: 14098, duration: 0, easing: "easeInSine" },
            { id: "eid1069", tween: [ "style", "${_theaterseats}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid1071", tween: [ "style", "${_theaterseats}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0, easing: "easeInSine" },
            { id: "eid1073", tween: [ "style", "${_theaterseats}", "display", 'none', { fromValue: 'block'}], position: 15286, duration: 0, easing: "easeInSine" },
            { id: "eid1068", tween: [ "style", "${_theaterseats}", "width", '100%', { fromValue: '100%'}], position: 14098, duration: 0, easing: "easeInSine" }         ]
      }
   }
},
"workinside": {
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
      id: 'work',
      type: 'image',
      rect: ['29px','auto','355px','302px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/work.png','0px','0px']
   },
   {
      id: 'worksign9',
      type: 'image',
      rect: ['64px','62px','125px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/worksign.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['85px','83px','225px','142px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_work}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Rectangle3}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_worksign9}": [
            ["style", "top", '83px'],
            ["style", "opacity", '0'],
            ["style", "left", '65px']
         ],
         "${symbolSelector}": [
            ["style", "height", '302px'],
            ["style", "width", '355px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2331,
         autoPlay: true,
         labels: {
            "workup": 0,
            "workover": 1000,
            "workout": 2000
         },
         timeline: [
            { id: "eid1439", tween: [ "style", "${_worksign9}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 502, easing: "easeInOutSine" },
            { id: "eid1440", tween: [ "style", "${_worksign9}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 331, easing: "easeInOutSine" },
            { id: "eid1436", tween: [ "style", "${_worksign9}", "left", '65px', { fromValue: '65px'}], position: 1000, duration: 0, easing: "easeInOutSine" },
            { id: "eid1438", tween: [ "style", "${_worksign9}", "top", '60px', { fromValue: '83px'}], position: 1000, duration: 502, easing: "easeInOutSine" }         ]
      }
   }
},
"worksign": {
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
      id: 'worksign7',
      type: 'image',
      rect: ['0px','0px','125px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/worksign.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_worksign7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '125px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18496,
         autoPlay: true,
         timeline: [
            { id: "eid1343", tween: [ "style", "${_worksign7}", "left", '13px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1344", tween: [ "style", "${_worksign7}", "left", '-13px', { fromValue: '13px'}], position: 3000, duration: 4000, easing: "easeInOutSine" },
            { id: "eid1345", tween: [ "style", "${_worksign7}", "left", '6px', { fromValue: '-13px'}], position: 7000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid1346", tween: [ "style", "${_worksign7}", "left", '-8px', { fromValue: '6px'}], position: 10000, duration: 2703, easing: "easeInOutSine" },
            { id: "eid1347", tween: [ "style", "${_worksign7}", "left", '21px', { fromValue: '-8px'}], position: 12703, duration: 3691, easing: "easeInOutSine" },
            { id: "eid1348", tween: [ "style", "${_worksign7}", "left", '0px', { fromValue: '21px'}], position: 16394, duration: 2102, easing: "easeInOutSine" },
            { id: "eid1349", tween: [ "style", "${_worksign7}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1339", tween: [ "style", "${_worksign7}", "top", '8px', { fromValue: '0px'}], position: 3000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1340", tween: [ "style", "${_worksign7}", "top", '0px', { fromValue: '8px'}], position: 5000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid1341", tween: [ "style", "${_worksign7}", "top", '8px', { fromValue: '0px'}], position: 12659, duration: 1633, easing: "easeInOutSine" },
            { id: "eid1342", tween: [ "style", "${_worksign7}", "top", '0px', { fromValue: '8px'}], position: 14292, duration: 2102, easing: "easeInOutSine" }         ]
      }
   }
},
"theaterinside": {
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
      id: 'theater2',
      type: 'image',
      rect: ['0px','0px','385px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/theater.png','0px','0px']
   },
   {
      id: 'theatersign',
      type: 'image',
      rect: ['64px','39px','157px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/theatersign.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_theatersign}": [
            ["style", "top", '39px'],
            ["style", "opacity", '0'],
            ["style", "left", '64px']
         ],
         "${_theater2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '327px'],
            ["style", "width", '385px']
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
"sheet": {
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
      type: 'image',
      id: 'sheet3',
      opacity: 1,
      rect: ['0px','0px','385px','327px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sheet.png','0px','0px']
   },
   {
      id: 'theatersign2',
      type: 'image',
      rect: ['70px','48px','157px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/theatersign.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['53px','59px','287px','206px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sheet3}": [
            ["style", "-webkit-transform-origin", [17.56,38.09], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [17.56,38.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [17.56,38.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [17.56,38.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [17.56,38.09],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["style", "overflow", 'visible'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_theatersign2}": [
            ["style", "top", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '327px'],
            ["style", "width", '385px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2246,
         autoPlay: true,
         labels: {
            "theaterup": 0,
            "theaterover": 1000,
            "theaterout": 2000
         },
         timeline: [
            { id: "eid1556", tween: [ "style", "${_theatersign2}", "opacity", '0.612548828125', { fromValue: '0.000000'}], position: 1000, duration: 77, easing: "easeInOutSine" },
            { id: "eid1557", tween: [ "style", "${_theatersign2}", "opacity", '0.2421875', { fromValue: '0.612549'}], position: 1077, duration: 56, easing: "easeInOutSine" },
            { id: "eid1558", tween: [ "style", "${_theatersign2}", "opacity", '0.828125', { fromValue: '0.242188'}], position: 1133, duration: 62, easing: "easeInOutSine" },
            { id: "eid1559", tween: [ "style", "${_theatersign2}", "opacity", '0.46875', { fromValue: '0.828125'}], position: 1195, duration: 63, easing: "easeInOutSine" },
            { id: "eid1560", tween: [ "style", "${_theatersign2}", "opacity", '1', { fromValue: '0.468750'}], position: 1258, duration: 87, easing: "easeInOutSine" },
            { id: "eid1561", tween: [ "style", "${_theatersign2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 196, easing: "easeInOutSine" }         ]
      }
   }
},
"campinside": {
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
      id: 'camp',
      type: 'image',
      rect: ['-63px','auto','353px','284px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/camp.png','0px','0px']
   },
   {
      id: 'campsign',
      type: 'image',
      rect: ['223px','104px','123px','92px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/campsign.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['54px','64px','273px','161px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_campsign}": [
            ["style", "top", '104px'],
            ["style", "opacity", '0'],
            ["style", "left", '223px'],
            ["subproperty", "filter.hue-rotate", '120deg']
         ],
         "${_camp}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_Rectangle4}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '284px'],
            ["style", "width", '353px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2948,
         autoPlay: true,
         labels: {
            "campup": 0,
            "campover": 1000,
            "camprainbow": 1479,
            "campout": 2700
         },
         timeline: [
            { id: "eid1670", tween: [ "subproperty", "${_campsign}", "filter.hue-rotate", '-0.10546875deg', { fromValue: '120deg'}], position: 1000, duration: 479, easing: "easeInOutQuad" },
            { id: "eid1675", tween: [ "subproperty", "${_campsign}", "filter.hue-rotate", '-360deg', { fromValue: '-0.105469deg'}], position: 1479, duration: 1078, easing: "easeInOutQuad" },
            { id: "eid1669", tween: [ "style", "${_campsign}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 479, easing: "easeInOutQuad" },
            { id: "eid1676", tween: [ "style", "${_campsign}", "opacity", '0', { fromValue: '1'}], position: 2700, duration: 248, easing: "easeInOutQuad" }         ]
      }
   }
},
"nestinside": {
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
      id: 'nest',
      type: 'image',
      rect: ['0px','auto','143px','149px','auto','0px'],
      fill: ['rgba(0,0,0,0)','images/nest.png','0px','0px']
   },
   {
      id: 'nestsign',
      type: 'image',
      rect: ['110px','23px','106px','79px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nestsign.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['0px','11px','204px','138px','auto','auto'],
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["style", "cursor", 'pointer'],
            ["style", "height", '138px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '204px']
         ],
         "${_nest}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_nestsign}": [
            ["style", "top", '23px'],
            ["style", "opacity", '0'],
            ["style", "left", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '143px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3677,
         autoPlay: true,
         labels: {
            "nestup": 0,
            "nestover": 1000,
            "nestout": 3000
         },
         timeline: [
            { id: "eid1716", tween: [ "style", "${_nestsign}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeInOutSine" },
            { id: "eid1717", tween: [ "style", "${_nestsign}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 487, easing: "easeInOutSine" }         ]
      }
   }
},
"store": {
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
      type: 'rect',
      id: 'store',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','225px','190px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'storesign',
      type: 'image',
      rect: ['44px','-25px','168px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/storesign.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['6px','0px','206px','171px','auto','auto'],
      id: 'Rectangle6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_storesign}": [
            ["style", "top", '-25px'],
            ["style", "opacity", '0'],
            ["style", "left", '44px'],
            ["style", "clip", [0,168,125,-32.375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Rectangle6}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_store}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '190px'],
            ["style", "width", '225px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2879,
         autoPlay: true,
         labels: {
            "storeup": 0,
            "storeover": 1000,
            "storeout": 2000
         },
         timeline: [
            { id: "eid1734", tween: [ "style", "${_storesign}", "opacity", '0.40983606557377', { fromValue: '0'}], position: 1000, duration: 93, easing: "easeInOutSine" },
            { id: "eid1735", tween: [ "style", "${_storesign}", "opacity", '0.18852459016393', { fromValue: '0.409836'}], position: 1093, duration: 41, easing: "easeInOutSine" },
            { id: "eid1736", tween: [ "style", "${_storesign}", "opacity", '1', { fromValue: '0.188525'}], position: 1134, duration: 175, easing: "easeInOutSine" },
            { id: "eid1737", tween: [ "style", "${_storesign}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 180, easing: "easeInOutSine" },
            { id: "eid2241", tween: [ "style", "${_storesign}", "clip", [0,168,125,-32.375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,168,125,-32.375]}], position: 0, duration: 0, easing: "easeInOutSine" }         ]
      }
   }
},
"sagansign": {
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
      type: 'image',
      id: 'sagansign',
      rect: ['0px','auto','202px','144px','auto','0px'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/sagansign.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['38px','43px','126px','18px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'rect',
      rect: ['0px','20px','186px','150px','auto','auto'],
      id: 'Rectangle8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["color", "background-color", 'rgba(0,0,0,0.85)'],
            ["style", "height", '18px'],
            ["style", "left", '38px'],
            ["style", "width", '126px']
         ],
         "${_sagansign}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["subproperty", "filter.hue-rotate", '0deg']
         ],
         "${_Rectangle8}": [
            ["style", "cursor", 'pointer'],
            ["style", "height", '150px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '186px']
         ],
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '202px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2896.294705065,
         autoPlay: true,
         labels: {
            "up": 0,
            "over": 1000,
            "loop": 1278,
            "out": 2278
         },
         timeline: [
            { id: "eid1322", tween: [ "style", "${_sagansign}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutSine" },
            { id: "eid1799", tween: [ "color", "${_Rectangle7}", "background-color", 'rgba(0,0,0,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.85)'}], position: 2501, duration: 0, easing: "easeInOutSine" },
            { id: "eid1856", tween: [ "subproperty", "${_sagansign}", "filter.hue-rotate", '120deg', { fromValue: '0deg'}], position: 1000, duration: 278, easing: "easeInOutSine" },
            { id: "eid1759", tween: [ "subproperty", "${_sagansign}", "filter.hue-rotate", '480deg', { fromValue: '120deg'}], position: 1278, duration: 923, easing: "easeInOutSine" },
            { id: "eid1865", tween: [ "subproperty", "${_sagansign}", "filter.hue-rotate", '120deg', { fromValue: '480deg'}], position: 2201, duration: 77, easing: "easeInOutSine" },
            { id: "eid1866", tween: [ "subproperty", "${_sagansign}", "filter.hue-rotate", '0deg', { fromValue: '120deg'}], position: 2278, duration: 344, easing: "easeInOutSine" },
            { id: "eid1777", tween: [ "style", "${_Rectangle7}", "width", '0px', { fromValue: '126px'}], position: 1000, duration: 278, easing: "easeInOutSine" },
            { id: "eid1778", tween: [ "style", "${_Rectangle7}", "width", '126px', { fromValue: '0px'}], position: 2278, duration: 223, easing: "easeInOutSine" },
            { id: "eid1776", tween: [ "style", "${_Rectangle7}", "left", '164px', { fromValue: '38px'}], position: 1000, duration: 278, easing: "easeInOutSine" },
            { id: "eid1779", tween: [ "style", "${_Rectangle7}", "left", '38px', { fromValue: '164px'}], position: 2278, duration: 223, easing: "easeInOutSine" }         ]
      }
   }
},
"picklereveal": {
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
      id: 'kickbutton2',
      type: 'image',
      rect: ['auto','0','229px','100px','12px','auto'],
      fill: ['rgba(0,0,0,0)','images/kickbutton.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['auto','0px','252px','100px','0px','auto'],
      id: 'Rectangle9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle9}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '252px']
         ],
         "${_kickbutton2}": [
            ["style", "top", '-1px'],
            ["style", "right", '11px'],
            ["style", "height", '101px'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "width", '230px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2375,
         autoPlay: true,
         labels: {
            "up": 0,
            "over": 1000,
            "out": 2000
         },
         timeline: [
            { id: "eid2088", tween: [ "style", "${_kickbutton2}", "right", '11px', { fromValue: '11px'}], position: 531, duration: 0, easing: "easeInOutSine" },
            { id: "eid2038", tween: [ "style", "${_kickbutton2}", "opacity", '0.39907786885246', { fromValue: '0.000000'}], position: 1000, duration: 205, easing: "easeInOutSine" },
            { id: "eid2040", tween: [ "style", "${_kickbutton2}", "opacity", '0', { fromValue: '0.399078'}], position: 2000, duration: 198, easing: "easeInOutSine" },
            { id: "eid2098", tween: [ "style", "${_kickbutton2}", "height", '101px', { fromValue: '101px'}], position: 531, duration: 0, easing: "easeInOutSine" },
            { id: "eid2087", tween: [ "style", "${_kickbutton2}", "top", '-1px', { fromValue: '-1px'}], position: 531, duration: 0, easing: "easeInOutSine" },
            { id: "eid2097", tween: [ "style", "${_kickbutton2}", "width", '230px', { fromValue: '230px'}], position: 531, duration: 0, easing: "easeInOutSine" }         ]
      }
   }
},
"mushies": {
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
      type: 'image',
      id: 'mushies2',
      rect: ['-119px','-277px','532px','668px','auto','auto'],
      transform: [[0,0],[],[],['0.2','0.2']],
      fill: ['rgba(0,0,0,0)','images/mushies.png','0px','0px']
   },
   {
      rect: ['0px','0px','188px','134px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mushies2}": [
            ["style", "top", '-277px'],
            ["transform", "scaleY", '0.20049'],
            ["transform", "scaleX", '0.20049'],
            ["style", "height", '668px'],
            ["style", "opacity", '0'],
            ["style", "left", '-119px'],
            ["style", "width", '532px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '134px'],
            ["style", "width", '188px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3617,
         autoPlay: true,
         labels: {
            "up": 0,
            "over": 1000,
            "out": 2847
         },
         timeline: [
            { id: "eid2257", tween: [ "style", "${_mushies2}", "opacity", '0.47305297851562', { fromValue: '0.000000'}], position: 1000, duration: 321 },
            { id: "eid2258", tween: [ "style", "${_mushies2}", "opacity", '0', { fromValue: '0.473053'}], position: 1321, duration: 317 }         ]
      }
   }
},
"jets": {
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
      id: 'eventsjet_skis',
      type: 'image',
      rect: ['0%','0%','164px','114px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eventsjet%20skis.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_eventsjet_skis}": [
            ["style", "top", '0.01%'],
            ["style", "left", '0%'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '164px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1335,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid2422", tween: [ "style", "${_eventsjet_skis}", "left", '0%', { fromValue: '0%'}], position: 628, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2314", tween: [ "style", "${_eventsjet_skis}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2321", tween: [ "style", "${_eventsjet_skis}", "display", 'none', { fromValue: 'block'}], position: 1335, duration: 0 },
            { id: "eid2420", tween: [ "style", "${_eventsjet_skis}", "top", '6.22%', { fromValue: '0.01%'}], position: 0, duration: 628, easing: "easeInOutQuad" },
            { id: "eid2421", tween: [ "style", "${_eventsjet_skis}", "top", '0%', { fromValue: '6.22%'}], position: 628, duration: 576, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-1529726274");
