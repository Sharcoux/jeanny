import React from 'react'

const list = [78,101,120,116,32,115,116,101,112,32,105,115,32,97,116]

const list2 = [119,111,114,100,45,95,95,95,97]

const HB = () => {
  return (
    <p style={{fontFamily: "monospace", whiteSpace: 'pre'}}>
      <b>KeyCode:</b> {list.join(', ')}<br/><br/>
      <b>      ?:</b> 41.898296667271644, 12.494176313559551<br/><br/>
      <b>KeyCode:</b> {list2.join(', ')}<br/>
    </p>
  )
}

export default HB
