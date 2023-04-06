import React, { useState } from "react";
import coinbase from "../Assets/coinbase.svg";
import walletConect from "../Assets/walletConect.svg";
import WalletConnectModal from "./WalletConnectModal";
import CoinbaseWallet from "./CoinbaseWallet";

const Modal = () => {
  const [walletCn, setWalletCn] = useState(false);
  const [coinbaseCn, setCoinbaseCn] = useState(false);
  return (
    <div>
      <div className="transition-10 duration-50 justify-center  items-center flex fixed -top-40   inset-0  outline-0 ">
        <div className="lg:w-[50rem] md:w-[35rem] w-[22rem] rounded-xl bg-white drop-shadow-2xl">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-4 gap-x-16  py-10 lg:px-4 md:px-9 px-4">
            <div
              onClick={() => {
                setCoinbaseCn(false);
                setWalletCn(true);
              }}
              className="flex flex-col items-center text-white hover:opacity-80  p-4 cursor-pointer"
            >
              <img src={walletConect} alt="dakjdga" className="lg:w-16 w-14" />
              <p className="lg:text-xl text-black secondaryTxt text-xl mt-4 font-[700]">
                WalletConnect
              </p>
              <p className="lg:text-md text-md text-black secondaryTxt mt-4 font-[500]">
                Scan with WalletConnect to connect
              </p>
            </div>
            <div
              onClick={() => {
                setWalletCn(false);
                setCoinbaseCn(true);
              }}
              className="flex flex-col items-center text-white hover:opacity-80  p-4 cursor-pointer"
            >
              <img src={coinbase} alt="dakjdga" className="lg:w-16 w-14" />
              <p className="lg:text-xl text-black secondaryTxt text-xl mt-4 font-[700]">
                Coinbase Wallet
              </p>
              <p className="lg:text-md text-md text-black secondaryTxt mt-4 font-[500]">
                Scan with Coinbase Wallet to connect
              </p>
            </div>
          </div>
        </div>
      </div>
      {walletCn && <WalletConnectModal setWalletCn={setWalletCn} />}
      {coinbaseCn && <CoinbaseWallet setCoinbaseCn={setCoinbaseCn} />}
    </div>
  );
};

export default Modal;
