import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 text-center">
      <p className="text-gray-600">&#169; Diversa {currentYear}</p>
    </footer>
  );
}

export default Footer;
