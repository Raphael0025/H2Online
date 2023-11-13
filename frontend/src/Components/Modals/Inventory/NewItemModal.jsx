import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const NewItemModal = () => {
    return (
        <div className={`modal fade`} id="newItem" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">New Item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='itm' >Enter Item</label>
                                    <input type='text' id='itm' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='unit_price' >Unit Price</label>
                                    <input type='number' min={1} id='unit_price' className='p-2 bg-light rounded-3 w-100' placeholder='Unit Price' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='curr_stock' >Current Stock</label>
                                    <input type='number' min={1} id='curr_stock' className='p-2 bg-light rounded-3 w-100' placeholder='Current Stock' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='max_stock' >Max Stock</label>
                                    <input type='number' min={1} id='max_stock' className='p-2 bg-light rounded-3 w-100' placeholder='Max Stock' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2 flex-column'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='itm_img' >Item Image</label>
                                    <input type='file' id='itm_img' className='p-2 bg-light rounded-3 w-100' placeholder='Item Image' required />
                                </div>
                                <div className="dropdown">
                                    <button className="button-itm-outline text-primary bg-light w-100 py-2 px-3 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Category </button>
                                    <ul className="dropdown-menu">
                                        <li><p className="dropdown-item">Water Containers</p></li>
                                        <li><p className="dropdown-item">Water Container Seals</p></li>
                                        <li><p className="dropdown-item">Reward</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'basil:cancel-outline'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Create <IconPark path={'mdi:cash-check'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewItemModal