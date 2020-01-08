import React from 'react';
import twi from '../img/twi.png';
import yout from '../img/yout.png';
import fb from '../img/fb.png';
const Footer=()=>{
    return <footer>
        <div>
            <b>Chelsea FC</b>
            <ul>
                <li>
                    <a href="https://www.facebook.com/ChelseaFC"><img className="fb" src={fb} alt={fb} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/chelseafc"><img className="twi" src={twi} alt={twi}/></a>
                </li>
                <li>
                    <a href="https://youtube.com/chelseafc"><img className="yout" src={yout} alt={yout}/></a>
                </li>
            </ul>
        </div>
    </footer>
}
export default Footer;