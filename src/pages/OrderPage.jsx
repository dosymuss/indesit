import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/mainHeader/MainHeader";
import iconGroup from "../img/iconGroup.svg";
import {
  getCategoryIdMain,
  getProductForOrder,
  customerOrder,
} from "../api/mainPage";

import styles from "../styles/OrderPage.module.css";
import MessageComponent from "../ui/message/MessageComponent";

function OrderPage() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [customerName, setCustomerName] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getProductForOrder(id)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCategoryIdMain(product.category)
      .then((res) => {
        console.log(res);
        setCategory(res.data.title);
      })
      .catch((err) => console.log(err));
  }, [product]);

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я ]+$/;
    if (!nameRegex.test(name) || name.trim() === "") {
      setCustomerNameError(
        "Поле обязательно для заполнения.(Имя должно содержать только буквы)"
      );
      setIsFormValid(false);
      return false;
    } else {
      setCustomerNameError("");
      return true;
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError(
        "Поле обязательно для заполнения. (Некорректный формат номера телефона)"
      );
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  };

  const validateQuantity = (quantity) => {
    const quantityNum = parseInt(quantity, 10);
    if (isNaN(quantityNum) || quantityNum <=0) {
      setQuantityError("Количество должно быть больше 0.");
      return false;
    } else {
      setQuantityError("");
      return true;
    }
  };

  const updateCustomerName = (e) => {
    setCustomerName(e.target.value);
    validateName(e.target.value);
  };

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    validatePhone(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
    validateQuantity(e.target.value);
  };

  React.useEffect(() => {
    validateForm();
  }, [customerNameError, phoneNumberError, quantityError]);

  const validateForm = () => {
    const nameIsValid = customerNameError === "" && customerName.trim() !== "";
    const phoneIsValid = phoneNumberError === "" && phoneNumber.trim() !== "";
    const quantityIsValid =
      quantityError === "" &&
      quantity !== "" &&
      !isNaN(quantity) &&
      quantity > 0;

    setIsFormValid(nameIsValid && phoneIsValid && quantityIsValid);
  };

  const handleOrder = () => {
    console.log("Заказ оформлен:", { customerName, phoneNumber, quantity });
    customerOrder({
      customer_name: customerName,
      phone_number: phoneNumber,
      product: id,
      quantity: quantity,
    }).then((res)=>{
      console.log(res)
      setOpen(true)
      setTimeout(()=>{
navigate("/")
      },3000)
    })
  };

  return (
    <>
      <MainHeader />
      <div className={styles.orderPage}>
        <div className={styles.productInfoPage}>
          <img className={styles.productImage} src={product.image} alt="" />

          <div className={styles.productInfo}>
            <p className={styles.categorText}>{category}</p>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>
              <span className={styles.productPriceNumber}>{product.price}</span>{" "}
              сом
            </p>
            <a href="#form" className={styles.productButton}>
              Заказать
            </a>
          </div>
        </div>

        <div className={styles.orderDiv}>
          <div id="form" className={styles.orderForm}>
            <h2 className={styles.productName}>Оформить заказ</h2>
            <div className={styles.orderFormInput}>
              <label className={styles.nameOfInput}>
                Имя
                {customerNameError && (
                  <p className={styles.error}>{customerNameError}</p>
                )}
                <input
                  type="text"
                  value={customerName}
                  onChange={updateCustomerName}
                  placeholder="Введите ваше имя"
                  className={styles.productInput}
                />
              </label>
              <label className={styles.nameOfInput}>
                Номер телефона
                {phoneNumberError && (
                  <p className={styles.error}>{phoneNumberError}</p>
                )}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={updatePhoneNumber}
                  placeholder="Введите ваш телефон"
                  className={styles.productInput}
                />
              </label>
              <label className={styles.nameOfInput}>
                Количество
                {quantityError && (
                  <p className={styles.error}>{quantityError}</p>
                )}
                <input
                  type="number"
                  value={quantity}
                  onChange={updateQuantity}
                  min="1"
                  placeholder="Количество"
                  className={styles.productInput}
                />
              </label>
              <button
                onClick={handleOrder}
                className={styles.productButton}
                disabled={!isFormValid}
              >
                Оформить заказ
              </button>
            </div>
          </div>
          <div className={styles.decorDiv}>
            <img src={iconGroup} alt="" />
          </div>
        </div>
      </div>
      <MessageComponent open={open} handleClose={()=>setOpen(false)}/>
    </>
  );
}

export default OrderPage;
