import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

import { getProductById } from "../api/productApi";
import { getCategoryById } from "../api/categoryApi";
import { deleteProduct } from "../store/productSlice";
import exitIcon from "../img/exit.svg";
import deleteIcon from "../img/deleteIcon.svg";
import editIcon from "../img/editIcon.svg";

import styles from "../styles/ProdDetal.module.css";


const ProductDetalPage = () => {
  const [prod, setProd] = useState([]);
  const [category, setCategory] = useState("");
  const { id } = useParams();

  const categories = useSelector((state) => state.category);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteFunc = () => {
    dispatch(deleteProduct(id));
    navigate("/admin");
  };

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProd(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getCategoryById(prod.category)
      .then((res) => {
        console.log(res);
        setCategory(res.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prod]);

  if (prod.length !== 0) {
    return (
      <div className={styles.main}>
        <div className={styles.btnDiv}>
          <IconButton
            className={styles.btns}
            onClick={() => {
              navigate("/admin");
            }}
          >
            <img src={exitIcon} alt="exit" />
          </IconButton>
          <div className={styles.editAndDel}>
            <IconButton
              onClick={() => {
                deleteFunc();
              }}
              className={styles.btns}
            >
              <img src={deleteIcon} alt="exit" />
            </IconButton>
            <IconButton
              className={styles.btns}
              onClick={() => {
                navigate(`/change/${id}`);
              }}
            >
              <img src={editIcon} alt="exit" />
            </IconButton>
          </div>
        </div>
        <div className={styles.imageDescDiv}>
          <img className={styles.img} src={prod.image} alt="" />
          <div className={styles.descDiv}>
            <h2 className={styles.title}>{prod.name}</h2>
            <div className={styles.priceDiv}>
              <p className={styles.price}>{prod.price}</p>
              <p className={styles.price}>{category}</p>
            </div>
            <p className={styles.desc}>{prod.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetalPage;
