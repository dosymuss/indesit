import { IconButton } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";

import styles from "./CategoryReader.module.css";
import { useRef } from "react";

const CategoryReader = ({ setFile }) => {
  const inpRef = useRef();
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className={styles.main}>
      <IconButton
        onClick={() => {
          inpRef.current.click();
        }}
      >
        <AttachmentIcon />
      </IconButton>
      <input
        ref={inpRef}
        onChange={(e) => {
            handleChange(e.target.files[0])
        }}
        className={styles.inp}
        type="file"
        id="#cateFile"
        accept="image/*"
      />
    </div>
  );
};

export default CategoryReader;
