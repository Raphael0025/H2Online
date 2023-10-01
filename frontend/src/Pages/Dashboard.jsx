import React from 'react'
import { OverviewComponent } from '../Components'

const Dashboard = () => {
    const sampleData = [
        {
            header: 'Revenue',
            data: 'P 4,020',
            icon: 'ri:bar-chart-grouped-line'
        },
        {
            header: 'Profit',
            data: 'P 3,200',
            icon: 'tdesign:money'
        },
        {
            header: 'Total Customers',
            data: 500,
            icon: 'bi:people-fill'
        },
        {
            header: 'Expenses',
            data: 'P 100',
            icon: 'vaadin:money-withdraw'
        },
        {
            header: 'Un Paid Customers',
            data: 13,
            icon: 'fluent:people-error-20-filled'
        },
        {
            header: 'Daily Total Orders',
            data: 50,
            icon: 'solar:checklist-bold'
        },
        {
            header: 'For Pickup',
            data: 50,
            icon: 'game-icons:water-gallon'
        },
        {
            header: 'Booking',
            data: 4,
            icon: 'quill:checkmark-double'
        }
    ]

    return (
        <main id='dash' className='container-fluid  vh-100'>
            <section className='d-flex flex-wrap container-fluid gap-4 px-3 py-3 justify-content-center align-items-center'>
            {sampleData.map((data, indx) => (
                <OverviewComponent content={data} key={indx}/>
            ))}
            </section>
            <section className='px-3 py-3 d-flex'>
                <div className=''>
                    <h4 className='header'>Invoice Statistics</h4>
                    
                </div>
                <div className=''>

                </div>
            </section>
            <section>

            </section>
        </main>
    )
}

export default Dashboard