import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Button, ButtonText } from '@gluestack-ui/themed';

import './Toolbar.css';
import { AuthContext } from '../../context/AuthContext';

export default function Toolbar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) return null;
  const { authenticated, logout } = authContext;

  const clickButton = () => {
    if (authenticated) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="toolbar">
      <Button onPress={clickButton}>
        <ButtonText>{authenticated ? 'Logout' : 'Login'}</ButtonText>
      </Button>
    </div>
  );
}
