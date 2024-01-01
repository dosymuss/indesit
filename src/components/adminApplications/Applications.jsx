import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { getAllAppli } from "../../store/applicationSlice";
import ApplicationItem from "../applicationItem/ApplicationItem";
import { useMediaQuery } from "react-responsive";

export default function Applications() {
  const dispatch = useDispatch();

  const width1400 = useMediaQuery({
    query: "(max-width:1450px)",
  });



  useEffect(() => {
    dispatch(getAllAppli());
  }, [dispatch]);

  const appli = useSelector((state) => state.application);

  console.log(appli);
  return (
    <Grid
      container
      sx={{
        padding: "20px 0px 20px 20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {appli.map((item) => (
        <Grid key={item.id} item xs={12} md={width1400 ? 6 : 4}>
          <ApplicationItem
            key={item.id}
            id={item.id}
            name={item.customer_name}
            number={item.phone_number}
            productId={item.product}
            quan={item.quantity}
            day={item.created_at}
          />
        </Grid>
      ))}
    </Grid>
  );
}
