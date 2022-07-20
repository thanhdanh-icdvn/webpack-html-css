import { connect, ConnectedProps } from 'react-redux'
import { logout, toggleSideNav } from '@/App/App.actions'
import { useNavigate } from 'react-router-dom'
import {
  HeaderRight,
  LogoutIcon,
  MenuToogleButton,
  ProfileAvatar,
  SearchBox,
  SearchBoxWrapper
} from './Header.style'
import { PATH } from '@/constants/paths'
import React, { useEffect, useState } from 'react'
import { FiMenu, FiLogOut } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import DefaultAvatar from '@/assets/images/default_avatar.png'
const mapStateToProps = (state: AppState) => ({
  closeSideNav: state.app.closeSideNav,
  profile: { name: 'user', avatar: '' }
})

const mapDispatchToProps = {
  logout,
  toggleSideNav
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const Header: React.FC<Props> = (props: Props): JSX.Element => {
  const { logout, toggleSideNav, closeSideNav } = props
  const navigate = useNavigate()
  const [iconSize] = useState(25)
  const handleLogout = () => {
    logout()
    navigate(PATH.LOGIN)
  }
  useEffect(() => undefined, [navigate])

  return (
    <header className='d-flex bg-light justify-content-between p-3 shadow-sm sticky-top'>
      {closeSideNav ? (
        <MenuToogleButton className='btn btn-primary' onClick={toggleSideNav}>
          <FiMenu fontSize={iconSize} />
        </MenuToogleButton>
      ) : (
        <MenuToogleButton className='btn btn-primary' onClick={toggleSideNav}>
          <AiOutlineClose fontSize={iconSize} />
        </MenuToogleButton>
      )}
      <SearchBoxWrapper>
        <SearchBox className='h__search-box' placeholder='Type to search' />
        <AiOutlineSearch />
      </SearchBoxWrapper>
      <HeaderRight className='header--right'>
        <ProfileAvatar className='mx-3' src={DefaultAvatar} alt='Avatar'></ProfileAvatar>
        <LogoutIcon onClick={handleLogout} className='btn btn-outline-secondary btn-logout'>
          <FiLogOut />
          Logout
        </LogoutIcon>
      </HeaderRight>
    </header>
  )
}

export default connector(Header)
