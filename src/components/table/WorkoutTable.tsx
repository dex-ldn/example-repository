import { useContext, useMemo } from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  Row,
} from '@tanstack/react-table';

import TableLayout from './TableLayout';
import { EditContext } from '../../context/EditContext';
import { EntityType } from '../../types/Entity';
import { Workout } from '../../types/Workout';

export default function WorkoutTable({ tableData }: { tableData: Workout[] }) {
  const editContext = useContext(EditContext);

  if (!editContext) return;
  const { showEditingPanel } = editContext;

  const [columns, data] = useMemo(() => {
    const columnHelper = createColumnHelper<Workout>();

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
    return [columns, tableData];
  }, [tableData]);

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    row: Row<Workout>
  ) => {
    showEditingPanel(EntityType.WORKOUT, row.original);
  };

  return (
    <TableLayout
      tableInstance={tableInstance}
      handleRowClick={handleRowClick}
    />
  );
}
