import { transactionTxHex, transactionObject } from "@helixnetwork/samples";
import test from "ava";
import { isTransactionHBytes } from "../src";

test("isTransactionHBytes() returns true for valid transaction hbytes.", t => {
  t.is(
    isTransactionHBytes(transactionTxHex),
    true,
    "isTransactionHBytes() should return true for valid transaction hbytes."
  );
});

test("isTransactionHBytes() returns false if provided hbytes are invalid and minWeightMagnitude <= weightMagnitude.", t => {
  t.is(
    isTransactionHBytes(transactionTxHex.slice(4), 2),
    false,
    "isTransactionHBytes() returns false if provided hbytes are invalid and minWeightMagnitude <= weightMagnitude."
  );
});

test("isTransactionHBytes() returns false if provided hbytes are valid and minWeightMagnitude > weightMagnitude.", t => {
  t.is(
    isTransactionHBytes(transactionTxHex, 5),
    false,
    "isTransactionHBytes() returns false if provided hbytes are valid and minWeightMagnitude > weightMagnitude."
  );
});

test("isTransactionHBytes() returns false for invalid transaction hbytes.", t => {
  const invalidLength = transactionTxHex.slice(6);
  const invalidHBytes = `us${transactionTxHex.slice(2)}`;

  t.is(
    isTransactionHBytes(invalidLength),
    false,
    "isTransactionHBytes() should return false for transaction hbytes of invalid length."
  );

  t.is(
    isTransactionHBytes(invalidHBytes),
    false,
    "isTransactionHBytes() should return false for invalid hbytes."
  );
});
