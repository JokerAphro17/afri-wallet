import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchInfoSubscribe } from '../../../../api/request';
import { errorNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';

const ShowAbonnement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [modelData, setModelData] = useState({
        uuid: '',
        libelle: '',
        prix: '',
        periode: '',
        visible: true,
    })

    useEffect(() => {
        const {state} = location;
        if(state?.uuid) {
            // (async () => await fetchSubscribe())()
        } else {
            // navigate(-1)
        }
    }, [location?.state?.uuid]);

    const fetchSubscribe = async () => {
        try {
            alertPending()
            const response = await fetchInfoSubscribe(modelData.uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                setModelData(data);
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

    return (
        <>
            <PageHeader title={"Détail d'abonnement"}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/subscription')} >
                    <i className="zmdi zmdi-accounts-list-alt"></i>{' '}
                    Liste des abonnements</Button>
            </PageHeader>
            Ajout abonnement
        </>
    );
}

export default ShowAbonnement;
