import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center lg:p-8 p-2 w-full bg-emerald-700 text-slate-100 ">
      <div className="flex items-center md:text-2xl text-sm">
        <Link href="/" className="lg:text-2xl text-lg">
          EVHealthCheck.com
        </Link>
      </div>
      <nav className="flex lg:space-x-6 text-sm md:text-2xl gap-4">
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
