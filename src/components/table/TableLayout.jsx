import { flexRender } from "@tanstack/react-table";

import './Table.css'

export default function TableLayout({tableInstance, handleRowClick}) {
  const {
    getHeaderGroups,
    getRowModel,
   } = {...tableInstance};
  
    return (
      <table>
        <thead>
          {
            getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header =>
                    (<th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            getRowModel().rows.map(row => (
              <tr key={row.id} onClick={handleRowClick(row.original._id)}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }