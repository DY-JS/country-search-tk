import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Flag from "react-world-flags";

import {
  Button,
  Checkbox,
  Controls,
  CountryCard,
  Title,
  Code,
  FlagContainer,
} from "./StyledComponents";
import { handleUrl } from "../../utils/helpers";
import {
  addToFixedList,
  removeFromCountryList,
  setSelectedCountry,
} from "../../store/slices/countrySlice";

const Highlight = ({filter, str}) => {   //ФУНКЦИЯ ПОДСВЕТКИ НАЙДЕННОГО СОВПАДЕНИЯ
  if(!filter) return str;
  const regex = new RegExp(filter, 'ig');
  const matchValue = str.match(regex);
  if(matchValue) {
     return str.split(regex).map((s, i, arr) => {
       if ( i < arr.length -1) {
         const c =  matchValue.shift();
         return <>{s}<span style={{background: 'yellow'}}>{c}</span></>
        }
        return s
       })}
      return str
}

const CountryItem = ({ query, country }) => {
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

  const light = useCallback((str) => {
    return <Highlight filter={query} str={str} />  
  }, [query]);

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
        <Title>{light(country.name)}</Title>
        <Code>{light(country.alpha3Code)}</Code>
        <Controls>
          {(isHover || isChecked) && (
            <Checkbox
              checked={isChecked}
              name="input"
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              onChange={makeFixedCountry}
            />
          )}
          {isHover ? (
            <Button type="button" disabled={isChecked} onClick={removeCountry}>
              Delete
            </Button>
          ) : (
            <FlagContainer>
              <Flag code={country.alpha2Code} />
            </FlagContainer>
          )}
        </Controls>
      </CountryCard>
    )
  );
};

export default CountryItem;
