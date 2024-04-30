import React from "react";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="white" highlightColor="#ddeffe">
      <div className="flex flex-col items-center justify-center h-screen -my-16">
        <div className="text-center">
          <div className="rounded-full overflow-hidden mb-6" style={{ marginLeft: "-250px" }}>
            <Skeleton className="shadow-glass-1" circle width={170} height={170} />
          </div>
          <h1 className="mb-6 text-9xl tracking-wider font-extrabold leading-none text-center">
            <Skeleton className="shadow-glass-1" width={250} height={150} />
          </h1>
          <p className="justify-center mx-auto text-xl font-normal leading-7 text-center font-poppins">
            <Skeleton className="shadow-glass-1" width={420} />
          </p>
          <p className="text-lg">
            <Skeleton className="shadow-glass-1" width={250} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
}
