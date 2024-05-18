"use client";

import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu((val) => !val);
  };

  return (
    <nav className="w-full md:max-w-6xl mx-auto py-4 px-6 z-40 flex justify-between sm:items-center relative">
      {!showMenu && (
        <Link href={`/`}>
          {/* <Image src={`/logo-bookmark.svg`} width={170} height={32} alt="" /> */}
          E-Solars
        </Link>
      )}

      <div className="w-1/2 lg:w-1/3 hidden md:inline-block">
        <ul className="flex flex-row gap-1 justify-between items-center">
          <Link href={`#`}>
            <li className="font-semibold cursor-pointer transition-all delay-100 hover:border-white hover:text-green-500">
              Features
            </li>
          </Link>

          <Link href={`#`}>
            <li className="font-semibold cursor-pointer transition-all delay-100 hover:border-white hover:text-green-500">
              Pricing
            </li>
          </Link>

          <Link href={`#`}>
            <li className="font-semibold cursor-pointer transition-all delay-100 hover:border-white hover:text-green-500">
              Contact
            </li>
          </Link>

          <Link href={`#`}>
            <li className="font-semibold cursor-pointer">
              <button className=" border rounded p-2 px-4 w-full transition-all delay-100 hover:text-green-500 hover:border-Soft-Red">
                Login
              </button>
            </li>
          </Link>
        </ul>
      </div>

      {!showMenu && (
        <button className="md:hidden" onClick={handleClick}>
          <MenuIcon />
          {/* <Image
            src={`/icon-hamburger.svg`}
            className="w-5 h-5"
            width={32}
            height={32}
            alt=""
          /> */}
        </button>
      )}

      {showMenu && (
        <div className="absolute inset-0 b-Very-Dark-Blue/90 text-white flex flex-col gap-16 items-center">
          <div className="p-6 w-full bg-green-600/90 min-h-screen">
            <div className="flex flex-row justify-between items-center logo">
              <p>E-Solars</p>
              <button onClick={handleClick}>
                <X className=" w-5 h-5" width={25} height={10} />
              </button>
            </div>

            <ul className="flex flex-col text-white gap-1 mt-4 items-center">
              <Link
                href={`#`}
                className=" border-t w-full flex py-6 text-xl font-semibold cursor-pointer justify-center transition-all delay-100 hover:border-white hover:text-green-500"
              >
                <li>Features</li>
              </Link>

              <Link
                href={`#`}
                className=" border-t w-full flex py-6 text-xl font-semibold cursor-pointer justify-center transition-all delay-100 hover:border-white hover:text-green-500"
              >
                <li>Pricing</li>
              </Link>

              <Link
                href={`#`}
                className=" border-t w-full flex py-6 text-xl font-semibold cursor-pointer justify-center transition-all delay-100 hover:border-white hover:text-green-500"
              >
                <li>Contact</li>
              </Link>

              <Link
                href={`#`}
                className=" border-t w-full flex py-6 text-xl font-semibold cursor-pointer justify-center"
              >
                <li>
                  <button className=" border rounded p-4 w-full transition-all delay-100 hover:text-green-500">
                    Login
                  </button>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-6 items-center social-media hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

function Nav() {
  return <MobileNav />;
}

export default Nav;
