"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{431:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(439),a=r(791),s=r(689),i=r(87),c=r(861),o=r(757),l=r.n(o),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var h=function(){var e=(0,c.Z)(l().mark((function e(t){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat("5a45960aa9b19faa72924039862aa15f"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=r(184),p=function(){var e,t=(0,a.useState)({}),r=(0,n.Z)(t,2),c=r[0],o=r[1],l=(0,a.useState)([]),u=(0,n.Z)(l,2),p=u[0],f=u[1],v=(0,s.TH)(),x=(0,s.UO)().movieId;return(0,a.useEffect)((function(){h(x).then((function(e){o(e),f(e.genres)}))}),[x]),(0,d.jsxs)("div",{children:[(0,d.jsx)(i.rU,{to:(null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.from)||"/",children:"Go Back"}),(0,d.jsx)("img",{width:"500",src:c.poster_path?"https://image.tmdb.org/t/p/w500".concat(c.poster_path):"http://placehold.it/640x70/",alt:""}),(0,d.jsx)("h1",{children:c.title}),(0,d.jsxs)("p",{children:["Overview: ",c.overview]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Ganres:"}),p.map((function(e){return(0,d.jsx)("p",{children:e.name},e.id)}))]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"cast",state:{from:v},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"reviews",state:{from:v},children:"Reviews"})})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=431.ca129e95.chunk.js.map