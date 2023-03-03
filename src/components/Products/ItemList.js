/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class ItemList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: this.props.items
      }
   }

   componentDidMount() {
       this.setState({ items: this.props.items})
   }
 
   static getDerivedStateFromProps(props, state) {
      let newState = {
         items: props.items
      }
      return newState;
   }
   render() {
      const lists = this.state.items.map((item) =>
         <tr key={item.id} >
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
         </tr>
      );
      return (
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Amount</th>
                     <th>Category</th>
                  </tr>
               </thead>
               <tbody>
                  {lists}
               </tbody>
            </table>
         </div>
      );
   }
}
export default ItemList;