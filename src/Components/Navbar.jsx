import React, { useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiSuspensionBridge } from "react-icons/gi";
import logo from "../Assets/logo.svg";
import Modal from "./Modal";

const components = [
  { name: "Superchain", href: "/", status: true, icon: false },
  { name: "Governance", href: "/add-liquidity", status: false, icon: false },
  { name: "Ecosystem", href: "/create-pool", status: false, icon: false },
  { name: "Bridge", href: "/create-pool", status: false, icon: false },
  { name: "Developers", href: "/create-pool", status: false, icon: false },
  { name: "More", href: "/create-pool", status: false, icon: false },
];

const Navbar = () => {
    const [modal,setModal] = useState(false);

  return (
    <>
      <div className="flex justify-between shadow-md items-center lg:p-8 container mx-auto p-2 bg-trasnparent ">
        <div className="flex text-white items-center font-[700]">
          <img src={logo} className="w-48" />
          <div className="hidden lg:block ml-5">
            <ul className="flex space-x-4 text-white items-center font-[700]  p-1 rounded-3xl">
              {components.map((item, index) => (
                <li
                  to={item.href}
                  key={index}
                  onClick={() => setModal(true)}
                  className={
                    item.status
                      ? "px-3 py-1 font-[600] text-white text-lg opacity-80 underline rounded-lg flex cursor-pointer hover:bg-white"
                      : "px-3 py-1 flex font-[600] items-center text-lg opacity-80 text-white underline rounded-lg cursor-pointer hover:bg-white"
                  }
                >
                  {item.icon ? (
                    <GiSuspensionBridge className="mr-3 text-2xl" />
                  ) : (
                    ""
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <button className="bg-[#436147] underline text-white lg:px-6 px-4 py-2 flex items-center space-x-2 rounded-full shadhow-xl lg:text-lg text-sm text-[15px]  font-[800]">
            <IoMdAddCircleOutline className="text-white text-xl"/>
            <p onClick={() => setModal(true)}>Connect Wallet</p>
          </button>
          {modal && <Modal setModal={setModal}/>}
          <button className=" lg:block hidden text-white text-2xl p-2">
            <BsDiscord />
          </button>
          <button className=" lg:block hidden text-white text-2xl p-2">
            <AiOutlineTwitter />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
