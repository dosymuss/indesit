import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterBlock.module.css";
import instagramLogo from "../../img/icons8-instagram.svg";
import indesitLogo from "../../img/logo_indesit_white.png";
import faceBookLogo from "../../img/icons8-facebook.svg";
import adminImg from "../../img/adminLogo.svg";
import twitterLogo from "../../img/icons8-twitter.svg";

const FooterBlock = () => {
  return (
    <footer>
      <div className={styles.iconAndLogoDiv}>
        <img className={styles.logo} src={indesitLogo} alt="" />
        <div className={styles.iconDiv}>
          <a href="#">
            <img className={styles.icon} src={faceBookLogo} alt="" />
          </a>
          <a href="#">
            <img className={styles.icon} src={instagramLogo} alt="" />
          </a>
          <a href="#">
            <img className={styles.icon} src={twitterLogo} alt="" />
          </a>
          <Link to={"/admin-authorization"}>
            <img className={styles.icon} src={adminImg} alt="" />
          </Link>
        </div>
      </div>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
        perferendis debitis expedita labore, dolorem soluta nemo iure minima
        voluptates velit molestiae reiciendis, voluptatum nisi. Quo voluptatem
        nihil blanditiis modi cumque.
      </p>
      <hr />
      <div className={styles.makeDiv}>
        <p>@made by dosa, bema, asel</p>
      </div>
    </footer>
  );
};

export default FooterBlock;
