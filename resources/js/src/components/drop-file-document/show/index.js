import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IconPdf, IconWord } from '../../icones';
import ViewDocumentPdf from '../view-pdf'

const ListPdfDocument = (props) => {
    const { files, onUpdateFiles } = props
    const [modal, setModal] = useState(false);
    const [fileView, setFileView] = useState({})

    const toggle = (e, file) => {
        setFileView({ url: file?.preview ? file?.preview : ``, name: file?.name })
        setModal(!modal)
    };

    const deleteItem = (e, file, position) => {
        const _files = files.filter((_file, index) => index !== position)
        onUpdateFiles(_files)
    }
    return (
        <>
            <div className="row w-100">
                {
                    files?.length > 0 ? (
                        files?.map((file, index) =>
                            <div key={index} className="col-12">
                                <div className="file-box-item text-center">
                                    {/* <a href="#" onClick={(e) => deleteItem(e, file, index)} className="btn-del" >
                                        <strong>X</strong>
                                    </a> */}
                                    <div onClick={(e) => toggle(e, file)}>
                                        {
                                            file.type == "application/pdf" ? (
                                                <IconPdf width="5em" height="5em" fill="red" />
                                            ) : (
                                                <IconWord fill="blue" />
                                            )
                                        }
                                        <span className="file-name">{file.name}</span>
                                    </div>
                                    {/* <span className="file-name">{file.name}</span> */}
                                </div>
                            </div>
                        )
                    ) : null
                }
                <Modal
                    show={modal}
                    onHide={toggle}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{fileView?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewDocumentPdf dataFile={fileView} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="secondary" size="md" onClick={toggle}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ListPdfDocument
