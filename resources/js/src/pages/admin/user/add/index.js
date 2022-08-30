import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formatPropValueToString } from "../../../../api/client";
import { addUsers } from "../../../../api/request";
import { errorNotif, successNotif } from "../../../../components/notification";
import PageHeader from "../../../../layouts/components/page-header";
import FormUser from "../components/FormUser";

const AddUser = () => {
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
    const [message, setMessage] = useState('');

    const onSave = async (modelData) => {
        const params = {
            uuid: modelData?.uuid ?? "",
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
        setFormProfile(params);
        try {
            setIsLoading(true);
            await addUsers(params);
            successNotif('Notification', `L'utilisateur ${modelData?.lastname} ${modelData?.firstname} a été enregistré avec succès.`)
            // navigate('/handlers/users/show', {state: {uuid: ''});
            navigate('/handlers/account-admins');
        } catch (error) {
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
    };

    return (
        <>
            <PageHeader title={'Nouveau utilisateur'}>
                <Button
                    variant="dark" size='md'
                    onClick={() => navigate('/handlers/account-admins')} >
                    <i className="zmdi zmdi-accounts-list-alt"></i>{' '}
                    Liste des utilisateurs</Button>
            </PageHeader>
            <FormUser
                userModel={formProfile}
                errorUserModel={errorFormProfile}
                isLoading={isLoading}
                onSubmitAction={onSave}
            />
        </>
    );
};

export default AddUser;
