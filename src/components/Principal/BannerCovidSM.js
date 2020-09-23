import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const BannerCovidSM = () => {
    return (
        <div className="mb-3 d-block d-sm-none">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/1.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/2.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/3.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/4.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/5.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}RecomendacionesSM/6.png`}
                        alt="Recomendaciones Covid"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerCovidSM;