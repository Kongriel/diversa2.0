import React from "react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main className="bg-brand-beige-10 flex flex-col items-center justify-center h-screen">
      <h1 className="text-brand-orange-70">Report for {data.url}</h1>
      <p className="text-brand-orange-70">{data.description}</p>
      <p className="text-brand-orange-70">Found {data.violations.length} issues</p>
      <p className="text-brand-orange-70"> Found {data.incomplete.length} incomplete issues</p>
      <p className="text-brand-orange-70"> Found {data.tags}</p>
      <Image
        alt={data.url}
        src={data.screenshot.url}
        width={data.screenshot.width}
        height={data.screenshot.height}
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
      />
    </main>
  );
}
