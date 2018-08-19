import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Post from './Post/Post';
import './Posts.css';

import Modal from '../../components/UI/Modal/Modal';
import NewPost from '../NewPost/NewPost';
import ShareMusicMainButton from '../ShareMusicMainButton/ShareMusicMainButton';
import axios from '../../axios-order';

// Posts are linked to a specific user
class Posts extends Component {



    state = {
        // array of post objects. caption, embedSrcLink
        // how to dynamically increment id each time you add new post
        posts: [],

        addingNewPost: true
    }

    // OVERLOADING NETWORK WITH INFINITE NUMBER OF REQUESTS
    componentDidMount() {
        console.log("[Posts] - componentDidMount");
        axios.get("https://music-blog-app.firebaseio.com/users/user/posts.json")
            .then(response => {
                let postsFromServer = response.data;

                let initialPostsFromDatabase = [];
                Object.keys(postsFromServer) // returns uniqueKeys objects which each have caption, embedLink
                    .map((uniqueKey, index) => {
                        // console.log(postsFromServer[uniqueKey]);
                        // this.setState(prevState =>({
                        //     posts: [...this.state.posts, postsFromServer[uniqueKey]]
                        // }));
                        initialPostsFromDatabase[index] = postsFromServer[uniqueKey];
                        return postsFromServer[uniqueKey];
                    });
                // console.log(initialPostsFromDatabase);
                this.setState({ posts: initialPostsFromDatabase }); // fixed infinite loop like this but still too many requests
            })
            .catch(error => {
                console.log(error);
            });

    }
    // Why does it re-render immediately when I post something?

    addingNewPostHandler = () => {
        this.setState({addingNewPost: true});
    }

    cancelNewPostHandler = () => {
        this.setState({addingNewPost: false});
    }

    sharedNewPostHandler = (caption, embedSrcLink) => {

        var newPostToAdd = {
            caption: caption,
            embedSrcLink: embedSrcLink
        }

        // reason why I used slice: https://stackoverflow.com/questions/26505064/react-js-what-is-the-best-way-to-add-a-value-to-an-array-in-state
        // if I don't use, both postsToUpdate will point to posts state. Hence make state mutable, which should be avoided

        var postsToUpdate = this.state.posts.slice();
        postsToUpdate.push(newPostToAdd);

        // this.setState({
        //     addingNewPost: false,
        //     posts: postsToUpdate
        // }, () => {
        //     // console.log(newPostToAdd);
        //     // console.log(postsToUpdate);
        //     // console.log(this.state.posts);
        // } );

        // posting to server
        // Why does it re-render immediately when I post something? Because of setState?
        axios.post('https://music-blog-app.firebaseio.com/users/user/posts.json', newPostToAdd)
            .then(response => {
                console.log(response); // maybe do SetState here !!
                // can use one above or this one. Either works
                this.setState(prevState =>({
                    addingNewPost: false,
                    posts: [...this.state.posts, newPostToAdd]
                }));
            })
            .catch(error => {
                console.log(error); // will set addingNewPost To false. See burger project
            });
    }

    render() {
        let posts = [];
        // if posts.length === 0 display <p>User hasn't shared any posts yet</p>
        // replace index as key and make post ID the key
        // this.state.posts.map((post, index) => {
        //     return posts[index] = <Post
        //                         // key={this.state.posts[index].id}
        //                         key={index}
        //                         caption={this.state.posts[index].caption}
        //                         embedSrcLink={this.state.posts[index].embedSrcLink}
        //                         addNewPostHandler={this.addNewPostHandler} />
        // });

        if(this.state.posts.length === 0) { // TEST THIS ONCE I FINISH THE SONGSEARCH BAR
            posts = <h1>Nothing to show here !</h1>
        } else {
            this.state.posts.map((post, index) => {
                return posts[index] = <Post
                                    // key={this.state.posts[index].id}
                                    key={index}
                                    caption={this.state.posts[index].caption}
                                    embedSrcLink={this.state.posts[index].embedSrcLink}
                                    addNewPostHandler={this.addNewPostHandler} />
            });
        }
        
        return(
            <Aux>
                <Modal styles="Modal" backdropStyles="backdrop" showModal={this.state.addingNewPost} modalClosed={this.cancelNewPostHandler}>
                    <NewPost 
                        showModal={this.state.addingNewPost}
                        sharedNewPost={this.sharedNewPostHandler} />
                </Modal>
                <ShareMusicMainButton
                    clicked={this.addingNewPostHandler} />

                <div className="container posts-container">
                    {posts}
                </div>
            </Aux>
        );
    }
}

export default Posts;