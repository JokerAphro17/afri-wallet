import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { formatPropValueToString } from '../../../../api/client';
import { addNewspaper } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import { alertClosed, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';
import FormNews from '../components/FormNews';

const AddAbonnement = () => {
    const navigate = useNavigate();
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

    const onSave = async (field) => {
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
            await addNewspaper(data);
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
            <PageHeader title={'Nouveau abonnement'}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/newspapers')} >
                    <i className="zmdi zmdi-format-list-bulleted"></i>{' '}
                    Liste des journaux</Button>
            </PageHeader>
            <FormNews
                onBtnAction={onSave}
                modelForm={modelForm}
                isLoading={isLoading}
                errorModelForm={errorModelForm}
            />
        </>
    );
}

export default AddAbonnement;
