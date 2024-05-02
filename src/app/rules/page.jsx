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
          <ol className="p-4">
            {rulesList.map((rule, index) => (
              <li
                key={index}
                className="p-8 bg-white shadow-glass-1 hover:shadow-lg rounded-2xl mb-5 flex justify-between items-center	"
              >
                <p className="">{rule.name}</p>
                <Link
                  href={`rules/${rule.slug}`}
                  className="mt-4 sm:mt-0 sm:ml-6 px-5 py-3 text-base font-medium text-white transition-colors bg-blue-500 border border-transparent rounded-md shadow disabled:bg-blue-400 sm:w-auto sm:px-10 w-fit whitespace-nowrap"
                >
                  Read more
                </Link>
              </li>
            ))}
          </ol>

  <div className="flex justify-center m-4">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow justify-center">
          <Link href="/">Home</Link>
</button>
</div>
        </div>
      </div>
    </main>
  );
}
