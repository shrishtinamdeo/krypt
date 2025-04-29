require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.24',
  networks: {
      localhost: {
      url: process.env.NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};