import React, { Component } from 'react';


function searchMatch(searchTerm){
    return function(item){
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
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
        this.setState({searchTerm: event.target.value})
        console.log(this.state.searchTerm)
    }

    render() {
        
        return (
            <React.Fragment>
            <form action="" >
            <input type="text" value={this.state.searchTerm } onChange={this.onSearchChange}/>
            </form>
            
            <div>
                {this.props.datalist.filter(searchMatch(this.state.searchTerm)).map(
                    item=>
                        <div key={item.objectID} className='search-product-wrap'>
                            <img src={'/images/'+item.photo} alt="ass"/>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <h3>{item.price}</h3>
                         </div>
            )}
            </div>
            </React.Fragment>
        );
    }
}

export default Search;