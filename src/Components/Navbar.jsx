import React from "react";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiSuspensionBridge } from "react-icons/gi";
import logo from "../Assets/logo.svg";

const components = [
  { name: "Superchain", href: "/", status: true, icon: false },
  { name: "Governance", href: "/add-liquidity", status: false, icon: false },
  { name: "Ecosystem", href: "/create-pool", status: false, icon: false },
  { name: "Bridge", href: "/create-pool", status: false, icon: false },
  { name: "Developers", href: "/create-pool", status: false, icon: false },
  { name: "More", href: "/create-pool", status: false, icon: false },
];

const Navbar = ({setModal}) => {

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
