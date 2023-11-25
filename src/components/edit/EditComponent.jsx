import { Icon, CloseIcon } from '@gluestack-ui/themed';
import { EditContext } from '../../context/EditContext';

import './EditComponent.css';
import { useContext } from 'react';
import EditWorkout from './EditWorkout';


export default function EditComponent() {

    const {hideEditingPanel, editedId, editedType} = useContext(EditContext);
    return ( 
        <div className='editComponent'>
            <Icon onClick={() => {hideEditingPanel()}} className='closeIcon' as={CloseIcon} m="$2" w="$6" h="$6"/>
            <EditWorkout workoutId={editedId}/>
        </div>
    )
}