
import './App.css';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar1 from './Components/Navbar1/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Title from './Components/Title/Title.jsx';
import Services from './Components/Services/Services.jsx';
import Products from './Components/Our Products/Products.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/ContactUs/Contact.jsx';
// import Footer1 from './Components/Footer1/Footer.jsx';
import About from './Components/AboutUS/About.jsx';
import Soil from './Components/SoilTest/Soil.jsx';
import Pesticide from './Components/Pesticide/Pesticide.jsx';
import Guide from './Components/Guide/Guide.jsx';
import Weather from './Components/Weather/Weather.jsx';
import Chatbot from './Components/Chatbot/Chatbot.jsx';
import Hero1 from './Components/Hero1/Hero.jsx';
import Admin from './Pages/Admin/Admin.jsx';
import AddProduct from './Components/AddProduct/AddProduct';
import ListProduct from './Components/ListProduct/ListProduct';


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* You can switch Navbars based on the route or keep one for simplicity */}
        
        
        <div className="container">
          <Routes>
            {/* Farmer section routes */}
            <Route path="/" element={
              <>
              <Navbar1/>
                <Hero1 />
                <Title title="Services" />
                <Services />
                <Title title="Our Products" />
                <Products />
                <Title title="What people say about us!" />
                <Testimonials />
                <Title title="Contact Us" />
                <Contact />
              </>
            } />

            <Route path="/about" element={<About />} />
            <Route path="/soil" element={<Soil />} />
            <Route path="/pesticide" element={<Pesticide />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />

            {/* Buyer section routes */}
            <Route path="/Shop" element={<Shop />} />
            <Route path="/fruits" element={<ShopCategory category="fruits" />} />
            <Route path="/vegies" element={<ShopCategory category="vegies" />} />
            <Route path="/spices" element={<ShopCategory category="spices" />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:ProductId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            {/* <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/addproduct" element={<AddProduct/>}/>
            <Route path="/admin/listproduct" element={<ListProduct/>}/> */}
          
          </Routes>
        </div>

        {/* Separate footers can be added or use a single one */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
