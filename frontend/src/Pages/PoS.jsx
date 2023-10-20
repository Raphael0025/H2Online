import React from 'react'

const PoS = () => {
    return (
        <main id='pos' className='container-fluid h-100'>
            <section className='container-fluid p-3 d-flex gap-3 '>
                <section className='container-fluid '>
                    <section className='bg-light p-3 h-100 rounded-3 mb-2'>
                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Refill <hr className='flex-fill ' /></h6>
                        <div className='d-flex flex-wrap gap-3'>

                        </div>

                        <h6 className='d-flex align-items-center gap-3 header-txt'>For Purchase <hr className='flex-fill ' /></h6>
                        <div className='d-flex flex-wrap gap-3'>

                        </div>
                    </section>
                    <div className='d-flex justify-content-end gap-3'>
                        <button className='rounded-5 px-3 py-2 button-itm'>Cancel</button>
                        <button className='rounded-5 px-3 py-2 button-itm'>Add to Credit</button>
                        <button className='rounded-5 px-3 py-2 button-itm'>Pay Later</button>
                    </div>
                </section>
                <section className='ord-summary '>
                    <section className='bg-light h-100 p-3 rounded-3 mb-2'>
                        <h6 className=' text-center '>Order Summary</h6>
                        <div className='d-flex flex-column w-100 mb-2'>
                            <h6 style={{fontSize: '11px'}}>Input Customer ID or Name</h6>
                            <input type='text' id='customer' className='w-100 p-1 px-2 rounded-3' placeholder='Input Customer ID or Name' style={{fontSize: '11px'}} />
                        </div>
                        <div className='d-flex flex-column w-100'>
                            <h6 style={{fontSize: '11px'}}>Delivery Address</h6>
                            <input type='text' id='delivery' className='w-100 p-1 px-2 rounded-3' placeholder='Delivery Address' style={{fontSize: '11px'}} />
                        </div>
                        
                        {/*Table here*/}
                        <div className='py-2'>
                            <h6 className='header-txt'>Shipping Option</h6>
                            <div className='d-flex gap-3'>
                                <button className='rounded-3 button-itm py-2 px-3 flex-fill'>On-Site</button>
                                <button className='rounded-3 button-itm py-2 px-3 flex-fill'>Delivery</button>
                                <button className='rounded-3 button-itm py-2 px-3 flex-fill'>Schedule Delivery</button>
                            </div>
                        </div>
                        <div className='py-2'>
                            <h6 className='header-txt'>Payment Methods</h6>
                            <div className='d-flex gap-3'>
                                <button className='rounded-3 button-itm py-2 px-3 flex-fill'>Cash</button>
                                <button className='rounded-3 button-itm py-2 px-3 flex-fill'>GCash</button>
                            </div>
                        </div>
                        <div className='p-2 rounded-2 d-flex flex-column gap-3' style={{backgroundColor: '#9EDBFF50'}}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Discount(%)</h6>
                                <input type='text' className='rounded-3 px-3' style={{width: '60px'}} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='header-txt m-0'>Sub Total</h6>
                                <span>P{'100.00'}</span>
                            </div>
                        </div>
                        <div className='py-2 d-flex justify-content-between align-items-center'>
                            <h6 className='header-txt fs-4'>Total</h6>
                            <span className='text-primary'>P{'75.00'}</span>
                        </div>
                    </section>
                    <button className='w-100 rounded-5 px-3 py-2 button-itm'>Pay Now</button>
                </section>
            </section>
        </main>
    )
}

export default PoS