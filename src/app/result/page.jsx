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
    <main>
      <h1>Report for {data.url}</h1>
      <p>{data.description}</p>
      <p>Found {data.violations.length} issues</p>
      <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
    </main>
  );
}
