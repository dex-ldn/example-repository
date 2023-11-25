import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { FormControl } from '@gluestack-ui/themed';

import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormSelect from "./FormSelect";
import { AuthContext } from "../../context/AuthContext";


export default function EditWorkout({ workoutId }) {
    const { api } = useContext(AuthContext);
    const [cookies] = useCookies(['apprelevant']);
    const accessToken = cookies.accessToken;

    const getWorkoutByIdURL = (workoutId) => `https://api.dev.fitkind.app/v1/workouts/id/${workoutId}`;

    const { data, isLoading } = useQuery({
        queryKey: ['getWorkoutById'], 
        queryFn: async () => {
            const response = await api.get(getWorkoutByIdURL(workoutId), {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            return response.data.workout;
        }
    })

    const privacySelectOptions = {
        public: 'public',
        private: 'private'
    }

    if (isLoading) return <span>Fetching workout...</span>
    return (
            <FormControl>
                <FormInput label="Workout name:" value={data.name}/>
                <FormTextArea label="Workout info:" value={data.info}/>
                <FormSelect selectOptions={privacySelectOptions} sel/>
            </FormControl>
        );
}
