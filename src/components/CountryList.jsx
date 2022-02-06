import { useMemo } from "react";
import { useSelector } from "react-redux";

import CountryItem from "./CountryItem";

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
  const handleUrl = (name) => {
    const res = name.toLowerCase().split("");
    return res
      .map((char) => {
        return char == " " ? "-" : char;
      })
      .join("");
  };

  return (
    query && (
      <div>
        {/* {displayList.map((country, index) => (
          <CountryItem key={country.name + index} country={country} />
        ))} */}
        {filteredList.map((country, index) => (
          <CountryItem key={country.name + index} country={country} />
        ))}
      </div>
    )
  );
};

export default CountryList;
