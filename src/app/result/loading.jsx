import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#fefefb" highlightColor="#ffea80">
      <div className="bg-brand-beige-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-brand-orange-70">
          <Skeleton height={30} width={200} />
        </h1>
        <p className="text-brand-orange-70">
          <Skeleton height={30} width={200} />
        </p>
        <p className="text-brand-orange-70">
          <Skeleton height={30} width={200} />
        </p>
        <p className="text-brand-orange-70">
          <Skeleton height={30} width={200} />
        </p>
        <Skeleton height={500} width={600} />
      </div>
    </SkeletonTheme>
  );
}
