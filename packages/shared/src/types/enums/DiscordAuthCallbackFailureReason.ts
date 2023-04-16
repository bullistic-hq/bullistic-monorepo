enum DiscordAuthCallbackFailureReason {
  DiscordHandleTaken = "This Discord handle has already been connected to a Bullistic user account.",
  ExpiredNonce = "Your Discord connection timed out. Please connect it again.",
  UnexpectedError = "An unexpected error occurred. Please try again.",
}

export default DiscordAuthCallbackFailureReason;
