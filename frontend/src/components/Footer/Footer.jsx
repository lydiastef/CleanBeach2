import React from 'react';
import './Footer.scss';
import Goals from '../../Icons/image 19.svg';
import { ReactComponent as IconFacebook } from '../../Icons/Icon Facebook.svg';
import { ReactComponent as IconTwitter } from '../../Icons/Icon Twitter.svg';
import { ReactComponent as IconInstagram } from '../../Icons/Icon Instagram.svg';



const Footer=() => {
    return (
        <footer>
            <div className='footercontainer'>
                <img className='goals' src={Goals} alt="Goals" />
                <div className='icons'>
                <a href="https://www.facebook.com/globalgoalsUN/"><IconFacebook size={35} /></a>
                <a href="https://twitter.com/GlobalGoalsUN"><IconTwitter size={35}/></a>
                <a href="https://www.instagram.com/theglobalgoals/?hl=da"><IconInstagram size={35} /></a>
                </div>
            </div>
        </footer>


    )
}

export default Footer;
