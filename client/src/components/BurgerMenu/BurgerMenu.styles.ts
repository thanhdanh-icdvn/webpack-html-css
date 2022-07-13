import theme from '@/theme'
import styled from 'styled-components'

export const StyledBurgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 60px;
  height: 46px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  background-color: ${theme.blue};
  border: 1px solid ${theme.blue};
  border-radius: ${theme.borderRadiusMedium};
  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: ${(props) => props.color || 'red'};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 19px;
    }
    &:nth-child(3) {
      top: 38px;
    }
  }
  &.open {
    span {
      &:nth-child(1) {
        top: 20px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        left: -30px;
      }
      &:nth-child(3) {
        top: 20px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }
`
