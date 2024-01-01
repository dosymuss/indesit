import {useNavigate} from "react-router-dom"

import styles from "./SearchInp.module.css";

const SearchInp = ({ value, setClick, setValue }) => {

  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      {/* <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ width: "100%", mt: "1rem" }}
      />
      <Button onClick={()=>setClick(true)} variant="contained">Search</Button> */}
      <input
        className={styles.inp}
        placeholder="Search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => {
        setClick(true)
        navigate(`/search?searchValue=${value}`)
        }} className={styles.btn}>
        Search
      </button>
    </div>
  );
};

export default SearchInp;
