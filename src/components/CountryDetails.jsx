import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
//import { useHistory } from "react-router";
import Flag from "react-world-flags";

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const n = location.pathname;
  const p = n.split("/").join("");
  console.log(navigate(-1));
  //const hist = useHistory();

  const { selectedCountry } = useSelector((state) => state.countries);

  useEffect(() => {
    //e.preventDefault();
    if (navigate(-1) !== p) {
      navigate(1);
    }
  }, [location]);
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
