import React from 'react';
import { Card } from 'react-bootstrap';
import defaulCover from '../../assets/images/media/1.png';

const Produit = ({isSpecial}) => {
    return (
        <>
        <Card className="item-card">
            <div className="product-grid6">
                <div className="mb-2 position-absolute visible">
                    <span className={`badge badge-pill badge-${isSpecial ? 'danger' : 'default'} mr-1 mb-1 mt-1`}>
                        {`Edition ${isSpecial ? 'Spéciale' : 'Ordinaire'}`}</span>
                </div>
                <div className="product-image6">
                    <a href="#">
                        <img className="img-fluid" src={defaulCover} alt="img"/>
                    </a>
                </div>
                <Card.Body className="pt-5 pb-5 product-content text-center">
                    <h4 className="title"><a href="#">JO N° 888888</a></h4>
                    <p className='text-muter'>Du 04-05-2022</p>
                </Card.Body>
                <ul className="icons">
                    <li><a href="" data-tip="Ajouter au panier"><i className="fa fa-cart-plus"></i></a></li>
                    <li><a href="" data-tip="Payer ce numéro"><i className="fa fa-credit-card"></i></a></li>
                    <li><a href="" data-tip="Plus d'information"><i className="fa fa-eye"></i></a></li>
                </ul>
            </div>
        </Card>
        </>
    );
}

export default Produit;
