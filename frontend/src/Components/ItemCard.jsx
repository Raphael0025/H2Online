import React from 'react'

const ItemCard = ({data}) => {
    const { item, max, stock, unitPrice } = data
    
    const calculateStatus = () => {
        const stockPercentage = (stock / max) * 100;
        if (stockPercentage <= 20) {
            return 'Low';
        } else if (stockPercentage <= 50) {
            return 'Half';
        }
        return 'Full';
    };

    const status = calculateStatus();

    return (
        <div className={`p-3 bg-light rounded-3 border-start border-5 ${status === 'Low' ? 'border-danger' : status === 'Half' ? 'border-warning' : 'border-success' }`} style={{width: '230px'}}>
            {/* <img src={imge} alt={imge} /> */}
            <div className='mt-2 d-flex flex-column itm-card'>
                <div className='d-flex justify-content-between'>
                    <span className='label'>Item</span>
                    <span className='lbl-val'>{item}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='label'>{`Stock (max. ${max} pcs)`}</span>
                    <span className='lbl-val'>{stock}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='label'>Unit Price</span>
                    <span className='lbl-val'>{unitPrice}</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='label'>Status</span>
                    <span className='lbl-val'>{status} Stock</span>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-2 mt-2'>
                    <div className='d-flex gap-2 justify-content-center align-items-center'>
                        <div className={`p-2 stat ${status === 'Low' ? 'bg-danger' : status === 'Half' ? 'bg-warning' : 'bg-success' }`} />
                        <span className='label'>Re-Stock</span>
                    </div>
                    <div className='d-flex gap-2'>
                        <button className='button-itm-outline rounded-3 p-2 px-3'>All</button>
                        <button className='button-itm rounded-3 p-2'>Partial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard