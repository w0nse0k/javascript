/**
 * <h3>JavaScript Temporal Instant</h3>
 * 정확한 순간. UTC time.
 * @module
 * @see https://www.w3schools.com/js/js_temporal_instant.asp
 */
import { Temporal } from "@js-temporal/polyfill";

const instant1 = Temporal.Instant.from("2026-05-17T14:30:00Z");
console.log("instant1:", instant1.toString());

// from milliseconds. (from 1970-01-01T00:00:00Z)
const instant2 = Temporal.Instant.fromEpochMilliseconds(1779028200000);
console.log("instant2:", instant2.toString());

console.log(Temporal.Instant.compare(instant1, instant2));
console.log(instant1.equals(instant2));

// current time
const now = Temporal.Now.instant();
console.log("now:", now.toString());

// Convert Instant Time to Local Time
const zoned = now.toZonedDateTimeISO("Asia/Seoul");
console.log(zoned.toString());
