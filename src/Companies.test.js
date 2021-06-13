import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { shallow } from 'enzyme'
import { Companies } from './Companies'
import { useId } from './lib/useId'

jest.mock('./lib/useId')

describe('<Companies />', () => {
  const companies = [
    { id: 1, name: 'Dummy company' },
    { id: 3, name: 'Smarty company' },
  ]

  it('renders list of company links', () => {
    useId.mockReturnValue('id')
    expect(shallow(<Companies companies={companies} />)).toMatchSnapshot()
  })

  it('shows heading', () => {
    const { getByText } = render(
      <Companies
        companies={companies}
        selectedCompanyId={null}
        setSelectedCompanyId={() => {}}
      />
    )

    expect(() => getByText(/Your companies/i)).not.toThrow()
  })

  it('render names of companies', () => {
    const { getByText } = render(
      <Companies
        companies={companies}
        selectedCompanyId={null}
        setSelectedCompanyId={() => {}}
      />
    )

    expect(() => getByText(/Dummy company/i)).not.toThrow()
    expect(() => getByText(/Smarty company/i)).not.toThrow()
  })

  it('active company should be marked as current', () => {
    const { getByRole } = render(
      <Companies
        companies={companies}
        selectedCompanyId={3}
        setSelectedCompanyId={() => {}}
      />
    )

    const el = getByRole('menuitem', { name: /Smarty company/i })
    expect(el.getAttribute('aria-current')).toEqual('true')
  })

  it('calls setSelectedCompanyId() function on click', () => {
    const mock = jest.fn()
    const { getByText } = render(
      <Companies
        companies={companies}
        selectedCompanyId={null}
        setSelectedCompanyId={mock}
      />
    )

    expect(mock).not.toHaveBeenCalled()
    userEvent.click(getByText('Smarty company'))
    expect(mock).toHaveBeenCalledWith(3)
  })
})
