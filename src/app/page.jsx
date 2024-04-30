import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  return (
    <main className="bg-farve-1 flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-brand-orange-70  text-5xl font-libreBaskerville"> Test din Side</h1>
        <p className="text-brand-orange-70  text-2xl font-poppins">blablbalbla</p>
      </div>

      <form action="/result" className="mt-4">
        <div></div>
        <label htmlFor="url" className="text-farve-text">
          Indtast URL:
        </label>
        <input type="url" name="url" id="url" placeholder="https://www.yourwebsite.com" className="border border-gray-300 rounded-md px-3 py-2 w-64 text-farve-text placeholder-farve-text focus:outline-none focus:border-farve-text" />

        <button type="submit" className="mt-2 bg-farve-text text-white py-2 px-4 rounded-md hover:bg-farve-text">
          Resultat
        </button>
      </form>
      <p className="text-brand-orange-70  text-1xl font-poppins">By generating a comprehensive accessibility report with Diversa, you'll gain valuable insights into areas where your website excels and where improvements can be made. Our user-friendly interface and actionable recommendations make it easy for you to implement necessary changes and enhance the accessibility of your website.</p>
    </main>
  );
}
