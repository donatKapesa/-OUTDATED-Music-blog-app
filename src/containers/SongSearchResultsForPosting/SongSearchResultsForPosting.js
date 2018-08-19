import React, { Component } from 'react';
import SpecificSearchResult from './SpecificSearchResult/SpecificSearchResult';

class SongSearchResultsForPosting extends Component {
    render() {
        let tracks;
        let albums;
        let playlists;
        let artists;
        if(this.props.searchResults) {
            console.log(this.props.searchResults);
            tracks = this.props.searchResults.tracks;
            albums = this.props.searchResults.albums;
            playlists = this.props.searchResults.playlists;
            artists = this.props.searchResults.artists;
        } else (
            console.log('nothing as props')
        )
        

        // const resultTypes = ['tracks', 'albums', 'playlists', 'artists'];
        // let toRender = [];
        // resultTypes.map((item, index) => {
        //     return (
        //         toRender[index] = <SpecificSearchResult key={index} specificSearchResults={this.props.searchResuts} type={item}/>
        //     );
        // })
        return(
            <div style={{overflow: 'scroll', display: 'flex'}} className="searchResults">
                <SpecificSearchResult key='1' specificSearchResults={tracks} type='tracks' />
                <SpecificSearchResult key='2' specificSearchResults={albums} type='albums' />
                {/* <SpecificSearchResult key='3' specificSearchResults={playlists} type='playlists' /> */}
                <SpecificSearchResult key='3' specificSearchResults={artists} type='artists' />
            </div>
        )
    }
}

export default SongSearchResultsForPosting;

/* 
Maybe use diff components for diff types.
want to display diff info depending on which type is called

artists have no images as well
*/