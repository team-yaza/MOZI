"use strict";(self.webpackChunkmozi_docs=self.webpackChunkmozi_docs||[]).push([[6881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"rendering-patterns",title:"Rendering Patterns",authors:["hyunjin"],tags:["React","Next","MOZI"]},i="Rendering Patterns",l={permalink:"/blog/rendering-patterns",source:"@site/blog/2022-07-03-rendering-patterns.md",title:"Rendering Patterns",description:"\ubc1c\ud45c \uc601\uc0c1",date:"2022-07-03T00:00:00.000Z",formattedDate:"July 3, 2022",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"Next",permalink:"/blog/tags/next"},{label:"MOZI",permalink:"/blog/tags/mozi"}],readingTime:12.433333333333334,hasTruncateMarker:!0,authors:[{name:"\uc774\ud604\uc9c4",title:"Front End Engineer",url:"https://github.com/hyunjinee",imageURL:"https://github.com/hyunjinee.png",key:"hyunjin"}],frontMatter:{slug:"rendering-patterns",title:"Rendering Patterns",authors:["hyunjin"],tags:["React","Next","MOZI"]},prevItem:{title:"PWA(Progressive Web App)\ub780 \ubb34\uc5c7\uc778\uac00?",permalink:"/blog/What-is-PWA"},nextItem:{title:"\ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba70 \uc77d\uc740 \uae00",permalink:"/blog/\ud504\ub85c\uc81d\ud2b8\ub97c-\ud558\uba70-\uc77d\uc740-\uae00"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hyunjine/post/6daef53b-f21a-40d7-9b31-7fee6c586662/image.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=baVuNEoMOr0"},"\ubc1c\ud45c \uc601\uc0c1")),(0,a.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub9c8\uc5d0\uc2a4\ud2b8\ub85c \uc5f0\uc218\uc0dd \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc774\ud604\uc9c4 \uc785\ub2c8\ub2e4.\n\uc6f9 \ud398\uc774\uc9c0\ub97c \uadf8\ub9ac\ub294 \ub2e4\uc591\ud55c \ub80c\ub354\ub9c1 \ubc29\uc2dd \uc989 Rendering Pattern\ub4e4\uc5d0 \ub300\ud574 \uc774\uc57c\uae30 \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);