import { getBalance } from "../src/getBalance";
import { assert, expect } from "chai";
import "mocha";

/**
 * Testing Script to test getBalance
 *
 *  @author Sachu Shaji Abraham <sachu.shaji@netobjex.com>
 */
let result: any; //variable to store response
let Error: any;
before("Running getBalance API Call", async function() {
  this.timeout(0);
  result = await getBalance([
    "e8beb08da8930027eacd19f806a417ff919bafcc216d9e9483398368be3921ea" //function to be executed before testing
  ]);
  try {
    await getBalance([
      "e8beb08da8930027eacd19f806a417ff919bafcc216d9e9483398368be3921eappp" //function to should throw an error
    ]);
  } catch (error) {
    Error = error;
  }
});

describe("getBalance  test", () => {
  it("it should return a succesfull info about the balance in the given address", () => {
    assert.isObject(result);
    expect(result).to.have.property("balances");
  });
  it("it should throw a successfull error", () => {
    assert.isDefined(Error);
  });
});
//
