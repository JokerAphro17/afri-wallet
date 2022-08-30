import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png'
import logoBg from '../../assets/images/logo/logo.png'

function LogoFront(props) {
    return (
        <>
        <div className="logo logo-cesw">
            <Link id="logo" to={'/'} title="Logo Journal Officiel Burkina Faso" data-height="60" data-padding="15">
                <img className="logo-main scale-with-grid" src={logo} data-retina="images/county-logo-retina.png" data-height="80" alt="logo Journal Officiel Burkina faso" />
                <img className="logo-sticky scale-with-grid" src={logoBg} data-retina="images/county-logo-retina.png" data-height="80" alt="logo Journal Officiel Burkina faso" />
                <img className="logo-mobile scale-with-grid" src={logo} data-retina="images/county-logo-retina.png" data-height="80" alt="logo Journal Officiel Burkina faso" />
                <img className="logo-mobile-sticky scale-with-grid" src={logo} data-retina="images/county-logo-retina.png" data-height="80" alt="logo Journal Officiel Burkina faso" />
            </Link>
            <h6>SECRETARIAT GENERAL DU GOUVERNEMENT ET DU CONSEIL DES MINISTRES</h6>
        </div>
        </>
    );
}

export default LogoFront;
