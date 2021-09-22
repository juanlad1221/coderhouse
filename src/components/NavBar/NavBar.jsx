import { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/img/pet.png'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { HiLogin } from 'react-icons/hi'


export default function NavBar() {
    const [click, setClick] = useState(false)

    const Close = () => setClick(false)
    const handleClick = () => setClick(!click)
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <div>
                <nav className="navbar" >
                    <div className="nav-container">

                        <div className='juta'>
                            <Link to='/'>
                                <img className='logo' src={logo} />
                            </Link>
                        </div>


                        <ul className={click ? "nav-menu" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/food'>
                                    Food
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/category/dress' activeClassName='active-link'>
                                    Dress
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/toys'>
                                    Toys
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FaShoppingCart />
                            </li>
                            <li className="nav-item">
                                <Link to='/login'>
                                    <HiLogin />
                                </Link>
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
