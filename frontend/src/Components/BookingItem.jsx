import React from 'react'

const BookingItem = ({data}) => {
    return (
        <div className='d-flex flex-column flex-wrap gap-1 justify-content-start column-gap-3 booking-item w-100 rounded-3 p-3'>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Reservation ID:</span>
                <span className='text-truncate flex-fill '>{data.id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Customer ID:</span>
                <span className='text-truncate flex-fill '>{data.customer_id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Customer ID:</span>
                <span className='text-truncate flex-fill '>{data.customer_id}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Address:</span>
                <span className='text-truncate flex-fill '>{data.address}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Schedule:</span>
                <span className='booking-value flex-fill text-truncate'>{data.schedule}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Creation Date:</span>
                <span className='booking-value   flex-fill text-truncate'>{data.creationDate}</span>
            </div>
            <div className='d-flex flex-column  align-items-start '>
                <span className='booking-label flex-fill'>Contact:</span>
                <span className='text-truncate flex-fill '>{data.phone}</span>
            </div>
        </div>
    )
}

export default BookingItem