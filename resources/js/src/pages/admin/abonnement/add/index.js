import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../../api/client';
import { addSubscribe } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';
import FormSubscriber from '../components/FormSubscriber';

const AddAbonnement = () => {
    const navigate = useNavigate();
    const [modelForm, setModelForm] = useState({
        libelle: '',
        prix: '',
        duree: '',
        visible: true,
        localite_id: 0,
    })
    const [errorModelForm, setErrorModelForm] = useState({
        libelle: '',
        prix: '',
        duree: '',
        localite_id: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    const onSave = async (field) => {
        alertPending();
        setIsLoading(true);
        setModelForm(field);
        try {
            await addSubscribe(field);
            alertClosed()
            setIsLoading(false);
            successNotif('Notification', 'Abonnement enregistré avec succès.')
            navigate('/handlers/subscription');
        } catch (error) {
            alertClosed()
            setIsLoading(false);
            let _message = '';
            let _errorForm = {
                libelle: '',
                prix: '',
                duree: '',
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif('Avertissement', _message);
            }
            setErrorModelForm(_errorForm)
        }
    }

    return (
        <>
            <PageHeader title={'Nouveau abonnement'}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/subscription')} >
                    <i className="zmdi zmdi-money-box"></i>{' '}
                    Liste des abonnements</Button>
            </PageHeader>
            <FormSubscriber
                onBtnAction={onSave}
                modelForm={modelForm}
                isLoading={isLoading}
                errorModelForm={errorModelForm}
            />
        </>
    );
}

export default AddAbonnement;
