import { useState } from "react";

import styles from "./CategoryCreate.module.css";
import CategoryList from "./CategoryList/CategoryList";
import CreateCategoryForm from "./CreateCategory/CreateCategoryForm";

const CategoryCreate = () => {
  const [createClick, setCreateClick] = useState(false)
  return (
    <div className={styles.main}>
      <div className={styles.contentDiv}>
        <CreateCategoryForm click={createClick} setClick={setCreateClick}/>
        <CategoryList click={createClick}/>
      </div>
    </div>
  );
};

export default CategoryCreate;
