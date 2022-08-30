import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../../api/client';
import { fetchInfoNewspaper, updatedNewspaperInfo } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';
import { API_STORAGE_URL } from '../../../../utilities/constant/app.constant';
import FormNews from '../components/FormNews';

const EditAbonnement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [modelForm, setModelForm] = useState({
        news: {},
        cover: {},
        libelle: '',
        type: '',
        numero: '',
        date_pub: '',
        visible: true,
    })
    const [errorModelForm, setErrorModelForm] = useState({
        libelle: '',
        type: '',
        numero: '',
        date_pub: '',
        news: '',
        cover: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const {state} = location;
        if(state?.uuid) {
            (async () => await fetchNew(state.uuid))()
        } else {
            navigate(-1)
        }
    }, [location?.state?.uuid]);

    const fetchNew = async (uuid) => {
        try {
            alertPending()
            const response = await fetchInfoNewspaper(uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                setModelForm({
                    ...data,
                    cover: data?.image_cover ? {preview: `${API_STORAGE_URL}/${data.image_cover}`} : {},
                    news: data?.url_news ? {
                        preview: `http://localhost:8000/storage/newspapers/bL0pUo1b1Z8p2GIl29YGrHZoOJRkFpIhq8P0srxT.pdf`,
                        type: "application/pdf",
                        name: `Journal numero ${data?.numero}`
                    } : {}
                });
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
        const data = new FormData();
        data.append('type', field?.type ?? null);
        data.append('numero', field?.numero ?? null);
        data.append('date_pub', field?.date_pub ?? null);
        data.append('visible', field?.visible ? 1 : 0);
        data.append('sommaire', field?.sommaire ?? null);
        data.append('nombre_page', field?.nombre_page ?? null);
        data.append('cover', field?.cover?.preview ? field.cover : null);
        data.append('news', field?.news?.preview ? field.news : null);
        try {
            await updatedNewspaperInfo(field?.uuid, data);
            alertClosed()
            setIsLoading(false);
            successNotif('Notification', 'Abonnement enregistré avec succès.')
            navigate('/handlers/newspapers');
        } catch (error) {
            alertClosed()
            setIsLoading(false);
            let _message = '';
            let _errorForm = {
                libelle: '',
                type: '',
                numero: '',
                date_pub: '',
                news: '',
                cover: '',
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
            <PageHeader title={'Modification de journal'}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/newspapers')} >
                    <i className="zmdi zmdi-format-list-bulleted"></i>{' '}
                    Liste des journaux</Button>
            </PageHeader>
            <FormNews
                onBtnAction={onUpdated}
                modelForm={modelForm}
                isLoading={isLoading}
                errorModelForm={errorModelForm}
            />
        </>
    );
}

export default EditAbonnement;
