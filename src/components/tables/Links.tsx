import React from 'react'
import { Link, Card, List, ListItem } from '@material-ui/core'

const Links = () => {
  return (
    <Card style={{ textAlign: 'left', padding: '2rem' }}>
      <h2 id='table-examples'>Table Examples</h2>
      <List>
        <ListItem>
          <Link href='https://gumdrops.gumgum.com/?path=/docs/mListecules-table--default'>
            gumdrops.gumgum storybook example
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://ant.design/components/table/'>
            And Design Table
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/'>
            react bootstrap table
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://react-table.tanstack.com/docs/examples/basic'>
            react-table - hooks
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://github.com/unosquare/tubular-react#datagrid'>
            Tubular-react async data fetch
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://github.com/gregnb/mui-datatables#usage'>
            MUI-Datatables
          </Link>
        </ListItem>
      </List>
    </Card>
  )
}

export default Links
