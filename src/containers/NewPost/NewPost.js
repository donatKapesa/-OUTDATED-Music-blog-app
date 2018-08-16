import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {



    render() {
        return (
            <div className="card newPost-card text-center">
                <div className="card-header">
                    <h1>Share music</h1>
                </div>
                <div className="card-body">
                    <input id="caption" placeholder="What are you thinking?"></input>
                    <input id="embed-link-textarea" placeholder="embed link to music"></input>
                    {/* on click, call a function inside Main or Posts that adds new post and calls sharePost */}
                    <button onClick={() => this.props.sharedNewPost("This is a new post of Diplomatic immunity, link follow", 'https://open.spotify.com/embed/album/46Uz9e8yCamc8M6bXBaRyP')}>Share</button>
                </div>
            </div>
        );
    }
}

export default NewPost;