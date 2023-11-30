import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import WorkoutTable from './WorkoutTable';
import { Workout } from 'src/types/Workout';
import { AuthContext } from '../../context/AuthContext';

export default function ViewWorkouts() {
  const authContext = useContext(AuthContext);

  if (!authContext) return;
  const { api, accessToken } = authContext;

  const [tableData, setTableData] = useState<Workout[]>([]);

  const GET_WORKOUTS_URL = 'https://api.dev.fitkind.app/v1/workouts';

  const { data, isLoading } = useQuery({
    queryKey: ['getWorkouts'],
    queryFn: async () => {
      const response = await api?.get(GET_WORKOUTS_URL, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response?.data.workouts;
    },
  });

  useEffect(() => {
    setTableData(data);
  }, [data]);

  if (isLoading || !tableData) {
    return <div>Loading...</div>;
  }

  return <WorkoutTable tableData={tableData} />;
}
