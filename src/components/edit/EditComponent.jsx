import { Icon, CloseIcon } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import { FormControl, Input, InputField } from '@gluestack-ui/themed';


import { EditContext } from '../../context/EditContext';
import { AuthContext } from '../../context/AuthContext';

import './EditComponent.css';
import { useContext } from 'react';


export default function EditComponent() {

    const {hideEditingPanel, editedId, editedType} = useContext(EditContext);

    const getWorkoutByIdURL = (workoutId) => `https://api.dev.fitkind.app/v1/workouts/id/${workoutId}`;
    const { data, isLoading } = useQuery({
        queryKey: ['getWorkoutById'], 
        queryFn: async () => {
            const response = await api.get(getWorkoutByIdURL(editedId), {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            return response.data.workout;
        }
    })


    return ( 
        <div className='editComponent'>
            <Icon onClick={() => {hideEditingPanel()}} className='closeIcon' as={CloseIcon} m="$2" w="$6" h="$6"/>
            { isLoading && <span>Fetching Data</span>}
            { data && 
                <FormControl>
                    <Input>
                        <InputField value={data.name}/>
                    </Input>
                </FormControl>
            }
        </div>
    )
}