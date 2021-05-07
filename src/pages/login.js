import React, {useState, useEffect} from 'react';

const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

const Login = () => {
    const [userDetails, setUserdetails] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

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
            
        } else {
            setIsError(true);
            setErrorCode(response.status)
        }

        const content = await response.json();
        setUserdetails(content);

    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' className='form-control' placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <input type='password' className='form-control' placeholder='password' onChange={e => setPassword(e.target.value)}/>
                <button className="btn" type="submit">Login</button>
            </form>
            <div>
                {userDetails.accountKey}
            </div>
        </div>
    );
}

export default Login;