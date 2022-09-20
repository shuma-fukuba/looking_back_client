import Modal from 'antd/lib/modal/Modal'
import React from 'react'
import { SignInForm } from '~/components/auth/sign-in-form'

interface Props {}

const SignIn: React.FC<Props> = () => {
  return (
    <Modal footer={null} closable={false} centered title={'Sign In'}>
      <SignInForm />
    </Modal>
  )
}

export default SignIn
