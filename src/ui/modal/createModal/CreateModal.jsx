import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CreateForm from "../../../components/createForm/CreateForm";
import styles from "./CreateModal.module.css";

const CreateModal = ({ open, setOpen }) => {
  return (
    <div className={open ? styles.modalActive : styles.modalHiden}>
      <div className={styles.createContent}>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreateModal;
