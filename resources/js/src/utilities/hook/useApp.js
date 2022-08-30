import React from 'react';
import { AppContext } from '../context/appContext';

const useApp = () => {
    return React.useContext(AppContext);
}

export default useApp;
