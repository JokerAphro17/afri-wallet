import React from 'react';
import { RequestsContext } from '../context/requestsContext';

const useRequests = () => {
    return React.useContext(RequestsContext);
}

export default useRequests;
