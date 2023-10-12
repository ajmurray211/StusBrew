import { Button, Input, Label } from "reactstrap";
import SendIcon from '@mui/icons-material/Send';
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const NewsLetter = () => {
    const [userInput, setUserInput] = useState()
    const { API_URL } = useContext(CartContext)

    const handleSignUp = (e) => {
        console.log(userInput)
        axios.post(`${API_URL}newsLetter/signUp`, { email: userInput })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div id="newsLetter">
            <h1 className="title">Join the Stu-dio</h1>
            <p className="body newsLetterMsg">Stay connected with what's new at Stu's. Discounts, Products, and News!</p>
            <div id="inputContainer">
                <Input
                    className="body"
                    size='lg'
                    id="emailInput" t
                    ype="text"
                    placeholder="Enter your email to stay connected!"
                    value={userInput}
                    onChange={(e) => { setUserInput(e.target.value) }}
                />
                <Button size="small" onClick={handleSignUp} color="light" id="signUp"><SendIcon /></Button>
            </div>
        </div>
    );
}

export default NewsLetter;