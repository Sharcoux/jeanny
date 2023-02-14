import React from 'react';
import './App.css';
import Ypahp from './word-ypahp'
import Drae from './word-drae'
import Roma from './word-roma'
import TheEnd from "./happy-valentine's-day-dear-amor"
import Dya from './word-dya'
import Nvieeatnl from "./word-nvieeatnl"

function App() {
  const url = window.location.pathname
  console.log(url)
  switch(url) {
    case '/word-ypahp': return <Ypahp />
    case "/word-nvieeatnl": return <Nvieeatnl />
    case '/word-dya': return <Dya />
    case '/word-drae': return <Drae />
    case '/word-roma': return <Roma />
    case "/happy-valentine's-day-dear-amor": return <TheEnd />
    default: {
      window.location.href = '/welcome.html'
      return null
    }
  }
}

export default App;
