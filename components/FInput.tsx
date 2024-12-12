"use client";

import { InfoCircle } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";

interface FInputProps {
  title: string;
  placeholder: string;
  value: number; 
  onChange: (value: number) => void; 
}

export const FInput: React.FC<FInputProps> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Convert input to a number, allow empty input, and prevent invalid input
    const numericValue = inputValue === "" ? NaN : Number(inputValue);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Label and Info Icon */}
      <div
        className="flex items-center space-x-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="absolute left-4 text-gray-500 text-sm">{title}</span>
        <div
          className={`absolute ${
            title !== "Amount" ? "left-[85px]" : "left-[70px]"
          }`}
        >
          <Image width={15} height={15} src={InfoCircle} alt="InfoCircle" />
        </div>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-8 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
          {title}
        </div>
      )}

      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={isNaN(value) ? "" : value} // Show empty string if NaN
        onChange={handleInputChange}
        className="w-full pl-24 pr-4 py-2 text-right bg-[#20252B] text-gray-300 border border-gray-600 rounded-xl outline-none"
      />
    </div>
  );
};