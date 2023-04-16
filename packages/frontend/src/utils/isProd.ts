import Environment from "bullistic-shared/dist/types/Environment";
import getEnvironment from "utils/getEnvironment";

export default function isProd(): boolean {
  return getEnvironment() === Environment.Production;
}
