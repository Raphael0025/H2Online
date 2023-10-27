import React, {useState, useEffect, useCallback} from 'react'
import { useLocation } from 'react-router-dom';
import { OverviewComponent, AccordionTable } from 'Components';
import {sampleCustomers} from 'Utils/initialData'

const CustomerProfile = () => {
    const content = [500, 50]
    const header = [
        {
            header: 'Agua Points',
            icon: 'bi:people-fill'
        },
        {
            header: 'Credit Balance',
            icon: 'solar:checklist-bold'
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
                        <AccordionTable rowColor={'white'} headers={headers} data={filteredContents} />
                    </div>
                </section>
            </section>
            <section className='p-3 ps-0' style={{width: '350px'}}>
                <section className='p-2 h-100 bg-light rounded-2'>
                    <span>Created on: </span>
                    <p>Name: {customerData.name}</p>    
                    <hr />
                    <p className='rounded-5 bg-info p-2' style={{fontSize: '12px'}}>Phone: {customerData.phone}</p>
                    <p className='rounded-5 bg-info p-2' style={{fontSize: '12px'}}>Address: {customerData.address}</p>
                    <div className='p-2'>
                        <span>Gallons Owned</span>

                    </div>
                    <button className='btn btn-danger rounded-5 w-100 '>Delete Account</button>
                </section>
            </section>
        </main>
    );
};

export default CustomerProfile