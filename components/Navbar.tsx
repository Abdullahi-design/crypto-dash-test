"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AngleRight, Globe, Logo, Menu, Profile, SignOut } from '@/utils/icons';
import MenuBar from './MenuBar';

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="bg-[#32383F] flex p-2 px-8 justify-between items-center border-b border-gray-700 relative">
      <section className="flex items-center space-x-12">
        <Image
          width={150}
          height={40}
          src={Logo}
          alt="Logo"
          className="md:border-r border-gray-700 p-4"
        />
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300">Exchange</a>
          <a href="#" className="hover:text-gray-300">Wallets</a>
          <a href="#" className="hover:text-gray-300">Roqqu Hub</a>
        </div>
      </section>

      <section className="flex items-center space-x-4">
        <div className="md:bg-[#12171D] md:p-2 md:px-4 rounded-xl flex justify-between w-fit md:w-full">
          <Image
            width={30}
            height={40}
            src={Profile}
            alt="Profile"
          />
          <p className="hidden md:block text-slate-400 mt-1">Olakunle Te..</p>
          <Image
            width={30}
            height={40}
            src={AngleRight}
            alt="AngleRight"
            className="hidden md:flex"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Image
            width={30}
            height={40}
            src={Globe}
            alt="Globe"
            className='cursor-pointer'
          />
          <Image
            width={30}
            height={40}
            src={Menu}
            alt="Menu"
            className="md:hidden flex cursor-pointer"
            onClick={toggleMenu}
          />
          <Image
            width={30}
            height={40}
            src={SignOut}
            alt="SignOut"
            className="hidden md:flex"
          />
        </div>
      </section>

      {/* Conditionally render the MenuBar */}
      {menuVisible && <MenuBar />}
    </nav>
  );
};