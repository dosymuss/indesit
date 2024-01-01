import React from 'react';
import styles from './LogoHeader.module.css'
import logoImg from '../../img/logo.png'

const LogoHeader = () => {
    return (
        <div>
            <a href="/">
                <img className={styles.logoImg} src={logoImg} alt=""/>
            </a>
        </div>
    );
};

export default LogoHeader;