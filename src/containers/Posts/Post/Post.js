import React, { Component } from 'react';
import './Post.css';

import PosterProfile from '../../../components/PosterProfile/PosterProfile';

class Post extends Component {

    render() {
        return(
            <div className="post">
                <PosterProfile />
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-caption">Litty</h5>
                        {/* <p className="card-text">Embed goes here:</p> */}
                        <div className="embed-iframe">
                            <iframe title="embed" src="https://open.spotify.com/embed/album/2acDkDTWdNFie1HjcFa4Ny" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="card-footer"> {/*Maybe remove margin top and grey color by changing this to card footer*/}
                        <a href="#like" className="card-link link">Like</a>
                        <a href="#comment" className="card-link link">Comment</a>
                        <a href="#repost" className="card-link link">Repost</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;

/* 

RIGHT below div className="card"
    <div className="card-header">
        <a href="#">
            <div className="profile-image"></div>
            <span>Donat</span>
        </a>
    </div> 
*/