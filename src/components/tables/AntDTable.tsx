/* eslint-disable */
import { Table, Tag, Space, Radio, Divider } from 'antd'
import { ColumnsType } from 'antd/es/table'

import React, { useState } from 'react'
interface User {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record: Record<string, any>) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}
const AntDTable = () => {
  const [selectionType, setSelectionType] = useState<
    'checkbox' | 'radio' | undefined
  >('checkbox')

  const columns: ColumnsType<User> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a href='#'>{text}</a>,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: { [propName: string]: any }) => (
        <Space size='middle'>
          <a href='#'>Invite {record.name}</a>
          <a href='#'>Delete</a>
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },

    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Test Person',
      age: 2,
      address: '123 Random Destination Some City',
      tags: ['happy', 'product manager'],
    },
    {
      key: '5',
      name: 'Lorem Random',
      age: 10,
      address: '234 Mission St, San Francisco',
      tags: ['CEO'],
    },
  ]

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}
      >
        <Radio value='checkbox'>Checkbox</Radio>
        <Radio value='radio'>radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        style={{ padding: '1rem' }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default AntDTable
