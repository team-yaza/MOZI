---
slug: mozi-calendar
title: ๐ ์บ๋ฆฐ๋ ๋ง๋ค๊ธฐ
authors: [hyunjin]
tags: [Calendar, MOZI]
---

# ๐ ์บ๋ฆฐ๋ ๋ง๋ค๊ธฐ

MOZI์๋ `Upcoming`์ด๋ผ๋ ํญ์ด ์กด์ฌํฉ๋๋ค. ์ด ํญ์์๋ ๋ค๊ฐ์ค๋ ํ  ์ผ์ ๋ณผ ์ ์๊ณ  ํ  ์ผ์ ๋ฑ๋กํ  ์ ์์ต๋๋ค.

![3_Upcoming](https://user-images.githubusercontent.com/63354527/193635704-98c24679-e5b4-44df-8a35-6f7726ff9122.png)

์ด ๊ธ์ ์ ํ๋ฉด๊ณผ ๊ฐ์ด ๋ฌ๋ ฅ์ ๋ง๋ค์ด๋ณด๋ฉด์ ๊ฒช์ ๊ฒฝํ์ ๊ธฐ๋กํ ๊ธ์๋๋ค.

<!--truncate-->

์บ๋ฆฐ๋๋ฅผ ๋ง๋ ๋ค๊ณ  ํ๋ [๋ชฉ๋ฏผ์ฃผ ๋ฉํ ๋](https://github.com/gv0413)์ด [์์์ ํ๊ฐ ์ถ์ฒ](https://youtu.be/CSWc0HYjxEs)ํด์ฃผ์์ ๋ดค์ต๋๋ค. ์์์ ๋ณด๋ ๋ ์ง๋ฅผ `Date` ๊ฐ์ฒด๋ก ์ง์  ๋ค๋ฃจ๋ ๊ฒ์ ํท๊ฐ๋ฆด๋งํ ๋ถ๋ถ์ด ๋ง์์ต๋๋ค.

JavaScript์์ ๋ ์ง๋ฅผ ๋ค๋ฃจ๋ ๊ฒ์ ๊น๋ค๋กญ๊ธฐ ๋๋ฌธ์ `moment`, `dayjs`, `date-fns`์ ๊ฐ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ๊ณค ํฉ๋๋ค. ์ ๋ ์ฒ์๋ถํฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์ง๋ ์์์ต๋๋ค.(Date ๊ฐ์ฒด๋ฅผ ๋ง์ด ๋ค๋ฃจ์ด๋ณด์ง ์์๊ธฐ ๋๋ฌธ์ Date ๊ฐ์ฒด๋ฅผ ๋ค๋ฃจ์ด ๋ณด๊ณ  ์ถ์์ + React ์์ด vanilla๋ก ์บ๋ฆฐ๋ ๊ฐ๋ฐ)

์ ๋ [mozi-calendar](https://github.com/team-yaza/mozi-calendar)๋ผ๋ ๋ ํฌ๋ฅผ ๋ง๋ค๊ณ  Date ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํด์ ์บ๋ฆฐ๋๋ฅผ ๋ง๋๋ ๊ฒ์ ์ฐ์ตํด๋ณด๊ธฐ๋ก ํฉ๋๋ค. ์ ๋ ์ผ๋จ ์ฝ๋๋ฅผ ์ณ๋ณด๊ณ  ์ดํด๊ฐ ์๊ฐ๋ฉด ๊ฒ์ํด์ ๋ฌธ์๋ฅผ ๋ณด๊ณ  ์ดํดํ๋ ๋ฐฉ์์ ์ข์ํ๊ธฐ ๋๋ฌธ์ ๋จผ์  Date ๊ฐ์ฒด๋ฅผ ๋ง์๋๋ก ๋ค๋ฃจ์ด๋ดค์ต๋๋ค.

```ts
const date = new Date() // Tue Oct 04 2022 02:26:17 GMT+0900 (ํ๊ตญ ํ์ค์)
```

๋จผ์  `new Date()`๋ฅผ ์ฝ์์ ์ฐ์ด๋ณด๋ ์์ ๊ฐ์ด ๋์์ต๋๋ค. ๋ญ๊ฐ ์ค๋ ๋ ์ง์ ์๊ฐ์ด ๋์ค๋ ๊ฒ ๊ฐ์ต๋๋ค. ์ผ๋จ ๋ฌ๋ ฅ์ ์ค๋์ ๋๋, ์, ์ผ์ ํ์ํด์ผํ๋ฏ๋ก date์์๋ถํฐ ๊ฐ์ ธ์๋ณด๊ฒ ์ต๋๋ค.

```ts
date.getFullYear() // 2022
date.getMonth() // 9
date.getDate() // 4
```

์ด๋ ๊ฒ ๋, ์, ์ผ์ ๊ฐ์ ธ์๋ดค์ต๋๋ค. ์ฌ๋ฐ๋ ์ ์ ๋ํ๊ณ  ์ผ์ ๊ด์ฐฎ์๋ฐ ์์ ์ธ๋ฑ์ค๊ฐ 0๋ถํฐ ์์ํ๋ค๊ณ  ํฉ๋๋ค. 0์ 1์, 1์ 2์ ... ๊ทธ๋ฌ๋๊น 9๋ 10์์๋๋ค. ์ค๋์ด 2022๋ 10์ 4์ผ์ด๋ฏ๋ก ๋ง์ต๋๋ค.

๊ทธ๋ผ ์ด์  ์กฐ๊ธ ๋์๊ฐ์ ์ด๋ฒ ๋ฌ์ ์ฒซ์งธ ๋ ๊ณผ ๋ง์ง๋ง ๋ ์ ์์๋ณด๊ฒ ์ต๋๋ค.

```ts
new Date(year, month, 1) // ๋ฌ์ ์ฒซ๋ : Sat Oct 01 2022 00:00:00 GMT+0900 (ํ๊ตญ ํ์ค์)
new Date(year, month + 1, 0) // ๋ฌ์ ๋ง์ง๋ง ๋ : Mon Oct 31 2022 00:00:00 GMT+0900 (ํ๊ตญ ํ์ค์)
```

์ง๊ธ๊น์ง์ ๋ด์ฉ์ผ๋ก ๋ฌ๋ ฅ์ ์๋ถ๋ถ์ธ `Navigator`๋ถ๋ถ์ ํ์ฌ ๋๋์ ์์ ํํ  ์ ์์ต๋๋ค.

<p align="center">
<img  width="220" alt="image" src="https://user-images.githubusercontent.com/63354527/193642338-b4cf65e2-2748-4f0f-9659-20412ecd1f25.png"/>
</p>

```ts
const getNavigatorHTML = (today: Date) => {
  return html`
    <button class="move-month-button">
      โ ${MONTHS[today.getMonth() == 0 ? 11 : today.getMonth() - 1]} ${today.getMonth() <=
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
        : today.getFullYear()} โ
    </button>
  `
}
```

์ด๋ ๊ฒ ๋ค๋น๊ฒ์ด์์ ๋ง๋ค์ด์ค ํ์ ์ ๋ฌ๊ณผ ๋ค์๋ฌ๋ก ์ด๋ํ  ๋ ๋ค๋น๊ฒ์ด์๊ณผ ์บ๋ฆฐ๋ ๋ถ๋ถ์ ๋ค์ ๋ ๋๋ง ํ๋ฉด ๋ฌ๋ ฅ์ด ์์ฑ๋ฉ๋๋ค.

```ts
const previousMonthButtonDidPress = () => {
  displayDate.setMonth(displayDate.getMonth() - 1)

  renderNavigator(document.getElementById("navigator"), displayDate)
  renderCalendar(document.getElementById("calendar"), displayDate)
}
```

์ด์  ๋ค๋น๊ฒ์ด์ ๋ถ๋ถ์ ์์ฑํ์ผ๋ ์บ๋ฆฐ๋๋ถ๋ถ์ผ๋ก ๊ฐ๋ณด๊ฒ ์ต๋๋ค. ์บ๋ฆฐ๋์ ์ต์๋จ์๋ ์ผ~์ ๋ ์ง๊ฐ ํ์๋์ด์์ต๋๋ค.

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

์ฝ๋๋ก ํํํ๋ฉด ์ผ~์์ ์บ๋ฆฐ๋ ์ปจํ์ธ  ๋ฐฐ์ด์ ํธ์ฌํด์ฃผ๋ฉด ๋ฉ๋๋ค. ๊ทธ ๋ค์ ์ค์  ์บ๋ฆฐ๋๋ฅผ ๋ ๋๋งํ  ๊ฑด๋ฐ ๋ณด์ฌ์ง๋ ๋ถ๋ถ์ 3๊ฐ์ง์๋๋ค. ์ด์ ๋ฌ, ํ์ฌ๋ฌ, ๋ค์๋ฌ ๋ฐ๋ผ์ 3๋ฒ์ for๋ฌธ์์ calendar ๊ฐ๊ฐ์ ๋ฌ์ ์ฐ๋ ๋ก์ง์ ์์ฑํด๋ณด๋ฉด ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

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

์ด์  ์บ๋ฆฐ๋๋ฅผ ๋ ๋๋งํ์ผ๋ ์คํ์ผ๋ง๋ง ์ํ์ฃผ๋ฉด [์ ํ๋ฆฌ์ผ์ด์](https://radiant-granita-599567.netlify.app/)์ด ์์ฑ๋ฉ๋๋ค. Vanilla, TypeScript, React ์ด ์ธ๊ฐ์ง ๋ฒ์ ์ผ๋ก ๋ง๋ค์ด์ ์ฐ์ต์ ํ์ต๋๋ค.

## ๋ฐฐํฌ ๋งํฌ

- [JavaScript](https://radiant-granita-599567.netlify.app/)
- [TypeScript](https://radiant-granita-599567.netlify.app/)
- [React](https://mozi-calendar.vercel.app/)

<!--
์ด์  ์๊ฒ๋ ๋ด์ฉ์ ๋ฐํ์ผ๋ก ์บ๋ฆฐ๋์ `Header` ์ปดํฌ๋ํธ ๋ถ๋ถ์ ๋ง๋ค์ด๋ณด๊ฒ ์ต๋๋ค.

```tsx
<Header>
  {date.getFullYear()}๋ {date.getMonth() + 1}์
</Header>
```

์ด๋ ๊ฒ ์บ๋ฆฐ๋์ ํ์ฌ ๋ช ๋๋์ธ์ง, ๊ทธ๋ฆฌ๊ณ  ํ์ฌ ๋ช ์์ธ์ง ํ์ํ  ์ ์์ต๋๋ค.

๋ค์์ผ๋ก ๋ฌ๋ ฅ์ ๋ชธํต ๋ถ๋ถ์ HTML์ ํ์ด๋ธ์ ์ฌ์ฉํด์ ๋ง๋ค์ด๋ณด๊ฒ ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/63354527/193645668-772d805b-d2fe-480c-afe1-f3a225aab63d.png)

table์ thead ๋ถ๋ถ์ ์์ ๊ฐ์ด ์์ผ์ ํ์ํด์ฃผ๋ ๋ถ๋ถ์ผ๋ก์จ ๊ณ ์ ๋์ด์์ต๋๋ค. ๋ฐ๋ผ์ ์๋์ ๊ฐ์ด ์ฒ๋ฆฌํ  ์ ์์ต๋๋ค.

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

๊ฒฐ๊ณผ๋ฌผ์ ์๋์ ๊ฐ์ต๋๋ค.

<img width="906" alt="image" src="https://user-images.githubusercontent.com/63354527/193646602-4f4cbaf3-6ae6-4bb0-bf0c-e2db13639964.png"/>

์คํ์ผ๋ง์ ์ข ํ๋๋ ๊ด์ฐฎ์ ๊ฒ ๊ฐ์ต๋๋ค. ์ด์  ๋ค์์ผ๋ก ํ์ด๋ธ์ tbody ๋ถ๋ถ์ ๋ ์ง๋ฅผ ๋ ๋๋งํด๋ณด๊ฒ ์ต๋๋ค. -->
