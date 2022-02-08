import { useMemo } from "react";
import { useSelector } from "react-redux";

import CountryItem from "../CountryItem";
import { ListContainer } from "./StyledComponents";

const CountryList = () => {
  const { countryList, fixedList } = useSelector((state) => state.countries);
  const query = useSelector((state) => state.query.query);

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
    return fixedList;
  }, [query, countryList]);

  return (
    <ListContainer>
      {filteredList.map((country, index) => (
        <CountryItem key={country.name + index} country={country} />
      ))}
    </ListContainer>
  );
};

export default CountryList;
