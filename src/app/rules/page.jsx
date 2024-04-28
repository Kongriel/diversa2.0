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
      <div>
        <div>
          <h1>REGLER</h1>
          <p>blablablabla vi tester disse ting blabla</p>

          <button>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
