import { Request } from "express";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";

export default function getPublicKeySignature(req: Request): Maybe<string> {
  return (req.headers["x-solana-sig"] as string) ?? null;
}
