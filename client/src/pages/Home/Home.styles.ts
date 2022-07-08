import styled from 'styled-components'
import theme from '../../theme'
export const HomeWrapper = styled.div`
  .button {
    font-weight: ${theme.fontSizeMedium};
    font-size: ${theme.fontSizeMedium};
    line-height: 1.5;
    border-radius: ${theme.borderRadiusMedium};
    padding: 0.375rem 0.75rem;
    border: 1px solid transparent;
    ${theme.transitionFade()}
    :hover {
      opacity: 0.8;
    }
  }
  .button--primary {
    /* Sử dụng blue, white từ _variables.js */
    background: ${theme.blue};
    border-color: ${theme.blue};
    color: ${theme.white};
    /* Sử dụng transitionFade từ _mixin.js */
    ${theme.transitionFade()}
  }

  .button--secondary {
    background: ${theme.grey};
    border-color: ${theme.grey};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .button--success {
    background: ${theme.green};
    border-color: ${theme.green};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .button--danger {
    background: ${theme.red};
    border-color: ${theme.red};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .button--warning {
    background: ${theme.yellow};
    border-color: ${theme.yellow};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }

  .button--info {
    background: ${theme.blueInfo};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }

  .button--dark {
    background: ${theme.blackDark};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }

  .button-outline {
    background-color: ${theme.white};
    border: 1px solid ${theme.grey};
    :hover {
      background-color: ${theme.grey};
      color: ${theme.white};
    }
  }
  .button-outline--primary {
    background-color: ${theme.white};
    border: 1px solid ${theme.blue};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.blue};
      color: ${theme.white};
    }
  }
  .button-outline--info {
    background-color: ${theme.white};
    border: 1px solid ${theme.blueInfo};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.blueInfo};
      color: ${theme.white};
    }
  }
  .button-outline--success {
    background-color: ${theme.white};
    border: 1px solid ${theme.green};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.green};
      color: ${theme.white};
    }
  }
  .button-outline--danger {
    background-color: ${theme.white};
    border: 1px solid ${theme.red};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.red};
      color: ${theme.white};
    }
  }
  .button-outline--warning {
    background-color: ${theme.white};
    border: 1px solid ${theme.orange};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.orange};
      color: ${theme.white};
    }
  }
  .button-outline--dark {
    background-color: ${theme.white};
    border: 1px solid ${theme.blackDark};
    ${theme.transitionFade()}
    :hover {
      background-color: ${theme.blackDark};
      color: ${theme.white};
    }
  }
`
