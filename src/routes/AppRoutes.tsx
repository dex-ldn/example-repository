import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import LoginView from '../views/LoginView';
import EditView from '../views/EditView';
import HomeView from '../views/HomeView';

import ViewWorkouts from '../components/table/ViewWorkouts';
import ViewExercises from '../components/table/ViewExercises';
import ViewRoutines from '../components/table/ViewRoutines';

export default function AppRoutes() {
  return (
    <div className="routerContainer">
      <Routes>
        <Route path="/" Component={HomeView} />
        <Route path="login" Component={LoginView} />
        <Route
          path="edit"
          element={
            <ProtectedRoute>
              <EditView />
            </ProtectedRoute>
          }
        >
          <Route path="workouts" element={<ViewWorkouts />} />
          <Route path="exercises" element={<ViewExercises />} />
          <Route path="routines" element={<ViewRoutines />} />
        </Route>
      </Routes>
    </div>
  );
}
