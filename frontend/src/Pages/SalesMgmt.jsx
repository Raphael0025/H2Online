import React, {useState} from 'react'
import { OverviewComponent, AccordionTable, Table } from 'Components'

const SalesMgmt = () => {
    const headers = [
        {
            'header': 'Revenue',
            'icon': 'ri:bar-chart-grouped-line'
        },
        {
            'header': 'Profit',
            'icon': 'tdesign:money'
        },
        {
            'header': 'Expense',
            'icon': 'vaadin:money-withdraw'
        },
        {
            'header': 'Total Credits',
            'icon': 'fluent:people-error-20-filled'
        },
        {
            'header': 'Total Settled Credits',
            'icon': 'quill:checkmark-double'
        }
    ]
    const contents = ['P 2000', 'P 750', 'P 1000', 'P 1500', 'P 1200']
    const [selectedTab, setSelectedTab] = useState('All');
    const tableHeader = ['Order ID', 'Date', 'Customer', 'Items', 'Total', 'Service', 'Payment', 'Vendor', 'Delivery']
    const tableData = [
        {
            id: '7946137845128951',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Paid',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128952',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Credited',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128953',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Paid',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128954',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Paid',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128955',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Paid',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128956',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Paid',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128957',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Pending',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128958',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Credited',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128959',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Credited',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128960',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Credited',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128961',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Pending',
            vendor: 'Kristine',
            delivery: 'Complete'
        },
        {
            id: '7946137845128962',
            date: 'Oct 10, 2023',
            customer: 'Raphael Isla',
            items: 2,
            total: 50.00,
            service: 'Refill',
            payment: 'Pending',
            vendor: 'Kristine',
            delivery: 'Complete'
        }
    ]
    const productsSoldHeaders = ['Product', 'Price', 'Sold(pcs)', 'Interactions']
    const productsSoldData = [
        {
            product: 'Square Gallon',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        },
        {
            product: 'Round Gallon',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        },
        {
            product: '250 ml',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        },
        {
            product: 'Square Gallon',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        },
        {
            product: '10 Liters',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        },
        {
            product: '500 ml',
            price: 500.00,
            pcs: 50,
            interactions: 'Purchase'
        }
    ]
    const expensesHeaders = ['Date', 'Item', 'Quantity', 'Unit Price', 'Amount']
    const expensesData = [
        {
            date: 'Oct 10, 2023, Mon, 3:30 PM',
            item: 'ballpen',
            qty: 2,
            unit_price: 8,
            total: 16.00
        },
        {
            date: 'Oct 10, 2023, Mon, 3:30 PM',
            item: 'Food Allowance',
            qty: 2,
            unit_price: 60,
            total: 120.00
        },
        {
            date: 'Oct 10, 2023, Mon, 3:30 PM',
            item: 'Merienda',
            qty: 2,
            unit_price: 20,
            total: 40.00
        },
        {
            date: 'Oct 10, 2023, Mon, 3:30 PM',
            item: 'Glue Stick',
            qty: 3,
            unit_price: 20,
            total: 60.00
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
        <main id='sales' className='container-fluid'>
            <div className='mx-3 pt-3 pb-2 d-flex justify-content-between border-bottom border-dark-subtle'>
                <h2 className='m-0 page-header'>Overview</h2>
                <button className='rounded-3 button-itm px-3'>Generate Report</button>
            </div>
            <section className='container-fluid p-3 d-flex' style={{gap: '20px'}} >
            {headers.map((data, indx) => (
                <OverviewComponent heading={data} content={contents[indx]} width={'100%'} key={indx}/>
            ))}
            </section>
            <section className='container-fluid px-3'>
                <h6 className='header-txt'>Daily Sales</h6>
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
                <AccordionTable headers={tableHeader} rowColor={'un-select-two'} data={filteredData} height={'300px'} />
            </section>
            <section className='container-fluid p-3 d-flex gap-3'>
                <div className='bg-light flex-fill p-3 rounded-3'>
                    <h6 className='header-txt'>Products Sold</h6>
                    <Table headers={productsSoldHeaders} data={productsSoldData} height={'250px'}/>
                </div>
                <div className='bg-light flex-fill p-3 rounded-3'>
                    <div className='d-flex justify-content-between pb-2'>
                        <h6 className='header-txt'>Expenses</h6>
                        <button className='button-itm rounded-3 py-2 px-3'>Add Expense</button>
                    </div>
                    <Table headers={expensesHeaders} data={expensesData} height={'250px'}/>
                </div>
            </section>
        </main>
    )
}

export default SalesMgmt