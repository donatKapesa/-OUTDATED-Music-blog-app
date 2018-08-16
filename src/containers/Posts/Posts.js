import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Post from './Post/Post';
import './Posts.css';

// Posts are linked to a specific user
class Posts extends Component {

    state = {
        posts: []
    }

    render() {

        let posts = (
            <Post />);
        
        return(
            <Aux>
                <div className="container posts-container">
                    {posts}
                </div>
            </Aux>
        );
    }
}

export default Posts;