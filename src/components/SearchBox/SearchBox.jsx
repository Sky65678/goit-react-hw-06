import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filtersSlice";

export default function SearchBox() {
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.filter.filterValue);

  const handleSearch = (value) => {
    dispatch(setFilterValue(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={filterValue}
        onChange={handleInputChange}
      />
    </>
  );
}
