import classNames from 'classnames';
import Cleave from 'cleave.js/react';
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import DropFileImage from '../../../../components/drop-file-image';
import DropFileDocument from '../../../../components/drop-file-document';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormNews = ({modelForm, errorModelForm, isLoading, onBtnAction}) => {
    const [fieldForm, setFieldForm] = useState({
        type: '',
        numero: '',
        date_pub: '',
        visible: true,
        cover: {},
        news: {},
        nombre_page: 0,
        sommaire: ''
    });
    const [errorFieldForm, setErrorFieldForm] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        if(modelForm?.numero) {
            setFieldForm({...fieldForm, ...modelForm})
        }
    }, [modelForm])

    useEffect(() => {
        if(errorModelForm) {
            setErrorFieldForm({...errorFieldForm, ...errorModelForm});
        }
    }, [errorModelForm]);

    const handlerInput = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target?.value;
        const name = target?.name;

        setFieldForm({
            ...fieldForm,
            [name]: value,
        })
    }

    const onSubmit = () => {
        if(!fieldForm?.cover || !fieldForm?.news) {
            setErrorFieldForm({
                ...errorFieldForm,
                cover: !fieldForm?.cover ? `Le fichier de couverture est requis` : '',
                news: !fieldForm?.news ? `Le fichier journal est requis` : ''
            })
            return;
        }
        onBtnAction(fieldForm);
    }
    return (
        <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Card body>
                <Row>
                    <Col sm={12} md={4}>
                        <Form.Group className="mb-3" controlId="formUserLastname">
                            <Form.Label>Image de couverture <span className='text-danger'>*</span></Form.Label>
                            <DropFileImage
                                maxFiles={1}
                                images={Object.keys(fieldForm?.cover).length === 0 ? [] : [fieldForm?.cover]}
                                imageUplaod={(_file) => setFieldForm({...fieldForm, cover: _file[0]})} />
                            {errorModelForm?.cover ? (
                                <Form.Text className="text-danger">{errorModelForm.cover}</Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={8}>
                        <Row>
                            <Col sm={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Numéro <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='numero'
                                        {...register('numero', { required: true })}
                                        onChange={handlerInput}
                                        value={fieldForm?.numero ?? ''}
                                        placeholder="Renseigner le numéro"
                                        className={classNames({'is-invalid': errorModelForm?.numero || errors?.numero})}
                                    />
                                    {errorModelForm?.numero || errors?.numero ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.numero?.type === 'required' && "Ce champ numéro est requis")
                                                || errorModelForm?.numero}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className='d-md-flex justify-content-md-end text-md-rights'>
                                    <Form.Group>
                                        <Form.Label>Vedette</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            // className='custom-control-input'
                                            checked={fieldForm.star ?? false}
                                            label={`${fieldForm.star ? 'Oui' : 'Non'}`}
                                            onChange={() => setFieldForm({...fieldForm, star: !fieldForm.star})}
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className='d-md-flex justify-content-md-end text-md-rights'>
                                    <Form.Group>
                                        <Form.Label>Statut</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            // className='custom-control-input'
                                            checked={fieldForm.visible ?? false}
                                            label={`${!fieldForm.visible ? 'Accessible' : 'Inaccessible'}`}
                                            onChange={() => setFieldForm({...fieldForm, visible: !fieldForm.visible})}
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <Form.Group>
                                    <Form.Label>Date de publication <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type='date'
                                        name='date_pub'
                                        {...register('date_pub', { required: true })}
                                        onChange={handlerInput}
                                        value={fieldForm?.date_pub ?? ''}
                                        placeholder="Renseigner la date de publication"
                                        className={classNames({'is-invalid': errorModelForm?.date_pub || errors?.date_pub})}
                                    />
                                    {errorModelForm?.date_pub || errors?.date_pub ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.date_pub?.type === 'required' && "Ce champ date de publication est requis.")
                                                || (errors?.date_pub?.type === 'max' && "Ce champ date de publication doit etre inférieure à celle d'aujourd'hui.")
                                                || errorModelForm?.date_pub}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={4}>
                                <Form.Group className="mb-3" controlId="formUserType">
                                    <Form.Label>Type <span className='text-danger'>*</span></Form.Label>
                                    <Form.Select
                                        name="type"
                                        value={fieldForm?.type ?? ''}
                                        {...register('type', { required: true })}
                                        onChange={handlerInput}
                                        className={`form-control ${errorModelForm?.type || errors?.type ? 'is-invalid' : ''}`}>
                                        <option value={''}>Choisir le type</option>
                                        <option value={'ordinaire'}>Ordinaire</option>
                                        <option value={'speciale'}>Spéciale</option>
                                    </Form.Select>
                                    {errorModelForm?.type || errors?.type ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.type?.type === 'required' && "Ce champ type est requis")
                                                || errorModelForm.type}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={4}>
                                <Form.Group>
                                    <Form.Label>Nombre de page <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='nombre_page'
                                        {...register('nombre_page', { required: true, min: 1 })}
                                        onChange={handlerInput}
                                        value={fieldForm?.nombre_page ?? ''}
                                        placeholder="Renseigner la date de publication"
                                        className={classNames({'is-invalid': errorModelForm?.nombre_page || errors?.nombre_page})}
                                    />
                                    {errorModelForm?.nombre_page || errors?.nombre_page ? (
                                        <Form.Text className="text-danger">
                                            {(errors?.nombre_page?.type === 'required' && "Ce champ date de publication est requis")
                                                || (errors?.nombre_page?.type === 'min' && "Ce champ nombre de page est requis")
                                                || errorModelForm?.nombre_page}
                                        </Form.Text>
                                    ) : null}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Card body>
                <Row>
                    <Col sm={12} md={8}>
                        <Form.Group className="mb-3" controlId="formUserType">
                            <Form.Label>Sommaire</Form.Label>
                            <ReactQuill
                                theme='snow'
                                placeholder="Renseigner le sommmaire"
                                value={fieldForm?.sommaire ?? ''}
                                onChange={(text) => setFieldForm({...fieldForm, sommaire: text})}
                             />
                            {errorModelForm?.sommaire || errors?.sommaire ? (
                                <Form.Text className="text-danger">
                                    {(errors?.sommaire?.type === 'required' && "Ce champ sommaire est requis")
                                        || errorModelForm?.sommaire}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={4}>
                        <Form.Group className="mb-3" controlId="formUserType">
                            <Form.Label>Le journal à joindre <span className='text-danger'>*</span></Form.Label>
                            <DropFileDocument
                                maxFiles={1}
                                listFiles={Object.keys(fieldForm?.news).length === 0 ? [] : [fieldForm?.news]}
                                fileUplaod={(files) => setFieldForm({...fieldForm, news: files[files?.length-1 ?? 0]})}
                            />
                            {errorModelForm?.news ? (
                                <Form.Text className="text-danger">
                                    {errorModelForm?.news}
                                </Form.Text>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
            </Card>

            <Card body>
                <Button disabled={isLoading} variant={modelForm?.uuid ? 'secondary' : 'primary'} type="submit">
                    {modelForm?.uuid ? 'Modifier' : 'Enregistrer'}{'  '}
                    <Spinner animation="border" hidden={!isLoading} size="sm" />
                </Button>
            </Card>
        </Form>
        </>
    );
}

export default FormNews;
