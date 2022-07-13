import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BREAKPOINT, COLOR } from '@/constants/styles'

export const Footer = styled.div`
  padding: 0 30px;
  margin-top: auto;
`

export const Menu = styled.ul`
  padding: 0;
  transition: 0.3s;
  li {
    font-size: 16px;
    > a {
      padding: 10px 30px;
      display: flex;
      align-items: center;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      text-decoration: none;
      svg,
      img {
        width: 20px;
        height: auto;
        display: inline-block;
        margin-right: 10px;
        flex-shrink: 0;
      }
      &.active {
        background: ${COLOR.BLUE};
      }
    }
  }
`
export const Nav = styled.nav`
  min-width: 270px;
  max-width: 270px;
  background: #3e64ff;
  color: #fff;
  transition: all 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  &.close {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    ${Menu} {
      li > a span {
        display: none;
      }
    }
    ${Footer} {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINT.MD - 1}px) {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    ${Menu} {
      li > a span {
        display: none;
      }
    }
    ${Footer} {
      display: none;
    }
    &.close {
      margin-left: -80px;
    }
  }
`

export const Logo = styled(Link)`
  display: block;
  color: #fff;
  font-weight: 900;
  padding: 10px 30px;
  transition: 0.3s;
  img {
    max-width: 100%;
    height: auto;
    background-repeat: no-repeat;
    object-fit: cover;
  }
`
