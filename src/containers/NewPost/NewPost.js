import React, { Component } from 'react';

import './NewPost.css';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Modal from '../../components/UI/Modal/Modal';
import SearchSong from '../SearchSong/SearchSong';
import Aux from '../../hoc/Aux/Aux';

class NewPost extends Component {
    state = {
        caption: '',
        embedSrcLink: '',
        searchSong: true
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

        const customModalStyle = {
            color: 'grey'
        }

        const styleForModalChildren = {

        }

        return (
            // make backdrop bigger !!
            <Aux>
                <Modal styles = "Modal Modal-songSearch" backdropStyles = "backdrop backdrop-songSearch" showModal={this.state.searchSong} modalClosed={this.cancelSongSearchHandler} >
                    <SearchSong />
                </Modal>

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
                            clicked={this.songSearchHandler}
                            onChange={(e) => this.onChangeHandler(e)} />
                        
                        {/* modal closed will be on click 
                        <Modal styles = "Modal Modal-songSearch" backdropStyles = "backdrop backdrop-songSearch" showModal={this.state.searchSong} modalClosed={this.cancelSongSearchHandler} >
                            <SearchSong />
                        </Modal> */}
                        
                        <button onClick={(e) => this.onSubmitHandler(e)}>Share</button>
                    </div>
                </div>
            </Aux>
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