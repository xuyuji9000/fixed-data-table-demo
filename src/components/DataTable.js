import React from 'react'
import createReactClass from 'create-react-class'
import { Table, Column, Cell } from 'fixed-data-table'

const DataTable = createReactClass({
    render: function() {
        return (
            <Table
                rowsCount={50}
                rowHeight={50}
                width={1000}
                height={500}
            >
                <Column
                    cell={ <Cell>Basic Content</Cell> }
                    width={200}
                >
                </Column>
            </Table>
        )
    }
})

export default DataTable
