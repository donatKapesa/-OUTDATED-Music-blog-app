import React, { Component } from 'react';

import './NewPost.css';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Modal from '../../components/UI/Modal/Modal';
import SearchSong from '../SearchSong/SearchSong';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-order';
import $ from 'jquery';
import queryString from 'query-string';
import SongSearchResultsForPosting from '../SongSearchResultsForPosting/SongSearchResultsForPosting';

class NewPost extends Component {
    state = {
        caption: '',
        embedSrcLink: '',
        searchSong: true,
        accessToken: '',
        search: '',
        searchResults: {},
        renderResults: null
    }

    componentDidMount() {
        // getting the access token
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token

        this.setState({accessToken: accessToken});
    }

    executeRequestHandler = () => {
        console.log(this.state.embedSrcLink);
        // ajax request goes here
        // $.get({
        //     q: 'drake',
        //     url: 'https://api.spotify.com/v1/search',
        //     success: (response) => {console.log(response)},
        //     type: 'album, artist, playlist, track'
        // })
    }

    onCaptionChangeHandler = (e) => {
        this.setState({
            caption: e.target.value
        }, () => console.log(this.state.caption));
    }

    onSearchChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
                // do spotify api call here
                console.log(this.state.search);
                // fetch('https://api.spotify.com/v1/search',
                // {
                //     headers: {'Authorization' : 'Bearer ' + this.state.accessToken}
                // },
                // )
                //     .then(response => response.json())
                //         .then(data => console.log(data));

                $.ajax({
                    type: 'GET',
                    url: 'https://api.spotify.com/v1/search',
                    headers: {'Authorization' : 'Bearer ' + this.state.accessToken},
                    data: {
                        q: this.state.search,
                        type: 'album,track,playlist,artist',
                        limit: 2
                    },
                    success: (response) => {
                        this.setState({searchResults: response}, () => {
                            // console.log(this.state.searchResults)
                            let renderResults = <SongSearchResultsForPosting searchResults={this.state.searchResults} />
                            return this.setState({renderResults: renderResults});
                        });
                    },
                    dataType: 'json'
                });
        } );
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
        // console.log(this.state.accessToken);

        if(!this.state.renderResults) {
            console.log("no results to render yet")
        } else(
            console.log(this.state.renderResults)
        )

        return (
            // make backdrop bigger !!
            <Aux>
                <div className="card newPost-card text-center">
                    {/* <div className="card-header">
                        <h1>Share music</h1>
                    </div> */}
                    <div className="card-body">
                        <input 
                            name="caption"
                            id="caption" 
                            // value={this.state.caption} 
                            placeholder="What are you thinking?"
                            onChange={(e) => this.onCaptionChangeHandler(e)}></input>

                        <SearchBar
                            name="embedSrcLink"
                            id="embed-link-textarea" 
                            // value={this.state.embedSrcLink} 
                            placeholder="search music from spotify"
                            onChange={(e) => this.onSearchChangeHandler(e)} />

                        {this.state.renderResults}
                        
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