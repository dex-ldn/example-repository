import { createContext } from 'react';
import { EntityType } from 'src/types/Entity';
import { Workout } from 'src/types/Workout';

export type EditContextType = {
  isEditing: boolean;
  editedType: EntityType | null;
  editedEntity: Workout;
  showEditingPanel: (entityType: EntityType, editedEntity: Workout) => void;
  hideEditingPanel: () => void;
};

export const EditContext = createContext<EditContextType | null>(null);

export const EditProvider = EditContext.Provider;
