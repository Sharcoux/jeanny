import React from 'react'

const text = "word-drae"

const HB = () => {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') setCount(count => count + 1)
    })
    window.history.replaceState(undefined, '', text)
    window.history.pushState(undefined, '', 'word-dya')
    const changeLocation = () => window.location.replace(text)
    window.addEventListener('popstate', changeLocation)
    return () => window.removeEventListener('popstate', changeLocation)
  }, [])
  return (
    <div>
      <p>{text.substring(0, count)}</p>
      <p
        style={{
          fontSize: 16 + 5 * count,
        }}
      >
        Return
      </p>
    </div>
  )
}

export default HB
