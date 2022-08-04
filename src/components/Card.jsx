import react from 'react'
import reactLogo from '../assets/react.svg'
import CardFooter from './CardFooter/CardFooter'

export default function Card(){
    return(
        <div className="card">
            <img src="https://res.cloudinary.com/relentlessrawle/image/upload/v1659558095/RJ_FencePost_ht0j37.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
                <div className="--card-body-container">
                    <h1 className="--card-title">Rawle Juglal</h1>
                    <p className="--card-profession">Frontend Developer</p>
                    <p className="--card-site">rawlejuglal.me</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Email</button>
                    </div>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h2>Interest</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
            <div className="card-footer">
                <CardFooter />
            </div>
        </div>
    )
}