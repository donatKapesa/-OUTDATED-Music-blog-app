import React, { Component } from 'react';

import Navbar from '../../components/Navigation/Navbar';
import Aux from '../Aux/Aux';
import MainSection from '../MainSection/MainSection';
import SignInPage from '../../containers/SignInPage/SignInPage';
import {Switch, Route, IndexRoute} from 'react-router-dom';

class Layout extends Component {

    state = {
        auth: false
    }

    signInSuccessful = () => {
        this.setState({auth: true}, 
            () => console.log("auth is: " + this.state.auth));
    }

    render() {
        let toRender = <h1>Loading...</h1>

        if(!this.state.auth) {
            toRender = <SignInPage signInSuccessful={this.signInSuccessful} />
        } else {
            toRender = (
                <Aux>
                    <Navbar />
                    <MainSection />
                </Aux>
            );
        }
        
        const RouteWithProps = ({ path, exact, strict, component:Component, location, ...rest }) => (
            <Route
              path='/'
              exact
              render={(props) => <Component {...props} {...rest} /> } />
          );

          console.log(this.state.auth);
        return(
            // <div>
            //     {toRender}
            // </div>

            // <Switch></Switch>
            <Aux>
                <Route path="/home" component={Navbar} />
                <Route path="/home" component={MainSection} />
                <RouteWithProps component={SignInPage} signInSuccessful={this.signInSuccessful} />
            </Aux>

        );
    }
}

export default Layout;

/* <Switch>
                <Route path="/" exact component={SignInPage} />
                <Route path="/Home" component={Navbar}></Route>
                <Route path="/Home" component={MainSection}></Route>
            </Switch> */