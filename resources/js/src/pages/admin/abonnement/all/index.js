import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteSubscribe, fetchSubscribes } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import PaginationPage from '../../../../components/paginate';
import { alertClosed, alertConfirmation, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';

const Abonnements = () => {
    const navigate = useNavigate();
    const [abonnements, setAbonnements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        (async () => await fetchSubs(0))()
    }, []);

    const fetchSubs = async (page) => {
        try {
            setAbonnements([]);
            setIsLoading(true);
            const response = await fetchSubscribes(page+1);
            const dataReceive = response?.data?.data ?? null;
            const _abonnements = dataReceive?.data ?? [];
            if (_abonnements?.length > 0) {
                setCurrentPage(dataReceive?.current_page);
                setTotalPage(dataReceive?.last_page);
                setAbonnements(_abonnements);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if(typeof error === 'object') {
            } else {
                errorNotif('Avertissement', error);
            }
        }
    };

    const deleteSubs = async (uuid) => {
        alertPending()
        try {
            await deleteSubscribe(uuid);
            successNotif('Notification', 'Supprimer avec succès.')
            await fetchSubs(0)
            alertClosed();
        } catch (error) {
            alertClosed();
            if(typeof error === 'object') {
            } else {
                errorNotif('Avertissement', error);
            }
        }
    };

    return (
        <>
            <PageHeader title={'Liste des abonnements disponible'}>
                <Button
                    variant="success" size='md'
                    onClick={() => navigate('/handlers/subscription/add')} >
                    <i className="zmdi zmdi-plus-circle-o"></i>{' '}
                    Ajouter un abonnement</Button>
            </PageHeader>

            <Card body className='panel-fixe'>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='text-center'>Libelle</th>
                            <th className='text-center'>Duree</th>
                            <th className='text-center'>Zone</th>
                            <th className='text-center'>Prix</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {abonnements?.map((abonnement, index) =>
                            <tr key={index}>
                                <td className='text-center'>{abonnement?.libelle}</td>
                                <td className='text-center'>{`${abonnement?.duree} mois`}</td>
                                <td className='text-center'>{abonnement?.localite ? abonnement?.localite?.libelle : '---'}</td>
                                <td className='text-center'>{`${abonnement?.prix} F CFA`}</td>
                                <td className='text-center'>
                                    <Button
                                        variant="outline-danger" size='sm'
                                        onClick={() =>
                                            alertConfirmation(
                                                `Etes vous sur de bien vouloir supprimer l'abonnement ${abonnement?.libelle} ?`,
                                                ({isConfirmed}) => {
                                                    if(isConfirmed) {
                                                        deleteSubs(abonnement?.uuid)
                                                    }
                                                }
                                            )} >
                                        <i className="zmdi zmdi-delete"></i> Supprimer</Button>
                                    {'  '}
                                    <Button
                                        variant="outline-dark" size='sm'
                                        onClick={() => navigate('/handlers/subscription/edit', {state: {uuid: abonnement?.uuid}})} >
                                        <i className="zmdi zmdi-edit"></i> Modifier</Button>
                                </td>
                            </tr>
                        )}
                        {abonnements?.length <= 0 && !isLoading ? (
                            <tr>
                                <td colSpan={5} className="text-center">Aucun abonnement trouvé</td>
                            </tr>
                        ) : null}
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center"> Veuillez patienter ... </td>
                            </tr>
                        ) : null}
                    </tbody>
                </Table>
            </Card>
            {abonnements?.length > 0 ? (
                <Card body>
                    <PaginationPage
                        currentPage={currentPage}
                        totalPage={totalPage}
                        isLoading={isLoading}
                        onPageChange={async (page) => await fetchSubs(page?.selected ?? 0 + 1)}
                    />
                </Card>
            ) : null}
        </>
    );
}

export default Abonnements;
