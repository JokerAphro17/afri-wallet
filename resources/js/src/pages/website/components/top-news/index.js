import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import countyMainBgWithoutGradient from '../../../../assets/images/media/county-main-bg-without-gradient.jpg';

const TopNews = (props) => {
    return (
        <Carousel
            nextLabel={""}
            prevLabel={""}
        >
            <Carousel.Item>
                <div className="carousel-img-container">
                    <img
                        className="d-block w-100"
                        src={countyMainBgWithoutGradient}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption className="cesw-custom">
                    <div className="d-flex flex-column justify-content-center h-100">
                        <h4>City Hall</h4>
                        <div>
                            <p>
                                Aliquam ac dui vel dui vulputate
                                consectetur. Mauris accumsan, massa non
                                consectetur condimentum, diam arcu
                                tristique nibh, nec egestas diam elit at
                                nulla.
                            </p>
                        </div>
                        <div>
                            <Link
                                className="btn btn-default-light rounded-0"
                                to={"#"}
                            >
                                <span className="button_label">
                                    View more details
                                </span>
                            </Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopNews;
