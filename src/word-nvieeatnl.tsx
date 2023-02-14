import React from 'react'

const style = {
  fontFamily: 'monospace',
  whiteSpace: 'break-spaces',
  wordBreak: 'break-all',
} as const

const text = [
  "############################",
  "##     ###  ####  ###    ###",
  "##  ###  ##  ##  ###  ##  ##",
  "##  ###  ###    ####      ##",
  "##  ###  ####  #####  ##  ##",
  "##     ######  #####  ##  ##",
  "############################",
].join('')

const HB = () => {
  return (
    <div>
      <div style={style}>{text}</div>
      <p>28*7=196</p>
      <p>word-___</p>
    </div>
  )
}

export default HB
