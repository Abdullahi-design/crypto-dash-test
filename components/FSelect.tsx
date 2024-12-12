"use client";

import { InfoCircle } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";

interface FSelectProps {
  title: string;
  placeholder: string; 
  value: string;
  onChange: (value: string) => void; 
  options: { label: string; value: string }[];
}

export const FSelect: React.FC<FSelectProps> = ({
  title,
  placeholder,
  value,
  onChange,
  options,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
            title !== "Type" ? "left-[85px]" : "left-[50px]"
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

      {/* Select Dropdown */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm pl-24 pr-4 py-4 bg-[#20252B] text-gray-300 border border-gray-600 rounded-xl outline-none"
      >
        <option value={options[1]?.value}>
            {options[1]?.label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};