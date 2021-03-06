import theme from '@/theme'
import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 1rem;
`
export const LoginButton = styled.button`
  display: inline-block;
  align-items: center;
  width: 100%;
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`
export const StyledSocialButton = styled.div`
  svg {
    flex-shrink: 0;
    vertical-align: middle;
    width: 30px;
    height: 30px;
  }
  .google-btn,
  .facebook-btn,
  .github-btn,
  .microsoft-btn {
    display: block;
    width: 100%;
    &__wrapper {
      border: 1px solid ${theme.grey};
      background-color: ${theme.white};
      border-radius: 4px;
      padding: 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      flex: 1;
    }
    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      margin-left: 10px;
    }
  }
`
