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
  useStyles()
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to='/table'>Tables</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/tree'>Trees</Link>
        </Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default CustomHeader
