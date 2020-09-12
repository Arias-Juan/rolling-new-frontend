import React, { useEffect, useState } from 'react';
import DivMoneda from './DivMoneda';


const ApiMoneda = () => {
    const [ratesAPI, setRatesAPI] = useState({});

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        let monedas = 'EUR,USD,BRL,BTC'
        const url = `https://api.exchangerate.host/latest*?base=ARS&symbols=${monedas}`;
        const api = await fetch(url);
        const resultado = await api.json();
        //console.log(resultado);
        setRatesAPI(resultado.rates)
    }

    return (
        <DivMoneda ratesAPI={ratesAPI}></DivMoneda>
    );
};

export default ApiMoneda;