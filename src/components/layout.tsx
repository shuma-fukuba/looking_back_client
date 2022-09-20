import { css } from '@emotion/react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout as AntLayout, Breadcrumb, Menu } from 'antd'
import { useState } from 'react'

const { Header, Content, Footer, Sider } = AntLayout

type MenuItem = Required<MenuProps>['items'][number]

interface Props {
  children: React.ReactNode
}

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
)=> {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

const Layout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <AntLayout css={ContentStyle}>
      {/* <SideMenu /> */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" css={LogoStyle} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <AntLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
            css={BackGroundStyle}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </AntLayout>
    </AntLayout>
  )
}

const ContentStyle = css`
  background-color: #000;
  min-height: 100vh;
`

const LogoStyle = css`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const BackGroundStyle = css`
  background: #fff;
`

export default Layout
