import React, { useState, useEffect } from 'react';
import DivClima from './DivClima';

const ApiClima = () => {
    const [clima, setClima] = useState({});

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        const apiKEY = "d74eec9b645df2679f886daaf1e6287d";
        const lat = -26.828752;
        const lon = -65.197120; // estas coordenadas son para san miguel de tucuman especificas
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
        const api = await fetch(url);
        const resultado = await api.json();

        if (resultado.cod === "404") {
            setClima({});
        } else {
            setClima(resultado);
        }

    }

    return (
        <div className="text-light">
            <DivClima clima={clima}></DivClima>
        </div>
    );
};

export default ApiClima;