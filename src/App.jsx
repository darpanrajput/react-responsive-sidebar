import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
