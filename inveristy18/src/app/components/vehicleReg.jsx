"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VehicleReg = () => {
  const router = useRouter();
  let [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();
    setInputValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/vehicle/${inputValue}`);
  };
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter your vehicle registration"
        className="w-96 p-4 my-4 border-black b-solid-2"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white p-4 w-96">
        Check Now
      </button>
    </form>
  );
};

export default VehicleReg;
