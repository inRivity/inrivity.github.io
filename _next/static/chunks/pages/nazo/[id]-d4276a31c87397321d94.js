(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[919],{4917:function(t,e,r){"use strict";var n=r(5893),i=(r(7294),r(1664)),a=r(9008);e.Z=function(t){var e=t.children,r=t.title,l=void 0===r?"This is the default title":r;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsxs)("nav",{children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})})," ","|"," ",(0,n.jsx)(i.default,{href:"/about",children:(0,n.jsx)("a",{children:"About"})})," ","|"," ",(0,n.jsx)(i.default,{href:"/members",children:(0,n.jsx)("a",{children:"Members List"})})," ","|"," ",(0,n.jsx)(i.default,{href:"/nazo",children:(0,n.jsx)("a",{children:"Nazo List"})})," ","|"," ",(0,n.jsx)(i.default,{href:"/extra",children:(0,n.jsx)("a",{children:"Extra List"})})]})}),e,(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("small",{children:"\xa9inRivity 2021"})]})]})}},6095:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return s},default:function(){return u}});var n=r(5893),i=r(4917);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,a=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!e||r.length!==e);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(7294),o=function(t){var e=t.item,r=l(c.useState(""),2),i=r[0],a=r[1],o=[function(t){return!0},function(t){return"\u6fc0\u6012"===t}];return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:e.title}),(0,n.jsx)("img",{src:"/".concat(e.id,".png"),alt:e.title}),(0,n.jsx)("p",{children:e.description}),(0,n.jsxs)("form",{children:[(0,n.jsx)("input",{type:"text",name:"atext",value:i,onChange:function(t){return a(t.target.value)}}),(0,n.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),o[e.id](i)?alert("\u6b63\u89e3\uff01"):alert("\u4e0d\u6b63\u89e3\u2026")},children:"\u89e3\u7b54"})]})]})},s=!0,u=function(t){var e=t.item,r=t.errors;return r?(0,n.jsx)(i.Z,{title:"Error | inRivity",children:(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{style:{color:"red"},children:"Error:"})," ",r]})}):(0,n.jsx)(i.Z,{title:"".concat(e?e.title:"Member Detail"," | inRivity"),children:e&&(0,n.jsx)(o,{item:e})})}},2074:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nazo/[id]",function(){return r(6095)}])}},function(t){t.O(0,[774,351,996],(function(){return e=2074,t(t.s=e);var e}));var e=t.O();_N_E=e}]);