import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = { logged: false, initialState };

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
