---
slug: mozi-calendar
title: 📅 캘린더 만들기
authors: [hyunjin]
tags: [Calendar, MOZI]
---

# 📅 캘린더 만들기

MOZI에는 `Upcoming`이라는 탭이 존재합니다. 이 탭에서는 다가오는 할 일을 볼 수 있고 할 일을 등록할 수 있습니다.

![3_Upcoming](https://user-images.githubusercontent.com/63354527/193635704-98c24679-e5b4-44df-8a35-6f7726ff9122.png)

이 글은 위 화면과 같이 달력을 만들어보면서 겪은 경험을 기록한 글입니다.

<!--truncate-->

캘린더를 만든다고 하니 [목민주 멘토님](https://github.com/gv0413)이 [영상을 한개 추천](https://youtu.be/CSWc0HYjxEs)해주셔서 봤습니다. 영상을 보니 날짜를 `Date` 객체로 직접 다루는 것은 헷갈릴만한 부분이 많았습니다.

JavaScript에서 날짜를 다루는 것은 까다롭기 때문에 `moment`, `dayjs`, `date-fns`와 같은 라이브러리를 사용하곤 합니다. 저는 처음부터 라이브러리를 사용하고 싶지는 않았습니다.(Date 객체를 많이 다루어보지 않았기 때문에 Date 객체를 다루어 보고 싶었음 + React 없이 vanilla로 캘린더 개발)

저는 [mozi-calendar](https://github.com/team-yaza/mozi-calendar)라는 레포를 만들고 Date 객체를 사용해서 캘린더를 만드는 것을 연습해보기로 합니다. 저는 일단 코드를 쳐보고 이해가 안가면 검색해서 문서를 보고 이해하는 방식을 좋아하기 때문에 먼저 Date 객체를 마음대로 다루어봤습니다.

```ts
const date = new Date() // Tue Oct 04 2022 02:26:17 GMT+0900 (한국 표준시)
```

먼저 `new Date()`를 콘솔에 찍어보니 위와 같이 나왔습니다. 뭔가 오늘 날짜와 시간이 나오는 것 같습니다. 일단 달력에 오늘의 년도, 월, 일을 표시해야하므로 date에서부터 가져와보겠습니다.

```ts
date.getFullYear() // 2022
date.getMonth() // 9
date.getDate() // 4
```

이렇게 년, 월, 일을 가져와봤습니다. 재밌는 점은 년하고 일은 괜찮은데 월은 인덱스가 0부터 시작한다고 합니다. 0은 1월, 1은 2월 ... 그러니까 9는 10월입니다. 오늘이 2022년 10월 4일이므로 맞습니다.

그럼 이제 조금 나아가서 이번 달의 첫째 날과 마지막 날을 알아보겠습니다.

```ts
new Date(year, month, 1) // 달의 첫날: Sat Oct 01 2022 00:00:00 GMT+0900 (한국 표준시)
new Date(year, month + 1, 0) // 달의 마지막 날: Mon Oct 31 2022 00:00:00 GMT+0900 (한국 표준시)
```

지금까지의 내용으로 달력의 윗부분인 `Navigator`부분에 현재 년도와 월을 표할 수 있습니다.

<p align="center">
<img  width="220" alt="image" src="https://user-images.githubusercontent.com/63354527/193642338-b4cf65e2-2748-4f0f-9659-20412ecd1f25.png"/>
</p>

```ts
const getNavigatorHTML = (today: Date) => {
  return html`
    <button class="move-month-button">
      ← ${MONTHS[today.getMonth() == 0 ? 11 : today.getMonth() - 1]} ${today.getMonth() <=
      0
        ? today.getFullYear() - 1
        : today.getFullYear()}
    </button>
    <h1 class="month-display">
      ${MONTHS[today.getMonth()]}<br />${today.getFullYear()}
    </h1>
    <button class="move-month-button">
      ${MONTHS[today.getMonth() == 11 ? 0 : today.getMonth() + 1]} ${today.getMonth() >=
      11
        ? today.getFullYear() + 1
        : today.getFullYear()} →
    </button>
  `
}
```

이렇게 네비게이션을 만들어준 후에 전달과 다음달로 이동할 때 네비게이션과 캘린더 부분을 다시 렌더링 하면 달력이 완성됩니다.

```ts
const previousMonthButtonDidPress = () => {
  displayDate.setMonth(displayDate.getMonth() - 1)

  renderNavigator(document.getElementById("navigator"), displayDate)
  renderCalendar(document.getElementById("calendar"), displayDate)
}
```

이제 네비게이션 부분을 완성했으니 캘린더부분으로 가보겠습니다. 캘린더의 최상단에는 일~월 날짜가 표시되어있습니다.

![image](https://user-images.githubusercontent.com/63354527/193645668-772d805b-d2fe-480c-afe1-f3a225aab63d.png)

```ts
for (let d = 0; d < NUMBER_OF_DAYS_IN_WEEK; d++) {
  calendarContents.push(
    html`
      <div class="${NAME_OF_DAYS[d]} calendar-cell">
        ${LONG_NAME_OF_DAYS[d]}
      </div>
    `
  )
}
```

코드로 표현하면 일~월을 캘린더 컨텐츠 배열에 푸쉬해주면 됩니다. 그 다음 실제 캘린더를 렌더링할 건데 보여지는 부분은 3가지입니다. 이전달, 현재달, 다음달 따라서 3번의 for문에서 calendar 각각의 달을 찍는 로직을 작성해보면 다음과 같습니다.

```ts
for (
  let d = 0;
  d <
  (thisMonthFirstDate.getDay() > 0
    ? thisMonthFirstDate.getDay()
    : NUMBER_OF_DAYS_IN_WEEK);
  d++
) {
  calendarContents.push(
    html`<div
      class="
          ${d % 7 === 0 ? "sun" : ""}
          ${d % 7 === 6 ? "sat" : ""}
          calendar-cell
          past-month
        "
    >
      ${lastMonthLastDate.getMonth() + 1}/${lastMonthLastDate.getDate() -
      thisMonthFirstDate.getDay() +
      d +
      1 -
      (thisMonthFirstDate.getDay() > 0 ? 0 : NUMBER_OF_DAYS_IN_WEEK)}
    </div>`
  )
}

for (let d = 0; d < thisMonthLastDate.getDate(); d++) {
  calendarContents.push(
    html`<div
      class="
          ${today.getDate() === d + 1 &&
      ACTUAL_TODAY.getFullYear() === today.getFullYear() &&
      ACTUAL_TODAY.getDate() === today.getDate() &&
      ACTUAL_TODAY.getMonth() === today.getMonth()
        ? "today"
        : ""}
          ${(thisMonthFirstDate.getDay() + d) % 7 === 0 ? "sun" : ""}
          ${(thisMonthFirstDate.getDay() + d) % 7 === 6 ? "sat" : ""}
          calendar-cell
          this-month
        "
    >
      ${today.getMonth() + 1}/${d + 1} ${today.getDate() === d + 1 &&
      ACTUAL_TODAY.getFullYear() === today.getFullYear() &&
      ACTUAL_TODAY.getDate() === today.getDate() &&
      ACTUAL_TODAY.getMonth() === today.getMonth()
        ? " today"
        : ""}
    </div>`
  )
}

let nextMonthDaysToRender = 7 - (calendarContents.length % 7)

for (let d = 0; d < nextMonthDaysToRender; d++) {
  calendarContents.push(
    html`<div
      class="
          ${(nextMonthFirstDate.getDay() + d) % 7 === 0 ? "sun" : ""}
          ${(nextMonthFirstDate.getDay() + d) % 7 === 6 ? "sat" : ""}
          calendar-cell
          next-month
        "
    >
      ${nextMonthFirstDate.getMonth() + 1}/${d + 1}
    </div>`
  )
}
```

이제 캘린더를 렌더링했으니 스타일링만 입혀주면 [애플리케이션](https://radiant-granita-599567.netlify.app/)이 완성됩니다. Vanilla, TypeScript, React 총 세가지 버전으로 만들어서 연습을 했습니다.

## 배포 링크

- [JavaScript](https://radiant-granita-599567.netlify.app/)
- [TypeScript](https://radiant-granita-599567.netlify.app/)
- [React](https://mozi-calendar.vercel.app/)

<!--
이제 알게된 내용을 바탕으로 캘린더의 `Header` 컴포넌트 부분을 만들어보겠습니다.

```tsx
<Header>
  {date.getFullYear()}년 {date.getMonth() + 1}월
</Header>
```

이렇게 캘린더에 현재 몇 년도인지, 그리고 현재 몇 월인지 표시할 수 있습니다.

다음으로 달력의 몸통 부분은 HTML의 테이블을 사용해서 만들어보겠습니다.

![image](https://user-images.githubusercontent.com/63354527/193645668-772d805b-d2fe-480c-afe1-f3a225aab63d.png)

table의 thead 부분은 위와 같이 요일을 표시해주는 부분으로써 고정되어있습니다. 따라서 아래와 같이 처리할 수 있습니다.

```tsx
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

function Calendar() {
  return (
    <>
      <Header />
      <Table>
        <TableHeader>
          <tr>
            {DAYS.map((day) => (
              <th key={day} align="center">
                {day}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>{renderDays()}</TableBody>
      </Table>
    </>
  )
}
```

결과물은 아래와 같습니다.

<img width="906" alt="image" src="https://user-images.githubusercontent.com/63354527/193646602-4f4cbaf3-6ae6-4bb0-bf0c-e2db13639964.png"/>

스타일링을 좀 했더니 괜찮은 것 같습니다. 이제 다음으로 테이블의 tbody 부분에 날짜를 렌더링해보겠습니다. -->
