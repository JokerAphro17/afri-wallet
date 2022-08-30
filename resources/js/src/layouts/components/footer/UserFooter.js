import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const UserFooter = (props) => {
    return (
        <>
            <div className="cesw-footer-section top-footer cesw-section">
                <Container>
                    <Row>
                        <div className="col-lg-4 col-md-12">
                            <h6>About</h6>
                            <p>
                                Nous sommes un systeme de payment et d'echange de cryptomonnaies.
                            </p>
                            <a className='text-sm' href='#'>Lire la suite</a>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <h6>Pages</h6>
                            <ul className="list-unstyled mb-5 mb-lg-0">
                                <li><a href="javascript:;">Dashboard</a></li>
                                <li><a href="javascript:;">Elements</a></li>
                                <li><a href="javascript:;">Forms</a></li>
                                <li><a href="javascript:;">Charts</a></li>
                                <li><a href="javascript:;">Tables</a></li>
                                <li><a href="javascript:;">Other Pages</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <h6>Information</h6>
                            <ul className="list-unstyled mb-5 mb-lg-0">
                                <li><a href="javascript:;">Notre Equipe</a></li>
                                <li><a href="javascript:;">Contactez Nous</a></li>
                                <li><a href="javascript:;">A propos</a></li>
                                <li><a href="javascript:;">Service</a></li>
                                <li><a href="javascript:;">Blog</a></li>
                                <li><a href="javascript:;">Terms and Condition</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            {/* <h6>Posts</h6>
                            <img alt="" src="../../assets/images/media/media1.jpg" />
                            <img alt="" src="../../assets/images/media/media2.jpg" />
                            <img alt="" src="../../assets/images/media/media3.jpg" />
                            <img alt="" src="../../assets/images/media/media4.jpg" /> */}
                            <hr/>
                            <h6 className="mb-0 m-t-30">Payments</h6>
                            <ul className="footer-payments">
                                <li><a href="javascript:;"><i className="fa fa-cc-amex text-muted" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-cc-visa text-muted" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-credit-card-alt text-muted" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-cc-mastercard text-muted" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-cc-paypal text-muted" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
            <footer className="main-footer pl-0 pr-0">
                <Container>
                    <Row>
                        <Col xl={8} lg={12} md={12} className="col-xl-8 col-lg-12 col-md-12 footer1">
                            Copyright © <a href="">AFRICAN WALLET</a> 2022. Réaliser par <a href="">Tech_Joker</a>
                        </Col>
                        <Col xl={4} lg={12} md={12} className="ml-auto text-right">
                            <ul className="footer-social-list ">
                                <li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-google"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:;"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default UserFooter;
