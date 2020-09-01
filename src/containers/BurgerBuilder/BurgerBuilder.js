import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(prop);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        puchaseable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
                .map(igkey => {
                    return ingredients[igkey]
                })
                .reduce( (sum,el) => {
                    return sum + el;
                },0);
        this.setState({puchaseable : sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients 
        };

        updateIngredients[type] =  updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrince = oldPrice + priceAddition;

        this.setState({totalPrice: newPrince, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updateCounted = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients 
        };

        updateIngredients[type] =  updateCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrince = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrince, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    puchaseHandler = () => {
        this.setState({purchasing: true});
    }

    puchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    puchaseContinueHandler = () => {
        alert('You Continue')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]  <= 0
        }
        //{salad: true, meat: false, ...}
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        puchaseCancelled={this.puchaseCancelHandler}
                        puchaseContinued={this.puchaseContinueHandler}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    puchaseable={this.state.puchaseable}
                    ordered={this.puchaseHandler}
                    price={this.state.totalPrice}/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;