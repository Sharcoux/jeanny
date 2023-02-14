import React from 'react'
import fireworks from './assets/fireworks.gif'
import bothOfUs from './assets/both-of-us.jpg'
import heart from './assets/heart.svg'

const HB = () => {
  return (
    <div>
      <img alt='' src={fireworks} style={{ width: '100%' }}/>
      <div style={{ position: 'relative' }}>
        <img alt='' src={bothOfUs} style={{ width: '100%' }}/>
        <img alt='' src={heart} style={{ width: '40%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}/>
      </div>
    </div>
  )
}

export default HB
