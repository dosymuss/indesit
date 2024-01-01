import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCategory, putCategory } from "../../../../store/categorySlice";
import { useMediaQuery } from "react-responsive";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./categoryListItem.module.css";

const CategoryListItem = ({ id, title }) => {
  const [change, setChange] = useState(false);
  const [value, setValue] = useState(title);

  const dispatch = useDispatch();

  const deleteFunc = (id) => {
    dispatch(removeCategory(id));
  };

  const width300 = useMediaQuery({
    query: "(max-width:375px)",
  });

  const changeCateg = () => {
    const obj = {
      id: id,
      text: value,
    };

    dispatch(putCategory(obj));
  };

  return (
    <div key={id} className={styles.listItem}>
      {change ? (
        <input
          className={styles.inp}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <p>{title}</p>
      )}

      <div>
        {change ? (
          <IconButton
            onClick={() => {
              setChange(false);
              changeCateg();
            }}
          >
            <CheckIcon sx={{ width: width300 ? "18px" : "24px" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setChange(true)}>
            <EditIcon sx={{ width: width300 ? "18px" : "24px" }} />
          </IconButton>
        )}

        <IconButton
          onClick={() => {
            deleteFunc(id);
          }}
        >
          <DeleteIcon sx={{ width: width300 ? "18px" : "24px" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CategoryListItem;
