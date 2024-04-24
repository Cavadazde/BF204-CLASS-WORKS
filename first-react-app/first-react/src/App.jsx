import "./App.css";
import Header from "./layouts/header";
import Cards from "./components/cards";

import Footer from "./layouts/footer";
import { products } from "./data/product";
function App() {
  let fullName="Aysel Javadzade"
  return (
    <>
      <Header  fullName={fullName}/>
      <Cards  products={products}/>
      <Footer />
    </>
  );
}

export default App;
