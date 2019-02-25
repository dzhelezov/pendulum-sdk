import { addChecksum } from "@helixnetwork/checksum";
import { hex, toHBytes } from "@helixnetwork/converter";
import { address, digests, key, subseed } from "@helixnetwork/winternitz";
import {
  ADDRESS_BYTE_SIZE,
  ADDRESS_CHECKSUM_BYTE_SIZE,
  HASH_HBYTE_SIZE
} from "../../constants";
import { Hash } from "../../types";

/**
 * Generates an address deterministically, according to the given seed, index and security level.
 * @todo set default security to 2 in future.
 * @method generateAddress
 *
 * @memberof module:core
 *
 * @param {string} seed
 * @param {number} index - Private key index
 * @param {number} [security=1] - Security level of the private key
 * @param {boolean} [checksum=false] - Flag to add 0hbytes checksum
 *
 * @returns {Hash} Address hbytes
 */
export const generateAddress = (
  seed: string,
  index: number,
  security: number = 1,
  checksum: boolean = false
): Hash => {
  // TODO: this part is added only to address generation not also when bundle is sign,
  // because of this there are differences between address generated and seed for which address is generated

  while (seed.length % HASH_HBYTE_SIZE !== 0) {
    seed += 0;
  }
  const keyHBytes = key(subseed(toHBytes(seed), index), security);
  const digestsHBytes = digests(keyHBytes);
  const addressHBytes = hex(address(digestsHBytes));

  return checksum ? addChecksum(addressHBytes) : addressHBytes;
};
