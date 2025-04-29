# Web3.0 Frontend Application

## 🎯 Overview

Modern React-based frontend for the Web3.0 blockchain application, featuring a responsive design and seamless blockchain integration.

## 🛠️ Technical Stack

- **React 18.0.0**
- **Vite 2.9.9**
- **TailwindCSS 3.0.24**
- **Ethers.js 5.6.9**
- **TypeScript 4.6.4**

## 📁 Directory Structure
```
src/
├── components/ # React components
│ ├── Login/ # Authentication
│ ├── Dashboard/ # Main interface
│ └── Transactions/ # Transaction handling
├── context/ # React context providers
├── hooks/ # Custom React hooks
├── utils/ # Utility functions
└── assets/ # Static resources
```

## 🚀 Development

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.14.0
- MetaMask wallet

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e
```

## 📚 Available Scripts

- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run preview`: Preview build
- `npm run lint`: Lint code
- `npm run format`: Format code

## 🔧 Configuration

### Environment Variables
```env
CONTRACT_ADDRESS=your_contract_address
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px