import React, { Component } from 'react';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-order';

class SearchSong extends Component {
    render() {
        return(
            <Aux>
                <div className="songSearch">
                    <SearchBar />
                </div>
                <div className="songSearchResutls">

                </div>
            </Aux>
        );
    }
}

export default SearchSong;