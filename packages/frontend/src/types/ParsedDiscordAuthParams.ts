import DiscordAuthCallbackFailureReason from "bullistic-shared/dist/types/enums/DiscordAuthCallbackFailureReason";

export type ParsedDiscordAuthParams = {
  failureReason?: DiscordAuthCallbackFailureReason;
  success: boolean;
};
