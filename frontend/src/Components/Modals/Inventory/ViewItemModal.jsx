import React, { useState, useEffect } from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ViewItemModal = ({data}) => {
    const [inv, setInv] = useState({
        item: '',
        unitPrice: 1,
        stock: 1,
        max: 1,
        
    })

    useEffect(() => {
        if (data) {
            setInv({
                item: data.item || '',
                unitPrice: data.unitPrice || 1,
                stock: data.stock || 1,
                max: data.max || 1,
                
            });
        }
    }, [data])

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInv((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
    
    return (
        <div className={`modal fade`} id="viewItem" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">View Item Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2 px-3'>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='item' >Enter Item</label>
                                    <input value={inv.item} onChange={handleChange} type='text' id='item' className='p-2 bg-light rounded-3 w-100' placeholder='Enter Item' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='unitPrice' >Unit Price</label>
                                    <input value={inv.unitPrice} onChange={handleChange} type='number' min={1} id='unitPrice' className='p-2 bg-light rounded-3 w-100' placeholder='Unit Price' required />
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='stock' >Current Stock</label>
                                    <input type='number' value={inv.stock} onChange={handleChange} min={1} id='stock' className='p-2 bg-light rounded-3 w-100' placeholder='Current Stock' required />
                                </div>
                                <div className='d-flex flex-column w-100'>
                                    <label htmlFor='max' >Max Stock</label>
                                    <input type='number' value={inv.max} onChange={handleChange} min={1} id='max' className='p-2 bg-light rounded-3 w-100' placeholder='Max Stock' required />
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
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Delete <IconPark path={'material-symbols:delete-outline'} size={18} /></button>
                                <div className='d-flex gap-3'>
                                    <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                    <button className='button-itm py-2 px-3 rounded-3 text-uppercase d-flex align-items-center gap-2'>Update <IconPark path={'clarity:update-line'} size={18} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewItemModal