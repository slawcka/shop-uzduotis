import React from 'react';
import SearchOrders from './SearchOrders';
import {orders} from '../static-data-orders';

const Home = () => {
    return (
        <div className='content home'>
            <SearchOrders orderList={orders}/>
        </div>
    );
};

export default Home;