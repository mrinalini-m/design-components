import React from 'react'
import { AntDTable, MaterialTable, Links } from './components/tables'
import './App.css'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function App() {
  return (
    <div className='App' style={{ padding: '2rem' }}>
      <Typography variant='h4' gutterBottom>
        <Link href='https://ant.design/components/table/'>
          Ant Design Table
        </Link>
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        Uses <Link href='https://www.npmjs.com/package/rc-table'>rc-table</Link>{' '}
        as base
      </Typography>
      <AntDTable />
      <Typography variant='h4' gutterBottom>
        <Link href='https://github.com/mbrn/material-table'>
          Material Table
        </Link>
      </Typography>
      <MaterialTable />
      <Links />
    </div>
  )
}

export default App
