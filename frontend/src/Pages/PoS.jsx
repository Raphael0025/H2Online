import React, {useState} from 'react'
import {Receipt, POSItem} from 'Components'
import square from 'Assets/images/square.png'
import round from 'Assets/images/round.png'
import TenLiters from 'Assets/images/10Litre 1.png'
import pep from 'Assets/images/bigPep.png'
import bottle from 'Assets/images/pep 1.png'

const PoS = () => {
    const headers = ['Item', 'Service', 'QTY', 'Unit Price', 'Sub Price']

    const sampleItems = [
        {
            imge: square,
            item: 'Square Gallon',
            unit_price: 25,
            service: 'Refill'
        },
        {
            imge: round,
            item: 'Round Gallon',
            unit_price: 25,
            service: 'Refill'
        },
        {
            imge: TenLiters,
            item: '10 Liters',
            unit_price: 15,
            service: 'Refill'
        },
        {
            imge: pep,
            item: '8 Liters',
            unit_price: 14,
            service: 'Refill'
        },
        {
            imge: pep,
            item: '7 Liters',
            unit_price: 13,
            service: 'Refill'
        },
        {
            imge: pep,
            item: '6 Liters',
            unit_price: 12,
            service: 'Refill'
        },
        {
            imge: pep,
            item: '5 Liters',
            unit_price: 14,
            service: 'Refill'
        },
        {
            imge: pep,
            item: '4 Liters',
            unit_price: 12,
            service: 'Refill'
        },
        {
            imge: bottle,
            item: '1 Liter',
            unit_price: 15,
            service: 'Refill'
        },
        {
            imge: bottle,
            item: '1.5 Liters',
            unit_price: 15,
            service: 'Refill'
        },
        {
            imge: bottle,
            item: '500ml',
            unit_price: 15,
            service: 'Refill'
        },
        {
            imge: bottle,
            item: '250ml',
            unit_price: 15,
            service: 'Refill'
        }
    ]
    const [customerName, setCustomerName] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle name input
    const handleCustomerNameInput = (event) => {
        setCustomerName(event.target.value);
    };
    
    const handleItemSelected = (selectedItem) => {
        // Check if the item is not already selected
        if (!selectedItems.some((item) => item.item === selectedItem.item)) {
            const selectedWithInitialQuantity = {
                ...selectedItem,
                qty: 1, // Set the initial quantity to 1
                sub_price: selectedItem.unit_price, // Calculate the sub price
            };
            setSelectedItems([...selectedItems, selectedWithInitialQuantity]);
        }
    };

    const handleUpdateQuantity = (itemIndex, newQuantity) => {
        if (newQuantity >= 0) {
            const updatedItems = [...selectedItems];
            updatedItems[itemIndex].qty = newQuantity;
            updatedItems[itemIndex].sub_price = newQuantity * updatedItems[itemIndex].unit_price;
            setSelectedItems(updatedItems);
        }
    };

    const handleDeleteItem = (itemIndex) => {
        const updatedItems = selectedItems.filter((_, index) => index !== itemIndex);
        setSelectedItems(updatedItems);
    };
    
    const calculateTotalSubPrice = (selectedItems) => {
        const totalSubPrice = selectedItems.reduce((total, item) => total + item.sub_price, 0);
        return totalSubPrice.toFixed(2); // Format the total sub-price to two decimal places
    };

    return (
        <main id='point-of-sales' className='container-fluid d-flex gap-1 h-100'>
                <section className='container-fluid p-3 layout pb-4'>
                    <section className='bg-light p-3 rounded-3 mb-2 h-100 layout-two overflow-y-scroll'>
                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Refill <hr className='flex-fill ' /></h6>
                        <div className='list d-flex flex-wrap justify-content-center align-items-start gap-1 mb-3' >
                        {sampleItems.map((data, indx) => (
                            <POSItem data={data} key={indx} customerName={customerName} onItemSelected={handleItemSelected} isSelected={selectedItems.some((item) => item.item === data.item)} />
                        ))}
                        </div>

                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Purchase <hr className='flex-fill ' /></h6>
                        <div className='list d-flex flex-wrap justify-content-center align-items-start gap-1'>
                        {sampleItems.map((data, indx) => (
                            <POSItem data={data} key={indx} customerName={customerName} onItemSelected={handleItemSelected} isSelected={selectedItems.some((item) => item.item === data.item)} />
                        ))}
                        </div>
                    </section>
                    <div className='d-flex justify-content-end gap-3'>
                        <button className='rounded-5 px-3 py-2 button-itm-outline-dngr'>Cancel</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Add to Credit</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Pay Later</button>
                    </div>
                </section>
                <section className='ord-summary p-3 layout pb-4'>
                    <section className='bg-light p-3 rounded-3 mb-2 h-100 layout-two overflow-y-scroll'>
                        <h6 className=' text-center '>Order Summary</h6>
                        <div className='d-flex flex-column w-100 mb-2'>
                            <h6 style={{fontSize: '11px'}}>Input Customer ID or Name</h6>
                            <input type='text' id='customer' className='w-100 p-1 px-2 rounded-2' placeholder='Input Customer ID or Name' value={customerName} onChange={handleCustomerNameInput} style={{fontSize: '11px'}} />
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <h6 style={{fontSize: '11px'}}>Delivery Address</h6>
                            <input type='text' id='delivery' className='w-100 p-1 px-2 rounded-2' placeholder='Delivery Address' style={{fontSize: '11px'}} />
                        </div>
                        <Receipt data={selectedItems} headers={headers} onUpdateQuantity={handleUpdateQuantity} onDeleteItem={handleDeleteItem} height={'200px'} />
                        <div className='py-2'>
                            <h6 className='header-txt'>Shipping Option</h6>
                            <div className='d-flex gap-3'>
                                <button className={`rounded-3 button-itm-outline py-2 px-3 flex-fill`}>On-Site</button>
                                <button className={`rounded-3 button-itm-outline py-2 px-3 flex-fill`}>Delivery</button>
                                <button className={`rounded-3 button-itm-outline py-2 px-3 flex-fill`}>Schedule Delivery</button>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h6 className='header-txt'>Payment Methods</h6>
                            <div className='d-flex gap-3'>
                                <button className={`rounded-3 button-itm-outline py-2 px-3 flex-fill`}>Cash</button>
                                <button className={`rounded-3 button-itm-outline py-2 px-3 flex-fill`}>GCash</button>
                            </div>
                        </div>
                        <div className='p-2 rounded-2 d-flex flex-column gap-3' style={{backgroundColor: '#9EDBFF50'}}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Discount(%)</h6>
                                <input type='text' className='rounded-3 px-3 bg-light' style={{width: '60px'}} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Sub Total</h6>
                                <span><b>P{calculateTotalSubPrice(selectedItems)}</b></span>
                            </div>
                        </div>
                        <div className='pt-2 d-flex justify-content-between align-items-center'>
                            <h6 className='header-txt fs-4 m-0'>Total</h6>
                            <span className='text-primary'><b>P{calculateTotalSubPrice(selectedItems)}</b></span>
                        </div>
                    </section>
                    <button className='w-100 rounded-5 px-3 py-2 button-itm'><b>Pay Now ({calculateTotalSubPrice(selectedItems)})</b></button>
                </section>
        </main>
    )
}

export default PoS