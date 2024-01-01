import mainLogo from "../../img/logo.png";
import MainHeadDrop from "../../ui/MainHeadDrop/MainHeadDrop";
import { Link } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={styles.main}>
      <Link to={"/"}>
        <img className={styles.iconLogo} src={mainLogo} alt="" />
      </Link>
      <div className={styles.linkDiv}>
        <Link to="/prod?param=холодильник">Холодильник</Link>
        <Link to="/prod?param=морозильник">Морозильник</Link>
        <Link to="/prod?param=стирка">Стиралка</Link>
        <MainHeadDrop />
      </div>
    </div>
  );
};

export default MainHeader;
