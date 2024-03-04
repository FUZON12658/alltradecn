import './App.css';
import Navbar from './Components/NavBar';
import "./styles/footer.css"
import "./styles/header.css"
import "./styles/nameSection.css"
import "./styles/general.css"
import "./styles/products.css"
import "./styles/indexBody.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import ProductDisplay from './Components/ProductDisplay';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';

function App() {
  return (
  <div className="master_wrapper">
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Home/>}></Route>
      <Route exact path = "/fireSafety" element={<ProductDisplay pageName = {"fireSafety"}/>}></Route>
      <Route exact path = "/electricalSafety" element={<ProductDisplay pageName = {"electricalSafety"}/>}></Route>
      <Route exact path = "/rescueItems" element={<ProductDisplay pageName = {"rescueItems"}/>}></Route>
      <Route exact path = "/roadSafety" element={<ProductDisplay pageName = {"roadSafety"}/>}></Route>
      <Route exact path = "/safetySignages" element={<ProductDisplay pageName = {"safetySignages"}/>}></Route>
      <Route exact path = "/contactUs" element={<ContactUs/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </div>
  );
}

export default App;
