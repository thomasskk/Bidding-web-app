import { useEffect, useState } from 'react'

const ClickOutsideListener = (ref:any, initialState:any, callback = () => {}) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = (e:any) => {
      if (ref.current !== null && ref.current !== e.target) {
        callback()
        setIsActive(!isActive)
      }
    }

    isActive && window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [callback, isActive, ref])

  return [isActive, setIsActive]
}

export default ClickOutsideListener
