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

    const [redirect, setRedirect] = useState(false);

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
    
        setRedirect(true);
        props.setUserdetails([`${content.firstName} ${content.lastName}`, content.custID, content.accountKey]);
        
    }

    if (redirect) {
        return <Redirect to="/dashboard"/>;
    }
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    <p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <img src="https://i.guim.co.uk/img/media/ac01822e1237b350779e9e41ab69c8bcc8d292ea/0_0_6016_4016/master/6016.jpg?width=1300&quality=85&auto=format&fit=max&s=a33f9a1b8c413a1e873a9b78d5e5504b" class="img-fluid" alt="Responsive image"/>
                </div>
                <div class="col-md-4">
                    <form onSubmit={submit}>
                        {/* <input type='text' className='form-control' placeholder="username" onChange={e => setUsername(e.target.value)}/>
                        <input type='password' className='form-control' placeholder='password' onChange={e => setPassword(e.target.value)}/>
                        <button className="btn" type="submit">Login</button> */}
                        <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="userID" aria-describedby="username" onChange={e => setUsername(e.target.value)}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="userID" aria-describedby="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div class="checkbox mb-3">
                            <input type="checkbox" value="remember-me"/>
                                Remember Me
                        </div>
                        <button type="submit" class="w-100 btn btn-lg btn-primary">Submit</button>
                    </form>
                </div>
            </div>
                <div>
                {isError && <h1>Incorrect Credentials</h1>}
                </div>
        </div>
    );
}

export default Login;