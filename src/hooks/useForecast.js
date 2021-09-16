import { useState } from "react";
import axios from "axios";

// URL de la API donde sacaremos el pronóstico del tiempo.

const BASE_URL = 'https://www.metaweather.com/api/location';

// Con esto evitamos que el navegador bloquee la petición porque no tenemos el mismo dominio.

const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';

const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

/*Con este hook, determinamos lo que se muestra dependiendo del estado,
es decir, si hay un error, si está cargando o si está mostrando el
pronóstico. */

const useForecast = () => {

    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)

    const submitRequest = location => {

        // Encontrar la ID de la ubicación.

        const response = axios(`${REQUEST_URL}/search`, {params: {query: location}});

        // Obtener pronóstico.
        console.log({response});



    };

    return {
        isError, isLoading, forecast, submitRequest
    };

};

export default useForecast;