import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverageFrom: ["src/utils/**/*.ts"],
  moduleDirectories: ["node_modules", "src"],
  coverageReporters: ["html-spa"],
};

export default config;
