import React from 'react'
import clsx from 'clsx'
import {
  AntDTable,
  MaterialTable,
  MaterialUITable,
  TubularReactTable,
  Links,
} from './components/tables'
import './App.css'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddingBottom: {
      paddingBottom: '3rem',
    },
    padding: {
      padding: '2rem',
    },
    paddingTop: {
      paddingTop: '4rem',
    },
  })
)

function App() {
  const classes = useStyles()
  return (
    <div className={clsx(classes.paddingTop, classes.padding, 'App')}>
      <Typography variant='h3' gutterBottom>
        Table Demos
      </Typography>
      <Typography variant='h4' gutterBottom className={classes.paddingTop}>
        <Link href='https://ant.design/components/table/'>
          Ant Design Table
        </Link>
      </Typography>
      <Typography
        variant='subtitle2'
        className={classes.paddingBottom}
        gutterBottom
      >
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
      <Typography variant='h4' gutterBottom>
        <Link href='https://material-ui.com/components/tables/'>
          Material UI Table
        </Link>
      </Typography>
      <MaterialUITable />
      <Typography variant='h4' gutterBottom>
        <Link href='https://github.com/unosquare/tubular-react'>
          Tubular React Table
        </Link>
      </Typography>
      <TubularReactTable />
      <Links />
    </div>
  )
}

export default App
