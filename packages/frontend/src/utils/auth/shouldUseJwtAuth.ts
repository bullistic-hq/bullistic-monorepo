import Environment from "bullistic-shared/dist/types/Environment";

export default function shouldUseJwtAuth(
  env: Environment,
  enableJwtAuth: boolean
) {
  return env === Environment.Local || enableJwtAuth;
}
