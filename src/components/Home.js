import React from 'react';
import Search from './Search';
import {items} from '../static-data';

const Home = () => {
    return (
        <div className='content home'>
            <Search datalist={items}/>
        </div>
    );
};

export default Home;