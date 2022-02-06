import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { handleUrl } from "../utils/helpers";

import CountryDetails from "./CountryDetails";
import Main from "./Main";

const AppRouter = () => {
  const { countryList } = useSelector((state) => state.countries);
  return (
    <Router>
      <Routes>
        {countryList.map((country) => (
          <Route
            key={country.name + Date.now()}
            path={`/${handleUrl(country.name)}`}
            element={<CountryDetails />}
          />
        ))}
        <Route path="/" element={<Main />} />
        <Route path="*" element={() => <p>ERROR</p>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
