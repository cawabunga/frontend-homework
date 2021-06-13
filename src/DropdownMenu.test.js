import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'
import DropdownMenu from './DropdownMenu'

describe('<DropdownMenu />', () => {
  it('renders menu', () => {
    const { getByRole } = render(
      <DropdownMenu open={true} requestClose={() => {}} />,
      { wrapper: withStore(store) }
    )

    expect(() => getByRole('menu')).not.toThrow()
  })
})

const withStore =
  (store) =>
  ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
