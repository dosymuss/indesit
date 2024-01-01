import { useEffect, useState } from "react";
import { timeFunc } from "../../code/code";
import { useDispatch } from "react-redux";
import { deleteAppli } from "../../store/applicationSlice";
import { getProductById } from "../../api/productApi";
import { IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import styles from "./Application.module.css";

const ApplicationItem = ({ id, name, number, day, productId, quan }) => {
  const [expanded, setExpanded] = useState(false);
  const [prod, setProd] = useState([]);

  const dispatch = useDispatch();

  const width500 = useMediaQuery({
    query: "(min-width:390px) and (max-width:500px)",
  });
  const width300 = useMediaQuery({
    query: "(max-width:390px)",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const time = timeFunc(day);

  const deleteFunc = () => {
    dispatch(deleteAppli(id));
  };

  const returnWidth = () => {
    switch (true) {
      case width500:
        return "360px";
      case width300:
        return "320px";
      default:
        return "480px";
    }
  };

  useEffect(() => {
    console.log(width300);
  }, [width500]);

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        console.log(res);
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (prod.length !== 0) {
    return (
      <Accordion
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
        sx={{ mt: "25px", width: returnWidth() }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
          sx={{
            // borderRadius: " 0  0 20px 20px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#D9D9D9",
          }}
        >
          <div className={styles.numberNameDiv}>
            <div className={styles.nameMain}>
              <AccountCircleIcon />
              <div className={styles.nameNumDiv}>
                <p className={styles.name}>{name}</p>
              </div>
            </div>
            <Typography sx={{ color: "text.secondary" }}>{number}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#D9D9D9" }}>
          <div className={styles.infoDiv}>
            <div className={styles.timeDiv}>
              <h3>{prod.name}</h3>
              <p className={styles.time}>{time}</p>
            </div>
            <div className={styles.descAndImg}>
              <div className={styles.descWrap}>
                <div className={styles.descDiv}>
                  <h4 className={styles.descTitle}>Количество</h4>
                  <p>{quan}</p>
                </div>
                <div className={styles.descDiv}>
                  <h4 className={styles.descTitle}>Цена</h4>
                  <p>{prod.price}</p>
                </div>
                <div className={styles.descDiv}>
                  <h4 className={styles.descTitle}>Итого</h4>
                  <p>{prod.price * quan}</p>
                </div>
                <IconButton onClick={deleteFunc}>
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
              <img className={styles.img} src={prod.image} alt="" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }
};

export default ApplicationItem;
