import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className=" shadow-glass-1 rounded-lg bg-white bg-opacity-50">
      <ul className="flex justify-left items-center">
        <li className="p-3">
          <Link href={"/"}>
            <Image src="/Diversa.svg" alt="Diversa Logo" width={150} height={75} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
