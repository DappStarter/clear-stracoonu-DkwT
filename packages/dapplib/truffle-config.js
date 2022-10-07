require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strong riot sister cluster hunt kiwi outer gauge'; 
let testAccounts = [
"0xb78cfb632dac866d691974854cd509c151a5656b28cf53b9c5125ee9817b49e2",
"0x51bbbc2cfd5b991e4a6270499e2d79461f9b0ffa474582c1e73fd86018c71341",
"0x249d8950aeb92c535110e9a46ec806baa715e79263a8ff1294da203d6caee7cf",
"0x56cd2058a1d95d97a78187bdd3f37eae9bf7d3f83d8c981a7004d45eafac0384",
"0x0431526f93ca2b3aa9aa1f1d5ca1b86bf8d7968336483a8a75586eb0b13a31b5",
"0xcc7a6c5aa811eff66bc384866a67d60891cba8ac89f2fbcf8d3fb99adaca53a4",
"0x22b992e17d42e336d2577f1a5501605dfbe1a2b57969c186499c249fc3cfb43f",
"0xb49a4a3367fa05a582bb1496b91ccb3eba3a50bbb91b438a2f4103ecc567e2c1",
"0xb413354c0ce5528d2c629c4d5e6f25cec9f2d568eef846600f4317c275ed848f",
"0xbab0d0f24930bf001359544aca59a90ae2a4a4e39d40bdcdac738efad48b2cb4"
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


