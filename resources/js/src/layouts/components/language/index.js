import React from 'react';
import { Dropdown } from 'react-bootstrap';
import DropDownMenu from '../../../components/drop-down-menu';
import DropDownToggle from '../../../components/drop-down-toggle';
import { IconProfile } from '../../../components/icones';

const AppLanguage = (props) => {
    return (
        <div className="dropdown d-none d-xl-flex country-selector">
            <Dropdown>
                <Dropdown.Toggle as={DropDownToggle} className="d-flex nav-link leading-none text-dark" variant="secondary">
                        {/* <img src="../../assets/images/flags/us_flag.jpg" alt="img" className="mr-2 align-self-center"/> */}
                        <i className="zmdi zmdi-map mr-2 align-self-center" style={{fontSize: 30}}></i>
                        <div>
                            <strong className="text-dark">English</strong>
                        </div>
                </Dropdown.Toggle>
                <Dropdown.Menu as={DropDownMenu} variant="dark">
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a href="#" className="dropdown-item d-flex pb-3">
                            {/* <img src="../../assets/images/flags/french_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/> */}
                            <div>
                                <strong>French</strong>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item d-flex pb-3">
                            {/* <img src="../../assets/images/flags/germany_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/> */}
                            <div>
                                <strong>Germany</strong>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item d-flex pb-3">
                            {/* <img src="../../assets/images/flags/italy_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/> */}
                            <div>
                                <strong>Italy</strong>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item d-flex pb-3">
                            {/* <img src="../../assets/images/flags/russia_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/> */}
                            <div>
                                <strong>Russia</strong>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item d-flex pb-3">
                            {/* <img src="../../assets/images/flags/spain_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center"/> */}
                            <div>
                                <strong>Spain</strong>
                            </div>
                        </a>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default AppLanguage;
