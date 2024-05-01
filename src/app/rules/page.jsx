import React from "react";
import Link from "next/link";
import rulesData from "./json/rules.json";

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);

  // Convert the rules object into an array of objects
  const rulesList = Object.entries(rulesData).map(([slug, rule]) => ({
    slug,
    name: rule.headline
  }));

  return (
    <main>
      <div>
        <div>
          <h1>REGLER</h1>
          <h2>Oversigt over de regler der testes for</h2>
          <ol className="border border-gray-300 p-4">
            {/* Map through rulesList to display each rule */}
            {rulesList.map((rule, index) => (
              <li key={index} className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl">
                <Link href={`rules/${rule.slug}`}>{rule.name}</Link>
              </li>
            ))}
          </ol>

          <button>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
