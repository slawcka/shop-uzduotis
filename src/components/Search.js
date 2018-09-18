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
class Search extends Component {
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
        
        
    }

    render() {
        let filteredRes= this.props.datalist.filter(ite=>{
            return ite.product.name.toLowerCase().includes(this.state.searchTerm) ||
            ite.product.description.toLowerCase().includes(this.state.searchTerm);
        })
        let filteredResults= this.props.datalist.filter(searchMatch(this.state.searchTerm));
        
        return (
            <React.Fragment>
            <form action="" className='product-form text-center'>
            <input type="text" placeholder='Ieškoti...' value={this.state.searchTerm } onChange={this.onSearchChange}/>
            </form>
            <div className='container'>
                <div className='row-s '>
                    {filteredRes.map(
                        item=>
                            <div key={item.objectID} className=' col-s col-4-s search-product-wrap text-center'>
                                <img src={'/images/'+item.photo} alt="ass"/>
                                    <div className="description">
                                        <h1>{item.product.name}</h1>
                                        <p>{item.product.description}</p>
                                    </div>
                                <h3 className='item-price'>{item.price}</h3>
                            </div>
                    )}
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Search;