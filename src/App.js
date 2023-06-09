import Navbar from "./Components/Navbar";
import Tophead from "./Components/Tophead";
import arbinauts from "./Assets/arbinauts.webp";
import Modal from "./Components/Modal";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function App() {
  const [modal,setModal] = useState(false);

  return (
    <div className="App">
      <Tophead />
      <Navbar setModal={setModal}/>
      <div className="flex flex-col items-center py-10">
        <button className="bg-[#436147] underline text-white lg:px-6 px-4 py-2 flex items-center space-x-2 rounded-full shadhow-xl lg:text-lg text-sm text-[15px]  font-[800]">
          <IoMdAddCircleOutline className="text-white lg:text-xl text-sm" />
          <p onClick={() => setModal(true)}>Connect Wallet</p>
        </button>
        {modal && <Modal setModal={setModal} />}
        <img src={arbinauts} alt="arbinauts" />
      </div>
      <div className="container lg:text-left text-center mx-auto py-5">
        <p className="text-4xl text-white font-[400]">
          Now running Arbitrum Nitro.
        </p>
        <p className="text-3xl underline text-white font-[700] my-4">
          Learn more.
        </p>
        <p>Now running Arbitrum Nitro.</p>
        <div className="grid lg:grid-cols-3 text-center grid-cols-1 lg:max-w-lg gap-5">
          <p className="text-md underline text-white">Documentation</p>
          <p className="text-md underline text-white">Careers</p>
          <p className="text-md underline text-white">Blog</p>
          <p className="text-md underline text-white">Recent Press</p>
          <p className="text-md underline text-white">ToS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
