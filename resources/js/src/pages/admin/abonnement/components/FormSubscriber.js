import classNames from 'classnames';
import Cleave from 'cleave.js/react';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { fetchLocalites } from '../../../../api/request';
import { errorNotif } from '../../../../components/notification';
import Select from 'react-select';

const FormSubscriber = ({modelForm, errorModelForm, isLoading, onBtnAction}) => {
    const [fieldForm, setFieldForm] = useState({
        libelle: '',
        prix: '',
        duree: '',
        visible: true,
        localite_id: 0
    })
    const [errorFieldForm, setErrorFieldForm] = useState({
        libelle: '',
        prix: '',
        duree: '',
        localite_id: '',
    })
    const [zones, setZones] = useState([]);
    const [isFetchData, setIsFetchData] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        (async () => await fetchLocal())()
    }, []);

    useEffect(() => {
        if(modelForm?.libelle) {
            setFieldForm({...fieldForm, ...modelForm})
        }
    }, [modelForm])

    useEffect(() => {
        if(errorModelForm) {
            setErrorFieldForm({...errorFieldForm, ...errorModelForm});
        }
    }, [errorModelForm]);


    const fetchLocal = async () => {
        try {
            const response = await fetchLocalites();
            const data = response?.data?.data ?? null;
            if (data) {
                let _localites = [];
                data.forEach(localite => {
                    _localites.push({label: localite?.libelle, value: localite?.id});
                })
                setZones(_localites);
            }
            setIsFetchData(false);
        } catch (error) {
            setIsFetchData(false);
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

        setFieldForm({
            ...fieldForm,
            [name]: value,
        })
    }

    const onSubmit = () => {
        if(!fieldForm?.prix || !fieldForm?.localite_id) {
            const _message = 'Le champ';
            setErrorFieldForm({
                ...errorFieldForm,
                prix: !fieldForm?.prix ? `${_message} momant est requis` : '',
                localite_id: !fieldForm?.localite_id ? `${_message} localité est requis` : ''
            })
            return;
        }
        onBtnAction(fieldForm);
    }

    return (
        <>
        {isFetchData ? (
            <span>Chargement en cours</span>
        ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card body>
                    <Row>
                        <Col sm={12} md={6}>
                            <Form.Group>
                                <Form.Label>Libelle <span className='text-danger'>*</span></Form.Label>
                                <Form.Control
                                    type='text'
                                    name='libelle'
                                    {...register('libelle', { required: true })}
                                    onChange={handlerInput}
                                    value={fieldForm.libelle}
                                    placeholder="Renseigner l'intitulé"
                                    className={classNames({'is-invalid': errorFieldForm?.libelle || errors?.libelle})}
                                />
                                {errorFieldForm?.libelle || errors?.libelle ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.libelle?.type === 'required' && "Ce champ libelle est requis")
                                            || errorFieldForm.libelle}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
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
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <Form.Group>
                                <Form.Label>Montant <span className='text-danger'>*</span></Form.Label>
                                <Cleave
                                    name="prix"
                                    value={fieldForm?.prix ?? ''}
                                    // {...register('prix', { required: true })}
                                    placeholder="Renseigner le montant"
                                    onChange={handlerInput}
                                    options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                                    className={classNames('form-control', {'is-invalid': errorFieldForm?.prix || errors?.prix})}
                                />
                                {errorFieldForm?.prix || errors?.prix ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.prix?.type === 'required' && "Ce champ prix est requis")
                                            || errorFieldForm.prix}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={4}>
                            <Form.Group>
                                <Form.Label>Durée en nombre de mois <span className='text-danger'>*</span></Form.Label>
                                <Form.Control
                                    type='number'
                                    name='duree'
                                    {...register('duree', { required: true, max: 12, min: 1 })}
                                    onChange={handlerInput}
                                    value={fieldForm.duree}
                                    placeholder="Renseigner la durée"
                                    className={classNames({'is-invalid': errorFieldForm?.duree || errors?.duree})}
                                />
                                {errorFieldForm?.duree || errors?.duree ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.duree?.type === 'required' && "Ce champ durée est requis")
                                            || (errors?.duree?.type === 'min' && "La durée doit etre supérieure à 1")
                                            || (errors?.duree?.type === 'max' && "La durée doit etre inferieure à 12")
                                            || errorFieldForm.duree}
                                    </Form.Text>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={4}>
                            <Form.Group>
                                <Form.Label>La zone concerné <span className='text-danger'>*</span></Form.Label>
                                <Select
                                    name='localite_id'
                                    // {...register('localite_id', { required: true })}
                                    options={zones}
                                    placeholder={"Choisir la zone"}
                                    value={
                                        zones.find(zone => zone?.value === fieldForm?.localite_id) ??
                                        {label: '', value: ''}
                                    }
                                    onChange={(newValue) => setFieldForm({...fieldForm, localite_id: newValue.value})}
                                />
                                {errorFieldForm?.localite_id || errors?.localite_id ? (
                                    <Form.Text className="text-danger">
                                        {(errors?.localite_id?.type === 'required' && "Ce champ localite est requis")
                                            || errorFieldForm.localite_id}
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
        )}
        </>
    );
}

export default FormSubscriber;
