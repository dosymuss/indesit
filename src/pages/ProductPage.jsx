import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainCard from "../ui/mainCard/MainCard";
import { getProductCategory } from "../api/mainPage";

import styles from "../styles/productPage.module.css";
import MainHeader from "../components/mainHeader/MainHeader";
import MainNotFound from "../layout/mainNotFound/MainNotFound";

const ProductPage = () => {
  const [data, setData] = useState([]);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("param");
  useEffect(() => {
    getProductCategory(query)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <div>
      <MainHeader />
      <div className={styles.main}>
        <h3 className={styles.title}>{query}</h3>
        <div className={styles.wrap}>
          {data.length !== 0 ? (
            data.map((item) => (
              <MainCard name={item.name} image={item.image} id={item.id} />
            ))
          ) : (
            <MainNotFound text={"Товаров данной категории нет"} color={"white"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
