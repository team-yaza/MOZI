---
slug: background-sync
title: Background Sync
authors: [hyunjin]
tags: [PWA, MOZI]
---

이 글은 MOZI에 백그라운드 동기화 기능을 구현하기 위해 공부한 내용을 정리한 글 입니다.

<!--truncate-->

백그라운드 동기화는 사용자가 안정적인 인터넷 연결 전까지 행동을 미루는 웹 API입니다. 크롬 브라우저에는 이를 아래와 같이 설명하고 있습니다.

:::note
**백그라운드 동기화**란 채팅 메시지 또는 사진 업로드 등의 작업 도중 컴퓨터가 오프라인 상태가 되는 경우, 일부 사이트에서는 컴퓨터가 다시 온라인 상태가 되면 작업을 완료할 수 있습니다. 웹 사이트를 닫아도 백그라운드 동기화가 계속됩니다.
:::

> 온라인 상태에서는 서버 통신을 오프라인 환경에서는 미리 저장해 놓은 캐시를 화면에 보여줍니다.

![](https://miro.medium.com/max/1400/1*nH477JAoM9Yqql0Ee0yESw.png)

백그라운드에서 작업을 처리하면, 쉽게 휘발되는 개별 페이지의 특성에서 벗어날 수 있습니다. 웹페이지는 언제든지 닫힐 수 있고, 사용자 네트워크 연결은 끊어질 수 있으며 서버가 죽을 수 있습니다. 사용자 기기에 브라우저가 설치되어있는 한 백그라운드 동기화 작업은 성공적으로 완료될 때까지 사라지지 않습니다.

따라서 페이지가 닫혀도 계속 진행되어야 하는 모든 작업에 백그라운드 동기화 사용을 고려해 볼 수 있습니다. 사용자가 메시지를 보내거나 해야할 일 목록중 하나를 완료 표시하거나 캘린더에 이벤트를 추가할 때 백그라운드 동기화를 사용하면 이 작업들이 성공적으로 완료될 것을 보장할 수 있습니다.

![](https://user-images.githubusercontent.com/63354527/184314483-d17d917f-e2f7-46bb-9dfe-196ee50a6f66.png)

페이지에서 Ajax 호출과 같은 작업을 수행하는 대신 동기화 이벤트를 등록합니다.

```ts
navigator.serviceWorker.ready.then(function (registration) {
  registration.sync.register("send-messages")
})
```

위 코드는 웹페이지에서 실행될 수 있습니다. 활성화된 서비스 워커의 등록 객체를 받아와 `send-messages`라는 동기화 이벤트를 등록합니다.
그 후 서비스 워커에 동기화 이벤트를 수신할 sync 이벤트 리스너를 추가해줍니다. 이 이벤트는 페이지가 아닌 서비스 워커에서 작업을 수행할 때 필요한 로직을 포함합니다.

```ts
self.addEventListener("sync", function (event) {
  if (event.tag === "send-messages") {
    event.waitUntil(function () {
      const sent = sendMessages()

      if (sent) {
        return Promise.resolve()
      } else {
        return Promise.reject()
      }
    })
  }
})
```

sync 이벤트 리스너에서 waitUntil을 사용해 이벤트 종료를 요청하기 전까지 이벤트가 유지될 수 있도록 처리합니다. 이렇게 함으로써 필요한 작업을 시도하고, 실행할 수 있는 시간을 벌 수 있고 처리 결과에 따라 이벤트를 성공적으로 `resolve` 하거나 `reject` 할 수 있다.

sync 이벤트 리스너에서 리젝된 프로미스를 반환하면 브라우저는 해당 동기화 작업을 큐에 쌓아 다음번에 다시 시도되도록 할 것입니다. 다시 말해서 `send-messages`라는 sync 이벤트는 사용자가 앱을 종료한 후에도 다시 시도될 것입니다.

## SyncManager

동기화 이벤트와 관련된 모든 상호 작용은 SyncManager를 통해 이루어집니다.
SyncManager는 동기화 이벤트를 등록하고 현재 등록된 동기화작업을 가져오는 기능을 제공하는 서비스 워커 인터페이스입니다. 활성화된 서비스 워커 등록 객체를 통해 SyncManager에 접근할 수 있습니다. 등록 객체를 가져오는 방법은 서비스 워커에서 가져오는지, 아니면 페이지에서 직접 가져오는지에 따라 조금 달라집니다.

서비스 워커 내에서는 글로벌 객체를 통해 쉽게 서비스 워커 등록 객체에 접근 가능합니다.

```ts
self.registration
```

서비스 워커가 관리하는 페이지에서는 `navigator.serviceWorker.ready`를 호출하여 현재 활성화된 서비스워커 객체에 접근할 수 있습니다. 함수를 호출하면 성공적으로 리졸브 될 때 서비스 워커 등록 객체를 반환하는 프로미스가 반환됩니다.

```ts
navigator.serviceWorker.ready.then(function (registration) {})

const registration: ServiceWorkerRegistration = await navigator.serviceWorker
  .ready
```

일단 서비스 워커 등록 객체를 가져왔다면 SyncManager를 통한 나머지 상호작용은 서비스 워커에서 하던 페이지에서 하던 상관없이 동일합니다.

서비스워커에서 `send-messages` 이벤트를 등록하기 위해서는 다음과 같은 코드를 입력합니다.

```ts
self.registration.sync.register("send-messages")
```

서비스 워커가 제어하는 페이지에 같은 이벤트를 등록하려면 다음과 같은 코드를 사용합니다.

```ts
navigator.serviceWorker.ready.then(function (registration) {
  registration.sync.register("send-messages")
})
```

SyncManager는 간단한 동기화 이벤트 태그 목록을 유지합니다. 이 목록에는 각각의 이벤트가 어떤 이벤트인지, 무엇을 하는지에 대한 로직은 포함되어있지 않습니다. 구현은 전적으로 서비스 워커의 sync 이벤트 리스너 코드에 달려있습니다.

SyncManager는 다음과 같은 경우에 sync 이벤트를 발생시킵니다.

1. 동기화 이벤트 등록 직후
2. 사용자 상태가 오프라인에서 온라인으로 변경될 때
3. 성공적으로 완료되지 않은 동기화 이벤트가 있을 경우, 매 분마다

:::note
서비스 워커는 발송된 동기화 이벤트를 프로미스 형식으로 수신하고 처리할 수 있습니다. 프로미스가 리졸브 되면 SyncManager에서 해당 동기화 이벤트가 삭제됩니다. 프로미스가 리젝되면 다음번 동기화 시점에 다시 시도될 수 있도록 SyncManager에 남아있게 됩니다.
:::note

이벤트 태그 이름은 유일해야합니다. SyncManager에 이미 존재하는 태그명으로 sync 이벤트를 등록하면 SyncManager는 이를 무시하고 중복으로 추가하지 않습니다. 처음에는 이것이 제약처럼 느껴질 수 있지만 사실 SyncManager의 가장 유용한 특징 중 하나입니다. 이 특징은 많은 수의 비슷한 작업을 하나의 이벤트로 그룹화하여 처리할 수 있도록 합니다.

SyncManager의 `getTags()` 메서드를 활용하면 실행 예정인 전체 동기화 이벤트 목록을 받아올 수 있다. 현재 등록된 모든 이벤트 목록을 출력하려면 아래와 같이합니다.

서비스 워커 인터페이스와 마찬가지로 `getTags()`도 프로미스를 반환합니다. 프로미스가 리졸브되면 동기화 이벤트 태그 이름이 채워진 배열을 받을 수 있다. 아래 코드는 이벤트가 등록되면 현재 등록된 모든 이벤트 목록이 콘솔에 출력된다.

```ts
self.registration
  .sync()
  .register("hello-sync")
  .then(function () {
    return self.registration.sync.getTags()
  })
  .then(function (tags) {
    console.log(tags)
  })
```

서비스 워커가 제어하는 페이지에서는 ready를 사용해 등록 객체를 먼저 받아오는 방법을 사용해 비슷한 결과를 얻을 수 있다.

```ts
navigator.serviceWorker.ready.then((registration) => {
  registration.sync
    .register("hello-sync")
    .then(() => {
      return registration.sync.getTags()
    })
    .then((tags) => {
      console.log(tags)
    })
})
```

서비스 워커가 제어하는 페이지에서 이 코드를 실행하면 `["hello-sync"]`가 콘솔에 출력되어야한다.

예를 들어 이메일 서비스를 구현한다고 가정해보겠습니다. 사용자가 이메일 보낼때마다 IndexedDB의 보낸 편지함에 이메일을 저장하고, `send-unsent-messages` 백그라운드 동기화 이벤트를 등록하도록 구현할 수 있습니다. 이에 대응되는 서비스워커쪽 이벤트 리스너는 IndexedDB의 보낸 편지함의 모든 이메일을 순회하며 이메일 전송을 시도하고, 성공적으로 발송하지 못한 이메일이 하나라도 있으면, 전체 sync 이벤트가 리젝될 것입니다. 이후 SyncManager는 사용자의 네트워크 환경이 바뀌거나 일정 시간이 지난경우, 다시 이벤트를 발생시키고, 다시 한번 IndexedDB의 보낸 편지함을 돌며, 앞서 전송되지 않았던 이메일과 그 이후에 새로 작성한 이메일을 다시 발송하고 보낸 편지함을 비웁니다.

이렇게 구성하면 메일이 보낸 편지함에 있는지 없는지 체크할 필요가 없습니다. 보낸 편지함에 전송되지 않는 이메일이 있는 한, 동기화 이벤트는 등록된 상태를 유지하며, 주기적으로 해당 이메일을 전송하려고 시도할 것입니다.

사용자가 새 메일을 작성한 경우에도 같은 태그명을 갖는 동기화 이벤트는 중복해서 등록되지 않기 때문에 `send-unset-messages`가 이미 있는지 아니면 실행중인지 확인할 필요도 없습니다.

가끔씩 SyncManager가 특정 sync 이벤트가 계속 실패한다고 판단하고 자원 낭비를 막기 위해 이벤트를 제거하기 전 마지막으로 한번 더 sync 이벤트를 보내기로 결정할 수도 있습니다. 이런 경우 전달된 Sync 이벤트의 lastChance 속성을 확인해 해다아 이벤트가 SyncManager가 마지막으로 보낸 이벤트라는 것을 감지할 수 있고 이에따라 필요한 작업을 수행할 수 있습니다.

```ts
self.addEventListener("sync", (event) => {
  if (event.tag === "add-reservation") {
    event.waitUntil(
      addReservation()
        .then(() => {
          return Promise.resolve()
        })
        .catch((error) => {
          if (event.lastChance) {
            return removeReservation()
          } else {
            return Promise.reject()
          }
        })
    )
  }
})
```

작업을 수행하는 코드 페이지에서 서비스워커로 옮기면, 무슨 일이 있어도 작업이 수행되도록 만들 수 있습니다. 하지만 이로인해 새로운 복잡성이 생기게됩니다.

대부분의 경우 페이지에서 수행되는 작업을 완료하기 위해서는 데이터가 필요합니다. 메시지를 전송하는 함수를 호출하는 페이지는 메시지 텍스트가 필요합니다. 포스팅에 좋아요를 누르는 포스팅의 ID가 필요합니다. 하지만 동기화 이벤트를 등록할 때는 이벤트 이름만 전달할 수 있습니다. 다시말해 백그라운드에서 메시지를 전송하도록 서비스워커에 요청할 수는 있지만 메시지 텍스트를 전달하는 것은 함수에 인자를 전달하는 것처럼 간단하지 않습니다. 이를 해결하기 위해 다양한 방법이 존재합니다.

## IndexedDB에 액션 큐 만들기

백그라운드 동기화 작업이 시작되기 전에 사용자가 작업하고 있는 내용을 IndexedDB에 저장하는 방법입니다. 그 후 서비스 워커의 동기화 이벤트 코드는 객체 저장소를 순회하며 저장된 내용을 기반으로 필요한 작업을 수행합니다.

메시징 앱으로 돌아가 이 방법을 적용해보면 모든 신규 메시지를 message-queue 객체 저장소에 추가한후 백그라운드 동기화 이벤트를 처리하기 위한 `send-messages` 이벤트를 등록합니다.

이 이벤트는 `message-queue`의 모든 메시지를 순회하여 각 메시지를 네트워크로 전송하고 `message-queue`에서 삭제합니다. 모든 메시지가 전송되고 객체 저장소가 비워진 후에 sync 이벤트가 성공적으로 리졸브됩니다. 메시지가 하나라도 전송에 실패하면, 리젝트된 프로미스가 이벤트로 반환되고 SyncManager는 차후에 다시 동기화 이벤트를 시작한다.

필요한 큐(예: 발신 메시지용 큐, 포스팅 좋아요 큐)마다 별개의 객체 저장소를 유지하여, 각각을 처리하는 별도의 동기화 이벤트를 만들 수 있습니다. 이 방법을 사용해 코드를 다음과 같이 교체할 수 있습니다.

```ts
const sendMessage = function (subject, message) {
  fetch("/new-message", {
    method: "post",
    body: JSON.stringify({
      subject,
      message,
    }),
  })
}

const triggerMessageQueueUpdate = function () {
  navigator.serviceWorker.ready.then(function (registration) {
    registration.sync.register("message-queue-sync")
  })
}

const sendMessage = function (subject, message) {
  addToObjectStore("message-queue", {
    subj: subject,
    msg: message,
  })
}
```

다음에 서비스워커에 다음과 같은 코드를 추가합니다.

```ts
self.addEventListener("sync", (event) => {
  if (event.tag === "message-queue-sync") {
    event.waitUntil(() => {
      return getAllMessages().then((messages) => {
        return Promise.all(
          messages.map((message) => {
            return fetch("/new-message", {
              method: "post",
              body: JSON.stringify({
                subj: subject,
                msg: message,
              }),
            }).then(() => {
              return deleteMessageFromQueue(message)
            })
          })
        )
      })
    })
  }
})
```

getAllMessages()를 사용해 IndexedDB에 쌓여 있는 모든 메시지를 가져온다. 이후 이벤트 리스너 내부에서 사용하는 모든 프로미스가 리졸브된 경우에만 리졸브되는 프로미스를 이벤트 리스너로 반환합니다.

이 프로미스는 Promise.all 함수에 프로미스 배열을 넘겨 호출하는 방식으로 만들어집니다.프로미스 배열은 IndexedDB에서 가져온 메시지 배열에 대해 map()을 실행해 각 메시지에 대해 각각의 프로미스를 반환하는 방법으로 생성됩니다. 이들 각각의 프로미스는 메시지가 성공적으로 발송되어 큐에서 삭제되었을 때만 리졸브됩니다.

이 방법을 조금 다르게 시도해 볼 수도 있습니다. 동기화 작업에 필요한 객체와 성공적으로 동기화가된 객체를 함께 동일한 객체 저장소에 저장하는 방법입니다. 이 경우에는 각 객체의 상태를 저장해두었다가, 객체가 성공적으로 동기화되면 이를 업데이트할 수 있습니다. 예를 들어 앱에서 발송된 메시지와 미발송된 메시지를 같은 저장소에 저장해둡니다. 메시지 객체에는 메시지 콘텐츠 뿐만 아니라 sent와 pending 같은 현재 상태도 포함됩니다. 그 후 동기화 작업은 pending 상태의 모든 메시지를 순회하기 위해 커서를 오픈하고, 전송하고, 전송 후에 상태를 sent로 변경합니다.

## IndexedDB에 요청 큐 만들기

이미 작성된 프로젝트를 수정해야하는 경우, 객체를 로컬에 저장하도록 앱의 구조를 바꾸고 객체 상태를 추적하기 위한 로직을 구현하는 것은 너무 과한 일이 될 수 있습니다. 기존 프로젝트에 백그라운드 동기화를 적용할 때 좀더 간단한 방법은 기존 Ajax 호출을 요청 큐로 바꾸는 것입니다.

이 방식을 적용하면 각 네트워크 요청을, IndexedDB에 세부 요청사항을 저장하는 메소드로 교체하고, 동기화 이벤트를 등록합니다. 등록된 동기화 이벤트는 객체 저장소에 저장된 모든 요청을 살피고 한번에 하나씩 각 요청을 보냅니다.

이전 방법과 달리, 동기화 이벤트에서 각 네트워크 요청을 수행하는 필요한 모든 세부사항을 IndexedDB에 저장합니다. 동기화 코드는 각각의 작업이 사이트에서 무슨 의미인지 이해할 필요가 없습니다. 그저 요청 목록을 맹목적으로 탐색하며, 하나씩 실행하기만 하면됩니다.

```ts
const sendMessage = function (subject, message) {
  fetch("/new-message", {
    method: "POST",
    body: JSON.stringify({
      subject,
      message,
    }),
  })
}

const likePost = function (postId) {
  fetch("/like-post?id=" + postId)
}
```

이 방법을 사용하면 다음과 같이 코드를 바꿀 수 있습니다.

```ts
const triggerRequestQueueSync = () => {
  navigator.serviceWorker.ready.then((registration) => {
    registration.sync.register("request-queue")
  })
}

const sendMessage = (subject, message) => {
  addToObjectStore("request-queue", {
    url: "/new-message",
    method: "POST",
    body: JSON.stringify({
      subject,
      message,
    }),
  })

  triggerRequestQueueSync()
}

const likePost = (postId) => {
  addToObjectStore("request-queue", {
    url: "/like-post?id=" + postId,
    method: "GET",
  })

  triggerRequestQueueSync()
}
```

네트워크 요청 코드를 request-queue라는 객체 저장소에 개별 요청을 나타내는 객체를 저장하는 코드로 교체합니다. 저장되는 각각의 객체는 네트워크 요청에 필요한 모든 정보를 담고 있습니다.
그 다음 서비스워커에 sync 이벤트 리스너를 추가하여 request-queue안의 모든 요청을 검토하고 각각에 대한 네트워크 요청을 만들고 요청이 성공하면 객체 저장소에서 해당 요청을 삭제합니다.

```ts
self.addEventListener("sync", (event) => {
  if (event.tag === "request-queue") {
    event.waitUntil(() => {
      return getAllObjectsFrom("request-queue").then((requests) => {
        return Promise.all(
          requests.map((request) => {
            return fetch(request.url, {
              method: request.method,
              body: request.body,
            }).then(() => {
              return deleteRequestFromQueue(message) // returns a promise
            })
          })
        )
      })
    })
  }
})
```

성공한 요청은 `deleteRequestFromQueue()` 메소드 호출을 통해 IndexedDB 큐에서 삭제됩니다. 실패한 요청은 큐에 남고, 리젝된 프로미스를 반환한다. 네트워크 요청 중 하나라도 리젝된 프로미스를 반환했다면, 잠시후 sync 이벤트가 다시 발생합니다. 앞서 성공적으로 호출된 큐에서 삭제된 네트워크 요청을 제외한 나머지 요청들을 다시 검토하여 네트워크 요청을 시도합니다.

## 동기화 이벤트 태그를 통해 데이터 전달하기

동기화 함수에 간단한 값을 전달해야할 때, 모든 작업을 일일이 추적하기 위한 데이터베이스를 구현하는 것은 너무 과하게 느껴질 수 있습니다. 사용자가 페이지에 표시된 특정 포스트에 좋아요를 누를 수 있다고 가정해보자. 이는 포스팅의 ID를 특정 URL로 전달하는 간단한 작업이다. 기존 코드는 다음과 같다.

```ts
const likePost = function (postId) {
  fetch("/like-post?id=" + postId)
}
```

이를 바꾸보겠습니다.

```ts
const likePost = function (postId) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.sync.register("like-post?id=" + postId)
  })
}
```

그리고 ID를 추출하는 방법으로 구현할 수 있습니다.

```ts
self.addEventListener("sync", function (event) {
  if (event.tag.startsWith("like-post-")) {
    event.waitUntil(function () {
      const postId = event.tag.slice(10)
      return fetch("/like-post?id=" + postId)
    })
  }
})
```

## react-query에서의 고민과 해결

react-query에서는 나중에 사용할 수 있도록 queryClient 및 해당 캐시의 상태를 유지하는 기능이 있습니다.

MOZI에서는 react-query와 background-sync 기능을 공존시켜서 데이터로직을 처리하고 싶었습니다.

react-query는 데이터를 가져옵니다. 데이터를 가져올 때, 이를 원격 서버에서 가져올 수도 있고 IndexedDB에서도 가져올 수 있습니다. MOZI에서는 IndexedDB에서만 데이터를 가져와야합니다. 왜냐하면 온라인일 때는 react-query로 부터 데이터를 받을 수 있지만

react-query는 네트워크 연결이 없는 경우 query와 mutation이 어떻게 작동해야 하는지 구분하기 위해 세가지 다른 네트워크 모드를 제공합니다. 이 모드들은 `query`와 `mutation`에 대해 개별적으로 또는 기본값을 전역적으로 설정할 수 있습니다.

> Since React Query is most often used for data fetching in combination with data fetching libraries, the default network mode is online.

### Network Mode: online

이 모드에서는 여러분이 온라인 상태가 아니라면 query와 mutation이 실행되지 않습니다. 네트워크 연결이 없이 query를 수행할 경우 항상 상태(loading, error, success)를 유지합니다. 그러나 `fetchStatus`가 추가로 노출됩니다.

만약 query가 실행중에 offline 상태가 된다면 react-query는 retry mechanism을 일시 중지합니다. 일시 중지된 query는 네트워크에 다시 연결되면 계속 실행됩니다. 이것은 refetchOnReconnect와는 무관합니다. 오히려 이것은 refetch가 아니고 continue에 가깝습니다. 만약 query가 취소된다면 continue되지는 않습니다.

### Network Mode: always

이 모드에서 React Query는 항상 온라인/오프라인 상태를 가져오고 무시합니다. 이것은 쿼리가 작동하기 위해 활성 네트워크 연결이 필요하지 않은 환경에서 react-query를 사용하는 경우 선택하려는 모드일 수 있습니다. (MOZI에 적합합니다.)

- 쿼리는 네트워크 상태가 없기 때문에`paused`되지 않습니다.
- 재시도도 멈추지 않습니다. 여러분의 쿼리는 실패하면 에러상태가 될 것입니다.
- refetchOnReconnect는 이 모드에서 기본적으로 false로 설정됩니다. 네트워크에 다시 연결하는 것이 더 이상 오래된 쿼리를 다시 가져와야 한다는 좋은 지표가 아니기 때문입니다. 원하는 경우 계속 켤 수 있습니다.

### Network Mode: offlineFirst

이모드는 react-query가 queryFn을 한 번 실행한 다음 재시도를 일시 중지하는 처음 두 옵션 사이의 중간지점입니다. 이것은 오프라인 우선 PWA와 같이 캐싱 요청을 가로채는 serviceWorker가 있거나 Cache-Control 헤더를 통해 HTTP 캐싱을 사용하는 경우에 매우 편리합니다.

이러한 상황에서는 오프라인 저장소/캐시에서 가져오기 때문에 첫번째 가져오기가 성공할 수 있습니다. 그러나 캐시 누락이 있는 경우 네트워크 요청이 실패합니다. 이 경우 이 모드는 온라인 쿼리처럼 작동합니다. 즉 재시도를 일시 중지합니다.

<!-- ## 여기서 부터 계쏙 작성중

<img width="495" alt="image" src="https://user-images.githubusercontent.com/63354527/196674883-d6eb2374-9e6d-4e12-b082-6fab9e795f02.png">

위와 같이 기본적으로 workbox에서 api 요청을 캐싱하기 때문에 새로고침을 해도 데이터가 정상적으로 들어가는 상황이 있었다.
-> registRoute로 해결(api 요청 캐싱안해)

api 요청을 캐싱하지 않으면 react-query가 데이터를 바로 가져오지 못함.
가져오는게 실패하거나 성공할 수 있음. -->
