import { MailOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import React from 'react'

export interface EmailItemProps {
  name?: string
  label?: string
  prefix?: React.ReactNode
}

export const EmailItem: React.FC<EmailItemProps> = ({
  name,
  label,
  prefix,
}) => {
  return (
    <Form.Item
      name={name ? name : 'email'}
      label={label}
      rules={[
        { required: true, message: 'メールアドレスを入力してください。' },
        { type: 'email', message: '有効なメールアドレスではありません。' },
      ]}
    >
      <Input
        prefix={prefix !== undefined ? prefix : <MailOutlined />}
        placeholder="example@mail.com"
      />
    </Form.Item>
  )
}
