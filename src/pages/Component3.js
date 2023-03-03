import React, { Component} from "react";
import Product from '../components/Products/Product'

class Component3 extends Component {

    state = {
        text: '',
        items: [],
        isLoading: false
    }

    getFetchProducts() {
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(result => this.setState({
                loading: false,
                items: result
            }))
            .catch(console.log);
    }

    onHandleChange = (e) => {
        this.setState({text: e.target.value })
    }

    onHandleClick = (e) => {
        e.preventDefault();
        this.setState({ text: ''}, () => {
            setTimeout(() => {
                this.getFetchProducts()
            }, 3000);
        })
    }

    renderForm() {
        return (
            <div className="Form">
                <input type="text" value={ this.state.text} onChange={ this.onHandleChange}/>
                <button onClick={ this.onHandleClick}>Submit</button>
            </div>
        )
    }
    render() {
        const { items } = this.state;
        return (
            <div className="Component3">
                <h1>Component3</h1>
                { this.renderForm() }
                { items && items.length ?  <Product items={items}/> : null }
            </div>
        )
    }
}

export default Component3;