/**
 * <h3>JavaScript Temporal vs Date</h3>
 * @module
 * @see https://www.w3schools.com/js/js_temporal_vs_date.asp
 */
import { Temporal } from "@js-temporal/polyfill";

// Temporal Objects are Immutable
// PlainDate 는 시간과 timezone이 없고, 날짜만 있다.
const date1 = Temporal.PlainDate.from("2026-05-17");
const date2 = date1.add({ days: 7 });

console.log(date1.toString());
console.log(date2.toString());

const instant = Temporal.Now.instant(); // UTC timestamp
const local = Temporal.Now.zonedDateTimeISO(); // Zoned timestamp

console.log(instant.toString());
console.log(local.toString());

const start = Temporal.PlainDate.from("2026-05-01");
const end = Temporal.PlainDate.from("2026-05-17");
const diff = start.until(end);

console.log(diff.toString());
