import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoForPage from '../../../components/logo/LogoForPage';

function UnauthorizePage(props) {
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
										<div className="display-1 t mb-5">401</div>
										<h1 className="h2   mb-3">Ressource non autorisé</h1>
										<p className="h4 font-weight-normal mb-7 leading-normal">Désolé, une erreur s'est produite, la page demandée n'a pas été trouvée !</p>
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

export default UnauthorizePage;
