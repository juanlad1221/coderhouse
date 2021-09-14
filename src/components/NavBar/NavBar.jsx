import { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/img/pet.png'
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
                            <img className='logo' src={logo} />
                        </div>

                        
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                Home
                            </li>
                            <li className="nav-item">
                                Link
                            </li>
                            <li className="nav-item">
                                Link
                            </li>
                            <li className="nav-item">
                                Link
                            </li>
                            <li className="nav-item">
                                <FaShoppingCart />
                            </li>
                            <li className="nav-item">
                                <HiLogin />
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
