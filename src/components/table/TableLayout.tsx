import { flexRender, Table, Row } from '@tanstack/react-table';

import './Table.css';

export default function TableLayout<Type>({
  tableInstance,
  handleRowClick,
}: {
  tableInstance: Table<Type>;
  handleRowClick: (
    event: React.MouseEvent<Element, MouseEvent>,
    row: Row<Type>
  ) => void;
}) {
  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <table>
      <thead>
        {getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={(e) => {
              handleRowClick(e, row);
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
