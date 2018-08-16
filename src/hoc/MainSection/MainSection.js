import React, { Component } from 'react';
import ShareMusicMainButton from '../../containers/ShareMusicMainButton/ShareMusicMainButton'
import Posts from '../../containers/Posts/Posts';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import NewPost from '../../containers/NewPost/NewPost';

class Main extends Component {
    state = {
        addingNewPost: false,
    }

    // Should I put anything in componentDidMount? We only need to mount this modal once !! then it will just be hidden

    addingNewPostHandler = () => {
        this.setState({addingNewPost: true});
    }

    cancelNewPostHandler = () => {
        this.setState({addingNewPost: false});
    }

    sharedNewPostHandler = (caption, embedLink) => {
        this.setState({addingNewPost: false});
        console.log("post shared");
    }

    render() {
        return(
            <Aux>
                <Posts />
                <Modal showModal={this.state.addingNewPost} modalClosed={this.cancelNewPostHandler}>
                    <NewPost 
                        showModal={this.state.addingNewPost}
                        sharedNewPost={this.sharedNewPostHandler} />
                </Modal>
                <ShareMusicMainButton
                    clicked={this.addingNewPostHandler} />
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