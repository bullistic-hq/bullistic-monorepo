import TIMEZONES from "bullistic-shared/dist/constants/Timezones";

export default function getTimezoneLabel(tzCode: string): string {
  return TIMEZONES.find((obj) => obj.tzCode === tzCode)?.label ?? tzCode;
}
