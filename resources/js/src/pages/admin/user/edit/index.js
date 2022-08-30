import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row } from "react-bootstrap";
import FormUser from '../components/FormUser';
import { errorNotif, successNotif } from '../../../../components/notification';
import { fetchInfoUser, updatedUserInfo } from '../../../../api/request';
import { API_STORAGE_URL } from '../../../../utilities/constant/app.constant';
import { formatPropValueToString } from '../../../../api/client';
import PageHeader from '../../../../layouts/components/page-header';

const EditUser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formProfile, setFormProfile] = useState({
        uuid: "",
        lastname: "",
        firstname: "",
        genre: "",
        email: "",
        role: "",
        avatar: {},
    });
    const [errorFormProfile, setErrorFormProfile] = useState({
        lastname: "",
        firstname: "",
        genre: "",
        email: "",
        role: "",
        avatar: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [fetchData, setFetchData] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const {state} = location;
        if(state?.uuid) {
            if(!fetchData) {
                setFetchData(true);
            }
            setFormProfile({
                ...formProfile,
                uuid: state.uuid,
            })
        } else {
            navigate(-1)
        }
    }, [location?.state?.uuid])

    useEffect(() => {
        if (formProfile.uuid && !formProfile.lastname) {
            (async () => await fetchAllUsers())()
        }
    }, [formProfile?.uuid, formProfile.lastname])

    const fetchAllUsers = async () => {
        try {
            setFetchData(true);
            const response = await fetchInfoUser(formProfile.uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                const _profile = {
                    ...data,
                    avatar: !data?.avatar ? {} : {preview: `${API_STORAGE_URL}/${avatar}`}
                }
                setFormProfile(_profile);
            }
            setFetchData(false);
        } catch (error) {
            setFetchData(false);
            if(typeof error === 'object') {
            } else {
                errorNotif('Avertissement', error);
            }
        }
    };

    const onUpdated = async (modelData) => {
        const params = {
            uuid: formProfile?.uuid ?? "",
            lastname: modelData?.lastname ?? "",
            firstname: modelData?.firstname ?? "",
            genre: modelData?.genre ?? "None",
            email: modelData?.email ?? "",
            role: modelData?.role ?? "",
            adresse: modelData?.adresse ?? '',
            direction: modelData?.direction ?? '',
            service: modelData?.service ?? '',
            fonction: modelData?.fonction ?? '',
            telephone: modelData?.telephone ?? '',
            avatar: modelData?.avatar?.preview ? modelData.avatar : null,
        }
        try {
            setIsLoading(true);
            await updatedUserInfo(formProfile?.uuid, params);
            successNotif('Notification', `Les informations de l'utilisateur ${modelData?.lastname} ${modelData?.firstname} a été mise à jour avec succès.`)
            // navigate('/handlers/users/show', {state: {uuid: ''});
            navigate('/handlers/account-admins');
        } catch (error) {
            setFormProfile(modelData);
            setIsLoading(false);
            let _message = '';
            let _errorForm = {
                lastname: "",
                firstname: "",
                genre: "",
                email: "",
                role: "",
                avatar: "",
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif('Avertissement', _message);
            }
            setMessage(_message);
            setErrorFormProfile(_errorForm)
        }
    }

    return (
        <>
            <PageHeader title={'Modifier le profil utilisateur'}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/account-admins')} >
                    <i className="zmdi zmdi-accounts-list-alt"></i>{' '}
                    Liste des utilisateurs</Button>
            </PageHeader>
            {fetchData ? (
                <div>Veuillez patienter ...</div>
            ) : (
                <FormUser
                    userModel={formProfile}
                    errorUserModel={errorFormProfile}
                    isLoading={isLoading}
                    onSubmitAction={onUpdated}
                />
            )}
        </>
    );
}

export default EditUser;
