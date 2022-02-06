import { useSelector, useDispatch } from "react-redux";

import { setQuery } from "../store/querySlice";
import { resetQuery } from "../store/querySlice";

const SearchField = () => {
  const query = useSelector((state) => state.query.query);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(setQuery(e.target.value));
  const onReset = () => dispatch(resetQuery());

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <button type="button" onClick={onReset}>
        RESET
      </button>
    </div>
  );
};

export default SearchField;
