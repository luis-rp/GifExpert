(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=(n(15),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))}),u=n(2),o=n(9),j=n(0),d=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[a].concat(Object(o.a)(t))}))},children:[Object(j.jsx)("h2",{children:"Add Category"}),Object(j.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value)}})]})},b=n(10),f=n(6),l=n.n(f),p=n(8),O=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/stickers/search?q=".concat(encodeURI(e),"&api_key=Oq3AJsEu4y1R7kz49w9cJ8nd9Wc6A5Oo"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},g=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){O(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[]),r}(e),r=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:e}),Object(j.jsxs)("div",{className:"card-grid",children:[a&&Object(j.jsx)("h3",{children:"Cargando...."}),r.map((function(t){return Object(j.jsx)(h,Object(b.a)({},t),t.id)}))]})]})},x=function(t){var e=Object(c.useState)(["one punch","DBZ"]),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{setCategories:a}),Object(j.jsx)("ol",{children:r.map((function(t,e){return Object(j.jsx)(g,{category:t},t)}))})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),s()}},[[18,1,2]]]);
//# sourceMappingURL=main.e6ca533d.chunk.js.map