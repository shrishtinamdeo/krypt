import React, { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { Navbar, Footer, Services, Transactions } from "./components";

const App = () => {
  const { currentAccount } = useContext(TransactionContext);

  if (!currentAccount) {
    return <Login />;
  }

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
