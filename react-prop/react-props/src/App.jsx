import "./App.css";
import Main from "./components/Main";

function App() {
  const products = [
    { id: 1, name: "Nike", price: 560 },
    { id: 2, name: "Nike", price: 560 },
  ];
  return (
    <>
      <Main products={products} />
    </>
  );
}

export default App;
