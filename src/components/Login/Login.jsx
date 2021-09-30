import { useContext, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext'


export default function Login() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [url, setUrl] = useState('')
    const {makeLogin} = useContext(CartContext)

    const handleUser = (e) =>{
        setUser(e.target.value)
    }
    const handlePass = (e) =>{
        setPass(e.target.value)
    }
    const handleLogin = () =>{
        if(user === 'user' && pass === 'pass'){
            makeLogin()
        }else{
            alert('ERROR: User or Pass incorect...')
            return 
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='container-login'>
                <input onChange={(e)=>handleUser(e)} type='text' className='form-control' placeholder='usuario: user' />
                <br />
                <input onChange={(e)=>handlePass(e)} type='password' className='form-control' placeholder='clave: pass' />
                <br/> <br/>
                <Link to={url}>
                <button className='btn btn-login' onClick={handleLogin}>Login</button>
                </Link>   
            </div>
        </div>
    )
}
