import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import SearchInp from "../ui/input/SearchInp";
import { searchProduct } from "../api/productApi";
import NewCard from "../ui/newCard/NewCard";

import styles from "../styles/SearchPage.module.css";
import MainNotFound from "../layout/mainNotFound/MainNotFound";

const SearchPage = () => {
  const { search } = useLocation();
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  const queryParams = new URLSearchParams(search);

  const query = queryParams.get("searchValue");

  useEffect(() => {
    console.log(query);
    searchProduct(query)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <div className={styles.returnBtn}>
          <IconButton onClick={()=>{navigate("/admin")}}>
            <ArrowBackIcon />
          </IconButton>
          <p className={styles.title}>Search</p>
        </div>
        <SearchInp value={value} setValue={setValue} setClick={setClick} />
      </div>
      <Grid sx={{ mt: "20px" }} container spacing={1}>
        {data.length > 0 ? (
          data.map((item) => (
            <Grid
              sx={{ mt: "20px", display: "flex", justifyContent: "center" }}
              item
              xs={12}
              md={4}
            >
              <NewCard id={item.id} image={item.image} name={item.name} />
            </Grid>
          ))
        ) : (
          <div className={styles.notFoundDiv}>
            <MainNotFound text={"Таких товаров нет"} color={"black"} />
          </div>
        )}
      </Grid>
    </div>
  );
};

export default SearchPage;
