import Charities from '../components/Charities';
import phoneIcon from '../Assets/phoneIcon.png'
import emailIcon from '../Assets/emailIcon.png'
import { Input, Button, Form, Row, Col } from 'reactstrap';
import FooterLinks from '../components/FooterLinks';
import { useState } from 'react';

const About = (props) => {
    const stu = process.env.PUBLIC_URL + '/assets/stu.jpeg'

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', { firstName, lastName, email, phoneNumber, message });
    };

    return (
        <div id='aboutPage'>
            <div id='aboutTitleSection'>
                <img className='aboutImg' src={stu} alt='Picture of Claire' />
                <p className='aboutTitle'>Hey I'm Claire!</p>
                <div className='aboutMsgContainer'>
                    <p className='aboutMsg'>
                        Welcome to Stu's Brew, where passion for coffee meets a commitment to community.
                        Founded on the belief that a great cup of coffee can bring people together, our small business
                        has a big heart. From the rich aroma of our freshly baked pastries to the carefully selected
                        beans in every brew, Stu's Brew is more than a coffee shop – it's a cozy corner where stories
                        are shared, friendships are forged, and a genuine connection with our community is brewed.
                    </p>
                    <p className='aboutMsg'>
                        Our journey began with Stu, a coffee enthusiast with a vision to create a warm and welcoming
                        space that goes beyond serving exceptional coffee and delicious pastries. As a local business,
                        we understand the importance of giving back. That's why a portion of our proceeds goes towards
                        causes close to our hearts, such as supporting organizations like Stop Soldier Suicide, contributing
                        to the Shriners for children's healthcare, and partnering with Build a Miracle to make a positive
                        impact on those in need.
                    </p>
                    <p className='aboutMsg'>
                        At Stu's Brew, we invite you to join us in savoring more than just a cup of coffee; relish the
                        sense of belonging, community, and the joy that comes with supporting meaningful causes. Whether
                        you're a regular or a first-time visitor, we're thrilled to have you be a part of our journey.
                        Together, let's brew moments that matter.
                    </p>
                </div>
            </div>
            <div className='contactFormSection'>
                <div className='aboutContactDescription'>
                    <p className='aboutContactTimes'>Call our team Mon-Fri from 8 am to 5 pm.</p>
                    <p className='aboutContactSubTitle'>Call us.</p>
                    <p className='aboutContactNumber'><img className='aboutContactIcon' src={phoneIcon} /> 000-000-0000</p>
                    <p className='aboutContactEmail'><img className='aboutContactIcon' src={emailIcon} /> hello@stusbakenbrew.com</p>
                </div>
                <Form className='aboutContactInputs' onSubmit={handleSubmit}>
                    <Row className='aboutInputRow'>
                        <Col md={6}>
                            <Input
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Input
                        className='aboutInputRow'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        className='aboutInputRow'
                        type='tel'
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Input
                        className='aboutInputRow'
                        type='textarea'
                        placeholder='Leave us a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button className='aboutFormSubmit' type='submit'>Submit</Button>
                </Form>
            </div>

            <FooterLinks />
        </div>
    );
}

export default About;