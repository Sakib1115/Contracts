require('babel-register')
require('babel-polyfill')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()

var HDWalletProvider = require('@truffle/hdwallet-provider')

const MNEMONIC =
  process.env.MNEMONIC ||
  'clock radar mass judge dismiss just intact mind resemble fringe diary casino'
const API_KEY = process.env.API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  development: {
      host:'localhost',
      port:9545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 7000000
    },
    bor: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `http://localhost:8545`
        ),
      network_id: '*', // match any network
      //gasPrice: '0'
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://polygon-mainnet.g.alchemy.com/v2/rO_9C4ijxFHg2D0uOGbC1MoEvfBEKxAU`
        ),
      network_id: '137',
      gas: 8000000,
      gasPrice: 12000000000, // 100 gwei
      maxFeePerGas: 12000000000, // 100 gwei
      maxPriorityFeePerGas:12000000000, // 100 gwei
      production: true,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      // websocket: true,
      timeoutBlocks: 90000
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://rpc.ankr.com/polygon_mumbai`
        ),
      network_id: '80001',
      gas: 8000000,
      gasPrice: 30000000000, // 30 gwei
      skipDryRun: true,
    },
    evmos: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://evmos-evm.publicnode.com`
        ),
      network_id: '9001',
      gasPrice: '90000000000'
    },
    evmos_testnet: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://jsonrpc-evmos-testnet.mzonder.com`
        ),
      network_id: '9000',
      gas: 8000000,
      gasPrice: 30000000000, // 30 gwei
      skipDryRun: true,
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${API_KEY}`
        )
      },
      network_id: 5,
      gas: 8000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://mainnet.infura.io/v3/${API_KEY}`
        )
      },
      network_id: 1,
      gas: 3000000,
      gasPrice: '45000000000'
    }
  },
  compilers: {
    solc: {
      version: '0.5.17',
      docker: true,
      parser: 'solcjs',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: 'istanbul'
      }
    }
  },
  mocha: {
    bail: false,
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 21,
      outputFile: '/dev/null',
      showTimeSpent: true
    }
  },
  plugins: ['solidity-coverage', 'truffle-plugin-verify', 'truffle-contract-size'],
  verify: {
    preamble: 'Ramestta Network contracts'
  },
  api_keys: {
    etherscan: ETHERSCAN_API_KEY
  }
}
