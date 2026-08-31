/**
 * <h3>Temporal Display Formats</h3>
 * @module
 * @see https://www.w3schools.com/js/js_temporal_formats.asp
 */
import { Temporal } from "@js-temporal/polyfill";

const local = Temporal.Now.zonedDateTimeISO();
const utc = local.toInstant();

let text = local.toLocaleString("sv-SE", {
  dateStyle: "short",
  timeStyle: "medium",
});
console.log(text);

// UTC는 특정 timeZone으로 변환 가능
text = utc.toLocaleString("sv-SE", {
  dateStyle: "short",
  timeStyle: "medium",
  timeZone: "America/New_York",
});
console.log(text);
