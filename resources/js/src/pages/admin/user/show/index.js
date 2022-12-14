import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    fetchInfoUser,
    generateUserPassword,
    updateAcessAccount,
} from "../../../../api/request";
import { IconProfile } from "../../../../components/icones";
import { errorNotif, successNotif } from "../../../../components/notification";
import {
    API_STORAGE_URL,
    USER_SESSION,
} from "../../../../utilities/constant/app.constant";
import { Badge, Button, Card, Col, Modal, Row, Spinner } from "react-bootstrap";
import { roleToShow } from "../../../../utilities/helper";
import PageHeader from "../../../../layouts/components/page-header";
import moment from "moment";
import { alertClosed, alertPending } from "../../../../components/sweet-alert";
import UserConfirmModal from "../components/UserConfirmModal";
import HANDLER_STORAGE from "../../../../data";
import { avatar } from "@material-tailwind/react";
moment.locale("fr");

const ShowUser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formProfile, setFormProfile] = useState({
        uuid: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasGenerate, setHasGenerate] = useState(false);
    const [hasDisabled, setHasDisabled] = useState(false);
    const [showModalDisabled, setShowModalDisabled] = useState(false);

    const useConnect =
        HANDLER_STORAGE.GET(USER_SESSION, "object")?.data ?? null;

    useEffect(() => {
        const { state } = location;
        if (state?.uuid) {
            setFormProfile((formProfile.uuid = state.uuid));
            console.log(formProfile);
        } else {
            navigate(-1);
        }
    }, []);

    useEffect(() => {
        if (formProfile.uuid && !formProfile.lastname) {
            (async () => await fetchAllUsers())();
        }
    }, [formProfile?.uuid, formProfile?.lastname]);

    const fetchAllUsers = async () => {
        alertPending();
        setIsLoading(true);
        try {
            const response = await fetchInfoUser(formProfile.uuid);
            const data = response?.data?.data ?? null;
            console.log(data);
            if (data) {
                data.avatar = `${API_STORAGE_URL}/${data?.avatar}`;
                setFormProfile(data);
            }
            alertClosed();
            setIsLoading(false);
        } catch (error) {
            alertClosed();
            setIsLoading(false);
            if (typeof error === "object") {
            } else {
                errorNotif("Avertissement", error);
            }
        }
    };

    const generatePass = async () => {
        try {
            setHasGenerate(true);
            await generateUserPassword(formProfile.uuid);
            successNotif("Notification", "Mot de passe g??n??r?? avec succ??s.");
            setHasGenerate(false);
            setShowModal(false);
        } catch (error) {
            setHasGenerate(false);
            if (typeof error === "object") {
            } else {
                errorNotif("Avertissement", error);
            }
        }
    };

    const handlerRestriction = async () => {
        try {
            setHasDisabled(true);
            const response = await updateAcessAccount(formProfile.uuid);
            const data = response?.data?.data ?? null;
            if (data) {
                const _profile = {
                    ...data,
                    avatar: !data?.avatar
                        ? {}
                        : { preview: `${API_STORAGE_URL}/${avatar}` },
                };
                console.log("_profile :>> ", _profile);
                setFormProfile(_profile);
            }
            successNotif(
                "Notification",
                `Le compte a ??t?? ${
                    !formProfile?.is_active ? "activ??" : "d??sactiv??"
                } avec succ??s.`
            );
            setHasDisabled(false);
            setShowModalDisabled(false);
        } catch (error) {
            setHasDisabled(false);
            if (typeof error === "object") {
            } else {
                errorNotif("Avertissement", error);
            }
        }
    };

    return (
        <Fragment>
            <PageHeader title={"D??tail sur le profil"}>
                <Button
                    className="mr-2"
                    variant="dark"
                    size="md"
                    onClick={() => navigate(-1)}
                >
                    <i className="zmdi zmdi-accounts-list-alt"></i> Retour ?? la
                    liste
                </Button>
                {useConnect?.uuid !== formProfile?.uuid && !isLoading ? (
                    <Button
                        className="mr-2"
                        variant={`${
                            formProfile?.is_active ? "danger" : "success"
                        }`}
                        onClick={() => setShowModalDisabled(true)}
                    >
                        {!formProfile?.is_active ? (
                            <>
                                <i className="zmdi zmdi-check"></i>{" "}
                                D??verrouiller
                            </>
                        ) : (
                            <>
                                <i className="zmdi zmdi-block"></i> Verrouiller
                            </>
                        )}{" "}
                        le compte
                    </Button>
                ) : null}
                {formProfile?.role !== "user" &&
                useConnect?.uuid !== formProfile?.uuid ? (
                    <Button
                        variant="light"
                        size="md"
                        onClick={() =>
                            navigate("/handlers/account-admins/edit", {
                                state: { uuid: formProfile?.uuid },
                            })
                        }
                    >
                        <i className="zmdi zmdi-edit"></i> Modifier
                    </Button>
                ) : null}
            </PageHeader>
            <Row>
                <Col sm={12} md={{ span: 4, offset: 1 }}>
                    <Card body>
                        <div className="wideget-user text-center">
                            <div className="wideget-user-desc">
                                <div className="wideget-user-img">
                                    {formProfile?.avatar ? (
                                        <IconProfile
                                            className={"avatar-show"}
                                        />
                                    ) : (
                                        <img
                                            className=""
                                            src={`${API_STORAGE_URL}/${formProfile?.avatar}`}
                                            alt="img"
                                        />
                                    )}
                                </div>
                                <div className="user-wrap">
                                    <h4 className="mb-1">
                                        {formProfile?.firstname}{" "}
                                        {formProfile?.lastname}
                                    </h4>
                                    <h6 className="text-muted mb-4">
                                        Compte cr???? le{" "}
                                        {formProfile?.created_at
                                            ? moment(
                                                  formProfile?.created_at
                                              ).format("LL")
                                            : ""}
                                        {"  "}
                                    </h6>
                                    <p className="text-muter">
                                        {!formProfile?.is_active ? (
                                            <Badge
                                                pill
                                                variant="danger"
                                                bg="danger"
                                            >
                                                <strong className="text-white">
                                                    <i className="zmdi zmdi-lock-outline"></i>{" "}
                                                    Compte verrouill??
                                                </strong>
                                            </Badge>
                                        ) : (
                                            <Badge
                                                pill
                                                variant="success"
                                                bg="success"
                                            >
                                                <strong className="text-white">
                                                    <i className="zmdi zmdi-lock-open"></i>{" "}
                                                    Compte accessible
                                                </strong>
                                            </Badge>
                                        )}
                                    </p>
                                    {formProfile?.role !== "user" &&
                                    useConnect?.uuid !== formProfile?.uuid ? (
                                        <Button
                                            variant="warning"
                                            className="mt-2"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <i className="zmdi zmdi-lock-outline"></i>{" "}
                                            G??n??rer un nouveau mot de passe
                                        </Button>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={{ span: 4, offset: 1 }}>
                    <Card body>
                        <Card.Header>
                            <h5>
                                <strong>Information sur l'utilisateur</strong>
                            </h5>
                        </Card.Header>
                        <div className="wideget-user-contact mt-4">
                            <div className="media mb-5 mt-0">
                                <div className="d-flex mr-3">
                                    <span className="user-contact-icon bg-dark">
                                        <i className="zmdi zmdi-accounts text-white"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <a href="#" className="text-dark">
                                        Groupe de compte
                                    </a>
                                    <div className="text-muted fs-14">
                                        {(
                                            roleToShow(formProfile.role) ?? ""
                                        ).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                            <div className="media mb-5 mt-0">
                                <div className="d-flex mr-3">
                                    <span className="user-contact-icon bg-dark">
                                        <i className="fa fa-envelope text-white"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <a href="#" className="text-dark">
                                        Adresse mail
                                    </a>
                                    <div className="text-muted fs-14">
                                        {formProfile?.email ?? "---"}
                                    </div>
                                </div>
                            </div>
                            <div className="media mb-5 mt-0">
                                <div className="d-flex mr-3">
                                    <span className="user-contact-icon bg-dark">
                                        <i className="fa fa-globe text-white"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <a href="#" className="text-dark">
                                        Adresse
                                    </a>
                                    <div className="text-muted fs-14">
                                        {formProfile?.adresse ?? "---"}
                                    </div>
                                </div>
                            </div>
                            <div className="media mb-0 mt-0">
                                <div className="d-flex mr-3">
                                    <span className="user-contact-icon bg-dark">
                                        <i className="fa fa-phone text-white"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <a href="#" className="text-dark">
                                        Telephone
                                    </a>
                                    <div className="text-muted fs-14">
                                        {formProfile?.telephone ?? "---"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <UserConfirmModal
                showModal={showModal}
                handleClose={() => setShowModal(false)}
                confirmAction={generatePass}
                loading={hasGenerate}
                message={`
                    Etes-vous sur de bien vouloir generer le mot de passe de ce utilisateur ?
                    NB: Un mail lui sera envoy?? avec le nouveau mot de passe.
                `}
                title="Confirmation"
            />
            <UserConfirmModal
                showModal={showModalDisabled}
                handleClose={() => setShowModalDisabled(false)}
                confirmAction={handlerRestriction}
                loading={hasDisabled}
                message={`
                    Etes-vous sur de bien vouloir d??sactiver ce compte ?
                `}
                title="Confirmation"
            />
        </Fragment>
    );
};

export default ShowUser;
