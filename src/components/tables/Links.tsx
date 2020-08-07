import React from 'react'
import { Link, Card } from '@material-ui/core'

const Links = () => {
  return (
    <Card style={{ textAlign: 'left', padding: '2rem', marginTop: '2rem' }}>
      <h2 id='table-examples'>Table References</h2>
      <ol>
        <li>
          <Link href='https://gumdrops.gumgum.com/?path=/docs/molecules-table--default'>
            gumdrops.gumgum storybook example
          </Link>
        </li>
        <li>
          <Link href='https://ant.design/components/table/'>
            And Design Table
          </Link>
        </li>
        <li>
          <Link href='https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/'>
            react bootstrap table
          </Link>
        </li>
        <li>
          <Link href='https://react-table.tanstack.com/docs/examples/basic'>
            react-table - hooks
          </Link>
        </li>
        <li>
          <Link href='https://github.com/unosquare/tubular-react#datagrid'>
            Tubular-react async data fetch
          </Link>
        </li>
        <li>
          <Link href='https://github.com/gregnb/mui-datatables#usage'>
            MUI-Datatables
          </Link>
        </li>
      </ol>
    </Card>
  )
}

export default Links
