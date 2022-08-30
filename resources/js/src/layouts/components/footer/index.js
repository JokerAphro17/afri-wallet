import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <footer className="footer">
            <Container>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-12 col-sm-12 text-center">
                        Copyright © 2021 <a href="#">Tech_Joker</a>. Designed by <a href="#"> Joker </a> All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
