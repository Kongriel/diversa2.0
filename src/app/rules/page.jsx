import React from "react";
import Link from "next/link";
import rulesData from "./json/rules.json";

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);

  const rulesList = Object.entries(rulesData).map(([slug, rule]) => ({
    slug,
    name: rule.headline,
  }));

  return (
    <main>
      <div>
        <div>
          <h1>REGLER</h1>
          <h2>Oversigt over de regler der testes for</h2>
          <ol className="border border-gray-300 p-4">
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/landmark-no-duplicate-banner">landmark-no-duplicate-banner</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/landmark-complementary-is-top-level">landmark-complementary-is-top-level</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/label-title-only">label-title-only</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/aria-dialog-name">aria-dialog-name</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/landmark-unique">landmark-unique</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/image-redundant-alt">image-redundant-alt</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/page-has-heading-one">page-has-heading-one</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/heading-order">heading-order</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/empty-heading">empty-heading</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/region">region</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/tabindex">tabindex</Link>
            </li>
            <li className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
              <Link href="rules/landmark-one-main">landmark-one-main</Link>
            </li>
          </ol>

          <button>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
