import { Fragment, useState } from 'react'
import { StyledBurgerMenu } from './BurgerMenu.styles'

export const BurgerMenu = (): JSX.Element => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
  }
  return (
    <Fragment>
      <StyledBurgerMenu onClick={handleToggle} className={toggleOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </StyledBurgerMenu>
    </Fragment>
  )
}
