---
slug: use-service-worker
title: 서비스워커 사용해보기
authors: [chanhui]
tags: [PWA, Service Worker, MOZI]
---

본 포스팅은 아래 링크의 **만들면서 배우는 프로그레시브 웹 앱** 책을 보며 공부한 내용을 스스로 정리한 것 입니다.

[만들면서 배우는 프로그레시브 웹 앱](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=190254386)

이번 포스팅부터 사용할 실습 코드는 포스팅 맨 아래 링크에 첨부해두었습니다.

## 1. 서비스 워커 만들기

`git checkout origin/ch02-start` 명령으로 첫번째 실습을 진행해보자.

`ch02-start` 브랜치로 이동했다면 app.js 파일의 맨 위에 다음과 같은 코드를 넣어보자.

```jsx
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service Worker registration failed", err);
    });
}
```

<!--truncate-->

먼저 브라우저가 서비스워커를 지원하는지 확인해야한다.

브라우저가 서비스워커를 지원한다면 `navigator.serviceWorker.register`를 호출하여 서비스 워커를 등록한다.

`navigator.serviceWorker.register` 는 두개의 인자를 받는 함수인데 첫 번째 인자는 서비스 워커 스크립트의 URL이고, 두번째는 option 객체이다.

여기에서는 `option 객체`에 대해서는 자세히 다루지 않고 나중에 다룰 예정이다.

이상태로 실행하면 다음과 같은 오류가 발생하게 되는데, 당연하다. `public 폴더`에 `sw.js`라는 파일이 없기때문이다.

![](https://velog.velcdn.com/images/hancihu/post/3640da62-ece5-4c8c-8cfe-a6f8bca8bc36/image.png)

public 폴더 안에 `sw.js` 파일을 추가해주기만 해도 등록은 되는것을 확인 할 수 있다.

`sw.js`에 다음과 같은 코드를 추가해보고 웹페이지를 새로고침해보자.

```jsx
self.addEventListener("fetch", function (event) {
  console.log("Fetch request for: ", event.request.url);
});
```

![](https://velog.velcdn.com/images/hancihu/post/1dddd78c-e12d-4371-962b-bd5536702193/image.png)

위 사진처럼 fetch된 모든 데이터가 console에 찍히는 것을 확인 할 수 있다.

이건 웹 사이트에서 요청되는 모든 fetch 요청을 중간에 가로채서 분석하고 조작할 수 있다는 것을 의미한다.

## 2. 웹에서 콘텐츠 가져오기

sw.js의 코드를 다음과 같이 고치고 웹페이지를 새로고침 해보자.

```jsx
self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("/img/logo.png")) {
    event.respondWith(fetch("/img/logo-flipped.png"));
  }
});
```

![](https://velog.velcdn.com/images/hancihu/post/91a65ada-ea5a-44db-8b55-e6e9337cbd12/image.png)

들어오는 fetch 요청 중 `img/logo.png`인 요청을 가로채서 대신 `/img/logo-flipped.png` 를 fetch로 reponse를 생성하고 respondWith 메소드를 사용하여 원래 request 이벤트에 응답한다.

용어를 어렵게 적어놨지만 요약하자면 서비스워커는 로고 요청을 기다리고 있다가 요청이 오면 다른 로고를 대신 응답한다는 것이다.

## 3. 오프라인 요청 감지하기

앞선 포스팅에서는 PWA는 오프라인을 지원한다고 하였는데 서비스 워커는 오프라인을 어떻게 감지하는것일까?

다음코드를 함께 보자.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return new Response("hello world !\n");
    })
  );
});
```

`respondWith`안에 `fetch(event.request)`가 있다. 즉, 모든 fetch 요청에 대해 그대로 요청을 보내주고 있는 것이다.

다만 그대로 보내주는 요청에서 예외가 발생하는 경우 catch로 받아서 새로운 응답을 보내주는 방식으로 오프라인을 감지하게 된다.

오프라인이면 fetch 요청에서 당연히 예외가 발생할 수 밖에 없기 때문이다.

![](https://velog.velcdn.com/images/hancihu/post/bb879676-dd9b-4d5a-a620-dbc88c076f22/image.png)

위 그림처럼 결과가 나오게 된다.

## 4. 오프라인 상태에서 HTML Response 보내기

오프라인 상태에서 크롬기준 이상한 공룡 친구가 안나오는것 까지는 좋은데 hello world! 는 좀 심한것 같다.

예쁘게 고쳐주도록 하자.

위 코드를 아래처럼 고쳐주자.

```jsx
const responseContent =
  "<html>" +
  "<body>" +
  "<style>" +
  "body {text-align: center; background-color: #333; color: #eee;}" +
  "</style>" +
  "<h1>Gotham Imperial Hotel</h1>" +
  "<p>There seems to be a problem with your connection.</p>" +
  "<p>Come visit us at 1 Imperial Plaza, Gotham City for free WiFi.</p>" +
  "</body>" +
  "</html>";

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return new Response(responseContent, {
        headers: { "Content-Type": "text/html" },
      });
    })
  );
});
```

![](https://velog.velcdn.com/images/hancihu/post/8708f3fe-f53b-45a1-bb98-62afe6d87a0b/image.png)

responseContent로 정의한 문자열에 headers를 html type으로 정의하여 보내준 모습이다.

텍스트 데이터를 렌더링해주는게 아니라 HTML을 렌더링 해주도록 고쳐주었다.

## 5. 서비스 워커의 Scope

현재는 서비스 워커를 프로젝트의 root 폴더에 저장해주어서 모든 요청을 다 거쳐서 들어오도록 했지만 실은 서비스 워커는 서비스 워커 파일의 위치에 따라 그리고 `navigator.serviceWorker.register` 에서 지정해준 Scope 옵션에 따라 요청의 범위를 조정할 수 있다.

예를 들어 `navigator.serviceWorker.register("sw.js", {scope: "/js"})` 는 `/js` 폴더에서 발생한 요청에 대해서만 제어가 가능하다.

`navigator.serviceWorker.register("/js/sw.js")` 는 js 폴더 내부를 대상으로 하는 요청만 해당 서비스 워커로 전달이 된다.

js 폴더 안에 아래와 같은 코드로 `sw.js` 파일을 만들고, 루트 디렉토리의 `index.html`을 js 폴더 안에도 복사해주었다.

```jsx
self.addEventListener("fetch", function (event) {
  console.log("fetch", event.request.url);
});
```

![](https://velog.velcdn.com/images/hancihu/post/0162ae42-4c67-4803-9a06-d32b9f48663b/image.png)

이후 `app.js`에 아래와 같은 코드를 추가하여 `js/sw.js`를 서비스워커에 등록하였다.

```jsx
navigator.serviceWorker
  .register("/js/sw.js")
  .then(function (registration) {
    console.log(
      "in js dir Service Worker registered with scope:",
      registration.scope
    );
  })
  .catch(function (err) {
    console.log("Service Worker registration failed", err);
  });
```

**그 결과**

루트 디렉토리의 `index.html`은 콘솔에 서비스워커가 등록되었다는 콘솔만 뜨지만

![](https://velog.velcdn.com/images/hancihu/post/f366e611-b78b-44f8-8d3d-a48a30d6de9c/image.png)

/js/index.html로 들어가보면?

![](https://velog.velcdn.com/images/hancihu/post/86d38ace-c137-4964-81cf-1b0acf4b95aa/image.png)

`/js/sw.js`에 적어둔대로 fetch요청이 모두 콘솔에 찍히고 있다…!!

모든 fetch 요청이 서비스 워커를 지나게 구현하면 뭔가 문제가 생길 것 같다고 생각했는데 scope를 적극적으로 활용하여 서비스 워커를 적재적소에 맞게 설정해주면 좋을 것 같다는 생각이 들었다.

## 6. Link

[실습 코드 링크](https://github.com/TalAter/gotham_imperial_hotel)
