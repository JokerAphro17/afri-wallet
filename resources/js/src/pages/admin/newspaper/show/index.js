import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchInfoNewspaper, fetchInfoSubscribe } from '../../../../api/request';
import { errorNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';

const ShowNewspaper = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [modelData, setModelData] = useState({
        libelle: '',
        type: '',
        numero: '',
        date_pub: '',
        visible: true,
    })

    useEffect(() => {
        const {state} = location;
        if(state?.uuid) {
            // (async () => await fetchNew())()
        } else {
            // navigate(-1)
        }
    }, [location?.state?.uuid]);

    const fetchNew = async () => {
        try {
            alertPending()
            const response = await fetchInfoNewspaper(modelData.uuid);
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
            <PageHeader title={"Détail de journal"}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/newspapers')} >
                    <i className="zmdi zmdi-accounts-list-alt"></i>{' '}
                    Liste des journaux</Button>
            </PageHeader>
            Détail Journal
        </>
    );
}

export default ShowNewspaper;
