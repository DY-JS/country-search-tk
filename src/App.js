// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CountryDetails from "./components/CountryDetails";
// import Main from "./components/Main";
import AppRouter from "./components/pages";

const App = () => {
  // const { countryList, fixedList, selectedCountry } = useSelector(
  //   (state) => state.countries
  // );
  //const fixedList = useSelector((state) => state.countries.fixedList);
  return (
    <>
      {/* <Router>
         <Routes>  */}
      {/* //       {countryList.map((country) => (
    //         <Route
    //           key={country.name + Date.now()}
    //           path={`/${handleUrl(country.name)}`}
    //           element={<CountryDetails />}
    //         />
    //       ))}
    //       <Route path="/" element={<Main />} />
    //       <Route path="*" element={() => <p>ERROR</p>} />
    //     </Routes>
    //   </Router>
    // ); */}
      <AppRouter />
    </>
  );
};

export default App;
