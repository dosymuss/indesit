import { useState, useEffect } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductById, putProductApi } from "../../api/productApi";
import { showCategories } from "../../store/categorySlice";
import { validateForCreate } from "../../code/validation";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import bac from "../../img/обоиДляФормы.jpg";
import { TextField, Button } from "@mui/material";
import ProductReader from "../../ui/ProductReader/ProductReader";
import ErrorModal from "../../ui/modal/errorModal/ErrorModal";

import styles from "./changeForm.module.css";

const ChangeForm = () => {
  const [product, setProduct] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false)

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProduct(res.data);
          setPhoto(res.data.image);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(showCategories());
  }, []);

  const category = useSelector((state) => state.category);
  console.log(file);

  const formData = new FormData();

  const navigate = useNavigate();

  if (product.length !== 0) {
    return (
      <Formik
        initialValues={{
          name: product.name,
          price: product.price,
          desc: product.description,
          type: product.category,
        }}
        validationSchema={validateForCreate}
        onSubmit={(value) => {
          console.log(value);
          if (value) {
            formData.append("image", file);
            formData.append("description", value.desc);
            formData.append("price", value.price);
            formData.append("category", value.type);
            formData.append("name", value.name);
            if(file === null){
              setOpen(true)
            }
  

            putProductApi(id, formData)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  navigate("/admin");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <div className={styles.main}>
            <img className={styles.img} src={photo ? photo : bac} alt="" />
            <div className={styles.formDiv}>
              <h1 style={{ color: "#6C6C6C" }}>Изменить товар</h1>
              <label>
                Имя продукта
                <TextField
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="outlined-basic"
                  label={errors.name ? `${errors.name}` : "Введите имя"}
                  variant="outlined"
                  color={errors.name ? "error" : "primary"}
                />
              </label>
              <label>
              Цена продукта
                <TextField
                  name="price"
                  type="number"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="outlined-basic"
                  label={errors.price ? `${errors.price}` : "Введите цену"}
                  variant="outlined"
                  color={errors.price ? "error" : "primary"}
                />
              </label>
              <label>
              Описание товара
                <TextField
                  name="desc"
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="outlined-textarea"
                  label={errors.desc ? `${errors.desc}` : "Введите описание"}
                  placeholder="описание"
                  multiline
                  color={errors.desc ? "error" : "primary"}
                />
              </label>
              <label>
                Тип товара
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Тип товара
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.type}
                    label="Тип товара"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="type"
                  >
                    {category.map((item) => (
                      <MenuItem value={item.id}>{item.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </label>
              <label>
                Выберите картинку
                <ProductReader setPhoto={setPhoto} setFile={setFile} />
              </label>
              <Button
                disabled={!touched && !isValid}
                onClick={handleSubmit}
                variant="contained"
              >
                Изменить
              </Button>
            </div>
          <ErrorModal open={open} handleClose={()=>setOpen(false)}/>
          </div>
        )}
      </Formik>
    );
  }
};

export default ChangeForm;
