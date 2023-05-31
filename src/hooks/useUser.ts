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

/**
 * REAL CODE 
 * 
 * import { useMutation, useQuery } from '@tanstack/react-query'
import { signIn, signOut } from 'feature/authentication/services/authService'
import jwt_decode from 'jwt-decode'
import { TokenDecoded } from 'feature/shared/types/tokenResponse'
import getUserProfile from 'services/getUserProfile'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'context/AuthContext'
import { useContext } from 'react'

export function useUser() {
	const { token, setToken, user, setUser } = useContext(AuthContext)

	const navigate = useNavigate()
	const {
		mutate: login,
		isLoading: isLoginLoading,
		isError: hasLoginError,
	} = useMutation({
		mutationFn: signIn,
		onSuccess: async (tokenResponse) => {
			sessionStorage.setItem('access_token', tokenResponse.access_token)
			sessionStorage.setItem('refresh_token', tokenResponse.refresh_token)
			setToken(tokenResponse.access_token)
		},
		onError: () => {
			sessionStorage.removeItem('access_token')
		}
	})

	const { mutate: logout } = useMutation({
		mutationFn: signOut,
		onMutate: () => {
			sessionStorage.clear()
			setToken(null)
			setUser(null)
		},
		onSuccess: async () => {
			navigate('/login')
		}
	})

	const { isSuccess: isProfileLoaded } = useQuery(['user', token], getUserProfile, {
		enabled: !!token,
		refetchOnWindowFocus: false,
		onSuccess(data) {
			setUser(data)
			sessionStorage.setItem('userData', JSON.stringify(data))
			navigate('/home')
		},
		onError() {
			sessionStorage.removeItem('userData')
		}
	})

	return {
		login,
		logout,
		isLogged: Boolean(token),
		isLoginLoading,
		hasLoginError,
		token,
		userPermissions: token ? (jwt_decode(token) as TokenDecoded).authorities : [],
		isUser: Boolean(user),
		isProfileLoaded,
		isExternalUser: user?.idUserType === 2 || user?.idUserType === 3,
		user
	}
}

 */