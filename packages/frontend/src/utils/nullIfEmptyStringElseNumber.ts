import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default function nullIfEmptyStringElseNumber(
  str: string
): Maybe<number> {
  return str === "" ? null : Number(str);
}
