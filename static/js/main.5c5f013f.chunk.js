(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,c){},15:function(e,a,c){"use strict";c.r(a);var t=c(7),n=c.n(t),i=c(8),l=c(6),r=c(1);c(13);var s=c(4),o=c.n(s),j=c(0),d=function(e){for(var a=e.total,c=e.perPage,t=void 0===c?3:c,n=e.currentPage,i=void 0===n?1:n,l=e.onPageChange,r=Math.ceil(a/t),s=[],d=1;d<=r;d+=1)s.push(d);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{" disabled":1===i}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){return i>1&&l(i-1)},children:"\xab"})}),s.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{" active":e===i}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return l(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{" disabled":i===s.length}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:function(){return i<s.length&&l(i+1)},children:"\xbb"})})]})},u=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(r.useState)(1),a=Object(l.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(3),s=Object(l.a)(n,2),o=s[0],h=s[1],b=u.length,p=c*o-o,g=p+o-1<=b?p+o:u.length,m=Object(i.a)(u).slice(p,g);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(p+1," - ").concat(g," of ").concat(b,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){h(+e.target.value),t(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:b,perPage:o,currentPage:c,onPageChange:function(e){e!==c&&t(e)}}),Object(j.jsx)("ul",{children:m.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},+e.slice(5))}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c5f013f.chunk.js.map