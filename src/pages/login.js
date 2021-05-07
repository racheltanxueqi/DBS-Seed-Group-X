import React, {useState, useEffect} from 'react';

const url = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

const Login = () => {
    const [userDetails, setUserdetails] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [errorCode, setErrorCode] = useState('');

    useEffect(() => {
        fetch(url, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'QQCQyzK1Qr2DzI1CYF192334KzjSsOq19Bp7g7ZQ'
            },
            body: JSON.stringify({
                userName: 'Group6',
                userPass: 'z!80Q&g$aTF983C'
            })
        })
        //fetch(url + new URLSearchParams({foo:'value', bar: 2}))
          .then((resp) => {
            if (resp.status >= 200 && resp.status <= 299) {
              return resp.json();
            } else {
            //   setIsLoading(false);
              setIsError(true);
              setErrorCode(resp.status);
              throw new Error(resp.statusText);
            }
          })
          .then((user) => {
            //Navigate the API here
            setUserdetails(user);
            // setIsLoading(false);
          })
          .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h1>Customer Details:</h1>
            <p>{userDetails.accountKey}</p>
        </div>
    );
}

export default Login;