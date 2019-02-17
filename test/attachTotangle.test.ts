import { expect } from "chai";
import "mocha";
import { attachToTangle } from "../src/attachToTangle";
import * as config from "../src/config";
import { createTransaction } from "../src/createTransaction";
import { generateAddress } from "../src/generateAddress";
import { getBytes } from "../src/getBytes";
import { getTransactionsToApprove } from "../src/getTransactionsToApprove";

/**
 * Testing Script to test getTransactionToApprove
 *
 *  @author Sachu Shaji Abraham <sachu.shaji@netobjex.com>
 */
let result: any; // variable to store response
before("Running attachToTangle API Call", async function() {
  this.timeout(0);
  const addr = await generateAddress(config.seed);
  const transaction = await createTransaction(
    addr,
    0,
    "68656c6c6f776f72",
    "68656c6c6f776f72"
  );
  const transactionApprove = await getTransactionsToApprove; // function to be executed before testing
  const bytes = await getBytes([transaction[0].hash]);
  result = "a";
  // result = await attachToTangle(
  //   transactionApprove.trunkTransaction,
  //   transactionApprove.branchTransaction,
  //   bytes
  // );
});

describe("attachTotangle test", () => {
  it("it should return Array of transaction trytes with nonce and attachment timestamps details", () => {
    expect(result).to.match(/^([a-f0-9])*$/);
  });
});
