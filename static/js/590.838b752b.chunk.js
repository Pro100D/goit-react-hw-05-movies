"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[590],{590:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(689),i=n(861),u=n(757),s=n.n(u),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&api_key=").concat("5a45960aa9b19faa72924039862aa15f"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(791),p=n(184),f=function(){var e=(0,h.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,a.UO)().movieId;return(0,h.useEffect)((function(){o(u).then((function(e){return i(e.results)}))}),[u]),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:n.length>0?n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"reviews:"}),(0,p.jsxs)("p",{children:["Author: ",n]}),(0,p.jsx)("p",{children:r})]},t)})):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=590.838b752b.chunk.js.map