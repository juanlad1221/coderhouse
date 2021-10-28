import './Login.css'
import {useContext, useState} from 'react'
import {CartContext} from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const {items} = useContext(CartContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('/')
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleUrl = () => {
        if(items.length === 0){
            setUrl('/')
        }else{
            setUrl('/cart')
        }
    }
    
    const handleLogin = () => {

        if(!email && !password){
            alert('ERROR: FIELDS EMPTY...')
            return
        }
        
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }


    return (
        <div className='login-gral-container' onChange={handleUrl}>
            <div className='login-container'>
            <h1>Login</h1>
            <div className="group"><input autocomplete="off" onChange={(e) => handleEmail(e)} id='user' type="text" required="required" /><span></span><span className="bar"></span><label>User</label></div>
            <div className="group"><input autocomplete="off" onChange={(e) => handlePassword(e)} id='password'  type="password" required="required" /><span></span><span className="bar"></span><label>Password</label></div>
            <br /><br /> <br />
            <Link to={url}>
                <button onClick={handleLogin} className='btn btn-login'>Login</button>
            </Link>
        </div>
        </div>
    )
}
