# react

`version: 18`

## hooks

- useState

  ```jsx
  const [count, setCount] = useState(0)
  console.log(count) // 0
  setCount(1)
  console.log(count) // 1
  ```

- useEffect

  ```jsx
  useEffect(() => {
    // 组件渲染完成后执行
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      // 返回一个清理函数, 组件卸载时执行
      clearInterval(timer)
    }
  }, [])
  ```

- useRef

  ```jsx
  const inputElement = useRef(null)
  useEffect(() => inputElement.current.focus(), [])
  return <input type="text" ref={inputElement} />
  ```
