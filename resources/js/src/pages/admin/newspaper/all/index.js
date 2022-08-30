import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deletNewspaper, fetchNewscribes, fetchNewspapers } from '../../../../api/request';
import { errorNotif, successNotif } from '../../../../components/notification';
import PaginationPage from '../../../../components/paginate';
import { alertClosed, alertConfirmation, alertPending } from '../../../../components/sweet-alert';
import PageHeader from '../../../../layouts/components/page-header';

const Newspapers = () => {
    const navigate = useNavigate();
    const [newspapers, setNewspapers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        (async () => await fetchNews(0))()
    }, []);

    const fetchNews = async (page) => {
        try {
            setNewspapers([]);
            setIsLoading(true);
            const response = await fetchNewspapers(page+1);
            const dataReceive = response?.data?.data ?? null;
            const _newspapers = dataReceive?.data ?? [];
            if (_newspapers?.length > 0) {
                setCurrentPage(dataReceive?.current_page);
                setTotalPage(dataReceive?.last_page);
                setNewspapers(_newspapers);
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

    const deleteNews = async (uuid) => {
        alertPending()
        try {
            await deletNewspaper(uuid);
            successNotif('Notification', 'Supprimer avec succès.')
            await fetchNews(0);
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
            <PageHeader title={'Liste des journaux'}>
                <Button
                    variant="success" size='md'
                    onClick={() => navigate('/handlers/newspapers/add')} >
                    <i className="zmdi zmdi-plus-circle-o"></i>{' '}
                    Ajouter un journal</Button>
            </PageHeader>

            <Card body className='panel-fixe'>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='text-center'>Numéro</th>
                            <th className='text-center'>Type</th>
                            <th className='text-center'>Date de publication</th>
                            <th className='text-center'>Nombre de page</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newspapers?.map((newspaper, index) =>
                            <tr key={index}>
                                <td className='text-center'>{newspaper?.numero}</td>
                                <td className='text-center'>{newspaper?.type}</td>
                                <td className='text-center'>{newspaper?.date_pub ? moment(newspaper?.date_pub).format('DD MM YYYY') : '---'}</td>
                                <td className='text-center'>{`${newspaper?.nombre_page ?? 0} page${newspaper?.nombre_page > 1 ? 's' : ''}`}</td>
                                <td className='text-center'>
                                    <Button
                                        variant="outline-danger" size='sm'
                                        onClick={() =>
                                            alertConfirmation(
                                                `Etes vous sur de bien vouloir supprimer le journal numéro ${newspaper?.numero} ?`,
                                                ({isConfirmed}) => {
                                                    if (isConfirmed) {
                                                        deleteNews(newspaper?.uuid)
                                                    }
                                                }
                                            )} >
                                        <i className="zmdi zmdi-delete"></i> Supprimer</Button>
                                    {'  '}
                                    <Button
                                        variant="outline-dark" size='sm'
                                        onClick={() => navigate('/handlers/newspapers/edit', {state: {uuid: newspaper?.uuid}})} >
                                        <i className="zmdi zmdi-edit"></i> Edition</Button>
                                </td>
                            </tr>
                        )}
                        {newspapers?.length <= 0 && !isLoading ? (
                            <tr>
                                <td colSpan={5} className="text-center">Aucun journal trouvé</td>
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
            {newspapers?.length > 0 ? (
                <Card body>
                    <PaginationPage
                        currentPage={currentPage}
                        totalPage={totalPage}
                        isLoading={isLoading}
                        onPageChange={async (page) => await fetchNews(page?.selected ?? 0 + 1)}
                    />
                </Card>
            ) : null}
        </>
    );
}

export default Newspapers;
