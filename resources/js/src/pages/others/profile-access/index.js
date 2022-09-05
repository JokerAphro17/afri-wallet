import React, { useState } from "react";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { updateAccountPassword } from "../../../api/request";
import useAuth from "../../../utilities/hook/useAuth";
import { errorNotif, successNotif } from "../../../components/notification";
import { formatPropValueToString } from "../../../api/client";
import PageHeader from "../../../layouts/components/page-header";

const ProfileAccessEdit = () => {
    const auth = useAuth();
    const [formAccess, setFormAccess] = useState({
        old_password: "",
        password: "",
        cpassword: "",
    });
    const [errorFormAccess, setErrorFormAccess] = useState({
        password: "",
        cpassword: "",
        old_password: "",
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsloading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // resolver: yupResolver(validationSchema)
    });
    // const validationSchema = Yup.object().shape({
    //     password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters'),
    //     new_password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters'),
    //     password_confirmation: Yup.string()
    //         .when('new_password', (new_password, schema) => {
    //             if (new_password) return schema.required('Confirm Password is required');
    //         })
    //         .oneOf([Yup.ref('new_password')], 'Passwords must match')
    // })

    const onSubmit = async () => {
        if (
            !formAccess.old_password ||
            !formAccess.password ||
            !formAccess.cpassword
        ) {
            const _message = "mot de passe est requis";
            setErrorFormAccess({
                old_password: !formAccess.old_password
                    ? `L'actuelle ${_message}`
                    : "",
                password: !formAccess.password ? `Le nouveau ${_message}` : "",
                cpassword: !formAccess.cpassword
                    ? `Confirmer nouveau ${_message}`
                    : "",
            });
            return;
        }

        try {
            setIsloading(true);
            await updateAccountPassword(formAccess);
            successNotif(
                "Notification",
                "Mot de passe mise à jour avec succès."
            );
            auth.signout();
        } catch (error) {
            setIsloading(false);
            let _message = "";
            let _errorForm = {
                password: "",
                new_password: "",
                password_confirmation: "",
            };
            if (typeof error === "object") {
                _errorForm = formatPropValueToString(error, _errorForm);
            } else {
                _message = error;
                errorNotif("Avertissement", _message);
            }
            setMessage(_message);
            setErrorFormAccess(_errorForm);
        }
    };

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;
        setFormAccess({
            ...formAccess,
            [name]: value,
        });
    };

    return (
        <>
            <PageHeader title={"Modification des accès du profil connecté"} />
            <Card body>
                <Card.Title>Modification de vos accès</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Veuillez renseigner les informations demandées dans le
                    formulaire puis cliquer sur le bouton
                </Card.Subtitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {message ? (
                        <Alert variant={"danger"}>
                            <small>{message}</small>
                        </Alert>
                    ) : null}
                    <Row>
                        <Col md={6} sm={12}>
                            <Form.Group
                                className="mb-3"
                                controlId="formPassword"
                            >
                                <Form.Label>Mot de passe actuelle</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="old_password"
                                    {...register("old_password", {
                                        required: true,
                                    })}
                                    value={formAccess.old_password}
                                    onChange={handlerInput}
                                    className={`${
                                        errors?.old_password ||
                                        errorFormAccess?.old_password
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Renseigner le mot de passe"
                                />
                                {errors?.password?.type ||
                                errorFormAccess?.old_password ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.password?.type ===
                                            "required" &&
                                            "Ce champ est requis") ||
                                            errorFormAccess?.old_password}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formNewPassword"
                            >
                                <Form.Label>Le nouveau mot de passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    value={formAccess.password}
                                    onChange={handlerInput}
                                    className={`${
                                        errors?.password ||
                                        errorFormAccess?.password
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Renseigner le nouveau mot de passe"
                                />
                                {errors?.password ||
                                errorFormAccess?.password ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.password?.type ===
                                            "required" &&
                                            "Ce champ est requis") ||
                                            errorFormAccess?.password}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group
                                className="mb-3"
                                controlId="formCNewPassword"
                            >
                                <Form.Label>
                                    Confirmer le nouveau mot de passe
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="cpassword"
                                    {...register("cpassword", {
                                        required: true,
                                    })}
                                    value={formAccess.cpassword}
                                    onChange={handlerInput}
                                    className={`${
                                        errors?.cpassword ||
                                        errorFormAccess?.cpassword
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    placeholder="Confirmer le nouveau mot de passe"
                                />
                                {errors?.cpassword ||
                                errorFormAccess?.cpassword ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.cpassword?.type ===
                                            "required" &&
                                            "Ce champ est requis") ||
                                            errorFormAccess?.cpassword}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button
                        disabled={isLoading}
                        variant="primary"
                        type="submit"
                    >
                        Modifier le mot de passe{" "}
                        <Spinner
                            animation="border"
                            hidden={!isLoading}
                            size="sm"
                        />
                    </Button>
                </Form>
            </Card>
        </>
    );
};

export default ProfileAccessEdit;
