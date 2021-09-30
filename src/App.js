import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Login from './components/Login/Login';
import CartContextProvider from './CartContext/CartContext'
import Pay from './components/Pay/Pay';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />

          <Switch>

            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:idCategory' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={CartContainer} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/pay' component={Pay} />

          </Switch>


        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
