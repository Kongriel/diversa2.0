import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="text-center px-4 py-10 mx-auto sm:w-3/4 lg:w-2/3 xl:w-2/5 sm:p-10 md:rounded">
        <h1 className="mb-6 text-6xl font-extrabold leading-none tracking-tight text-center">
          Diversa Accessibility App
        </h1>
        <h2 className="justify-center mx-auto text-xl font-normal leading-7 text-center  font-poppins">
          Ready to take the first step towards creating a more accessible web?
        </h2>
      </div>

      <div className=" px-6 my-4 mx-auto sm:w-3/4 lg:w-2/3 xl:w-2/5 sm:px-14 py-7 rounded-xl shadow-glass-1 bg-white bg-opacity-20 ">
        <form action="/result" className=" gap-3 py-10 flex">
          <label htmlFor="url" className="text-farve-text sr-only">
            Enter URL:
          </label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://www.yourwebsite.com"
            className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 transition-colors border  border-blue-200 rounded-md shadow-sm disabled:bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-600 "
          />
          <button
            type="submit"
            className=" w-full px-5 py-3 text-base font-medium text-white transition-colors bg-blue-500 border border-transparent rounded-md shadow disabled:bg-blue-400 sm:w-48 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:px-10 "
          >
            Check
          </button>
        </form>
      </div>
    </main>
  );
}
