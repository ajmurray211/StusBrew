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
        <div>

        </div>
    );
}

export default NewsLetter;