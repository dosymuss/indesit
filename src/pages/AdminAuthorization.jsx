import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginIcon from "../img/loginIcon.svg";
import loginLock from "../img/loginLock.svg";
import loginUnLock from "../img/loginUnlock.svg";
import loginLogo from "../img/loginLogo.svg";

import styles from "../styles/AdminAuthorization.module.css";

const AdminAuthorization = () => {
  const text = useSelector(state => state.todo);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState("");
  const [type, setType] = useState("password");

  const isFormValid = () => username && password;
  useEffect(() => {
    console.log(text);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setError("Имя пользователя и пароль обязательны");
      return;
    }

    try {
      const response = await axios.post("http://206.189.103.20:8000/login/", {
        username,
        password,
      });

      if (response) {
        console.log(response);
        navigate("/admin");
        localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
      }

      setTokens(response.data.tokens);
      setError("");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Invalid credential, try again");
      } else {
        setError("Не удалось выполнить запрос к серверу");
      }
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authLogo}>
        <img src={loginLogo} alt="" />
      </div>
      {/* <h2 className={styles.authPageTitle}>Страница авторизации</h2> */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formDiv}>
            <div className={styles.formGroup}>
              <div>
                <img className={styles.inpImg} src={loginIcon} alt="" />
              </div>
              <input
                placeholder="Email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <button
                className={styles.passBtn}
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
              >
                <img
                  className={styles.inpImg}
                  src={type === "password" ? loginLock : loginUnLock}
                  alt=""
                />
              </button>
              <input
                placeholder="Password"
                type={type}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={styles.adminAuthorizationButton}
              type="submit"
              disabled={!isFormValid()}
            >
              Send
            </button>
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </form>
        <div className={styles.bottomWrap}>
          <div className={styles.bottom}>
            <p>Admin</p>
          </div>
        </div>
      </div>
      {tokens && <div>Вы успешно авторизованы</div>}
    </div>
  );
};

export default AdminAuthorization;
