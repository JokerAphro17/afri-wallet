import React, { Suspense } from 'react';
import useApp from '../../utilities/hook/useApp';
import MainLoader from '../loader/Main';

const MainLoadable = ({children}) => {
    return (
        <Suspense fallback={<MainLoader />}>
            {children}
        </Suspense>
    );
}

export default MainLoadable;
