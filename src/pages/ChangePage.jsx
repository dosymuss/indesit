import { useNavigate } from "react-router-dom";

import ChangeForm from "../components/changeForm/ChangeForm";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "../styles/changePage.module.css";

const ChangePage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <IconButton onClick={()=>{navigate("/admin")}}>
          <ArrowBackIcon />
        </IconButton>
        <ChangeForm />
      </div>
    </div>
  );
};

export default ChangePage;
