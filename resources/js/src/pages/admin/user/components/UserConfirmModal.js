import React from "react";
import {Button, Modal, Spinner} from 'react-bootstrap';

const UserConfirmModal = ({showModal, handleClose, confirmAction, message, title, loading}) => {
    return (
        <>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                {title ?  (
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                ) : null}
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        disabled={loading}
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Annuler
                    </Button>
                    <Button
                        variant="success"
                        disabled={loading}
                        onClick={confirmAction}
                    >
                        <Spinner hidden={!loading} size="sm" />
                        Procéder
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserConfirmModal;
