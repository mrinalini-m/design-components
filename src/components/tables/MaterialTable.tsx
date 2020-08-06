import React from 'react'
import MaterialTable, { Column } from 'material-table'

interface Row {
  name: string
  surname: string
  birthYear: number
  birthCity: number
}

interface TableState {
  columns: Array<Column<Row>>
  data: Row[]
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: {
          0: 'San Francisco',
          1: 'Sunnyvale',
          2: 'San Jose',
          3: 'Mars',
        },
      },
    ],
    data: [
      {
        name: 'Lorem',
        surname: 'Ipsum',
        birthYear: 1987,
        birthCity: 0,
      },
      {
        name: 'Testo',
        surname: 'Noname',
        birthYear: 1945,
        birthCity: 1,
      },
      {
        name: 'Fake',
        surname: 'Notebook',
        birthYear: 1977,
        birthCity: 2,
      },
      {
        name: 'Random',
        surname: 'Person',
        birthYear: 1900,
        birthCity: 3,
      },
      {
        name: 'Dolor',
        surname: 'Amet',
        birthYear: 2000,
        birthCity: 0,
      },
      {
        name: 'Perspiciatis',
        surname: 'Omnis',
        birthYear: 1990,
        birthCity: 2,
      },
      {
        name: 'Consectetur',
        surname: 'Adipiscing',
        birthYear: 1998,
        birthCity: 0,
      },
    ],
  })

  return (
    <MaterialTable
      style={{ marginBottom: '3rem' }}
      title='Editable Example'
      columns={state.columns}
      options={{
        filtering: true,
      }}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve()
              setState((prevState) => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          }),
      }}
    />
  )
}
