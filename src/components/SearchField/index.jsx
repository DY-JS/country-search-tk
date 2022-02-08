import { useSelector, useDispatch } from "react-redux";

import { setQuery, resetQuery } from "../../store/querySlice";
import { Container, Controls, Input, Button } from "./StyledComponents";

const SearchField = () => {
  const query = useSelector((state) => state.query.query);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(setQuery(e.target.value));
  const onReset = () => dispatch(resetQuery());

  return (
    <Container>
      <Controls>
        <Input
          type="text"
          value={query}
          placeholder="Type here for search"
          onChange={handleChange}
        />
        <Button type="button" onClick={onReset}>
          RESET
        </Button>
      </Controls>
    </Container>
  );
};

export default SearchField;
