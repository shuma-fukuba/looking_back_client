import { css } from '@emotion/react'
import { unwrapResult } from '@reduxjs/toolkit'
import { Form, message } from 'antd'
import React, { useCallback } from 'react'
import { signIn } from '~/modules/features/auth/authSlice'
import { EmailItem } from '../moleculus/form-item/email'
import { PasswordItem } from '../moleculus/form-item/password'
import Button from '~/components/atoms/button'
import { useDispatch } from '~/hooks/redux'

export const SignInForm: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (values: { email: string; password: string }) => {
      dispatch(signIn({ email: values.email, password: values.password }))
        .then(unwrapResult)
        .then(() => {
          message.success('サインインしました')
        })
        .catch(() => {
          message.error('メールアドレス・パスワードが一致しません。')
        })
    },
    [dispatch]
  )

  return (
    <Form
      onFinish={handleSubmit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    >
      <EmailItem />
      <PasswordItem />
      <Button text="Sign In" htmlType="submit" color="blue" />
    </Form>
  )
}
