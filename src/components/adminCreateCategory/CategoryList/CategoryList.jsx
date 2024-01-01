import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { showCategories, removeCategory } from "../../../store/categorySlice";

import styles from "./Categorylist.module.css";
import CategoryListItem from "./categoryListItem/CategoryListItem";

const CategoryList = ({ click }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCategories());
  }, [click]);

  const category = useSelector((state) => state.category);

  return (
    <div className={styles.main}>
      {category.length === 0 ? (
        <h3 className={styles.emptyText}>Категорий нет</h3>
      ) : (
        category.map((item) => (
          <CategoryListItem key={item.id} id={item.id} title={item.title} />
        ))
      )}
    </div>
  );
};

export default CategoryList;
