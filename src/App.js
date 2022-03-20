import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import ProductsDetail from "./components/pages/ProductsDetail";
import MainHeader from "./components/mainHeader/MainHeader";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductsDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
