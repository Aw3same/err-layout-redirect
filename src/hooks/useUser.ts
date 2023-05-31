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
    // setTimeout(() => {
      setUser(userData);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      navigate('home');
    // }, 500);
  };

  const logout = () => {
    // setTimeout(() => {
      sessionStorage.clear();
      setUser(null);
      navigate('login');
    // }, 500);
  };

  return {
    login,
    logout,
    // user: sessionStorage.getItem('userData'),
    user,
  };
}

/**
 * REAL CODE - Not working
 * 
 * 
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

/** REACT QUERY - Working
 * 
 * export function useUser() {
	const { token, setToken, user, setUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const {
		mutate: login,
		isLoading: isLoginLoading,
		isError: hasLoginError
	} = useMutation({
		mutationFn: signIn,
		onSuccess: async (tokenResponse) => {
			sessionStorage.setItem('access_token', tokenResponse.access_token)
			sessionStorage.setItem('refresh_token', tokenResponse.refresh_token)
			setToken(tokenResponse.access_token)
      // Here is the logic of the other query
			const user = await getUserProfile()
			setUser(user)
			sessionStorage.setItem('userData', JSON.stringify(user))
	 		navigate('/home')
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


	return {
		login,
		logout,		
		isLoginLoading,
		hasLoginError,
		userPermissions: token ? (jwt_decode(token) as TokenDecoded).authorities : [],
		user
	}
}
 * 
 */