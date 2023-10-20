import React from 'react'
import { BookingItem } from 'Components'

const LogisticBooking = () => {
    const reservations = [
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        },
        {
            'id': '2587954632156312',
            'customer_id': '5687499621036520',
            'address': '558 M De Jesus St.',
            'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
            'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
            'phone': '09269607368'
        }
    ]
    
    return (
        <main id='booking' className='container-fluid h-100'>
            <div className='px-3 pt-3 heading'>
                <h2 className='border-bottom py-2 border-dark-subtle page-header'>Pickup Reservation</h2>
            </div>
            <section className='container-fluid p-3 d-flex gap-3 lists-container' >
                <section className='p-3 rounded-3 w-50 bg-light' style={{overflow: 'hidden'}}>
                    <div className='d-flex mb-2 justify-content-between align-items-center'>
                        <span className='inner-header'>Reservations</span>
                        <button className='button-itm py-2 px-3 rounded-3'>Book Now</button>
                    </div>
                    <div className='lists gap-3 d-flex flex-column pb-5 h-100'>
                        {reservations.map((reservation, indx) => (
                            <BookingItem key={indx} data={reservation} />
                        ))}
                    </div>
                </section>
                <section className='p-3 rounded-3 w-50 bg-light' style={{overflow: 'hidden'}}>
                    <div className='d-flex mb-2 justify-content-between align-items-center'>
                        <span className='inner-header'>Reservation Inquiries</span>
                        <button className='button-itm py-2 px-3 rounded-3'>Approved</button>
                    </div>
                    <div className='lists gap-3 d-flex flex-column pb-5 h-100'>
                        {reservations.map((reservation, indx) => (
                            <BookingItem key={indx} data={reservation} />
                        ))}
                    </div>
                </section>.
            </section>
        </main>
    )
}

export default LogisticBooking