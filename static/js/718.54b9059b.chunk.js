"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{718:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=a(439),n=a(791),c=a(689),i=a(861),s=a(757),u=a.n(s),o=a(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var t=(0,i.Z)(u().mark((function t(e){var a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US&api_key=").concat("5a45960aa9b19faa72924039862aa15f"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=a(184),f=function(){var t=(0,c.UO)().movieId,e=(0,n.useState)([]),a=(0,r.Z)(e,2),i=a[0],s=a[1];return(0,n.useEffect)((function(){p(t).then((function(t){return s(t.cast)}))}),[t]),(0,h.jsxs)("div",{children:["Cast:",(0,h.jsx)("ul",{children:i.map((function(t){var e=t.id,a=t.name,r=t.character,n=t.profile_path;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"150px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"http://placehold.it/150x225/",alt:""}),(0,h.jsxs)("p",{children:["Name: ",a]}),(0,h.jsxs)("p",{children:["Character: ",r]})]},e)}))})]})}}}]);
//# sourceMappingURL=718.54b9059b.chunk.js.map