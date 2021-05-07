import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

const Login = (props) => {
    //UseStates
    const [userDetails, setUserdetails] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

    const [isFirst, setIsfirst] = useState(true);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch(url, { 
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'
                    },
                    body: JSON.stringify({
                        userName: username,
                        userPass: password
                    })
        })
        if (response.status >= 200 && response.status <= 299) {
            setIsError(false);
            setErrorCode('');
        } else {
            setIsError(true);
            setErrorCode(response.status)
        }

        const content = await response.json();
        setUserdetails(content);

        //clear login details
        setUsername('');
        setPassword('');
        return (
            {
                custID: content.custID,
                accountKey: content.accountKey
            }
        )
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' className='form-control' placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <input type='password' className='form-control' placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button className="btn" type="submit">Login</button>
            </form>
            <div>
            {isError && <h1>Incorrect Credentials</h1>}
            </div>
            <div>
                {userDetails.accountKey}
            </div>

        </div>
    );
}

export default Login;