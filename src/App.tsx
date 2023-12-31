import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import './App.css';
import { AuthProvider } from './context/AuthContext';
import { EditProvider } from './context/EditContext';
import useAuth from './auth/use-auth';
import useEdit from './components/edit/use-edit';
import AppRoutes from './routes/AppRoutes';
import Toolbar from './components/toolbar/Toolbar';
import SideMenu from './components/sideMenu/SideMenu';
import EditComponent from './components/edit/EditComponent';

export default function App() {
  const { login, logout, accessToken, refreshToken, authenticated, api } =
    useAuth();

  const {
    isEditing,
    editedType,
    editedEntity,
    showEditingPanel,
    hideEditingPanel,
  } = useEdit();

  const queryClient = new QueryClient();

  const getClassName = (authenticated: boolean, isEditing: boolean) => {
    if (authenticated) {
      if (isEditing) {
        return `App authenticated editing`;
      } else {
        return `App authenticated`;
      }
    } else {
      return `App unauthenticated`;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={getClassName(authenticated, isEditing)}>
        <AuthProvider
          value={{
            login,
            logout,
            accessToken,
            refreshToken,
            authenticated,
            api,
          }}
        >
          <EditProvider
            value={{
              isEditing,
              editedType,
              editedEntity,
              showEditingPanel,
              hideEditingPanel,
            }}
          >
            <Toolbar />
            {authenticated && <SideMenu />}
            <AppRoutes />
            {isEditing && authenticated && <EditComponent />}
          </EditProvider>
        </AuthProvider>
      </div>
    </QueryClientProvider>
  );
}
