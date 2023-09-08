import stu from '../Assets/stu.jpeg'
import Charities from './Charities';

const About = (props) => {
    const stu = process.env.PUBLIC_URL + '/assets/stu.jpeg'
    return (
        <div id='aboutPage'>
            <h1>Information about the Stu that loves his brew</h1>
            <div id='aboutContainer'>
                <img src={stu} alt='black and grey picture of stu' />
                <p>
                    Stu’s Brew is an up and coming business with the hopes of opening a storefront in Southern
                    California soon. My name is Claire and I’m from Dana Point, CA. It is a dream of mine to open
                    a coffee shop in memory of my Grandpa Stu. Our early morning trips to the coffee shop is one
                    of my fondest memories and I hope my store can give you similar memories. I make anything from
                    cakes, to cookies, to breads which are all thoughtfully made with family-owned recipes. Each of
                    those items pair perfectly with a cup of Stu’s brewed coffee.
                </p>
            </div>

            <Charities />
        </div>
    );
}

export default About;
