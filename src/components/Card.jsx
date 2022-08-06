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
                    <div className="d-grid gap-2 --card-email">
                        <button class="btn btn-primary" type="button">Email</button>
                    </div>
                    <h2>About</h2>
                    <p>I started learning web development on the side while I worked in video production but quickly realized I had more interest in this field. I consider myself a junior frontend developer who would love to work of a company part time that would stretch my boundaries and help me to continue to grow.</p>
                    <h2>Interest</h2>
                    <p>Christ Follower, Soccer USMNT and EPL, Dancing, Entreprenual Spirit, Survival Skills, Gamer</p>
                </div>
                
            </div>
            <div className="card-footer">
                <CardFooter />
            </div>
        </div>
    )
}