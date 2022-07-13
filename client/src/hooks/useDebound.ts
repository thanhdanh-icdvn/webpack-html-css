import { useState, useEffect } from 'react'
/**
 * Hook debounce value
 * @param value value need debound
 * @param delay Delay value (ms). Default is 500
 * @returns debouncedValue
 */
function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debouncedValue
}
export default useDebounce
