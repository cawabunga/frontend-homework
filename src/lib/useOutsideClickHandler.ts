import { RefObject, useEffect } from 'react'

export const useOutsideClickHandler = (
  ref: RefObject<Element>,
  handler: (event: Event) => void,
  capture: boolean = false
) => {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const listener = (event: Event) => {
      if (!(event.target instanceof Node && el.contains(event.target))) {
        handler(event)
      }
    }

    document.addEventListener('click', listener, capture)

    return () => {
      document.removeEventListener('click', listener, capture)
    }
  }, [capture, handler, ref])
}
