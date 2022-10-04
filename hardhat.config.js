require('dotenv').config();

require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('solidity-coverage');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const walletKey = process.env.WALLET_KEY;
const mainnetUrl = process.env.MAINNET_API_URL;
const goerliUrl = process.env.GOERLI_API_URL;
const arbitrumOneUrl = process.env.ARBITRUM_ONE_URL;
const polygonUrl = process.env.POLYGON_API_URL;
const optimismUrl = process.env.OPTIMISM_URL;
const arbiscanApikey = process.env.ARBISCAN_API_KEY;
const etherscanApikey = process.env.ETHERSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: mainnetUrl,
      accounts: [walletKey],
    },
    goerli: {
      url: goerliUrl,
      accounts: [walletKey],
    },
    polygon: {
      url: polygonUrl,
      accounts: [walletKey],
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [walletKey],
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts: [walletKey],
    },
    arbitrumRinkeby: {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [walletKey],
    },
    arbitrumOne: {
      url: arbitrumOneUrl,
      chainId: 42161,
      accounts: [walletKey],
    },
    optimism: {
      url: optimismUrl,
      chainId: 10,
      accounts: [walletKey],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: {
      mainnet: etherscanApikey,
      // optimisticEthereum: 'OPTIMISTIC_ETHERSCAN_API_KEY',
      arbitrumOne: arbiscanApikey,
    },
  },
};
