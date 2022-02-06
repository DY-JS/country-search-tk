import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import Flag from "react-world-flags";

const CountryDetails = () => {
  // const navigate = useNavigate();

  const { selectedCountry } = useSelector((state) => state.countries);
  return (
    <>
      <NavLink to="/">On Main</NavLink>
      <div style={{ width: "150px", height: "200px" }}>
        <Flag code={selectedCountry.alpha2Code} />
      </div>
      {/* <div onClick={goToMain}>On Main</div> */}
      <div>Name: {selectedCountry.name}</div>
      <div>alpha3Code:{selectedCountry.alpha3Code}</div>
      <div>alpha2Code:{selectedCountry.alpha2Code}</div>
      <div>Domain: {selectedCountry.topLevelDomain}</div>
    </>
  );
};

export default CountryDetails;
