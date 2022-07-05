import React, { useState } from 'react'
import { Button } from './ScrollToTop.styles'
import { FaArrowCircleUp } from 'react-icons/fa'
interface ScrollToTopProps {
  scrollOffset?: number
}
export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollOffset = 300 }) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > scrollOffset) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)
  return (
    <Button>
      <FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  )
}
