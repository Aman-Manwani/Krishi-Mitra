import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Header from "./components/header/Header";
import EducationDetails from "./components/register/EducationDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register/basic" element={<Signup />} />
        <Route path="/register/education" element={<EducationDetails />} />
      </Routes>
    </>
  );
}

export default App;
