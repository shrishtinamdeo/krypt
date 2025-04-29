import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

const Login = () => {
  const { connectWallet } = useContext(TransactionContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gradient-bg-welcome">
      <div className="flex flex-col items-center p-8 rounded-2xl white-glassmorphism">
        {/* Ethereum Logo */}
        <div className="w-20 h-20 rounded-full eth-card flex justify-center items-center mb-8">
          <SiEthereum fontSize={45} color="#fff" />
        </div>

        {/* Title with gradient text */}
        <h1 className="text-4xl sm:text-5xl text-gradient py-2 font-bold mb-4 text-center">
          Send Crypto <br /> across the world
        </h1>

        {/* Subtitle */}
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base text-center">
          Explore the crypto world. Buy and sell cryptocurrencies easily.
        </p>

        {/* Connect Button */}
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 px-8 rounded-full cursor-pointer hover:bg-[#2546bd] shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <AiFillPlayCircle className="text-white mr-2 text-2xl" />
          <p className="text-white text-lg font-semibold">
            Connect Wallet
          </p>
        </button>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full mt-10 gap-4">
          {["Reliability", "Security", "Ethereum"].map((item, index) => (
            <div key={index} className="white-glassmorphism p-3 rounded-lg flex justify-center items-center">
              <p className="text-white text-sm font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login; 