import test from "ava";
import Schnorr from "../src/schnorr";
import { hex, toHBytes, hbits } from "@helixnetwork/converter";
import HSign from "../src/hsign";
import { subseed, key } from "../src";
import {
  SIGNATURE_MESSAGE_FRAGMENT_HBYTE_SIZE,
  SIGNATURE_SECRETE_KEY_BYTE_SIZE
} from "../../constants";

const seed = "abcd";
test("schnorr using 64 shnorr signatures!", t => {
  const keyHBytes: Uint8Array = key(subseed(toHBytes(seed), 0), 2);

  let privateKeys: Uint8Array = keyHBytes; //new Uint8Array([71,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,178,47,241,68,119,255,255,148,64,255,255,140,255,230,35,255,255,207,255,255,255,255,155,33,255,255,255,255,255,255,255,191,127,47,100,125,95,255,177,0,111,92,126,109,255,255,255,246,51,24,255,160,123,255,255,255,255,255,246,255,173,45,98,114,124,63,255,252,87,255,139,22,14,255,255,255,255,255,255,255,210,92,255,255,255,255,255,171,255,255,200,255,255,255,255,255,207,31,64,102,47,255,255,171,46,255,255,255,255,255,255,255,255,255,255,255,255,255,255,142,255,169,15,31,44,119,63,255,255,159,255,255,227,255,255,246,55,255,252,30,100,88,21,255,255,191,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,223,255,255,183,255,255,223,82,255,199,102,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,191,255,203,47,255,255,227,255,226,72,94,255,255,251,255,140,126,65,97,75,255,255,255,237,65,85,255,255,255,255,165,91,127,255,128,79,255,197,15,255,188,79,24,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,232,60,26,255,255,255,255,255,215,63,255,176,123,255,255,146,53,255,255,255,255,163,87,255,255,255,255,255,255,255,255,214,255,255,255,255,255,255,255,204,13,63,255,234,115,193,13,2,75,255,255,231,255,255,255,255,255,220,255,255,255,255,255,219,255,192,110,255,255,255,255,255,175,127,255,255,227,255,206,108,54,255,221,58,5,35,84,255,255,255,255,255,255,255,255,255,255,255,255,255,255,154,63,248,76,111,255,255,187,255,192,53,69,255,255,214,255,255,255,255,156,92,255,255,255,255,255,184,255,221,48,255,255,255,255,255,255,159,255,128,3,255,255,163,9,255,255,255,255,255,255,255,255,255,255,255,135,255,255,222,255,167,86,85,92,47,127,255,255,207,255,255,211,255,255,174,37,255,135,28,255,255,255,255,255,255,255,255,142,255,255,255,255,255,255,255,255,229,74,12,40,31,255,255,143,255,130,79,64,255,255,195,255,255,135,255,255,201,255,164,58,255,255,255,255,206,112,255,255,255,191,173,10,111,255,255,131,255,255,150,83,255,255,171,255,255,255,255,255,255,162,86,60,255,255,243,255,247,76,255,255,255,255,255,255,143,255,167,83,255,255,174,9,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,247,2,255,252,72,63,255,255,239,255,255,199,255,255,193,53,255,198,109,255,255,255,255,255,255,255,255,255,255,218,20,255,255,255,255,177,97,63,255,202,47,255,255,223,255,255,152,11,255,255,255,255,133,110,255,255,148,255,255,184,255,255,251,255,255,255,255,172,38,127,255,255,239,255,255,219,255,255,150,91,255,255,255,255,255,255,171,51,58,19,122,42,255,255,255,255,255,255,255,255,255,191,255,255,207,164,11,87,255,255,244,14,255,255,255,182,8,83,255,255,255,255,255,255,255,255,229,255,255,255,255,255,169,88,18,50,111,255,255,131,255,255,186,20,255,255,192,255,255,255,255,235,43,255,255,233,255,255,255,255,255,255,255,255,255,191,255,189,79,255,255,174,97,71,75,98,255,255,145,255,177,94,255,255,177,255,255,178,42,98,5,255,255,255,255,255,224,127,255,255,191,255,157,63,255,183,65,96,255,255,255,255,255,205,109,116,33,255,255,194,255,255,255,255,255,255,195,17,126,63,255,255,207,255,175,23,208,68,115,104,105,14,105,255,131,122,255,255,255,255,255,255,255,255,255,255,255,255,255,255,181,127,255,255,215,53,23,63,255,175,122,25,255,255,185,255,255,224,255,224,66,255,204,46,255,255,255,255,255,193,255,168,97,63,255,255,159,255,239,51,255,157,119,84,255,255,255,139,47,113,255,255,176,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,212,68,126,39,255,255,239,17,255,255,255,255,255,255,255,255,176,255,255,255,161,9,51,255,134,105,255,255,255,191,255,145,15,255,169,43,255,255,167,10,55,45,119,255,255,255,255,255,150,9,126,41,255,255,255,255,255,255,255,255,149,127,154,21,95,255,255,199,255,255,160,89,255,255,255,255,255,255,255,255,255,219,37,18,255,255,255,255,255,255,255,255,255,255,255,255,143,255,197,103,255,255,232,94,255,255,255,255,255,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,191,171,45,15,255,255,135,255,255,145,67,255,210,10,255,158,125,255,255,255,255,255,255,255,255,255,255,255,255,255,255,193,127,255,255,175,97,0,55,211,77,37,54,255,255,242,255,255,231,255,255,255,255,255,255,255,239,38,255,246,49,255,255,255,191,255,255,239,255,255,191,255,242,63,10,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,239,255,255,227,255,255,244,104,255,255,249,255,230,13,44,14,67,255,232,64,255,255,167,255,255,255,255,255,234,59,28,10,31,255,175,51,255,229,85,2,255,255,230,62,84,122,255,255,228,255,255,255,255,255,255,255,255,255,255,255,164,49,39,114,127,255,255,211,255,129,94,21,255,255,214,255,255,255,255,255,255,215,115,20,255,255,239,255,255,255,255,255,193,26,68,89,47,255,216,39,255,255,167,57,255,255,176,255,181,32,255,188,40,255,255,255,148,70,76,255,255,255,255,255,255,191,255,255,143,255,255,239,255,255,148,35,255,255,255,255,255,130,255,255,255,133,87,52,255,255,255,255,255,158,255,255,255,191,221,104,79,255,210,123,255,255,188,6,255,255,255,255,255,255,255,207,39,255,255,208,80,121,33,255,255,255,255,255,228,9,93,92,15,255,255,187,255,255,152,51,255,255,255,255,255,255,255,255,255,129,60,58,255,255,255,255,255,255,255,153,32,127,163,78,15,255,183,99,255,255,178,1,255,255,255,219,60,35,255,255,255,255,255,255,255,255,255,255,176,0,255,255,255,191,255,250,47,255,142,95,219,33,63,35,255,255,255,255,255,255,255,255,255,255,255,200,3,17,80,18,71,89,255,255,255,255,178,54,95,255,247,27,255,219,37,110,255,255,253,255,255,255,255,255,255,255,255,186,255,255,255,174,23,57,117,77,52,75,46,10,42,70,48,35,255,255,229,94,255,140,121,255,255,255,255,255,244,255,254,51,255,255,255,255,197,31,255,255,255,255,255,255,143,255,255,223,255,138,48,121,27,80,66,255,255,225,255,255,255,255,255,255,255,255,255,255,255,227,255,145,38,99,7,121,15,255,255,227,255,255,129,43,255,255,255,255,255,255,255,255,255,255,255,255,255,147,93,255,255,255,255,255,255,255,255,251,127,255,255,155,255,255,181,119,255,255,235,255,128,64,255,255,255,132,14,63,255,255,255,255,255,255,255,255,255,191,255,255,228,22,59,47,255,245,11,90,255,255,255,224,8,126,255,255,255,252,80,73,25,68,65,255,232,95,255,255,255,191,255,255,255,255,251,87,255,166,72,52,255,255,255,255,255,255,255,255,145,255,255,255,255,255,255,255,255,132,255,255,249,63,237,25,111,255,255,255,255,255,153,96,255,255,255,255,255,255,255,255,255,255,255,255,255,158,8,255,255,255,255,255,255,191,193,31,127,255,255,175,209,86,36,88,99,31,104,255,156,59,77,58,39,255,255,214,255,255,255,255,255,255,255,255,255,181,107,27,45,113,18,27,255,255,207,88,29,16,54,255,255,255,255,255,138,255,255,212,255,255,255,255,255,255,255,221,89,127,255,165,79,255,255,139,59,49,61,83,255,255,255,255,255,132,255,132,48,255,255,255,192,65,18,255,255,201,255,255,255,191,246,24,47,255,255,235,255,255,245,114,255,255,255,255,191,124,255,255,255,255,255,210,91,3,50,255,192,21,255,255,255,255,255,194,111,255,183,75,255,224,101,14,255,255,255,255,255,246,255,255,255,255,255,255,255,255,156,255,255,255,255,255,182,100,88,6,127,214,46,19,255,255,130,2,255,255,227,255,255,190,255,214,99,255,255,235,255,255,183,255,214,21,255,255,255,255,255,255,175,255,255,203,255,187,9,30,79,54,73,255,255,207,255,255,255,255,255,242,46,98,51,255,255,255,255,184,103,127,255,255,223,255,167,55,255,167,52,120,255,255,255,255,255,221,255,133,52,255,255,255,255,255,191,119,70,50,88,124,53,63,255,255,175,255,255,199,255,255,209,29,67,88,26,55,74,58,255,255,255,255,255,189,255,175,96,255,255,189,255,255,141,63,255,255,255,255,133,123,255,255,215,112,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,136,9,68,127,255,255,159,255,255,215,255,245,8,96,255,255,255,255,255,255,255,255,245,255,255,180,255,255,255,255,191,102,255,255,208,108,119,3,79,255,255,231,255,255,246,89,45,7,12,255,157,115,255,255,255,160,51,7,255,255,191,121,90,113,255,148,15,63,255,168,31,255,146,83,255,255,238]);
  let msg: string =
    "f803010303fe07fd07feff0200fefcfffeff0007fef9fffc0106fc040502fafffefaf9f906fe0000fa04fa00fffefd0602fa040606f9fb06060206070101fffe";

  const publicKeys = new Array<Uint8Array>(64);
  const privateNonce = new Array<Uint8Array>(64);
  const publicNonce = new Array<Uint8Array>(64);
  const signatures: Array<HSign> = new Array<HSign>(64);

  const publicNonceArray = new Uint8Array(64 * 32);

  for (let i = 0; i < 64; i++) {
    const secreteKey = privateKeys.slice(i * 32, (i + 1) * 32);
    publicKeys[i] = Schnorr.computePublicKey(secreteKey);
    let noncePair = Schnorr.generateNoncePair(
      msg,
      secreteKey,
      hex(secreteKey.slice(0, 16))
    );
    privateNonce[i] = noncePair.k;
    publicNonce[i] = noncePair.buff;
  }
  let nonces = Array<Uint8Array>(64 - 1);
  for (let i = 0; i < 64; i++) {
    for (let k = 0, j = 0; j < 64; j++) {
      if (j == i) {
        continue;
      }
      nonces[k++] = publicNonce[j];
    }
    const secreteKey = privateKeys.slice(i * 32, (i + 1) * 32);

    let noncePair = Schnorr.generateNoncePair(
      msg,
      secreteKey,
      hex(secreteKey.slice(0, 16))
    );

    signatures[i] = Schnorr.partialSign(
      msg,
      secreteKey,
      noncePair.k,
      Schnorr.aggregatePublicNonces(nonces)
    );
  }

  nonces = Array<Uint8Array>(64 - 1);
  for (let k = 0, j = 0; j < 64; j++) {
    nonces[k++] = publicNonce[j];
  }
  const aggregatedPublicKey = Schnorr.aggregatePublicKey(publicKeys);
  const aggregatedSignature: HSign = Schnorr.aggregateSignature(signatures);
  // console.log('SCHNORR_TEST  aggregatedNonce: ' + hex(Schnorr.aggregatePublicNonces(nonces)));
  // console.log('SCHNORR_TEST  signature: ' + hex(aggregatedSignature.getSignatureArray()));
  // console.log('SCHNORR_TEST  public key: ' + hex(aggregatedPublicKey));
  // console.log('SCHNORR_TEST  message: ' + msg);

  t.is(
    Schnorr.verify(msg, aggregatedSignature, aggregatedPublicKey),
    true,
    "Multiple Schnorr signature should be correct!"
  );
});

test("Address generation for seed", t => {
  for (let index = 0; index < 10; index++) {
    for (let security = 1; security < 3; security++) {
      const keyHBytes: Uint8Array = key(
        subseed(toHBytes(seed), index),
        security
      );
      const size = Math.floor(
        keyHBytes.length / SIGNATURE_SECRETE_KEY_BYTE_SIZE
      );
      const publicKeys = new Array<Uint8Array>(size);

      for (let i = 0; i < size; i++) {
        const secreteKey = keyHBytes.slice(i * 32, (i + 1) * 32);
        publicKeys[i] = Schnorr.computePublicKey(secreteKey);
      }
      const aggregatedPublicKey = Schnorr.aggregatePublicKey(publicKeys);
      // console.log(
      //   "SCHNORR_TEST  seed: " +
      //     seed +
      //     " index:" +
      //     index +
      //     " security: " +
      //     security +
      //     " address: " +
      //     hex(aggregatedPublicKey)
      // );
    }
  }
});
