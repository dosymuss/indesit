import notFoundProd from "../../img/notFoundProd.svg"

import styles from "./MainNotFound.module.css"


const MainNotFound = ({text, color}) => {
  return (
    <div className={styles.div}>
        <img className={styles.img} src={notFoundProd} alt="" />
        <p style={{color:color}} className={styles.text}>{text}</p>
    </div>
  )
}

export default MainNotFound