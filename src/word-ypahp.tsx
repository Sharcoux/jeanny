import React from 'react'

const sequence = "nvieeatnl"
const positions = [57, 72, 17, 88, 23, 66, 42, 92, 19, 89, 11]
const area = (' '.repeat(10) + '\n').repeat(10)
const style = {
  fontFamily: 'monospace',
  whiteSpace: 'break-spaces',
  wordBreak: 'break-all',
  display: 'inline-block',
  border: '1px solid black',
} as const

const HB = () => {
  const [count, setCount] = React.useState(0)
  const [snake, setSnake] = React.useState([30, 31])
  const [dir, setDir] = React.useState('Right')
  React.useEffect(() => {
    window.addEventListener('keydown', e => {
      const [, dir] = e.key?.split('Arrow')
      if (dir) setDir(dir)
    })
  }, [])

  const win = count > 10

  const reset = React.useCallback(() => {
    setSnake([30, 31])
    setCount(0)
    setDir('Right')
  }, [])

  const nextStep = React.useCallback(() => {
    if (win) return
    const copy = [...snake]
    let head = snake[snake.length - 1]
    switch (dir) {
      case 'Up':
        head -= 10
        if (head < 0) head += 100
        break
      case 'Down':
        head += 10
        if (head >= 100) head -= 100
        break
      case 'Left':
        head -= 1
        if (head % 10 === 9 || head < 0) head += 10
        break
      case 'Right':
        head += 1
        if (head % 10 === 0) head -= 10
        break
    }
    head === positions[count] ? setCount(count => count + 1) : copy.shift()
    if (copy.includes(head)) return reset()
    copy.push(head)
    setSnake(copy)
  }, [count, dir, reset, snake, win])

  const nextStepRef = React.useRef(nextStep)
  nextStepRef.current = nextStep

  React.useEffect(() => {
    const interval = setInterval(() => nextStepRef.current(), 500)
    return () => clearInterval(interval)
  }, [])

  const frame = React.useMemo(() => {
    if (win) return ''
    const lines = area.split('\n')
    const copy = [...snake]
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const head = copy.pop()!
    const replace = (index: number, char: string) => {
      const asText = index === 0 ? '00' : index < 10 ? '0' + index : index.toString()
      const [line, col] = asText.split('').map(int => Number.parseInt(int))
      lines[line] = lines[line].substring(0, col) + char + lines[line].substring(col + 1)
    }
    replace(positions[count], sequence[count])
    replace(head, 'O')
    copy.forEach(index => replace(index, '#'))
    return lines.join('\n')
  }, [count, snake, win])

  return count < 11 ? (
    <div style={style}>
      <span>{frame}</span>
    </div>
  ) : (
    <div>
      <h1>YOU WIN</h1>
      <button type='button' onClick={reset}>
        New game
      </button>
    </div>
  )
}

export default HB
