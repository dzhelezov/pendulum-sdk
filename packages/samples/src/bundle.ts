import { Transaction, HBytes } from "../../types";

export const bundle: Transaction[] = [
  {
    hash: "9788569fa1314090ac108cd3543514559e681a03e2443992c9380fbc846bdc33",
    signatureMessageFragment:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    value: 3,
    obsoleteTag: "aaaa000000000000",
    timestamp: 1522219,
    currentIndex: 0,
    lastIndex: 4,
    bundle: "e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a",
    trunkTransaction:
      "61ef180740e9e3853b15a3e912601a36d0d88ddd460fe980d9f957734981ed0f",
    branchTransaction:
      "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "aaaa000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "61ef180740e9e3853b15a3e912601a36d0d88ddd460fe980d9f957734981ed0f",
    signatureMessageFragment:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    value: 3,
    obsoleteTag: "aaaa000000000000",
    timestamp: 1522219,
    currentIndex: 1,
    lastIndex: 4,
    bundle: "e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a",
    trunkTransaction:
      "7f206fd91c81ab63cd3a40f73011ae34bc7a7b0dae91c95d2ef4b6380365f9eb",
    branchTransaction:
      "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "aaaa000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "7f206fd91c81ab63cd3a40f73011ae34bc7a7b0dae91c95d2ef4b6380365f9eb",
    signatureMessageFragment:
      "a0434a345ffcba934a878ae59c524053467272645f3c00f8ff9721f2267c7c0d19affd4a8b2264d174ad068be47f6e21cebfd86edad2afbe8ff14690a98ca9fd",
    address:
      "03a98d40d7ca5da6198ce7d02e1454a924fcecae2d5d0feb7ddfeffa8e30d1bc13",
    value: -3,
    obsoleteTag: "0000000000000000",
    timestamp: 1522219,
    currentIndex: 2,
    lastIndex: 4,
    bundle: "e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a",
    trunkTransaction:
      "32285a6924bf55e68ecf2d59e92d79f966ae8b59f1b8c012c814fe6928a84cbe",
    branchTransaction:
      "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "32285a6924bf55e68ecf2d59e92d79f966ae8b59f1b8c012c814fe6928a84cbe",
    signatureMessageFragment:
      "7ade88b7c9fd8ac5977ac48a63a477963862454606051c5a4b1c9ea5ae6cb31a25511a0084f67602f1b34f7d681fffbe78778a32e28a506acc234daa57327849",
    address:
      "037b00e3c9524817b49df39ada58c54c2c1d3eb937e365eaeee36207ee2be1b99a",
    value: -4,
    obsoleteTag: "0000000000000000",
    timestamp: 1522219,
    currentIndex: 3,
    lastIndex: 4,
    bundle: "e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a",
    trunkTransaction:
      "dc8cc85a0a8d5af48748c34a64e9fa7718767da5d9ff224bf07b3714b6cae694",
    branchTransaction:
      "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "dc8cc85a0a8d5af48748c34a64e9fa7718767da5d9ff224bf07b3714b6cae694",
    signatureMessageFragment:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "031568f8a27e31eae4ad99a1ec55d72d1e23be79df8cfc143c7fe6b23dc98521b7",
    value: 1,
    obsoleteTag: "0000000000000000",
    timestamp: 1522219,
    currentIndex: 4,
    lastIndex: 4,
    bundle: "e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a",
    trunkTransaction:
      "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    branchTransaction:
      "5bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  }
  // {
  //   hash: "70f2c3607c71c6c80300a25b68fe247a2b154e8507f580d21da7f23212f574bd",
  //   // text: MINEIOTA.COM MANUAL PAYOUT
  //   signatureMessageFragment:
  //     "4d494e45494f54412e434f4d204d414e55414c205041594f55540000000000000000000000000000000000000000000000000000000000000000000000000000",
  //   //64 bytes
  //   address:
  //     "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
  //   value: 1995,
  //   obsoleteTag: "aaaabbbbccccdddd",
  //   timestamp: 1522184057,
  //   currentIndex: 0,
  //   lastIndex: 3,
  //   bundle: "6aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb",
  //   trunkTransaction:
  //     "4d46505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   branchTransaction:
  //     "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   tag: "aaaabbbb00000000",
  //   attachmentTimestamp: 1522184104751,
  //   attachmentTimestampLowerBound: 0,
  //   attachmentTimestampUpperBound: 12,
  //   nonce: "0123456789abcdef"
  // },
  // {
  //   hash: "4d46505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   signatureMessageFragment:
  //     "abcdef123454223423423abcdabcdef123454223423423abcdabcdef12345422abcdef123454223423423abcdabcdef123454223423423abcdabcdef12345422",
  //   address:
  //     "0270af6513000abc87fbb1cb413d27bb06826461b1968f644ab9224b28f89b044f",
  //   value: -6473274,
  //   obsoleteTag: "aaaabbbbccccdddd",
  //   timestamp: 1522184057,
  //   currentIndex: 1,
  //   lastIndex: 3,
  //   bundle: "6aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb",
  //   trunkTransaction:
  //     "4446505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   branchTransaction:
  //     "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   tag: "aaaabbbb00000000",
  //   attachmentTimestamp: 1522184084740,
  //   attachmentTimestampLowerBound: 0,
  //   attachmentTimestampUpperBound: 12,
  //   nonce: "1123456789abcdef"
  // },
  // {
  //   hash: "4446505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   signatureMessageFragment:
  //     "11111f123454223423423abcdabcdef123454223423423abcdabcdef12345422abcdef123454223423423abcdabcdef123454223423423abcdabcdef12345422",
  //   address:
  //     "0270af6513000abc87fbb1cb413d27bb06826461b1968f644ab9224b28f89b044f",
  //   value: 0,
  //   obsoleteTag: "aaaabbbbccccdddd",
  //   timestamp: 1522184057,
  //   currentIndex: 2,
  //   lastIndex: 3,
  //   bundle: "6aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb",
  //   trunkTransaction:
  //     "222505a524546494757484d4d3959475342535a425542544b556554d4e477896",
  //   branchTransaction:
  //     "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   tag: "aaaabbbb00000000",
  //   attachmentTimestamp: 1522184082987,
  //   attachmentTimestampLowerBound: 0,
  //   attachmentTimestampUpperBound: 12,
  //   nonce: "7123456789abcdef"
  // },
  // {
  //   hash: "222505a524546494757484d4d3959475342535a425542544b556554d4e477896",
  //   signatureMessageFragment:
  //     "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  //   address:
  //     "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
  //   value: 6471279,
  //   obsoleteTag: "aaaabbbbccccdddd",
  //   timestamp: 1522184057,
  //   currentIndex: 3,
  //   lastIndex: 3,
  //   bundle: "6aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb",
  //   trunkTransaction:
  //     "2222505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   branchTransaction:
  //     "5bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
  //   tag: "aaaabbbb00000000",
  //   attachmentTimestamp: 1522184080330,
  //   attachmentTimestampLowerBound: 0,
  //   attachmentTimestampUpperBound: 12,
  //   nonce: "823456789abcdefa"
  // }
];

export const bundleWithValidSignature: Transaction[] = [
  {
    hash: "d75b80fc59bf6b9292851af9e7024b52ea87c85fb478cd7c186e6625e2857cae",
    signatureMessageFragment:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    value: 3,
    obsoleteTag: "aaaa000000000000",
    timestamp: 1522219,
    currentIndex: 0,
    lastIndex: 1,
    bundle: "bf8c93fcb87a4218818de6bede52713d27361b1eb3c47bf74756d7c49bf37331",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    tag: "aaaa000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "dc85c37fbf1c4c7caee5e0e79831bcefdc04bd65cf5f298e90f8fe4d4bf5422e",
    signatureMessageFragment:
      "eea2109288ca6ea16765ae143cc8c0d9b8506865a753b7aff72f9d889d0c684f747a9650147eaade29a1dc4b5ad0da90b86aaaf0e24a6d05a8c043f09117c5a2",
    address:
      "03a98d40d7ca5da6198ce7d02e1454a924fcecae2d5d0feb7ddfeffa8e30d1bc13",
    value: -3,
    obsoleteTag: "0000000000000000",
    timestamp: 1522219,
    currentIndex: 1,
    lastIndex: 1,
    bundle: "bf8c93fcb87a4218818de6bede52713d27361b1eb3c47bf74756d7c49bf37331",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  }
];

export const bundleWithInvalidSignature = [...bundle].map(transaction => ({
  ...transaction,
  signatureMessageFragment: transaction.signatureMessageFragment
    .slice(0, 2 * 32)
    .concat("a".repeat(2 * 32))
}));

export const bundleWithInvalidValueSum = [...bundle].map(
  (transaction, i) =>
    i === 0
      ? {
          ...transaction,
          value: transaction.value + 23128
        }
      : transaction
);

export const bundleWithInvalidBundleHash = [...bundle].map(
  (transaction, i) => ({
    ...transaction,
    bundle: "b".repeat(2 * 32) // aaaabbbbccccdddd
  })
);

export const bundleWithInvalidTransactionOrder = [...bundle].reverse();

export const bundleWithInvalidTransactionOrderAndValidSignature = [
  ...bundleWithValidSignature
].reverse();

export const bundleWithInvalidLastIndex = [...bundle]
  .slice(0, bundle.length - 1)
  .concat(
    [[...bundle][0]].map(transaction => ({
      ...transaction,
      lastIndex: transaction.currentIndex + 1
    }))
  );

export const bundleWithZeroValue = [
  {
    hash: "9bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4345390000000000",
    timestamp: 1521867132,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "c743f313b17e813333e51910304c1ebf585356e66df88b5c720f1fa5a87778cb",
    trunkTransaction:
      "a6c6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    branchTransaction:
      "9bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    tag: "0000000000000000",
    attachmentTimestamp: 1521867134426,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 3812798742493,
    nonce: "adef324300000000"
  }
];

export const bundleWithJSON: Transaction[] = [
  {
    hash: "abc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "7b20276127203a202762272c202763273a202764272c202765273a20272361736466643f2427207d000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "00000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "abc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  }
];

export const parsedJSON: string = "{ 'a' : 'b', 'c': 'd', 'e': '#asdfd?$' }";

export const bundleWithEmptyJSON: Transaction[] = [
  {
    hash: "9bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "7b7d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "0000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "4676505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  }
];

export const bundleWithMultipleJSONMessageFragments: Transaction[] = [
  {
    hash: "7766505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "7b276d657373616765273a2027494f54412069732061207265766f6c7574696f6e617279206e6577207472616e73616374696f6e616c20736574746c656d656e7420616e642064617461207472616e73666572206c6179657220666f722074686520496e7465726e6574206f66205468696e67732e2049742773206261736564206f6e2061206e6577206469737472696275746564206c65646765722c207468652054616e676c652c207768696368206f766572636f6d65732074686520696e656666696369656e63696573206f662063757272656e7420426c6f636b636861696e2064657369676e7320616e6420696e74726f64756365732061206e657720776179206f66207265616368696e6720636f6e73656e73757320696e206120646563656e7472616c697a656420706565722d746f2d706565722073797374656d2e20466f72207468652066697273742074696d6520657665722c207468726f75676820494f54412070656f706c652063616e207472616e73666572206d6f6e657920776974686f757420616e7920666565732e2054686973206d65616e732074686174206576656e20696e66696e69746573696d616c6c7920736d616c6c206e616e6f7061796d656e74732063616e206265206d616465207468726f75676820494f54412e20494f544120697320746865206d697373696e672070757a7a6c6520706965636520666f7220746865204d616368696e652045636f6e6f6d7920746f2066756c6c7920656d6572676520616e6420726561636820697473206465736972656420706f74656e7469616c2e20576520656e766973696f6e20494f544120746f20626520746865207075626c69632c207065726d697373696f6e6c657373206261636b626f6e6520666f722074686520496e7465726e6574206f66205468696e6773207468617420656e61626c6573207472756520696e7465726f7065726162696c697479206265747765656e20616c6c20646576696365732e2054616e676c653a204120646972656374656420616379636c69632067726170682028444147292061732061206469737472696275746564206c65646765722077686963682073746f72657320616c6c207472616e73616374696f6e2064617461206f662074686520494f5441206e6574776f726b2e204974206973206120426c6f636b636861696e20776974686f75742074686520626c6f636b7320616e642074686520636861696e2028736f206973206974207265616c6c79206120426c6f636b636861696e3f292e205468652054616e676c6520697320746865206669727374206469737472696275746564206c656467657220746f2061636869657665207363616c6162696c6974792c206e6f20666565207472616e73616374696f6e732c",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "0000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "4566505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  },
  {
    hash: "7766505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "206461746120696e7465677269747920616e64207472616e736d697373696f6e2061732077656c6c206173207175616e74756d2d636f6d707574696e672070726f74656374696f6e2e20436f6e747261727920746f20746f646179277320426c6f636b636861696e732c20636f6e73656e737573206973206e6f2d6c6f6e676572206465636f75706c65642062757420696e737465616420616e20696e7472696e7369632070617274206f66207468652073797374656d2c206c656164696e6720746f206120636f6d706c6574656c7920646563656e7472616c697a656420616e642073656c662d726567756c6174696e6720706565722d746f2d70656572206e6574776f726b2e20416c6c20494f544127732077686963682077696c6c20657665722065786973742068617665206265656e20637265617465642077697468207468652067656e65736973207472616e73616374696f6e2e2054686973206d65616e7320746861742074686520746f74616c20737570706c79206f6620494f544127732077696c6c20616c776179732073746179207468652073616d6520616e6420796f752063616e6e6f74206d696e6520494f544127732e205468657265666f7265206b65657020696e206d696e642c20696620796f7520646f2050726f6f66206f6620576f726b20696e20494f544120796f7520617265206e6f742067656e65726174696e67206e657720494f544120746f6b656e732c20796f752772652073696d706c7920766572696679696e67206f74686572207472616e73616374696f6e732e277d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "0000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "7006505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  }
];

export const parsedJSONOfMultipleMessageFragments: string =
  "{'message': 'IOTA is a revolutionary new transactional settlement and data transfer layer for the Internet of Things. It's based on a new distributed ledger, the Tangle, which overcomes the inefficiencies of current Blockchain designs and introduces a new way of reaching consensus in a decentralized peer-to-peer system. For the first time ever, through IOTA people can transfer money without any fees. This means that even infinitesimally small nanopayments can be made through IOTA. IOTA is the missing puzzle piece for the Machine Economy to fully emerge and reach its desired potential. We envision IOTA to be the public, permissionless backbone for the Internet of Things that enables true interoperability between all devices. Tangle: A directed acyclic graph (DAG) as a distributed ledger which stores all transaction data of the IOTA network. It is a Blockchain without the blocks and the chain (so is it really a Blockchain?). The Tangle is the first distributed ledger to achieve scalability, no fee transactions, data integrity and transmission as well as quantum-computing protection. Contrary to today's Blockchains, consensus is no-longer decoupled but instead an intrinsic part of the system, leading to a completely decentralized and self-regulating peer-to-peer network. All IOTA's which will ever exist have been created with the genesis transaction. This means that the total supply of IOTA's will always stay the same and you cannot mine IOTA's. Therefore keep in mind, if you do Proof of Work in IOTA you are not generating new IOTA tokens, you're simply verifying other transactions.'}";

export const bundleWithInvalidJSON: Transaction[] = [
  {
    hash: "7766505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "2aa461746120696e7465677269747920616e64207472616e736d697373696f6e2061732077656c6c206173207175616e74756d2d636f6d707574696e672070726f74656374696f6e2e20436f6e747261727920746f20746f646179277320426c6f636b636861696e732c20636f6e73656e737573206973206e6f2d6c6f6e676572206465636f75706c65642062757420696e737465616420616e20696e7472696e7369632070617274206f66207468652073797374656d2c206c656164696e6720746f206120636f6d706c6574656c7920646563656e7472616c697a656420616e642073656c662d726567756c6174696e6720706565722d746f2d70656572206e6574776f726b2e20416c6c20494f544127732077686963682077696c6c20657665722065786973742068617665206265656e20637265617465642077697468207468652067656e65736973207472616e73616374696f6e2e2054686973206d65616e7320746861742074686520746f74616c20737570706c79206f6620494f544127732077696c6c20616c776179732073746179207468652073616d6520616e6420796f752063616e6e6f74206d696e6520494f544127732e205468657265666f7265206b65657020696e206d696e642c20696620796f7520646f2050726f6f66206f6620576f726b20696e20494f544120796f7520617265206e6f742067656e65726174696e67206e657720494f544120746f6b656e732c20796f752772652073696d706c7920766572696679696e67206f74686572207472616e73616374696f6e732e277d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "0000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "7775505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  },
  {
    hash: "8885505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "206461746120696e7465677269747920616e64207472616e736d697373696f6e2061732077656c6c206173207175616e74756d2d636f6d707574696e672070726f74656374696f6e2e20436f6e747261727920746f20746f646179277320426c6f636b636861696e732c20636f6e73656e737573206973206e6f2d6c6f6e676572206465636f75706c65642062757420696e737465616420616e20696e7472696e7369632070617274206f66207468652073797374656d2c206c656164696e6720746f206120636f6d706c6574656c7920646563656e7472616c697a656420616e642073656c662d726567756c6174696e6720706565722d746f2d70656572206e6574776f726b2e20416c6c20494f544127732077686963682077696c6c20657665722065786973742068617665206265656e20637265617465642077697468207468652067656e65736973207472616e73616374696f6e2e2054686973206d65616e7320746861742074686520746f74616c20737570706c79206f6620494f544127732077696c6c20616c776179732073746179207468652073616d6520616e6420796f752063616e6e6f74206d696e6520494f544127732e205468657265666f7265206b65657020696e206d696e642c20696620796f7520646f2050726f6f66206f6620576f726b20696e20494f544120796f7520617265206e6f742067656e65726174696e67206e657720494f544120746f6b656e732c20796f752772652073696d706c7920766572696679696e67206f74686572207472616e73616374696f6e732e277d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address:
      "03f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db",
    value: 0,
    obsoleteTag: "4249475445535400",
    tag: "0000000000000000",
    timestamp: 1482522289,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "8855505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    trunkTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    branchTransaction:
      "0000000000000000000000000000000000000000000000000000000000000000",
    attachmentTimestamp: -1737679689424,
    attachmentTimestampLowerBound: -282646045775,
    attachmentTimestampUpperBound: 2918881518838,
    nonce: "0000000000000000"
  }
];

export interface TransactionWithPersistence extends Transaction {
  persistence: boolean;
}

export const transfers: TransactionWithPersistence[][] = [
  [
    {
      address:
        "000000000000000000000000000000000000000000000000000000000000000000",
      attachmentTimestamp: 0,
      attachmentTimestampLowerBound: 0,
      attachmentTimestampUpperBound: 0,
      branchTransaction:
        "0000000000000000000000000000000000000000000000000000000000000000",
      bundle:
        "0000000000000000000000000000000000000000000000000000000000000000",
      currentIndex: 0,
      hash: "a".repeat(2 * 32),
      lastIndex: 0,
      nonce: "0000000000000000",
      obsoleteTag: "0000000000000000",
      persistence: true,
      signatureMessageFragment:
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      tag: "0000000000000000",
      timestamp: 0,
      trunkTransaction:
        "0000000000000000000000000000000000000000000000000000000000000000",
      value: 0
    }
  ],
  [
    {
      address:
        "000000000000000000000000000000000000000000000000000000000000000000",
      attachmentTimestamp: 0,
      attachmentTimestampLowerBound: 0,
      attachmentTimestampUpperBound: 0,
      branchTransaction:
        "0000000000000000000000000000000000000000000000000000000000000000",
      bundle:
        "0000000000000000000000000000000000000000000000000000000000000000",
      currentIndex: 0,
      hash: "b".repeat(2 * 32),
      lastIndex: 0,
      nonce: "0000000000000000",
      obsoleteTag: "0000000000000000",
      persistence: false,
      signatureMessageFragment:
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      tag: "0000000000000000",
      timestamp: 0,
      trunkTransaction:
        "0000000000000000000000000000000000000000000000000000000000000000",
      value: 0
    }
  ]
];

export const bundleHBytes: HBytes[] = [
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce8000000000000000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a61ef180740e9e3853b15a3e912601a36d0d88ddd460fe980d9f957734981ed0f2222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc000000000000000aaaa000000000000d45ce8000000000080000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a7f206fd91c81ab63cd3a40f73011ae34bc7a7b0dae91c95d2ef4b6380365f9eb2222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  "a0434a345ffcba934a878ae59c524053467272645f3c00f8ff9721f2267c7c0d19affd4a8b2264d174ad068be47f6e21cebfd86edad2afbe8ff14690a98ca9fd03a98d40d7ca5da6198ce7d02e1454a924fcecae2d5d0feb7ddfeffa8e30d1bc133fffffffffffffff0000000000000000d45ce8000000000040000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a32285a6924bf55e68ecf2d59e92d79f966ae8b59f1b8c012c814fe6928a84cbe2222505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "7ade88b7c9fd8ac5977ac48a63a477963862454606051c5a4b1c9ea5ae6cb31a25511a0084f67602f1b34f7d681fffbe78778a32e28a506acc234daa57327849037b00e3c9524817b49df39ada58c54c2c1d3eb937e365eaeee36207ee2be1b99adfffffffffffffff0000000000000000d45ce80000000000c0000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9adc8cc85a0a8d5af48748c34a64e9fa7718767da5d9ff224bf07b3714b6cae6942222505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031568f8a27e31eae4ad99a1ec55d72d1e23be79df8cfc143c7fe6b23dc98521b780000000000000000000000000000000d45ce8000000000020000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a2222505a524546494757484d4d3959475342535a425542544b56554d4e4778965bc6505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000"

  // "4d494e45494f54412e434f4d204d414e55414c205041594f5554000000000000000000000000000000000000000000000000000000000000000000000000000003f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596dbd3e0000000000000aaaabbbbccccdddd9ef55d5a000000000000000000000000c0000000000000006aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb4d46505a524546494757484d4d3959475342535a425542544b56554d4e4778962222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaabbbb00000000f4d47c9646800000000000000000000030000000000000000123456789abcdef",
  // "abcdef123454223423423abcdabcdef123454223423423abcdabcdef12345422abcdef123454223423423abcdabcdef123454223423423abcdabcdef123454220270af6513000abc87fbb1cb413d27bb06826461b1968f644ab9224b28f89b044fa39cb9ffffffffffaaaabbbbccccdddd9ef55d5a000000008000000000000000c0000000000000006aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb4446505a524546494757484d4d3959475342535a425542544b56554d4e4778962222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaabbbb0000000020bbbc9646800000000000000000000030000000000000001123456789abcdef",
  // "11111f123454223423423abcdabcdef123454223423423abcdabcdef12345422abcdef123454223423423abcdabcdef123454223423423abcdabcdef123454220270af6513000abc87fbb1cb413d27bb06826461b1968f644ab9224b28f89b044f0000000000000000aaaabbbbccccdddd9ef55d5a000000004000000000000000c0000000000000006aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb222505a524546494757484d4d3959475342535a425542544b556554d4e4778962222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaabbbb00000000d46bbc9646800000000000000000000030000000000000007123456789abcdef",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596dbf67d460000000000aaaabbbbccccdddd9ef55d5a00000000c000000000000000c0000000000000006aa7b335fc1b1c2d2ccbfe5206d8d41fe04b24e4eee9092f636b3650a3b9a3fb2222505a524546494757484d4d3959475342535a425542544b56554d4e4778965bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaabbbb0000000053d3bc964680000000000000000000003000000000000000823456789abcdefa"
];

export const bundleWithZeroValueHBytes = [
  "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f549072c534a49f125cd9229eab76748478158ee7097c6a8dcdd3a84000596db000000000000000043453900000000003e9bad5a0000000000000000000000000000000000000000bef7b2d83933bcdd143e46693554315a26ad4b70852ce1438bf6341ee7976a2da6c6505a524546494757484d4d3959475342535a425542544b56554d4e4778969bc6505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000005ba99a6a468000000000000000000000bbfdc13deec00000adef324300000000"
];
