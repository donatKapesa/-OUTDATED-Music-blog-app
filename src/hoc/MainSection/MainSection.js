import React, { Component } from 'react';
import Posts from '../../containers/Posts/Posts';
import Aux from '../../hoc/Aux/Aux';

class Main extends Component {

    // Should I put anything in componentDidMount? We only need to mount this modal once !! then it will just be hidden


    render() {
        return(
            <Aux>
                <Posts />
            </Aux>
        );
    }
}

export default Main;

/* 

Have a new-post object with caption and embed, then in NewPost and shareNewPost is executed inside here,
change state of new-post object and pass state to Posts. (also pass a resetState. see later why)
Posts also passes new-post object to Post and Post updates its state and renders.

*/