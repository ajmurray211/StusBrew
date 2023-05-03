import { Button, Input, Label } from "reactstrap";
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
    return (
        <div id="newsLetter">
            <h1>Join the Stu-dio</h1>
            <p>Stay connected with whats new at Stu's. Discounts, Products, and News!</p>
            <div id="inputContainer">
                <Input size='lg' id="emailInput" type="text" placeholder="Enter you email to stay connected!" />
                <Button size="small" onClick={() => console.log('hit Sign up')} color="light" id="signUp"><SendIcon /></Button>
            </div>
        </div>
    );
}

export default NewsLetter;