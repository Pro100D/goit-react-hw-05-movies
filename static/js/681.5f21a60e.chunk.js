"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(n,e,t){t.r(e);var r=t(439),a=t(689),u=t(926),c=t(791),i=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1],s=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.Bt)(s).then((function(n){return o(n.results)}))}),[s]),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:t.length>0?t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:"reviews:"}),(0,i.jsxs)("p",{children:["Author: ",t]}),(0,i.jsx)("p",{children:r})]},e)})):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})})}},926:function(n,e,t){t.d(e,{Bt:function(){return v},HW:function(){return s},X4:function(){return o},mL:function(){return p},mo:function(){return f}});var r=t(861),a=t(687),u=t.n(a),c=t(243),i="5a45960aa9b19faa72924039862aa15f";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?language=en-US&api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.5f21a60e.chunk.js.map