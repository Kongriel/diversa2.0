import React from 'react';
import Link from 'next/link';

const Rules = () => {
  return (
    <>
      <h1>Rule Overview</h1>
      <ol>
        <li><Link href="/rules/1">Rule 1</Link></li>
        <li><Link href="/rules/2">Rule 2</Link></li>
        <li><Link href="/rules/3">Rule 3</Link></li>
        <li><Link href="/rules/4">Rule 4</Link></li>
      </ol>
    </>
  );
};

export default Rules;