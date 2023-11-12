import React from 'react'
import {IconPark} from 'Assets/SvgIcons'

const ReduceCreditModal = () => {
    return (
        <div className={`modal fade`} id="reduceCredit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={true}>
            <div className="modal-dialog ">
                <div className="modal-content" style={{background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.175)'}}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-6" id="staticBackdropLabel">Reduce Credit Balance</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form action='/point-of-sales' className='d-flex flex-column gap-2'>
                            <div>
                                <h6 className='header-txt'>Credit Amount</h6>
                            </div>
                            <div className='py-2 px-0 d-flex modal-footer justify-content-between'>
                                <button type='button' data-bs-dismiss="modal" className='button-itm-outline-dngr py-2 px-3 rounded-3 text-uppercase'>Cancel <IconPark path={'ic:sharp-update-disabled'} size={18} /></button>
                                <button type='submit' className='button-itm py-2 px-3 rounded-3 text-uppercase'>Update <IconPark path={'clarity:update-line'} size={18} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduceCreditModal