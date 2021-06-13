import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from './types'
import { getIsDropdownMenuVisible, getSelectedCompany } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import { DropdownMenu } from './DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean
  selectedCompany: Company | undefined
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void
}

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  selectedCompany,
}: ReduxProps & DispatchProps) => (
  <>
    <div
      role={'button'}
      aria-label={'Profile settings'}
      className="nav__link"
      onClick={toggleDropdownMenuVisibility}
      data-test-nav-link
    >
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">Elon Musk</div>

        <div className="nav__link-subtext">
          {selectedCompany && selectedCompany.name}
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">settings</i>
    </div>

    <DropdownMenu
      open={isDropdownMenuVisible}
      requestClose={toggleDropdownMenuVisibility}
    />
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompany: getSelectedCompany,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
