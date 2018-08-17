import React, { Component } from 'react';

import './NewPost.css';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

class NewPost extends Component {
    state = {
        caption: '',
        embedSrcLink: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        // console.log(this.state.caption + " " + this.state.embedSrcLink);
        this.props.sharedNewPost(this.state.caption, this.state.embedSrcLink);
    }

    render() {
        // might be better to handle onClick with a form in the server
        return (
            <div className="card newPost-card text-center">
                <div className="card-header">
                    <h1>Share music</h1>
                </div>
                <div className="card-body">
                    <input 
                        name="caption"
                        id="caption" 
                        // value={this.state.caption} 
                        placeholder="What are you thinking?"
                        onChange={(e) => this.onChangeHandler(e)}></input>

                    <SearchBar
                        name="embedSrcLink"
                        id="embed-link-textarea" 
                        // value={this.state.embedSrcLink} 
                        placeholder="embed link to music"
                        onChange={(e) => this.onChangeHandler(e)} />

                    {/* on click, call a function inside Main or Posts that adds new post and calls sharePost */}
                    <button onClick={(e) => this.onSubmitHandler(e)}>Share</button>
                </div>
            </div>
        );
    }
}

export default NewPost;


{/* <input 
    name="embedSrcLink"
    id="embed-link-textarea" 
    // value={this.state.embedSrcLink} 
    placeholder="embed link to music"
    onChange={(e) => this.onChangeHandler(e)}></input> */}