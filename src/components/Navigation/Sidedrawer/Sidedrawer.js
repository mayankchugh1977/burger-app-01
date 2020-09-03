import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';



const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.Close];

    if(props.open){
        attachedClasses=[classes.sideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav >
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxiliary>
        
    )
};

export default sideDrawer;