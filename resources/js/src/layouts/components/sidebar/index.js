import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../utilities/hook/useAuth';
import logo from '../../../assets/images/logo/logo.png'
import { ROLES } from '../../../utilities/constant/app.constant';

const ItemNavigation = (props) => {
    const {selected, onClickItem, item} = props;
    const Icon = item?.icon

    return (
        <li className={`slide ${selected==item?.id ? "is-expanded" : null}`}>
            {
                item?.children?.length > 0 ? (
                    <a href="#" data-toggle="slide" onClick={() => onClickItem(item)}
                        className={`side-menu__item`} >
                        {Icon ? <Icon /> : <i className="fa fa-2x fa-bookmark-o side-menu__icon"></i>}
                        <span className="side-menu__label">{item?.title}</span>
                        <i className="angle fa fa-angle-right"></i>
                    </a>
                ) : (
                    <NavLink
                        to={`${item?.navLink}`}
                        className={({ isActive }) =>
                            `side-menu__item ${
                                isActive ? "active" : undefined
                            }`
                        }
                    >
                        {Icon ? <Icon /> : <i className="fa fa-2x fa-bookmark-o side-menu__icon"></i>}
                        <span className="side-menu__label">{item?.title}</span>
                    </NavLink>
                )
            }
            {
                item?.children ? (
                    <ul className="slide-menu">
                        {
                            item?.children.map(itemSub =>
                                <li key={itemSub?.id}>
                                    <NavLink
                                        to={`${itemSub?.navLink}`}
                                        className={({ isActive }) =>
                                        `side-menu__item ${
                                            isActive ? "active" : undefined
                                        }`
                                    }>{itemSub?.title}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                ):null
            }
        </li>
    )
}

const SideBar = ({menuElements}) => {
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [selected, setSetected] = useState('');


    useEffect(() => {
        if (auth?.user) {
            const userRole = auth.user?.role;
            setUserInfo(auth.user);
            if(userRole) {
                let _menuItems = menuElements.filter(item =>
                    item?.permissions?.includes(userRole)
                    || item?.permissions?.includes(ROLES.ALL)
                )
                setMenuItems(_menuItems)
            }
        }
        // menuItems
    }, [menuElements]);

    const _onClickItem = (_item) => {
        let value = _item?.id
        if(_item?.id == selected) {
            value = ''
        }
        setSetected(value)
    }

    return (
        <Fragment>
            <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
            <aside className="app-sidebar">
                <div className="side-header">
                    <Link className="header-brand1" to={userInfo?.role === 'user' ? "/users" : "/admins"}>
                        <img src={logo} className="header-brand-img desktop-logo" alt="logo"/>
                        <img src={logo} className="header-brand-img toggle-logo" alt="logo"/>
                        <img src={logo} className="header-brand-img light-logo" alt="logo"/>
                        <img src={logo} className="header-brand-img light-logo1" alt="logo"/>
                    </Link>
                </div>
                <ul className="side-menu">
                {
                    menuItems.map((item, index) => {
                        const itemMenus = item?.navItems ? item?.navItems : [];
                        return (
                            <Fragment key={index}>
                                {itemMenus?.length > 0 ? (
                                    <>
                                    <li><h3>{item.header}</h3></li>
                                    {itemMenus?.map((itemMenu, index) => (
                                        <ItemNavigation
                                            key={index}
                                            selected={selected}
                                            item={itemMenu}
                                            onClickItem={_onClickItem} />
                                    ))}
                                    </>
                                ) : (
                                    <ItemNavigation
                                        selected={selected}
                                        item={item}
                                        onClickItem={_onClickItem} />
                                )}
                            </Fragment>
                        )
                    })
                }
                </ul>
            </aside>
        </Fragment>
    );
}

export default SideBar;
