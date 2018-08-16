import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Post from './Post/Post';
import './Posts.css';

// Posts are linked to a specific user
class Posts extends Component {

    state = {
        // array of post objects. caption, embedLink
        // how to dynamically increment id each time you add new post
        posts: [
            { caption: 'sheesh', embedLink: 'https://open.spotify.com/embed/album/41GuZcammIkupMPKH2OJ6I' },
            { caption: 'Lit like Bic', embedLink: 'https://open.spotify.com/embed/album/6eDx949ONWDCN0O22wFZf7' },
        ]
    }

    // componentDidMount() {
    //     this.setState({
    //         posts: [
    //             { caption: 'Queen is Nicki', embedLink: 'https://open.spotify.com/embed/album/2acDkDTWdNFie1HjcFa4Ny' },
    //             { caption: 'Lit like Bic', embedLink: 'https://open.spotify.com/embed/album/6eDx949ONWDCN0O22wFZf7' },
    //             { caption: this.props.newPost.caption, embedLink: 'https://open.spotify.com/embed/album/46Uz9e8yCamc8M6bXBaRyP' }
    //         ]
    //     });

    // }

    render() {
        // console.log("posts props are: " + this.props);
        let posts = [];
        // if posts.length === 0 display <p>User hasn't shared any posts yet</p>
        // replace index as key and make post ID the key
        this.state.posts.map((post, index) => {
            return posts[index] = <Post
                                // key={this.state.posts[index].id}
                                key={index}
                                caption={this.state.posts[index].caption}
                                embedLink={this.state.posts[index].embedLink}
                                addNewPostHandler={this.addNewPostHandler} />
        });
        
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