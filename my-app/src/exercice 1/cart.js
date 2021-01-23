import React from 'react';
class Cart extends React.Component {
    render() {
      return (
        <div className="cart">
          <h1>Panier {this.props.name}</h1>
          
        </div>
      );
    }
  }
  export default Cart;
  // Exemple d’utilisation : <ShoppingList name="Jean" />