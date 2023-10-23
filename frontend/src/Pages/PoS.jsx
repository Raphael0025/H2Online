import React, {useState} from 'react'
import {Receipt, POSItem} from 'Components'
import square from 'Assets/images/square.png'
import round from 'Assets/images/round.png'
import TenLiters from 'Assets/images/10Litre 1.png'
import pep from 'Assets/images/bigPep.png'
import bottle from 'Assets/images/pep 1.png'

const PoS = () => {
    const headers = ['Item', 'Service', 'QTY', 'Unit Price', 'Sub Price']
    const customers = [
        {
            "name": "Mrs. Weston White",
            "contact": "(457) 482-5223 x756",
            "address": "West North Alvisland, Robb Neck, 353",
            "gallon_Ownership": [
              {
                "name": "Square Gallon",
                "quantity": 5
              },
              {
                "name": "Round Gallon",
                "quantity": 3
              },
              {
                "name": "10 Liters",
                "quantity": 2
              }
            ]
        },
        {
            "name": "Kristofer Barton",
            "contact": "1-172-007-2924",
            "address": "New North Karimouth, Dooley Place, 959",
            "gallon_Ownership": [
              {
                "name": "Square Gallon",
                "quantity": 2
              },
              {
                "name": "Round Gallon",
                "quantity": 1
              },
              {
                "name": "8 Liters",
                "quantity": 4
              }
            ]
          },
        {
          "name": "Giovanni Zieme",
          "contact": "660.793.2980 x3360",
          "address": "South East Chad, Schamberger Drive, 70207"
        },
        {
          "name": "Neoma Runolfsdottir",
          "contact": "019-533-7965",
          "address": "East Conradchester, West Route, 33573"
        },
        {
          "name": "Hollis Keeling",
          "contact": "(418) 931-1301",
          "address": "Lake Jazminshire, Kutch Stravenue, 12861"
        },
        {
          "name": "Marta Hagenes",
          "contact": "1-354-772-2174 x5114",
          "address": "East Lloydview, O'Kon Gateway, 53112"
        },
        {
          "name": "Jude Schneider III",
          "contact": "926-752-6635",
          "address": "South South Allieland, Williamson Circle, 41376"
        },
        {
          "name": "Mrs. Kianna Morar",
          "contact": "(739) 786-1806 x420",
          "address": "West Dalemouth, Kris Fields, 50847"
        },
        {
          "name": "Lon Stokes",
          "contact": "1-014-464-5081 x698",
          "address": "Port Lake Mabel, Angela Park, 87389"
        },
        {
          "name": "Jarret Littel",
          "contact": "(053) 153-8929 x3174",
          "address": "Lake North Deshaun, Camren Hills, 55861"
        },
        {
          "name": "Christy Jaskolski",
          "contact": "287.819.7179",
          "address": "West Wintheiserburgh, Wyman Underpass, 41975"
        },
        {
          "name": "Tito Nicolas",
          "contact": "(705) 551-7361 x88009",
          "address": "New Hoegerfort, Erica Tunnel, 72776"
        },
        {
          "name": "Jason Abernathy",
          "contact": "701-960-2550",
          "address": "New Chaddton, Nicole Walk, 28771"
        },
        {
          "name": "Oda Price",
          "contact": "075-360-7730 x263",
          "address": "West Roobhaven, Pfannerstill Mill, 95665"
        },
        {
          "name": "Jovani Beatty",
          "contact": "(661) 725-4464 x9183",
          "address": "Lake Port Genesisside, Harber Centers, 45079"
        },
        {
          "name": "Betty Gottlieb",
          "contact": "(727) 730-5700 x4634",
          "address": "East Hermistonville, Newton Track, 75279"
        },
        {
          "name": "Aletha Walter",
          "contact": "369.388.3994",
          "address": "East Cronaton, Reilly Glen, 53375"
        },
        {
          "name": "Ruthie VonRueden V",
          "contact": "1-536-793-6292 x6177",
          "address": "North Letitiaside, Welch Summit, 36526"
        },
        {
          "name": "Joyce Breitenberg",
          "contact": "1-175-562-7295 x082",
          "address": "West Bauchbury, Sibyl Field, 64626"
        },
        {
          "name": "Lane Gusikowski",
          "contact": "726-289-2245 x79267",
          "address": "East Astridburgh, Swaniawski Plains, 86633"
        }
    ]

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
    const [customerName, setCustomerName] = useState(''); // State for customer
    const [selectedItems, setSelectedItems] = useState([]); // State for selected items

    const [filteredCustomers, setFilteredCustomers] = useState([]); // State for customer filter
    const [discount, setDiscount] = useState(0); // State for discount percentage

    const [paymentMethod, setPaymentMethods] = useState('') // State for payment methods
    const [shipping, setShipping] = useState('') // State for shipping/delivery

    const handleCustomerSelect = (customer) => {
        // Update the input fields (excluding customer name)
        document.getElementById('delivery').value = customer.address;
        setCustomerName(customer.name)

        if (customer.gallon_Ownership) {
            const newItems = customer.gallon_Ownership.map((gallon) => {
                const item = sampleItems.find((sampleItem) => sampleItem.item === gallon.name);
                if (item) {
                return {
                    ...item,
                    qty: gallon.quantity,
                    sub_price: item.unit_price * gallon.quantity,
                };
                }
                return null;
            });
            setSelectedItems(newItems.filter(Boolean));
        }
    
        // Clear the filtered customers and the input field
        setFilteredCustomers([]);
    };
    const handleInputChange = (e) => {
        const value = e.target.value;
        setCustomerName(value);
        // Filter customers based on the input
        const filtered = customers.filter((customer) =>
            customer.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCustomers(filtered);
        // Clear the filtered customers if the input is empty
        if (!value) {
            setDiscount(0)
            setFilteredCustomers([]);
            handleClearCustomer()
            setPaymentMethods('')
            setShipping('')
        }
    };
    const handleClearCustomer = () => {
        // Clear the input field
        setCustomerName('')
        document.getElementById('delivery').value = '';
        setDiscount(0)
        setSelectedItems([]); // Clear the selected items
        setPaymentMethods('')
        setShipping('')
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
    }
    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    };
    const calculateTotalPrice = () => {
        const totalSubPrice = selectedItems.reduce((total, item) => total + item.sub_price, 0);
        const discountAmount = (discount / 100) * totalSubPrice;
        return (totalSubPrice - discountAmount).toFixed(2); // Apply the discount and format to two decimal places
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
                        <button className='rounded-5 px-3 py-2 button-itm-outline-dngr' onClick={handleClearCustomer}>Cancel</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Add to Credit</button>
                        <button className='rounded-5 px-3 py-2 button-itm-outline'>Pay Later</button>
                    </div>
                </section>
                <section className='ord-summary p-3 layout pb-4'>
                    <section className='bg-light p-3 rounded-3 mb-2 h-100 layout-two overflow-y-scroll'>
                        <h6 className=' text-center '>Order Summary</h6>
                        <div className='d-flex flex-column w-100 mb-2'>
                            <h6 style={{fontSize: '11px'}}>Input Customer ID or Name</h6>
                            <input type='text' id='customer' className='w-100 p-1 px-2 rounded-2' placeholder='Input Customer Name' value={customerName} style={{fontSize: '11px'}} autoComplete='off' onChange={handleInputChange}/>
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <h6 style={{fontSize: '11px'}}>Delivery Address</h6>
                            <input type='text' id='delivery' className='w-100 p-1 px-2 rounded-2' placeholder='Delivery Address' style={{fontSize: '11px'}}  />
                            {filteredCustomers.length > 0 && customerName && (
                            <div className="customer-dropdown">
                                {filteredCustomers.map((customer) => (
                                <div
                                    key={customer.name}
                                    onClick={() => handleCustomerSelect(customer)}
                                    className="dropdown-item"
                                >
                                    {customer.name}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                        <Receipt data={selectedItems} headers={headers} onUpdateQuantity={handleUpdateQuantity} onDeleteItem={handleDeleteItem} height={'200px'} />
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
                                <input type='number' min={0} className='rounded-3 text-center bg-light' style={{width: '60px'}} value={discount} onChange={handleDiscountChange} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Sub Total</h6>
                                <span><b>P {calculateTotalSubPrice(selectedItems)}</b></span>
                            </div>
                        </div>
                        <div className='pt-2 d-flex justify-content-between align-items-center'>
                            <h6 className='header-txt fs-4 m-0'>Total</h6>
                            <span className='text-primary'><b>P {calculateTotalPrice()}</b></span>
                        </div>
                    </section>
                    <button className='w-100 rounded-5 px-3 py-2 button-itm' ><b>Pay Now (P {calculateTotalPrice()})</b></button>
                </section>
        </main>
    )
}

export default PoS