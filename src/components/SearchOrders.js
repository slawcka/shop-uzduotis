import React, { Component } from 'react';


function searchMatch(searchTerm){
    

    return function(item){
        const keys=Object.keys(item.product);
        console.log(keys.indexOf('1'))
      return 
      item.product.name.includes(searchTerm) || item.product.description.includes(searchTerm);
      // const isSearched=searchTerm=>item=>item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  }
class SearchOrders extends Component {
    constructor(props){
        super(props);
        this.state={
            searchKeyword:'',
            list:[],
            searchTerm:'',
            
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    onSearchChange(event){
        this.setState({searchTerm: event.target.value})
    }
    onSearchSubmit(event){
        event.preventDefault();
        this.setState({searchTerm: event.target.value})
        
    }

    render() {
        let filteredRes= this.props.orderList.filter(ite=>{
            return ite.product.name.toLowerCase().includes(this.state.searchTerm) ||
            ite.product.description.toLowerCase().includes(this.state.searchTerm);
        })
        //let filteredResults= this.props.datalist.filter(searchMatch(this.state.searchTerm));
        
        return (
            <React.Fragment>
            <form action="" >
            <input type="text" value={this.state.searchTerm } onChange={this.onSearchChange}/>
            </form>
            
            <div className='search-order-wrap'>
                {filteredRes.map(
                    item=>
                        <div key={item.objectID} className='search-order-item'>
                            
                                <p>{item.product.name}</p>
                                <p>{item.product.description}</p>
                                <p>{item.price}</p>
                            
                         </div>
            )}
            </div>
            </React.Fragment>
        );
    }
}

export default SearchOrders;