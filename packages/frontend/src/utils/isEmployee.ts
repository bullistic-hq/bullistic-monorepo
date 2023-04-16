import { MaybeUndef } from "bullistic-shared/dist/types/UtilityTypes";
import getEmployeeWallets from "utils/getEmployeeWallets";

export default function isEmployee(userId: MaybeUndef<string>) {
  // Defaults are set to make it easier on local dev
  return getEmployeeWallets().includes(userId ?? "");
}
