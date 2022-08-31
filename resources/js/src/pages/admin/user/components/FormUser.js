import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.bf";
import Cleave from "cleave.js/react";
import classname from "classnames";
import useAuth from "../../../../utilities/hook/useAuth";

const FormUser = ({ userModel, errorUserModel, isLoading, onSubmitAction }) => {
    const [formProfile, setFormProfile] = useState({
        uuid: "",
        lastname: "",
        firstname: "",
        genre: "",
        email: "",
        role: "",
        adresse: "",
        direction: "",
        service: "",
        fonction: "",
        telephone: "",
        avatar: {},
    });
    const [errorFormProfile, setErrorFormProfile] = useState({
        lastname: "",
        firstname: "",
        genre: "",
        email: "",
        role: "",
        adresse: "",
        direction: "",
        service: "",
        fonction: "",
        telephone: "",
        avatar: "",
    });
    const auth = useAuth();

    useEffect(() => {
        if (userModel) {
            setFormProfile({
                uuid: userModel?.uuid ?? formProfile?.uuid ?? "",
                lastname: userModel?.lastname ?? formProfile?.lastname ?? "",
                firstname: userModel?.firstname ?? formProfile?.firstname ?? "",
                genre: userModel?.genre ?? formProfile?.genre ?? "",
                email: userModel?.email ?? formProfile?.email ?? "",
                role: userModel?.role ?? formProfile?.role ?? "",
                adresse: userModel?.adresse ?? formProfile?.adresse ?? "",
                direction: userModel?.direction ?? formProfile?.direction ?? "",
                service: userModel?.service ?? formProfile?.service ?? "",
                fonction: userModel?.fonction ?? formProfile?.fonction ?? "",
                telephone: userModel?.telephone ?? formProfile?.telephone ?? "",
                avatar: userModel?.avatar ?? formProfile?.avatar ?? {},
            });
        }
    }, [userModel]);

    useEffect(() => {
        if (errorUserModel) {
            setErrorFormProfile({
                lastname:
                    errorUserModel?.lastname ??
                    errorFormProfile?.lastname ??
                    "",
                firstname:
                    errorUserModel?.firstname ??
                    errorFormProfile?.firstname ??
                    "",
                genre: errorUserModel?.genre ?? errorFormProfile?.genre ?? "",
                email: errorUserModel?.email ?? errorFormProfile?.email ?? "",
                role: errorUserModel?.role ?? errorFormProfile?.role ?? "",
                adresse:
                    errorUserModel?.adresse ?? errorFormProfile?.adresse ?? "",
                direction:
                    errorUserModel?.direction ??
                    errorFormProfile?.direction ??
                    "",
                service:
                    errorUserModel?.service ?? errorFormProfile?.service ?? "",
                fonction:
                    errorUserModel?.fonction ??
                    errorFormProfile?.fonction ??
                    "",
                telephone:
                    errorUserModel?.telephone ??
                    errorFormProfile?.telephone ??
                    "",
                avatar:
                    errorUserModel?.avatar ?? errorFormProfile?.avatar ?? "",
            });
        }
    }, [errorUserModel]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;
        setFormProfile({
            ...formProfile,
            [name]: value,
        });
    };

    const onSubmit = () => {
        if (!formProfile?.role) {
            setErrorFormProfile({
                ...errorFormProfile,
                role: "le champ role est requis.",
            });
            return;
        }
        onSubmitAction(formProfile);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Card body>
                <Card.Title>Information personnel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Veuillez renseigner les informations personnelles de
                    l'utilisateur concerné
                </Card.Subtitle>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group
                            className="mb-3"
                            controlId="formUserLastname"
                        >
                            <Form.Label>Nom de famille</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastname"
                                value={formProfile?.lastname ?? ""}
                                onChange={handlerInput}
                                className={`${
                                    errorFormProfile?.lastname ||
                                    errors?.lastname
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Renseigner le nom de famille"
                            />
                            {errorFormProfile?.lastname || errors?.lastname ? (
                                <Form.Text className="text-danger">
                                    {(errors?.lastname?.type === "required" &&
                                        "Ce champ nom de famille est requis") ||
                                        errorFormProfile?.lastname}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formUserFirstname"
                        >
                            <Form.Label>Prenom(s)</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstname"
                                value={formProfile?.firstname ?? ""}
                                onChange={handlerInput}
                                className={`${
                                    errorFormProfile?.firstname ||
                                    errors?.firstname
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Renseigner le(s) prenom(s)"
                            />
                            {errorFormProfile?.firstname ||
                            errors?.firstname ? (
                                <Form.Text className="text-danger">
                                    {(errors?.firstname?.type === "required" &&
                                        "Ce champ prenom(s) est requis") ||
                                        errorFormProfile.firstname}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formUserFirstname"
                        >
                            <Form.Label>Numéro de téléphone</Form.Label>
                            <Cleave
                                className={classname("form-control", {
                                    "is-invalid":
                                        errorFormProfile?.telephone ||
                                        errors?.telephone,
                                })}
                                name="telephone"
                                value={formProfile?.telephone ?? ""}
                                placeholder="Renseigner le numéro de téléphone"
                                options={{ phone: true, phoneRegionCode: "BF" }}
                                onChange={handlerInput}
                            />
                            {errorFormProfile?.telephone ||
                            errors?.telephone ? (
                                <Form.Text className="text-danger">
                                    {(errors?.telephone?.type === "required" &&
                                        "Ce champ telephone est requis") ||
                                        errorFormProfile.telephone}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formUserGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Select
                                name="genre"
                                value={formProfile?.genre ?? ""}
                                onChange={handlerInput}
                                className={`form-control ${
                                    errorFormProfile?.genre || errors?.genre
                                        ? "is-invalid"
                                        : ""
                                }`}
                            >
                                <option value={""}>Choisir le genre</option>
                                <option value={"Male"}>Masculin</option>
                                <option value={"Female"}>Feminin</option>
                                <option value={"None"}>Non defini</option>
                            </Form.Select>
                            {errorFormProfile?.genre || errors?.genre ? (
                                <Form.Text className="text-danger">
                                    {(errors?.genre?.type === "required" &&
                                        "Ce champ genre est requis") ||
                                        errorFormProfile.genre}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formUserFirstname"
                        >
                            <Form.Label>Adresse domicilié</Form.Label>
                            <Form.Control
                                type="text"
                                name="adresse"
                                value={formProfile?.adresse ?? ""}
                                onChange={handlerInput}
                                className={`${
                                    errorFormProfile?.adresse || errors?.adresse
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Renseigner l'adresse domiciliée"
                            />
                            {errorFormProfile?.adresse || errors?.adresse ? (
                                <Form.Text className="text-danger">
                                    {(errors?.adresse?.type === "required" &&
                                        "Ce champ adresse est requis") ||
                                        errorFormProfile.adresse}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
            </Card>
            <Card body>
                <Card.Title>Information d'accès</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Veuillez renseigner les informations permettant à
                    l'utilisateur de se connecter
                </Card.Subtitle>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formUserEmail">
                            <Form.Label>Adresse mail</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formProfile?.email ?? ""}
                                onChange={handlerInput}
                                className={`${
                                    errorFormProfile?.email || errors?.email
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Renseigner l'adresse mail"
                            />
                            {errorFormProfile?.email || errors?.email ? (
                                <Form.Text className="text-danger">
                                    {(errors?.email?.type === "required" &&
                                        "Ce champ adresse mail est requis") ||
                                        errorFormProfile.email}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3" controlId="formUserRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                name="role"
                                value={formProfile?.role ?? ""}
                                onChange={handlerInput}
                                className={`form-control ${
                                    errorFormProfile?.role || errors?.role
                                        ? "is-invalid"
                                        : ""
                                }`}
                            >
                                <option value={""}>Choisir le role</option>
                                {console.log(formProfile?.role)}
                                {auth?.user.role === "superadmin" ? (
                                    <option value={"superadmin"}>
                                        SUPER ADMIN
                                    </option>
                                ) : (
                                    ""
                                )}

                                <option value={"admin"}>Administrateur</option>
                            </Form.Select>
                            {errorFormProfile?.role || errors?.role ? (
                                <Form.Text className="text-danger">
                                    {(errors?.role?.type === "required" &&
                                        "Ce champ role est requis") ||
                                        errorFormProfile.role}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
            </Card>
            <Card body>
                <Button
                    disabled={isLoading}
                    variant={userModel?.uuid ? "secondary" : "primary"}
                    type="submit"
                >
                    {userModel?.uuid ? "Modifier" : "Enregistrer"}{" "}
                    <Spinner animation="border" hidden={!isLoading} size="sm" />
                </Button>
            </Card>
        </Form>
    );
};

export default FormUser;
