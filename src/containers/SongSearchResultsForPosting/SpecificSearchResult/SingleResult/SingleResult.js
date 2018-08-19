import React, { Component } from 'react';
import './SingleResult.css'

class SingleResult extends Component {

    onClickHandler = () => {
        this.props.clickedResult(this.props.item.id);
    }

    render() {

        // console.log(this.props);

        let images=this.props.item.images;
        // console.log(images);
        // let imageKeysArray = Object.keys(images);
        let chosenImageURL = null;
        if(images && images[1]) { // here because it seems like initally, images is undefined and it throws an error. Use this to fix problem I was encoutering in prev components
            // artists have no imgaes
            chosenImageURL=images[1].url;
            // console.log(chosenImageURL);
        } // else it's NULL
        
        let name = this.props.item.name;
        let genres = this.props.genres; // ARRAY
        // let artist = '';
        // let album = '';
        let imageURL = chosenImageURL;
    
        // console.log(embedSrcLink);
        // console.log(chosenImageURL);

        
        // console.log(this.props.item.id);
        return (
            <div onClick={this.onClickHandler} className="result">
                <div className='result-pic-div'>
                    <img className='result-pic' src={imageURL}></img>
                </div>
                <div className='result-artist'>
                    {name}
                </div>
                <div className='display-name'>
                    embedSrc: {this.state.embedSrcLink}
                </div>
            </div>
        );
    }
}

export default SingleResult;