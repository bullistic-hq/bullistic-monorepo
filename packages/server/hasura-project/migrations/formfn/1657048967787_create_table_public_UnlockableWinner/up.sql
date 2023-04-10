CREATE TABLE "public"."UnlockableWinner" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "unlockableId" uuid NOT NULL, "userId" text NOT NULL, "userEmail" text, PRIMARY KEY ("id") , FOREIGN KEY ("unlockableId") REFERENCES "public"."Unlockable"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));COMMENT ON TABLE "public"."UnlockableWinner" IS E'Records recipient information for users who will receive an unlockable item from an auction';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
