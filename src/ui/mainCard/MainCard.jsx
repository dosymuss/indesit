import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MainCard.module.css";

const MainCard = ({name, image, id}) => {
  const navigate = useNavigate()
  const wrapRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    wrapRef.current.addEventListener("mouseover", () => {
      btnRef.current.style.display="flex"
    });
    wrapRef.current.addEventListener("mouseout",()=>{
        btnRef.current.style.display="none"
    })
  }, []);

  if (wrapRef.current) {
  }

  return (
    <div key={id} ref={wrapRef} className={styles.main}>
      <img className={styles.img} src={image} alt="" />
      <p className={styles.text}>{name}</p>
      <button onClick={()=>{navigate(`/order-page/${id}`)}} ref={btnRef} className={styles.btn}>
        Подробнее
      </button>
    </div>
  );
};

export default MainCard;
