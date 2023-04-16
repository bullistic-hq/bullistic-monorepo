import DiscordAuthCallbackParam from "bullistic-shared/dist/types/enums/DiscordAuthCallbackParam";
import DiscordAuthCallbackFailureReason from "bullistic-shared/dist/types/enums/DiscordAuthCallbackFailureReason";
import assertUnreachable from "bullistic-shared/dist/utils/assertUnreachable";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import { ParsedDiscordAuthParams } from "types/ParsedDiscordAuthParams";

export default function parseDiscordAuthCallbackParams(
  params: URLSearchParams
): Maybe<ParsedDiscordAuthParams> {
  return [...params.entries()].reduce(
    (parsedParams: Maybe<ParsedDiscordAuthParams>, entry) => {
      const [key, value] = entry;
      if (!Object.values(DiscordAuthCallbackParam).includes(key as any)) {
        return parsedParams;
      }

      const param = key as DiscordAuthCallbackParam;
      switch (param) {
        case DiscordAuthCallbackParam.DiscordAuthSuccess:
          return {
            ...(parsedParams ?? {}),
            success: value === "true",
          };
        case DiscordAuthCallbackParam.FailureReason:
          return {
            ...(parsedParams ?? {}),
            failureReason: value as DiscordAuthCallbackFailureReason,
            success: false,
          };
        default:
          return assertUnreachable(param);
      }
    },
    null
  );
}
