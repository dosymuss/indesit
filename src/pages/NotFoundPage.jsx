import {useNavigate} from "react-router-dom"

import notFoundImg from "../img/notFound.svg"

import styles from "../styles/notFound.module.css"

const NotFoundPage = () => {
  const navigate= useNavigate()
  return (
    <div className={styles.main}>
      <div>
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.desc}>Перейдите на главную страницу</p>
        <button onClick={()=>navigate("/")} className={styles.btn}>
          Home
        </button>
      </div>
      <img src={notFoundImg} alt="" />
    </div>
  )
}

export default NotFoundPage