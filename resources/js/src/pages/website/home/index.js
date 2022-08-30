import React from 'react';
import countyBlogpost6 from '../../../assets/images/media/county-blogpost6-960x720.jpg';
import countyHomePatternBg from '../../../assets/images/media/county-home-pattern-bg.png';
import countyHomePatternbg2 from '../../../assets/images/media/county-home-patternbg-2.png';
import countyMainBgWithoutGradient from '../../../assets/images/media/county-main-bg-without-gradient.jpg';
import countyMapMarkerIcon from '../../../assets/images/media/county-map-marker-icon.png';
import countyCallendarIcon from '../../../assets/images/media/county-callendar-icon.png';
import countyChevronDown from '../../../assets/images/media/county-chevron-down.png';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import BannerBar from '../../../components/banner-bar';
import countyPdfIcon from '../../../assets/images/media/county-pdf-icon.png';
import TopNews from '../components/top-news';
import Produit from '../../../components/produit';
import pickDeSindou from '../../../assets/images/views/pick_de_sindou.jpg';
import amassurAssurances from '../../../assets/images/views/amassur-assurances.jpg';


const HomePage = (props) => {
    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <TopNews />
            </div>
        </div>

        <div className="cesw-section cesw-section-img">
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className='cesw-panel-newsletter'>
                            <div className="d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column">
                                <div className="w-lg-25s w-100s mr-lg-2">
                                    <h3>Souscrire <br/> à la newsletter</h3>
                                </div>
                                <div className="flex-grow-1">
                                    <form className="d-lg-flex align-items-lg-center">
                                        <div className="flex-fill form-group mr-lg-1 mb-lg-0">
                                            <label for="inputEmail" className="sr-only">Email</label>
                                            <input type="text" className="form-control w-75  ml-lg-auto" id="inputEmail" placeholder="Votre adresse mail"/>
                                        </div>
                                        <button type="submit" className="btn btn-success-light rounded-0">Souscrire maintenant</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="cesw-section cesw-section-light">
            <Container>
                <Row>
                    <Col sm={12} lg={3}>
                        <Row>
                            <Col sm={12}>
								<div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-lg-3 col-md-12 feature">
												<div className="fa-stack fa-lg fa-1x feature-icons bg-success mb-3">
													<i className="fa fa-filter fa-stack-1x text-white"></i>
												</div>
											</div>
											 <div className="col-lg-9 col-md-12">
												<div className="mt-1">
													<h4 className="font-weight-semibold">Filter par édition</h4>
                                                    <div className="custom-checkbox custom-control">
                                                        <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-1" checked={true}/>
                                                        <label for="checkbox-1" className="custom-control-label">Spéciale</label>
                                                    </div>
                                                    <div className="custom-checkbox custom-control">
                                                        <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" checked={false}/>
                                                        <label for="checkbox-2" className="custom-control-label">Ordinaire</label>
                                                    </div>
												</div>
											</div>
										</div>
									</div>
								</div>
                            </Col>
                            <Col sm={12}>
                                <div className="card service">
                                    <div className="card-body">
                                        <div className="item-box text-center">
                                            <div className=" text-center  mb-4 text-orange"><i className="icon icon-people"></i></div>
                                            <div className="item-box-wrap">
                                                <p className="text-muted mb-0">Cliquer ci après pour devenir abonnez et recevoir les dernières journaux publier</p>
                                                <a href='#' className="btn btn-success-light rounded-0">Abonnez-vous</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="fb-page" data-href="https://web.facebook.com/sggcm?_rdc=1&amp;_rdr" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://web.facebook.com/sggcm?_rdc=1&amp;_rdr" className="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/sggcm?_rdc=1&amp;_rdr">Secrétariat Général du Gouvernement et du Conseil des Ministres du Faso</a></blockquote></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} lg={9}>
                        <Row>
                            <Col sm={12}>
                                <div className="card service">
                                    <div className="card-body">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Rechercher un journal ..." />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <Row>
									<Col sm={12} md={6} xl={4}>
                                        <Produit />
									</Col>
									<Col sm={12} md={6} xl={4}>
                                        <Produit isSpecial={true} />
									</Col>
									<Col sm={12} md={6} xl={4}>
                                        <Produit />
									</Col>
									<Col sm={12} md={6} xl={4}>
                                        <Produit />
									</Col>
									<Col sm={12} md={6} xl={4}>
                                        <Produit isSpecial={true} />
									</Col>
									<Col sm={12} md={6} xl={4}>
                                        <Produit />
									</Col>
                                    <Col sm={12}>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">
                                                        <i className="fa fa-angle-left"></i>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        <i className="fa fa-angle-right"></i>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="cesw-section">
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card className="card-aside border-0 mb-0 shadow-none">
                            <div className="d-lg-block d-none card-aside-column br-tl-5 br-bl-5 cover-image">
                                <img src={pickDeSindou} alt="img" />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h4><a href="#">A propos du Journal Officiel</a></h4>
                                <div className="text-muted text-truncat">
                                    JOBF est une plateforme de publication du Journal Officiel du Burkina Faso et de l’ensemble des textes règlementaires qui y sont publiés,
                                    Cette plateforme permet,  non seulement l’achat du Journal Officiel mais aussi l’abonnement sur une période donnée,
                                    Elle permet également à toute personne (physique ou morale) de soumettre une demande de publication dans le Journal Officiel
                                </div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                    <div className="ml-auto text-muted">
                                        <button type="submit" className="btn btn-success-light rounded-0">Lire la suite</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="cesw-section cesw-section-img-tree cesw-section-light">
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <Card className="ads-card border-0">
                            <img src={amassurAssurances} alt="img" className="w-100"/>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Carousel id="carousel-captions"
                                className="carousel slide"
                                data-ride="carousel"
                                nextLabel={""}
                                prevLabel={""}
                                indicators={false}
                            >
                                <Carousel.Item className="carousel-item active">
                                    <img className="my-1 mx-auto d-block h-75" alt="" src={countyPdfIcon} data-holder-rendered="true"/>
                                    <div className="carousel-item-background d-none d-md-block"></div>
                                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                                        <div className="mb-2">
                                            <span className={`badge badge-pill badge-danger mr-1 mb-1 mt-1`}>
                                                {`Edition Spéciale`}</span>
                                        </div>
                                        <div>
                                            <h3>JO N° 888888</h3>
                                            <p className='text-muter'>Du 04-05-2022</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8} lg={10}>
                        <Card className="card-aside border-0 mb-0 shadow-none">
                            <div className="card-body d-flex flex-column">
                                <h4>Insertion</h4>
                                <div className="text-muted text-truncat">
                                    Vous etes une association, une OBNL ou un partie politique et venez etre nouvelle créer, veuillez cliquer sur le bouton ci apres et suivre le instruction.
                                </div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                    <div className="ml-auto text-muted">
                                        <button type="submit" className="btn btn-success-light rounded-0">Insertion dans le Journal Officiel</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-block d-none card-aside-column br-tl-5 br-bl-5 cover-image">
                                <img src={pickDeSindou} alt="img" />
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <div className="card service">
                            <div className="card-body">
                                <div className="item-box text-center pt-2">
                                    <div className=" text-center  mb-4 text-orange"><i className="icon icon-people"></i></div>
                                    <div className="item-box-wrap mb-4">
                                        <p className="text-muted mb-0">Veuillez cliquer pour vous connectez</p>
                                    </div>
                                    <button type="submit" className="btn btn-success-light mb-2 rounded-0">Se connecter</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default HomePage;
