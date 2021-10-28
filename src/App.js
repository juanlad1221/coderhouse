import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import OrderContainer from './components/OrderContainer/OrderContainer';
import CartContextProvider from './CartContext/CartContext'
import Login from './components/Login/Login';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />

          <Switch>

            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:idCategory' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={CartContainer} />
            <Route exact path='/order' component={OrderContainer} />
            <Route exact path='/login' component={Login} />

          </Switch>

          <Footer/>
       
       
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
