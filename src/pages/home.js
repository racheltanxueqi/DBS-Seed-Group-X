import React from 'react';

const Home = (props) => {
    return (
        <div>
            {props.userList ? 'Welcome back ' + props.userList[0] + '!' : 'You are not logged in'}
        </div>
    );
};

export default Home;