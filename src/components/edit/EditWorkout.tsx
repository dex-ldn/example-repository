import { useContext, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import FormInput from './FormInput';
import { AuthContext } from '../../context/AuthContext';
import { EditContext } from 'src/context/EditContext';
import MultiSelect from './MultiSelect';
import { Workout } from 'src/types/Workout';
import PrivacySelector from './PrivacySelector';
import ExperienceLevelSelector from './ExperienceLevelSelector';
import UpdateButton from './UpdateButton';
import { getSelectedOptions } from './utils';

export default function EditWorkout() {
  const authContext = useContext(AuthContext);
  const editContext = useContext(EditContext);
  const queryClient = useQueryClient();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [updated, setIsUpdated] = useState(false);
  const updateWorkoutURL = 'https://api.dev.fitkind.app/v1/workouts';

  if (!authContext || !editContext) return;
  const { api, accessToken } = authContext;
  const { editedEntity } = editContext;

  const updateWorkoutMutation = useMutation({
    mutationFn: async (updatedWorkout: Workout) => {
      return await api?.patch(
        `${updateWorkoutURL}/${workout?._id}`,
        { workout: updatedWorkout },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getWorkouts'] });
    },
  });

  useEffect(() => {
    setWorkout(editedEntity);
    setIsUpdated(false);
  }, [editedEntity]);

  if (!workout) return;

  const options = ['biceps', 'triceps', 'calves', 'chest'];

  const updateWorkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      info: { value: string };
      privacy: { value: string };
      experience_level: { value: string };
      bodyparts: { selectedOptions: HTMLSelectElement[] };
    };

    const updatedWorkout: Workout = {
      _id: workout._id,
      name: target.name.value,
      info: target.info.value,
      privacy: target.privacy.value,
      experienceLevel: target.experience_level.value,
      muscleGroups: getSelectedOptions(target.bodyparts.selectedOptions),
    };

    updateWorkoutMutation.mutate(updatedWorkout);
    setIsUpdated(true);
  };

  return (
    <form
      onSubmit={updateWorkout}
      onChange={() => {
        setIsUpdated(false);
      }}
    >
      <FormInput value={workout.name} label="Name" name="name" />
      <FormInput value={workout.info} label="Info" name="info" />
      <MultiSelect
        label="Bodyparts"
        name="bodyparts"
        options={options}
        preSelected={workout.muscleGroups}
      />
      <PrivacySelector />
      <ExperienceLevelSelector />
      <UpdateButton />
      {updated && <p>Updated!</p>}
    </form>
  );
}
