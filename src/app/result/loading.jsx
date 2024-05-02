import React from "react";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="white" highlightColor="#ddeffe">
      <main className="items-center justify-center my-6">
        <form action="" className="gap-2 flex justify-center my-6">
          <div className="rounded-full overflow-hidden mb-6" style={{ width: "345px" }}>
            <Skeleton className="shadow-glass-1" width={345} height={48} />
          </div>
        </form>

        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-center">
          <Skeleton className="shadow-glass-1" width={600} height={55} />
        </h1>

        <div className="flex py-0 shadow-glass-1 bg-white bg-opacity-60 rounded-3xl items-center mx-12 flex-wrap gap-20 justify-between p-8 skeleton-loading">
          <div className="rounded-lg overflow-hidden" style={{ width: "420px", height: "420px" }}>
            <Skeleton className="w-full h-full" />
          </div>

          <div className="flex flex-col justify-between" style={{ width: "420px" }}>
            <Skeleton className="mb-1" width={420} height={20} count={2} />
            <Skeleton className="mb-1" width={420} height={20} />
            <Skeleton className="mb-1" width={420} height={20} />
            <Skeleton className="mb-1" width={420} height={20} />
            <Skeleton className="mb-1" width={420} height={20} />
          </div>

          <div className="rounded-full overflow-hidden" style={{ width: "150px", height: "150px" }}>
            <Skeleton height={500} />
          </div>
        </div>
      </main>
    </SkeletonTheme>
  );
}
