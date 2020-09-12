import React from 'react';
import ApiMoneda from './ApiMoneda';
import UltimasNoticias from './UltimasNoticias'
import ApiClima from './ApiClima';
import NoticiasCategorias from './NoticiasCategorias';
import BannerCovid from './BannerCovid';

const Inicio = () => {
    return (
        <section>
            <div className="p-3 container my-3">
                <div className="row d-flex justify-content-around">
                    <div className="col-8">
                        <UltimasNoticias></UltimasNoticias>
                        <NoticiasCategorias className="shadow border rounded p-3"></NoticiasCategorias>
                    </div>
                    <div className="col-3">
                        <ApiClima></ApiClima>
                        <ApiMoneda></ApiMoneda>
                    </div>
                </div>
                <section>
                    <BannerCovid></BannerCovid>
                </section>
            </div>
        </section>
    );
};

export default Inicio;