import React, { FC, useState } from 'react'
import { Tree } from 'antd'
import {
  ApartmentOutlined,
  SafetyCertificateOutlined,
  SafetyCertificateFilled,
  AmazonOutlined,
  DownOutlined,
  SettingOutlined,
  SettingFilled,
} from '@ant-design/icons'
import { createUseStyles } from 'react-jss'

type IconArg = { checked: boolean }

const treeData = [
  {
    title: 'AWS',
    key: '0',
    icon: <AmazonOutlined />,
    children: [
      {
        key: '0-1',
        title: 'Security',
        icon: ({ checked }: IconArg) =>
          checked ? <SafetyCertificateFilled /> : <SafetyCertificateOutlined />,
        children: [
          { key: '0-1-2', title: 'Prod Account', icon: <ApartmentOutlined /> },
          { key: '0-1-3', title: 'Dev Account', icon: <ApartmentOutlined /> },
        ],
      },
      {
        key: '0-4',
        title: 'Infrastructure',
        icon: ({ checked }: IconArg) =>
          checked ? <SettingFilled /> : <SettingOutlined />,
        children: [
          { key: '0-4-5', title: 'Prod Account', icon: <ApartmentOutlined /> },
          { key: '0-4-6', title: 'Dev Account', icon: <ApartmentOutlined /> },
          { key: '0-4-7', title: 'Test Account', icon: <ApartmentOutlined /> },
        ],
      },
    ],
  },
]

const useStyles = createUseStyles({
  tree: {
    padding: '1rem',
  },
  treeWrapper: {
    margin: '0 auto',
    textAlign: 'left',
    width: '300px',
  },
})

interface TreeProps {
  transformScale?: number
}

const AndDTree: FC<TreeProps> = ({ transformScale }: TreeProps) => {
  const [checkedKeys, setCheckedKeys] = useState(['0-1-2', '0-4-5'])
  // const [checkedKeys, setCheckedKeys] = useState({
  //   '0-1-2': true,
  //   '0-4-5': true,
  // })

  const classes = useStyles()

  const onSelect = (
    selectedKeys: any[],
    info: { event: string; node: any; selected: boolean; selectedNodes: any[] }
  ) => {
    console.log('selected', selectedKeys, info)
    // setCheckedKeys(selectedKeys)
  }

  const onCheck = (checked: any, info: any) => {
    setCheckedKeys(checked)
    console.log('checked', checked, info)
  }

  const transformStyle = transformScale
    ? { transform: `scale(${transformScale})`, transformOrigin: 'top center' }
    : {}

  return (
    <div className={classes.treeWrapper} style={transformStyle}>
      <Tree
        checkedKeys={checkedKeys}
        // checkedKeys={Object.keys(checkedKeys)}
        onCheck={onCheck}
        onSelect={onSelect}
        className={classes.tree}
        blockNode
        checkable
        showIcon
        defaultExpandAll
        // defaultCheckedKeys={['0-1-2', '0-4-5']}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
      />
    </div>
  )
}

export default AndDTree
