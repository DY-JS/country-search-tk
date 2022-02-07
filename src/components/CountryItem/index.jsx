import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { Checkbox, Controls, CountryCard, Title } from "./StyledComponents";
import { handleUrl } from "../../utils/helpers";
import {
  addToFixedList,
  removeFromCountryList,
  setSelectedCountry,
} from "../../store/countrySlice";

const CountryItem = ({ country }) => {
  const { fixedList } = useSelector((state) => state.countries);
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makeIsHover = () => setIsHover(true);
  const makeNotHover = () => setIsHover(false);

  const makeFixedCountry = () => {
    if (!isChecked) {
      dispatch(addToFixedList(country.name));
      setIsChecked(true);
    }
  };

  const removeCountry = (e) => {
    e.stopPropagation();
    dispatch(removeFromCountryList(country.name));
  };

  const handleSelect = () => {
    dispatch(setSelectedCountry(country.name));
    //country && navigate(`${country.name}`);
  };

  useEffect(() => {
    if (fixedList.some((c) => c.name === country.name)) {
      setIsChecked(true);
    }
  }, [fixedList]);

  return (
    country && (
      <CountryCard
        onClick={handleSelect}
        onMouseEnter={makeIsHover}
        onMouseLeave={makeNotHover}
      >
        <NavLink to={`/${handleUrl(country.name)}`}>
          <Title>{country.name}</Title>
        </NavLink>
        {isHover && (
          <Controls>
            <Checkbox
              checked={isChecked}
              name="input"
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              onChange={makeFixedCountry}
            />
            <input
              type="button"
              disabled={isChecked}
              onClick={removeCountry}
              value="Delete"
            />
          </Controls>
        )}
      </CountryCard>
    )
  );
};

export default CountryItem;
