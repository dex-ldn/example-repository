import { useContext } from "react";
import { useCookies } from "react-cookie";

import { AuthContext } from "../../context/AuthContext";


export default function EditWorkout() {
    const [cookies] = useCookies(['apprelevant']);
    const accessToken = cookies.accessToken;
    const { api } = useContext(AuthContext);


    return (<div>
        <h1>Edit Workout</h1>
    </div>)
} 