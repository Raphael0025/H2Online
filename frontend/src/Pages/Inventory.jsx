import React, { useState } from 'react';
import { ItemCard, NewItemModal, ReStockModal } from 'Components';
import {inventoryContents} from 'Utils/initialData'
import { filterInventoryItems, getStockStatus } from 'Utils/handlingFunctions'
const Inventory = () => {
    const [selectedTab, setSelectedTab] = useState('All');
    // Function to filter items based on the selected tab and Function to determine stock status
    const filteredItems = filterInventoryItems(inventoryContents, getStockStatus, selectedTab);

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
                            <button className='button-itm py-2 px-3 rounded-3' data-bs-toggle="modal" data-bs-target="#newItem">+ Add Item</button>
                        </li>
                    </ul>
                </header>
                <section className='py-3 d-flex gap-3 flex-wrap'>
                {filteredItems.map((sampleData, indx) => (
                    <ItemCard data={sampleData} key={indx} />
                ))}
                </section>
            </section>
            <NewItemModal />
            <ReStockModal />
        </main>
    );
};

export default Inventory;
