import React, { useState } from "react";
import ImportWallet from "./ImportWallet";
import metaMask from "../Assets/metamask.png";
import walletConect from "../Assets/walletConect.svg";
import coinbase from "../Assets/coinbase.svg";

const wallets = [
  {
    name: "MetaMask",
    icon: metaMask,
    id: 1,
    details: "Connect to your MetaMask Wallet",
  },
  {
    name: "WalletConnect",
    icon: walletConect,
    id: 2,
    details: "Scan with WalletConnect to connect",
  },
  {
    name: "Coinbase Wallet",
    icon: coinbase,
    id: 3,
    details: "Scan with Coinbase Wallet to connect",
  },
];

const Modal = ({ setModal }) => {
  const [importWallet, setImportWallet] = useState(false);

  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-0 inset-0  z-50 outline-0 ">
      <div className="">
        {!importWallet ? (
          <div className="lg:w-[65rem] w-[24rem] bg-white drop-shadow-2xl">
            <div className="grid lg:grid-cols-2 grid-cols-1 ">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="flex flex-col items-center border borderClr border-gray-700 text-white hover:opacity-80  p-10 cursor-pointer"
                  onClick={() => setImportWallet(true)}
                >
                  <img
                    src={wallet.icon}
                    alt="dakjdga"
                    className="lg:w-16 w-10"
                  />
                  <p className="lg:text-2xl text-black secondaryTxt text-xs mt-4 font-[700]">
                    {wallet.name}
                  </p>
                  <p className="text-lg text-[#A9A9C9] secondaryTxt font-[400]">
                    {wallet.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ImportWallet setImportWallet={setImportWallet} />
        )}
      </div>
    </div>
  );
};

export default Modal;
