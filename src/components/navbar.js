import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-red-800 flex justify-between items-center px-[30px]">
      <div className="text-2xl text-white font-bold">MUFC</div>
      <ul className="hidden md:flex font-semibold text-yellow">
        <li className="mx-[10px]">Home</li>
        <li className="mx-[10px]">About</li>
        <li className="mx-[10px]">Players</li>
        <li className="mx-[10px]">Shop</li>
        <li className="mx-[10px]">Contact Us</li>
      </ul>
      <div className="hidden md:block">
        <input
          className="w-[180px] rounded pl-[5px] bg-gray-100"
          placeholder="Search here..."
        />
      </div>
    </div>
  );
};
