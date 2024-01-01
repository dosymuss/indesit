import React from 'react';
import styles from './ServiceBlock.module.css';
import serviceImg from '../../img/service.jpg';

const ServiceBlock = () => {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.mainText}>
                    <h2>Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.
                    Lorem ipsum dolor sit amet, consectetur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio!</p>
                    <button>LOREM</button>
                </div>
                <div>
                    <img className={styles.mainImg} src={serviceImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;