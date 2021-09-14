import {useState} from 'react'
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
            <div className={click ? "main-container" : ""} onClick={()=>Close()} />
            <div>
                <nav className="navbar" >
                    <div className="nav-container">

                        <div className='logo-container'>
                            <img src={logo} style={{ width: '25%', marginTop:'-2%' }} />
                        </div>

                        <ul className="nav-menu" >
                            <li className="nav-item">
                                <FaShoppingCart />
                            </li>
                            <li className="nav-item">
                                <HiLogin/>
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
