import React, { useState, useEffect } from 'react';
import DivClima from './DivClima';

const ApiClima = () => {
    const [clima, setClima] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = () => {
        const apiKEY = "d74eec9b645df2679f886daaf1e6287d";
        setLoader(true);
        //consultar latitud y longitud
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                console.log(position)
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
                const api = await fetch(url);
                const resultado = await api.json();

                if (resultado.cod === "404") {
                    setClima({});
                    setLoader(false);
                } else {
                    setClima(resultado);
                    setLoader(false);
                }
            },
                async (err) => {
                    //if (err.code === 1 || err.code === 2) {
                        const lat = -26.828752;
                        const lon = -65.197120; // estas coordenadas son para san miguel de tucuman especificas            
                    //}
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
                    const api = await fetch(url);
                    const resultado = await api.json();

                    if (resultado.cod === "404") {
                        setClima({});
                        setLoader(false);
                    } else {
                        setClima(resultado);
                        setLoader(false);
                    }
                });
        }

        /*const lat = -26.828752;
        const lon = -65.197120; // estas coordenadas son para san miguel de tucuman especificas
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`;
        const api = await fetch(url);
        const resultado = await api.json();

        if (resultado.cod === "404") {
            setClima({});
        } else {
            setClima(resultado);
        }*/

    }

    return (
        <div className="p-1 rounded shadow">
            <DivClima clima={clima} loader={loader}></DivClima>
        </div>
    );
};

export default ApiClima;