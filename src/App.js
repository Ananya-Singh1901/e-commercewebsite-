import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import MenBanner from './Components/MenBanner/MenBanner';
import Popular from './Components/Popular/Popular';
//import Footer from './Components/Footer/Footer';
//import men_Offer from './'
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory Banner={MenBanner} category="man" />} />
          <Route path='/women' element={<ShopCategory category="woman" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product/:productId' element={<Product />}>

          </Route>
          <Route path='/latestcollection' element={<Popular/>} />
        </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
