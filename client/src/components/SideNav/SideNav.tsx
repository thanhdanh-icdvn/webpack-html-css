import { NavLink } from 'react-router-dom'
import { Footer, Logo, Menu, Nav } from './SideNav.style'
import { PATH } from '@/constants/paths'
import logo from '@/assets/images/logo.svg'
import { connect, ConnectedProps } from 'react-redux'
import { FiHome, FiUsers, FiPackage, FiPieChart } from 'react-icons/fi'
import { TbReportAnalytics } from 'react-icons/tb'
import ReactTooltip from '@huner2/react-tooltip'

const mapStateToProps = (state: AppState) => ({
  closeSideNav: state.app.closeSideNav
})

const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function SideNav(props: Props): JSX.Element {
  const { closeSideNav } = props
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
            <NavLink to={PATH.REPORT}>
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
              <span>Report</span>
            </NavLink>
          </li>
        </Menu>
      </div>
      <Footer className='nav-footer'>
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
