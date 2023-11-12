import { Button } from "reactstrap";
import { questions } from "../data.js";
import logo from '../Assets/hat.png'

const Faq = () => {

    const mappedQuesstions = questions.map((item) => {
        return (
            <div className="questionContainer body">
                <p className="question">{item.question}</p>
                <div className="accentLine"></div>
                <p className="answer">{item.answer}</p>
            </div>
        )
    })

    return (
        <div id="faqPage">
            <div id="faqWelcome">
                <div className="accentLine"></div>
                <div className="title">Frequently asked questions</div>
                <div className="accentLine"></div>
            </div>

            <div id="questionsSection">
                {mappedQuesstions}
            </div>

            <div id="faqFooter">
                <img src={logo} id="faqLogo"/>
                <p className="body">Email us if you have anymore questions!</p>
                {/* <Button color="light">Contact us here!</Button> */}
            </div>
        </div>
    );
}

export default Faq;