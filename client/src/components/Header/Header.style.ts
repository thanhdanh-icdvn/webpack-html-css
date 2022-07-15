import { BREAKPOINT } from '@/constants/styles'
import styled from 'styled-components'
import theme from '@/theme'

export const MenuToogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    vertical-align: middle;
  }
`
export const LogoutIcon = styled.span`
  display: flex;
  align-items: center;
  svg,
  img {
    margin-right: 5px;
    vertical-align: middle;
  }
`

export const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: ${theme.grey};
  margin: 0px 10px 0px 10px;
  flex: 1;
  max-width: 80%;
  @media (max-width: ${BREAKPOINT.MD - 1}px) {
    max-width: 50%;
  }
  svg {
    display: flex;
    vertical-align: middle;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
    border: 1px solid ${theme.blue};
    border-radius: 0px 8px 8px 0px;
    color: white;
    background-color: ${theme.blue};
    :hover {
      filter: brightness(85%);
    }
  }
`
export const SearchBox = styled.input`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  border: 1px solid ${theme.grey};
  overflow: hidden;
  border-radius: 8px 0px 0px 8px;
  border-right-color: ${theme.blue};
  width: calc(100%) - 30px;
  transition: width 500ms ease;
  flex: 1;
  :focus {
    outline: none;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileAvatar = styled.img`
  background-color: ${theme.blue};
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    background-image: ${(props) => {
      return props.src
    }};
    color: ${(props) => {
      return props.color || 'white'
    }};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
