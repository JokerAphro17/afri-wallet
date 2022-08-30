import React, { Fragment } from 'react';
import logo from '../../assets/images/logo/logo.png'
import logoBg from '../../assets/images/logo/logo.png'

function LogoForPage({withoutBg}) {
    return (
        <Fragment>
            <img src={withoutBg ? logo : logoBg} className="header-brand-img" alt="" />
        </Fragment>
    );
}

export default LogoForPage;
