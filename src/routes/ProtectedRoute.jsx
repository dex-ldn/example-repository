import { useContext } from "react"
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext"

export default function ProtectedRoute({ children }) {
    const { authenticated } = useContext(AuthContext);

    if (authenticated) return children;

    return <Navigate to='/login' />

}