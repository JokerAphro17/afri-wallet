import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { signinUsers, updatedPasswordForgetted } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { successNotif } from '../../../components/notification';

const ForgotPasswordConfirmPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    const [formPass, setFormPass] = useState({
        token: '',
        password: '',
        cpassword: '',
    })
    const [errorFormPass, setErrorFormPass] = useState({
        token: '',
        password: '',
        cpassword: '',
    })
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(params?.token) {
            setFormPass({
                ...formPass,
                token: params.token,
            });
        } else {
            navigate('/')
        }
    }, [])

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;

        setFormPass({
            ...formPass,
            [name]: value,
        })
    }

    const updatedPass = async () => {
        if(!formPass?.password || !formPass.cpassword) {
            const _message = 'Ce champ est requis';
            setErrorFormPass({
                password: !formPass.password ? _message : '',
                cpassword: !formPass.cpassword ? _message : '',
            })
            return;
        }


        try {
            setIsLoading(true)
            await updatedPasswordForgetted(formPass);
            successNotif('Notification', 'Mot de passe modifié avec succès.')
            navigate('/login');
        } catch (error) {
            setIsLoading(false)
            let _message = '';
            let _errorForm = {
                token: '',
                password: '',
                cpassword: '',
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
            }
            setMessage(_message);
            setErrorFormPass(_errorForm)
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
                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Mot de passe oublié
                        </span>
                        {message ? (
                            <div><p className='text-danger'><small>{message}</small></p></div>
                        ) : null}
                        <div className='mb-2'>
                            <div className="wrap-input100 validate-input mb-0" data-validate="Password is required">
                                <input className="input100"
                                    type="password"
                                    name="password"
                                    value={formPass?.password}
                                    onChange={handlerInput}
                                    placeholder="Nouveau mot de passe"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                </span>
                            </div>
                            {errorFormPass?.password ? (
                                <span className='text-danger'><small>{errorFormPass.password}</small></span>
                            ) : null}
                        </div>
                        <div className='mb-2'>
                            <div className="wrap-input100 validate-input mb-0" data-validate="Password is required">
                                <input className="input100"
                                    type="password"
                                    name="cpassword"
                                    value={formPass?.cpassword}
                                    onChange={handlerInput}
                                    placeholder="Confirmer le nouveau mot de passe"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                </span>
                            </div>
                            {errorFormPass?.cpassword ? (
                                <span className='text-danger'><small>{errorFormPass.cpassword}</small></span>
                            ) : null}
                        </div>
                        <div className="container-login100-form-btn">
                            <button type='button' disabled={isLoading} onClick={updatedPass} className="login100-form-btn btn-primary">
                                Envoyer
                            </button>
                        </div>
                        {/* <div className="text-right pt-1">
                            <p className="mb-0">Retour sur l'écran de
                                <Link className="text-primary ml-1" to={'/login'}>connexion</Link>.
                            </p>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default ForgotPasswordConfirmPage;
