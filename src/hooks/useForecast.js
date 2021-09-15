import { useState } from "react";

/*Con este hook, determinamos lo que se muestra dependiendo del estado,
es decir, si hay un error, si está cargando o si está mostrando el
pronóstico. */

const useForecast = () => {

    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)

    return {
        isError, isLoading, forecast
    };

};

export default useForecast;