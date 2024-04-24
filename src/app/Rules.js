import React from 'react'
import Link from 'next/link'

const Rules = () => {
  return (
    <>
    <h1>Rule overview</h1>
    <ol>
        <li> <Link to="/">Regl 1</Link></li>
        <li> <Link to="/">Regl 2</Link></li>
        <li> <Link to="/">Regl 3</Link></li>
        <li> <Link to="/">Regl 4</Link></li>
    </ol>
    </>
  )
}

export default Rules;
