import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <ItemListContainer greeting='Bienvenidos a la mejor tienda de Vapeo' user='MORPHEO'/>
    </div>
  );
}

export default App;
