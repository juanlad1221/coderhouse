import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCounter from './components/ItemCounter/ItemCounter';



function App() {

  return (
    <div> 
      <NavBar/>
      <ItemCounter/>
      
    </div>
  );
}

export default App;
