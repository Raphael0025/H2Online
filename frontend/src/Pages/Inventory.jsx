import React, { useState } from 'react';
import { NewItemModal, ReStockModal, ViewItemModal } from 'Components';
import {inventoryContents} from 'Utils/initialData'
import { filterInventoryItems, getStockStatus, calculateStatus } from 'Utils/handlingFunctions'
const Inventory = () => {
    const [selectedTab, setSelectedTab] = useState('All')
    const [selectedItem, setSelectedItem] = useState(null); // Track the selected item

    // Function to filter items based on the selected tab and Function to determine stock status
    const filteredItems = filterInventoryItems(inventoryContents, getStockStatus, selectedTab)
    const handleSelectItem = (item) => {
        setSelectedItem(item); // Update the selected item in the state
    };

    const decide = (stock, max) => {
        const status = calculateStatus(stock, max);
        if(status === 'Low'){
            return 'border-danger'
        } else if (status === 'Half') {
            return 'border-warning'
        }
        return 'border-success'
    }

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
                    <div key={indx} data-bs-target='#viewItem' data-bs-toggle="modal" onClick={() => handleSelectItem(sampleData)} className={`p-3 bg-light rounded-3 border-start border-5 ${decide(sampleData.stock, sampleData.max)}`} style={{width: '230px'}} >
                        {/* <img src={imge} alt={imge} /> */}
                        <div className='mt-2 d-flex flex-column itm-card'>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Item</span>
                                <span className='lbl-val'>{sampleData.item}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>{`Stock (max. ${sampleData.max} pcs)`}</span>
                                <span className='lbl-val'>{sampleData.stock}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Unit Price</span>
                                <span className='lbl-val'>{sampleData.unitPrice}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='label'>Status</span>
                                <span className='lbl-val'> Stock</span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-2 mt-2'>
                                <div className='d-flex gap-2 justify-content-center align-items-center'>
                                    <div className={`p-2 stat ${decide(sampleData.stock, sampleData.max)}`} />
                                    <span className='label'>Re-Stock</span>
                                </div>
                                <div className='d-flex gap-2'>
                                    <button type='button' data-bs-target='#reStock' data-bs-toggle="modal" className='button-itm-outline rounded-3 p-2 px-3'>All</button>
                                    <button className='button-itm rounded-3 p-2 px-3' data-bs-target='#reStock' data-bs-toggle="modal">Partial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </section>
            </section>
            <ViewItemModal data={selectedItem} />
            <NewItemModal />
            <ReStockModal />
        </main>
    );
};

export default Inventory;
