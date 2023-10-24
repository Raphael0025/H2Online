import React, {useState} from 'react'
import {Receipt, POSItem} from 'Components'
import {customers, sampleItems} from 'Utils/initialData'
import {calculateTotalPrice, calculateTotalSubPrice, handleClearCustomer, handleInputChange, handleCustomerSelect, handleDiscountChange} from 'Utils/handlingFunctions'

const PoS = () => {
    const headers = ['Item', 'Service', 'QTY', 'Unit Price', 'Sub Price']
    const [customerName, setCustomerName] = useState('') // State for customer
    const [selectedItems, setSelectedItems] = useState([]) // State for selected items
    const [filteredCustomers, setFilteredCustomers] = useState([]) // State for customer filter
    const [discount, setDiscount] = useState(0); // State for discount percentage
    const [paymentMethod, setPaymentMethods] = useState('') // State for payment methods
    const [shipping, setShipping] = useState('') // State for shipping/delivery
    
    return (
        <main id='point-of-sales' className='container-fluid d-flex gap-1 h-100'>
                <section className='container-fluid p-3 layout pb-4'>
                    <section className='bg-light p-3 rounded-3 mb-2 h-100 layout-two overflow-y-scroll'>
                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Refill <hr className='flex-fill ' /></h6>
                        <div className='list d-flex flex-wrap justify-content-center align-items-start gap-1 mb-3' >
                        {sampleItems.map((data, indx) => (
                            <POSItem data={data} key={indx} customerName={customerName} selectedItems={selectedItems} setSelectedItems={setSelectedItems} isSelected={selectedItems.some((item) => item.item === data.item)} />
                        ))}
                        </div>

                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Purchase <hr className='flex-fill ' /></h6>
                        <div className='list d-flex flex-wrap justify-content-center align-items-start gap-1'>
                        {sampleItems.map((data, indx) => (
                            <POSItem data={data} key={indx} customerName={customerName} selectedItems={selectedItems} setSelectedItems={setSelectedItems} isSelected={selectedItems.some((item) => item.item === data.item)} />
                        ))}
                        </div>
                    </section>
                    <div className='d-flex justify-content-end gap-3'>
                        <button className='rounded-5 px-3 py-2 button-itm-outline-dngr' onClick={() => handleClearCustomer(setCustomerName, setDiscount, setSelectedItems, setPaymentMethods, setShipping)}>Cancel</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Add to Credit</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Pay Later</button>
                    </div>
                </section>
                <section className='ord-summary p-3 layout pb-4'>
                    <section className='bg-light p-3 rounded-3 mb-2 h-100 layout-two overflow-y-scroll'>
                        <h6 className=' text-center '>Order Summary</h6>
                        <div className='d-flex flex-column w-100 mb-2'>
                            <h6 style={{fontSize: '11px'}}>Input Customer ID or Name</h6>
                            <input type='text' id='customer' className='w-100 p-1 px-2 rounded-2' placeholder='Input Customer Name' value={customerName} style={{fontSize: '11px'}} autoComplete='off' onChange={(e) => handleInputChange(e, setCustomerName, customers, setFilteredCustomers, setDiscount, setSelectedItems, setPaymentMethods, setShipping)}/>
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <h6 style={{fontSize: '11px'}}>Delivery Address</h6>
                            <input type='text' id='delivery' className='w-100 p-1 px-2 rounded-2' placeholder='Delivery Address' style={{fontSize: '11px'}}  />
                            {filteredCustomers.length > 0 && customerName && (
                            <div className="customer-dropdown">
                                {filteredCustomers.map((customer) => (
                                <div key={customer.name} onClick={() => handleCustomerSelect(customer, setCustomerName, sampleItems, setSelectedItems, setFilteredCustomers)} className="dropdown-item" >
                                    {customer.name}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                        <Receipt data={selectedItems} headers={headers} height={'200px'} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
                        <div className='py-2'>
                            <h6 className='header-txt'>Shipping Option</h6>
                            <div className='d-flex gap-3'>
                                <button className={`rounded-3 py-2 px-3 flex-fill ${shipping === 'On-Site' ? 'button-itm' : 'button-itm-outline'}`} onClick={() => setShipping('On-Site')}>On-Site</button>
                                <button className={`rounded-3 py-2 px-3 flex-fill ${shipping === 'Delivery' ? 'button-itm' : 'button-itm-outline'}`} onClick={() => setShipping('Delivery')}>Delivery</button>
                                <button className={`rounded-3 py-2 px-3 flex-fill ${shipping === 'Schedule Delivery' ? 'button-itm' : 'button-itm-outline'}`} onClick={() => setShipping('Schedule Delivery')}>Schedule Delivery</button>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h6 className='header-txt'>Payment Methods</h6>
                            <div className='d-flex gap-3'>
                                <button className={`rounded-3 py-2 px-3 flex-fill ${paymentMethod === 'Cash' ? 'button-itm' : 'button-itm-outline'}`} onClick={() => setPaymentMethods('Cash')} >Cash</button>
                                <button className={`rounded-3 py-2 px-3 flex-fill ${paymentMethod === 'GCash' ? 'button-itm' : 'button-itm-outline'}`} onClick={() => setPaymentMethods('GCash')} >GCash</button>
                            </div>
                        </div>
                        <div className='p-2 rounded-2 d-flex flex-column gap-3' style={{backgroundColor: '#9EDBFF50'}}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Discount (%)</h6>
                                <input type='number' min={0} className='rounded-3 text-center bg-light' style={{width: '60px'}} value={discount} onChange={(e) => handleDiscountChange(e, setDiscount)} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Sub Total</h6>
                                <span><b>P {calculateTotalSubPrice(selectedItems)}</b></span>
                            </div>
                        </div>
                        <div className='pt-2 d-flex justify-content-between align-items-center'>
                            <h6 className='header-txt fs-4 m-0'>Total</h6> 
                            <span className='text-primary'><b>P {calculateTotalPrice(selectedItems, discount)}</b></span>
                        </div>
                    </section>
                    <button className='w-100 rounded-5 px-3 py-2 button-itm' ><b>Pay Now (P {calculateTotalPrice(selectedItems, discount)})</b></button>
                </section>
        </main>
    )
}

export default PoS