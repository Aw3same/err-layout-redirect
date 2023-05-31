import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const userData = {
  id: 1,
  name: 'Aw3same',
};
export function useUser() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    setTimeout(() => {
      setUser(userData);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      console.log('session', sessionStorage.getItem('userData'));
      console.log('user', user);
      navigate('home');
    }, 500);
  };

  const logout = () => {
    setTimeout(() => {
      sessionStorage.clear();
      setUser(null);
      navigate('login');
      console.log('session', sessionStorage.getItem('userData'));
    }, 500);
  };

  return {
    login,
    logout,
    // user: sessionStorage.getItem('userData'),
    user,
  };
}
