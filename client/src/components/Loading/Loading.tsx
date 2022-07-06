import { Fragment } from 'react'
import { COLOR } from '../../constants/styles'
import { StyledLoading } from './Loading.styles'

export default function Loading(): JSX.Element {
  return (
    <Fragment>
      <StyledLoading viewBox='0 0 50 50' fill={COLOR.BLUE}>
        <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='4' />
      </StyledLoading>
    </Fragment>
  )
}
