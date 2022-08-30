import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../../api/client';
import { addSubscribe, fetchInfoSubscribe, updatedSubscribeInfo } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';
import FormSubscriber from '../components/FormSubscriber';

const EditAbonnement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [modelForm, setModelForm] = useState({
        uuid: '',
        libelle: '',
        prix: '',
        periode: '',
        visible: true,
    })
    const [errorModelForm, setErrorModelForm] = useState({
        libelle: '',
        prix: '',
        periode: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const {state} = location;
        if(state?.uuid) {
            (async () => await fetchSubscribe(state?.uuid))()
        } else {
            navigate(-1)
        }
    }, [location?.state?.uuid]);

    const fetchSubscribe = async (uuid) => {
        try {
            alertPending()
            const response = await fetchInfoSubscribe(uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                setModelForm(data);
            }
            alertClosed()
        } catch (error) {
            alertClosed()
            if(typeof error === 'object') {
            } else {
                errorNotif('Avertissement', error);
            }
        }
    };

    const onUpdated = async (field) => {
        alertPending();
        setIsLoading(true);
        setModelForm(field);
        console.log("field", field)
        try {
            await updatedSubscribeInfo(modelForm?.uuid, field);
            alertClosed()
            setIsLoading(false);
            successNotif('Notification', 'Abonnement mis à jour avec succès.')
            navigate('/handlers/subscription');
        } catch (error) {
            alertClosed()
            setIsLoading(false);
            let _message = '';
            let _errorForm = {
                libelle: '',
                prix: '',
                periode: '',
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
            <PageHeader title={"Modification d'abonnement"}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/subscription')} >
                    <i className="zmdi zmdi-money-box"></i>{' '}
                    Liste des abonnements</Button>
            </PageHeader>
            <FormSubscriber
                onBtnAction={onUpdated}
                modelForm={modelForm}
                isLoading={isLoading}
                errorModelForm={errorModelForm}
            />
        </>
    );
}

export default EditAbonnement;
