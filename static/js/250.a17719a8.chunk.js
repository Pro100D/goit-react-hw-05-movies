"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{755:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(439),i=t(791),s=t(689),a=t(861),o=t(687),c=t.n(o),l=t(243);l.Z.defaults.baseURL="https://api.themoviedb.org/3";var d,h,p,u,x=function(){var e=(0,a.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=").concat("5a45960aa9b19faa72924039862aa15f"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=t(168),f=t(686),j=t(87),m=(0,f.Z)(j.rU)(d||(d=(0,v.Z)(["\n  font-size: 23px;\n\n  text-decoration: none;\n\n  color: #000000;\n\n  margin-bottom: 15px;\n  display: block;\n  &:hover {\n    color: #b564e7;\n  }\n"]))),b=f.Z.div(h||(h=(0,v.Z)(["\n  display: flex;\n"]))),Z=f.Z.div(p||(p=(0,v.Z)(["\n  display: flex;\n\n  gap: 10px;\n  font-size: 18px;\n"]))),g=(0,f.Z)(j.rU)(u||(u=(0,v.Z)(["\n  text-decoration: none;\n\n  font-size: 20px;\n\n  color: #000000;\n\n  &:hover {\n    color: #b564e7;\n  }\n"]))),w=t(184),k=function(){var e,n=(0,i.useState)({}),t=(0,r.Z)(n,2),a=t[0],o=t[1],c=(0,i.useState)([]),l=(0,r.Z)(c,2),d=l[0],h=l[1],p=(0,s.TH)(),u=(0,s.UO)().movieId;return(0,i.useEffect)((function(){x(u).then((function(e){o(e),h(e.genres)}))}),[u]),(0,w.jsxs)("div",{children:[(0,w.jsx)(m,{to:(null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.from)||"/",children:"Go Back"}),(0,w.jsxs)(b,{children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{width:"500",src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"http://placehold.it/640x70/",alt:""})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:a.title}),(0,w.jsxs)("p",{children:["Overview: ",a.overview]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Ganres:"}),(0,w.jsx)(Z,{children:d.map((function(e){return(0,w.jsx)("p",{children:e.name},e.id)}))})]}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(g,{to:"cast",state:{from:p},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(g,{to:"reviews",state:{from:p},children:"Reviews"})})]}),(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(s.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=250.a17719a8.chunk.js.map