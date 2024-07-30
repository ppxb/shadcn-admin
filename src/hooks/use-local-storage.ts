import { useEffect, useState } from 'react'

interface LocalstorageProps<T> {
  key: string
  defaultValue: T
}

export function useLocalStorage<T>({ key, defaultValue }: LocalstorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue) as T
      }
      catch {
        return defaultValue
      }
    }
    return defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
