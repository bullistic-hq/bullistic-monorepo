import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default function maybeNumber(str: Maybe<string>): Maybe<number> {
  return str == null ? null : Number(str);
}
