import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuItem } from './MenuItem'
import { MenuProvider } from './MenuProvider'

describe('<MenuItem />', () => {
  it('should render content as menu item', () => {
    const { getByRole } = render(<MenuItem>Foo</MenuItem>)

    expect(() => getByRole('menuitem', { name: /foo/i })).not.toThrow()
  })

  it('should invoke onClick callback on clicking', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<MenuItem onClick={onClick}>Foo</MenuItem>)
    const button = getByRole('menuitem')

    expect(onClick).not.toHaveBeenCalled()
    userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('should call requestClose() from the context', () => {
    const fn = jest.fn()
    const { getByRole } = render(<MenuItem>Foo</MenuItem>, {
      wrapper: ({ children }) => (
        <MenuProvider requestClose={fn} children={children} />
      ),
    })

    expect(fn).not.toHaveBeenCalled()
    userEvent.click(getByRole('menuitem'))
    expect(fn).toHaveBeenCalled()
  })

  describe('with custom renderer', () => {
    it('allows to substitute render function', () => {
      const customRenderer = () => <>bar</>
      const { getByText } = render(<MenuItem render={customRenderer} />)
      expect(() => getByText('bar')).not.toThrow()
    })
  })
})
