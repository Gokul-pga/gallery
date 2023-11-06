import Image from "next/image";
import React, { useState } from "react";
import Modalpage from "@/app/homepage/modalpage/page.js";
import { FiMenu } from "react-icons/fi";

function ResNav() {
  const [show, setShow] = useState(false);
  const [resNav, setResNav] = useState(false);
  const submithandle = () => {
    window.localStorage.clear;
    window.location.href = "/";
  };
  return (
    <>
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row gap-2 items-center bg-slate-300 w-full justify-between md:px-10 px-3">
          <div className="flex flex-row  items-center ">
            <Image
              src={require("@/src/assests/gallery img.png")}
              alt="images"
              className=" text-white md:w-44 md:h-24 w-32 h-20"
              priority={false}
            />
          </div>
          <div className="flex flex-col">
            <FiMenu
              onClick={() => {
                setResNav((p) => !p);
              }}
            />
            {resNav && (
              <div className="flex flex-col  z-50">
                <button
                  className="bg-blue-400 px-3 py-1 rounded-lg font-semibold text-white"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Upload
                </button>
                {show && <Modalpage show={show} setShow={setShow} />}
                <button
                  className="bg-blue-400 px-3 py-1 rounded-lg font-semibold text-white hover:bg-red-400  transition-all"
                  onClick={submithandle}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResNav;
