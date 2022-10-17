---
slug: use-cache-storage-api
title: CacheStorage API 사용하기
authors: [chanhui]
tags: [PWA, Service Worker, Cache Storage API, MOZI]
---

본 포스팅은 아래 링크의 **만들면서 배우는 프로그레시브 웹 앱** 책을 보며 공부한 내용을 스스로 정리한 것 입니다.

[만들면서 배우는 프로그레시브 웹 앱](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=190254386)

이번 포스팅부터 사용할 실습 코드는 포스팅 맨 아래 링크에 첨부해두었습니다.

## 0. 오프라인 페이지 개선하기

이전 포스팅에서는 오프라인 상태를 감지하면 HTML 형식의 응답을 주도록 구현을 해보았다.

오프라인 화면을 좀 더 개선하기 위해 HTML 형식의 응답이 아닌 이미지와 스타일 시트가 포함된 HTML 파일을 넘겨주고 싶다면 어떻게 하면될까?

다음 코드를 함께 살펴보자

```python
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.requst).catch(function () {
      return fetch("/index-offline.html");
    })
  );
});
```

오프라인 상태를 감지하면 `index-offline.html` 을 넘겨주는 코드이다.

다만, 여기에서는 무언가 이상한게 있는데, 오프라인 상태인데 `index-offline.html` 를 어떻게 알고 요청을 받아서 넘겨주는 것일까?

사용자가 온라인 일때 `index-offline.html` 파일을 받아놓았다 하더라도 어디에 이 파일이 저장되어있다가 오프라인일때 제공을 해줄 수 있는 것일까?

그 해답은 `CacheStorage API`에 있다.

## 1. 파일 캐시하기

파일을 캐시하는 과정을 살펴보자.

오프라인 버전의 파일을 가져오기 위해서는 당연한 이야기지만 사용자가 온라인 일때 해당 파일도 같이 받아와야 한다.

서비스 워커의 `Life Cycle` 은 다음과 같다.

![](https://velog.velcdn.com/images/hancihu/post/f338dd14-8faf-4555-8286-3440be11916e/image.png)

앞서 만들어본 서비스 워커에서는 활성화된 서비스 워커에 의해서 잡히는 이벤트(fetch)를 받는 데 사용했다.

하지만 지금 하려고 하는것은 활성화 된 서비스 워커에서 해야하는 일이 아니다. 활성화 되기 전에 오프라인 환경에서 사용할 파일을 캐싱해야한다.

서비스 워커의 `install 이벤트`는 서비스 워커가 가장 처음 등록된 직후, 그리고 이벤트가 활성화 되기 전에 단 한번만 발생하는 이벤트이다. 서비스 워커가 페이지를 제어하고 fetch 이벤트 수신을 시작하기 전에, 오프라인 화 가능한 모든 파일을 캐싱 할 기회를 얻을 수 있다.

`git checkout ch03-start` 명령을 사용하여 실습 환경 세팅을 하고 serviceworker.js 코드를 아래와 같이 고쳐보자.

```python
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("c").then(function (cache) {
      return cache.add("/index-offline.html");
    })
  );
});
```

위 코드의 `install 이벤트`는 설치 단계에서 새로운 서비스 워커가 등록된 **직후** 호출된다.

서비스 워커가 성공적으로 설치가 진행되고 새 서비스 워커가 활성화 되었다고 말하기 전에 성공적으로 캐싱을 해야 한다. 파일을 가져와 캐시에 저장하는 일이 비동기적으로 일어나기 때문에, 비동기 이벤트가 완료될 때까지 이벤트를 연기해야한다.

`waitUntil` 은 전달된 프로미스가 `resolve`될 때까지 이벤트의 수명을 연장한다.

당연하게도 `activate` 상태에서 `waitUntil`을 사용하여 캐시하여도 일단은 서비스 워커가 활성화 완료되기 전이기에 캐시는 정상적으로 된다. 하지만 그렇게 구현하는 경우 캐시가 정상적으로 되지 않을때 서비스 워커의 install 자체를 취소해야하는 경우가 생길 수 있는데 이러한 경우 이미 install이 끝나서 취소를 할 수 없기에 `install 이벤트`에서 `waitUntil`을 해주는 것이 좋다.

`caches`를 불러올때 `“c”`라는 캐시명을 전달해주었다.

이렇게 해준 이후 오프라인을 활성화 하고 새로고침을 눌러보자.

![](https://velog.velcdn.com/images/hancihu/post/1c302b87-aa84-4b21-805a-702784ef5670/image.png)

캐시된 파일이 안불러와지고 오프라인 공룡이 뜬다.

당연하다. 캐시만 했을뿐 오프라인이 감지 되었을때 캐시된 데이터를 불러오라는 로직은 없기 때문이다.

## 2. CacheStorage로부터 요청 받아오기

```python
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match("/index-offline.html");
    })
  );
});
```

오프라인이 감지된다면 캐시 된 데이터 중 `cache.match` 를 사용하여 `CacheStorage`에서 파일을 반환받는다.

캐시에 `index-offline.html`이 있는지는 확인하지 않아도 된다.

앞선 로직은 성공적으로 캐시가 되야만 서비스 워커가 install되는 로직이기 때문이다.

![](https://velog.velcdn.com/images/hancihu/post/53ba7be0-2654-43bf-937d-2c4e8fe8b546/image.png)

실행 화면을 보니 html 파일은 잘 캐싱이 된 듯 하지만 html 파일 내부에서 불러오는 다른 파일들은 캐싱이 전혀 안 되지 않은 듯 하다.

## 3. 여러개 캐싱하고 올바른 응답 매칭하기

일단 필요한 파일을 전부 캐싱을 해보자.

```jsx
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("gih-cache").then(function (cache) {
      return cache
        .add("/index-offline.html")
        .then(function () {
          return cache.add(
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          );
        })
        .then(function () {
          return cache.add("/css/gih-offline.css");
        })
        .then(function () {
          return cache.add("/img/jumbo-background-sm.jpg");
        })
        .then(function () {
          return cache.add("/img/logo-header.png");
        });
    })
  );
});
```

위와 같은 코드로 작성해도 되지만 실은 너무 못생겼다…

하나씩 `add` 해주지 말고 `addAll 함수`를 사용하여 한번에 캐싱해주도록 하자.

`addAll`은 하나의 URL대신 모든 URL을 배열로 가져와 캐시에 저장하는데 요청이 실패할 경우 `reject` 된다.

```jsx
const CACHE_NAME = "gih-cache";
const CACHE_URLS = [
  "/index-offline.html",
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
  "/css/gih-offline.css",
  "/img/jumbo-background-sm.jpg",
  "/img/logo-header.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_URLS);
    })
  );
});
```

`allAll` 함수를 사용하니 확실히 코드가 깔끔하게 바뀐 모습이다.

![](https://velog.velcdn.com/images/hancihu/post/d3b88643-dfb4-482b-b26f-5a2e081d3c90/image.png)

하지만 이 상태로 실행해도 이전과 결과가 똑같이 나오는데, 이것도 당연하다.

추가적으로 캐싱만 해줬을 뿐 응답하는 로직은 안바꿔줬기 때문이다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else if (event.request.headers.get("accept").includes("text/html")) {
          return caches.match("/index-offline.html");
        }
      });
    })
  );
});
```

코드를 보면 만약 오프라인 이면 (`request fetch` 과정에서 실패하여 `catch`로 넘어오면) 캐시에서 해당 `request`가 캐시에 있는지 `match`를 해서 있다면 응답을 그대로 리턴해준다.

그런데 여기에서 조금 이상한 점은 `match`를 해준 다음 캐시되었는지 아닌지를 찾을때 `catch`로 찾는게 아닌 `then`에서 예외를 처리해주고 있는데, 그 이유는 `cache.match`는 찾지 못하면 프로미스를 `reject` 하는게 아니라 `undefined`를 반환하고, 절때 `reject`되지 않기때문이다.

![](https://velog.velcdn.com/images/hancihu/post/54778996-ddb4-4b7a-9d44-bc1fc98aebe9/image.png)

이렇게까지 응답을 매칭해준 이후에야 이쁘게 오프라인 화면이 잘 보이는 모습이다.

> 다음 포스팅은 서비스 워커의 자세한 Life Cycle과 캐시 관리에 대해 공부해볼 예정입니다.

## 4. Link

[실습 코드 링크](https://github.com/TalAter/gotham_imperial_hotel)
