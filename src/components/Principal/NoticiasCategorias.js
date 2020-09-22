import React from 'react';
import CardCategoria from './CardCategoria';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, A11y, EffectFade } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Link } from "react-router-dom";


SwiperCore.use([Navigation, A11y, EffectFade]);

const NoticiasCategorias = (props) => {
    const noticias = props.noticiasSwiper.filter((itemNoticia) => {
        return (itemNoticia.categoria) === props.itemCategoria.agregarCategoria.toLowerCase()
    })
    
    return (
        <div className="mb-3">
            <Link exact={true} to={`/categorias/${props.itemCategoria.agregarCategoria.toLowerCase()}`} className="text-decoration-none">
                <h4 className="titulo-categoria card-titulo">{props.itemCategoria.agregarCategoria}</h4>
            </Link>
            <hr className="bg-dark"></hr>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
                //                loop={true}
                breakpoints={{
                    //cuando el  ancho de la ventana es mayor o igual que 280
                    280: {
                        width: 248,
                        slidesPerView: 1,
                    },

                    320: {
                        width: 288,
                        slidesPerView: 1,
                    },

                    360: {
                        width: 328,
                        slidesPerView: 1,
                    },
                    375: {
                        width: 343,
                        slidesPerView: 1,
                    },
                    414: {
                        width: 379,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 552,
                        slidesPerView: 2,
                    },
                    992: {
                        width: 744,
                        slidesPerView: 3,
                    },
                    1200: {
                        width: 899,
                        slidesPerView: 3,
                    }
                }}
            >
                {noticias.map((divNoticia) => (
                    <SwiperSlide><CardCategoria key={divNoticia.id} divNoticia={divNoticia} noticiasSwiper={props.noticiasSwiper}></CardCategoria></SwiperSlide>))}
            </Swiper>
        </div>
    );
};

export default NoticiasCategorias;