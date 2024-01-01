import React from 'react';
import styles from './CategoriesBlock.module.css';
import fridgeImg from '../../img/holodilnik.jpg';
import washingMachine from '../../img/stirMashiny.jpg';
import freezerImg from '../../img/freezer.jpg';
import { Link } from "react-router-dom";

const CategoriesBlock = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.category} style={{ backgroundImage: `url(${fridgeImg})` }}>
                <div className={styles.overlay}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.categoryText}>Холодильники</h2>
                    <button className={styles.categoryButton}>
                        <Link to="/prod?param=холодильник">
                            Посмотреть
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.category} style={{ backgroundImage: `url(${washingMachine})` }}>
                <div className={styles.overlay}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.categoryText}>Стиральные машины</h2>
                    <button className={styles.categoryButton}>
                        <Link to="/prod?param=стирка">
                            Посмотреть
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.category} style={{ backgroundImage: `url(${freezerImg})` }}>
                <div className={styles.overlay}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.categoryText}>Морозильники</h2>
                    <button className={styles.categoryButton}>
                        <Link to="/prod?param=морозильник">
                            Посмотреть
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesBlock;