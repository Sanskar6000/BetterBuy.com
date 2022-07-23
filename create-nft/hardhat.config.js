/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();

require('@nomiclabs/hardhat-ethers');
const API_URL =
  'https://eth-goerli.g.alchemy.com/v2/AbXdtj2WzfVsqyMobHtMCd4JmsfrdpVR';
const PRIVATE_KEY =
  'daee80431c696092d5813749c95ffa4a45518ec5d868d271df98cf35a2fecfa4';
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
