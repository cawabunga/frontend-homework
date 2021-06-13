import { useEffect } from 'react'

export const useOutsideClickHandler = (
  targetEl: Element | null,
  handler: (event: Event) => void,
  capture: boolean = false
) => {
  useEffect(() => {
    if (!targetEl) return

    const listener = (event: Event) => {
      if (!(event.target instanceof Node && targetEl.contains(event.target))) {
        handler(event)
      }
    }

    document.addEventListener('click', listener, capture)

    return () => {
      document.removeEventListener('click', listener, capture)
    }
  }, [capture, handler, targetEl])
}
