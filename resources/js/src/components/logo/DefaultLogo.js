import React, { Fragment } from 'react';
import logo from '../../assets/images/logo/logo.png'

function DefaultLogo() {
    return (
        <Fragment>
            <img src={logo} className="header-brand-img" alt="" />
        </Fragment>
    );
}

export default DefaultLogo;
