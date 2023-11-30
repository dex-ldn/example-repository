import { useState } from 'react';
import { EntityType } from 'src/types/Entity';
import { Workout } from 'src/types/Workout';

type EditHookType = {
  isEditing: boolean;
  editedType: EntityType | null;
  editedEntity: Workout | null;
  showEditingPanel: (type: EntityType, editedEntity: Workout) => void;
  hideEditingPanel: () => void;
};

export default function useEdit(): EditHookType {
  const [isEditing, setIsEditing] = useState(false);
  const [editedType, setEditedType] = useState<EntityType | null>(null);
  const [editedEntity, setEditedEntity] = useState<Workout | null>(null);

  const showEditingPanel = (type: EntityType, editedEntity: Workout) => {
    setIsEditing(true);
    setEditedType(type);
    setEditedEntity(editedEntity);
  };

  const hideEditingPanel = () => {
    setIsEditing(false);
    setEditedType(null);
    setEditedEntity(null);
  };

  return {
    isEditing,
    editedType,
    editedEntity,
    showEditingPanel,
    hideEditingPanel,
  };
}
