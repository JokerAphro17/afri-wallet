import React, { useEffect, useState } from 'react';
import { Button, Card, Col, OverlayTrigger, Placeholder, Row, Table, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchAccountAdmin } from '../../../../api/request';
import { errorNotif } from '../../../../components/notification';
import PaginationPage from '../../../../components/paginate';
import HANDLER_STORAGE from '../../../../data';
import PageHeader from '../../../../layouts/components/page-header';
import { USER_SESSION } from '../../../../utilities/constant/app.constant';
import { roleToShow } from '../../../../utilities/helper';

const AllUser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const userConnect = HANDLER_STORAGE.GET(USER_SESSION, 'object')?.data ?? null;

    useEffect(() => {
        (async () => await fetchAllUsers(0))()
    }, []);

    const fetchAllUsers = async (page) => {
        try {
            setUsers([]);
            setIsLoading(true);
            const response = await fetchAccountAdmin(page+1);
            const dataReceive = response?.data?.data ?? null;
            const _users = dataReceive?.data ?? [];
            if (_users?.length > 0) {
                setCurrentPage(dataReceive?.current_page);
                setTotalPage(dataReceive?.last_page);
                setUsers(_users);
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

    return (
        <>
            <PageHeader title={'Liste des compte administrateur'}>
                <Button
                    variant="success" size='md'
                    onClick={() => navigate('/handlers/account-admins/add')} >
                    <i className="zmdi zmdi-account-add"></i>{' '}
                    Ajouter un administrateur</Button>
            </PageHeader>

            <Card body>
                <Table striped>
                    <thead>
                        <tr>
                            <th className='text-center'>Nom complet</th>
                            <th className='text-center'>email</th>
                            <th className='text-center'>Groupe</th>
                            <th className='text-center'>Genre</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex  align-items-center border-top-0 border-left-0 border-right-0">
                                        <div className="mr-2">
                                            <span className="avatar avatar-md brround cover-image" data-image-src="../../assets/images/users/1.jpg"></span>
                                        </div>
                                        <div className="">
                                            <div className="font-weight-semibold">{user?.lastname}</div>
                                            <small className="text-muted">{user?.firstname}
                                            </small>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>{user?.email}</td>
                                <td className='text-center'>{roleToShow(user?.role)}</td>
                                <td className='text-center'>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip id="button-tooltip-2">
                                                <small>
                                                {user?.genre == 'Female' ? 'Sexe féminin'
                                                    : user?.genre == 'Male' ? 'Sexe masculin'
                                                    : 'Sexe non renseigner' }
                                                </small>
                                            </Tooltip>
                                        }
                                    >
                                    {user?.genre == 'Female' ? (
                                        <i className="zmdi zmdi-female zmdi-hc-2x"></i>
                                    ) : user?.genre == 'Male' ? (
                                        <i className="zmdi zmdi-male-alt zmdi-hc-2x"></i>
                                    ) : (
                                        <i className="zmdi zmdi-male-female zmdi-hc-2x"></i>
                                    )}
                                    </OverlayTrigger>
                                </td>
                                <td>
                                    <Button
                                        variant="outline-info" size='sm'
                                        onClick={() => navigate('/handlers/users/show', {state: {uuid: user?.uuid}})} >
                                        <i className="zmdi zmdi-eye"></i> Détail</Button>
                                    {userConnect?.uuid !== user.uuid ? (
                                        <>{'  '}
                                            <Button
                                                variant="outline-danger" size='sm'
                                                onClick={() => navigate('/handlers/account-admins/edit', {state: {uuid: user?.uuid}})} >
                                                <i className="zmdi zmdi-edit"></i> Edition</Button>
                                        </>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                        {users?.length <= 0 && !isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center">Aucun compte trouvé</td>
                            </tr>
                        ) : null}
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    Veuillez patienter ...
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </Table>
                {users?.length > 0 ? (
                    <PaginationPage
                        currentPage={currentPage}
                        totalPage={totalPage}
                        isLoading={isLoading}
                        onPageChange={async (page) => await fetchAllUsers(page?.selected ?? 0 + 1)}
                />
                ) : null}
            </Card>
        </>
    );
}

export default AllUser;
