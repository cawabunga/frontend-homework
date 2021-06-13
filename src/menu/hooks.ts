import { useCallback, useContext } from 'react'
import { MenuContext } from './MenuContext'

export const useMenuItem = ({ onClick }: { onClick: () => void }) => {
  const { requestClose } = useContext(MenuContext)

  const handleClick = useCallback(() => {
    requestClose()
    onClick()
  }, [requestClose, onClick])

  return { onClick: handleClick }
}
