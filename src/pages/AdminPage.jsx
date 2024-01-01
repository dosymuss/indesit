import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminHeader from "../components/adminHeader/AdminHeader";
import AdminProducts from "../components/adminProducts/AdminProducts";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Applications from "../components/adminApplications/Applications";
import CreateModal from "../ui/modal/createModal/CreateModal";
import CategoryCreate from "../components/adminCreateCategory/CategoryCreate";

import styles from "../styles/AdminPage.module.css";

const AdminPage = () => {
  const [product, setProduct] = useState("product");
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <AdminHeader product={product} setProduct={setProduct} />
      <>
      {product === "product" && <AdminProducts /> }
      {product === "appli" && <Applications />}
      {product === "category" && <CategoryCreate/>}
      
      </>
      <div className={styles.addBtn}>
        <IconButton
          onClick={() => {
            navigate("/create");
            // setOpen(true)
        }}
          sx={{ backgroundColor: "#0090d0" }}
        >
          <AddIcon sx={{ color: "black" }} />
        </IconButton>
        <CreateModal open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default AdminPage;
