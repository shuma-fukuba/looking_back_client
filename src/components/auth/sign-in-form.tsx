import { css } from '@emotion/react'
import { unwrapResult } from '@reduxjs/toolkit'
import { Form, message } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '~/modules/features/auth/authSlice'

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
}
