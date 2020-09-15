import React from 'react';
import CardCategoria from './CardCategoria';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, A11y, EffectFade } from 'swiper';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y, EffectFade]);

const NoticiasCategorias = () => {
    return (
        <div className="p-3 mb-3">
            <h4>CATEGORIA</h4>
            <hr className="bg-dark"></hr>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
            >
                <SwiperSlide>
                    <CardCategoria></CardCategoria>
                </SwiperSlide>
                <SwiperSlide>
                    <CardCategoria></CardCategoria>
                </SwiperSlide>
                <SwiperSlide>
                    <CardCategoria></CardCategoria>
                </SwiperSlide>
                <SwiperSlide>
                    <CardCategoria></CardCategoria>
                </SwiperSlide>            
            </Swiper>
        </div>
    );
};

export default NoticiasCategorias;