import { useContext, useMemo } from "react";
import { createColumnHelper, useReactTable, getCoreRowModel } from '@tanstack/react-table'

import TableLayout from "./TableLayout";
import {EditContext} from "../../context/EditContext";
import {WORKOUTS} from '../../constants/entities';

export default function WorkoutTable({ tableData }) {
    const { showEditingPanel } = useContext(EditContext);

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
        ];
        return [columns, tableData]
    }, [tableData]);
    
    const tableInstance = useReactTable({ 
        columns, 
        data, 
        getCoreRowModel: getCoreRowModel(),
    })

    const handleRowClick = (id) => () =>  { showEditingPanel(WORKOUTS, id) }

    return <TableLayout 
        tableInstance={tableInstance} 
        handleRowClick={handleRowClick} 
    />

}