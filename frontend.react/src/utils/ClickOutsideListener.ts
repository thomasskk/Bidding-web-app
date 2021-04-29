import { useEffect, useState } from 'react'

const ClickOutsideListener = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  initialState: boolean,
  callback = () => {
    null
  }
): [boolean, React.Dispatch<boolean>] => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
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
