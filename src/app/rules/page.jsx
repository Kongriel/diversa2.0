import React from "react";
import Link from "next/link";
import rulesData from "./json/rules.json";

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch("https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}");
  const data = await response.json();
  console.log(response);

  //JSON to array
  const rulesList = Object.entries(rulesData).map(([slug, rule]) => ({
    slug,
    name: rule.title,
  }));

  return (
    <main>
      <div>
        <div>
          <h1 className="mt-5 mb-6 text-6xl font-extrabold leading-none tracking-tight text-center">Rules</h1>
          <h2 className="justify-center mx-auto mb-5 text-xl font-normal leading-7 text-center  font-poppins">Overview of the rules being tested</h2>
          <ol className="p-4 flex flex-col items-center">
            {rulesList.map((rule, index) => (
              <li
                key={index}
                className="p-8 bg-white shadow-glass-1 hover:shadow-md rounded-2xl mb-5 flex justify-between items-center sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
                style={{ width: "100%", maxWidth: "40rem" }} // Adjust the max-width as needed
              >
                <p className="flex-grow text-2xl font-poppins ">{rule.name}</p>
                <Link href={`rules/${rule.slug}`} className="mt-4 sm:mt-0 sm:ml-6 px-5 py-3 text-base font-medium text-white transition-colors bg-blue-500 border border-transparent rounded-md shadow disabled:bg-blue-400 sm:w-auto sm:px-10 w-fit whitespace-nowrap">
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
