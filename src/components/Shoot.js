import React, { useState } from 'react'
import audio from './onShootSound.mp3';
import afterShoot from './gunshoot.mp3';
import './Shoot.css'
const Shoot = () => {
    const [shoot, setShoot] = useState(false)
    const handleshoot = async () => {
        new Audio(afterShoot).play();
        let bullet = document.getElementById('bullet')
        setShoot(shoot => !shoot)
        console.log(shoot);
        function fire() {
            bullet.classList.add("fire");
            setTimeout(() => {
                bullet.classList.add("hide");
                bullet.classList.remove("fire");
            }, 3000); 
        }
        fire()
        function afterHit() {
            
            let bhavik = document.getElementById('beforeBhavik')
            bhavik.src = 'https://i.imgur.com/y011YYb.png';
        }
        setTimeout(afterHit, 510)
        
        setTimeout(() => {
            new Audio(audio).play();
        }, 510);
    }
    return (
        <div className='mainDiv'>
            <div className='gun_wrapper'>
                <div className='imag_wrap'>
                    <img src="https://as2.ftcdn.net/v2/jpg/04/80/96/47/1000_F_480964720_cj2fDEG7jb1q1EwA2sl50tZMnIlC30tb.jpg" className='gunImg' alt="React Logo" />
                    <img src="bullet.jpg" alt="bullet image" className='bullet' id='bullet' />
                    <button id='fireButton' onClick={handleshoot}></button>
                </div>
                <img src="https://i.imgur.com/O85RJds.png" alt="bhavik image" id='beforeBhavik' />
            </div>
        </div>
    )
}

export default Shoot
