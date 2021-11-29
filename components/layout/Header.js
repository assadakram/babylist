import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [state, setstate] = useState(false);
  return (
    <div className="animate-fadeIn">
      <div
        className={`inline-flex w-full h-16 justify-between bg-white ${
          !state ? "shadow-lg" : ""
        }`}
      >
        <div className="flex ml-6 items-center ">
          <Link href="/">
            <a>
              <Image src="/ER-logo.png" width="178px" height="30px" alt="" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className=" text-sm hover:border-b-2 transition duration-300 hover:border-gray-400 h-full py-5 font-semibold mr-14 font-Josefin hidden md:block cursor-pointer uppercase  tracking-widest ">
              Log in
            </a>
          </Link>
        </div>

        <div
          className="cursor-pointer inline-flex md:hidden border border-gray-400 rounded-lg m-2 px-4 place-items-center font-medium text-lg "
          onClick={() => setstate(!state)}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {state && (
        <div
          className={`md:hidden ${state ? "shadow-lg" : ""} `}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 w-full bg-white ">
            <Link href="/">
              <a className="bg-white block px-3 py-2 rounded-md text-base font-semibold text-left">
                Log in
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
