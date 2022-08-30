import React, { useEffect } from 'react';
import UserFooter from '../footer/UserFooter';
import UserHeader from '../header/UserHeader';

export const ContainerFrontOffice = ({children}) => {
    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, []);

    const handleNavigation = (event) => {
        console.log("event :>> ", event);
    };
    return (
        <div className='front-office-body author-cesw'>
            <div className="color-custom style-simple button-flat layout-full-width if-zoom if-border-hide no-content-padding no-shadows header-split minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-line-below-80 menuo-no-borders mobile-tb-center mobile-side-slide mobile-mini-mr-ll tablet-sticky mobile-header-mini mobile-sticky tr-header tr-menu be-reg-20954">
                <div id="Wrapper">
                    <UserHeader />
                    <div id="Content">
                        <div className="content_wrapper clearfix">
                            <div className="sections_group">
                                {children}
                            </div>
                        </div>
                    </div>
                    <UserFooter />
                </div>
            </div>
        </div>
    );
}
