import React from 'react'
import { css } from '@emotion/react'
import { Button as AntButton, ButtonProps } from 'antd'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

export interface Props extends ButtonProps {
  color: 'gray' | 'white' | 'blue' | 'none' | 'danger'
  text: string
  icon?: EmotionJSX.Element
}

const Button = React.forwardRef<HTMLElement, Props>(
  ({ color, text, icon, ...rest }, ref) => {
    return (
      <AntButton css={[OverrideAntStyle, ButtonColorStyles[color]]} {...rest}>
        <div css={ButtonStyle}>
          {icon && <span css={ButtonIconStyle}>{icon}</span>}
          <span css={ButtonTextStyle}>{text}</span>
        </div>
      </AntButton>
    )
  }
)

const OverrideAntStyle = css`
  padding-top: 0.01px !important;
  line-height: 30px !important;
`

const ButtonStyle = css`
  display: flex;
  align-items: center;
`

const ButtonTextStyle = css`
  font-size: 15px;
`

const ButtonIconStyle = css`
  font-size: 20px;
  margin-right: 5px;
  display: flex;
`

const ButtonColorStyles = {
  gray: css`
    background: #a1a1a1;
    border-color: #a1a1a1;
    color: #fff;
    :hover,
    :active,
    :focus {
      background: #333;
      border-color: #333;
      color: #fff;
    }
  `,
  white: css`
    background: #fff;
    border-color: #005c8f;
    color: #005c8f;
    :hover,
    :active,
    :focus {
      background: #005c8f;
      border-color: #005c8f;
      color: #fff;
    }
  `,
  blue: css`
    background: #005c8f;
    border-color: #005c8f;
    color: #fff;
    :hover,
    :active,
    :focus {
      background-color: #0077bb;
      border-color: #0077bb;
      color: #fff;
    }
  `,
  none: css`
    background-color: transparent;
    border-color: transparent;
    color: #000;
    :hover,
    :active,
    :focus {
      background-color: transparent;
      border-color: transparent;
      color: #000;
    }
  `,
  danger: css`
    background-color: #ff7d7d;
    border-color: #ff7d7d;
    color: #fff;
    :hover,
    :active,
    :focus {
      background-color: #ff7d7d;
      border-color: #ff7d7d;
      color: #fff;
    }
  `,
}

export default Button
