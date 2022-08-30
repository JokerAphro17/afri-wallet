import React from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
    return React.useContext(AuthContext);
}

export default useAuth;
