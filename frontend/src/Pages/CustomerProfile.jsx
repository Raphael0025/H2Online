import React, {useState, useEffect, useCallback} from 'react'
import { useLocation } from 'react-router-dom';
import { OverviewComponent, AccordionTable } from 'Components';
import {sampleCustomers} from 'Utils/initialData'
import Avatar from 'react-avatar'
import {IconPark} from 'Assets/SvgIcons'
import av from '../Assets/images/avatar.jpg'

const CustomerProfile = () => {
    const content = [500, 50]
    const header = [
        {
            header: 'Agua Points',
            icon: 'ri:coins-line'
        },
        {
            header: 'Credit Balance',
            icon: 'fluent:money-hand-16-regular'
        }
    ]
    const headers = ['Order ID', 'Date', 'Items', 'Total', 'Service', 'Payment', 'Vendor', 'Delivery']
    // Get the location object from React Router
    const location = useLocation();
    // Access the customer data from the location state
    const { customerData } = location.state;
    const [selectedTab, setSelectedTab] = useState('All');
    const [filteredContents, setFilteredContents] = useState(sampleCustomers);

    const updateFilteredContents = useCallback(() => {
        let filtered = sampleCustomers;

        if (selectedTab === 'Credits') {
            filtered = filtered.filter((content) => content.credit > 0);
        } else if (selectedTab === 'Paid Credits') {
            // Filter for items with a "Paid" status in their paymentStatus
            filtered = filtered.filter((content) => content.paymentStatus === 'Paid');
        }

        setFilteredContents(filtered);
    }, [selectedTab])

    useEffect(() => {
        updateFilteredContents() // Update finalContents whenever the sortOrder changes
    }, [updateFilteredContents])

    const urlImg = av;

    const gallons = [
        {
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        },{
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        },{
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        },
        {
            gallon: 'Square Gallon',
            qty: 2
        }
    ]
    return (
        <main id='customerprofile' className='container-fluid d-flex h-100'>
            <section className='container-fluid pe-0'>
                <div className='px-3 pt-3'>
                    <h2 className='border-bottom py-2 border-dark-subtle page-header'>Order History</h2>
                </div>
                <section className='container-fluid px-3 py-3 d-flex' style={{gap: '20px'}}>
                    {header.map((data, indx) => (
                        <OverviewComponent heading={data} content={content[indx]} key={indx} width={'250px'} />
                    ))}
                </section>
                <section className='container-fluid px-3 pb-3'>
                    <header className='d-flex justify-content-between align-items-end'>
                        <ul className='nav gap-2'>
                            <li className='nav-item'>
                                <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                            </li>
                            <li className='nav-item'>
                                <button className={`nav-link itm `} onClick={() => setSelectedTab('Credits')}>Credits</button>
                            </li>
                            <li className='nav-item'>
                                <button className={`nav-link itm `} onClick={() => setSelectedTab('Paid Credits')}>Paid Credits</button>
                            </li>
                            <li className='nav-item px-3'>
                                <button className='button-itm py-2 px-3 rounded-3'>+ Reduce Credits</button>
                            </li>
                        </ul>
                    </header>
                    <div className='w-100 py-2' >
                        <AccordionTable rowColor={'white'} headers={headers} data={filteredContents} height={'430px'} />
                    </div>
                </section>
            </section>
            <section className='p-3 ps-0' style={{width: '350px'}}>
                <section className='p-2 d-flex justify-content-between flex-column px-3 h-100 bg-light rounded-3'>
                    <div>
                        <span className='user-date'>Created on: {customerData.createdAt}</span>
                        <div className='text-center py-2'>
                            <Avatar src={urlImg || null} name={customerData.name} round={true} color='#003E81' fgColor='#fff' size={100} textSizeRatio={2} />
                        </div>
                        <p className='fw-bold mb-2 text-center'>{customerData.name}</p>    
                        <hr className='mt-2' />
                        <p className='my-2 rounded-5 p-2 d-flex justify-content-between px-3 user-info'>
                            <span className='d-flex gap-2'><IconPark path={'ph:phone'} size={16} /> Phone:</span> <span className='user-details'>{customerData.phone}</span>
                        </p>
                        <p className='my-2 rounded-5 p-2 d-flex justify-content-between px-3 user-info'>
                            <span className='d-flex gap-2'><IconPark path={'bytesize:location'} size={16} /> Address:</span> <span className='user-details'>{customerData.address}</span>
                        </p>

                        <p className='my-2 rounded-5 p-2 d-flex justify-content-between px-3 user-info'>
                            <span className='d-flex gap-2'><IconPark path={'icons8:gender'} size={16} /> Gender:</span> <span className='user-details'>{customerData.phone}</span>
                        </p>
                        <p className='my-2 rounded-5 p-2 d-flex justify-content-between px-3 user-info'>
                            <span className='d-flex gap-2'><IconPark path={'ion:mail-outline'} size={16} /> Email:</span> <span className='user-details'>{customerData.address}</span>
                        </p>
                        <p className='my-2 rounded-5 p-2 d-flex justify-content-between px-3 user-info'>
                            <span className='d-flex gap-2'><IconPark path={'lucide:key-round'} size={16} /> Password:</span> <span className='user-details'>{customerData.address}</span>
                        </p>
                        <div className='p-2'> 
                            <p style={{fontSize: '12px'}} className='m-0'>Gallons Owned</p>
                            <div className='p-1 overflow-y-scroll' style={{height: '230px'}}>
                            {gallons.map((gallon, indx) => (
                                <div key={indx} className='d-flex justify-content-between mb-3 border-bottom border-2 pb-2'>
                                    <span className='d-flex gap-2'>
                                        <span className='d-flex align-items-center ' style={{fontSize: '10px'}}>{gallon.gallon}</span> x
                                        <input  type='number' value={gallon.qty} style={{width: '50px', fontSize: '10px'}} className='p-1 rounded-2 text-center fw-bolder ' />
                                    </span>
                                    <button className='btn btn-sm'><IconPark path={'ant-design:delete-outlined'} size={16} /></button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-danger rounded-5 w-100' style={{fontSize: '12px'}}><IconPark path={'ant-design:delete-outlined'} size={16} /> Delete Account</button>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default CustomerProfile