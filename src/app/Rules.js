import React from "react";
import Link from "next/link";

const Rules = () => {
  return (
    <>
      <h1>Rule overview</h1>
      <ol>
        <li>
          {" "}
          <Link to="/rules/1">Regl 1</Link>
        </li>
        <li>
          {" "}
          <Link to="/rules/2">Regl 2</Link>
        </li>
        <li>
          {" "}
          <Link to="/rules/3">Regl 3</Link>
        </li>
        <li>
          {" "}
          <Link to="/rules/4">Regl 4</Link>
        </li>
      </ol>
    </>
  );
};

export default Rules;
