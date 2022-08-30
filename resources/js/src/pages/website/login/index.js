import React, { Fragment, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { signinUsers } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { ROLES } from '../../../utilities/constant/app.constant';
import useAuth from '../../../utilities/hook/useAuth';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { alertPending, alertClosed } from '../../../components/sweet-alert';
import { errorNotif } from '../../../components/notification';
import { TextField } from '@mui/material';

const LoginPage = (props) => {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });
    const [errorFormLogin, setErrorFormLogin] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const userInfo = auth?.user ?? null;
        if (userInfo?.token && userInfo?.role) {
            navigate(
                userInfo?.role == "user" ? "/users" : "/admins",
                {
                    state: { from: location },
                    replace: true
                }
            );
        }
    }, [auth])

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;

        setFormLogin({
            ...formLogin,
            [name]: value,
        })
    }

    const signin = async () => {
        if(!formLogin.email || !formLogin.password) {
            const _message = 'Ce champ est requis';
            setErrorFormLogin({
                email: !formLogin.email ? _message : '',
                password: !formLogin.password ? _message : '',
            })
            return;
        }

        alertPending()
        try {
            const response = await signinUsers(formLogin);
            const dataReceive = response?.data?.data;
            alertClosed()
            if(dataReceive) {
                auth.signin(dataReceive, () => {
                    let goToDashboard = '/admins';
                    if(dataReceive?.role == ROLES.USER) {
                        goToDashboard = '/users';
                    }
                    navigate(goToDashboard);
                });
            }
        } catch (error) {
            alertClosed()
            let _message = '';
            let _errorForm = {
                email: '',
                password: '',
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif('Echec', error);
            }
            setMessage(_message);
            setErrorFormLogin(_errorForm)
        }
    }

    return (
        <Fragment>
            <div className="page">
                <div className="cols col-login mx-auto">
                    <div className="text-center">
                        <LogoForPage />
                    </div>
                </div>
                <div className="container-login100">
                    <div className="wrap-login100 p-6">
                        <div className="login100-form validate-form">
                            <span className="login100-form-title">
                                Authentification
                            </span>
                            {message ? (
                                <div><p className='text-danger'><small>{message}</small></p></div>
                            ) : null}

                            <Form onSubmit={handleSubmit(signin)}>
                                <div className='mb-2'>
                                    <div className="wrap-input100 validate-input mb-3" data-validate = "Valid email is required: ex@abc.xyz">
                                    <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    size="small"
                                    name="email"
                                    fullWidth
                                    value={formLogin.email}
                                    onChange={handlerInput}
                                    
                                    />
                                        <span className="focus-input100"></span>
                                        
                                    </div>
                                    {errorFormLogin?.email ? (
                                        <span className='text-danger'><small>{errorFormLogin.email}</small></span>
                                    ) : null}
                                </div>
                                <div className='mb-2'>
                                    <div className="wrap-input100 validate-input mb-0" data-validate="Password is required">
                                    <TextField
                                        type={'password'}
                                        label="Password"
                                        id="outlined-size-small"
                                        size="small"
                                        name="password"
                                        onChange={handlerInput}
                                        value={formLogin.password}
                                        fullWidth
                                />
                                        <span className="focus-input100"></span>
                                    </div>
                                    {errorFormLogin?.password ? (
                                        <span className='text-danger'><small>{errorFormLogin.password}</small></span>
                                    ) : null}
                                </div>
                                <div className="text-right pt-1">
                                    <p className="mb-0">
                                        <Link className="text-primary ml-1" to={'/forgot-password'}>Mot de passe oublié ?</Link>
                                    </p>
                                </div>
                                <div className="container-login100-form-btn">
                                    <Button type='submit' className="login100-form-btn btn-primary">
                                        Se connecter
                                    </Button>
                                </div>
                                <div className=" flex-c-m text-center mt-3">
                                    <p>Ou</p>
                                    <div className="social-icons">
                                        <ul>
                                            <li><Link to={'/register'} className="btn  btn-social btn-block btn-mail"><i className="fa fa-envelope"></i> S'inscrire </Link></li>
                                            {/* <li><a className="btn  btn-social btn-block btn-google"><i className="fa fa-google-plus"></i> Sign up with Google</a></li>
                                            <li><a className="btn  btn-social btn-block btn-facebook mt-2"><i className="fa fa-facebook"></i> Sign in with Facebook</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LoginPage;
