import { render } from '@testing-library/react'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import userEvent from '@testing-library/user-event'

describe('<Menu />', () => {
  it('should not render menu if it is closed', () => {
    const { getByRole } = render(<Menu open={false} requestClose={() => {}} />)
    expect(() => getByRole('menu')).toThrow()
  })

  it('renders menu', () => {
    const { getByRole } = render(<Menu open={true} requestClose={() => {}} />)
    expect(() => getByRole('menu')).not.toThrow()
  })

  describe('Menu with items', () => {
    it('should invoke requestClose() when menu item is clicked', () => {
      const requestClose = jest.fn()
      const { queryByText } = render(
        <Menu open={true} requestClose={requestClose}>
          <MenuItem>dummy menu item</MenuItem>
        </Menu>
      )

      expect(requestClose).not.toHaveBeenCalled()
      userEvent.click(queryByText('dummy menu item'))
      expect(requestClose).toHaveBeenCalled()
    })

    it('should invoke requestClose() even onClick is specified', () => {
      const requestClose = jest.fn()
      const onClick = jest.fn()
      const { queryByText } = render(
        <Menu open={true} requestClose={requestClose}>
          <MenuItem onClick={onClick}>dummy menu item</MenuItem>
        </Menu>
      )

      expect(requestClose).not.toHaveBeenCalled()
      expect(onClick).not.toHaveBeenCalled()
      userEvent.click(queryByText('dummy menu item'))
      expect(requestClose).toHaveBeenCalled()
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('Clicking outside', () => {
    it('should invoke requestClose() on clicking outside elements', () => {
      const requestClose = jest.fn()
      const { getByRole, rerender } = render(
        <>
          <button>hide</button>
          <Menu open={false} requestClose={requestClose}>
            <MenuItem>dummy menu item</MenuItem>
          </Menu>
        </>
      )

      rerender(
        <>
          <button>hide</button>
          <Menu open={true} requestClose={requestClose}>
            <MenuItem>dummy menu item</MenuItem>
          </Menu>
        </>
      )

      expect(requestClose).not.toHaveBeenCalled()
      userEvent.click(getByRole('button', { name: 'hide' }))
      expect(requestClose).toHaveBeenCalled()
    })
  })
})
