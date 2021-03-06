import { NavLink, useNavigate } from 'react-router-dom'
import { ButtonLink, Footer, Logo, Menu, Nav } from './SideNav.style'
import { PATH } from '@/constants/paths'
import logo from '@/assets/images/logo.svg'
import { connect, ConnectedProps } from 'react-redux'
import {
  FiHome,
  FiUsers,
  FiPackage,
  FiPieChart,
  FiFolder,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'
import { TbReportAnalytics } from 'react-icons/tb'
import ReactTooltip from '@huner2/react-tooltip'
import { useEffect } from 'react'
import { logout } from '@/App/App.actions'

const mapStateToProps = (state: AppState) => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {
  logout
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function SideNav(props: Props): JSX.Element {
  const { closeSideNav, logout } = props
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate(PATH.LOGIN)
  }
  useEffect(() => undefined, [navigate])
  return (
    <Nav className={closeSideNav ? 'close' : ''}>
      <div className='nav-top'>
        <h1>
          <Logo to={PATH.HOME} className='text-white'>
            <img src={logo} alt='Logo' srcSet={logo} />
          </Logo>
        </h1>
        <Menu className='list-unstyled mb-5'>
          <li>
            <NavLink to={PATH.HOME}>
              <FiHome data-for='home-tooltip' data-tip='' />
              <ReactTooltip
                id='home-tooltip'
                effect='float'
                globalEventOff='mouseleave'
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Home'}
              </ReactTooltip>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.USERS}>
              <FiUsers data-for='users-tooltip' data-tip='' />
              <ReactTooltip
                id='users-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Users'}
              </ReactTooltip>
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.PRODUCTS}>
              <FiPackage data-for='products-tooltip' data-tip='' />
              <ReactTooltip
                id='products-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Products'}
              </ReactTooltip>
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.STATISTICAL}>
              <FiPieChart data-for='statistical-tooltip' data-tip='' />
              <ReactTooltip
                id='statistical-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Statistical'}
              </ReactTooltip>
              <span>Statistical</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.REPORTS}>
              <TbReportAnalytics data-for='reports-tooltip' data-tip='' />
              <ReactTooltip
                id='reports-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Reports'}
              </ReactTooltip>
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.FILE_MANAGER}>
              <FiFolder data-for='file-manger-tooltip' data-tip='' />
              <ReactTooltip
                id='file-manger-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'File manger'}
              </ReactTooltip>
              <span>File manger</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.SETTINGS}>
              <FiSettings data-for='settings-tooltip' data-tip='' />
              <ReactTooltip
                id='settings-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Settings'}
              </ReactTooltip>
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <ButtonLink onClick={handleLogout}>
              <FiLogOut data-for='logout-tooltip' data-tip='' />
              <ReactTooltip
                id='logout-tooltip'
                effect='float'
                globalEventOff=''
                event='mouseenter'
                eventOff='mouseleave'
              >
                {'Logout'}
              </ReactTooltip>
              <span>Logout</span>
            </ButtonLink>
          </li>
        </Menu>
      </div>
      <Footer className='nav-footer'>
        <p>
          Copyright ??{new Date().getFullYear()} All rights reserved | This template is made by{' '}
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
