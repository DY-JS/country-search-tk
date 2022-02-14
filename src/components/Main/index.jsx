import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCountries } from "../../store/ActionCreators";
import SearchField from "../SearchField";
import CountryList from "../CountryList";
import { MainContainer } from "./StyledComponents";

function Main() {
  const dispatch = useDispatch();
  const { countryList } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countryList.length === 0) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <MainContainer>
      <SearchField />
      <CountryList />
    </MainContainer>
  );
}

export default Main;
