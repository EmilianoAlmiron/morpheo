import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import TopNav from './components/Nav/TopNav';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import UseNotiContext from './components/context/CartContext';


function App() {
  return (
    <Router>
      <UseNotiContext>
        <TopNav />
        <Switch>
          <div className="App">
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/detalle/:detallesId" component={ItemDetailContainer} />
            <Route exact path="/cart">
              <Cart />
            </Route>
          </div>
        </Switch>
        <Footer />
      </UseNotiContext>
    </Router>
  );
}

export default App;
