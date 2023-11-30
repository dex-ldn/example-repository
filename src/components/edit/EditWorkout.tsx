import { useContext, useEffect, useState } from 'react';
// import { FormControl } from '@gluestack-ui/themed';

// import FormInput from './FormInput';
// import FormTextArea from './FormTextArea';
import { AuthContext } from '../../context/AuthContext';
import { EditContext } from 'src/context/EditContext';
// import { EntityType } from 'src/types/Entity';
import { Workout } from 'src/types/Workout';

export default function EditWorkout() {
  const authContext = useContext(AuthContext);
  const editContext = useContext(EditContext);
  const [workout, setWorkout] = useState<Workout | null>(null);

  if (!authContext || !editContext) return;
  // const { api, accessToken } = authContext;
  const { editedEntity } = editContext;

  useEffect(() => {
    setWorkout(editedEntity);
  }, [editedEntity]);

  // const { data, isLoading } = useQuery({
  //   queryKey: ['getWorkoutById', workoutId],
  //   queryFn: async () => {
  //     const response = await api?.get(getWorkoutByIdURL(workoutId), {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });
  //     return response?.data.workout;
  //   },
  // });

  // const privacySelectOptions = {
  //   public: 'public',
  //   private: 'private',
  // };

  if (!workout) return;

  return (
    <form>
      <input value={workout.name} />
      {/* <FormInput label="Workout name:" value={workout.name} />
      <FormTextArea label="Workout info:" value={workout.info} /> */}
      {/* <FormSelect
        selectOptions={privacySelectOptions}
        selectedLabel={workout.privacy}
        selectedValue={workout.privacy}
        label="Privacy"
      /> */}
    </form>
  );
}
