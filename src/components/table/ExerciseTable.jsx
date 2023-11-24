import { useMemo } from "react";
import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table'
import TableLayout from "./TableLayout";

export default function ExericseTable({ tableData }) {
    console.log('tableData: ', tableData);

    const [columns, data] = useMemo(() => {
        const columnHelper = createColumnHelper();
        
        const columns = [
            columnHelper.accessor('name', {
                header: () => 'Name',
            }),
            columnHelper.accessor('info', {
                header: () => 'Info',
            }),
            columnHelper.accessor('muscleGroups', {
                header: () => 'Muscle Groups',
            }),
            columnHelper.accessor('privacy', {
                header: () => 'Privacy',
            }),
            columnHelper.accessor('experienceLevel', {
                header: () => 'Experience Level',
            }),
            columnHelper.accessor('exerciseGroups', {
                header: () => 'Exercise groups',
                cell: ({getValue}) => { console.log(getValue()) },
            }),
        ];
        return [columns, tableData]
    }, [tableData]);
    
    const tableInstance = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

    return <TableLayout {...tableInstance}/>

}