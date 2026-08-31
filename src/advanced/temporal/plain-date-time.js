/**
 * <h3>JavaScript PlainDateTime</h3>
 * 순수한 날짜와 시간. time zone 변환이 필요없을 때 사용한다.
 * @module
 * @see https://www.w3schools.com/js/js_temporal_plaindatetime.asp
 */
import { Temporal } from "@js-temporal/polyfill";

const dateTime = Temporal.PlainDateTime.from("2026-05-17T14:30:00");
console.log(dateTime.toString());

const date = new Temporal.PlainDateTime(2026, 5, 17, 14, 30);
console.log(date.toString());

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString());
