"use client";

import { useState } from "react";
import Image from "next/image";
import { DropDown } from "@/utils/icons";

interface CurrencyOption {
  label: string;
  src: string;
}

interface CurrencySelectProps {
  options: CurrencyOption[];
  selected: string;
  onSelect: (value: string) => void;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const handleSelect = (label: string) => {
    onSelect(label);
    document.getElementById("currency-dropdown")?.classList.add("hidden");
  };

  return (
    <div className="relative">
      {/* Current Selection */}
      <div
        className="flex items-center space-x-2 cursor-pointer bg-transparent px-2 py-1 border border-gray-600 rounded-md"
        onClick={() => {
          document.getElementById("currency-dropdown")?.classList.toggle("hidden");
        }}
      >
        <Image
          width={15}
          height={15}
          src={options.find((o) => o.label === selected)?.src || options[0]?.src}
          alt={selected}
        />
        <span>{selected}</span>
        <Image width={10} height={10} src={DropDown} alt="DropDown" />
      </div>

      {/* Dropdown Menu */}
      <div
        id="currency-dropdown"
        className="absolute right-0 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg hidden z-10"
      >
        {options.map((option) => (
          <div
            key={option.label}
            className="flex items-center w-full space-x-2 px-3 space-y-2 hover:bg-gray-600 cursor-pointer"
            onClick={() => handleSelect(option.label)}
          >
            <Image width={15} height={15} src={option.src} alt={option.label} />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};