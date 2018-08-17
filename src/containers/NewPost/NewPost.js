import React, { Component } from 'react';

import './NewPost.css';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Modal from '../../components/UI/Modal/Modal';

class NewPost extends Component {
    state = {
        caption: '',
        embedSrcLink: '',
        searchSong: false
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        this.props.sharedNewPost(this.state.caption, this.state.embedSrcLink);
    }

    songSearchHandler = () => {
        this.setState({searchSong: true});
    }

    cancelSongSearchHandler = () => {
        this.setState({searchSong: false});
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
                        placeholder="search music from spotify"
                        onClick={this.songSearchHandler}
                        onChange={(e) => this.onChangeHandler(e)} />
                    
                    {/* modal closed will be on click */}
                    <Modal showModal={this.state.searchSong} modalClosed={this.cancelSongSearchHandler} >
                        <div>
                            search api will go here
                        </div>
                    </Modal>
                    
                    <button onClick={(e) => this.onSubmitHandler(e)}>Share</button>
                </div>
            </div>
        );
    }
}

export default NewPost;


/* <input 
    name="embedSrcLink"
    id="embed-link-textarea" 
    // value={this.state.embedSrcLink} 
    placeholder="embed link to music"
    onChange={(e) => this.onChangeHandler(e)}></input> */