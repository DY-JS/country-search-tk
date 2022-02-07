import { useMemo } from "react";
import { useSelector } from "react-redux";

import CountryItem from "../CountryItem";
import { ListContainer } from "./StyledComponents";

const CountryList = () => {
  const { countryList, fixedList } = useSelector((state) => state.countries);
  const query = useSelector((state) => state.query.query);
  // const startFixedList = useMemo(() => {
  //   //зафиксировал начальное значение fixedList
  //   return [...fixedList];
  // }, []);

  const filteredList = useMemo(() => {
    if (query) {
      return [
        ...fixedList,
        ...countryList.filter(
          (country) =>
            country.name.includes(query) &&
            fixedList.every((c) => c.name !== country.name)
        ),
      ];
    }
    //else return countryList;
  }, [query, countryList]);

  // const displayList = useMemo(() => {
  //   return [...fixedList, ...filteredList];
  // }, [filteredList]);

  return (
    query && (
      <ListContainer>
        {/* {displayList.map((country, index) => (
          <CountryItem key={country.name + index} country={country} />
        ))} */}
        {filteredList.map((country, index) => (
          <CountryItem key={country.name + index} country={country} />
        ))}
      </ListContainer>
    )
  );
};

export default CountryList;
