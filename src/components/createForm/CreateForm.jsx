import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// import { addProduct } from "../../store/productSlice";

import { TextField, Button } from "@mui/material";
import bac from "../../img/обоиДляФормы.jpg";
import ProductReader from "../../ui/ProductReader/ProductReader";
import { postProduct } from "../../api/productApi";
import { showCategories } from "../../store/categorySlice";
import { validateForCreate } from "../../code/validation";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./CreateForm.module.css";
import ErrorModal from "../../ui/modal/errorModal/ErrorModal";

const CreateForm = () => {
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCategories());
  }, []);

  const category = useSelector((state) => state.category);
  console.log(category);

  const formData = new FormData();

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        desc: "",
        type: "",
      }}
      validationSchema={validateForCreate}
      onSubmit={(values) => {
        if (values) {
          formData.append("image", file);
          formData.append("name", values.name);
          formData.append("description", values.desc);
          formData.append("price", values.price);
          formData.append("category", values.type);
          if(file === null){
            setOpen(true)
          }

          postProduct(formData)
            .then((res) => {
              console.log(res);
              if (res) {
                navigate("/admin");
              }
            })
            .catch((error) => {
              console.log(error);
            });
          // dispatch(
          //   addProduct({
          //     id: 6,
          //     name: value.name,
          //     price: value.price,
          //     description: value.desc,
          //     image: photo,
          //     type:value.type
          //   })
          // );
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
            <h1 style={{ color: "#6C6C6C" }}>Создайте товар</h1>
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
                  {/* <MenuItem value={"#мороз"}>Морозильник</MenuItem>
                  <MenuItem value={"#стирка"}>Стиральная машина</MenuItem> */}
                </Select>
              </FormControl>
            </label>
            <label>
              Выберите картинку
              <ProductReader setPhoto={setPhoto} setFile={setFile} />
            </label>
            <Button
              disabled={!touched || !isValid}
              onClick={handleSubmit}
              variant="contained"
            >
              Создать
            </Button>
          </div>
          <ErrorModal open={open} handleClose={()=>setOpen(false)}/>
        </div>
      )}
    </Formik>
  );
};

export default CreateForm;
