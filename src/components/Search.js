import React, { Component } from 'react';

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
        let filteredRes= this.props.datalist.filter(item=>{
            return item.product.name.toLowerCase().includes(this.state.searchTerm) ||
            item.product.description.toLowerCase().includes(this.state.searchTerm) ;
        })
        
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
                                <h3 className='item-price'>{item.price}<span>eur</span></h3>
                            </div>
                    )}
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Search;