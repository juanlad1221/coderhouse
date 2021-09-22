import { useContext } from 'react'
import './Login.css'
import { Context } from '../CartContext/CartContext'


export default function Login() {
    //Se trae la data del context
    const { isLoged, setIsLoged } = useContext(Context)
    console.log(isLoged)
    return (
        <div className='container container-login'>
            <div className='d-flex flex-column align-item-center'>
                <input type='text' className='form-control' placeholder='User' />
                <br />
                <input type='password' className='form-control' placeholder='pass' />
                <br/> <br/>
                <button className='btn btn-secondary'>Login</button>
            </div>
        </div>

    )
}
