import { IconButton } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import styles from "./ProductReader.module.css";

const ProductReader = ({ setPhoto, setFile }) => {
  const handlePhoto = (e) => {
    const selectedProduct = e.target.files[0];
    if (selectedProduct) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
        setFile(selectedProduct);
      };
      reader.readAsDataURL(selectedProduct);
    }
  };
  return (
    <div>
      <IconButton
        onClick={() => {
          document.querySelector("#file").click();
        }}
      >
        <AttachmentIcon />
      </IconButton>
      <input
        onChange={handlePhoto}
        className={styles.inp}
        id="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default ProductReader;
