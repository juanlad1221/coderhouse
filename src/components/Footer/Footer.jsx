import './Footer.css'
import logo from '../../assets/img/pet.png'
import {FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa"
import {AiFillMail} from "react-icons/ai"



export default function Footer() {
    return (
        <>
            <br /><br /><br />
            <footer>
                <div className='footer-layout'>
                    <div className='col-4 links'>
                        <h5>Category</h5>
                        <ul>
                            <li>Home</li>
                            <li>Food</li>
                            <li>Dress</li>
                            <li>Toys</li>
                        </ul>
                    </div>
                    <div className='col-4 img-container'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='col-4 contact'>
                        <h5>Contact</h5>
                        <ul>
                            <li><FaFacebookSquare/></li>
                            <li><FaInstagramSquare/></li>
                            <li><FaTwitterSquare/></li>
                            <li><AiFillMail/></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
