import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { handleUrl } from "../utils/helpers";
import {
  addToFixedList,
  removeFromCountryList,
  setSelectedCountry,
} from "../store/countrySlice";
import "./style.css";

const CountryItem = ({ country }) => {
  const { fixedList } = useSelector((state) => state.countries);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // const handleUrl = (name) => {
  //   const res = name.toLowerCase().split("");
  //   return res
  //     .map((char) => {
  //       return char == " " ? "-" : char;
  //     })
  //     .join("");
  // };

  return (
    country && (
      <div className="country" onClick={handleSelect}>
        <NavLink to={`/${handleUrl(country.name)}`}>
          <p>{country.name}</p>
        </NavLink>
        <div>
          <input
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
        </div>
      </div>
    )
  );
};

export default CountryItem;
