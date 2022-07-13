import { BREAKPOINT } from '@/constants/styles'
import styled from 'styled-components'
export const Button = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 5rem;
  right: 5rem;
  font-size: 3rem;
  z-index: 1200;
  cursor: pointer;
  color: ${(props) => props.color || 'blue'};
  transition: transform 500ms ease-in;
  transform-origin: center;

  :hover {
    transform: scale(1.1);
  }
  @media (max-width: ${BREAKPOINT.MD - 1}px) {
    width: 3rem;
    height: 3rem;
    bottom: 2rem;
    right: 2rem;
    font-size: 1.5rem;
  }
`
