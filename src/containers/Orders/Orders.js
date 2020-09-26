import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
        // ingredients: null,
        // totalPrice: 4,
        // purchasable: false,
        // purchasing: false,
        // loading: false,
        // error: false
    }

    componentDidMount () {
        // https://react-myburger-a5f9d.firebaseio.com/
        console.log(this.props);
        axios.get( '/orders.json' )
            .then (response => {
                console.log(response.data);
                const fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });

                }
                this.setState({loading: false, orders: fetchedOrders});

                // this.setState({ingredients: response.data});
            })
            .catch(error => {
                // this.setState({error: true});
                this.setState({loading: false});
            });
    }


    render (){
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>
        );
    }

}

export default withErrorHandler(Orders, axios);