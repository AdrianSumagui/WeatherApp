import React, { Fragment } from 'react';

// Importo la hoja de estilos.
import styles from './Page.module.css';

// Importo los componentes.
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

const Page = () => {
    return (
        <Fragment>

            <Header />

            <div className= {styles.box}>

            {/* Formulario para introducir la localidad deseada. */}

            <Form/>

            {/* Error */}

            <Error/>
            {/* Loader (Animación de carga.) */}

            <Loader/>

            {/* Forecast (Pronóstico del tiempo.) */}

            <Forecast/>

            </div>

        </Fragment>
    );
};

export default Page;
