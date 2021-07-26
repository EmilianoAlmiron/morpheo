import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import TopNav from './components/Nav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <ItemListContainer greeting='Bienvenidos a la mejor tienda de Vapeo' user='MORPHEO'/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
