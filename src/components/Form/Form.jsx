import React, {useState} from 'react';

import styles from './Form.module.css';

const Form = () => {

    const [location, setLocation] = useState('');

    const onSubmit = e => {

        // Evitamos refrescar la página al pulsar el botón.
        e.preventDefault();
        
    };


    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Introduce una ciudad"
                required
                
                // La ciudad que escoga el usuario.
                value={location} 
                onChange={e => setLocation(e.target.value)}
                
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                Buscar
            </button>
        </form>
    );
};

export default Form;
