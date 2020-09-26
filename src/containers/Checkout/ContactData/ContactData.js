import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from  '../../../axios-orders';
import Spinner from  '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        // alert('You continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Chota Baby',
                address: {
                        street: 'Chota Baby Street',
                        zipCode: '0000',
                        country: 'Hong Kong'
                    },
                    email: 'chotababy@chotababy.com'
                },
                deliveryMethod: 'fastest'
        }
        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
                // console.log(response);
            })
            .catch(error => {
                this.setState({loading: false});
                // console.log(error);
            });

    }

    render () {
        let form = (
        <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="text" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if(this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
} 

export default ContactData;