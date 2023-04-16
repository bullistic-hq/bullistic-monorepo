import { ParsedTransactionWithMeta } from "@solana/web3.js";

// This currently works for bullistic-auction-house and bullistic-candy-machine
const BOT_TAX_ERROR_NAME = "BotTaxCollected";

function isBotTaxLogMessage(log: string) {
  return log.includes(BOT_TAX_ERROR_NAME);
}

export default function isBotTaxedTransaction(
  tx: ParsedTransactionWithMeta
): boolean {
  return tx.meta?.logMessages?.some((log) => isBotTaxLogMessage(log)) === true;
}
