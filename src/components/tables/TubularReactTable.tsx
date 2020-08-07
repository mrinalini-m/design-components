import React from 'react'

import { DataGrid } from 'tubular-react'
import { createColumn } from 'tubular-common'

const columns = [
  createColumn('OrderID'),
  createColumn('CustomerName'),
  createColumn('ShipperCity'),
]

const SampleGrid = () => (
  <DataGrid
    columns={columns}
    dataSource={'https://tubular.azurewebsites.net/api/orders/paged'}
    gridName='Grid'
  />
)

export default SampleGrid
