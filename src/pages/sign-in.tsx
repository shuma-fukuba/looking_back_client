import { Layout, Space } from 'antd'
import { css } from '@emotion/react'
import React from 'react'
import { SignInForm } from '~/components/auth/sign-in-form'
import { Content } from 'antd/lib/layout/layout'

interface Props {}

const SignIn: React.FC<Props> = () => {
  return (
      <Content css={LoginStyle}>
        <SignInForm />
      </Content>
  )
}

const LoginStyle = css`
  min-height: 100vh;
  margin-top: 30px;
`

export default SignIn
