import styled from 'styled-components'
export const Button = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 5rem;
  right: 5rem;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: blue;
  transition: transform 500ms ease-in;
  transform-origin: center;

  :hover {
    transform: scale(1.1);
  }
`
