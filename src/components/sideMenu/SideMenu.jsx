import { Link } from "react-router-dom";
import './SideMenu.css';

export default function SideMenu() {

    return (
        <ul className="sideMenu">
            <Link className="link" to='edit/workouts'>Workouts</Link>
            <Link className="link" to='edit/exercises'>Exercises</Link>
            <Link className="link" to='edit/routines'>Routines</Link>
            <Link className="link disabled" to='edit/categories'>Categories</Link>
            <Link className="link disabled" to='edit/activities'>Activities</Link>
        </ul>
    )
}