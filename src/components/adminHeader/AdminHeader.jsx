import AdminLogoLayout from "../../layout/adminLogo/AdminLogoLayout";
import { IconButton } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../../ui/burgerMenu/BurgerMenu";

import styles from "./AdminHeader.module.css";

const AdminHeader = ({ product, setProduct }) => {
  const navigate = useNavigate();

  const width900 = useMediaQuery({
    query: "(max-width:900px)",
  });


  return (
    <div className={styles.main}>
      <div className={styles.logoReverseDiv}>
        <AdminLogoLayout />
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          <AutorenewIcon />
        </IconButton>
      </div>
      {width900 ? (
        <BurgerMenu product={product} setProduct={setProduct}/>
      ) : (
        <div className={styles.btnDiv}>
          <button
            onClick={() => setProduct("product")}
            className={product === "product" ? styles.btnActive : styles.btn}
          >
            Товары
          </button>
          <button
            onClick={() => setProduct("appli")}
            className={product === "appli" ? styles.btnActive : styles.btn}
          >
            Заявки
          </button>
          <button
            onClick={() => setProduct("category")}
            className={product === "category" ? styles.btnActive : styles.btn}
          >
            Категории
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
