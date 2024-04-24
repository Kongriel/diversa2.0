import React from 'react'
import Link from 'next/link'

const Rules = () => {
  return (
    <>
    <h1>Rule overview</h1>
    <ol>
        <li> <Link to="/rules/1">Regl 1</Link></li>
        <li> <Link to="/rules/2">Regl 2</Link></li>
        <li> <Link to="/rules/3">Regl 3</Link></li>
        <li> <Link to="/rules/4">Regl 4</Link></li>
    </ol>
    </>
  )
}

export default Rules;

//Forklaring
// Hvert link peger til en dynamisk route hvor ruleID er specificeret i URL'en
// Når et link klikkes navigeres brugeren til den relaterede description page
// Denne side fungerer som en main page hvor brugeren kan se en liste over de forskellige regler
