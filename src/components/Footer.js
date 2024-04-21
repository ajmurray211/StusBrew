import instagramIcon from '../Assets/instagramIcon.png';
import facebookIcon from '../Assets/facebookIcon.png';
import pintrestIcon from '../Assets/pintrestIcon.png';
import tiktokIcon from '../Assets/tiktokIcon.png';
import arrowIcon from '../Assets/arrowIcon.png';
import { Alert, Button, Input, Label } from "reactstrap";
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import emailjs from 'emailjs-com';

const Footer = () => {
    const [userInput, setUserInput] = useState('zcxvzxcvz')
    const { API_URL } = useContext(CartContext)
    const publicKey = process.env.PUBLIC_KEY
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        const formData = {
            user_email: userInput 
        };

        emailjs.send(
            "service_f7wr6ri",
            "template_fiae67r",
            formData,
            'WBo5qTknaJm9JCObT',
        )
            .then((response) => {
                console.log('Email sent successfully:', response);
                setSuccess(true);
            })
            .catch((error) => {
                console.log('Email send failed:', error);
                setFail(true);
            });
    }

    // console.log(userInput)
    // axios.post(`${API_URL}newsLetter/signUp`, { email: userInput })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });

    return (
        <footer className='footer'>
            <div className='footerSocialsSection'>
                <Alert isOpen={success} color="success" className='emailAlert'>Your email has been sent!</Alert>
                <Alert isOpen={fail} color="danger" className='emailAlert'>Oh no there was a problem please try again!</Alert>

                <div id="newsLetter">
                    <h1 className="footerTitle">Join our club, get 15% off for your Birthday</h1>
                    <div id="inputContainer">
                        <Input
                            className="footerBody"
                            size='lg'
                            type="text"
                            placeholder="Enter your email address."
                            value={userInput}
                            onChange={(e) => { setUserInput(e.target.value) }}
                        />
                        <Button size="small" onClick={handleSignUp} color="light" id="signUp"><img id="signUpIcon" src={arrowIcon} /></Button>
                    </div>
                    <p className="footerBody newsLetterMsg">By Submittng your email, you agree to receive advertising emails from Stu’s Brew.</p>
                </div>
                <div id='socialsContainer'>
                    <a target="_blank" href="https://www.instagram.com/stus.bake.n.brew/">{<img className='footerIcon' src={instagramIcon} />}</a>
                    <a target="_blank" href="https://www.instagram.com/stus.bake.n.brew/">{<img className='footerIcon' src={facebookIcon} />}</a>
                    <a target="_blank" href="https://www.instagram.com/stus.bake.n.brew/">{<img className='footerIcon' src={tiktokIcon} />}</a>
                    <a target="_blank" href="https://www.instagram.com/stus.bake.n.brew/">{<img className='footerIcon' src={pintrestIcon} />}</a>
                </div>
                <div className='footerCopyright'>
                    <p className='footerBody'>© 2023 stu's Brew. All Rights Reserved.</p>
                </div>
            </div>

            <div className='footerInfoSection'>
                <div className='footerAbout'>
                    <p className='footerTitle'>About Stu's Brew</p>
                    <p className='footerBody'>Collection</p>
                    <p className='footerBody'>Sustainability</p>
                    <p className='footerBody'>Privacy Policy</p>
                    <p className='footerBody'>Support System</p>
                    <p className='footerBody'>Terms & Conditions</p>
                    <p className='footerBody'>Copyright Notice</p>
                </div>
                <div className='footerHelp'>
                    <p className='footerTitle'>Help & Support</p>
                    <p className='footerBody'>Orders & Shipping</p>
                    <p className='footerBody'>Returns & Refunds</p>
                    <p className='footerBody'>FAQs</p>
                    <p className='footerBody'>Contact Us</p>
                </div>
                <div className='footerJoinUp'>
                    <p className='footerTitle'>Join up</p>
                    <p className='footerBody'>Stus's Club</p>
                    <p className='footerBody'>Careers</p>
                    <p className='footerBody'>Visit US</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

