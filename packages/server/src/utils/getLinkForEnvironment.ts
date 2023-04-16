import Environment from "bullistic-shared/dist/types/Environment";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import getEnvironment from "src/utils/getEnvironment";

export default function getLinkForEnvironment(relativeLink: string) {
  const env = getEnvironment();
  switch (env) {
    case Environment.Local:
      return `http://localhost:3000${relativeLink}`;
    case Environment.Development:
      return `https://dev.bullistic.xyz${relativeLink}`;
    case Environment.Testnet:
      return `https://test.bullistic.xyz${relativeLink}`;
    case Environment.Production:
      return `https://bullistic.xyz${relativeLink}`;
    default:
      return assertUnreachable(env);
  }
}
