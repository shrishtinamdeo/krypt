# Web3.0 Smart Contracts

## 📝 Overview

Ethereum smart contracts powering the Web3.0 blockchain application, built with Solidity and Hardhat.

## 🔧 Technical Specifications

### Contracts

#### Transactions.sol
- **Version**: Solidity ^0.8.0
- **Features**:
  - Transaction processing
  - History tracking
  - Gas optimization
  - Event emission

### Development Stack
- **Hardhat**: Development framework
- **OpenZeppelin**: Security standards
- **Chai**: Testing
- **Ethers.js**: Contract interaction

## 📁 Directory Structure 
```
smart_contract/
├── contracts/ # Smart contract source files
├── scripts/ # Deployment and utility scripts
├── test/ # Contract tests
└── hardhat.config.js # Hardhat configuration
```

## 🚀 Setup & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run local node
npx hardhat node

# Deploy contracts
npx hardhat run scripts/deploy.js --network localhost

# Run tests
npx hardhat test
```

### Network Deployments

#### Testnet (Goerli/Sepolia)
```bash
npx hardhat run scripts/deploy.js --network goerli
```

#### Mainnet
```bash
npx hardhat run scripts/deploy.js --network mainnet
```

## 🧪 Testing

### Test Coverage
```bash
npx hardhat coverage
```

### Test Structure
```
test/
├── Transactions.test.js # Main contract tests
└── helpers/ # Test helpers
```

## 📊 Gas Optimization

- Efficient storage usage
- Optimized function calls
- Gas limit considerations

## 🔒 Security

- Reentrancy protection
- Integer overflow checks
- Access control
- Event emission

## 📚 Contract Documentation

### Functions
- `addToBlockchain()`
- `getAllTransactions()`
- `getTransactionCount()`

### Events
- `Transfer`

### State Variables
- `transactionCount`
- `transactions`