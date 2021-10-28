import loading from '../../assets/img/loading.gif'
import './Loading.css'



export default function Loading() {
    return (
        <div className='load-container'>
            <div className='img-loading'>
                <img src={loading} alt='' />
            </div>
        </div>
    )
}
