import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CompanyLink from './CompanyLink'

describe('<CompanyLink />', () => {
  const company = { id: 1, name: 'Dummy company' }

  it(`renders company's name as button`, () => {
    const { getByRole } = render(<CompanyLink company={company} />)
    expect(() => getByRole('button', { name: 'Dummy company' })).not.toThrow()
  })

  it('invokes onClick callback on click', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <CompanyLink company={company} onClick={onClick} />
    )
    expect(onClick).not.toHaveBeenCalled()
    userEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
