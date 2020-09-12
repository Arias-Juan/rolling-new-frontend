import React, { useEffect, useState } from 'react';


const ApiMoneda = () => {
    const [ratesAPI, setRatesAPI] = useState({});
    let cambio = {};

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        let monedas = 'EUR,USD,BRL,BTC'
        const url = `https://api.exchangerate.host/latest*?base=ARS&symbols=${monedas}`;
        const api = await fetch(url);
        const resultado = await api.json();

        console.log(resultado);

        cambio = await resultado.rates;
        console.log(cambio.BRL);

        setRatesAPI(resultado.rates)
        if (resultado.success) {
            console.log("desde el if " + ratesAPI.BRL)
        }
        // const ventaEuro = await Math.pow(resultado.rates.EUR, -1)
        //         setCambioEuros(Math.pow(resultado.rates.EUR, -1))
        //         console.log("desde el if " + resultado.rates.EUR)



    }

    return (
        <div className="p-2 bg-dark text-light rounded shadow p-2">
            <h4 className="text-light">Dolar</h4>
            <p className="text-light">VENTA: {cambio.USD}</p>
            <hr className="bg-light"></hr>
            <h4 className="text-light">Euro</h4>
            <p className="text-light">VENTA: {cambio.EUR}</p>
            <hr className="bg-light"></hr>
            <h4 className="text-light">Real</h4>
            <p className="text-light">VENTA: {cambio.BRL}</p>
            <hr className="bg-light"></hr>
            <h4 className="text-light">Bitcoin</h4>
            <p className="text-light">VENTA: {cambio.BTC}</p>
        </div>
    );
};

export default ApiMoneda;