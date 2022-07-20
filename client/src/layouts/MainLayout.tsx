import React, { ReactNode } from 'react'
import Header from '@/components/Header/Header'
import SideNav from '@/components/SideNav/SideNav'

interface Props {
  children?: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return (
    <React.Fragment>
      <div className='wrapper d-flex align-items-stretch sticky-top'>
        <SideNav />
        <main className='flex-grow-1 mw-100 min-vh-100'>
          <Header />
          <div className='content mt-3'>{children}</div>
        </main>
      </div>
    </React.Fragment>
  )
}
