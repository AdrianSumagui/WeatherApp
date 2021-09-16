import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({submit}) => {

    const [location, setLocation] = useState('');

    const onSubmit = e => {

        // Evitamos refrescar la página al pulsar el botón.
        e.preventDefault();

        if (!location || location === '') return;
        submit(location);
        
    };


    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Introduce una ciudad"
                required
                
                // La ciudad que escoja el usuario.
                value={location} 
                onChange={e => setLocation(e.target.value)}

            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                Buscar
            </button>
        </form>
    );
};

Form.propTypes = {

    submit: PropTypes.func.isRequired

};

export default Form;
