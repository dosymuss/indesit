import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../store/productSlice";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../store/productSlice";

import styles from "./CardModal.module.css";

const CardModal = ({ open, setOpen, id }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const deleteFunc = () => {
    dispatch(deleteProduct(id));
    setOpen(false);
  };
  return (
    <div className={open ? styles.main : styles.mainHiden}>
      <button
        onClick={() => {
          navigate(`/change/${id}`);
        }}
        className={styles.btn}
      >
        Изменить
      </button>
      <button onClick={deleteFunc} className={styles.btn}>
        Удалить
      </button>
      <IconButton onClick={() => setOpen(false)}>
        <ClearIcon />
      </IconButton>
    </div>
  );
};

export default CardModal;
