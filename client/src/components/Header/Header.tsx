import { connect, ConnectedProps } from 'react-redux'
import { logout, toggleSideNav } from '../../App/App.actions'
import { useNavigate } from 'react-router-dom'
import { LogoutIcon, MenuToogleButton } from './Header.style'
import { PATH } from '../../constants/paths'
import { useEffect, useState } from 'react'
import { FiMenu, FiLogOut } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const mapStateToProps = (state: AppState) => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {
  logout,
  toggleSideNav
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const Header = (props: Props) => {
  const { logout, toggleSideNav, closeSideNav } = props
  const navigate = useNavigate()
  const [iconSize] = useState(25)
  const handleLogout = () => {
    logout()
    navigate(PATH.LOGIN)
  }
  useEffect(() => undefined, [navigate])

  return (
    <header className='d-flex bg-light justify-content-between p-3 shadow-sm'>
      {closeSideNav ? (
        <MenuToogleButton className='btn btn-primary' onClick={toggleSideNav}>
          <FiMenu fontSize={iconSize} />
        </MenuToogleButton>
      ) : (
        <MenuToogleButton className='btn btn-primary' onClick={toggleSideNav}>
          <AiOutlineClose fontSize={iconSize} />
        </MenuToogleButton>
      )}
      <LogoutIcon onClick={handleLogout} className='btn btn-outline-secondary'>
        <FiLogOut />
        Logout
      </LogoutIcon>
    </header>
  )
}

export default connector(Header)
