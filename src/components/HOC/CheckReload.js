import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { setSelectedCountry } from "../../store/countrySlice";
import { fetchCountries } from "../../store/ActionCreators";

export const CheckReload = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { countryList } = useSelector((state) => state.countries);

  const handleReload = () => {
    if (countryList.length === 0) {
      dispatch(fetchCountries());
      let chunk = location.pathname.slice(1, 5);
      const country = countryList.find((c) => c.name.includes(chunk));
      dispatch(setSelectedCountry(country.name));
    }
  };

  if (location.state.from !== "countryItem") {
    handleReload();
    return children;
  } else return children;
};
