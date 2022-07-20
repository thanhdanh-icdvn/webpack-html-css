import theme from '@/theme'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  background-color: ${theme.bg404};
  z-index: 0;
`

export const NotFoundLeft = styled.div``

export const NotFoundRight = styled.div`
  display: block;
  background-color: rgba(0, 0, 255, 0.2);
`
export const NotFoundTitle = styled.h2`
  font-size: 100px;
  font-weight: bold;
  color: ${theme.clr404};
  text-shadow: 4px 4px ${theme.clrOutline404};
`
export const NotFoundSubtitle = styled.h3`
  color: ${theme.clr404};
  font-size: 80px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 4px 4px ${theme.clrOutline404};
`

export const FlatButtonLink = styled(Link)`
  background-color: ${theme.clr404};
  display: inline-block;
  padding: 0.5rem 1.2rem;
  color: ${theme.bg404};
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
  transform: scale(1);
  transition: all 500ms ease-in-out;
  box-shadow: 3px 3px ${theme.clrOutline404};
  :hover {
    color: ${theme.bg404};
    box-shadow: 6px 6px ${theme.clrOutline404};
  }
`
