import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Switch>
        <Route path='/product-list/:id'>
          <Product />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/product-list'>
          <ProductList />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/:id'>
          <Product />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;