import { useTable } from 'react-table'
import React from 'react'

const Reacttable = () => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
  ]

  const data = [
    {
      name: 'Ayaan',
      age: 26,
      email: 'ayaan@gmail.com',
      city: 'Colombo',
    },
    {
      name: 'Ahana',
      age: 22,
      email: 'ahana@gmail.com',
      city: 'Kandy',
    },
    {
      name: 'Peter',
      age: 40,
      email: 'peter@gmail.com',
      city: 'California',
    },
    {
      name: 'Virat',
      age: 30,
      email: 'virat@gmail.com',
      city: 'Chennai',
    },
    {
      name: 'Rohit',
      age: 32,
      email: 'rohit@gmail.com',
      city: 'New Delhi',
    },
    {
      name: 'Dhoni',
      age: 37,
      email: 'dhoni@gmail.com',
      city: 'Hydrabad',
    },
  ]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table style={{ margin: '0 auto' }} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Reacttable
