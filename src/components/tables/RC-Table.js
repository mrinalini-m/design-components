import Table from 'rc-table'
import React from 'react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Married',
    dataIndex: 'married',
    key: 'married',
    width: 200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href='/'>Delete</a>,
  },
]

const data = [
  { name: 'Esto', age: 28, address: 'some where', key: '1', married: 'false' },
  { name: 'Rose', age: 36, address: 'some where', key: '2', married: 'true' },
]

const RCTable = () => {
  return <Table columns={columns} data={data} />
}

export default RCTable
