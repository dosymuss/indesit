import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/productSlice";

// import example from "../../img/example.svg"
import deleteIcon from "../../img/deleteIcon.svg";
import editIcon from "../../img/editIcon.svg";
import watchIcon from "../../img/watchIcon.svg";

import styles from "./NewCard.module.css";

const NewCard = ({ id, name, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div key={id} className={styles.main}>
      <img className={styles.img} src={image} alt="" />
      <p className={styles.title}>{name}</p>
      <div className={styles.btnDiv}>
        <IconButton
          onClick={() => {
            dispatch(deleteProduct(id));
          }}
        >
          <img src={deleteIcon} alt="" />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate(`/change/${id}`);
          }}
        >
          <img src={editIcon} alt="" />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        >
          <img src={watchIcon} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default NewCard;
