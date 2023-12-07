import { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext);

  if (!authContext) return <Navigate to="/login" />;
  const { authenticated } = authContext;

  if (authenticated) return children;
  return <Navigate to="/login" />;
}
