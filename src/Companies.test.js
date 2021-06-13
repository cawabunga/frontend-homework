import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { shallow } from 'enzyme'
import { Companies } from './Companies'
import { useId } from './lib/useId'

jest.mock('./lib/useId')

describe('<Companies />', () => {
  const companies = [
    { id: 1, name: 'Dummy company' },
    { id: 2, name: 'Smarty company' },
  ]

  it('renders list of company links', () => {
    useId.mockReturnValue('id')
    expect(shallow(<Companies companies={companies} />)).toMatchSnapshot()
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
    expect(mock).toHaveBeenCalledWith(2)
  })
})
