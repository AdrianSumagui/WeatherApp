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

    // Obtener la ID de la ubicación.

    const getWoeid = async location => {

        const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});

        if (!data || data.length === 0) {

            // Mostrar error.
            setError('No existe esa ciudad. :(');
            setLoading(false);
            return;

        };

        return data[0];

    };

    // Obtener pronóstico meteorilógico.

    const getForecastData = async woeid => {

        const {data} = await axios(`${REQUEST_URL}/${woeid}`);

        if (!data || data.length === 0) {

            // Mostrar error.
            setError('Algo va mal. :(');
            setLoading(false);
            return;

        };

        return data;

    }

    // Mostrar resultados.

    const submitRequest = async location => {

        setLoading(true);
        setError(false);

        const response = await getWoeid(location);;
        if (!response?.woeid) return;
        const data = await getForecastData(response.woeid);
        if (!data) return;

        console.log({data});

    };

    return {
        isError, isLoading, forecast, submitRequest
    };

};

export default useForecast;