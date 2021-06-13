import { render } from '@testing-library/react'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import userEvent from '@testing-library/user-event'

describe('<Menu />', () => {
  it('renders menu', () => {
    const { getByRole } = render(<Menu open={true} requestClose={() => {}} />)
    expect(() => getByRole('menu')).not.toThrow()
  })
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
