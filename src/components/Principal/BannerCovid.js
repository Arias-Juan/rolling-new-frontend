import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const BannerCovid = () => {
    return (
        <div className="mb-3">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/1.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/2.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/3.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/4.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/5.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesCovid/6.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerCovid;