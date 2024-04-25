import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  return (
    <main className="bg-brand-beige-10 flex flex-col items-center justify-center ">
      <div className="text-center">
        <h1 className="text-brand-orange-70"> Test din Side</h1>
        <p className="text-brand-orange-70">blablbalbla</p>
      </div>

      <form action="/result" className="mt-4">
        <div></div>
        <label htmlFor="url" className="text-orange-700">
          Indtast URL:
        </label>
        <input type="url" name="url" id="url" placeholder="www.yourwebsite.com" className="border border-gray-300 rounded-md px-3 py-2 w-64 text-brand-orange-70 placeholder-orange-70 focus:outline-none focus:border-orange-500" />
        {/* Adjusted width to w-64 */}
        <button type="submit" className="mt-2 bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-600">
          Resultat
        </button>
      </form>
    </main>
  );
}
