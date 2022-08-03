import react from 'react'
import reactLogo from '../assets/react.svg'

export default function Card(){
    return(
        <div className="card">
            <img src={reactLogo} class="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer">
                Card footer
            </div>
        </div>
    )
}