import Mockman from "mockman-js";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer } from "./components";
import {
  LandingPageMain,
  ProductDetail,
  SingleProduct,
  Cart,
  Wishlist,
  Checkout,
  Login,
  Signup,
  Forgot,
  Profile,
} from "./pages";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPageMain />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="single-product/:itemId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mockman" element={<Mockman />} />
        </Routes>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
