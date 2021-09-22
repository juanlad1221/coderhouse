import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Context from './components/CartContext/CartContext'



function App() {

  return (
    <Context>
      <BrowserRouter>
        <div>
          <NavBar />

          <Switch>

            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:idCategory' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />

          </Switch>


        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
