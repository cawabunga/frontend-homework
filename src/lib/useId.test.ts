import { renderHook } from '@testing-library/react-hooks'
import { useId } from './useId'

describe('useId()', () => {
  it('generates uniq id', () => {
    const { result: result1 } = renderHook(() => useId())
    const { result: result2 } = renderHook(() => useId())

    expect(result1).not.toEqual(result2)
  })
})
