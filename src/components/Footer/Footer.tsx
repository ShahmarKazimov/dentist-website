import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoTiktok } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import "./Footer.scss"

function Footer() {
    return (
        <div className='flex flex-col'>
            <footer className="footer">
                <ul className="social-icon">
                    <li><a href="#"><AiFillInstagram name="twitter" /></a></li>
                    <li><a href="#"><BiLogoFacebookCircle name="facebook" /></a></li>
                    <li><a href="#"><BiLogoTiktok name="instagram" /></a></li>
                    <li><a href="#"><AiOutlineTwitter name="instagram" /></a></li>
                </ul>
                <ul className='menu'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="patients">New patients</a></li>
                </ul>
            </footer><hr />
            <h3 className='py-2'>©️ 2023 All Rights Reserved</h3>
        </div>
    )
}
export default Footer






