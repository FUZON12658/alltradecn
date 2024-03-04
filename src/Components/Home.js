import React from 'react'
import NameSection from './NameSection'
import RandomProductDisplay from './RandomProductDisplay'

export default function Home() {
  return (
    <>
      <NameSection />
      <h2 className="exploreOurProducts">Explore Our Products</h2>
      <RandomProductDisplay />
    </>
  )
}