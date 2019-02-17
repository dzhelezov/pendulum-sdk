// Configuration for transacting using Helix

// ENTER YOUR SEED VALUE
import { HBytes } from "../packages/types";

export const seed = `953c8169027a85415692cc05bd3a91f95c3be8e5c93c1d2b2e2c447b5ed082d2`;

// ENTER THE PROVIDER ADDRESS
export const provider = "https://helix:LW59AG75A84GSEES@hlxtest.net:14702";

// Depth or how far to go for tip selection entry point
export const depth = 3;

// Difficulty of Proof-of-Work required to attach transaction to tangle.
// Minimum value on mainnet & spamnet is `14`, `9` on devnet and other testnets.
export const minWeightMagnitude = 10;

export const firstTransactionHash =
  "0081705006577f469f15c695bd214ac9e68bfa4c57a32cf586fc6caaa3b5cf09";

export const bundleHBytes: HBytes[] = [
  "abcd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce800000000000000000000000000c0000000000000002820e278b5373271902ffd4d7879c91d96b51a2269a0c6a225414f65807c7e6eb3ad496039f59784091f30740aa8971d691ef05485c7dcf0c7f7eef0e7db828fabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdaaaa000000000000000000000000000000000000000000000000000000000000dd00000000000000",
  "d2601a4ed1642d6857a00ef58a9ec0f69d1583a77bec8b5aac73c764e1eba62c7a421e7bfd85ad6c7690f781e383b6ce5fb1a3f773abfd80c454ccdf52a57f4030741b819d1c1dafbb1874f042b3ed75f8f481a5d7f9aa9287f6f0e8a63ad698bdd436e261b22553e43bc1d3ddad25d515a1f6fc06ad9d22d4a3d82c4435e83cd88636d4ef429d31b085e0cb32f830b2c32ae26830858585626dc4d47fada8badd812888d25318fcd76977f912dff63d4156ca2cb2a7d719cc168d1bedf96fdb058f75cb2e00a819ac9d8c14a62e4f233443fe242d1b320677fb1d59d052e8973e9e087962a4de2ea05128c71c30a15cd47684edd30ae660fc3ce441f144a7c0060c206871901fa8c37dc29092829c985251d9925435d78c7f7f4b0f10f196246b72bee69808790f2e611f97e119815b0f6e160740e12ab54dc6984d22940128e3382a5948b06254a098a4b967cd80b149c0a66d6cc7b5ba6b0f38e70afaec77aacd44b75bac248f54a624c089aac3cf93d0b7d10363d9c5c6193e981f2ec441baedb737df6bf9b67ba1fddb989efe25c7713e7f0894367bd03592311df3a527baedb737df6bf9b67ba1fddb989efe25c7713e7f0894367bd03592311df3a52791f5bd949ab7635dd581e50806fa5122572e2c48006bd7c4f2cce20d57fffa6b50d253a30e651b8f104fee379e9a3bd4222d28c44b01af14b8e180584480e31d0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1fdfffffffffffffff0000000000000000d45ce800000000008000000000000000c0000000000000002820e278b5373271902ffd4d7879c91d96b51a2269a0c6a225414f65807c7e6e9fb445ca4b66c1b13ef97287b60529e28e66523d985b3fd480a9fe6a592a4907abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd0000000000000000000000000000000000000000000000000000000000000000cc00000000000000",
  "358230482ddc1d21b4a45006ccc717520a14835315e0027466939e5f32425d1533ecc8bb60c1ea67e3fa9be98aefbc2b33d83a4edfb0252daee4047f3eb45bb83dd0b18c34eb32577820e8babb09d4f5b94309abe9b539196ef6a96b4fe591ffe11c913a80db4602d995a91dad21b61515043484079b8ea0505d78a4f3b046fd88a8df007a6177c5fe420fbbdd4b36644ea85e6f55872633dca4084f4990434a29c0095d26981141cd1fd1664cf275821ba063f709a32a325bcc61f7c18835015e3d9ff0887a4948660d37e6735b146f8376941283509192f0cbc8d41acbf96f29c0095d26981141cd1fd1664cf275821ba063f709a32a325bcc61f7c18835014cee86ffaaac32e1b9a66b1d2830154402ffbd51cc4576f294a7a4178e1243d853cfd2b1d5700e9f041984e691777456ccfe571668763ff90255c3ddef8acd7d572a4e1b79c6f5ee6a69beb3ff7933e9c00b3359717e754418728323f628c374b30c9ef74cfcf05979c79bf3cdfb50ea8f4329e828ec44c8d8aca8edc18ff2c3023e23a0e4fc2fba1f4e03e543bb6bbf6d8777addc5df382c4cac057c36368eefc605ad5ea2245c74b0b987caa6e539c7f5ace8aa115bd8ecd743b862b03b5473d6d6c80fbca4b33b872301502dccc05ffe998da3d0cdf73a39ae4855e1ed9f997142793698d51eb67f896a6808ff8d579f4fa6f551289a87bbb4b90e6be532a0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f00000000000000000000000000000000d45ce800000000004000000000000000c0000000000000002820e278b5373271902ffd4d7879c91d96b51a2269a0c6a225414f65807c7e6e0839a6b146bdab915485484cd43cf5ae0af864e370efa717594229a81b420f62abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd0000000000000000000000000000000000000000000000000000000000000000bb00000000000000",
  "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00efe1d215094cac547a8a3126f107ace52c8aa15688f8b2eacfa75eff9a23880000000000000000000000000000000d45ce80000000000c000000000000000c0000000000000002820e278b5373271902ffd4d7879c91d96b51a2269a0c6a225414f65807c7e6eabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd0000000000000000000000000000000000000000000000000000000000000000aa00000000000000"

  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce8000000000000000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f08300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc000000000000000aaaa000000000000d45ce8000000000080000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f08300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "9cd77ebcfa81125eed83cc096a17102e3e5003d0b72a9ea8dfa0823051e30fd3d3934fd6927f8fd1e72fb657339293c40f3df63b898fcd52948e2fa4f49076419f9f1190166e5b60070f03bafe88197ba9f2c22e7fda5730e057bc0026ea43d2165fd0b4696418776449029a1119cbc02de067d56156452c4c9c8f768f201c50add07c87521fbc713b58df534709b9ef8c9656f1f8661755c00f857441032de21ae325ead30fa7939d6294791cd20aee9fa03f17ec4b7356a68af70dd7136f3f3203092c0cea90b3ce791f5dbf8de7cde795d5a0851d48aa9c2b77eb5bf351d7239e99b8a9e580e451fd7d69e77806a812f81b15aa47b2d551a56a18d12d76a5817205a414ba752c9b2ce00975d529165785e65206e9bacae87fb03f6a8960b969e5772f159b27ad46ef2dce21e6c7a55569c1dad496505891a1580bfbf4946305f9e6201ce81dbe77bbe4597e59ad44950f50cd2b25b73fe278cebac0ee37e1b1b785900fa243ec599d0c97f65f0982b60402a92d97242a747fba14162bff8c8afd75bd101941f1a39c2645b02d265bf2f5c06d1e265f74cde2125ad26f8127be8a108a057c613b0c6edbb2bea576920fa2056e9bb9d16672688ddc52f43f93be8a108a057c613b0c6edbb2bea576920fa2056e9bb9d16672688ddc52f43f9329c0095d26981141cd1fd1664cf275821ba063f709a32a325bcc61f7c18835010ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f3fffffffffffffff0000000000000000d45ce8000000000040000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f0830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "d3c25fb52c0e12b592a7a4e33f1c6f675377593c075a66fe34b7ccc1716c16e4baedb737df6bf9b67ba1fddb989efe25c7713e7f0894367bd03592311df3a52730b454dcd32d95b636f20dbc781b49414df3d2fd85543f63cdec8568944a0a37c9465b556b82b7c4c456599ee4a07665c5a953dd91e55eeb1a4256e6c118c9e592afe0c00aa2f32360f135e14a8ced4578f7c6e46393aa42c4a7d671a232aeff05f9e6201ce81dbe77bbe4597e59ad44950f50cd2b25b73fe278cebac0ee37e1dfb6c33b5dd0305310b99e732ecc156b4dd03bb7e70132f10c251d79d81b818cd88636d4ef429d31b085e0cb32f830b2c32ae26830858585626dc4d47fada8babc29cfc2d67c27ae1794a057e8c5f3118c819e7726ffeaec061b2549db16c8ba41ae3f234c945a05b3ab553e1bf0648d75906924dca954f41cb4b3bb8c846d354219a9d5fdb3ccd4c67b51876c418a9d13af514a12aff6aaf4a28ed0f0e5fe4f09866106c9ee26e2803623c17b662d1c5e050c6eb8beeb1cc9c75f5a35c8dc99bc29cfc2d67c27ae1794a057e8c5f3118c819e7726ffeaec061b2549db16c8ba151c68e534033f4942b0c0fe431f76daa61dc4b0c29ed8d84825a6a9325f96a4d9dfa6fa56acc453a16d302cfc7d0d22c458b041d64d5ffbe562ac42423cfcd3023e23a0e4fc2fba1f4e03e543bb6bbf6d8777addc5df382c4cac057c36368ee0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f00000000000000000000000000000000d45ce80000000000c0000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f0830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "72dfd81d69815744bc491b211e73446d6b3bfb6f86b7add60f2d656beca4a52059b86688b164cb26ed1c458a35d58cde1c9570e95c1c6d9465c033ea2202045b49b9014d15f0f2d4559b7caca8901b27ce352e4d289d06254a3afad382c1bff62808f837aa6437da0d9f2f7019e4a2f11a2654b7e588e7ba911c4e6d4a67d2409dfad8d75ee7029fd8dc015424b55c2516e55324259eb542b722e1cd305c01cc3fb84a0ab6a241aefd100ffe761efbe8e856c8c02b4d47037ea45d4ae00fa86f39791418c09702a55d365de6f32c21fffd84dae0b97a3b8b01d73960dfe2fd5acbdf9b11a40d43befaec8bb678ed441a7a8914a85ecfcf4dc9fdd27c3eee68a55e28d9bb1a1de14e9f3152c3ddc0db24a92801c9dea275a548ede2abf915ce72a17f1ded0d3cf0af177acc6d49bd7d4fb19e94ca851130a058c816d1cfc87d0a475f70e5341b006441e6ea4e77b7fc2b868b5592f39668bc65efdbe25714b1debec1e9f249a9abd57fa2c2586a956eb7c254e8aa98ba2ec5d6d3321170688486496b3a8bcdbf56df8f4ad7e27df38e9c7075a71b5fb79cb752469e99689dc0ff16fc084932a9a8d35ecb6446d17d656f5ef0d06ffe0732392338b12f3477fe0516fc084932a9a8d35ecb6446d17d656f5ef0d06ffe0732392338b12f3477fe050c07534fef8434ef67731493553aa93757112a410b50df1e3206928d883c14388b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc7dfffffffffffffff0000000000000000d45ce8000000000020000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f0830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "c53872558dbebe7948cc2b3c262edaeaa7682d569aca031be21e41e8680f672675d2ee70f67a067e78b96c29b6ec18444de09b45eeebe42b36e7da3afc0eceb874a15d50dbd4ab5f3f403139c2e640b9e79624fa697d95bb7382c4340b2ddec36aa746e969a42a395b0cbbe1b104674e1765e0836d1ec8bc21fd69912e0dad4436542d33af72aad6b0c0dad6c1cb4fefe550ea48f4b7bdbb35c147e2a7414c55475f70e5341b006441e6ea4e77b7fc2b868b5592f39668bc65efdbe25714b1de3fc96a130fa81e1132bd04160b418819280ba5ae0b356bca269d9aaaca733121a10e6354b84457594793bfc62871eeebd5fd33f1deb65b6285e38fed6aae95b49296a60748abfe3cb7e93695d9cd108a466e0242ae3443684a20afc01f6884baa1a799d9f48d89cb09f233ff839782e2c07389810b2f480609d2d49de8028f81eb8ceaf05e52837680003670adee246766dfb4e3a29d50b8550bfa85cde00a23fa6ef6ef3c1986deea8017a0697a3cf3405653e121d5a196798c3235c03a91779296a60748abfe3cb7e93695d9cd108a466e0242ae3443684a20afc01f6884ba9ce7cc4872539ecf6c7cd1dea40d554a5fcd48b3af6a724f22a53840a3c12e4f0871d5ca9e3039efcf9d8a5da2808969371c87582967c3fb89b55cc14f8ad48f5a7d6423ea6a9760acd044edc967571c51d6278c21feb4e979525c3070db86c28b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc700000000000000000000000000000000d45ce80000000000a0000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f0830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00efe1d215094cac547a8a3126f107ace52c8aa15688f8b2eacfa75eff9a23880000000000000000000000000000000d45ce8000000000060000000000000006000000000000000518febf5b79562bfbc0c64ba18c2c39a4a7dd48cb56f9fc89b231c7e9f61f0830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce800000000000000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc000000000000000aaaa000000000000d45ce800000000008000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "d70b2f818b4124aa8140c8cb73bd65f6dadab5123e00cdc03b6d276b61cf605b2d2bae4b3fd3d05df0d717db7a0df7895265c2a0f92f0310dc64252520e172a388a8df007a6177c5fe420fbbdd4b36644ea85e6f55872633dca4084f4990434a151c68e534033f4942b0c0fe431f76daa61dc4b0c29ed8d84825a6a9325f96a458e767ccc393eb2f1fe7765ec915c9b4cb36094c9f4d96011ec6ff6b73e5ff1f0bc43e75fd96f02f07f2e9c9d5221b8aa0e328f699806eb0e7f813bfabf1f6c220b58bff325179b99cf52743358a463b7b4ef0bb57af0a4ce4ef0d61cbdd5d7351a77b94e491aa45d3b128d4562346f94c7324c6727a31ee0316aedcf34e97af5caf930e657e6cb7ceb30938b8392ae2f74d47e12bc5c68444c1ab8f4adeda20de79941d977a507ecac7edb750567d008ba87ba4e9ea326a78c4f79c2a549293765a745a39bab75f1a6428ac58d6822f30f4f687ce23b5cfd2ac427692294328060c206871901fa8c37dc29092829c985251d9925435d78c7f7f4b0f10f196249528c878772d018a5ce8ec90c48adff4daaa48c271ca6a041af7e1a7980a34f488a8df007a6177c5fe420fbbdd4b36644ea85e6f55872633dca4084f4990434a641148e67dd838f724d2fcea3c5825ff30d0829bee9b634e9b1f2b2077642dcac0cb0d7b5160d97a0d4d8a5cbbb512b05a910ea3d185ebdc9a12083f925e0e420ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f3fffffffffffffff0000000000000000d45ce800000000004000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "598179f5122ec7fb321cb1740523e15eddb38154867c2694ff501e6d324f2501af829bf894c2ccc55e2b9dab5aaec7d64cfc39578d346de86c7ca61b1a250c4e58e15ba133acdfdf9f7275c4f1f189548ceacc08023a9e3c91fb48cf588f0ba1268e228798161b274eb375d639bfad07e5fe4214d41ef9625f02e79eb88dd7c80ea675660e3f136610a4f999a33c6d47de246fb10ec94f444d3725f2cbcfaca9178cbfafa4f5d81033601778f5f05b472d22ddcc278db8e1a9429546b71598d39f9f1190166e5b60070f03bafe88197ba9f2c22e7fda5730e057bc0026ea43d29ab8eb723438e69823062a44be353334502e79d460449e46b759c36abd568c62ccf9634326aff8451a88a155be644d25bde154d7b8faf05cf5076f014095a290c61c6add60c8b94b14b21dc8850b2701f4cf3ff141a56d2958bf0feb88bc6f09e25b8c46c1b1695837fcb0eaee3ec8dbd304bfa43725a496dedb75e5af74bc40c0cb0d7b5160d97a0d4d8a5cbbb512b05a910ea3d185ebdc9a12083f925e0e422da5582cab417a79c9177669b036ddadd3ae241c87e699614d6f5091fadc2b285e13fddafdee9753f633a70c313a465348e59aaef69a356e3ce39a4022dca544fdfab48207aa419b6dc2ba7b588ad62112f11fecccb9e8029c4c9ffb4791435830741b819d1c1dafbb1874f042b3ed75f8f481a5d7f9aa9287f6f0e8a63ad6980ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f00000000000000000000000000000000d45ce80000000000c000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "1a01b5e3eadbaf2f2bbe76fcf12fcca51db02fdc6ad4ec3893c7f827188d884abfa4ed4450ec4ce366602d70f95eb8cc3ca846442ea59703d12f20f7552a407c805622b93cce3b81a24365f4318f7a03095f7a3140e6a126e06160531551d3529ce7cc4872539ecf6c7cd1dea40d554a5fcd48b3af6a724f22a53840a3c12e4f5b4652b1f8a67dae7c659c1f3f9e5154be3d89f96643ec17f43adf21a6c230a9b4a010e7f2d95dec3ee9444ca3cf772c03a6a3175d618055b4626695d79c0717f67452d4a401ef827826c6d3e5f0b38ead336806cbbc26ea0259e68f3f5cb69164913cce6812bb54cb6f204aff1fe7aff08cd494445dc17aea1731ec86d2f84c8effd74382e30e9dfe14e5c1897eec376cd103c09555d70f05692438ca68a5b7f491e527d9e146a3b40b4770bda8c221161fb52425295e808b05028211d2ff4a094f3c3cce171f75ad56dda91b8d27b0b7244ea33e5107fcb5dad655e2da3ac73ac0d57b88cb393774021425ee0c0f08c5d079781b46f654f06d8c06870ad0ee3540dc163b34282b561b4335ff5c75d604ba87151db26261495540331c36143f805622b93cce3b81a24365f4318f7a03095f7a3140e6a126e06160531551d35247533125953a21d69421789399a9d1de3a68f5c592cffc264eb4e3b6216b37bc10c6de33ebf87547afeb09dcac224b3133d437867cd1241eb9a71eb14828170c8b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc7dfffffffffffffff0000000000000000d45ce800000000002000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "594b12cc1e6cc09080718b8254c9c1d2afa2e01700b8998b3c7a21f417325b54142dc2ae4315e2fe3a090927fe72a1d7ce60544c5986294cfad9c028364c0cdf71a9e869476b01cdb110fbeb195c5c5676b20bcfd3d4e0c63632c145e8bb28d0a7e2fd9b4141fd697b5e14c44b3b9304cfc3cac88a18aa891de89c8133fd0179f27ba7226fb5dfdc4f88d3eea4bec463fa0a68b2cfdbe735f50bbb2fdcda1a84704ecbb275b715365be1337ee69c35d616ba884750ec17ba64cf06d17c060bbf49b9014d15f0f2d4559b7caca8901b27ce352e4d289d06254a3afad382c1bff68661717d8090e46bcebf05eeb90effc5a2777c8849a05fbac77f80f10c3f4bca011104c919885aef7f8d5c19683912eb989f3afa28be34d05693cd6d491c646916008482e9601f550cff6639f73aa3aa4a119e1a14581d52d0dcb87933866003028eba57115f4a7e326bfb34645f8931a73c07892d61dd2d642cbc1debcf1a5a10c6de33ebf87547afeb09dcac224b3133d437867cd1241eb9a71eb14828170c4913e0df495fd69cd123137971fdbe7ee72b3f6aa527b405aa7e0613b0b7f6ff671a19401a52ded2100a386262193645013d7c06deed71d6f102b3e89352a9f3cda81fc86c1a0f5aa3f0c68a5480a942f4da35b0235ddfc0456f122732483df1b8edb35e4a34204764f75fab2dfd275e0a29bd2e3d53174733e8fafbe902cc6e8b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc700000000000000000000000000000000d45ce80000000000a000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00efe1d215094cac547a8a3126f107ace52c8aa15688f8b2eacfa75eff9a23880000000000000000000000000000000d45ce800000000006000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00efe1d215094cac547a8a3126f107ace52c8aa15688f8b2eacfa75eff9a23880000000000000000000000000000000d45ce800000000006000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "594b12cc1e6cc09080718b8254c9c1d2afa2e01700b8998b3c7a21f417325b54142dc2ae4315e2fe3a090927fe72a1d7ce60544c5986294cfad9c028364c0cdf71a9e869476b01cdb110fbeb195c5c5676b20bcfd3d4e0c63632c145e8bb28d0a7e2fd9b4141fd697b5e14c44b3b9304cfc3cac88a18aa891de89c8133fd0179f27ba7226fb5dfdc4f88d3eea4bec463fa0a68b2cfdbe735f50bbb2fdcda1a84704ecbb275b715365be1337ee69c35d616ba884750ec17ba64cf06d17c060bbf49b9014d15f0f2d4559b7caca8901b27ce352e4d289d06254a3afad382c1bff68661717d8090e46bcebf05eeb90effc5a2777c8849a05fbac77f80f10c3f4bca011104c919885aef7f8d5c19683912eb989f3afa28be34d05693cd6d491c646916008482e9601f550cff6639f73aa3aa4a119e1a14581d52d0dcb87933866003028eba57115f4a7e326bfb34645f8931a73c07892d61dd2d642cbc1debcf1a5a10c6de33ebf87547afeb09dcac224b3133d437867cd1241eb9a71eb14828170c4913e0df495fd69cd123137971fdbe7ee72b3f6aa527b405aa7e0613b0b7f6ff671a19401a52ded2100a386262193645013d7c06deed71d6f102b3e89352a9f3cda81fc86c1a0f5aa3f0c68a5480a942f4da35b0235ddfc0456f122732483df1b8edb35e4a34204764f75fab2dfd275e0a29bd2e3d53174733e8fafbe902cc6e8b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc700000000000000000000000000000000d45ce80000000000a000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "1a01b5e3eadbaf2f2bbe76fcf12fcca51db02fdc6ad4ec3893c7f827188d884abfa4ed4450ec4ce366602d70f95eb8cc3ca846442ea59703d12f20f7552a407c805622b93cce3b81a24365f4318f7a03095f7a3140e6a126e06160531551d3529ce7cc4872539ecf6c7cd1dea40d554a5fcd48b3af6a724f22a53840a3c12e4f5b4652b1f8a67dae7c659c1f3f9e5154be3d89f96643ec17f43adf21a6c230a9b4a010e7f2d95dec3ee9444ca3cf772c03a6a3175d618055b4626695d79c0717f67452d4a401ef827826c6d3e5f0b38ead336806cbbc26ea0259e68f3f5cb69164913cce6812bb54cb6f204aff1fe7aff08cd494445dc17aea1731ec86d2f84c8effd74382e30e9dfe14e5c1897eec376cd103c09555d70f05692438ca68a5b7f491e527d9e146a3b40b4770bda8c221161fb52425295e808b05028211d2ff4a094f3c3cce171f75ad56dda91b8d27b0b7244ea33e5107fcb5dad655e2da3ac73ac0d57b88cb393774021425ee0c0f08c5d079781b46f654f06d8c06870ad0ee3540dc163b34282b561b4335ff5c75d604ba87151db26261495540331c36143f805622b93cce3b81a24365f4318f7a03095f7a3140e6a126e06160531551d35247533125953a21d69421789399a9d1de3a68f5c592cffc264eb4e3b6216b37bc10c6de33ebf87547afeb09dcac224b3133d437867cd1241eb9a71eb14828170c8b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc7dfffffffffffffff0000000000000000d45ce800000000002000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "598179f5122ec7fb321cb1740523e15eddb38154867c2694ff501e6d324f2501af829bf894c2ccc55e2b9dab5aaec7d64cfc39578d346de86c7ca61b1a250c4e58e15ba133acdfdf9f7275c4f1f189548ceacc08023a9e3c91fb48cf588f0ba1268e228798161b274eb375d639bfad07e5fe4214d41ef9625f02e79eb88dd7c80ea675660e3f136610a4f999a33c6d47de246fb10ec94f444d3725f2cbcfaca9178cbfafa4f5d81033601778f5f05b472d22ddcc278db8e1a9429546b71598d39f9f1190166e5b60070f03bafe88197ba9f2c22e7fda5730e057bc0026ea43d29ab8eb723438e69823062a44be353334502e79d460449e46b759c36abd568c62ccf9634326aff8451a88a155be644d25bde154d7b8faf05cf5076f014095a290c61c6add60c8b94b14b21dc8850b2701f4cf3ff141a56d2958bf0feb88bc6f09e25b8c46c1b1695837fcb0eaee3ec8dbd304bfa43725a496dedb75e5af74bc40c0cb0d7b5160d97a0d4d8a5cbbb512b05a910ea3d185ebdc9a12083f925e0e422da5582cab417a79c9177669b036ddadd3ae241c87e699614d6f5091fadc2b285e13fddafdee9753f633a70c313a465348e59aaef69a356e3ce39a4022dca544fdfab48207aa419b6dc2ba7b588ad62112f11fecccb9e8029c4c9ffb4791435830741b819d1c1dafbb1874f042b3ed75f8f481a5d7f9aa9287f6f0e8a63ad6980ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f00000000000000000000000000000000d45ce80000000000c000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "d70b2f818b4124aa8140c8cb73bd65f6dadab5123e00cdc03b6d276b61cf605b2d2bae4b3fd3d05df0d717db7a0df7895265c2a0f92f0310dc64252520e172a388a8df007a6177c5fe420fbbdd4b36644ea85e6f55872633dca4084f4990434a151c68e534033f4942b0c0fe431f76daa61dc4b0c29ed8d84825a6a9325f96a458e767ccc393eb2f1fe7765ec915c9b4cb36094c9f4d96011ec6ff6b73e5ff1f0bc43e75fd96f02f07f2e9c9d5221b8aa0e328f699806eb0e7f813bfabf1f6c220b58bff325179b99cf52743358a463b7b4ef0bb57af0a4ce4ef0d61cbdd5d7351a77b94e491aa45d3b128d4562346f94c7324c6727a31ee0316aedcf34e97af5caf930e657e6cb7ceb30938b8392ae2f74d47e12bc5c68444c1ab8f4adeda20de79941d977a507ecac7edb750567d008ba87ba4e9ea326a78c4f79c2a549293765a745a39bab75f1a6428ac58d6822f30f4f687ce23b5cfd2ac427692294328060c206871901fa8c37dc29092829c985251d9925435d78c7f7f4b0f10f196249528c878772d018a5ce8ec90c48adff4daaa48c271ca6a041af7e1a7980a34f488a8df007a6177c5fe420fbbdd4b36644ea85e6f55872633dca4084f4990434a641148e67dd838f724d2fcea3c5825ff30d0829bee9b634e9b1f2b2077642dcac0cb0d7b5160d97a0d4d8a5cbbb512b05a910ea3d185ebdc9a12083f925e0e420ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f3fffffffffffffff0000000000000000d45ce800000000004000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc000000000000000aaaa000000000000d45ce800000000008000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce800000000000000000000000000600000000000000090f657478edf0b7dd36f1393be6244f3e99a6d02dac22e50de6759f5fa4864d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000"

  // "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac000000000000000aaaa000000000000d45ce8000000000000000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9aa53569e26a511cf0547e937248f8281a51dd5acc1e784b6f67340c7bbcfdf9c42222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc000000000000000aaaa000000000000d45ce8000000000080000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a9c0f39dfaf12f5412f7546484d7596951c1b48e5bdb0a4022e65dda8f226796a2222505a524546494757484d4d3959475342535a425542544b56554d4e477896aaaa0000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "a0434a345ffcba934a878ae59c524053467272645f3c00f8ff9721f2267c7c0d19affd4a8b2264d174ad068be47f6e21cebfd86edad2afbe8ff14690a98ca9fd0ce6dc815205498cde28c048104a366227c39362c06ccff93c29aa8ee1268c1f3fffffffffffffff0000000000000000d45ce8000000000040000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a88c4999ee418925ae84d1ae15d80833ec7892060c7398e476db787292d4841d92222505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "7ade88b7c9fd8ac5977ac48a63a477963862454606051c5a4b1c9ea5ae6cb31a25511a0084f67602f1b34f7d681fffbe78778a32e28a506acc234daa573278498b3580689cf8c7aa6a9f3a980f9efcebd81425f0f783b5b72d07d71282492bc7dfffffffffffffff0000000000000000d45ce80000000000c0000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a73cf1d3faf6efee6c650414fd78f65efa31280bdc7463819908d0204447cb2b22222505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00efe1d215094cac547a8a3126f107ace52c8aa15688f8b2eacfa75eff9a23880000000000000000000000000000000d45ce8000000000020000000000000002000000000000000e6e75e76258507f20559b486dc0863dedef532950466206412fc828de8c0ae9a2222505a524546494757484d4d3959475342535a425542544b56554d4e4778965bc6505a524546494757484d4d3959475342535a425542544b56554d4e47789600000000000000000000000000000000000000000000000000000000000000000000000000000000"
];
