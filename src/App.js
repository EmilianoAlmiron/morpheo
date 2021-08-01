import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import TopNav from './components/Nav/TopNav';
import Footer  from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <TopNav />
        <Switch>
          <div className="App">
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/detalle/:detallesId"  component={ItemDetailContainer} />
          </div>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
