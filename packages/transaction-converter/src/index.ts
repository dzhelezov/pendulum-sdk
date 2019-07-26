/** @module transaction-converter */

import {
  hBitsToHBytes,
  hbytesToHBits,
  hbits,
  value,
  toTxBytes
} from "@helixnetwork/converter";
import HHash from "@helixnetwork/hash-module";
import { padHBits, padHBytes, padSignedHBits } from "@helixnetwork/pad";
import {
  START_INDEX_SIGNATURE_MESSAGE,
  transactionHash
} from "@helixnetwork/transaction";
import {
  START_BRANCH_TRANS,
  START_INDEX_ADDRESS,
  START_INDEX_ATTACHED_TIMESTAMP,
  START_INDEX_BUNDLE,
  START_INDEX_CURRENT_INDEX,
  START_INDEX_LAST_INDEX_BYTES,
  START_INDEX_NONCE,
  START_INDEX_OBSOLETE_TAG,
  START_INDEX_TAG,
  START_INDEX_TIMESTAMP,
  START_INDEX_TIMESTAMP_LOW,
  START_INDEX_TIMESTAMP_UP,
  START_INDEX_VALUE,
  START_TRUNK_TRANS
} from "@helixnetwork/transaction/";
import {
  ADDRESS_BYTE_SIZE,
  HASH_HBYTE_SIZE,
  NONCE_BYTE_SIZE,
  OBSOLETE_TAG_BYTE_SIZE,
  PAD_BYTE_SIZE,
  SIGNATURE_MESSAGE_FRAGMENT_HBYTE_SIZE,
  TAG_BYTE_SIZE,
  TRANSACTION_CURRENT_INDEX_BITS_SIZE,
  TRANSACTION_CURRENT_INDEX_BYTE_SIZE,
  TRANSACTION_HBYTE_SIZE,
  TRANSACTION_LAST_INDEX_BITS_SIZE,
  TRANSACTION_LAST_INDEX_BYTE_SIZE,
  TRANSACTION_OBSOLETE_TAG_BITS_SIZE,
  TRANSACTION_TAG_BITS_SIZE,
  TRANSACTION_TIMESTAMP_BITS_SIZE,
  TRANSACTION_TIMESTAMP_BYTE_SIZE,
  TRANSACTION_TIMESTAMP_LOWER_BOUND_SIZE,
  TRANSACTION_TIMESTAMP_UPPER_BOUND_SIZE,
  TRANSACTION_VALUE_BITS_SIZE,
  TRANSACTION_VALUE_BYTE_SIZE
} from "../../constants";
import * as errors from "../../errors";
import { isHBytesOfExactLength } from "../../guards";
import { asArray, Hash, HBytes, Transaction } from "../../types";

export { Transaction };

export function asTransactionHBytes(transactions: Transaction): HBytes;
export function asTransactionHBytes(
  transactions: ReadonlyArray<Transaction>
): ReadonlyArray<HBytes>;
/**
 * Converts a transaction object or a list of those into transaction transactionStrings.
 *
 * @method asTransactionHBytes
 *
 * @param {Transaction | Transaction[]} transactions - Transaction object(s)
 *
 * @return {HBytes | HBytes[]} Transaction transactionStrings
 */
export function asTransactionHBytes(
  transactions: Transaction | ReadonlyArray<Transaction>
): HBytes | ReadonlyArray<HBytes> {
  asArray(transactions).forEach(transaction => {
    const val = hBitsToHBytes(hbits(transaction.value));
    const obsoleteTag = padHBytes(OBSOLETE_TAG_BYTE_SIZE)(
      transaction.obsoleteTag
    );
    const attachedTimestamp = hBitsToHBytes(
      hbits(transaction.attachmentTimestamp)
    );
  });

  const txHBytes = asArray(transactions).map(transaction =>
    [
      transaction.signatureMessageFragment,
      transaction.address,
      padHBytes(TRANSACTION_VALUE_BYTE_SIZE)(
        hBitsToHBytes(hbits(transaction.value))
      ),
      padHBytes(OBSOLETE_TAG_BYTE_SIZE)(transaction.obsoleteTag),
      hBitsToHBytes(hbits(transaction.timestamp)),
      hBitsToHBytes(hbits(transaction.currentIndex)),
      hBitsToHBytes(hbits(transaction.lastIndex)),
      transaction.bundle,
      transaction.trunkTransaction,
      transaction.branchTransaction,
      padHBytes(TAG_BYTE_SIZE)(
        transaction.tag || transaction.obsoleteTag
          ? transaction.obsoleteTag.length > TAG_BYTE_SIZE
            ? transaction.obsoleteTag.slice(0, TAG_BYTE_SIZE)
            : transaction.obsoleteTag
          : ""
      ),
      hBitsToHBytes(hbits(transaction.attachmentTimestamp)),
      hBitsToHBytes(hbits(transaction.attachmentTimestampLowerBound)),
      hBitsToHBytes(hbits(transaction.attachmentTimestampUpperBound)),
      transaction.nonce,
      "0".repeat(PAD_BYTE_SIZE)
    ].join("")
  );

  return Array.isArray(transactions) ? txHBytes : txHBytes[0];
}

/**
 * Converts transaction transactionStrings of 2673 transactionStrings into a transaction object.
 *
 * @method asTransactionObject
 *
 * @param {HBytes} hbytes - Transaction transactionStrings
 *
 * @return {Transaction} Transaction object
 */
export const asTransactionObject = (
  hbytes: HBytes,
  hash?: Hash
): Transaction => {
  if (!isHBytesOfExactLength(hbytes, TRANSACTION_HBYTE_SIZE)) {
    throw new Error(errors.INVALID_HBYTES);
  }
  const hbits = hbytesToHBits(hbytes);

  const noOfBitsInBytes = 4;
  const usefulBytesFromValue = TRANSACTION_VALUE_BYTE_SIZE;
  const noOfBitsInValue = 4 * usefulBytesFromValue;

  return {
    hash: hash || transactionHash(toTxBytes(hbytes)),
    signatureMessageFragment: hbytes.slice(
      START_INDEX_SIGNATURE_MESSAGE,
      START_INDEX_SIGNATURE_MESSAGE + SIGNATURE_MESSAGE_FRAGMENT_HBYTE_SIZE
    ),
    address: hbytes.slice(
      START_INDEX_ADDRESS,
      START_INDEX_ADDRESS + ADDRESS_BYTE_SIZE
    ),
    value: value(
      hbits.slice(
        START_INDEX_VALUE * noOfBitsInBytes,
        START_INDEX_VALUE * noOfBitsInBytes + noOfBitsInValue
      )
    ),
    obsoleteTag: hbytes.slice(
      START_INDEX_OBSOLETE_TAG,
      START_INDEX_OBSOLETE_TAG + OBSOLETE_TAG_BYTE_SIZE
    ),
    timestamp: value(
      hbits.slice(
        noOfBitsInBytes * START_INDEX_TIMESTAMP,
        noOfBitsInBytes *
          (START_INDEX_TIMESTAMP + TRANSACTION_TIMESTAMP_BYTE_SIZE)
      )
    ),
    currentIndex: value(
      hbits.slice(
        noOfBitsInBytes * START_INDEX_CURRENT_INDEX,
        noOfBitsInBytes *
          (START_INDEX_CURRENT_INDEX + TRANSACTION_CURRENT_INDEX_BYTE_SIZE)
      )
    ),
    lastIndex: value(
      hbits.slice(
        START_INDEX_LAST_INDEX_BYTES * noOfBitsInBytes,
        noOfBitsInBytes *
          (START_INDEX_LAST_INDEX_BYTES + TRANSACTION_LAST_INDEX_BYTE_SIZE)
      )
    ),
    bundle: hbytes.slice(
      START_INDEX_BUNDLE,
      START_INDEX_BUNDLE + HASH_HBYTE_SIZE
    ),
    trunkTransaction: hbytes.slice(
      START_TRUNK_TRANS,
      START_TRUNK_TRANS + HASH_HBYTE_SIZE
    ),
    branchTransaction: hbytes.slice(
      START_BRANCH_TRANS,
      START_BRANCH_TRANS + HASH_HBYTE_SIZE
    ),
    tag: hbytes.slice(START_INDEX_TAG, START_INDEX_TAG + TAG_BYTE_SIZE),
    attachmentTimestamp: value(
      hbits.slice(
        noOfBitsInBytes * START_INDEX_ATTACHED_TIMESTAMP,
        noOfBitsInBytes *
          (START_INDEX_ATTACHED_TIMESTAMP + TRANSACTION_TIMESTAMP_BYTE_SIZE)
      )
    ),
    attachmentTimestampLowerBound: value(
      hbits.slice(
        noOfBitsInBytes * START_INDEX_TIMESTAMP_LOW,
        noOfBitsInBytes *
          (START_INDEX_TIMESTAMP_LOW + TRANSACTION_TIMESTAMP_LOWER_BOUND_SIZE)
      )
    ),
    attachmentTimestampUpperBound: value(
      hbits.slice(
        noOfBitsInBytes * START_INDEX_TIMESTAMP_UP,
        noOfBitsInBytes *
          (START_INDEX_TIMESTAMP_UP + TRANSACTION_TIMESTAMP_UPPER_BOUND_SIZE)
      )
    ),
    nonce: hbytes.slice(START_INDEX_NONCE, START_INDEX_NONCE + NONCE_BYTE_SIZE)
  };
};

/**
 * Converts a list of transaction transactionStrings into list of transaction objects.
 * Accepts a list of hashes and returns a mapper. In cases hashes are given,
 * the mapper function map them to converted objects.
 *
 * @method asTransactionObjects
 *
 * @param {Hash[]} [hashes] - Optional list of known hashes.
 * Known hashes are directly mapped to transaction objects,
 * otherwise all hashes are being recalculated.
 *
 * @return {Function} {@link #module_transaction.transactionObjectsMapper `transactionObjectsMapper`}
 */
export const asTransactionObjects = (hashes?: ReadonlyArray<Hash>) => {
  /**
   * Maps the list of given hashes to a list of converted transaction objects.
   *
   * @method transactionObjectsMapper
   *
   * @param {HBytes[]} transactionStrings - List of transaction transactionStrings to convert
   *
   * @return {Transaction[]} List of transaction objects with hashes
   */
  return function transactionObjectsMapper(hbytes: ReadonlyArray<HBytes>) {
    return hbytes.map((hByteString, i) =>
      asTransactionObject(hByteString, hashes![i])
    );
  };
};

export const asFinalTransactionHBytes = (
  transactions: ReadonlyArray<Transaction>
) => [...asTransactionHBytes(transactions)].reverse();

export const transactionObject = (hBytes: HBytes): Transaction => {
  /* tslint:disable-next-line:no-console */
  console.warn("`transactionObject` has been renamed to `asTransactionObject`");

  return asTransactionObject(hBytes);
};

export const transactionTxHex = (transaction: Transaction): HBytes => {
  /* tslint:disable-next-line:no-console */
  console.warn("`transactionTxHex` has been renamed to `asTransactionHBytes`");

  return asTransactionHBytes(transaction);
};
