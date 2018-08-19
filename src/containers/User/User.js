import React, { Component } from 'react';


class User extends Component {
    state = {
        auth: false,
        numOfPosts: 0,
        online: true
    }

    render() {
        return(
            <div>
                User posts will show here
            </div>
        );
    }
}

export default User;