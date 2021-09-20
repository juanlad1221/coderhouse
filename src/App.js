import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';



function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Switch>

          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/category/:idCategory' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />

        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
