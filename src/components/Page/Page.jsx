import React, { Fragment } from 'react';

// Importo la hoja de estilos.
import styles from './Page.module.css';

// Importo los componentes.
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

const Page = () => {

    const {isError, isLoading, forecast, submitRequest} = useForecast();

    const onSubmit = value => {

        submitRequest(value);

    }

    return (
        <Fragment>

            <Header />

            <div className= {styles.box}>

            {/* Formulario para introducir la localidad deseada. */}

            {!isLoading && <Form submit = {onSubmit}/>}

            {/* Error */} 

            {isError && <Error message = {isError}/>}

            {/* Loader (Animación de carga.) */}

            {isLoading && <Loader/>}

            </div>

            {/* Forecast (Pronóstico del tiempo.) */}

            {forecast && <Forecast/>} 

        </Fragment>
    );

};

export default Page;
