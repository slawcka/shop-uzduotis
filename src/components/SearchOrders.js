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
            list:this.props.orderList,
            searchTerm:'',
            searchType:1
            
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.SelectedValue = this.SelectedValue.bind(this);
        this.FilterByorder = this.FilterByorder.bind(this);
    };
    
    FilterByorder(){
        let sort=this.props.orderList.sort((a,b) =>a.price - b.price );
        this.setState({list:sort})
        console.log('ass'+this.state.list)
    }
    SelectedValue(event) { 
        this.setState({searchType:event.target.value});
        console.log(this.state.searchType)
        switch(this.state.searchType) {
            
            case 1: console.log(this.props.orderList.sort(item => item.price));
            break;
            case 2: console.log('das');
            break;
            case 3: console.log('zaz');
           
            }
    }
    onSearchChange(event){
        this.setState({searchTerm: event.target.value})
    }
    onSearchSubmit(event){
        event.preventDefault();
        
        
    }
    returnsorted(){

    }
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      

    render() {
        let filteredlist= this.props.orderList.filter(ite=>{
            return ite.product.name.toLowerCase().includes(this.state.searchTerm) ||
            ite.product.description.toLowerCase().includes(this.state.searchTerm);
        })
        
        console.log(this.state.list)
       
        let filteredRes= this.props.orderList.filter(ite=>{
            return ite.product.name.toLowerCase().includes(this.state.searchTerm) ||
            ite.product.description.toLowerCase().includes(this.state.searchTerm);
        })
        let filteredByPrice=filteredRes.sort((a,b) =>a.price - b.price)
        //let filteredResults= this.props.datalist.filter(searchMatch(this.state.searchTerm));
        
        return (
            <React.Fragment>
            <form action="" onSubmit={this.onSearchSubmit} >
            <select name="cars" onChange={this.SelectedValue}>
  <option value="1" >Order id</option>
  <option value="2">client name</option>
  <option value="3">product</option>
  
</select>
            <button onClick={this.FilterByorder}>sort by price</button>
            <input type="text" value={this.state.searchTerm } onChange={this.onSearchChange}/>
            </form>
            
            <div className='search-order-wrap'>
               <div className='search-order-names'>
               <p>order number</p>
               <p>product name</p>
               <p>description</p>
               <p>buyer</p>
               <p>price</p>
               </div>
                {filteredlist.map(
                    item=>
                        <div key={item.objectID} className='search-order-item'>
                                <p>order number: {item.orderNo}</p>
                                <p>{item.product.name}</p>
                                <p>{item.product.description}</p>
                                <p>{item.buyerID}</p>
                                <p>{item.price}</p>
                                
                            
                         </div>
            )}
            </div>
            </React.Fragment>
        );
    }
}

export default SearchOrders;