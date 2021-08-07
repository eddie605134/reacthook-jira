import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {

  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    // 每次value變化後，設置一個定時器
    const timeout = setTimeout(() => setDebounceValue(value), delay)

    // 上一次的useEffect結束後執行的操作
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}