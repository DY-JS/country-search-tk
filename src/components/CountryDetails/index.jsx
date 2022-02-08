import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import Flag from "react-world-flags";
import arrow from "../../utils/pictures/arrow-back.svg";

import { handleUrl } from "../../utils/helpers";
import { DetailsCard, Detail, Img, Text, Back } from "./StyledComponents";

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedCountry } = useSelector((state) => state.countries);

  useEffect(() => {
    if (location.state.from !== "countryItem") {
      navigate(`/${handleUrl(selectedCountry.name)}`);
    }
  }, [location.state.from, navigate, selectedCountry]);

  return (
    <>
      <Back>
        <NavLink to="/">
          <Img src={arrow} alt="Back" />
          <Text>Go To Search Page</Text>
        </NavLink>
      </Back>
      <DetailsCard>
        <div style={{ width: "200px", height: "200px" }}>
          <Flag code={selectedCountry.alpha2Code} />
        </div>
        <div>
          <Detail>Name: {selectedCountry.name}</Detail>
          <Detail>alpha3Code: {selectedCountry.alpha3Code}</Detail>
          <Detail>alpha2Code: {selectedCountry.alpha2Code}</Detail>
          <Detail>Domain: {selectedCountry.topLevelDomain}</Detail>
        </div>
      </DetailsCard>
    </>
  );
};

export default CountryDetails;
