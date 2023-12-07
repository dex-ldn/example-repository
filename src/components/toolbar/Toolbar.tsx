import { useContext } from 'react';
import { useNavigate } from 'react-router';

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
      <button
        className={authenticated ? 'button is-danger' : 'button is-success'}
        onClick={clickButton}
      >
        <span>{authenticated ? 'Logout' : 'Login'}</span>
      </button>
    </div>
  );
}
