import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import TopNav from './components/Nav/TopNav';
import Footer from './components/Footer/Footer';
import Carrito from './components/Cart/Cart';
import UseLiquidosContext from './components/context/CartContext';


function App() {
  return (
    <Router>
      <UseLiquidosContext>
        <TopNav />
          <div className="App">
            <Switch>
              <Route exact path="/detalle/:id" component={ItemDetailContainer} />

              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer />
              </Route>
              <Route exact path="/cart">
                <Carrito />
              </Route>
            </Switch>
          </div>
          <Footer />
      </UseLiquidosContext>
    </Router>
  );
}

export default App;
