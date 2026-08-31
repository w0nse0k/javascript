/**
 * <h3>Time Zones</h3>
 * @module
 */
import { Temporal } from "@js-temporal/polyfill";

// 전체 타임 존 목록
const timeZones = Intl.supportedValuesOf("timeZone");
timeZones.forEach((timeZone) => {
  const now = Temporal.Now.zonedDateTimeISO(timeZone);
  console.log(timeZone, now.offset);
});

console.log(Temporal.ZonedDateTime.toString());
