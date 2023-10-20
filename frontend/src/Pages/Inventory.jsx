import React, { useState } from 'react';
import { ItemCard } from 'Components';

const Inventory = () => {
    const [selectedTab, setSelectedTab] = useState('All');
    const sampleContents = [
        {
            item: 'Square Gallon',
            max: 50,
            stock: 20,
            unitPrice: 340,
        },
        {
            item: 'Square Gallon',
            max: 50,
            stock: 35,
            unitPrice: 340,
        },
        {
            item: 'Square Gallon',
            max: 50,
            stock: 20,
            unitPrice: 340,
        },
        {
            item: 'Square Gallon',
            max: 50,
            stock: 15,
            unitPrice: 340,
        },
        {
            item: 'Square Gallon',
            max: 25,
            stock: 25,
            unitPrice: 340,
        },
        {
            item: 'Square Gallon',
            max: 70,
            stock: 14,
            unitPrice: 340,
        },
    ]
    // Function to filter items based on the selected tab
    const filterItems = (tab) => {
        if (tab === 'All') {
            return sampleContents;
        } else {
            return sampleContents.filter((item) => {
                const stockStatus = getStockStatus(item.stock, item.max);
                return stockStatus === tab;
            });
        }
    };
    // Function to determine stock status
    const getStockStatus = (stock, max) => {
        if (stock <= 0) {
            return 'Out of Stock';
        } else if (stock <= max * 0.2) {
            return 'Low Stock';
        } else if (stock <= max * 0.5) {
            return 'Half Stock';
        } else {
            return 'Full Stock';
        }
    };
    
    const filteredItems = filterItems(selectedTab);

    return (
        <main id='inventory' className='container-fluid h-100'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Inventory</h2>
            </div>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Full Stock')}>Full Stock</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Half Stock')}>Half Stock</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm`} onClick={() => setSelectedTab('Low Stock')}>Low Stock</button>
                        </li>
                        <li className='nav-item px-3'>
                            <button className='button-itm py-2 px-3 rounded-3'>+ Add Item</button>
                        </li>
                    </ul>
                </header>
                <section className='py-3 d-flex gap-3 flex-wrap'>
                {filteredItems.map((sampleData, indx) => (
                    <ItemCard data={sampleData} key={indx} />
                ))}
                </section>
            </section>
        </main>
    );
};

export default Inventory;
