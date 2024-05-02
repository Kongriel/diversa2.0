import React from "react";
import Link from "next/link";
import rulesData from "./json/rules.json";

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();
  console.log(response);

  //JSON to array
  const rulesList = Object.entries(rulesData).map(([slug, rule]) => ({
    slug,
    name: rule.headline,
  }));

  return (
    <main>
      <div>
        <div>
          <h1 className="mt-5 mb-6 text-6xl font-extrabold leading-none tracking-tight text-center">
            Rules
          </h1>
          <h2 className="justify-center mx-auto mb-5 text-xl font-normal leading-7 text-center  font-poppins">
            Overview of the rules being tested
          </h2>
          <ol className="border border-gray-300 p-4">
            {rulesList.map((rule, index) => (
              <li
                key={index}
                className="mb-2 text-2xl font-extrabold leading-none  p-6 rounded-xl"
              >
                <Link href={`rules/${rule.slug}`}>{rule.name}</Link>
              </li>
            ))}
          </ol>

          <button>
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
