import React, { ReactNode } from 'react'
import Header from '@/components/Header/Header'
import SideNav from '@/components/SideNav/SideNav'
import { MainContentWrapper } from './MainLayout.styles'

interface Props {
  children?: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return (
    <React.Fragment>
      <div className='wrapper d-flex align-items-stretch'>
        <SideNav />
        <main className='flex-grow-1 mw-100 overflow-auto min-vh-100'>
          <Header />
          <MainContentWrapper className='content mt-3 p-3'>{children}</MainContentWrapper>
        </main>
      </div>
    </React.Fragment>
  )
}
