"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <div className="bg-brand-beige-10 flex flex-col items-center justify-center h-screen">
      <div className="text-brand-orange-70 text-center">
        <Image src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" width={200} height={200} />
        <h1 className="text-4xl font-bold my-4">404 PAGE</h1>
        <p className="text-lg mb-2">The page you were looking for could not be found</p>
        <p className="text-lg">
          <Link href="/" className="text-brand-orange-70 underline">
            .....Back to previous page
          </Link>
        </p>
      </div>
    </div>
  );
}
