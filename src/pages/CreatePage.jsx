import {useNavigate} from "react-router-dom"

import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateForm from "../components/createForm/CreateForm";

import styles from "../styles/CreatePage.module.css";

const CreatePage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <IconButton onClick={()=>{navigate("/admin")}}>
        <ArrowBackIcon  />
        <Typography variant="h6" component="p">
          Назад
        </Typography>
      </IconButton>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
