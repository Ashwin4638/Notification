import React from "react";
import Pager from './Pager'
import ItemList from './ItemList'

 const pageCount = 5;

class Product extends React.Component {
    render() {
        const { items } = this.props;
        console.log('items', items)
        return (
            <div>
            <Pager
                items={items}
                pageCount={pageCount}
                render={
                pagerState => (
               <div>
                  <ItemList items={pagerState.items} 
                 />
               </div>
            )
         }
      />
            </div>
        )
    }

}

export default Product;