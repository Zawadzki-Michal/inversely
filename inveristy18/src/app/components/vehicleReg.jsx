"use client";
import React from 'react';

const VehicleReg = () => {
  return (
    <form className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Enter your vehicle registration"
        className="w-96 p-4 my-4 border-black b-solid-2"
      />
      <button className="bg-blue-500 text-white p-4 w-96">Check Now</button>
    </form>
  );
};

export default VehicleReg;