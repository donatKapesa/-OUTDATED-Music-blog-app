import React from 'react';
import SingleResult from './SingleResult/SingleResult';
import './SpecificSearchResults.css';

const specificSearchResfult = (props) => {
    // console.log(props.type);
    // console.log(props.specificSearchResults);
    // console.log(props.specificSearchResults.items);
    let items = props.specificSearchResults.items;
    //console.log(items); // items specific to either singles, albums or artists

    let singleResult = [];
    // items.array.forEach((element, index) => {
    //     return singleResult = <SingleResult item={element}/>
    // });
    if(items) {
        items.map((element, index) => {
            // console.log(element);
            return singleResult[index] = <SingleResult key={index} item={element} clickedResult={props.clickedResult} />
        })
    } else (
        console.log('no items passed')
    )
    return (
        <div className='specificResults'>
            <p>{props.type}</p>
            <div className='spotify-items'>
                {singleResult}
            </div>
        </div>
    );
}

export default specificSearchResfult;