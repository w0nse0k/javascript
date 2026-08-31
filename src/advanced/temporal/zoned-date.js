/**
 * <h3>JavaScript ZonedDateTime</h3>
 * @module
 * @see https://www.w3schools.com/js/js_temporal_zoneddatetime.asp
 */
import { Temporal } from "@js-temporal/polyfill";

// 현재 타임존 날짜와 시간
const seoul = Temporal.Now.zonedDateTimeISO(); // local (Seoul)
const newYork = seoul.withTimeZone("America/New_York"); // NewYork
const utc = seoul.toInstant(); // UTC
const oslo = utc.toZonedDateTimeISO("Europe/Oslo"); // Oslo

console.log(seoul.toString());
console.log(newYork.toString());
console.log(utc.toString());
console.log(oslo.toString());

// UTC를 기준으로 비교하면 전세계 같은 시간은 true
console.log(utc.equals(seoul));
console.log(utc.equals(newYork));
console.log(utc.equals(oslo));

// ZonedDateTime은 timeZone이 다르면 false
console.log(seoul.equals(newYork));
