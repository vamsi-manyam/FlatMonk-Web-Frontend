import React from "react";
import Signature from "../holder/Signature";

function Header() {
  return (
    <>
      <header className="flex p-4 justify-center items-center">
        <Signature />
        <div className="flex-1"></div>
        <nav className="">
          <ul className="flex space-x-4">
            <li>Flat</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
