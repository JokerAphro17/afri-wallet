import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { activateAccount, sendActivateCodeAgaint } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { errorNotif, infoNotif } from '../../../components/notification';
import { alertClosed, alertNotification, alertPending } from '../../../components/sweet-alert';

const VerifyAccountPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formVerify, setFormVerify] = useState({
        email: '',
        code_verified: '',
    });
    const [errorFormVerify, setErrorFormVerify] = useState({
        email: '',
        code_verified: '',
    });
    const [message, setMessage] = useState('');
    const [notifMessage, setNotifMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const {state} = location;
        if(state?.email) {
            setFormVerify({
                ...formVerify,
                email: state.email,
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

        setFormVerify({
            ...formVerify,
            [name]: value,
        })
    }

    const accountVerify = async () => {
        if(
            !formVerify.email ||
            !formVerify.code_verified
        ) {
            const _message = 'Ce champ est requis';
            setErrorFormVerify({
                email: !formVerify.email ? _message : '',
                code_verified: !formVerify.code_verified ? _message : '',
            })
            return;
        }
        alertPending()
        try {
            await activateAccount(formVerify);
            alertClosed()
            alertNotification(
                'info',
                'Votre compte a été activé avec succès. Vous pouvez vous connecter.',
                () => navigate('/login')
            )
        } catch (error) {
            alertClosed()
            let _errorForm = {
                email: '',
                password: '',
            }
            let _message = '';
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
            }
            setErrorFormVerify(_errorForm)
            setMessage(_message);
        }
    }

    const sendAgain = async () => {
        try {
            await sendActivateCodeAgaint(formVerify);
            infoNotif('Notification', 'Le mail a été a nouveau envoyé avec succès. Veuillez consulter votre boite.')
        } catch (error) {
            errorNotif('Echec', error);
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
                                Activation du compte
                            </span>
                            {!notifMessage ? (
                                <>
                                    <p>
                                        Un mail vous a été envoyé avec le code d'activation de compte nouvellement créer.
                                        Veuillez consulter votre boite mail.
                                    </p>
                                    <form>
                                        {message ? (
                                            <div><p className='text-danger'><small>{message}</small></p></div>
                                        ) : null}
                                        <div className='mb-2'>
                                            <div className="wrap-input100 validate-input mb-0">
                                                <input className="input100"
                                                    type="text"
                                                    name="email"
                                                    disabled
                                                    readOnly
                                                    value={formVerify?.email ?? ''}
                                                    onChange={handlerInput}
                                                    placeholder="Votre adresse mail"/>
                                                <span className="focus-input100"></span>
                                                <span className="symbol-input100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                                                </span>
                                            </div>
                                            {errorFormVerify?.email ? (
                                                <span className='text-danger'><small>{errorFormVerify.email}</small></span>
                                            ) : null}
                                        </div>
                                        <div className='mb-2'>
                                            <div className="wrap-input100 validate-input mb-0">
                                                <input className="input100"
                                                    type="text"
                                                    name="code_verified"
                                                    value={formVerify?.code_verified ?? ''}
                                                    onChange={handlerInput}
                                                    placeholder="Code reçu par mail"/>
                                                <span className="focus-input100"></span>
                                                <span className="symbol-input100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                                                </span>
                                            </div>
                                            {errorFormVerify?.code_verified ? (
                                                <span className='text-danger'><small>{errorFormVerify.code_verified}</small></span>
                                            ) : null}
                                        </div>
                                        <div className="container-login100-form-btn">
                                            <button type='button' disabled={isLoading} onClick={accountVerify} className="login100-form-btn btn-primary">
                                                Activer le compte
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">Je n'ai pas reçu de mail.
                                            <button onClick={sendAgain} disabled={isLoading} className="text-primary ml-1" >Renvoyer à nouveau</button>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <p>{notifMessage}</p>
                                    <div className="container-login100-form-btn">
                                        <button type='button' onClick={() => navigate('/login')} className="login100-form-btn btn-primary">
                                            Se connecter
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default VerifyAccountPage;
