import { LockOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import React from 'react'

export const PasswordItem: React.FC = () => {
  return (
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'パスワードを入力してください。',
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="パスワード"
        autoComplete="off"
      />
    </Form.Item>
  )
}
