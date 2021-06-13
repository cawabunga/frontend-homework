import { renderHook } from '@testing-library/react-hooks'
import { useOutsideClickHandler } from './useOutsideClickHandler'
import userEvent from '@testing-library/user-event'

describe('useOutsideClickHandler()', () => {
  it('should invoke callback when click is performed on an outside element', () => {
    const target = document.createElement('div')
    const callback = jest.fn()
    renderHook(() => useOutsideClickHandler(target, callback, false))

    expect(callback).not.toHaveBeenCalled()
    userEvent.click(target)
    expect(callback).not.toHaveBeenCalled()
    userEvent.click(document.body)
    expect(callback).toHaveBeenCalled()
  })

  it('should not attach listeners if reference is empty', () => {
    const callback = jest.fn()
    renderHook(() => useOutsideClickHandler(null, callback, false))

    userEvent.click(document.body)
    expect(callback).not.toHaveBeenCalled()
  })
})
