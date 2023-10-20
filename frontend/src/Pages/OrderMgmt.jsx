import React, {useState} from 'react'
import { AccordionTable, OverviewComponent2 } from 'Components'

const OrderMgmt = () => {
    const headers = ['Daily Sales', 'Paid Order', 'Pending Payment', 'Credited']
    const content = ['P 2000', 'P 750', 'P 1000', 'P 250']
    const captions = ['80 Total of Orders', '30 Total of Orders Paid', '40 Total of Pending Payments', '10 Total of Credited Orders']
    const [selectedTab, setSelectedTab] = useState('All');

    const tableHeader = ['Order ID', 'Date', 'Customer', 'Items', 'Total', 'Payment', 'Vendor', 'Delivery']
    const tableData = [
        {
            id: '7946137845128951',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Paid',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128952',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Credited',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128953',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Paid',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128954',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Paid',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128955',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Paid',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128956',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Paid',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128957',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Pending',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128958',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Credited',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128959',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Credited',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128960',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Credited',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128961',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Pending',
            vendor: 'Kristine',
            Delivery: 'Complete'
        },
        {
            id: '7946137845128962',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            Total: 50.00,
            payment: 'Pending',
            vendor: 'Kristine',
            Delivery: 'Complete'
        }
    ]

    // Filter the data based on the selected tab
    const filteredData = tableData.filter((data) => {
        if (selectedTab === 'All') {
            return true; // Show all data
        }
        return data.payment.toLowerCase() === selectedTab.toLowerCase();
    });

    return (
        <main id='order' className='container-fluid h-100'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Order List</h2>
            </div>
            <section className='container-fluid p-3 d-grid overview-container' >
            {headers.map((data, indx) => (
                <OverviewComponent2 heading={data} content={content[indx]} caption={captions[indx]} key={indx}/>
            ))}
            </section>
            <section className='container-fluid px-3'>
                <header className='d-flex justify-content-between align-items-end mb-3 px-3'>
                    <ul className='nav gap-2'>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('All')}>All</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Pending')}>Pending</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Credited')}>Credited</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link itm `} onClick={() => setSelectedTab('Paid')}>Completed</button>
                        </li>
                    </ul>
                </header>
                <AccordionTable headers={tableHeader} rowColor={'un-select-two'} data={filteredData} height={'400px'}/>
            </section>
        </main>
    )
}

export default OrderMgmt