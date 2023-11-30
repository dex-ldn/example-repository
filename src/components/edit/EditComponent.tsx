import { Icon, CloseIcon } from '@gluestack-ui/themed';
import { EditContext } from '../../context/EditContext';

import './EditComponent.css';
import { useContext } from 'react';
import EditWorkout from './EditWorkout';

export default function EditComponent() {
  const editContext = useContext(EditContext);

  if (!editContext) return null;
  const { hideEditingPanel } = editContext;
  return (
    <div className="editComponent">
      <Icon
        onClick={() => {
          hideEditingPanel();
        }}
        className="closeIcon"
        as={CloseIcon}
        m="$2"
        w="$6"
        h="$6"
      />
      <EditWorkout />
    </div>
  );
}
