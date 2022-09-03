import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Characters from "./pages/Characters/Characters";
import CharacterDetails from "./pages/CharactersDetails";
import Home from "./pages/Home/Home";
import Location from "./pages/Location";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        {/* <Route path="/locations/:id" component={LocationDetails} /> */}
        <Route path="/locations" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
