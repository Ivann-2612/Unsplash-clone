(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/logo.a88cc0fc.PNG"},17:function(e,a,t){e.exports=t(48)},22:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=(t(22),t(3)),m=t.n(s),o=t(14),u=t(2),i=(t(24),t(15)),p=t.n(i),f=(t(42),t(43),r.a.memo((function(e){var a=e.user,t=e.urls;return r.a.createElement("div",{className:"Image-Wrapper"},r.a.createElement("img",{src:t.small,alt:""}),r.a.createElement("a",{href:a.links.html,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"User-Info"},r.a.createElement("div",{className:"User-Info-Wrapper"},r.a.createElement("img",{src:a.profile_image.small,alt:"",className:"User-Avatar"}),r.a.createElement("small",{className:"Username"},a.first_name," ",a.last_name)))))}))),E=r.a.memo((function(e){var a=e.images,t=e.notFound,n=a.map((function(e,a){return r.a.createElement(f,Object.assign({key:a},e))}));return r.a.createElement("div",{className:"Images"},t?r.a.createElement("h1",{className:"notFound"},"Not found!"):n)})),h=(t(44),t(16)),d=t.n(h),v=r.a.memo((function(){return r.a.createElement("nav",{className:"NavBar-Wrapper"},r.a.createElement("div",{className:"Logo-Wrapper"},r.a.createElement("img",{src:d.a,alt:"",className:"logo"})),r.a.createElement("div",{className:"Author-Wrapper"},r.a.createElement("a",{href:"https://github.com/Ivann-2612",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"author"},"Ivan Nikolic"))))})),N=(t(45),function(e){return r.a.createElement("div",{className:"Banner-Wrapper"},r.a.createElement("div",{className:"Banner"},r.a.createElement("div",{className:"Banner-Content"},r.a.createElement("h1",{className:"Banner-Title"},"Unsplash"),r.a.createElement("p",{className:"Banner-Text-1"},"Beautiful, free photos."),r.a.createElement("p",{className:"Banner-Text-2"},"Powered by creators everywhere."),e.children)))}),b=(t(46),r.a.memo((function(e){var a=e.searchHandler,t=Object(n.useState)(""),l=Object(u.a)(t,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"SearchBox-Wrapper"},r.a.createElement("button",{className:"SearchBox-Button fa fa-search",onClick:function(){return a(c)}}),r.a.createElement("input",{type:"text",placeholder:"Search free high-resolution photos...",required:!0,className:"SearchBox-Input",onChange:function(e){var a=e.target;return s(a.value)},onKeyUp:function(e){return"Enter"===e.key?a(c):null}}))}))),g=(t(47),function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"links-wrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:""},"Back to school")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Wallpapers")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Nature")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Experimental")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"People")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Fashion")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Film")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Business")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Health")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Interiors"))))}),k="?page=1&per_page=50&client_id=".concat("wSuf86m2SbqRlxRSsetTfPkc9GJuvSk0wD7SVj0HhcI"),B=r.a.memo((function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),i=s[0],f=s[1],h=Object(n.useState)(!1),d=Object(u.a)(h,2),B=d[0],j=d[1],x=Object(n.useState)(""),S=Object(u.a)(x,2),O=S[0],y=S[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.unsplash.com",a+=O?"/search/photos/".concat(k,"&query=").concat(O):"/photos".concat(k),e.prev=2,e.next=5,p()(a);case 5:t=e.sent,l(O?t.data.results:t.data),j(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),f(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}})()()}),[O]),i?r.a.createElement("h1",{style:{textAlign:"center"}},"Error!"):r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement(N,null,r.a.createElement(b,{searchHandler:function(e){return y(e)}})),r.a.createElement(E,{images:t,notFound:B}))}));c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3b19e76f.chunk.js.map