import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPropValueToString } from '../../../api/client';
import { verifyUserAccountToForgotPass } from '../../../api/request';
import LogoForPage from '../../../components/logo/LogoForPage';
import { errorNotif, infoNotif } from '../../../components/notification';

const ForgotPasswordPage = (props) => {
    const [email, setEmail] = useState('');
    const [errorForm, setErrorForm] = useState({email: ''});
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notifMessage, setNotifMessage] = useState('');

    const updatedPass = async () => {
        if(!email) {
            const _message = 'Ce champ est requis';
            setErrorForm({
                email: !email ? _message : '',
            });
            return;
        }


        setIsLoading(true)
        try {
            await verifyUserAccountToForgotPass({email});
            setNotifMessage(`Un mail vous a été envoyé au ${email} avec les instruction pour la modification de votre mot de passe.`)
        } catch (error) {
            let _message = '';
            let _errorForm = {
                email: '',
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
            }
            setMessage(_message);
            setErrorForm(_errorForm)
        }
        setIsLoading(false)
    }

    const sendAgain = async () => {
        try {
            setIsLoading(true)
            await verifyUserAccountToForgotPass({email});
            infoNotif('Notification', 'Le mail a été a nouveau envoyé avec succès. Veuillez consulter votre boite.')
        } catch (error) {
            errorNotif('Echec', error);
        }
        setIsLoading(false)
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
                                Mot de passe oublié
                            </span>
                            {notifMessage ? (
                                <div>
                                    <p>{notifMessage}</p>
                                    <div className="container-login100-form-btn">
                                        <button type='button' disabled={isLoading} onClick={sendAgain} className="login100-form-btn btn-primary">
                                            Renvoyer le mail
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form>
                                    {message ? (
                                        <div><p className='text-danger'><small>{message}</small></p></div>
                                    ) : null}
                                    <div className='mb-2'>
                                        <div className="wrap-input100 validate-input mb-0">
                                            <input className="input100"
                                                type="text"
                                                name="email"
                                                required={true}
                                                value={email ?? ''}
                                                onChange={(event) => setEmail(event?.target?.value)}
                                                placeholder="Votre adresse mail"/>
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                                            </span>
                                        </div>
                                        {errorForm?.email ? (
                                            <span className='text-danger'><small>{errorForm.email}</small></span>
                                        ) : null}
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type='button' disabled={isLoading} onClick={updatedPass} className="login100-form-btn btn-primary">
                                            Envoyer
                                        </button>
                                    </div>
                                    {!isLoading ? (
                                        <div className="text-right pt-1">
                                            <p className="mb-0">Retour sur l'écran de
                                                <Link className="text-primary ml-1" to={'/login'}>connexion</Link>.
                                            </p>
                                        </div>
                                    ) : null}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ForgotPasswordPage;
