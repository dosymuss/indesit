import { useState, useEffect } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CardModal from "../modal/cardModal/CardModal";
import { getCategoryById } from "../../api/categoryApi";

const Cartochka = ({ id, name, price, desc, image, type, section }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategoryById(type)
      .then((res) => {
        setCategory(res.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Card
        key={id}
        sx={{
          width: 340,
          borderRadius: "20px",
          position: "relative",
          boxShadow: " 0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
        }}
      >
        <CardMedia
          image={image}
          sx={{
            height: 180,
            paddingTop: "58.25%", // 16:9 соотношение сторон, вы можете настроить это соотношение
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" sx={{ color: "#0090d0" }}>
              {name}
            </Typography>
            <Typography variant="h6" sx={{ color: "#0090d0" }}>
              {category}
            </Typography>
          </div>
          <Typography
            sx={{ width: "100%" }}
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{price}</Typography>
          {section !== "main" && (
            <IconButton onClick={() => setOpen(!open)}>
              <DensityMediumIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
      <CardModal id={id} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cartochka;
