import React from 'react';
import { Link, Redirect } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            {props.userList ? <Redirect to="/dashboard"/>: <Link to="/login">You are not logged in. Login?</Link>}
        </div>
    );
};

export default Home;