(this["webpackJsonpreact-typescript-piano"]=this["webpackJsonpreact-typescript-piano"]||[]).push([[0],{22:function(n,t,e){"use strict";e.r(t);var o=e(1),r=e(0),c=e.n(r),i=e(8),a=e.n(i),l=[{note:"C",color:"white"},{note:"CSharp",color:"black"},{note:"D",color:"white"},{note:"DSharp",color:"black"},{note:"E",color:"white"},{note:"F",color:"white"},{note:"FSharp",color:"black"},{note:"G",color:"white"},{note:"GSharp",color:"black"},{note:"A",color:"white"},{note:"ASharp",color:"black"},{note:"B",color:"white"}],u=e(2),h=e(3);function b(){var n=Object(u.a)(["\n    background: white;\n    width: 60px;\n    height: 200px;\n    border: 1px solid black;\n    box-shadow: 2px 5px;\n    margin: 1px;\n\n    :active {\n        background: #eee;\n    }\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n    background: black;\n    width: 40px;\n    height: 130px;\n    position: absolute;\n    margin: 1px;\n    margin-left: -20px;\n\n    :active {\n        background: #333;\n    }\n"]);return p=function(){return n},n}var s=h.a.button(p()),j=h.a.button(b()),d=function(n){var t=n.color,e=n.note;return"white"===t?Object(o.jsx)(j,{value:e}):Object(o.jsx)(s,{value:e})};function x(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]);return x=function(){return n},n}var v=h.a.div(x()),f=function(n){var t=n.notes;return Object(o.jsx)(v,{children:Object(o.jsx)("div",{children:t.map((function(n){return Object(o.jsx)(d,{color:n.color,note:n.note},n.note)}))})})},w=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(f,{notes:l})})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f25aa97a.chunk.js.map