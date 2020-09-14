import React from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const { Header } = Layout

const useStyles = createUseStyles({
  '@global': {
    'ul.ant-menu.ant-menu-dark.ant-menu-root.ant-menu-horizontal': {
      textAlign: 'center',
    },
  },
})

const CustomHeader = () => {
  const selectedKey =
    window.location.pathname === '/'
      ? 'table'
      : window.location.pathname.slice(1)

  useStyles()
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[selectedKey]}>
        <Menu.Item key='table'>
          <Link to='/table'>Tables</Link>
        </Menu.Item>
        <Menu.Item key='tree'>
          <Link to='/tree'>Trees</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default CustomHeader
