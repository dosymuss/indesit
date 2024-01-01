import { Link } from "react-router-dom";
import indLogo from "../../img/indLogo.svg";

import styles from "./AdminLogoLayout.module.css"

const AdminLogoLayout = () => {
  return (
    <Link to={"/admin"}>
      <img className={styles.img} src={indLogo} alt="" />
    </Link>
  );
};

export default AdminLogoLayout;
