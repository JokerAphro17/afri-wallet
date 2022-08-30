import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoFront from '../../../components/logo/LogoFront';
import useAuth from '../../../utilities/hook/useAuth';
import ProfileConnecte from '../profile-connecte';
import logo from '../../../assets/images/logo/logo.png'


const UserHeader = (props) => {
    const auth = useAuth();
    return (
        <>
        <div className="hor-header header">
            <div className="container">
                <div className="d-flex ">
                    <a className="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a>
                    <Link className="header-brand1" to={"/users"}>
                        <div className='float-left'>
                            <img src={logo} className="header-brand-img mobile-icon" alt="logo"/>
                            {/* <img src={logo} className="header-brand-img desktop-logo mobile-logo" alt="logo"/> */}
                        </div>
                        <div className='d-flex align-items-center h-100'>
                            <div className='ml-1 text-center' style={{lineHeight: '10px'}}>
                                <h2 className='m-0'>AFRICAN WALLET <br/> PORTEFEUILLE D'ECHANGE EN LIGNE </h2>
                                <hr className='mt-1 mb-1 text-danger' />
                                <span className='text-danger'>--- rapide, sécurisé et moins couteux ---</span>
                            </div>
                        </div>
                    </Link>
                    <div className="d-flex align-items-center ml-auto header-right-icons header-search-icon">
                        <button className="navbar-toggler navresponsive-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="navbar-toggler-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </button>
						<span className="header-brand">
							<span className="pt-1 ml-1"></span>
						</span>
                        {auth?.user?.token && auth?.user?.role === 'user' ? (
                            <ProfileConnecte />
                        ) : (
                            <div className="d-flex ml-auto header-right-icons header-search-icon">
                                <Link to='/login' className="btn btn-connect-cesw">
                                    <i class="zmdi zmdi-lock"></i>{' '}
                                    Connecté vous!
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default UserHeader;
