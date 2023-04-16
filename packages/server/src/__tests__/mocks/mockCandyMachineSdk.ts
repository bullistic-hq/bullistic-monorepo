import { BN } from "@project-serum/anchor";
import BullisticCandyMachineSdk from "@bullistic-hq/bullistic-candy-machine";

export default function mockCandyMachineSdk(price: number) {
  // TODO: return proper mock as needed
  jest
    .spyOn(BullisticCandyMachineSdk.prototype, "fetchCandyMachine")
    .mockResolvedValue({
      // @ts-ignore
      data: { price: new BN(price) },
    });
  jest
    .spyOn(BullisticCandyMachineSdk.prototype, "fetchCandyMachineCollectionPda")
    // @ts-ignore
    .mockResolvedValue({});
}
