import Navbar from "./components/navbar";
import ProductList from "./components/productList";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-4">
            <h2>Lista de Productos</h2>
          </div>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default App;
