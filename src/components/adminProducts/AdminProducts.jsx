import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import SearchInp from "../../ui/input/SearchInp";
import { Grid } from "@mui/material";

import { showProducts } from "../../store/productSlice";
import { searchProduct } from "../../api/productApi";
import NewCard from "../../ui/newCard/NewCard";

import styles from "./AdminProducts.module.css";

const AdminProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchClick, setSearchClick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProducts());
  }, []);

  if (searchClick) {
    searchProduct(searchValue)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSearchList(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setSearchClick(false);
  }

  const product = useSelector((state) => state.product);

  console.log(product);
  return (
    <div className={styles.wrap}>
      <SearchInp
        value={searchValue}
        setClick={setSearchClick}
        setValue={setSearchValue}
      />
      <Grid sx={{ mt: "20px" }} container spacing={1}>
        {searchValue === "" && searchList.length === 0
          ? product.map((item) => (
              <Grid
                sx={{ mt: "20px", display: "flex", justifyContent: "center" }}
                item
                xs={12}
                md={4}
              >
                <NewCard id={item.id} image={item.image} name={item.name} />
              </Grid>
            ))
          : searchList.map((item) => (
              <Grid
                sx={{ mt: "20px", display: "flex", justifyContent: "center" }}
                item
                xs={12}
                md={4}
              >
                <NewCard id={item.id} image={item.image} name={item.name} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default AdminProducts;
