import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getCategoriesMain } from "../../api/mainPage";
import { useNavigate } from "react-router-dom";

export default function MainHeadDrop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  const navigate = useNavigate()

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const makeRedirect = (title)=>{
navigate(`/prod?param=${title}`)
  }

  React.useEffect(() => {
    getCategoriesMain()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >

        {categories.length>0 && categories.map((item)=>(
        <MenuItem
        onClick={() => {
          handleClose();
          makeRedirect(item.title)
        }}
      >
        {item.title}
      </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
