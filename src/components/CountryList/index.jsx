import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CountryItem from "../CountryItem";
import { Info, ListContainer } from "./StyledComponents";

const CountryList = () => {
  const { countryList, fixedList, status, error } = useSelector(
    (state) => state.countries
  );
  const query = useSelector((state) => state.query.query);

  const [currentList, setCurrentList] = useState([...fixedList]);
  const [dragCountry, setDragCountry] = useState(null);

  const handleDragStart = (e, country) => setDragCountry(country);

  const handleDrop = (e, country) => {
    e.preventDefault();
    let aimItem = null;
    let endIndex = null;
    let drugItem = null;
    let startIndex = null;

    currentList.forEach((c, i) => {
      if (c.name === country.name) {
        endIndex = i;
        aimItem = [...currentList].splice(i, 1);
      }
      if (c.name === dragCountry.name) {
        startIndex = i;
        drugItem = [...currentList].splice(i, 1);
      }
    });
    setCurrentList((current) => {
      currentList.splice(endIndex, 1, { ...drugItem });
      currentList.splice(startIndex, 1, { ...aimItem });
    });
  };

  useEffect(() => {
    if (query) {
      setCurrentList([
        ...fixedList,
        ...countryList.filter(
          (country) =>
            country.name.includes(query) &&
            fixedList.every((c) => c.name !== country.name)
        ),
      ]);
    } else setCurrentList([...fixedList]);
  }, [query, countryList]);

  return (
    <>
      {status === "loading" && <Info>Loading...</Info>}
      {error && <Info>{error}</Info>}
      <ListContainer>
        {currentList
          // .sort((a, b) => {
          //   return a.name.localeCompare(b.name);
          // })
          .map((country, index) => (
            <CountryItem
              onDragStart={handleDragStart}
              // onDragLeave={handleDragEnd}
              // onDragEnd={handleDragEnd}
              // onDragOver={handleDragEnd}
              onDrop={handleDrop}
              draggable={true}
              key={country.name + index}
              country={country}
              //index={index}
            />
          ))}
      </ListContainer>
    </>
  );
};

export default CountryList;
