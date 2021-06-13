import { render } from '@testing-library/react'
import { MenuList } from './MenuList'

describe('<MenuList />', () => {
  it('renders children as a group', () => {
    const { getByRole, getByText } = render(
      <MenuList spacing={0}>
        <div>foo</div>
        <div>bar</div>
      </MenuList>
    )

    expect(() => getByRole('group')).not.toThrow()
    expect(() => getByText('foo')).not.toThrow()
  })
})
