import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <div>
        <h1> Test din Side</h1>

        <div></div>
        <p>blablbalbla</p>
      </div>

      <form action="/result" className="mt-4">
        <div></div>
        <label htmlFor="url" className="text-orange-700">
          Indtast URL:
        </label>
        <input type="url" name="url" id="url" className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-orange-500" />
        <button type="submit" className="mt-2 bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-600">
          Resultat
        </button>
      </form>
    </>
  );
}
