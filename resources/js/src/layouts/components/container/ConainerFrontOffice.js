import React, { useEffect } from "react";
import UserFooter from "../footer/UserFooter";
import UserHeader from "../header/UserHeader";
import { StickyContainer, Sticky } from 'react-sticky';
import { MainNavbar, ResponsiveNavbar } from "../navbar";

export const ContainerFrontOffice = ({ children }) => {
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
        <div className="horizontalMenucontainer front-office-body">
            <div className="page">
                <StickyContainer>
                    <div className="page-main">
                        <UserHeader />
                        <Sticky topOffset={80}>
                            {({
                                style,
                                isSticky,
                                wasSticky,
                                distanceFromTop,
                                distanceFromBottom,
                                calculatedHeight,
                            }) => (
                                <header style={style}>
                                    <MainNavbar styleSticky={style} />
                                </header>
                            )}
                        </Sticky>
                        <ResponsiveNavbar />
                        <div className="content-area">
                            <div className="container-fluid p-0">{children}</div>
                        </div>
                        <UserFooter />
                    </div>
                </StickyContainer>
            </div>
        </div>
    );
};
