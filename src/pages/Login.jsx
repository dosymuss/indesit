import { Formik } from "formik";
import styles from "../styles/Login.module.css";
import { Button, TextField } from "@mui/material";
import { authLogin } from "../api/admin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        username: "string",
        password: "stringst",
      }}
      onSubmit={(values) => {
        console.log(values);
        if (values) {
          authLogin()
            .then((res) => {
              if(res){
                navigate("/admin")
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }}
    >
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <div className={styles.wrap}>
          <div className={styles.mainDiv}>
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              type="text"
              name="username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="text"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button onClick={handleSubmit}>click</Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
