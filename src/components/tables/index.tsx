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
import Title from '../common/Title'
import DemoSection from '../common/DemoSection'

const Tables = () => {
  return (
    <>
      <Title>Table Demos</Title>
      <DemoSection
        href='https://ant.design/components/table/'
        linkText='Ant Design Table'
      >
        <Typography variant='subtitle2' gutterBottom>
          Uses{' '}
          <Link href='https://www.npmjs.com/package/rc-table'>rc-table</Link> as
          base
        </Typography>
        <AntDTable />
      </DemoSection>
      <DemoSection
        href='https://github.com/mbrn/material-table'
        linkText='Material Table'
      >
        <MaterialTable />
      </DemoSection>
      <DemoSection
        href='https://material-ui.com/components/tables/'
        linkText='Material UI Table'
      >
        <MaterialUITable />
      </DemoSection>
      <DemoSection
        href='https://github.com/unosquare/tubular-react'
        linkText='Tubular React Table'
      >
        <TubularReactTable />
      </DemoSection>
      <DemoSection
        href='https://www.npmjs.com/package/rc-table'
        linkText='RCTable'
      >
        <RCTable />
      </DemoSection>
      <DemoSection
        href='https://www.npmjs.com/package/react-table'
        linkText='Reacttable'
      >
        <Reacttable />
      </DemoSection>
      <Links />
    </>
  )
}

export default Tables
