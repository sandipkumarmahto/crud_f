import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Component/HomePage.js";
import AboutPage from "./Component/AboutPage.js";
import RegisterPage from "./Component/RegisterPage.js";
import EditPage from "./Component/Editpage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SamplePage from "./Component/SamplePage.js";
import LoginPage from "./Component/LoginPage.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/sample/:id' element={<SamplePage />} />
        <Route path='/edit/:id' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;