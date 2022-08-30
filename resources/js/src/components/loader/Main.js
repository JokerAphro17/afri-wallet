import React from 'react';
import loaderSvg from '../../assets/svgs/loader.svg'

const MainLoader = () => {
    return (
        <div id="global-loader">
            <img src={loaderSvg} className="loader-img" alt="Loader"/>
        </div>
    );
}

export default MainLoader;
