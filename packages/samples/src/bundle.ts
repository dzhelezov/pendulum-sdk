import { HBytes, Transaction } from "../../types";

export const bundle: Transaction[] = [
  {
    hash: "309af306ac77d7bcfdb5e0410f67a3d37498d6322ada9511735cd1c5965b3ede",
    signatureMessageFragment:
      "abcd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    value: 3,
    obsoleteTag:
      "aaaa000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1522219,
    currentIndex: 0,
    lastIndex: 3,
    bundle: "5a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14",
    trunkTransaction:
      "a7d83a3461c9bf05398510205399b9011a40c96b980cfc58b924067762889a1f",
    branchTransaction:
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
    tag: "aaaa000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "a7d83a3461c9bf05398510205399b9011a40c96b980cfc58b924067762889a1f",
    signatureMessageFragment:
      "f02e3b68c2e45dc528641e2f0702281dd958441c8770241f0aeb1fd0c572d2a2cf69b15c13ec0c73bdb4889c0f9a1bd088d4f65816f6c5a14f4f0e73b84903823e5b0a6fcd1edeb314de185f347c22412e528687a2272ee17bb84cc9f401988c225a33bab525f95a8f9c052f029fe66a9c77ebd0cb754043942779be505e34c88201746477f330c3bc15051f0c63099c9a00e44de420029b21d060bcf314ab204c47e1108209aedaaafd0268e6036b41da84a5ff5da3f63ca11c7910d114f2894bb526a5587708c9b074b861e5be77cdca4bf6a416af5f0d1f77ee3af106a55be4a47b31a373d995658429ca48fa5e6fe243b54251414d6193f4524f391928020dee56ae4233b229be82dcd331ee13ed4af05ed8e381062c0d9dcbb120f1d7a8bf624189c561e50764877f1dabd7ad8b8b9da5cd3a29c6022aa4d69db4c5efcfc7f9f40f1c24173cdaee0e3a7b35a584f926372900e4e7cd716556c69462c54b64aeca1335fe4f423310fb04bf6b3db4c68b37ba9cdff9be8b7a2ce04411801a3e3dff43f012c05968cbb07d88e694debb758ad4245b7230ae97d795f6f11d616b28c58b59cb6f7973fe9dcd561ef693872dcf2e73acd4b2af7ae7bd33f397cef146b2ab2dcd78a69b26e50e1330e7186213fe9461ecd17268fc0e1eee5ba9a0225a33bab525f95a8f9c052f029fe66a9c77ebd0cb754043942779be505e34c8",
    address: "ed7ddda54ba1666c2b760d8d397b88eaa76efb361e4707cd70073234248439f9",
    value: -4,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1522219,
    currentIndex: 1,
    lastIndex: 3,
    bundle: "5a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14",
    trunkTransaction:
      "b98672c9f8ac5578f3a99f0e0b34908ae8663e3069cfc3fc869da947b03159e3",
    branchTransaction:
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "b98672c9f8ac5578f3a99f0e0b34908ae8663e3069cfc3fc869da947b03159e3",
    signatureMessageFragment:
      "0611a373c3834402c40e18222d6b3476be52fb01af8d55729e3a46944f18064fb358085d6be7307a7f4f5eaf2e0b3da3144a37db01d9efecfaaf4881adbf901cc68c6251e6eada192ce76e6685d98ee789f269bc27486eb38627e36945e0b16787d31468dd385525444083242027402506740817ea31dbd7e37a8d4c2022eea1b381a9a908bd14d4614bc7cfd34b2e69f2478afe4370e4210f2c16cf04bebc6f2f2e73bd711efcdfd0c7db4744e2154cbf685c63f8630cb5d0001bc5546ad89fdcfff12e4a3c3e411df2e592f2ae9f140fafc6062c23d460a11743c14b75d43896d467ec5e31f735a26ac907c2263af1a88024fd66a894cbebc5c8ef781177e378dbe906f9db2487f72be0895c6aa0d901344649ae33101beacf06458547df28e3f6c6d8269cef1fdf8eb89645e702cd58c79a2a7b1291595439db2120c6d4e76dd7d12536602c765220ba2fa4f73a160910a8f667d60cb5968c4a9e7d806f4fad884122949f602d78544b1d8cc3e04a30162ba9928e57bf594b2dac0410c0b465bae0063c71565418acf5a2accb84dd0a84bc4873263cb8d2ec884b290d2c05ac58b391e258bc9e46a726f121881b5571159e586ec2c3d8b615bc242b43b3cd34da93dfbebc8ce6979df52097a0f2c10e6322f81c8d06ce7b128d2b97bb97c90bfad8a1d22084df410ab03360ef2390212ea4c04a15df42c5a49f7f0599fe6f",
    address: "ed7ddda54ba1666c2b760d8d397b88eaa76efb361e4707cd70073234248439f9",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1522219,
    currentIndex: 2,
    lastIndex: 3,
    bundle: "5a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14",
    trunkTransaction:
      "8b9de3fe8346293c7adfc4a6122b69853521b744e3f94846e81a9b5592b07e8c",
    branchTransaction:
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  },
  {
    hash: "8b9de3fe8346293c7adfc4a6122b69853521b744e3f94846e81a9b5592b07e8c",
    signatureMessageFragment:
      "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "e4fcd0a8c5971994263664e30f20b34878024d578ae8872bc746dd9230fc232f",
    value: 1,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1522219,
    currentIndex: 3,
    lastIndex: 3,
    bundle: "5a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14",
    trunkTransaction:
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
    branchTransaction:
      "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    tag: "0000000000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  }
];

export const bundleWithValidSignature: Transaction[] = [
  {
    hash: "44be93c692f4edd9744e657da382c799ddf2140eb7457447d59ba6d4206b2b1f",
    signatureMessageFragment:
      "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "064c7c7652a56055c3af2c620ee3a9daf4be3ad6cebaa8d5dd9ed8a8d7509ea1",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550486592,
    currentIndex: 0,
    lastIndex: 1,
    bundle: "7998cf44ab42421d943e3479432a4714a6724d272e02435eedcd97d2020eb87e",
    trunkTransaction:
      "0000d5310dcf2a481edcc64e68f89de5dacfdc8e9458e473b0b90fa49517a2e7",
    branchTransaction:
      "0000ecbc7bdd1645c6e42eab23df5bff3a97dc4e637582e91633f8b7a9a8fa4b",
    tag: "0000000000000000",
    attachmentTimestamp: 7784414783830229000,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: -144115188075855870,
    nonce: "f578d938c98f9d4a"
  },
  {
    hash: "51d77ed0bb7f5ef6494f8ad7e9376a2d8be30e5602bf1a569e0eb43439d3ca49",
    signatureMessageFragment:
      "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "16e092b38442a4887f510e15e58cefe024f212470df123a070c4db2f5ef4c6de",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550486592,
    currentIndex: 1,
    lastIndex: 1,
    bundle: "aeaa495525bb3de65ca0c50c4f76b864c0e9239b51706ea58636244325f540d3",
    trunkTransaction:
      "0000ecbc7bdd1645c6e42eab23df5bff3a97dc4e637582e91633f8b7a9a8fa4b",
    branchTransaction:
      "0000ecbc7bdd1645c6e42eab23df5bff3a97dc4e637582e91633f8b7a9a8fa4b",
    tag: "0000000000000000",
    attachmentTimestamp: 2403739129029329000,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: -144115188075855870,
    nonce: "22d0be51047d6b7a"
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
    hash: "93e7e3adab3d1b80b3a10627dd8f7d45b7006020cde7b64a07c14d8b980fc0b8",
    signatureMessageFragment:
      "6162636400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "064c7c7652a56055c3af2c620ee3a9daf4be3ad6cebaa8d5dd9ed8a8d7509ea1",
    value: 0,
    obsoleteTag:
      "abcd123000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550440839,
    currentIndex: 0,
    lastIndex: 0,
    bundle: "d506a9f0b1ce172458a205fb094d37f67213e72191706fd8772eef82d72cd9c2",
    trunkTransaction:
      "0000f7327a65c151d9051003de85710b57a88f92f4a901e89eb1c074a258d5d5",
    branchTransaction:
      "0000f7327a65c151d9051003de85710b57a88f92f4a901e89eb1c074a258d5d5",
    tag: "abcd123000000000",
    attachmentTimestamp: 0,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: 0,
    nonce: "0000000000000000"
  }
];

export const bundleWithJSON: Transaction[] = [
  {
    hash: "54735661b5f6616fe6a68d3ff392f68314f8df1d289a97c8c9979a6ea859b250",
    signatureMessageFragment:
      "7b20276127203a202762272c202763273a202764272c202765273a20272361736466643f2427207d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "064c7c7652a56055c3af2c620ee3a9daf4be3ad6cebaa8d5dd9ed8a8d7509ea1",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550486654,
    currentIndex: 0,
    lastIndex: 1,
    bundle: "d07baeb4c882c1dbcea661a9282bb149b2b2133fde459a953553917fe3dba7fd",
    trunkTransaction:
      "0000a603a2d51395379a0c9926519af90c56adc162c01f5fef475f77a187af50",
    branchTransaction:
      "00004768680f272de72031806af97465d245be8c996dd8eac0bcbbd1097341c0",
    tag: "0000000000000000",
    attachmentTimestamp: 8427127708776923000,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: -144115188075855870,
    nonce: "f6206d4f196421ad"
  }
];

export const parsedJSON: string = "{ 'a' : 'b', 'c': 'd', 'e': '#asdfd?$' }";

export const bundleWithEmptyJSON: Transaction[] = [
  {
    hash: "9bc6505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "7b7d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f",
    value: 0,
    obsoleteTag:
      "4249475445535400000000000000000000000000000000000000000000000000",
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
    hash: "54735661b5f6616fe6a68d3ff392f68314f8df1d289a97c8c9979a6ea859b250",
    signatureMessageFragment:
      "7b276d657373616765273a2027494f54412069732061207265766f6c7574696f6e617279206e6577207472616e73616374696f6e616c20736574746c656d656e7420616e642064617461207472616e73666572206c6179657220666f722074686520496e7465726e6574206f66205468696e67732e2049742773206261736564206f6e2061206e6577206469737472696275746564206c65646765722c207468652054616e676c652c207768696368206f766572636f6d65732074686520696e656666696369656e63696573206f662063757272656e7420426c6f636b636861696e2064657369676e7320616e6420696e74726f64756365732061206e657720776179206f66207265616368696e6720636f6e73656e73757320696e206120646563656e7472616c697a656420706565722d746f2d706565722073797374656d2e20466f72207468652066697273742074696d6520657665722c207468726f75676820494f54412070656f706c652063616e207472616e73666572206d6f6e657920776974686f757420616e7920666565732e20494f544120697320746865206d697373696e672070757a7a6c6520706965636520666f7220746865204d616368696e652045636f6e6f6d7920746f2066756c6c7920656d6572676520616e6420726561636820697473206465736972656420706f74656e7469616c2e205765",
    address: "064c7c7652a56055c3af2c620ee3a9daf4be3ad6cebaa8d5dd9ed8a8d7509ea1",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550486654,
    currentIndex: 0,
    lastIndex: 1,
    bundle: "d07baeb4c882c1dbcea661a9282bb149b2b2133fde459a953553917fe3dba7fd",
    trunkTransaction:
      "0000a603a2d51395379a0c9926519af90c56adc162c01f5fef475f77a187af50",
    branchTransaction:
      "00004768680f272de72031806af97465d245be8c996dd8eac0bcbbd1097341c0",
    tag: "0000000000000000",
    attachmentTimestamp: 8427127708776923000,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: -144115188075855870,
    nonce: "f6206d4f196421ad"
  },
  {
    hash: "2d18deae2305881cd2a60a8c494fa536572171f21eb041285318eb45a1d47a2a",
    signatureMessageFragment:
      "20656e766973696f6e20494f544120746f20626520746865207075626c69632c207065726d697373696f6e6c657373206261636b626f6e6520666f722074686520496e7465726e6574206f66205468696e6773207468617420656e61626c6573207472756520696e7465726f7065726162696c697479206265747765656e20616c6c20646576696365732e2054616e676c653a204120646972656374656420616379636c69632067726170682028444147292061732061206469737472696275746564206c65646765722077686963682073746f72657320616c6c207472616e73616374696f6e2064617461206f662074686520494f5441206e6574776f726b2e204974206973206120426c6f636b636861696e20776974686f75742074686520626c6f636b7320616e642074686520636861696e2028736f206973206974207265616c6c79206120426c6f636b636861696e3f292e205468652054616e676c6520697320746865206669727374206469737472696275746564206c656467657220746f2061636869657665207363616c6162696c6974792c206e6f20666565207472616e73616374696f6e73277d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "16e092b38442a4887f510e15e58cefe024f212470df123a070c4db2f5ef4c6de",
    value: 0,
    obsoleteTag:
      "0000000000000000000000000000000000000000000000000000000000000000",
    timestamp: 1550486654,
    currentIndex: 1,
    lastIndex: 1,
    bundle: "d07baeb4c882c1dbcea661a9282bb149b2b2133fde459a953553917fe3dba7fd",
    trunkTransaction:
      "00004768680f272de72031806af97465d245be8c996dd8eac0bcbbd1097341c0",
    branchTransaction:
      "00004768680f272de72031806af97465d245be8c996dd8eac0bcbbd1097341c0",
    tag: "0000000000000000",
    attachmentTimestamp: -399927560869249000,
    attachmentTimestampLowerBound: 0,
    attachmentTimestampUpperBound: -144115188075855870,
    nonce: "a126fcd5541a2b17"
  }
];

export const parsedJSONOfMultipleMessageFragments: string =
  "{'message': 'IOTA is a revolutionary new transactional settlement and data transfer layer for the Internet of Things. It's based on a new distributed ledger, the Tangle, which overcomes the inefficiencies of current Blockchain designs and introduces a new way of reaching consensus in a decentralized peer-to-peer system. For the first time ever, through IOTA people can transfer money without any fees. IOTA is the missing puzzle piece for the Machine Economy to fully emerge and reach its desired potential. We envision IOTA to be the public, permissionless backbone for the Internet of Things that enables true interoperability between all devices. Tangle: A directed acyclic graph (DAG) as a distributed ledger which stores all transaction data of the IOTA network. It is a Blockchain without the blocks and the chain (so is it really a Blockchain?). The Tangle is the first distributed ledger to achieve scalability, no fee transactions'}";
export const bundleWithInvalidJSON: Transaction[] = [
  {
    hash: "7766505a524546494757484d4d3959475342535a425542544b56554d4e477896",
    signatureMessageFragment:
      "7b276d657373616765273a2027494f54412069732061207265766f6c7574696f6e617279206e6577207472616e73616374696f6e616c20736574746c656d656e7420616e642064617461207472616e73666572206c6179657220666f722074686520496e7465726e6574206f66205468696e67732e2049742773206261736564206f6e2061206e6577206469737472696275746564206c65646765722c207468652054616e676c652c207768696368206f766572636f6d65732074686520696e656666696369656e63696573206f662063757272656e7420426c6f636b636861696e2064657369676e7320616e6420696e74726f64756365732061206e657720776179206f66207265616368696e6720636f6e73656e73757320696e206120646563656e7472616c697a656420706565722d746f2d706565722073797374656d2e20466f72207468652066697273742074696d6520657665722c207468726f75676820494f54412070656f706c652063616e207472616e73666572206d6f6e657920776974686f757420616e7920666565732e20494f544120697320746865206d697373696e672070757a7a6c6520706965636520666f7220746865204d616368696e652045636f6e6f6d7920746f2066756c6c7920656d6572676520616e6420726561636820697473206465736972656420706f74656e7469616c2e205765",
    address: "0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f",
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
      "20656e766973696f6e20494f544120746f20626520746865207075626c69632c207065726d697373696f6e6c657373206261636b626f6e6520666f722074686520496e7465726e6574206f66205468696e6773207468617420656e61626c6573207472756520696e7465726f7065726162696c697479206265747765656e20616c6c20646576696365732e2054616e676c653a204120646972656374656420616379636c69632067726170682028444147292061732061206469737472696275746564206c65646765722077686963682073746f72657320616c6c207472616e73616374696f6e2064617461206f662074686520494f5441206e6574776f726b2e204974206973206120426c6f636b636861696e20776974686f75742074686520626c6f636b7320616e642074686520636861696e2028736f206973206974207265616c6c79206120426c6f636b636861696e3f292e205468652054616e676c6520697320746865206669727374206469737472696275746564206c656467657220746f2061636869657665207363616c6162696c6974792c206e6f20666565207472616e73616374696f6e730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    address: "0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f",
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
        "0000000000000000000000000000000000000000000000000000000000000000",
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
      obsoleteTag:
        "0000000000000000000000000000000000000000000000000000000000000000",
      persistence: true,
      signatureMessageFragment:
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
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
        "0000000000000000000000000000000000000000000000000000000000000000",
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
      obsoleteTag:
        "0000000000000000000000000000000000000000000000000000000000000000",
      persistence: false,
      signatureMessageFragment:
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      tag: "0000000000000000",
      timestamp: 0,
      trunkTransaction:
        "0000000000000000000000000000000000000000000000000000000000000000",
      value: 0
    }
  ]
];

export const bundleHBytes: HBytes[] = [
  "abcd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000000000000000000000000000000000000000000000000000d45ce800000000000000000000000000c0000000000000005a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14a7d83a3461c9bf05398510205399b9011a40c96b980cfc58b924067762889a1fabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdaaaa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "f02e3b68c2e45dc528641e2f0702281dd958441c8770241f0aeb1fd0c572d2a2cf69b15c13ec0c73bdb4889c0f9a1bd088d4f65816f6c5a14f4f0e73b84903823e5b0a6fcd1edeb314de185f347c22412e528687a2272ee17bb84cc9f401988c225a33bab525f95a8f9c052f029fe66a9c77ebd0cb754043942779be505e34c88201746477f330c3bc15051f0c63099c9a00e44de420029b21d060bcf314ab204c47e1108209aedaaafd0268e6036b41da84a5ff5da3f63ca11c7910d114f2894bb526a5587708c9b074b861e5be77cdca4bf6a416af5f0d1f77ee3af106a55be4a47b31a373d995658429ca48fa5e6fe243b54251414d6193f4524f391928020dee56ae4233b229be82dcd331ee13ed4af05ed8e381062c0d9dcbb120f1d7a8bf624189c561e50764877f1dabd7ad8b8b9da5cd3a29c6022aa4d69db4c5efcfc7f9f40f1c24173cdaee0e3a7b35a584f926372900e4e7cd716556c69462c54b64aeca1335fe4f423310fb04bf6b3db4c68b37ba9cdff9be8b7a2ce04411801a3e3dff43f012c05968cbb07d88e694debb758ad4245b7230ae97d795f6f11d616b28c58b59cb6f7973fe9dcd561ef693872dcf2e73acd4b2af7ae7bd33f397cef146b2ab2dcd78a69b26e50e1330e7186213fe9461ecd17268fc0e1eee5ba9a0225a33bab525f95a8f9c052f029fe66a9c77ebd0cb754043942779be505e34c8ed7ddda54ba1666c2b760d8d397b88eaa76efb361e4707cd70073234248439f9dfffffffffffffff0000000000000000000000000000000000000000000000000000000000000000d45ce800000000008000000000000000c0000000000000005a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14b98672c9f8ac5578f3a99f0e0b34908ae8663e3069cfc3fc869da947b03159e3abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "0611a373c3834402c40e18222d6b3476be52fb01af8d55729e3a46944f18064fb358085d6be7307a7f4f5eaf2e0b3da3144a37db01d9efecfaaf4881adbf901cc68c6251e6eada192ce76e6685d98ee789f269bc27486eb38627e36945e0b16787d31468dd385525444083242027402506740817ea31dbd7e37a8d4c2022eea1b381a9a908bd14d4614bc7cfd34b2e69f2478afe4370e4210f2c16cf04bebc6f2f2e73bd711efcdfd0c7db4744e2154cbf685c63f8630cb5d0001bc5546ad89fdcfff12e4a3c3e411df2e592f2ae9f140fafc6062c23d460a11743c14b75d43896d467ec5e31f735a26ac907c2263af1a88024fd66a894cbebc5c8ef781177e378dbe906f9db2487f72be0895c6aa0d901344649ae33101beacf06458547df28e3f6c6d8269cef1fdf8eb89645e702cd58c79a2a7b1291595439db2120c6d4e76dd7d12536602c765220ba2fa4f73a160910a8f667d60cb5968c4a9e7d806f4fad884122949f602d78544b1d8cc3e04a30162ba9928e57bf594b2dac0410c0b465bae0063c71565418acf5a2accb84dd0a84bc4873263cb8d2ec884b290d2c05ac58b391e258bc9e46a726f121881b5571159e586ec2c3d8b615bc242b43b3cd34da93dfbebc8ce6979df52097a0f2c10e6322f81c8d06ce7b128d2b97bb97c90bfad8a1d22084df410ab03360ef2390212ea4c04a15df42c5a49f7f0599fe6fed7ddda54ba1666c2b760d8d397b88eaa76efb361e4707cd70073234248439f900000000000000000000000000000000000000000000000000000000000000000000000000000000d45ce800000000004000000000000000c0000000000000005a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a148b9de3fe8346293c7adfc4a6122b69853521b744e3f94846e81a9b5592b07e8cabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fcd0a8c5971994263664e30f20b34878024d578ae8872bc746dd9230fc232f80000000000000000000000000000000000000000000000000000000000000000000000000000000d45ce80000000000c000000000000000c0000000000000005a37e7d08f12bd5f45bfd13490762bdc590165ff9deb5047ecc6bd702bcd2a14abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
];

export const bundleWithZeroValueHBytes = [
  "6162636400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064c7c7652a56055c3af2c620ee3a9daf4be3ad6cebaa8d5dd9ed8a8d7509ea10000000000000000abcd123000000000000000000000000000000000000000000000000000000000e19b963a0000000000000000000000000000000000000000d506a9f0b1ce172458a205fb094d37f67213e72191706fd8772eef82d72cd9c20000f7327a65c151d9051003de85710b57a88f92f4a901e89eb1c074a258d5d50000f7327a65c151d9051003de85710b57a88f92f4a901e89eb1c074a258d5d5abcd1230000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
];
