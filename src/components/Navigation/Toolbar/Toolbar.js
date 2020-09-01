import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';

const toolbar = (props) => (
    <header className={classes.Toolbar}> 
        <div>MENU</div>
        <Logo/>
        <nav >
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;