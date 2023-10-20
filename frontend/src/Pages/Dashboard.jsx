import React from 'react'
import { OverviewComponent, DoughnutChart, LineChart, AccordionTable } from 'Components'

const Dashboard = () => {
    const sampleData = [
        {
            header: 'Revenue',
            icon: 'ri:bar-chart-grouped-line'
        },
        {
            header: 'Profit',
            icon: 'tdesign:money'
        },
        {
            header: 'Total Customers',
            icon: 'bi:people-fill'
        },
        {
            header: 'Expenses',
            icon: 'vaadin:money-withdraw'
        },
        {
            header: 'Un Paid Customers',
            icon: 'fluent:people-error-20-filled'
        },
        {
            header: 'Daily Total Orders',
            icon: 'solar:checklist-bold'
        },
        {
            header: 'For Pickup',
            icon: 'game-icons:water-gallon'
        },
        {
            header: 'Booking',
            icon: 'quill:checkmark-double'
        }
    ]
    const contents = [ 'P 4,020', 'P 3,200', 500, 'P 100', 50, 50, 13, 4]

    const data = [25, 30, 15, 50]

    const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          age: 30,
          city: 'New York',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          age: 28,
          city: 'Los Angeles',
        },
        {
            id: 3,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 4,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 5,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 6,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 7,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 8,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 9,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 10,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 11,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 12,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 13,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 14,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 15,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 16,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
    ]
    
    const headers = ['Invoice ID', 'Date', 'Customer', 'Items', 'Total', 'Service', 'Payment', 'Vendor', 'Delivery']
    return (
        <main id='dash' className='container-fluid '>
            <section className='container-fluid px-3 py-3 d-grid overview-container'>
            {sampleData.map((data, indx) => (
                <OverviewComponent heading={data} content={contents[indx]} key={indx}/>
            ))}
            </section>
            <section className='px-3 py-3 d-grid statistic-container'>
                <div className='statistic rounded-3 p-3' style={{height: '350px'}}>
                    <h4 className='header m-0'>Daily Financial Metrics</h4>
                    <DoughnutChart data={data}/>
                </div>
                <div className='statistic rounded-3 p-3'  style={{height: '350px'}}>
                    <h4 className='header m-0'>Sales Growth</h4>
                    <LineChart />
                </div>
            </section>
            <section className='px-3 py-3 w-100'>
                <div className='statistic rounded-3 p-3'>
                    <h4 className='header'>Recent Invoices</h4>
                    <AccordionTable data={users} headers={headers} />
                </div>
            </section>
        </main>
    )
}

export default Dashboard