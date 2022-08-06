import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar(props) {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a> home </a>
      </Link>
      <Link href="/about">
        <a> about </a>
      </Link>
      <Link href="/ninjas">
        <a> ninga_listing </a>
      </Link>
    </nav>
  );
}

export default Navbar;
