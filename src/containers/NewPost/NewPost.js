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
                    <button onClick={() => this.props.sharedNewPost("This is the caption, link follow", '<iframe src="<iframe src="https://open.spotify.com/embed/album/2acDkDTWdNFie1HjcFa4Ny" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')}>Share</button>
                </div>
            </div>
        );
    }
}

export default NewPost;