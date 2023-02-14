import React from 'react'
import fireworks from './assets/fireworks.gif'
import bothOfUs from './assets/both-of-us.jpg'
import heart from './assets/heart.svg'

const style = {
  fontFamily: 'monospace',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  display: 'block',
  padding: '2em',
  fontSize: '2em'
} as const

const poem = `
Jeune Jeanne, belle et charmante,
Aux yeux clairs, au sourire ensorcelant,
Un coeur pur, une âme candide,
Ses rêves pleins d'espoir, son avenir radieux.

Son corps gracieux, son allure élancée,
Comme un oiseau, elle s'envole aisément,
Au vent qui souffle, elle se laisse emporter,
Loin du monde, loin des tourments.

Mais parfois, la vie peut être cruelle,
Et Jeanne doit faire face à l'adversité,
Avec courage et détermination,
Elle se dresse fière, le regard ferme.

Car Jeanne sait que la force est en elle,
Et que rien ne peut l'arrêter,
Elle avance, sans jamais se décourager,
Vers son destin, vers son bonheur.

Ainsi, Jeanne brille, telle une étoile,
Dans le ciel sombre, elle éclaire la nuit,
Et chacun, qui la croise, ne peut que l'admirer,
Pour son courage, sa beauté, sa lumière.

                    Signé : Chat GPT`

const HB = () => {
  return (
    <div>
      <img alt='' src={fireworks} style={{ width: '100%' }}/>
      <div style={{ position: 'relative' }}>
        <img alt='' src={bothOfUs} style={{ width: '100%' }}/>
        <img alt='' src={heart} style={{ width: '40%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}/>
      </div>
      <code style={style}>{poem}</code>
    </div>
  )
}

export default HB
