require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift recipe magic hole good private equal gas'; 
let testAccounts = [
"0x3d67f919d2d278ddfd7d45876b2397271d6fdd1f3c24dd9c5c146e5c8a8f4ffc",
"0xf689df50045b563efc81d42fdef5ea15e6bde48713fb525c1ddde32b5778e0e9",
"0xc9c18122a07a1d280ea7512aacea11ca6530d6a35e3bd8e2195e3aa11e64727c",
"0x93f0b21608b84ff9ef987ae4134aca3f4c73f75a2623a4c95cb8a41f9d9c4d64",
"0xc22ca245aa8293321c6226697ffc12f411dd6a3573b2191df976f45bdb9a27a4",
"0xbdaa2c928f71573b64e81d1f8dd79cda8d4c485f2c335de158ed13cffaabde0f",
"0xfe9149b8688c6137aa5961345d044823773aaab4773c948c8454ffd13b388ddd",
"0xb83184302da6ee189ea4eefb4617b58e21958f5d092bb7c074b782ead27d1863",
"0x0d0fa406c861e93f8a44a62ce238ebb7cbc8629e103d149105c0933f60192cac",
"0x0abe4b99911ec2faf6854adb1ab1eefb4c384ca5460c7e86a6214a64f880697c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


