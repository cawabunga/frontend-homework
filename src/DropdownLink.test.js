import { shallow } from 'enzyme'
import { getByText, render } from '@testing-library/react'
import { DropdownLink } from './DropdownLink'

describe('<DropdownLink />', () => {
  const toggleDropdownMenuVisibilityMock = jest.fn()

  const shallowRender = (props) =>
    shallow(
      <DropdownLink
        toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
        selectedCompany={{ id: 1, name: 'Viljatootja AS' }}
        {...props}
      />
    )

  it('renders without dropdown menu', () => {
    expect(shallowRender({ isDropdownMenuVisible: false })).toMatchSnapshot()
  })

  it('renders with dropdown menu', () => {
    expect(shallowRender({ isDropdownMenuVisible: true })).toMatchSnapshot()
  })

  it('calls toggleDropdownMenuVisibility when nav link is clicked', () => {
    const component = shallowRender({ isDropdownMenuVisible: false })
    component.find('[data-test-nav-link]').simulate('click')

    expect(toggleDropdownMenuVisibilityMock).toHaveBeenCalled()
  })

  it('shows selected company name inside menu opener', () => {
    const { getByRole } = render(
      <DropdownLink
        isDropdownMenuVisible={false}
        selectedCompany={{ id: 1, name: 'Foo' }}
        toggleDropdownMenuVisibility={() => {}}
      />
    )
    const button = getByRole('button', { name: /profile/i })
    expect(() => getByText(button, 'Foo')).not.toThrow()
  })
})
