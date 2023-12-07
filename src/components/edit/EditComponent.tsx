import { EditContext } from '../../context/EditContext';

import './EditComponent.css';
import { useContext } from 'react';
import EditWorkout from './EditWorkout';
import CloseIcon from '../icons/CloseIcon';

export default function EditComponent() {
  const editContext = useContext(EditContext);

  if (!editContext) return null;
  const { hideEditingPanel } = editContext;
  return (
    <div className="editComponent">
      <div className="editHead">
        <div>Editing</div>
        <CloseIcon
          onClick={() => {
            hideEditingPanel();
          }}
        />
      </div>
      <EditWorkout />
    </div>
  );
}
