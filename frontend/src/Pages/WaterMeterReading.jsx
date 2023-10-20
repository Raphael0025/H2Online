import React, {useState} from 'react'
import {Table} from 'Components'

const WaterMeterReading = () => {
    const sampleData = [
        {
            date: "May/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Jun/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Jan/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Feb/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },        {
            date: "Mar/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Apr/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Jul/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Sep/19/2023",
            readAM: "97240165",
            readPM: "99133168"
        },        {
            date: "Oct/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Aug/5/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Aug/9/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "Aug/29/2023",
            readAM: "97240165",
            readPM: "99133168"
        },        {
            date: "Aug/19/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/1/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/6/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/7/2023",
            readAM: "97240165",
            readPM: "99133168"
        },        {
            date: "May/18/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/11/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/13/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/14/2023",
            readAM: "97240165",
            readPM: "99133168"
        },        {
            date: "May/15/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/4/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/3/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
        {
            date: "May/20/2023",
            readAM: "97240165",
            readPM: "99133168"
        },
    ]
    const headers = ['Date', 'Morning Read', 'Evening Read']

    const [searchQuery, setSearchQuery] = useState('')
    const filteredContents = sampleData.filter(content =>
        content.date.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main id='meter' className='container-fluid'>
            <div className='px-3 pt-3'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Water Meter Reading</h2>
            </div>
            <section className='container-fluid px-3 pb-3'>
                <header className='d-flex justify-content-between align-items-end'>
                    <div className='d-flex flex-column'>
                        <label htmlFor='search' >Search by date...</label>
                        <input type='text' id='search' className='p-2 rounded-3' placeholder='Search by date...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                    <button className='button-itm rounded-3 py-2 px-3'>+ Add Read</button>
                </header>
                <div className='w-100 py-2' >
                    <Table headers={headers} data={filteredContents} height={'525px'}/>
                </div>
            </section>
        </main> 
    )
}

export default WaterMeterReading