import React from 'react';

import Navbar from '../../components/Navigation/Navbar';
import Aux from '../Aux/Aux';
import Main from '../MainSection/MainSection';

const Layout = (props) => {
    return (
        <Aux>
            <Navbar />
            <Main />
        </Aux>
    );
}

export default Layout;