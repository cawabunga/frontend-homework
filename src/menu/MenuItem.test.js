import { render } from '@testing-library/react'
import { MenuItem } from './MenuItem'
import userEvent from '@testing-library/user-event'
import { useMenuItemDefaultHandler } from './hooks'

jest.mock('./hooks')

describe('<MenuItem />', () => {
  let defaultHandlerMock = jest.fn()

  beforeEach(() => {
    defaultHandlerMock = jest.fn()
    useMenuItemDefaultHandler.mockReturnValueOnce(defaultHandlerMock)
  })
  it('should render content as button', () => {
    const { getByRole } = render(<MenuItem>Foo</MenuItem>)

    expect(() => getByRole('button', { name: /foo/i })).not.toThrow()
  })

  it('should invoke onClick callback on clicking', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<MenuItem onClick={onClick}>Foo</MenuItem>)
    const button = getByRole('button')

    expect(onClick).not.toHaveBeenCalled()
    userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('should call default handler', () => {
    const { getByRole } = render(<MenuItem>Foo</MenuItem>)

    expect(defaultHandlerMock).not.toHaveBeenCalled()
    userEvent.click(getByRole('button'))
    expect(defaultHandlerMock).toHaveBeenCalled()
  })

  describe('with custom renderer', () => {
    it('allows to substitute render function', () => {
      const customRenderer = () => <>bar</>
      const { getByText } = render(<MenuItem render={customRenderer} />)
      expect(() => getByText('bar')).not.toThrow()
    })
  })
})
