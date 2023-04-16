import { getProgramIdsFromEnvironment } from "@bullistic-hq/bullistic-gumdrop";
import Environment from "bullistic-shared/dist/types/Environment";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import getEnvironment from "src/utils/getEnvironment";

export default function getGumdropInfo(environment = getEnvironment()) {
  switch (environment) {
    case Environment.Local:
      return getProgramIdsFromEnvironment(Environment.Development);
    case Environment.Development:
    case Environment.Production:
    case Environment.Testnet:
      return getProgramIdsFromEnvironment(environment);
    default:
      return assertUnreachable(environment);
  }
}
