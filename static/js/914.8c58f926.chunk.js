"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[914],{914:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(439),a=n(791),u=n(861),i=n(757),c=n.n(i),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,u.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("5a45960aa9b19faa72924039862aa15f"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=n(689),d=n(87),h=n(184),l=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1],i=(0,f.TH)();return(0,a.useEffect)((function(){o().then((function(t){return u(t.results)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending Today"}),(0,h.jsx)("ul",{children:n.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"movies/".concat(t.id),state:{from:i},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=914.8c58f926.chunk.js.map