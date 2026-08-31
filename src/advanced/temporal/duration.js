/**
 * <h3>JavaScript Temporal Duration</h3>
 * 시간의 길이
 * @module
 * @see https://www.w3schools.com/js/js_temporal_duration.asp
 */
import { Temporal } from "@js-temporal/polyfill";

const duration = Temporal.Duration.from({ days: 7, hours: 2 });
console.log(duration.toString());

const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d3 = Temporal.Duration.from({ minutes: 90 });

console.log(Temporal.Duration.compare(d1, d2));
console.log(Temporal.Duration.compare(d1, d3));
