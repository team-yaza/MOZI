---
slug: offline-first
title: 서비스 워커로 오프라인 우선 받아들이기
authors: [chanhui]
tags: [PWA, Service Worker, Cache Storage API, offline-first, MOZI]
---

![](https://velog.velcdn.com/images/hancihu/post/d41e3773-1274-46d1-87ff-7b0181abb749/image.png)

<!--truncate-->

본 포스팅은 아래 링크의 **만들면서 배우는 프로그레시브 웹 앱** 책을 보며 공부한 내용을 스스로 정리한 것 입니다.

[만들면서 배우는 프로그레시브 웹 앱](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=190254386)

실습 코드는 포스팅 맨 아래 링크에 첨부해두었습니다.

## 0. 오프라인 우선이란?

웹 앱이 발전해감에 따라 서버에 전적으로 의존했던 기존의 웹 앱에서 많은 기능이 서버에서 클라이언트로 이동하였고, 웹 앱은 데이터 처리, 템플릿 렌더링 등의 작업을 수행하게 되었다.

그럼에도 불구하고 웹 앱은 여전히 전적으로 서버에 의존하고 있다. 인터넷 연결이 끊어지면 **앱 구동에 실패**할 수 있다는 것이다.

**오프라인 우선(Offline-first)**는 오프라인 상태와 불안정한 인터넷 상태에서 발생하는 문제는 치명적인 오류가 아니라 웹 앱이 작동하는 동안 언제든지 발생할 수 있는 상태라는 것을 인식하는 것에서 부터 시작한다.

즉, 오류로써 이것을 처리하는게 아니라 하나의 상태로써 관리를 해야한다는 뜻이다.

오프라인 우선을 받아들인다는 것은 사용자가 오프라인일때 앱의 일부 기능이 작동하지 않을 수 있지만 그 외의 대부분 기능은 계속 작동해야한다는 것이다.

그렇기 위해서는 연결 상태에 대한 변경 사항을 우아하게 처리할 수 있어야 한다..

인터넷 연결이 끊기는 상황에서 사용자에게 일부 기능이 작동하지 않을 수 있고, 사용자가 찾고 있는 데이터가 최신이 아닌 몇 시간 지난 데이터임에도 여전히 많은 기능을 제공하고 있음을 알려야 한다.

오프라인에서 완전히 구동되는 웹 앱을 구축하고 인터넷 연결을 우아하게 관리하면, 사용자에게 이 앱을 계속 사용해도 된다는 신뢰와 데이터도 손실되지 않을 것이라는 확인을 줄 수있다.

정리하면 **`오**프라인 우선` 이란 **사용자에게 있어 현재의 네트워크 상태에서 항상 최상의 경험을 제공하는 것을 의미**한다.

## 1. 캐싱 패턴

앞선 포스팅에서는 캐시를 하는 방법에 대해 공부를 해보았다.

당연하게도 서비스가 제공하는 기능에 따라 캐싱하는 데이터도 바뀌어야하고, 그렇다면 어떻게 캐싱 할 것인지 **캐싱 패턴**도 달라져야 할 것이다.

`오프라인 우선` 을 적용하기 앞서 이를 위한 다양한 캐싱 패턴에 대해 알아보자.

### Cache Only (캐시만 사용)

모든 리소스 요청을 캐시를 통해 처리한다. 캐시에서 응답을 찾을 수 없을 경우 요청은 실패한다.

로고나 아이콘, 스타일시트 같은 정적 리소스를 처리하는 데 유용하다.

만약 리소스의 내용을 변경해야 하는 경우, 정적 리소스 파일의 이름을 변경한 후 캐시에 저장한다.

이 방법은 서비스 워커와 상관없이 이전부터 자주 사용되던 캐싱 패턴과 유사하다. 새로운 버전을 배포할 때마다 모든 정적 리소스 파일의 이름을 변경하고, 캐시 만료 날짜를 아주 길게 혹은 무기한으로 서버를 설정하는 방법과 비슷하다.

만약 파일 이름을 변경하는 것이 부담스럽다면 새로운 버전의 서비스 워커를 릴리즈 하고, 서비스 워커의 활성화 이벤트 동안 필요한 파일을 다시 가져와 캐시에 저장하면 된다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(caches.match(event.request));
});
```

### Cache, falling back to network (캐시 실패하는 경우만 네트워크)

`Cache Only` 와 비슷하게 캐시에 저장된 콘텐츠를 먼저 찾지만, 못찾으면 네트워크로 콘텐츠를 요청한다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
```

### Network Only (네트워크만 사용)

웹의 전통적인 모델. 모든 리소스를 네트워크에서 가져오는 경우 한마디로 캐시를 안하는 것.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
```

### Network, falling back to cache (네트워크 실패하는 경우만 캐시)

네트워크로 요청을 전달하고 실패하는 경우만 캐시로부터 응답을 찾는다. 캐시에서도 못 찾으면 요청은 실패한다.

사용자는 항상 현재의 연결 상태에서 가장 최신의 콘텐츠를 내려받게 된다. 따라서 자주 변경되는 콘텐츠나 가장 최신 응답을 보여주는 것이 중요한 상황에서 유용하다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
```

### Cache, then network (캐시 이후 네트워크)

네트워크에서 최신 버전을 체크하는 동안 캐시에서 데이터를 바로 보여주고, 네트워크 응답을 받으면 캐시보다 최신 버전인 경우 페이지를 업데이트 한다.

해당 방법은 좋은 방법은 맞지만 구현 비용이 올라가고, 네트워크 응답이 길어지는 경우 사용자 경험 측면에서 좋지 않을 수 있다.

예를 들어 캐시된 콘텐츠를 표시하여 사용자가 상호작용하는 도중에 네트워크 응답이 들어오는 경우 사용자 입장에서는 잘 쓰고 있는데 갑자기 페이지가 업데이트 되었다고 느끼게 될 것 이다.

### Generic fallback (기본 대체 리소스)

사용자가 요청하는 콘텐츠가 캐시에 없고, 네트워크도 사용 불가능 할 때 에러를 반환하는 대신 캐시에서 default fallback을 반환한다.

예를 들어 사용자의 프로필 이미지가 캐시에 없고 네트워크도 사용이 불가능한 경우 서비스에 깨진 이미지를 보여주는게 아니라 기본 프로필 이미지를 보여주는 것이다.

이 패턴은 보통 마지막 `fallback` 으로 다른 패턴들과 함께 사용된다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request).then(function (response) {
        return response || caches.match("/default.png");
      });
    })
  );
});
```

## 2. 캐싱 패턴을 응용해서 사용해보자

### Cache on demand (요청에 따라 캐시)

`cache, falling back to network` 를 확장하여 캐시에 없어서 네트워크에 요청하는 경우 해당 응답도 캐싱하는 방법이다.

다음에 또 리소스가 요청되면 이번에는 캐싱된 데이터에서 응답을 주게 될 것이다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (cachedResponse) {
        return (
          cachedResponse ||
          fetch(event.request).then(function (networkResponse) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
        );
      });
    })
  );
});
```

<aside>
💡 **왜 networkResponse를 클론해서 캐시에 넣어주었을까?**

Response는 **스트림이며, 한번만 사용가능**하다. 따라서 캐시해주는데 한번 사용해버리면 스트림이 사라져 버린다.
따라서 캐시하는데 한번, 응답을 주는데 한번 이렇게 두번 이상 요청을 사용하려면 응답을 그냥 사용하는게 아니라 복제해서 사용해야한다.

</aside>

### Cache, falling back to network with frequent updates (캐시 하고 이후 네트워크 사용해 캐시 업데이트)

최신버전을 보여주는 것보다 빠른 응답이 더 중요한 리소스의 경우 cache, falling back to network 패턴을 개선하여 요청한 리소스가 있을 때에도 일단은 캐시된 데이터를 보여주고 이후에 요청한 리소스를 캐시하도록 할 수 있다.

즉, 캐시된 데이터를 보여준 이후에 최신 데이터를 다시 캐시하는 것이다.

빠른 응답과 비교적 최신 응답의 이점을 합친 패턴이라고 할 수 있다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (cachedResponse) {
        const fetchPromise = fetch(event.request).then(function (
          netWorkResponse
        ) {
          cache.put(event.request, netWorkResponse.clone());
          return netWorkResponse;
        });
        return cachedResponse | fetchPromise;
      });
    })
  );
});
```

### Network, falling back to cache with frequent updates (네트워크 실패시 캐시 사용 및 빈번한 캐시 업데이트)

항상 최신 리소스를 제공하는 것이 중요한 경우에는 network, falling back to cache 패턴 작동에 약간의 변화를 줘서 사용할 수 있다.

항상 네트워크를 이용해 최신 리소스를 가져오고 성공하는 경우 캐시를 업데이트 해준다. 캐시를 사용하는 경우는 네트워크 요청에 실패하는 경우만 사용한다.

```jsx
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return fetch(event.request).then(function (netWorkRequest) {
          cache.put(event.request, netWorkRequest.clone());
        });
      })
      .catch(function () {
        return caches.match(event.request);
      })
  );
});
```

## 3. 앱 쉘 아키텍쳐

앱 쉘 아키텍쳐는 앱에서 가장 기본적 인터페이스를 표시하는 데 필요한 리소스와 기본 로직을 분리하도록 권장한다.

사용자에게 최대한 빨리 앱 쉘을 표시 할 수 있도록 가능한 가볍게 만든 쉘을 우선 렌더링하여 보여주며, 이후 콘텐츠와 나머지 추가 기능은 로딩이 완료되어 사용 가능할 때 덧붙이게 된다.

화면에 나중에 보여지게 될 부분보다 지금 화면에 보여지는 디자인 구조와 컨텐츠를 더 높은 우선 순위로 처리해야 한다.

앱 쉘에 가장 큰 목표는 의미 있는 경험을 가능한 한 빨리 사용자에게 제공하는 것이다.

![](https://velog.velcdn.com/images/hancihu/post/d4458e1d-c39c-47a0-bd83-d601de19b08f/image.png) [사진 출처](https://mixwithmarketing.com/2022/01/what-is-app-shell-android/)

먼저 앱쉘을 사용자에게 빠르게 제공하고, 이후에 데이터를 네트워크로 가져오든 캐시로 가져오든 해서 내부 컨텐츠 부분을 채우게 되는 것이다.

위에서 열심히 이야기한 다양한 캐싱패턴을 이용하여 데이터에 따라 적절하게 구현 할 수 있다.

## 3. Link

[실습 코드](https://github.com/TalAter/gotham_imperial_hotel)
