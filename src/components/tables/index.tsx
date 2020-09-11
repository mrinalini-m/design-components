import React from 'react'
import { default as AntDTable } from './AntDTable'
import { default as MaterialTable } from './MaterialTable'
import { default as Links } from './Links'
import { default as MaterialUITable } from './MaterialUITable'
import { default as TubularReactTable } from './TubularReactTable'
import { default as Reacttable } from './Reacttable'
import { default as RCTable } from './RC-Table'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    padding: {
      padding: '2rem',
    },
    paddingBottom: {
      paddingBottom: '1rem',
    },
  })
)

const Tables = () => {
  const classes = useStyles()
  return (
    <div>
      <div>
        <Typography variant='h3' gutterBottom>
          Table Demos
        </Typography>
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom>
          <Link href='https://ant.design/components/table/'>
            Ant Design Table
          </Link>
        </Typography>
      </div>
      <div className={classes.padding}>
        <Typography variant='subtitle2' gutterBottom>
          Uses{' '}
          <Link href='https://www.npmjs.com/package/rc-table'>rc-table</Link> as
          base
        </Typography>
        <AntDTable />
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom>
          <Link href='https://github.com/mbrn/material-table'>
            Material Table
          </Link>
        </Typography>
        <MaterialTable />
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom>
          <Link href='https://material-ui.com/components/tables/'>
            Material UI Table
          </Link>
        </Typography>
        <MaterialUITable />
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom>
          <Link href='https://github.com/unosquare/tubular-react'>
            Tubular React Table
          </Link>
        </Typography>
        <TubularReactTable />
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom className={classes.paddingBottom}>
          <Link href='https://www.npmjs.com/package/rc-table'>RCTable</Link>
        </Typography>
        <RCTable />
      </div>
      <div className={classes.padding}>
        <Typography variant='h4' gutterBottom className={classes.paddingBottom}>
          <Link href='https://www.npmjs.com/package/react-table'>
            Reacttable
          </Link>
        </Typography>
        <Reacttable />
      </div>
      <Links />
    </div>
  )
}

export default Tables
