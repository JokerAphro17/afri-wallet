import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formatPropValueToString } from "../../../api/client";
import { alertClosed, alertPending } from "../../../components/sweet-alert";
import HANDLER_STORAGE from "../../../data";
import PageHeader from "../../../layouts/components/page-header";
import { API_STORAGE_URL, USER_SESSION } from "../../../utilities/constant/app.constant";
import 'cleave.js/dist/addons/cleave-phone.bf';
import Cleave from 'cleave.js/react';
import classname from 'classnames';
import { fetchInfoUser, updatedAccountInfo } from "../../../api/request";
import { errorNotif, successNotif } from "../../../components/notification";

const ProfileEdit = () => {
    const userModel = (HANDLER_STORAGE.GET(USER_SESSION, 'object'))?.data ?? null;
    const [formProfile, setFormProfile] = useState({
        lastname: '',
        firstname: '',
        email: '',
        role: '',
        adresse: '',
        direction: '',
        service: '',
        fonction: '',
        telephone: '',
        avatar: {},
    })
    const [errorFormProfile, setErrorFormProfile] = useState({
        lastname: '',
        firstname: '',
        email: '',
        role: '',
        adresse: '',
        direction: '',
        service: '',
        fonction: '',
        telephone: '',
        avatar: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(userModel?.token && !formProfile?.firstname && userModel?.uuid) {
            setFormProfile({
                ...formProfile,
                lastname: userModel?.lastname ?? formProfile?.lastname ?? '',
                firstname: userModel?.firstname ?? formProfile?.firstname ?? '',
                email: userModel?.email ?? formProfile?.email ?? '',
                role: userModel?.role ?? formProfile?.role ?? '',
                adresse: userModel?.adresse ?? formProfile?.adresse ?? '',
                direction: userModel?.direction ?? formProfile?.direction ?? '',
                service: userModel?.service ?? formProfile?.service ?? '',
                fonction: userModel?.fonction ?? formProfile?.fonction ?? '',
                telephone: userModel?.telephone ?? formProfile?.telephone ?? '',
                avatar: userModel?.avatar ?? formProfile?.avatar ?? {},
            });
            (async () => await fetchAllUsers())()
        }
    }, [userModel])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const fetchAllUsers = async () => {
        try {
            alertPending();
            const response = await fetchInfoUser(userModel?.uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                const _profile = {
                    ...data,
                    avatar: !data?.avatar ? {} : {preview: `${API_STORAGE_URL}/${avatar}`}
                }
                setFormProfile(_profile);
            }
            alertClosed();
        } catch (error) {
            alertClosed();
            if(typeof error === 'object') {
            } else {
                errorNotif('Avertissement', error);
            }
        }
    };

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;
        setFormProfile({
            ...formProfile,
            [name]: value,
        })
    }

    const onUpdated = async (modelData) => {
        alertPending();
        try {
            await updatedAccountInfo({...formProfile, avatar: formProfile?.avatar?.preview ? formProfile.avatar : null});
            alertClosed();
            successNotif(
                'Notification',
                `Les informations de l'utilisateur ${formProfile?.lastname} ${formProfile?.lastname} a été mise à jour avec succès.`)
        } catch (error) {
            alertClosed();
            let _message = '';
            let _errorForm = {
                lastname: "",
                firstname: "",
                genre: "",
                email: "",
                role: "",
                adresse: '',
                direction: '',
                service: '',
                fonction: '',
                telephone: '',
                avatar: "",
            };
            if(typeof error === 'object') {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif('Avertissement', _message);
            }
            setErrorFormProfile(_errorForm)
        }
    }

    return (
        <>
            <PageHeader title={'Modification des informations du profil connecté'} />
            <Form onSubmit={handleSubmit(onUpdated)}>
                <Card body>
                    <Card.Title>Information personnel</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Veuillez renseigner les informations personnelles de l'utilisateur concerné</Card.Subtitle>
                    <Row>
                        {/* <Col sm={12} md={6}>
                            <Form.Group className="mb-3" controlId="formUserLastname">
                                <Form.Label>Photo de profil</Form.Label>
                                <DropFileImage
                                    maxFiles={1}
                                    images={Object.keys(formProfile?.avatar).length === 0 ? [] : [formProfile?.avatar]}
                                    imageUplaod={(_file) => setFormProfile({...formProfile, avatar: _file[0]})} />
                                {errorFormProfile?.avatar ? (
                                    <Form.Text className="text-danger">{errorFormProfile.avatar}</Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col> */}
                        <Col sm={12} md={6}>
                            <Form.Group className="mb-3" controlId="formUserLastname">
                                <Form.Label>Nom de famille</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    {...register('lastname', { required: true })}
                                    value={formProfile?.lastname ?? ''}
                                    onChange={handlerInput}
                                    className={`${errorFormProfile?.lastname || errors?.lastname ? 'is-invalid' : ''}`}
                                    placeholder="Renseigner le nom de famille"
                                />
                                {errorFormProfile?.lastname || errors?.lastname ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.lastname?.type === 'required' && "Ce champ nom de famille est requis")
                                            || errorFormProfile?.lastname}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formUserFirstname">
                                <Form.Label>Prenom(s)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    {...register('firstname', { required: true })}
                                    value={formProfile?.firstname ?? ''}
                                    onChange={handlerInput}
                                    className={`${errorFormProfile?.firstname || errors?.firstname ? 'is-invalid' : ''}`}
                                    placeholder="Renseigner le(s) prenom(s)"
                                />
                                {errorFormProfile?.firstname || errors?.firstname ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.firstname?.type === 'required' && "Ce champ prenom(s) est requis")
                                            || errorFormProfile.firstname}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group className="mb-3" controlId="formUserFirstname">
                                <Form.Label>Numéro de téléphone</Form.Label>
                                <Cleave
                                    className={classname('form-control', {'is-invalid': errorFormProfile?.telephone || errors?.telephone})}
                                    name="telephone"
                                    value={formProfile?.telephone ?? ''}
                                    placeholder="Renseigner le numéro de téléphone"
                                    options={{phone: true, phoneRegionCode: 'BF'}}
                                    onChange={handlerInput} />
                                {errorFormProfile?.telephone || errors?.telephone ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.telephone?.type === 'required' && "Ce champ telephone est requis")
                                            || errorFormProfile.telephone}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formUserFirstname">
                                <Form.Label>Adresse domicilié</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="adresse"
                                    {...register('adresse', { required: false })}
                                    value={formProfile?.adresse ?? ''}
                                    onChange={handlerInput}
                                    className={`${errorFormProfile?.adresse || errors?.adresse ? 'is-invalid' : ''}`}
                                    placeholder="Renseigner l'adresse domiciliée"
                                />
                                {errorFormProfile?.adresse || errors?.adresse ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.adresse?.type === 'required' && "Ce champ adresse est requis")
                                            || errorFormProfile.adresse}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                {userModel?.role !== 'user' ? (
                    <Card body>
                        <Card.Title>Information professionnelle</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Veuillez renseigner les informations professionnelle de l'utilisateur</Card.Subtitle>
                        <Row>
                            <Col sm={12} md={6}>
                                <Form.Group className="mb-3" controlId="formUserDirection">
                                    <Form.Label>Direction</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="direction"
                                        {...register('direction', { required: true })}
                                        value={formProfile?.direction ?? ''}
                                        onChange={handlerInput}
                                        className={`${errorFormProfile?.direction || errors?.direction ? 'is-invalid' : ''}`}
                                        placeholder="Renseigner la direction"
                                    />
                                    {errorFormProfile?.direction || errors?.direction ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.direction?.type === 'required' && "Ce champ direction est requis")
                                                || errorFormProfile.direction}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formUserFonction">
                                    <Form.Label>Fonction</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fonction"
                                        {...register('fonction', { required: true })}
                                        value={formProfile?.fonction ?? ''}
                                        onChange={handlerInput}
                                        className={`${errorFormProfile?.fonction || errors?.fonction ? 'is-invalid' : ''}`}
                                        placeholder="Renseigner la fonction"
                                    />
                                    {errorFormProfile?.fonction || errors?.fonction ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.fonction?.type === 'required' && "Ce champ fonction est requis")
                                                || errorFormProfile.fonction}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6}>
                                <Form.Group className="mb-3" controlId="formUserService">
                                    <Form.Label>Service</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="service"
                                        {...register('service', { required: true })}
                                        value={formProfile?.service ?? ''}
                                        onChange={handlerInput}
                                        className={`${errorFormProfile?.service || errors?.service ? 'is-invalid' : ''}`}
                                        placeholder="Renseigner le service"
                                    />
                                    {errorFormProfile?.service || errors?.service ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.service?.type === 'required' && "Ce champ service est requis")
                                                || errorFormProfile.service}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>
                ) : null}
                <Card body>
                    <Card.Title>Information d'accès</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Veuillez renseigner permettant à l'utilisateur de se connecter</Card.Subtitle>
                    <Row>
                        <Col sm={12} md={6}>
                            <Form.Group className="mb-3" controlId="formUserEmail">
                                <Form.Label>Adresse mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    {...register('email', { required: true })}
                                    value={formProfile?.email ?? ''}
                                    onChange={handlerInput}
                                    className={`${errorFormProfile?.email || errors?.email ? 'is-invalid' : ''}`}
                                    placeholder="Renseigner l'adresse mail"
                                />
                                {errorFormProfile?.email || errors?.email ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.email?.type === 'required' && "Ce champ adresse mail est requis")
                                            || errorFormProfile.email}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Group className="mb-3" controlId="formUserRole">
                                <Form.Label>Role</Form.Label>
                                <Form.Select
                                    disabled
                                    name="role"
                                    value={formProfile?.role ?? ''}
                                    onChange={handlerInput}
                                    className={`form-control ${errorFormProfile?.role || errors?.role ? 'is-invalid' : ''}`}>
                                    <option>Choisir le role</option>
                                    <option value={'journalist'}>Gestionnaire</option>
                                    <option value={'accounting'}>Comptable</option>
                                    <option value={'admin'}>Administrateur</option>
                                    <option value={'observer'}>Consultant</option>
                                </Form.Select>
                                {errorFormProfile?.role || errors?.role ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.role?.type === 'required' && "Ce champ role est requis")
                                            || errorFormProfile.role}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                <Card body>
                    <Button disabled={isLoading} variant={'secondary'} type="submit">
                        Modifier <Spinner animation="border" hidden={!isLoading} size="sm" />
                    </Button>
                </Card>
            </Form>
        </>
    );
}

export default ProfileEdit;
