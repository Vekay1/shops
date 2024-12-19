import Header from "./components/header/header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Payday from "./components/payday/Payday";
import Favorite from "./components/favorite/Favorite";
import Phone from "./components/phone/Phone";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        
        <Promo />
        <Brands />
        <Arrivals />
        <Payday />
        <Favorite />
        <Phone />
        <Join />
        <Footer />
    </div>
  );
}

export default App;
