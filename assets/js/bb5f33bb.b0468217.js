"use strict";(self.webpackChunkmozi_docs=self.webpackChunkmozi_docs||[]).push([[1397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(r),h=o,m=b["".concat(l,".").concat(h)]||b[h]||p[h]||a;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"web-push",title:"Web Push",authors:["hyunjin"],tags:["WebPush","MOZI"]},u=void 0,i={permalink:"/blog/web-push",source:"@site/blog/2022-11-09-Web-Push.md",title:"Web Push",description:"Push API\ub294 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud604\uc7ac \ub85c\ub529\uc774 \ub418\uc5b4 \uc788\uc9c0 \uc54a\ub354\ub77c\ub3c4 \uc11c\ubc84\ub85c\ubd80\ud130 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uae30\ub2a5\uc774\ub2e4. \uc774\ub294 \uac1c\ubc1c\uc790\ub4e4\uc774 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0c8\ub85c\uc6b4 \ub0b4\uc6a9\uc744 \uc2dc\uae30\uc801\uc808\ud558\uac8c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.",date:"2022-11-09T00:00:00.000Z",formattedDate:"November 9, 2022",tags:[{label:"WebPush",permalink:"/blog/tags/web-push"},{label:"MOZI",permalink:"/blog/tags/mozi"}],readingTime:1.1966666666666668,hasTruncateMarker:!1,authors:[{name:"\uc774\ud604\uc9c4",title:"Front End Engineer",url:"https://github.com/hyunjinee",imageURL:"https://github.com/hyunjinee.png",key:"hyunjin"}],frontMatter:{slug:"web-push",title:"Web Push",authors:["hyunjin"],tags:["WebPush","MOZI"]},nextItem:{title:"SEO \ucd5c\uc801\ud654\ud558\uae30",permalink:"/blog/seo"}},l={authorsImageUrls:[void 0]},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Push API\ub294 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud604\uc7ac \ub85c\ub529\uc774 \ub418\uc5b4 \uc788\uc9c0 \uc54a\ub354\ub77c\ub3c4 \uc11c\ubc84\ub85c\ubd80\ud130 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uae30\ub2a5\uc774\ub2e4. \uc774\ub294 \uac1c\ubc1c\uc790\ub4e4\uc774 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0c8\ub85c\uc6b4 \ub0b4\uc6a9\uc744 \uc2dc\uae30\uc801\uc808\ud558\uac8c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 push \uba54\uc2dc\uc9c0\ub97c \ubc1b\uae30 \uc704\ud574\uc11c, service worker\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"PushManager.subscribe()\nPushSubscription\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubcf4\ub0b4\uc57c\ud558\ub294 push \uba54\uc2dc\uc9c0\ub97c \ub2f4\uace0,(\uc5d4\ub4dc \ud3ec\uc778\ud2b8\uc640 \uc554\ud638\ud654\ud0a4\uac00 \ud544\uc694) service worker\ub294 ServiceWorkerGlobalScope.onpush()\ub77c\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c\ubd80\ud130 \uc804\ub2ec\ub418\ub294 push \uba54\uc2dc\uc9c0\ub97c \ucc98\ub9ac\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac01 \uc694\uccad\uc740 capability URL:(\ub2f9\uc2e0\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158)\uc744 \ud2b9\uc815\ud558\uc5ec \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uad6c\uc131\ud558\uae30 \ub54c\ubb38\uc5d0 URL\uc740 \ubcf4\uc548\uc5d0 \uc2e0\uacbd\uc744 \uc368\uc57c\ud558\uba70, \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \ub2e4\ub978 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub2f9\uc2e0\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 push \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uac00\ub2a5\uc131\ub3c4 \uc788\ub2e4."),(0,o.kt)("p",null,"push \uba54\uc2dc\uc9c0\ub97c \uc804\ub2ec\ud558\uae30 \uc704\ud574 service worker\ub97c \ud65c\uc131\ud654\ud558\ub294\uac74, \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\uc774 \ub298\uc5b4\ub098\ub294 \uacb0\uacfc\ub97c \uac00\uc838\uc624\uae30 \ub54c\ubb38\uc5d0, \ud2b9\ud788 \ubc30\ud130\ub9ac \uc0ac\uc6a9\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4. \ud55c\ud3b8 push \uba54\uc2dc\uc9c0 \ucc98\ub9ac\ub97c \uc704\ud574 \ube0c\ub77c\uc6b0\uc800 \uac04 \ub2e4\ub978 \uc2a4\ud0a4\ub9c8\ub97c \uac00\uc9c0\uae30 \ub54c\ubb38\uc5d0, \ud45c\uc900\ud654\ub41c \uba54\ucee4\ub2c8\uc998\uc774 \uc5c6\ub2e4."))}p.isMDXComponent=!0}}]);