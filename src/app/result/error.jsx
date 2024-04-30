"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen -my-16">
      <div className=" text-center">
        <Image className="-mx-9" src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" width={250} height={250} />

        <h1 className="mb-6 text-9xl tracking-wider font-extrabold leading-none  text-center">404</h1>
        <p className="justify-center mx-auto text-xl font-normal leading-7 text-center  font-poppins">The page you were looking for could not be found</p>
        <p className="text-lg">
          <Link href="/" className="justify-center mx-auto text-xl font-normal leading-7 text-center  font-poppins underline">
            .....Back to previous page
          </Link>
        </p>
      </div>
    </div>
  );
}
