import { useState, useContext, useEffect } from 'react'
import './NavBar.css'
import logo from '../../assets/img/pet.png'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../CartContext/CartContext';


export default function NavBar() {
    const [click, setClick] = useState(false)
    const [bagde, setBagde] = useState(false)
    {/*const [islogged, setIslogged] = useState(false)*/}
    const { items, cantBagde, Bagde, isLoged, logOut } = useContext(CartContext)

    const Close = () => setClick(false)
    const handleClick = () => setClick(!click)
    const handleIconBagde = () => {
        if (items.length > 0) {
            setBagde(true)
        }else{
            setBagde(false)
        }
    }
    

    
    useEffect(() => {
        handleIconBagde()
        Bagde()
        
    }, [items])

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <div>
                <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
                    <div className="nav-container">

                        <div className='juta'>
                            <Link to='/'>
                                <img className='logo' src={logo} alt='' />
                            </Link>
                        </div>


                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to='/' onClick={click ? handleClick : null}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/food' onClick={click ? handleClick : null}>
                                    Food
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/category/dress' onClick={click ? handleClick : null}>
                                    Dress
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/toys' onClick={click ? handleClick : null}>
                                    Toys
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' onClick={click ? handleClick : null}>
                                    {
                                        bagde ?
                                            <div className='cart-bagde'>
                                                <FaShoppingCart />
                                                <span class="badge rounded-pill badge-notification">{cantBagde}</span>
                                            </div>
                                            :
                                            <FaShoppingCart />
                                    }
                                </Link>
                            </li>
                            <li className="nav-item" onClick={click ? handleClick : null}>
                                {
                                    isLoged ?
                                        <Link onClick={logOut} to='/'>
                                            OUT
                                        </Link>
                                    :
                                        <Link to='/login'>
                                            In
                                        </Link>
                                }
                            </li>
                        </ul>


                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}
