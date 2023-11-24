
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useCookies } from "react-cookie";

import WorkoutTable from './WorkoutTable';
import { AuthContext } from '../../context/AuthContext';

export default function ViewWorkouts() {
    const { api } = useContext(AuthContext);

    const [cookies] = useCookies(['apprelevant']);
    const [tableData, setTableData] = useState(null);
    const accessToken = cookies.accessToken;

    const GET_WORKOUTS_URL = 'https://api.dev.fitkind.app/v1/workouts';


    const { data, isLoading } = useQuery({
        queryKey: ['getWorkouts'], 
        queryFn: async () => {
            const response = await api.get(GET_WORKOUTS_URL, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            return response.data.workouts;
        }
    })

    useEffect(() => {
        setTableData(data)
    }, [data])

    if (isLoading || !tableData) {
        return <div>Loading...</div>
      }
      
    return (
        <WorkoutTable tableData={tableData}/>
      );

    

}