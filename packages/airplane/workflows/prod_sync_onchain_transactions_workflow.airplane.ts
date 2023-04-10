import airplane from "airplane";
import executeWithRetries from "./executeWithRetries";
import getNumberOfNftsToSync from "./getNumberOfNftsToSync";

export default airplane.workflow(
  {
    resources: ["prod_api_big"],
    slug: "prod_sync_onchain_transactions_workflow",
    name: "[Prod] Sync Onchain Transactions Workflow",
    nodeVersion: "18",
  },
  // This is your task's entrypoint. When your task is executed, this
  // function will be called.
  async () => {
    const batchSize =
      process.env.BATCH_SIZE == null ? 1000 : Number(process.env.BATCH_SIZE);
    const numberOfNftsToSync = await getNumberOfNftsToSync();
    const numBatches = Math.ceil(numberOfNftsToSync / batchSize);

    console.log(
      `There are ${numberOfNftsToSync} NFTs to sync. ` +
        `They will be synced in ${numBatches} batches of size ${batchSize}`
    );

    const taskSlug = "prod_sync_transfer_transactions";

    for (let batch = 0; batch < numBatches; batch++) {
      const runOutput = await executeWithRetries(taskSlug, batch, batchSize);
      airplane.appendOutput(runOutput);
    }
  }
);
