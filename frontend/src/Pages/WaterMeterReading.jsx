import React, {useState, useEffect} from 'react'
import {Table, MeterModal} from 'Components'
import { filterData } from 'Utils/handlingFunctions'
import { sampleMeterData } from 'Utils/initialData'

const WaterMeterReading = () => {
    const headers = ['Date', 'Morning Read', 'Evening Read']
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (sampleMeterData.length > 0) {
            // Call the handleFunction with sampleData
            const filteredContents = filterData(sampleMeterData, searchQuery);
            setFilteredData(filteredContents);
        }
    }, [searchQuery]);

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
                    <button className='button-itm rounded-3 py-2 px-3' data-bs-target="#meterRead" data-bs-toggle="modal">+ Add Read</button>
                </header>
                <div className='w-100 py-2' >
                    <Table headers={headers} data={filteredData} height={'525px'}/>
                </div>
            </section>
            <MeterModal />
        </main> 
    )
}

export default WaterMeterReading