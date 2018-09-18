import React, { Component } from 'react';
class SearchOrders extends Component {
    constructor(props){
        super(props);
        this.state={
            searchKeyword:'',
            list:this.props.orderList,
            searchTerm:'',
            searchType:1
            
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
       
    };
    onSearchChange(event){
        this.setState({searchTerm: event.target.value})
    }
    onSearchSubmit(event){
        event.preventDefault();
    }
    render() {
        let filteredlist= this.props.orderList.filter(item=>{
            return item.product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            item.product.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            item.orderNo.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            item.buyer.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        })
       
        return (
            <React.Fragment>
            <form action="" className='product-form text-center' onSubmit={this.onSearchSubmit} >
           
            <input type="text" placeholder='Ieškoti pagal užsakymo nr ar vardą' value={this.state.searchTerm } onChange={this.onSearchChange}/>
            </form>
            
            <div className='container'>
               <div className='search-order-names text-center'>
                <p>Užsakymo nr.</p>
                <p>Produktas</p>
                <p>Aprašymas</p>
                <p>Klientas</p>
                <p>Kaina</p>
               </div>
                {filteredlist.map(
                    item=>
                        <div key={item.objectID} className='search-order-item text-center'>
                                <p>{item.orderNo}</p>
                                <p>{item.product.name}</p>
                                <p>{item.product.description}</p>
                                <p>{item.buyer}</p>
                                <p>{item.price}</p>
                         </div>
                )}
              </div>
            </React.Fragment>
        );
    }
}
export default SearchOrders;