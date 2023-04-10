CREATE TABLE "public"."CreatorSurvey" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "impact" text NOT NULL, "improvements" text NOT NULL, "isFofuBetterThanWeb2" boolean NOT NULL, "isFofuMainRevenue" boolean NOT NULL, "positiveDifference" boolean NOT NULL, "problems" boolean NOT NULL, "recommend" integer NOT NULL, "usesWeb2Platforms" boolean NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
