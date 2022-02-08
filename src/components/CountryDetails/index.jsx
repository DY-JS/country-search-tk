import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Flag from "react-world-flags";
import arrow from "../../utils/pictures/arrow-back.svg";
import lock from "../../utils/pictures/locked.svg";

import {
  DetailsCard,
  FlagWrapper,
  Detail,
  Info,
  Img,
  Text,
  Back,
} from "./StyledComponents";

const CountryDetails = () => {
  const { fixedList, selectedCountry } = useSelector(
    (state) => state.countries
  );

  const check = fixedList.some(
    (country) => country.name === selectedCountry.name
  );

  return (
    <>
      <Back>
        <NavLink to="/">
          <Img src={arrow} alt="Back" />
          <Text>Back To Search Page</Text>
        </NavLink>
      </Back>
      <DetailsCard>
        <FlagWrapper>
          <Flag code={selectedCountry.alpha2Code} />
        </FlagWrapper>
        <Info>
          <Detail>
            Country:<Text>{selectedCountry.name}</Text>
            {check && <Img src={lock} alt="fixed" />}
          </Detail>
          <Detail>
            alpha3Code:<Text>{selectedCountry.alpha3Code}</Text>
          </Detail>
          <Detail>
            alpha2Code:<Text>{selectedCountry.alpha2Code}</Text>
          </Detail>
          <Detail>
            Domain:<Text>{selectedCountry.topLevelDomain}</Text>
          </Detail>
        </Info>
      </DetailsCard>
    </>
  );
};

export default CountryDetails;
