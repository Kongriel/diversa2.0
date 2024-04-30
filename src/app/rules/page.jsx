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
          <h2>Oversigt over de regler der testes for</h2>
          <ul className="border border-gray-300 p-4">
            <li className="">
              <Link href="rules/landmark-no-duplicate-banner">landmark-no-duplicate-banner</Link>
            </li>
            <li>
              <Link href="rules/landmark-complementary-is-top-level">landmark-complementary-is-top-level</Link>
            </li>
            <li>
              <Link href="rules/label-title-only">label-title-only</Link>
            </li>
            <li>
              <Link href="rules/aria-dialog-name">aria-dialog-name</Link>
            </li>
            <li>
              <Link href="rules/landmark-unique">landmark-unique</Link>
            </li>
            <li>
              <Link href="rules/image-redundant-alt">image-redundant-alt</Link>
            </li>
            <li>
              <Link href="rules/page-has-heading-one">page-has-heading-one</Link>
            </li>
            <li>
              <Link href="rules/heading-order">heading-order</Link>
            </li>
            <li>
              <Link href="rules/empty-heading">empty-heading</Link>
            </li>
            <li>
              <Link href="rules/region">region</Link>
            </li>
            <li>
              <Link href="rules/tabindex">tabindex</Link>
            </li>
            <li>
              <Link href="rules/landmark-one-main">landmark-one-main</Link>
            </li>
          </ul>

          <button>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
