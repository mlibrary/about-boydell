import React from "react"

const Paragraphs = ({text, className}) => {
  const paragraphs = (text || "")
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)

  return paragraphs.map((p, i) => <p key={i} className={className}>{p}</p>)
}

export default Paragraphs