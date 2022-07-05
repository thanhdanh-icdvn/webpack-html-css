import { NavLink } from 'react-router-dom'
import { Footer, Logo, Menu, Nav } from './SideNav.style'
import { PATH } from '../../constants/paths'
import home from '../../assets/images/home.svg'
import list from '../../assets/images/list.svg'
import logo from '../../assets/images/logo.svg'
import users from '../../assets/images/users.svg'
import { connect, ConnectedProps } from 'react-redux'

const mapStateToProps = (state: AppState) => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function SideNav(props: Props) {
  const { closeSideNav } = props
  return (
    <Nav className={closeSideNav ? 'close' : ''}>
      <h1>
        <Logo to={PATH.HOME} className='text-white'>
          <img src={logo} alt='Logo' srcSet={logo} />
        </Logo>
      </h1>
      <Menu className='list-unstyled mb-5'>
        <li>
          <NavLink to={PATH.HOME}>
            <img src={home} alt='' />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.USERS}>
            <img src={users} alt='' />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.PRODUCTS}>
            <img src={list} alt='' />
            <span>Products</span>
          </NavLink>
        </li>
      </Menu>
      <Footer>
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | This template is made by{' '}
          <a
            href='https://github.com/thanhdanh-icdvn'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 text-white'
          >
            Thanhd
          </a>
        </p>
      </Footer>
    </Nav>
  )
}

export default connector(SideNav)
