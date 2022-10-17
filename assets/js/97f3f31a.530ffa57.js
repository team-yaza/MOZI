"use strict";(self.webpackChunkmozi_docs=self.webpackChunkmozi_docs||[]).push([[5126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),g=l,k=m["".concat(i,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={slug:"use-service-worker",title:"\uc11c\ube44\uc2a4\uc6cc\ucee4 \uc0ac\uc6a9\ud574\ubcf4\uae30",authors:["chanhui"],tags:["PWA","Service Worker","MOZI"]},o=void 0,p={permalink:"/blog/use-service-worker",source:"@site/blog/2022-07-06-service-worker-\uc0ac\uc6a9\ud558\uae30.md",title:"\uc11c\ube44\uc2a4\uc6cc\ucee4 \uc0ac\uc6a9\ud574\ubcf4\uae30",description:"\ubcf8 \ud3ec\uc2a4\ud305\uc740 \uc544\ub798 \ub9c1\ud06c\uc758 \ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud504\ub85c\uadf8\ub808\uc2dc\ube0c \uc6f9 \uc571 \ucc45\uc744 \ubcf4\uba70 \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uc2a4\uc2a4\ub85c \uc815\ub9ac\ud55c \uac83 \uc785\ub2c8\ub2e4.",date:"2022-07-06T00:00:00.000Z",formattedDate:"July 6, 2022",tags:[{label:"PWA",permalink:"/blog/tags/pwa"},{label:"Service Worker",permalink:"/blog/tags/service-worker"},{label:"MOZI",permalink:"/blog/tags/mozi"}],readingTime:4.913333333333333,hasTruncateMarker:!0,authors:[{name:"\uc720\ucc2c\ud76c",title:"Front End Engineer",url:"https://github.com/HanCiHu",imageURL:"https://github.com/hancihu.png",key:"chanhui"}],frontMatter:{slug:"use-service-worker",title:"\uc11c\ube44\uc2a4\uc6cc\ucee4 \uc0ac\uc6a9\ud574\ubcf4\uae30",authors:["chanhui"],tags:["PWA","Service Worker","MOZI"]},prevItem:{title:"CacheStorage API \uc0ac\uc6a9\ud558\uae30",permalink:"/blog/use-cache-storage-api"},nextItem:{title:"PWA(Progressive Web App)\ub780 \ubb34\uc5c7\uc778\uac00?",permalink:"/blog/What-is-PWA"}},i={authorsImageUrls:[void 0]},s=[{value:"1. \uc11c\ube44\uc2a4 \uc6cc\ucee4 \ub9cc\ub4e4\uae30",id:"1-\uc11c\ube44\uc2a4-\uc6cc\ucee4-\ub9cc\ub4e4\uae30",level:2},{value:"2. \uc6f9\uc5d0\uc11c \ucf58\ud150\uce20 \uac00\uc838\uc624\uae30",id:"2-\uc6f9\uc5d0\uc11c-\ucf58\ud150\uce20-\uac00\uc838\uc624\uae30",level:2},{value:"3. \uc624\ud504\ub77c\uc778 \uc694\uccad \uac10\uc9c0\ud558\uae30",id:"3-\uc624\ud504\ub77c\uc778-\uc694\uccad-\uac10\uc9c0\ud558\uae30",level:2},{value:"4. \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc\uc5d0\uc11c HTML Response \ubcf4\ub0b4\uae30",id:"4-\uc624\ud504\ub77c\uc778-\uc0c1\ud0dc\uc5d0\uc11c-html-response-\ubcf4\ub0b4\uae30",level:2},{value:"5. \uc11c\ube44\uc2a4 \uc6cc\ucee4\uc758 Scope",id:"5-\uc11c\ube44\uc2a4-\uc6cc\ucee4\uc758-scope",level:2},{value:"6. Link",id:"6-link",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/d41e3773-1274-46d1-87ff-7b0181abb749/image.png",alt:null})),(0,l.kt)("p",null,"\ubcf8 \ud3ec\uc2a4\ud305\uc740 \uc544\ub798 \ub9c1\ud06c\uc758 ",(0,l.kt)("strong",{parentName:"p"},"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud504\ub85c\uadf8\ub808\uc2dc\ube0c \uc6f9 \uc571")," \ucc45\uc744 \ubcf4\uba70 \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uc2a4\uc2a4\ub85c \uc815\ub9ac\ud55c \uac83 \uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=190254386"},"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud504\ub85c\uadf8\ub808\uc2dc\ube0c \uc6f9 \uc571")),(0,l.kt)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc2e4\uc2b5 \ucf54\ub4dc\ub294 \ud3ec\uc2a4\ud305 \ub9e8 \uc544\ub798 \ub9c1\ud06c\uc5d0 \ucca8\ubd80\ud574\ub450\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"1-\uc11c\ube44\uc2a4-\uc6cc\ucee4-\ub9cc\ub4e4\uae30"},"1. \uc11c\ube44\uc2a4 \uc6cc\ucee4 \ub9cc\ub4e4\uae30"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout origin/ch02-start")," \uba85\ub839\uc73c\ub85c \uccab\ubc88\uc9f8 \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud574\ubcf4\uc790."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ch02-start")," \ube0c\ub79c\uce58\ub85c \uc774\ub3d9\ud588\ub2e4\uba74 app.js \ud30c\uc77c\uc758 \ub9e8 \uc704\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \ub123\uc5b4\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'if ("serviceWorker" in navigator) {\n  navigator.serviceWorker\n    .register("/sw.js")\n    .then(function (registration) {\n      console.log("Service Worker registered with scope:", registration.scope);\n    })\n    .catch(function (err) {\n      console.log("Service Worker registration failed", err);\n    });\n}\n')),(0,l.kt)("p",null,"\uba3c\uc800 \ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ube44\uc2a4\uc6cc\ucee4\ub97c \uc9c0\uc6d0\ud558\ub294\uc9c0 \ud655\uc778\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\uac00 \uc11c\ube44\uc2a4\uc6cc\ucee4\ub97c \uc9c0\uc6d0\ud55c\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"navigator.serviceWorker.register"),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \ub4f1\ub85d\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"navigator.serviceWorker.register")," \ub294 \ub450\uac1c\uc758 \uc778\uc790\ub97c \ubc1b\ub294 \ud568\uc218\uc778\ub370 \uccab \ubc88\uc9f8 \uc778\uc790\ub294 \uc11c\ube44\uc2a4 \uc6cc\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc758 URL\uc774\uace0, \ub450\ubc88\uc9f8\ub294 option \uac1d\uccb4\uc774\ub2e4."),(0,l.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"option \uac1d\uccb4"),"\uc5d0 \ub300\ud574\uc11c\ub294 \uc790\uc138\ud788 \ub2e4\ub8e8\uc9c0 \uc54a\uace0 \ub098\uc911\uc5d0 \ub2e4\ub8f0 \uc608\uc815\uc774\ub2e4."),(0,l.kt)("p",null,"\uc774\uc0c1\ud0dc\ub85c \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uac8c \ub418\ub294\ub370, \ub2f9\uc5f0\ud558\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"public \ud3f4\ub354"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"sw.js"),"\ub77c\ub294 \ud30c\uc77c\uc774 \uc5c6\uae30\ub54c\ubb38\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/3640da62-ece5-4c8c-8cfe-a6f8bca8bc36/image.png",alt:null})),(0,l.kt)("p",null,"public \ud3f4\ub354 \uc548\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"sw.js")," \ud30c\uc77c\uc744 \ucd94\uac00\ud574\uc8fc\uae30\ub9cc \ud574\ub3c4 \ub4f1\ub85d\uc740 \ub418\ub294\uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sw.js"),"\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\ubcf4\uace0 \uc6f9\ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'self.addEventListener("fetch", function (event) {\n  console.log("Fetch request for: ", event.request.url);\n});\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/1dddd78c-e12d-4371-962b-bd5536702193/image.png",alt:null})),(0,l.kt)("p",null,"\uc704 \uc0ac\uc9c4\ucc98\ub7fc fetch\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 console\uc5d0 \ucc0d\ud788\ub294 \uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc774\uac74 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc694\uccad\ub418\ub294 \ubaa8\ub4e0 fetch \uc694\uccad\uc744 \uc911\uac04\uc5d0 \uac00\ub85c\ucc44\uc11c \ubd84\uc11d\ud558\uace0 \uc870\uc791\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,l.kt)("h2",{id:"2-\uc6f9\uc5d0\uc11c-\ucf58\ud150\uce20-\uac00\uc838\uc624\uae30"},"2. \uc6f9\uc5d0\uc11c \ucf58\ud150\uce20 \uac00\uc838\uc624\uae30"),(0,l.kt)("p",null,"sw.js\uc758 \ucf54\ub4dc\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uace0\uce58\uace0 \uc6f9\ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68 \ud574\ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'self.addEventListener("fetch", function (event) {\n  if (event.request.url.includes("/img/logo.png")) {\n    event.respondWith(fetch("/img/logo-flipped.png"));\n  }\n});\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/91a65ada-ea5a-44db-8b55-e6e9337cbd12/image.png",alt:null})),(0,l.kt)("p",null,"\ub4e4\uc5b4\uc624\ub294 fetch \uc694\uccad \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"img/logo.png"),"\uc778 \uc694\uccad\uc744 \uac00\ub85c\ucc44\uc11c \ub300\uc2e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"/img/logo-flipped.png")," \ub97c fetch\ub85c reponse\ub97c \uc0dd\uc131\ud558\uace0 respondWith \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ub798 request \uc774\ubca4\ud2b8\uc5d0 \uc751\ub2f5\ud55c\ub2e4."),(0,l.kt)("p",null,"\uc6a9\uc5b4\ub97c \uc5b4\ub835\uac8c \uc801\uc5b4\ub1a8\uc9c0\ub9cc \uc694\uc57d\ud558\uc790\uba74 \uc11c\ube44\uc2a4\uc6cc\ucee4\ub294 \ub85c\uace0 \uc694\uccad\uc744 \uae30\ub2e4\ub9ac\uace0 \uc788\ub2e4\uac00 \uc694\uccad\uc774 \uc624\uba74 \ub2e4\ub978 \ub85c\uace0\ub97c \ub300\uc2e0 \uc751\ub2f5\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("h2",{id:"3-\uc624\ud504\ub77c\uc778-\uc694\uccad-\uac10\uc9c0\ud558\uae30"},"3. \uc624\ud504\ub77c\uc778 \uc694\uccad \uac10\uc9c0\ud558\uae30"),(0,l.kt)("p",null,"\uc55e\uc120 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 PWA\ub294 \uc624\ud504\ub77c\uc778\uc744 \uc9c0\uc6d0\ud55c\ub2e4\uace0 \ud558\uc600\ub294\ub370 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub294 \uc624\ud504\ub77c\uc778\uc744 \uc5b4\ub5bb\uac8c \uac10\uc9c0\ud558\ub294\uac83\uc77c\uae4c?"),(0,l.kt)("p",null,"\ub2e4\uc74c\ucf54\ub4dc\ub97c \ud568\uaed8 \ubcf4\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'self.addEventListener("fetch", function (event) {\n  event.respondWith(\n    fetch(event.request).catch(function () {\n      return new Response("hello world !\\n");\n    })\n  );\n});\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"respondWith"),"\uc548\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"fetch(event.request)"),"\uac00 \uc788\ub2e4. \uc989, \ubaa8\ub4e0 fetch \uc694\uccad\uc5d0 \ub300\ud574 \uadf8\ub300\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\uc8fc\uace0 \uc788\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("p",null,"\ub2e4\ub9cc \uadf8\ub300\ub85c \ubcf4\ub0b4\uc8fc\ub294 \uc694\uccad\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0 catch\ub85c \ubc1b\uc544\uc11c \uc0c8\ub85c\uc6b4 \uc751\ub2f5\uc744 \ubcf4\ub0b4\uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \uc624\ud504\ub77c\uc778\uc744 \uac10\uc9c0\ud558\uac8c \ub41c\ub2e4."),(0,l.kt)("p",null,"\uc624\ud504\ub77c\uc778\uc774\uba74 fetch \uc694\uccad\uc5d0\uc11c \ub2f9\uc5f0\ud788 \uc608\uc678\uac00 \ubc1c\uc0dd\ud560 \uc218 \ubc16\uc5d0 \uc5c6\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/bb879676-dd9b-4d5a-a620-dbc88c076f22/image.png",alt:null})),(0,l.kt)("p",null,"\uc704 \uadf8\ub9bc\ucc98\ub7fc \uacb0\uacfc\uac00 \ub098\uc624\uac8c \ub41c\ub2e4."),(0,l.kt)("h2",{id:"4-\uc624\ud504\ub77c\uc778-\uc0c1\ud0dc\uc5d0\uc11c-html-response-\ubcf4\ub0b4\uae30"},"4. \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc\uc5d0\uc11c HTML Response \ubcf4\ub0b4\uae30"),(0,l.kt)("p",null,"\uc624\ud504\ub77c\uc778 \uc0c1\ud0dc\uc5d0\uc11c \ud06c\ub86c\uae30\uc900 \uc774\uc0c1\ud55c \uacf5\ub8e1 \uce5c\uad6c\uac00 \uc548\ub098\uc624\ub294\uac83 \uae4c\uc9c0\ub294 \uc88b\uc740\ub370 hello world! \ub294 \uc880 \uc2ec\ud55c\uac83 \uac19\ub2e4."),(0,l.kt)("p",null,"\uc608\uc058\uac8c \uace0\uccd0\uc8fc\ub3c4\ub85d \ud558\uc790."),(0,l.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc544\ub798\ucc98\ub7fc \uace0\uccd0\uc8fc\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const responseContent =\n  "<html>" +\n  "<body>" +\n  "<style>" +\n  "body {text-align: center; background-color: #333; color: #eee;}" +\n  "</style>" +\n  "<h1>Gotham Imperial Hotel</h1>" +\n  "<p>There seems to be a problem with your connection.</p>" +\n  "<p>Come visit us at 1 Imperial Plaza, Gotham City for free WiFi.</p>" +\n  "</body>" +\n  "</html>";\n\nself.addEventListener("fetch", function (event) {\n  event.respondWith(\n    fetch(event.request).catch(function () {\n      return new Response(responseContent, {\n        headers: { "Content-Type": "text/html" },\n      });\n    })\n  );\n});\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/8708f3fe-f53b-45a1-bb98-62afe6d87a0b/image.png",alt:null})),(0,l.kt)("p",null,"responseContent\ub85c \uc815\uc758\ud55c \ubb38\uc790\uc5f4\uc5d0 headers\ub97c html type\uc73c\ub85c \uc815\uc758\ud558\uc5ec \ubcf4\ub0b4\uc900 \ubaa8\uc2b5\uc774\ub2e4."),(0,l.kt)("p",null,"\ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\ub97c \ub80c\ub354\ub9c1\ud574\uc8fc\ub294\uac8c \uc544\ub2c8\ub77c HTML\uc744 \ub80c\ub354\ub9c1 \ud574\uc8fc\ub3c4\ub85d \uace0\uccd0\uc8fc\uc5c8\ub2e4."),(0,l.kt)("h2",{id:"5-\uc11c\ube44\uc2a4-\uc6cc\ucee4\uc758-scope"},"5. \uc11c\ube44\uc2a4 \uc6cc\ucee4\uc758 Scope"),(0,l.kt)("p",null,"\ud604\uc7ac\ub294 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \ud504\ub85c\uc81d\ud2b8\uc758 root \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud574\uc8fc\uc5b4\uc11c \ubaa8\ub4e0 \uc694\uccad\uc744 \ub2e4 \uac70\uccd0\uc11c \ub4e4\uc5b4\uc624\ub3c4\ub85d \ud588\uc9c0\ub9cc \uc2e4\uc740 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub294 \uc11c\ube44\uc2a4 \uc6cc\ucee4 \ud30c\uc77c\uc758 \uc704\uce58\uc5d0 \ub530\ub77c \uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"navigator.serviceWorker.register")," \uc5d0\uc11c \uc9c0\uc815\ud574\uc900 Scope \uc635\uc158\uc5d0 \ub530\ub77c \uc694\uccad\uc758 \ubc94\uc704\ub97c \uc870\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,l.kt)("inlineCode",{parentName:"p"},'navigator.serviceWorker.register("sw.js", {scope: "/js"})')," \ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"/js")," \ud3f4\ub354\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc694\uccad\uc5d0 \ub300\ud574\uc11c\ub9cc \uc81c\uc5b4\uac00 \uac00\ub2a5\ud558\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'navigator.serviceWorker.register("/js/sw.js")')," \ub294 js \ud3f4\ub354 \ub0b4\ubd80\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 \uc694\uccad\ub9cc \ud574\ub2f9 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub85c \uc804\ub2ec\uc774 \ub41c\ub2e4."),(0,l.kt)("p",null,"js \ud3f4\ub354 \uc548\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"sw.js")," \ud30c\uc77c\uc744 \ub9cc\ub4e4\uace0, \ub8e8\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\uc744 js \ud3f4\ub354 \uc548\uc5d0\ub3c4 \ubcf5\uc0ac\ud574\uc8fc\uc5c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'self.addEventListener("fetch", function (event) {\n  console.log("fetch", event.request.url);\n});\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/0162ae42-4c67-4803-9a06-d32b9f48663b/image.png",alt:null})),(0,l.kt)("p",null,"\uc774\ud6c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.js"),"\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"js/sw.js"),"\ub97c \uc11c\ube44\uc2a4\uc6cc\ucee4\uc5d0 \ub4f1\ub85d\ud558\uc600\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'navigator.serviceWorker\n  .register("/js/sw.js")\n  .then(function (registration) {\n    console.log(\n      "in js dir Service Worker registered with scope:",\n      registration.scope\n    );\n  })\n  .catch(function (err) {\n    console.log("Service Worker registration failed", err);\n  });\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uadf8 \uacb0\uacfc")),(0,l.kt)("p",null,"\ub8e8\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\uc740 \ucf58\uc194\uc5d0 \uc11c\ube44\uc2a4\uc6cc\ucee4\uac00 \ub4f1\ub85d\ub418\uc5c8\ub2e4\ub294 \ucf58\uc194\ub9cc \ub728\uc9c0\ub9cc"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/f366e611-b78b-44f8-8d3d-a48a30d6de9c/image.png",alt:null})),(0,l.kt)("p",null,"/js/index.html\ub85c \ub4e4\uc5b4\uac00\ubcf4\uba74?"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://velog.velcdn.com/images/hancihu/post/86d38ace-c137-4964-81cf-1b0acf4b95aa/image.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/js/sw.js"),"\uc5d0 \uc801\uc5b4\ub454\ub300\ub85c fetch\uc694\uccad\uc774 \ubaa8\ub450 \ucf58\uc194\uc5d0 \ucc0d\ud788\uace0 \uc788\ub2e4\u2026!!"),(0,l.kt)("p",null,"\ubaa8\ub4e0 fetch \uc694\uccad\uc774 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \uc9c0\ub098\uac8c \uad6c\ud604\ud558\uba74 \ubb54\uac00 \ubb38\uc81c\uac00 \uc0dd\uae38 \uac83 \uac19\ub2e4\uace0 \uc0dd\uac01\ud588\ub294\ub370 scope\ub97c \uc801\uadf9\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\uc5ec \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \uc801\uc7ac\uc801\uc18c\uc5d0 \ub9de\uac8c \uc124\uc815\ud574\uc8fc\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4."),(0,l.kt)("h2",{id:"6-link"},"6. Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/TalAter/gotham_imperial_hotel"},"\uc2e4\uc2b5 \ucf54\ub4dc \ub9c1\ud06c")))}u.isMDXComponent=!0}}]);