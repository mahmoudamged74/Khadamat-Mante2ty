import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import OTP from "./Pages/OTP/OTP";
import OTPForgetPassword from "./Pages/OTPForgetPassword/OTPForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Restaurants from "./Pages/Restaurants/Restaurants";
import RestaurantDetail from "./Pages/RestaurantDetail/RestaurantDetail";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Markets from "./Pages/Markets/Markets";
import MarketDetail from "./Pages/MarketDetail/MarketDetail";
import MarketProductDetail from "./Pages/MarketProductDetail/MarketProductDetail";
import Clinics from "./Pages/Clinics";
import Libraries from "./Pages/Libraries/Libraries";
import LibraryDetail from "./Pages/LibraryDetail/LibraryDetail";
import LibraryBookDetail from "./Pages/LibraryBookDetail/LibraryBookDetail";
import Accessories from "./Pages/Accessories/Accessories";
import AccessoryDetail from "./Pages/AccessoryDetail/AccessoryDetail";
import AccessoryProductDetail from "./Pages/AccessoryProductDetail/AccessoryProductDetail";
import CarWash from "./Pages/CarWash/CarWash";
import CarWashDetail from "./Pages/CarWashDetail/CarWashDetail";
import CarWashServiceDetail from "./Pages/CarWashServiceDetail/CarWashServiceDetail";
import Pharmacy from "./Pages/Pharmacy/Pharmacy";
import PharmacyDetail from "./Pages/PharmacyDetail/PharmacyDetail";
import PharmacyProductDetail from "./Pages/PharmacyProductDetail/PharmacyProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurants/:id" element={<RestaurantDetail />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="markets" element={<Markets />} />
          <Route path="markets/:id" element={<MarketDetail />} />
          <Route path="market-product/:id" element={<MarketProductDetail />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="libraries" element={<Libraries />} />
          <Route path="libraries/:id" element={<LibraryDetail />} />
          <Route path="library-book/:id" element={<LibraryBookDetail />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="accessories/:id" element={<AccessoryDetail />} />
          <Route
            path="accessory-product/:id"
            element={<AccessoryProductDetail />}
          />
          <Route path="car-wash" element={<CarWash />} />
          <Route path="car-wash/:id" element={<CarWashDetail />} />
          <Route
            path="car-wash-service/:id"
            element={<CarWashServiceDetail />}
          />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="pharmacy/:id" element={<PharmacyDetail />} />
          <Route
            path="pharmacy-product/:id"
            element={<PharmacyProductDetail />}
          />
        </Route>
        {/* Login, Register, OTP, OTPForgetPassword, ResetPassword and ChangePassword pages without navbar and footer */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<OTP />} />
        <Route path="otp-forgot-password" element={<OTPForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
