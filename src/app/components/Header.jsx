import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-yellow-600">
      <ul className="flex justify-left gap-5 ">
        <li>
          <Link href={"/"} prefetch={false}>
            Diversa
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
