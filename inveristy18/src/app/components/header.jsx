
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 w-full">
      <div className="flex items-center">
        <Link href="/">
          
          EVHealthCheck.com
        
        </Link>
      </div>
      <nav className="flex space-x-6">

        <Link href="/about">
          
        About Us
        </Link>
        <Link href="/contact">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;