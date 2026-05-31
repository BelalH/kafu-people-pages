import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceMainFile from "./components/servicesComponents/ServiceMainFile";
import MainFile from "./components/trainingComponenets/MainFile";
import Loader from "./components/Loader";
// import Services from "./pages/Services";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/OurProducts";

import NewsAndEvents from "./pages/NewsAndEvents";
import BlogSection from "./components/BlogSection/BlogSection";

import Event from "./components/EventComponent/Event";
import Enroll from "./pages/Enroll";
import Signup from "./components/admin/Signup";
import Login from "./components/admin/Login";

import AdminDashboard from "./components/admin/AdminDashboard";
import ProductsCategories from "./components/ProductsCategories";

import Products from "./components/admin/Products";
import Events from "./components/admin/Events";
import RegistrationList from "./components/admin/RegistrationList";
import AddBlog from "./components/admin/AddBlogs";
import FileUpload from "./components/admin/FileUpload";
import VerifyUser from "./components/admin/VerifyUser";
import PrivateRoute from "./components/admin/PrivateRoute";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { CookieConsentProvider } from "./context/CookieConsentProvider";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 10 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // 700 milliseconds = 0.7 seconds

    // Cleanup the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <CookieConsentProvider>
        <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/portfolio" element={<OurProducts />} />

        <Route path="/newsAndEvents" element={<NewsAndEvents />} />
        <Route path="/event/:id" element={<Event />} />
        {/* <Route path="/enroll" element={<Enroll />} /> */}
        <Route path="/blogSection" element={<BlogSection />} />

        <Route path="/ProductsCategories" element={<ProductsCategories />} />
        <Route path="/services" element={<ServiceMainFile />} />
        <Route path="/training/ai" element={<MainFile />} />

        <Route path="/signup" element={<PrivateRoute><Signup /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
        <Route path="/addBlog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />
        <Route path="/fileUpload" element={<PrivateRoute><FileUpload /></PrivateRoute>} />
        <Route path="/verifyUser" element={<PrivateRoute><VerifyUser /></PrivateRoute>} />
        <Route path="/registrationList" element={<PrivateRoute><RegistrationList /></PrivateRoute>} />
        </Routes>
        <Footer />
      </CookieConsentProvider>
    </Router>
  );
};

export default App;
