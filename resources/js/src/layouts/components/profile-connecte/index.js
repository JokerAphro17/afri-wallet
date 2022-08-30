import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signoutUsers } from '../../../api/request';
import DropDownMenu from '../../../components/drop-down-menu';
import DropDownToggle from '../../../components/drop-down-toggle';
import { IconProfile } from '../../../components/icones';
import { errorNotif } from '../../../components/notification';
import { alertClosed, alertPending } from '../../../components/sweet-alert';
import { API_STORAGE_URL } from '../../../utilities/constant/app.constant';
import useAuth from '../../../utilities/hook/useAuth';

const ProfileConnecte = (props) => {
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (auth?.user) {
            setUserInfo(auth.user)
        }
    }, [])

    const logout = async () => {
        alertPending()
        try {
            await signoutUsers();
            auth.signout(() => {
                alertClosed()
            });
        } catch (error) {
            alertClosed()
            if(typeof error !== 'object') {
                errorNotif('Alerte', 'Echec de déconnexion');
            }
        }
    }
    return (
        <div className="dropdown profile-1">
            <Dropdown>
                <Dropdown.Toggle as={DropDownToggle} className={"nav-link pl-2 pr-2 leading-none d-flex text-dark"} variant="secondary">
                    <span>
                        {userInfo?.avatar ? (
                            <img src={`${API_STORAGE_URL}/${userInfo.avatar}`} />
                        ) : (
                            <IconProfile className="avatar text-dark mr-xl-3  profile-user runded-full
                             cover-image" />
                        )}
                    </span>
                    <div className="text-center mt-1 d-none d-xl-block">
                        <h6 className="text-dark mb-0 fs-13 font-weight-semibold">{userInfo? `${userInfo?.firstname} ${userInfo?.lastname}` : ''}</h6>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu as={DropDownMenu} variant="dark">
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <Link to={'/accounts/profile'} className="dropdown-item" href="#">
                            <i className="dropdown-icon mdi mdi-account-outline"></i> Mon Profil
                        </Link>
                        <Link to={'/accounts/access'} className="dropdown-item" href="#">
                            <i className="dropdown-icon zmdi zmdi-edit"></i> Mes accès
                        </Link>
                       
                        <a href='#' onClick={logout} className="dropdown-item">
                            <i className="dropdown-icon mdi  mdi-logout-variant"></i> Deconnexion
                        </a>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default ProfileConnecte;
