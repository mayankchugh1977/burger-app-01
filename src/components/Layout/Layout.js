import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// const layout = ( props ) => (
class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}>
                </SideDrawer>
                {/* <div>Toolbar, SideDrawer, Backdrop </div> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
};

export default Layout;