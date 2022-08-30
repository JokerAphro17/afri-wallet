import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoForPage from '../../../components/logo/LogoForPage';

function NotFoundPage(props) {
    const navigate = useNavigate();
    return (
        <Fragment>
			<div className="page page-h">
				<div className="page-content z-index-10">
                    <div className="cols col-login mx-auto">
                        <div className="text-center">
                            <LogoForPage />
                        </div>
                    </div>
					<div className="container text-center">
						<div className="row">
							<div className="col-lg-6 col-xl-6 col-md-6 d-block mx-auto">
								<div className="">
									<div className="">
										<div className="display-1 t mb-5">400</div>
										<h1 className="h2   mb-3">Ressource non trouveé</h1>
										<p className="h4 font-weight-normal mb-7 leading-normal">Oops!!!! vous avez essayé d'accéder à une page qui n'est pas disponible</p>
										<button className="btn btn-primary" onClick={() => navigate(-1)}>
											Précédent
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </Fragment>
    );
}

export default NotFoundPage;
