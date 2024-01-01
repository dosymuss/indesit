import { Formik } from "formik";
import { useState } from "react";

import { postCategory } from "../../../api/categoryApi";

import styles from "./CreateCategoryForm.module.css";
import CategoryReader from "../../../ui/createReader/CategoryReader";

const CreateCategoryForm = ({setClick,click}) => {
  const [file, setFile] = useState(null);

  const formData = new FormData();
  return (
    <Formik
      initialValues={{
        title: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        if (values) {
          // formData.append("image", file);
          formData.append("title", values.title);
          postCategory(formData)
            .then((res) => {
              console.log(res);
              setClick(!click)
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <div className={styles.formDiv}>
          <h1 className={styles.text}>Create or Delete Categories</h1>

          <input
            className={styles.input}
            placeholder="Create category"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* <CategoryReader setFile={setFile} /> */}

          <button className={styles.btn} onClick={handleSubmit}>
            Create
          </button>
        </div>
      )}
    </Formik>
  );
};

export default CreateCategoryForm;
