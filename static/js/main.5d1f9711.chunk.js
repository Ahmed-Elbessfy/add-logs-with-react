(window["webpackJsonpreact-for-hire"]=window["webpackJsonpreact-for-hire"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),i=r.n(o),c=(r(11),r(2)),l=r(3),s=r(1);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=Object(n.useState)(""),r=Object(s.a)(t,2),o=r[0],i=r[1],c=Object(n.useState)(""),l=Object(s.a)(c,2),m=l[0],g=l[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),f=p[0],b=p[1],h=function(e){"title"===e.target.name?i(e.target.value):"message"===e.target.name&&g(e.target.value)},v={width:"100%",fontSize:"1rem",padding:"8px",border:"1px solid #dedede",margin:"0.8rem 0"};return a.a.createElement("section",{style:{padding:"1.5rem 2rem",border:"1px solid #dedede",backgroundColor:"#f9f9f9f9"}},a.a.createElement("p",{style:{fontSize:"1.5rem",fontWeight:"600"}},"Add new log"),a.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),0===o.length||0===m.length)alert("Please fill all field with proper values");else{var r,n=new Date,a=n.getHours(),i=n.getMinutes()>10?n.getMinutes():"0".concat(n.getMinutes()),c=n.getSeconds()>10?n.getSeconds():"0".concat(n.getSeconds()),l=n.getDate()>10?n.getDate():"0".concat(n.getDate()),s=n.getMonth()>10?n.getMonth():"0".concat(n.getMonth()),d=n.getFullYear().toString().substring(2);a>12?r="AM":(r="PM",a%=12);var g="".concat(a,":").concat(i,":").concat(c," ").concat(r,", ").concat(s,"-").concat(l,"-").concat(d);b("".concat(g)),console.log(g,f),e.addLog({title:o,message:m,time:f})}}},a.a.createElement("input",{type:"text",value:o,name:"title",onChange:h,placeholder:"Log Title",style:v}),a.a.createElement("textarea",{value:m,name:"message",onChange:h,placeholder:"Log Message",style:d({},v,{fontSize:"1.4rem",height:"8rem",resize:"none"})}),a.a.createElement("button",{style:{backgroundColor:"#fff",color:"#0d1944",border:"1px solid #dedede",padding:"0.5rem 1rem",textTransform:"capitalize",fontSize:"1rem",cursor:"pointer"}},a.a.createElement("i",{className:"far fa-comment-alt"})," submit log")))};var u=function(e){var t=Object(n.useState)(""),r=Object(s.a)(t,2),o=r[0],i=r[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.searchLogs(o)},style:{padding:"1.5rem 2rem",border:"1px solid #dedede",backgroundColor:"#f9f9f9f9",margin:"1.5rem 0"}},a.a.createElement("input",{type:"text",onChange:function(e){i(e.target.value)},value:o,placeholder:"Search by title",style:{width:"100%",fontSize:"1rem",padding:"8px",border:"1px solid #dedede",margin:"0.8rem 0"}}),a.a.createElement("button",{style:{backgroundColor:"#fff",color:"#0d1944",border:"1px solid #dedede",padding:"0.5rem 1rem",textTransform:"capitalize",fontSize:"1rem",cursor:"pointer"}},"search"))};var p=function(e){var t=e.title,r=e.message,n=e.time,o={padding:"1.5rem 2rem",border:"1px solid #dedede",backgroundColor:"#f9f9f9f9",margin:"1rem 0",position:"relative",display:e.visible?"block":"none"};return a.a.createElement("div",{style:o},a.a.createElement("h1",{style:{margin:"0.5rem 0"}},t),a.a.createElement("p",{style:{margin:"0.5rem 0"}},r),a.a.createElement("span",{style:{color:"#858585"}},n),a.a.createElement("button",{onClick:function(){e.deleteLog(e.id)},style:{position:"absolute",top:10,right:10,background:"transparent",color:"#858585",border:"none",outline:"none",padding:"0.5rem 1rem",textTransform:"capitalize",fontSize:"1.2rem",cursor:"pointer"}},"delete"))};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(){var e=Object(n.useState)([{title:"alarm high energy consumption is triggered",message:"Energy consumption of this asset is high. Please resolve this issue ASAP",time:"8:11:03 AM, 05-14-18",visible:!0},{title:"new alarm created",message:'A new alarm "Low Apparent Power" has been created ',time:"6:21:44 PM, 05-13-18",visible:!0}]),t=Object(s.a)(e,2),r=t[0],o=t[1],i=function(e){var t=Object(l.a)(r);t.splice(e,1),o(t)};return a.a.createElement("main",{className:"App"},a.a.createElement(g,{addLog:function(e){o([].concat(Object(l.a)(r),[b({},e,{visible:!0})]))}}),a.a.createElement("section",null,a.a.createElement(u,{searchLogs:function(e){for(var t=Object(l.a)(r),n=0;n<t.length;n++)0!==e.length?r[n].title.split(" ").includes(e)||(r[n].visible=!1):r[n].visible=!0;o(t)}}),r.map((function(e,t){return a.a.createElement(p,{key:t,title:e.title,message:e.message,time:e.time,id:t,visible:e.visible,deleteLog:i})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,r){e.exports=r(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.5d1f9711.chunk.js.map