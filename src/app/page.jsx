import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  return (
    <main className="bg-brand-beige-10 flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-brand-orange-70  text-5xl font-libreBaskerville">Welcome to our Diversa accessibility app</h1>
        <h2 className="text-brand-orange-70  text-2xl font-poppins">Ready to take the first step towards creating a more accessible web? Start your journey with Diversa today and ensure your website meets the highest standards of inclusivity.</h2>
      </div>

      <form action="/result" className="mt-4">
        <div></div>
        <label htmlFor="url" className="text-orange-700">
          Indtast URL:
        </label>
        <input type="url" name="url" id="url" placeholder="https://www.yourwebsite.com" className="border border-gray-300 rounded-md px-3 py-2 w-64 text-brand-orange-70 placeholder-orange-70 focus:outline-none focus:border-orange-500" />

        <button type="submit" className="mt-2 bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-600">
          Resultat
        </button>
      </form>
      <p className="text-brand-orange-70  text-1xl font-poppins">By generating a comprehensive accessibility report with Diversa, you'll gain valuable insights into areas where your website excels and where improvements can be made. Our user-friendly interface and actionable recommendations make it easy for you to implement necessary changes and enhance the accessibility of your website.</p>
    </main>
  );
}
