import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  Controls,
  CountryCard,
  Title,
} from "./StyledComponents";
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
  };

  const goToDetails = () => {
    handleSelect();
    navigate(`/${handleUrl(country.name)}`, { state: { from: "countryItem" } });
  };

  useEffect(() => {
    if (fixedList.some((c) => c.name === country.name)) {
      setIsChecked(true);
    }
  }, [fixedList, country.name]);

  return (
    country && (
      <CountryCard
        onClick={goToDetails}
        onMouseEnter={makeIsHover}
        onMouseLeave={makeNotHover}
      >
        <Title>{country.name}</Title>
        {isHover && (
          <Controls>
            <Checkbox
              checked={isChecked}
              name="input"
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              onChange={makeFixedCountry}
            />
            <Button type="button" disabled={isChecked} onClick={removeCountry}>
              Delete
            </Button>
          </Controls>
        )}
      </CountryCard>
    )
  );
};

export default CountryItem;
