import React from "react"
import Paragraphs from "./paragraphs"

const Hero = ({text}) => {
  return (
    <div className="hero">
      <Paragraphs text={text} className="hero-text" />
    </div>
  )
}

export default Hero
