import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./components/Mainlayout";
import Home from "./components/Home";
import CountryDetails from "./components/CountriesDetails";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />}></Route>
            <Route path="details/:id" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
