import React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { store } from './modules/store'
import Index from '~/pages/index'
import jaJP from 'antd/es/locale/ja_JP'
import 'antd/dist/antd.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={jaJP}>
        <Index />
      </ConfigProvider>
    </Provider>
  )
}

export default App
